# Zur BeamMP Dokumentation beitragen

BeamMP verwendet [Material for MkDocs](https://squidfunk.github.io/mkdocs-material) sowie [MkDocs](https://www.mkdocs.org) . Die vollständige Dokumentation finden Sie auf den jeweiligen Websites.

## Erste Schritte

Um zu dieser Dokumentation beizutragen, können Sie einen der beiden Ansätze wählen:

### 1. Bearbeiten Sie die rohen Markdown-Dateien

Das Bearbeiten der rohen Markdown-Dateien ist der schnellste Ansatz und eignet sich am besten für schnelle Änderungen wie Rechtschreibung, Grammatik oder neue Inhaltsausschnitte. Dieser Ansatz erfordert jedoch Vorkenntnisse über Markdown, da Sie verstehen müssen, was Ihre Änderung bewirken wird.

Wenn dies der Ansatz ist, den Sie wählen möchten, befolgen Sie bitte diese Schritte:

1. Klicken Sie auf der Seite, die Sie bearbeiten möchten, auf Bearbeiten.
2. Forken Sie das Projekt in Ihr eigenes GitHub-Konto.
3. Nehmen Sie die Änderungen vor, die Sie für richtig halten.
4. Übernehmen Sie Ihre Änderungen in Ihren Fork.
5. Stellen Sie [hier](https://github.com/BeamMP/Docs) einen Pull-Request für unser Repository.

Sobald Sie Ihren Pull-Request erstellt haben, wird jemand vom BeamMP-Mod-Team Ihren Pull-Request prüfen und ihn entweder genehmigen oder Änderungen anfordern. Wenn Änderungen angefordert wurden und Sie diese abgeschlossen haben, werden wir Ihren Pull-Request erneut prüfen. Anschließend werden Ihre Änderungen im Repository zusammengeführt und im Rahmen unserer kontinuierlichen Integration automatisch bereitgestellt.

### 2. Nehmen Sie Änderungen mit der Live-Vorschau vor

Wenn Sie unsere Dokumentation auf diese Weise bearbeiten, erfolgt dies ähnlich wie bei Option 1. Allerdings können Sie auf diese Weise eine Vorschau Ihrer Änderungen anzeigen.

1. Klicken Sie auf der Seite, die Sie bearbeiten möchten, auf Bearbeiten.
2. Forken Sie das Projekt in Ihr eigenes GitHub-Konto.
3. Klonen Sie das Projekt lokal.
4. Richten Sie Material for MkDocs gemäß der Anleitung [hier](https://squidfunk.github.io/mkdocs-material/getting-started/) ein
5. Führen Sie `mkdocs serve` aus, um den Live-Reload-Docs-Server von dort aus zu starten, wo Sie den Fork geklont haben.
6. Nehmen Sie die Änderungen vor, die Sie für richtig halten.
7. Übernehmen Sie Ihre Änderungen in Ihren Fork.
8. Stellen Sie [hier](https://github.com/BeamMP/Docs) einen Pull-Request für unser Repository.

## Projektlayout

```
mkdocs.yml # Die Konfigurationsdatei.
docs/
index.md # Die Dokumentations-Homepage.
... # Andere Markdown-Seiten, Bilder und andere Dateien.
```
