!!! warning "Questo sito è in costruzione!"

    Questo sito è attualmente in fase di lavorazione.

    Pensate di poter aiutare? Per favore, fatelo cliccando sulla pagina con una matita a destra!

    Questo può essere fatto anche su qualsiasi altra pagina.

# Per iniziare

Per iniziare a sviluppare per BeamMP avrai bisogno di almeno queste cose:

- BeamNG.drive, installato in locale
- BeamMP, installato in locale; come minimo il launcher, anche il server se necessario
- Git, installato in locale, e un account di GitHub.com
- Un editor di codice, come VSCode o notepad++

---
# Differenze tra mod, launcher e server

BeamMP è diviso in tre componenti principali:

- La mod è caricata da BeamNG, come qualsiasi altra mod per il gioco. La sua funzione principale è quella di stabilire una connessione in locale con il launcher e mostrare gli elementi di interfaccia utente per il multiplayer. È scritta principalmente in Lua, con parti in JavaScript, HTML e CSS per gli elementi di UI. Il suo repo è [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)
- Il launcher stabilisce una connessione costante alla mod, quando necessario apre una connessione al server selezionato in gioco, infine si occupa del login del giocatore tramite il backend di BeamMP. È scritto principalmente in C++, viene precompilato da BeamMP e il suo repo è [https://github.com/BeamMP/BeamMP-Launcher](https://github.com/BeamMP/BeamMP-Launcher)
- Il server stabilisce una connessione tra uno o più launcher, inoltre manda "heartbeat" al backend di BeamMP contenenti diverse informazioni tra cui l'IP, la porta, la versione, il numero di giocatori, ecc. Gestisce ed esegue plugin Lua lato server. È scritto in C++, viene precompilato da BeamMP per diversi sistemi operativi e architetture CPU, il suo repo è [https://github.com/BeamMP/BeamMP-Server](https://github.com/BeamMP/BeamMP-Server)

---
# Creare un ambiente di sviluppo per lavorare sulla mod

## Usare una cartella unpacked per BeamNG

Per lavorare in modo efficiente alle mod in BeamNG è molto consigliato usare una cartella `unpacked`, invece di ricreare zip dopo ogni cambiamento.

Apri la cartella utente di BeamNG navigando a `%appdata%/Local/BeamNG.drive/0.xx/mods` dove `xx` è l'ultima versione di BeamNG.
Crea una cartella chiamata `unpacked` all'interno della cartella `mods`.

Altre informazioni riguardo la cartella utente si possono qui [https://documentation.beamng.com/support/userfolder/](https://documentation.beamng.com/support/userfolder/)

## Abilitare la modalità sviluppatore per il launcher BeamMP

Per evitare che gli aggiornamenti automatici cancellino la tua git clone locale, bisogna disabilitarli usando `--no-download`.
Se non vuoi che il launcher apra BeamNG e vuoi vedere stampe di debug, è consigliato usare `--dev`.

| Parametri                             | Note                                       |
|:--------------------------------------|:-------------------------------------------|
| `--help` o `-h`                       | Stampa a video questa lista di parametri |
| `--port <port>` o `-p`                | Cambia la porta di ascolto da quella di default a `<port>`. Deve essere configurata anche in gioco |
| `--verbose` o `-v`                    | Modalità verbosa, stampa messaggi di debug |
| `--no-download`                       | Salta il download e l'installazione della mod Lua di BeamMP |
| `--no-update`                         | Salta l'aggiornamento automatico del launcher (bisognerà aggiornare manualmente) |
| `--no-launch`                         | Salta l'avvio automatico del gioco (bisognerà avviare il gioco manualmente) |
| `--dev`                               | Modalità sviluppatore, equivalente a --verbose --no-download --no-launch --no-update |
| `--game <args...>` o `-- <args...>`   | Passa dei parametri al gioco |

## Clonare il repo di BeamMP nella cartella unpacked

Nonostante si possa copiare manualmente i file di BeamMP dal nostro repo di Github, è consigliato usare un sistema di source-control come git.
Per prima cosa crea una fork di [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)

La cosa più efficiente sarebbe quella di clonare il repo direttamente nella cartella `unpacked`.

Per `git`, lanciare `git clone https://github.com/yourName/BeamMP` da una finestra PowerShell o CMD, avviata nella cartella `unpacked`.
Controlla che nella cartella utente di BeamNG non ci sia alcuna cartella `multiplayer` in `mods` e che invece ci sia `unpacked/beammp`.

Ora puoi provare la modalità sviluppatore. Avvia il launcher BeamMP, avvia BeamNG manualmente, controlla che BeamMP sia l'unica mod attiva.
Dovresti riuscire a giocare normalmente.

Usando un editor di codice, puoi aggiungere o cambiare codice direttamente dalla cartella `unpacked`.
In seguito alle modifiche ricarica Lua in gioco premendo `Ctrl+L` (e `F5` se hai effettuato modifiche all'interfaccia utente).

Quando sei soddisfatto delle modifiche, puoi effettuare una commit tramite git. Guarda [il sito Git-SCM](https://git-scm.com/doc) per guide e documentazione sull'utilizzo di Git. Non appena hai effettuato commit e push (al tuo repo), puoi aprire una pull-request.

Chiedi pure nel canale #scripting nel nostro [Discord](https://discord.gg/beammp) se hai dei problemi.

---
# Creare un server in locale

Mentre si lavora su BeamMP può essere d'aiuto l'utilizzo di un server in locale. Puoi seguire la [guida di installazione del server](docs/en/server/create-a-server.md) saltando i primi due passi per quanto riguarda le connessioni locali.

Imposta il server come privato in `serverConfig.toml` e puoi usare una qualunque stringa come `AuthKey`.

---
# Linee guida per contribuire

Per i dettagli riguardo la formattazione del codice, formato dei messaggi di commit, migliori pratiche per lo sviluppo, ecc. leggere il file `CONTRIBUTING.md` presente in ogni repo. Questo file contiene informazioni dettagliate su come contribuire. Il file `README.md` in ogni repo, di solito contiene anche dei passi per compilare il codice (per i progetti precompilati).
