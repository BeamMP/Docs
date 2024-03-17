# Zur BeamMP Dokumentation beitragen

BeamMP verwendet [Material for MkDocs](https://squidfunk.github.io/mkdocs-material) sowie [MkDocs](https://www.mkdocs.org) . Die vollständige Dokumentation finden Sie auf den jeweiligen Websites.

## Getting Started

Um zu dieser Dokumentation beizutragen, können Sie einen der beiden Ansätze wählen:

### 1. Edit the raw markdown files

Das Bearbeiten der rohen Markdown-Dateien ist der schnellste Ansatz und eignet sich am besten für schnelle Änderungen wie Rechtschreibung, Grammatik oder neue Inhaltsausschnitte. Dieser Ansatz erfordert jedoch Vorkenntnisse über Markdown, da Sie verstehen müssen, was Ihre Änderung bewirken wird.

If this is the approach you wish to take then please follow these steps:

1. Click edit on the page you wish to edit.
2. Fork the project into your own GitHub account.
3. Make the changes you see fit.
4. Commit your changes to your fork.
5. Stellen Sie [hier](https://github.com/BeamMP/Docs) einen Pull-Request für unser Repository.

Sobald Sie Ihren Pull-Request erstellt haben, wird jemand vom BeamMP-Mod-Team Ihren Pull-Request prüfen und ihn entweder genehmigen oder Änderungen anfordern. Wenn Änderungen angefordert wurden und Sie diese abgeschlossen haben, werden wir Ihren Pull-Request erneut prüfen. Anschließend werden Ihre Änderungen im Repository zusammengeführt und im Rahmen unserer kontinuierlichen Integration automatisch bereitgestellt.

### 2. Make edits with live preview

Wenn Sie unsere Dokumentation auf diese Weise bearbeiten, erfolgt dies ähnlich wie bei Option 1. Allerdings können Sie auf diese Weise eine Vorschau Ihrer Änderungen anzeigen.

1. Click edit on the page you wish to edit.
2. Fork the project into your own GitHub account.
3. Clone the project locally.
4. Richten Sie Material for MkDocs gemäß der Anleitung [hier](https://squidfunk.github.io/mkdocs-material/getting-started/) ein
5. Run `mkdocs serve` to start the live-reloading docs server from where you cloned the fork to.
6. Make the changes that you see fit.
7. Commit your changes to your fork.
8. Stellen Sie [hier](https://github.com/BeamMP/Docs) einen Pull-Request für unser Repository.

## Project layout

```
mkdocs.yml # Die Konfigurationsdatei.
docs/
index.md # Die Dokumentations-Homepage.
... # Andere Markdown-Seiten, Bilder und andere Dateien.
```
