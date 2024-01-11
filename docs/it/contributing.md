# Contribuire alla creazione di BeamMP Docs

BeamMP utilizza come tema [Material per MkDocs](https://squidfunk.github.io/mkdocs-material). Questo tema è per [MkDocs](https://www.mkdocs.org).
La documentazione completa è disponibile ai rispettivi siti web.

## Per cominciare

Se vuoi aiutare contribuendo a questa documentazione puoi seguire uno dei due approcci qui sotto:

### 1. Modificare direttamente i file markdown

Modificare direttamente i file markdown è il metodo più veloce per correzioni grammaticali, ortografici o nuove parti del contenuto.
Questo modo necessita di una conoscenza del linguaggio di Markdown, siccome devi essere alla luce di ciò che il tuo contributo produrrà.

Se questo metodo fa per te, segui questi passi:

1. Clicca "Modifica" sulla pagina che desideri modificare.
2. Fai una fork del progetto sul tuo account GitHub personale.
3. Fai le modifiche che vuoi.
4. Fai commit dei cambiamenti sulla tua fork.
5. Apri una pull request sul nostro repo [qui](https://github.com/BeamMP/Docs).

Una volta che avrai creato la pull request, qualcuno del team di BeamMP la controllerà e potrà approvarla o richiedere delle modifiche.
Nel caso fossero richieste delle correzioni, a seguito del loro completamento ri-controlleremo la pull request.
La tua pull request, quando viene approvata, verrà unita tramite merge al repo e sarà automaticamente rilasciata al pubblico.

### 2. Modificare con l'anteprima live

La modifica della documentazione in questo modo è molto simile all'opzione 1, ma potrai vedere un'anteprima dei cambiamenti effettuati.

1. Clicca "Modifica" sulla pagina che desideri modificare.
2. Fai una fork del progetto sul tuo account GitHub personale.
3. Clona il progetto in locale.
4. Prepara Material per MkDocs seguendo la loro guida [qui](https://squidfunk.github.io/mkdocs-material/getting-started/).
5. Esegui `mkdocs serve` per avviare il server per visualizzare l'anteprima live da dove hai clonato la fork.
6. Fai le modifiche che vuoi.
7. Fai commit dei cambiamenti sulla tua fork.
8. Apri una pull request sul nostro repo [qui](https://github.com/BeamMP/Docs).


## Layout del progetto

	mkdocs.yml    # File di configurazione.
	docs/
		index.md  # La homepage della documentazione.
		...       # Altre pagine markdown, immagini e altri file.
