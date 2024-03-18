# BeamMP Docs README

Welcome to the BeamMP Docs GitHub Repository. We are glad you are here because this hopefully means you are looking to help the project out by contributing some of your time towards improving this! Please check out the below as this will help you get started.

# Contributing to the BeamMP Docs

BeamMP is using [Material for MkDocs](https://squidfunk.github.io/mkdocs-material) as its theme. This is a theme for [MkDocs](https://www.mkdocs.org).
Full documentation can be found at their respective sites.

## Getting Started

To help contribute to these docs you can take one of two approaches as set out below:

### 1. Edit the raw markdown files

Editing the raw markdown files is the fastest approach and best for quick edits such as spelling, grammar or new snippets of content. 
This approach does require a prior knowledge of markdown however as you will need to understand what your contribution will produce.

If this is the approach you wish to take then please follow these steps:

1. Click edit on the page you wish to edit.
2. Fork the project into your own GitHub account.
3. Make the changes you see fit.
4. Commit your changes to your fork.
5. Raise a pull request against our repository [here](https://github.com/BeamMP/Docs).

Once you have created your pull request one of the BeamMP Mod Team will review your Pull Request and either approve it or request some changes.
If changes were requested and you have completed them we will re-review your Pull Request.
Then your changes will be merged into the repository and automatically deployed as part of our continuous integration.

### 2. Make edits with live preview

Editing our docs this way will still take a similar approach as in option 1 however you will be able to preview your changes this way.

1. Click edit on the page you wish to edit.
2. Fork the project into your own GitHub account.
3. Clone the project locally.
4. Setup Material for MkDocs according to their guide [here](https://squidfunk.github.io/mkdocs-material/getting-started/)
5. Install the required plugins using the following command: `pip install mkdocs-material mkdocs-git-revision-date-localized-plugin "mkdocs-material[imaging]" mkdocs-static-i18n[material]`
6. Run `mkdocs serve` to start the live-reloading docs server from where you cloned the fork to.
7. Make the changes that you see fit.
8. Commit your changes to your fork.
9. Raise a pull request against our repository [here](https://github.com/BeamMP/Docs).


## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

## Translations

The BeamMP Docs are translated in multiple languages. The current progress of this sits at: [![gitlocalized ](https://gitlocalize.com/repo/9180/whole_project/badge.svg)](https://gitlocalize.com/repo/9180?utm_source=badge)

We use [GitLocalize](https://gitlocalize.com/) for managing this. You can contribute if you wish here: https://gitlocalize.com/repo/9180

The individual language progress is as follows:

| Language | Badge                                                                                                                     |
|----------|---------------------------------------------------------------------------------------------------------------------------|
| German   | [![gitlocalized ](https://gitlocalize.com/repo/9180/de/badge.svg)](https://gitlocalize.com/repo/9180/de?utm_source=badge) |
| Spanish  | [![gitlocalized ](https://gitlocalize.com/repo/9180/es/badge.svg)](https://gitlocalize.com/repo/9180/es?utm_source=badge) |
| French   | [![gitlocalized ](https://gitlocalize.com/repo/9180/fr/badge.svg)](https://gitlocalize.com/repo/9180/fr?utm_source=badge) |
| Italian  | [![gitlocalized ](https://gitlocalize.com/repo/9180/it/badge.svg)](https://gitlocalize.com/repo/9180/it?utm_source=badge) |
| Russian  | [![gitlocalized ](https://gitlocalize.com/repo/9180/ru/badge.svg)](https://gitlocalize.com/repo/9180/ru?utm_source=badge) |
| Chinese  | [![gitlocalized ](https://gitlocalize.com/repo/9180/zh/badge.svg)](https://gitlocalize.com/repo/9180/zh?utm_source=badge) |

> [!NOTE]
> GitLocalize may show some paragraphs as "not translated" while in fact they already are, messing up the whole page.
>
> Please double check if the page is already translated before committing anything!
