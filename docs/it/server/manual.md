# Manuale d'uso del server

# Contesto

Il server è influenzato dallo stato di diversi parametri esterni:

- La cartella "Resources"
- L'ENV (il contesto del processo)
- Gli argomenti da linea di comando
- Il file `ServerConfig.toml`
- La cartella di lavoro

## Cartella "Resources"

La cartella "Resources" è creata al primo avvio del server, insieme alle sottocartelle "Client" e "Server".
La cartella "Server" accetta altre cartelle al suo interno, ognuna contenente almeno un file `.lua`. Ciascuna delle cartelle nella cartella "Server" è considerato un "Plugin". I file `.lua` contenuti nel livello di cartelle più alto all'interno del plugin a seguito di una modifica sono ricaricati durante l'esecuzione.
La cartella "Client" accetta *solo* file `.zip` che sono caricati all'avvio del server e non mutano durante l'esecuzione.

## ENV

Con la versione v3.2.0, il server BeamMP accetta varaibili di contesto, che **sovrascrivono** le impostazioni contenute nel file `ServerConfig.toml`. Tutte le variabili che esistono nella sezione "General" seguono la convenzione [PascalCase](https://it.wikipedia.org/wiki/Notazione_a_cammello), le variabili di contesto sono IN_MAIUSCOLO e con il prefisso `BEAMMP_`. Per esempio il campo `MaxPlayers` convertito IN_MAIUSCOLO diventa `MAX_PLAYERS` (si noti il `_` all'inizio di una nuova parola) e con il prefisso diventa `BEAMMP_MAX_PLAYERS`. Questa formattazione è seguita per tutte le impostazioni della sezione "General". Altri esempi di seguito:

- `AuthKey` -> `BEAMMP_AUTH_KEY`
- `Port` -> `BEAMMP_PORT`
- `Description` -> `BEAMMP_DESCRIPTION`
- ...ecc.

Qualsiasi variabile di contesto corrispondenti a un parametro di configurazione che è una stringa o un numero, deve essere una stringa, ad esempio `BEAMMP_NAME="Cool Server"`, `BEAMMP_NAME=Server1`, `BEAMMP_PORT=12345`.
Le variabili di contesto che corrispondono a un parametro di configurazione che è booleano (true/false, on/off) devono essere `true` o `1` (entrambi significano ON), o qualsiasi altro valore (significa OFF).

## Argomenti da linea di comando

Avvia il server BeamMP con l'argomento `--help` per scoprirne di più. Ad esempio: `./BeamMP-Server --help`.

## ServerConfig.toml

Questo file è generato al primo avvio. I commenti all'interno del file sono il modo migliore e più aggiornato per capire che cosa faccia ogni impostazione.

## Cartella di lavoro

La cartella di lavoro del server, e non la posizione dell'eseguibile del server, è il fattore decisivo per la generazione di `ServerConfig.toml`, dei file di log e della cartella "Resources".

# Limitazioni

Le seguenti limitazioni sono imposte dal backend e riguardano il server:

- Il nome del server è limitato a 250 caratteri.
- La descrizione del server è limitata a 1000 caratteri.
- La mappa è limitata a 100 caratteri.
- I tag sono limitati a 100 caratteri.