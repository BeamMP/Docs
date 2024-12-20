# Manutenzione del server

Guide e suggerimenti per come configurare e mantenere al meglio il Server BeamMP.

## Come installare

Per delle istruzioni dettagliate, per favore guarda [la nostra guida](create-a-server.md).

## Il file ServerConfig

Il file per la configurazione del server, chiamato `ServerConfig.toml`, è in [formato TOML](https://toml.io/en/).

*NOTA*: Il *vecchio* file di configurazione chiamato `Server.cfg`, non è più utilizzato e il server ti avviserà nel caso sia ancora presente. I due formati di configurazione **non** sono compatibili tra loro.

Il file ha una sezione di default chiamata `[General]`, che contiene i seguenti valori:

| Chiave      | Tipo di valore                                                                                                       | Descrizione                                                                                                                                                                                                          |
|-------------|----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AuthKey     | Formato della AuthKey `xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` dove le x sono caratteri alfanumerici (numeri e lettere) | Usato per identificare il tuo server nel backend. Dovresti averne una avendo seguito la guida di installazione del server.                                                                                           |
| Debug       | true /false                                                                                                          | Quando è abilitato (true) mostrerà diversi messaggi in più nei log e fornirà più informazioni. Abilita questo valore se incontri dei problemi. Abilitare questo valore farà aumentare la dimensione del file di log. |
| Private     | true/false                                                                                                           | Quando è abilitato (true) il tuo server non sarà visibile nella lista pubblica dei server. Le persone con l'IP e la porta del server potranno però connettersi.                                                      |
| Description | Qualunque "testo"                                                                                                    | La descrizione del server sarà visibile a tutti (se il server è pubblico). Puoi usare caratteri speciali per formattare il testo con diversi colori e stili.                                                         |
| Name        | Qualunque "testo"                                                                                                    | Il nome / titolo del tuo server che apparirà nella lista dei server. Puoi usare caratteri speciali per formattare il testo con diversi colori e stili.                                                               |
| Map         | Una posizione valida della mappa, come `/levels/gridmap_v2/info.json`                                                | La mappa del tuo server. Può essere una delle mappe predefinite del gioco (una lista di tali mappe è presente qui sotto) o come una mod del server.                                                                  |
| MaxCars     | Qualunque numero ≥ 1                                                                                                 | Il numero massimo di veicoli per giocatore. Ulteriori veicoli che un giocatore proverà a caricare saranno rimossi immediatamente.                                                                                    |
| Port        | 1024-65535                                                                                                           | La porta sulla quale il server sarà raggiungibile. Un giocatore che volesse connettersi direttamente al tuo server necessiterà del tuo IP e di questa porta.                                                         |

Altre sezioni possono e devono essere usate dai plugin del server (la API Lua è in arrivo), così: `[MyMod]`.

La AuthKey **DEVE** essere impostata da te. Di base sarà un valore vuoto che dovrà essere riempito con con la tua AuthKey ottenuta seguendo la guida di installazione. Non condividere questa chiave con nessuno e negli screenshot offuscala.

### Tutti i nomi delle mappe vanilla

Di seguito ci sono tutte le mappe vanilla:

- /levels/gridmap_v2/info.json
- /levels/johnson_valley/info.json
- /levels/automation_test_track/info.json
- /levels/east_coast_usa/info.json
- /levels/hirochi_raceway/info.json
- /levels/italy/info.json
- /levels/jungle_rock_island/info.json
- /levels/industrial/info.json
- /levels/small_island/info.json
- /levels/smallgrid/info.json
- /levels/utah/info.json
- /levels/west_coast_usa/info.json
- /levels/driver_training/info.json
- /levels/derby/info.json

### Personalizza l'aspetto del nome del tuo server

Puoi usare questi simboli prima del tuo testo per applicarci un effetto:

| Valore | Descrizione                      |
|:------:|----------------------------------|
| `^r`   | Reset                            |
| `^p`   | A capo (solo per le descrizioni) |
| `^n`   | Sottolineato                     |
| `^l`   | Grassetto                        |
| `^m`   | Barrato                          |
| `^o`   | Corsivo (italico)                |
| `^0`   | Nero                             |
| `^1`   | Blu                              |
| `^2`   | Verde                            |
| `^3`   | Turchese                         |
| `^4`   | Rosso                            |
| `^5`   | Rosa                             |
| `^6`   | Arancione                        |
| `^7`   | Grigio                           |
| `^8`   | Grigio scuro                     |
| `^9`   | Viola chiaro                     |
| `^a`   | Verde chiaro                     |
| `^b`   | Azzurro                          |
| `^c`   | Arancione scuro                  |
| `^d`   | Rosa chiaro                      |
| `^e`   | Giallo                           |
| `^f`   | Bianco                           |

### Personalizza i tag del server

Le etichette del server possono aiutare le persone a filtrare la ricerca per un tipo specifico di server. Il tuo file serverConfig.toml genererà in automatico l'etichetta `Tags = "Freeroam"`.

Puoi aggiungere ulteriori etichette separandole con una virgola `Tags = "Events,Offroad,lang:english"`, non c'è differenza tra maiuscole o minuscole.

Puoi scegliere tra le seguenti etichette:

   - Età/Contenuto:
       - `Mature/18+`

   - Tipo di gameplay:
       - `Freeroam`
       - `Roleplay`
       - `Economy`
       - `Traffic`

   - Categorie di corse:
       - `Racing`
       - `Racing:NASCAR`
       - `Racing:Track`
       - `Racing:Drag`
       - `Racing:Rally`
       - `Touge`

   - Fuori strada e sfide:
       - `Offroad`
       - `Crawling`
       - `Dakar`
       - `Challenge`

   - Demolition derby:
       - `Derby`
       - `Arena`

   - Condizioni meteo e orario:
       - `Snow/Ice`
       - `Rain`
       - `Night`
       - `Weather`

   - Modalità di gioco:
       - `Gamemode`
       - `Gamemode:Racing`
       - `Gamemode:Rally`
       - `Gamemode:Drag`
       - `Gamemode:Derby`
       - `Gamemode:Infection`
       - `Gamemode:Cops-Robbers`
       - `Gamemode:Delivery`
       - `Gamemode:Sumo`

   - Comunità ed eventi:
       - `Scenarios`
       - `Events`
       - `Leaderboard`

   - Mod:
       - `Modded`
       - `Mod:BeamPaint`
       - `Mod:BeamJoy`
       - `Mod:CEI`

   - Lingua:
       - `Lang:English`
       - `Lang:Russian`
       - `Lang:French`
       - `Lang:Spanish`
       - `Lang:Portuguese`
       - `Lang:German`
       - `Lang:Polish`
       - `Lang:Arabic`

   - Altro:
       - `Vanilla`
       - `Moderated`


Se manca qualche etichetta da questa lista, siete pregati di creare una richiesta per aggiungerla [qui](https://forum.beammp.com/t/introducing-server-tags/1320081).

## Il file Server.log

Questo file è generato automaticamente quando il server è avviato. Contiene tutti i messaggi visualizzati nella console del server. È buona norma allegare questo file nel caso chiedessi aiuto al nostro staff di supporto; in questo file non è mai presente la tua AuthKey quindi puoi inviarlo senza alcuna modifica.

Il formato dei messaggi è spiegato di seguito:

```
[$DATA $ORA] $CONTESTO [$LIVELLO_DI_LOG] $MESSAGGIO
```

Dove:

- `$DATA` è la data del messaggio, per esempio 21/07/2021
- `$ORA` è l'ora del messaggio, per esempio 11:05:23
- `$CONTESTO` (visibile soltanto se la variabile Debug è abilitata) è il contesto del messaggio che può essere:
	- `(ID giocatore) “Nome Giocatore”`, dove l'ID del giocatore è utile per la moderazione
	- Un nome corto come “HeartbeatThread”
- `$LIVELLO_DI_LOG` è il livello di importanza del messaggio:
	- `DEBUG`: Visibile solo se la variabile Debug è abilitata, importante solo per gli sviluppatori
	- `INFO`: Informazioni generali
	- `LUA`: Messaggio da un plugin Lua
	- `WARN`: Descrive qualcosa che di solito non dovrebbe accadere
	- `ERROR`: Descrive qualcosa che è andato storto, o un imprevisto
	- `FATAL`: Descrive qualcosa che ha causato l'arresto del server
- `$MESSAGGIO` il messaggio in se al quale devi prestare attenzione e capire. In alcuni casi il messaggio può essere criptico, ma in generale se il server funziona e non ci sono messaggi ERROR, non ci sono problemi.

## Aggiornare il server

### Perché aggiornare

Quando un aggiornamento è rilasciato, è sempre consigliato aggiornare il server. Di solito le nuove versioni portano risoluzioni di bug, maggiore stabilità e correzioni di sicurezza senza dimenticare nuove funzionalità.

Per rimanere aggiornato sulle nuove versioni, puoi seguire il canale "updates" sul nostro Discord, guardare sul nostro forum o guardare la [pagina delle release di GitHub](https://github.com/BeamMP/BeamMP-Server/releases).

### Come aggiornare

#### Se stai usando un fornitore di hosting partner

Se stai usando un fornitore di hosting partner, le seguenti istruzioni non funzioneranno. Si consiglia di attendere ulteriori dettagli dal proprio fornitore di hosting o di contattarlo per ricevere assistenza.

#### Gestire il server autonomamente

Il server è aggiornabile cambiando l'eseguibile vecchio del server con quello nuovo. Se non sai come farlo, di seguito troverai le istruzioni.

Se hai compilato i file sorgente, ri-compila di nuovo i file. Prima di ri-compilare i file esegui `git submodule update --init --recursive` in un terminale.

#### Su Windows

1. Assicurati di aver installato i [Visual C++ Redistributables](https://aka.ms/vs/17/release/vc_redist.x64.exe), necessari per eseguire il server.
2. Scarica l'eseguibile del server da [beammp.com](https://www.beammp.com/). Dovresti trovarti con un file chiamato `BeamMP-Server.exe`.
3. Chiameremo il file appena scaricato "nuovo eseguibile".
4. Vai nella cartella dove è presente il corrente `BeamMP-Server.exe` (normalmente la stessa cartella con `ServerConfig.toml`). Chiameremo questo eseguibile "vecchio eseguibile".
5. Sposta il nuovo eseguibile nella cartella di quello vecchio sovrascrivendolo.

#### Su Linux

1. Vai su [beammp.com](https://www.beammp.com/) e clicca il pulsante "Download server", sarai reindirizzato alla pagina Github delle release del server.
2. Scarica la versione corretta per la tua distribuzione. Per semplicità sarà chiamata `BeamMP-Server-xxx` durante la guida, dove `xxx` è la versione per la distribuzione che stai usando.
3. Chiameremo il file appena scaricato "nuovo eseguibile".
4. Vai nella cartella dove è presente il corrente `BeamMP-Server-xxx` (normalmente la stessa cartella con `ServerConfig.toml`). Chiameremo questo eseguibile "vecchio eseguibile".
5. Sposta il nuovo eseguibile nella cartella di quello vecchio sovrascrivendolo.
6. Apri un terminale, naviga alla cartella dove si trova `BeamMP-Server-xxx` e incolla il comando `chmod +x BeamMP-Server-xxx`. Questo farà in modo che si abbiano i permessi per eseguire il server.

### Aggiornamenti automatici

Il server non supporta (ancora) gli aggiornamenti automatici.

Puoi però vedere quale sia l'ultima versione disponibile tramite la API di GitHub, con una richiesta GET da `https://api.github.com/repos/BeamMP/BeamMP-Server/git/refs/tags`.