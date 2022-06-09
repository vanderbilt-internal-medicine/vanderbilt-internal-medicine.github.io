
![Twitter Follow](https://img.shields.io/twitter/follow/VUMCMedicineRes?style=social)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fvimbook.beauhilton.com)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/vanderbilt-internal-medicine/vimbook)

# neovimbook

This repository has the contents of the Vanderbilt Internal Medicine Handbook.


## contributing


### getting access

Create an account on [GitHub](https://github.com/).
It's free.
Then shoot an email to one of the maintainers of the vimbook (e.g. beau.hilton@vumc.org)
to be added to the organization.


### finding the files

On each page on [vimbook.org](vimbook.beauhilton.com)
there is a small pencil icon in the top right.
If you are logged into GitHub,
have been granted editing access,
and click this button,
it will take you right to a file editor for that page.

Alternatively, if you are already here on GitHub,
the working files are in folders in the [docs directory](https://github.com/vanderbilt-internal-medicine/vimbook/tree/main/docs).
Click into the folder you want, then into the file you want,
and click the pencil icon above and to the right of the text.


### making edits

Markdown is a very simple text format
that closely resembles the formatting
we tend to use in medical documentation.
E.g. a single `#` is used to denote a top-level header,
multiple `##` denote sub-headings,
`-` are used to denote list items,
`*` around things mark them as important.

The tool that builds the website will
convert this markup into prettier and uniform styles,
so you don't have to worry about getting the indentation or font just right.

Here's a [cheat sheet](https://www.markdownguide.org/cheat-sheet/)
for the main formatting options.

While you're editing on GitHub,
you can preview a general version of what the website
will look like by clicking the "Preview" tab
next to the "Edit File" tab at the top of the text editor.

The only major complexity you might run into in Markdown is making tables.

<details>
  <summary> expand for more on tables </summary>

If you have a simple table, use Markdown tables, described [here](https://www.markdownguide.org/extended-syntax/#tables).
(That link also contains a link to an [online tool](https://www.tablesgenerator.com/markdown_tables)
that makes the task much less tedious.)

If you have a complex table,
e.g. the [options for CAD evaluation](https://vimbook.beauhilton.com/cardiology/cardiology-chest-pain/#diagnostic-studies),
where the "Indications" column has cells that span several rows,
you may need to fall back to html tables,
which are a bit more complicated but by no means intractable.
Contact one of the maintainers.
If you can, make your table in Excel/Google Sheets/Word first (style it up how you like in one of those tools)
and send the file or link with your email.

If you're feeling intrepid,
you can make your html table yourself using this [online tool](https://www.tablesgenerator.com/html_tables),
which is a visual editor similar to Excel or Google Sheets,
with buttons for merging cells, etc.,
that will output the html table code.
It supports copy-paste from Excel/Sheets/Word.
(pro-tip: click the "Do not generate CSS" button)

</details>


### saving changes

When you've made all the changes you'd like,
save them by clicking the "Commit changes" button
all the way at the bottom of the editing page.
If you'd like, you can give a brief description of what you changed
in the text boxes just above the button
(the first text box is for a short description of changes,
has a character limit of 50, which is usually plenty,
but if you have something more extensive to say you can overflow into the larger second box).

The website takes a few minutes to rebuild and redeploy,
but will go live as soon as this process is done.


### discussions and suggestions

Plain old emails works great,
but GitHub also has facilities for discussions and suggestions
that are preferred over email because they are public and collaborative.

[Discussion page](https://github.com/vanderbilt-internal-medicine/vimbook/discussions) for the Vanderbilt Internal Medicine organization.

[Suggestions and issues page](https://github.com/vanderbilt-internal-medicine/vimbook/issues) for the vimbook specifically.
