import pandas as pd
import pypandoc
from bs4 import BeautifulSoup
from requests_html import HTMLSession

session = HTMLSession()


def get_top_links(url: str):

    r = session.get(url)
    links = [link for link in r.html.absolute_links if "commodorecompendium" in link]

    return links


def get_subject_links(url: str):
    r = session.get(url)
    subjects = r.html.find("#content", first=True)
    links = [link for link in subjects.absolute_links if "commodorecompendium" in link]
    return links


def get_html(url: str):
    r = session.get(url)
    content = r.html.find("#content", first=True)
    return content.html


def convert_table(table):
    df = pd.read_html(str(table))[0]
    table.string = df.to_html(index=False)
    return table


links = get_top_links("https://medsites.vumc.org/commodorecompendium/introduction")

for link in links:
    try:
        subjects = get_subject_links(link)
        for subject in subjects:
            try:
                print("\n", subject)
                res = get_html(subject)
                soup = BeautifulSoup(res, "lxml")

                try:
                    tables = soup.find_all("table")
                    for table in tables:
                        convert_table(table)
                except Exception as exc:
                    print(f"no table in {subject}, {exc}")

                for data in soup(["script", "head"]):
                    data.decompose()
                soup = soup.prettify(formatter=None)

                file_name = f"{link.split('/')[-1]}-{subject.split('/')[-1]}"
                html_file = f"content/html/{file_name}.html"

                md_file = f"content/md/{file_name}.md"
                with open(html_file, "w", encoding="utf-8") as f:
                    f.write(str(soup))

                output = pypandoc.convert_file(
                    source_file=html_file,
                    format="html-native_divs-native_spans",
                    to="gfm",
                    outputfile=md_file,
                )

                # make first line a # header so bookdown will work
                with open(md_file) as f:
                    firstline = f.readline()
                    lines = f.readlines()
                lines[0] = f"# {firstline} \n"
                with open(md_file, "w") as f:
                    f.writelines(lines)

            except Exception as exc:
                print(f"no table in {subject}, {exc}")

    except Exception as exc:
        print(exc)
