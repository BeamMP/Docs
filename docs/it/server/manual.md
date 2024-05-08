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

### Impostazioni generali

Con la versione v3.2.0, il server BeamMP accetta variabili di contesto, che **prevalgono** sulle impostazioni contenute nel file `ServerConfig.toml`. Tutte le variabili che esistono nella sezione "General" seguono la convenzione [PascalCase](https://it.wikipedia.org/wiki/Notazione_a_cammello), le variabili di contesto sono IN_MAIUSCOLO e con il prefisso `BEAMMP_`. Per esempio il campo `MaxPlayers` convertito IN_MAIUSCOLO diventa `MAX_PLAYERS` (si noti il `_` all'inizio di una nuova parola) e con il prefisso diventa `BEAMMP_MAX_PLAYERS`. Questa formattazione è seguita per tutte le impostazioni della sezione "General". Esistono le seguenti variabili ENV:

- `BEAMMP_DEBUG`
- `BEAMMP_PRIVATE`
- `BEAMMP_PORT`
- `BEAMMP_MAX_CARS`
- `BEAMMP_MAX_PLAYERS`
- `BEAMMP_MAP`
- `BEAMMP_NAME`
- `BEAMMP_DESCRIPTION`
- `BEAMMP_TAGS`
- `BEAMMP_RESOURCE_FOLDER`
- `BEAMMP_AUTH_KEY`
- `BEAMMP_LOG_CHAT`

Qualsiasi variabile di contesto corrispondente a un parametro di configurazione che è una stringa o un numero, deve essere una stringa, ad esempio `BEAMMP_NAME="Cool Server"`, `BEAMMP_NAME=Server1`, `BEAMMP_PORT=12345`.
Le variabili di contesto che corrispondono a un parametro di configurazione che è booleano (true/false, on/off) devono essere `true` o `1` (entrambi significano ON), o qualsiasi altro valore (significa OFF).

### Impostazioni per i provider

Queste variabili di contesto permettono ai fornitori di host (e altri utenti con un gran numero di server), qui denominati "providers", di sovrascrivere alcune impostazioni specifiche per i provider.

#### `BEAMMP_PROVIDER_PORT_ENV` (da v3.3.0)

Quando non è una stringa vuota, questa variabile rimpiazza `BEAMMP_PORT` con un'altra in modo tale da poter leggere la variabile da un ENV esistente. Per esempio Pterodactyl può esporre `SERVER_PORT` come un ENV. Per usarla con il server BeamMP si dovrebbe scrivere `BEAMMP_PORT=${SERVER_PORT}`, che è macchinoso.

Ora invece si può usare `BEAMMP_PROVIDER_PORT_ENV="SERVER_PORT"`, che fa leggere al server la porta dalla variabile ENV `SERVER_PORT`.

#### `BEAMMP_PROVIDER_DISABLE_CONFIG` (da v3.3.0)

Se impostata a `1` oppure `true`, il file `ServerConfig.toml` **non è generato** e **non è letto** se esiste. La `BEAMMP_AUTH_KEY` deve essere impostata per far funzionare il server.

#### `BEAMMP_PROVIDER_UPDATE_MESSAGE` (da v3.2.2)

Quando non è una stringa vuota, questa variabile rimpiazza l'intero messaggio per l'aggiornamento, che di default è "NEW VERSION IS OUT! Please update to the new..." ecc.
È **OBBLIGATORIO** che il tuo messaggio contenga da qualche parte `{}`, che il server poi sostituirà con il numero della nuova versione. Per esempio, il tuo messaggio per l'aggiornamento può essere così:
```sh
BEAMMP_PROVIDER_UPDATE_MESSAGE="Una NUOVA VERSIONE di BeamMP-Server è stata rilasciata: {}! Per favore segui questa guida per aggiornare: https://example.com/update-guide"
```
Che risulterà in un messaggio così:
```
Una NUOVA VERSIONE di BeamMP-Server è stata rilasciata: v5.0.2! Per favore segui questa guida per aggiornare: https://example.com/update-guide
```

Per favore assicurati di rendere chiaro agli utenti che devono aggiornare il server e spiega loro come farlo.

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
