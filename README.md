
![Twitter Follow](https://img.shields.io/twitter/follow/VUMCMedicineRes?style=social)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fvimbook.beauhilton.com)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/vanderbilt-internal-medicine/vimbook)

# VIMbook

This repository has the contents of the Vanderbilt Internal Medicine Handbook (VIMBook).


## contributing


### getting access

Create an account on [GitHub](https://github.com/).
It's free.
Then shoot an email with your username to one of the maintainers of the vimbook (e.g. beau.hilton@vumc.org)
to be added to the organization.


### finding the files and opening them for editing

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


### editing basics

The website is written in a simple text format called "Markdown,"
and you can edit the files right here on GitHub.

<details>
  <summary> expand for more on Markdown </summary>

---

Markdown is a very simple text format
that closely resembles the formatting
we tend to use in medical documentation.
E.g. a single '#' is used to denote a top-level header,
multiple '##' denote sub-headings,
'\-' are used to denote list items
(put a blank line before you start a new list,
or markdown will think you're just putting a hyphen into a sentence),
'\*' around things mark them as important.

The tool that builds the website will
convert this markup into prettier and uniform styles,
so you don't have to worry about getting the indentation or font just right.

Here's a [cheat sheet](https://www.markdownguide.org/cheat-sheet/)
for the main formatting options.

---

</details>

While Markdown is simple,
and tables in Markdown are usually simple,
sometimes they're a little tricky.
See below for help.

<details>
  <summary> expand for more on tables </summary>

---

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

---

</details>

You may want to add images. No problem! See below.

<details>
  <summary> expand for more on adding images</summary>

---

Below are some examples and best practices.

Here's a link for more on
[images in Markdown](https://www.markdownguide.org/basic-syntax/#images-1).

First, make sure you have the rights to the image
(i.e. you made it,
  it's protected under public domain or fair use,
  or you obtained rights from the appropriate source)

Then, the basic approach (add this line into your document):

`![cat](/docs/images/500.jpg)`

 Which will result in:

![cat](/docs/images/500.jpg)

The exclamation point is shorthand
that tells Markdown you would like to place an image here.

The brackets contain the "alt-text" for your image,
which is a brief description, useful for those with sight-related disability.
You can also see the alt-text if you hover your mouse over the image,
or long-press on a touch device.

Next you need to tell Markdown how to find the image file.

The image in the example lives in our repository,
in the "images" folder that lives under the "docs" folder.

All images should go here.

[Direct link to images folder](https://github.com/vanderbilt-internal-medicine/vimbook/tree/main/docs/images)

If you navigate to that folder,
you can drag and drop images from your file system,
or click the "+" button above and to the right of the list of files,
then "Upload files."

Give each image a descriptive name,
e.g. `parasternal-long.jpg` instead of just `image92.jpg`.
(`500.jpg` is 500 pixel image of a cute cat, included for testing).

A full example might look something like:

`![parasternal long view of cardiac ultrasound](../images/parasternal-long.jpg)`

**Important Note**

That `/docs/images/500.jpg` and `../images/parasternal-long.jpg`
business in the examples
tells the computer how to navigate your files and folders,
starting from wherever your current file is and going down into subfolders,
to find the file you want.

Because the section files for this book live in subfolders of `docs`,
you need to tell Markdown to go up to the main docs folder before looking
for the images folder. This is easy to do, but also easy to forget.

The parasternal-long example shows how to do it;
The `..` part is ancient computer shorthand for "go up one folder."

Since the images will always live in the same folder,
and the section files will always be in subfolders one level down from `docs`,
the most foolproof way to add a new image is to copy the whole parasternal-long example,
and only change the name of the image and the alt text.

---

</details>

While you're editing on GitHub,
you can preview a general version of what the website
will look like by clicking the "Preview" tab
next to the "Edit File" tab at the top of the text editor.

### formatting guidelines

Use existing sections as templates.
Most of the time you will be updating existing sections,
so should be able to drop your changes in-line.

<details>
  <summary> expand for more on formatting </summary>

---

File names: `subject-section.md`, e.g. `cardiology-acs.md`

Text formatting:

_rough example (adjusted to fit in this document):_

## topic du jour

Author-Name McGee, Author-Name ZcGee

---

### Background

in the beginning...

### Presentation

and then (s)he...

### Management

---

_end example._

Every section should start with a single '#',
which denotes a top-level header ("h1").
You can have no more than one section with a top-level header,
or the internal table of contents for each page will break.

Next put a blank line,
followed by the author name[s], in alphabetical order if more than one.

Then another blank line, and "---".
This will add a line before the text proper starts.

Most sections will have a single layer of subsections,
e.g. "Background", "Presentation", "Evaluation", "Management".
These should each be second-level headers, i.e. "##".

Sub-subsections (e.g. the "Management" subsection of ACS has sub-subsections for STEMI, NSTEMI, etc.) should each be third-level headers, i.e. "###".

You can use deeper levels of subsections (e.g. "####"),
but the website engine doesn't differentiate after the third level,
so readers won't be able to tell how deep the organizational rabbit hole goes.
Attempt to flatten the organization so you don't require deeper sectioning,
or consider splitting the topic into multiple topics.

---

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
