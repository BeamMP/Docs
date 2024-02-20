# Installazione del server

## **Creazione del server**
Basi per la creazione di un server

---
### **Introduzione**

**Creare un server per BeamMP è facile e veloce!**

I server sono una parte integrante di BeamMP, tutti i giocatori sono connessi tra loro attraverso il server. I server possono funzionare nativamente su Windows e Linux.

Puoi creare server privati, ai quali si possono connettere solo persone che inviti, o server pubblici, che saranno visibili sulla nostra ufficiale lista di server.

Per far funzionare correttamente un server è necessario seguire alcuni passi! È abbastanza semplice, ma se hai dei problemi, chiedi pure sul nostro [Forum](https://forum.beammp.com) o sul nostro [server Discord](https://discord.gg/beammp) nel canale `#support`. Fai anche riferimento alla sezione di [Manutenzione Server](server-maintenance.md) per ulteriori informazioni.

Assicurati di aver letto e compreso la [LICENZA](https://raw.githubusercontent.com/BeamMP/BeamMP-Server/master/LICENSE) del server prima dell'uso.

Nota: _Il server supporta esclusivamente indirizzi IPv4\. Se non sai che tipo di indirizzo usi, visita il sito_ [_whatsmyip.org_](https://www.whatsmyip.org/) _- se l'indirizzo contiene_ `_:_` _due punti, è di tipo **IPv6**. In tal caso devi investigare più a fondo e capire se hai a disposizione anche un indirizzo IPv4\. Per far ciò puoi telefonare al tuo ISP chiedendo informazioni a riguardo, o chiedi a qualcuno che se ne intende che conosci. Il supporto per gli indirizzi IPv6 è in programma._

## Configurare il server

La configurazione consiste di pochi passi che sono obbligatori da seguire.

### 1. Port forwarding

_Se stai utilizzando un VPS (Virtual Private Server) o un Rootserver, puoi generalmente saltare questo passo. Se non sei sicuro di cosa sia un VPS o Rootserver, non lo stai usando._

Questo passo è necessario se vuoi che qualcuno all'esterno della tua casa ("all'esterno del tuo network locale o LAN") possa accedere al server.

Questo passo è praticamente il medesimo per tutti i server di gioco, come i server di Minecraft, quindi puoi trovare molte guide su internet riguardo all'argomento, anche per il tuo router in specifico. Una buona guida è [la seguente](https://www.aranzulla.it/come-aprire-le-porte-del-router-31808.html). Assicurati di aggiungere nelle regole di forwarding la porta **30814** sia in protocollo **TCP** sia in **UDP**.

La **porta** di default può essere cambiata con quella che desideri, basta che non sia già utilizzata da altri servizi e che il numero sia >1024. Ricordati o segnati quale porta hai scelto se non usi quella predefinita\. Il forwarding deve essere sempre fatto sia in protocollo **TCP** sia in **UDP**.

Se hai dei problemi, chiedi pure sul nostro [Forum](https://forum.beammp.com) o sul nostro [server Discord](https://discord.gg/beammp) nel canale `#support`.

#### 1.1 Firewall

A seconda della tua configurazione, potresti dover aggiungere BeamMP-Server alle regole del tuo firewall. Questo è il caso di Windows (spegnere il firewall di solito **non** funziona) e su molti server Linux pre-configurati.

Qui, come nel caso del port forwarding, devi permettere il traffico **sia in entrata sia in uscita** e sia **TCP** sia **UDP** di BeamMP-Server attraverso il firewall. Se invece il tuo firewall richiede una porta, usa la stessa utilizzata nel passo precedente ("1\. Port forwarding").

Se hai dei problemi, chiedi pure sul nostro [Forum](https://forum.beammp.com) o sul nostro [server Discord](https://discord.gg/beammp) nel canale `#support`.

### 2. Ottenere una chiave di autenticazione

La chiave di autenticazione, spesso chiamata "AuthKey", è necessaria per creare un server **pubblico**, ma è **consigliato** usarla anche per i server privati.

Ti servirà un account [Discord](https://discord.com) per questo passo. Discord è necessario per evitare problemi di spam.

#### 2.1. Accedere alla pagina delle chiavi

Fai il login con Discord al [Keymaster](https://beammp.com/keymaster).
Dalla homepage del Keymaster, clicca su "Keys" a sinistra dello schermo:

<figure markdown>
  ![](/assets/content/keymaster_homepage.png)
</figure>

#### 2.2. Creare una chiave

Per creare una chiave clicca il "+" verde presente in alto a destra.

<figure markdown>
  ![](/assets/content/keymaster_new_key.png)
</figure>

#### 2.3. Compilare i dati per la chiave

Inserisci il nome del server (questo è solo il nome per la chiave, non è il nome vero e proprio del server), poi clicca "Create", ad esempio:

<figure class="image image_resized" style="width:44.84%;" markdown>
  ![](/assets/content/keymaster_server_name.png)
</figure>

Il risultato dovrebbe essere simile a questo:

<figure markdown>
  ![](/assets/content/keymaster_key_done.png)
</figure>

**NON CONDIVIDERE MAI QUESTA CHIAVE. TRATTALA COME UNA PASSWORD**

Hai un numero limitato di chiavi. Puoi utilizzare una chiave su un server per volta, quindi non puoi far partire due server con la stessa chiave nello stesso momento.

#### 2.4. Copiare la chiave

Copia il testo del campo "key", in questo esempio è `3173a2e-6az0-4542-a3p0-ddqq5ff95558` e tienilo pronto per il passo successivo. Puoi fare questo cliccando l'icona a destra della chiave:

<figure markdown>
  ![](/assets/content/keymaster_copy_key.png)
</figure>

### 3. Installazione

Il BeamMP-Server è disponibile per Windows e Linux. Le prossime due sezioni sono dedicate all'installazione su Windows e Linux rispettivamente.

#### 3.a Installazione su Windows

Per l'installazione su Linux, salta alla sezione succesiva.

Ricordati di fare il port forwarding, altrimenti il tuo server non sarà raggiungibile al pubblico!

1. Assicurati di aver installato i [Visual C++ Redistributables](https://aka.ms/vs/17/release/vc_redist.x64.exe), necessari per eseguire il server.
2. Scarica l'eseguibile del server da [beammp.com](https://www.beammp.com/). Dovresti trovarti con un file chiamato `BeamMP-Server.exe`.
3. Una volta scaricato, crea una cartella dove desideri e sposta al suo interno `BeamMP-Server.exe`. Qui è dove il server risiederà.
4. Avvia il server cliccandoci due volte. Questo genererà tutti i files necessari e quando vedi del testo sul terminale, puoi chiuderlo. Dovresti vedere questo file chiamato `ServerConfig.toml` nella stessa cartella di `BeamMP-Server.exe`.
5. (opzionale) Per accedere velocemente al server, crea un collegamento al desktop **cliccando col tasto destro** su `BeamMP-Server.exe` > **Invia a** > **Desktop (crea collegamento)**.

Procedi ora al passo "4\. Configurazione".

#### 3.b Installazione su Linux

##### Utilizzando la build precompilata (consigliato)

Questo passo è valido per tutte le distribuzioni Linux per cui offriamo i files binari [qui](https://github.com/BeamMP/BeamMP-Server/releases/latest). Se usi una distribuzione o architettura differente, salta al passo "Compilazione file sorgente".

1. Assicurati di avere installato tutte le dipendenze che sono elencate [qui](https://github.com/BeamMP/BeamMP-Server#runtime-dependencies).
2. Vai su [beammp.com](https://www.beammp.com/) e clicca il pulsante "Download server", sarai reindirizzato alla pagina Github delle release del server.
3. Scarica la versione corretta per la tua distribuzione. Per semplicità sarà chiamata `BeamMP-Server-xxx` durante la guida, dove `xxx` è la versione per la distribuzione che stai usando.
4. Una volta scaricato, crea una cartella dove desideri e sposta al suo interno `BeamMP-Server-xxx`. Qui è dove il server risiederà.
5. Apri un terminale, naviga alla cartella dove si trova `BeamMP-Server-xxx` e incolla il comando `chmod +x BeamMP-Server-xxx`. Questo farà in modo che si abbiano i permessi per eseguire il server.
6. Avvia il server con il comando `./BeamMP-Server-xxx`. Questo genererà tutti i files necessari e quando vedi del testo sul terminale, puoi chiuderlo. Dovresti vedere questo file chiamato `ServerConfig.toml` nella stessa cartella di `BeamMP-Server-xxx`.
7. (opzionale) È consigliato creare un utente chiamato `beammpserver` (o simile), siccome **non** raccomandiamo di eseguire il server come root, sudo o con il proprio utente personale. Dovresti poi rendere possibile l'esecuzione del server solo da questo utente.

Procedi ora al passo "4\. Configurazione".

##### Compilazione file sorgente

È molto probabile, ma non è stato ufficialmente provato, che BeamMP-Server per Linux funzioni su distribuzioni differenti da quelle per cui offriamo i files binari [qui](https://github.com/BeamMP/BeamMP-Server/releases/latest). Se vuoi compilare i codice sorgente puoi farlo, scaricando il codice dal nostro [GitHub](https://github.com/BeamMP/BeamMP-Server), una guida si può trovare [qui](https://github.com/BeamMP/BeamMP-Server#build-instructions).

Infine ricordati di eseguire il server con il comando `./BeamMP-Server-xxx`, dopodiché vai al passo successivo.

### 4. Configurazione

Dopo che il server è stato avviato almeno una volta, dovrebbe aver creato diversi files e mostrato un paio di errori; questo perché manca ancora qualcosa. La tua cartella dovrebbe contenere questi files:

<figure markdown>
  ![](/assets/content/after-running-once.png)
</figure>

Potrebbero chiamarsi `ServerConfig`, `Server` e `BeamMP-Server` senza estensioni, ma è corretto anche questo!

Apri `ServerConfig.toml` con un editor di testo come `Blocco note`. Per fare ciò **click col tasto destro** > **Apri con** > **Blocco note** o un qualsiasi altro editor di testo.

Dovresti vedere qualcosa di simile a questo:
```TOML
[General]
AuthKey = ''
Debug = false
Description = 'BeamMP Default Description'
Map = '/levels/gridmap_v2/info.json'
MaxCars = 1
MaxPlayers = 10
Name = 'BeamMP Server'
Port = 30814
Private = false
ResourceFolder = 'Resources'
```

Questo è il tuo file di configurazione. Utilizza un formato chiamato TOML. Fai anche riferimento alla sezione di [Manutenzione Server](server-maintenance.md) per maggiori informazioni.

Per ora ci interessa soltanto il campo `AuthKey`. Incolla tra le virgolette `''` la chiave ottenuta nel passo "2\. Ottenere una chiave di autenticazione".

Per questo esempio, dovrà essere così:
```TOML
AuthKey = '3173a2e-6az0-4542-a3p0-ddqq5ff95558'
```

Dai anche un nome al tuo server tramite il campo `Name`. Puoi utilizzare colori e altri tipi di formattazione seguendo le indicazioni di [questa sezione](server-maintenance.md#personalizza-laspetto-del-nome-del-tuo-server) della pagina di manutenzione del server.

Se hai scelto una **porta** differente da **30814** inseriscila al posto di quella predefinita in `Port`.

**IMPORTANTE:** Il tuo server **non** sarà visibile sulla lista di server fintanto che `Private = true`. _Se_ vuoi rendere visibile su tale lista il tuo server, metti `Private = false`.

### 5. Verifica di corretto funzionamento

Avvia nuovamente il server e guarda se mostra altri messaggi con l'etichetta `[ERROR]`. La finestra deve rimanere aperta. A questo punto puoi avviare BeamMP utilizzando il BeamMP-Launcher e dovresti trovare il tuo server con il nome specificato nel file `ServerConfig.toml` nella lista dei server.

---

## Come aggiungere mod al tuo server

Sia le mod dei veicoli che una mappa mod, vanno inserite nella cartella `Resources/Client` all'interno della cartella del server.

### Mod generiche

Se ti interessa aggiungere mod di veicoli, basta aggiungerle alla cartella `Resources/Client`. Verranno scaricate automaticamente da chiunque si connetta al server.

### Mappe

Tutte le mappe ufficiali del gioco (quindi che non sono mod) non necessitano di essere installate, devi soltanto cambiare il valore del campo `Map` del file `ServerConfig.toml` con una di [queste stringhe](server-maintenance.md#tutti-i-nomi-delle-mappe-vanilla). Per mappe non ufficiali (mod), bisogna fare così:

1. Inserire il file `.zip` della mappa nella cartella `Resources/Client` all'interno della cartella del server.
2. Apri il file `.zip` della mappa senza estrarlo e naviga alla cartella `/levels/`. In questa cartella ce ne dovrebbe essere un'altra con il nome della mappa, ad esempio `myawesomedriftmap2021`. Copia o ricordati questo nome _esattamente come è scritto su tale cartella_.
3. Apri il file `ServerConfig.toml`. Nel campo `Map` dovresti vedere il valore `/levels/MAPNAME/info.json`, dove `MAPNAME` è molto probabilmente `gridmap_v2`. Cambia `MAPNAME` col nome della cartella del passo precedente, per questo esempio `myawesomedriftmap2021`. Salvo rare eccezioni, tutte le mappe necessitano di avere `/info.json` alla fine. Dovresti ottenere qualcosa di simile:
```TOML
Map = '/levels/myawesomedriftmap2021/info.json'
```

La mappa, come tutte le altre mod, verrà scaricata automaticamente da chiunque si connetta al server.

**Se la connessione non va a buon fine**, installa la mappa in BeamNG.drive (non multigiocatore) e caricala. Quando sei in gioco, apri la console con il tasto `ò` (se non utilizzi il layout Italiano è un tasto differente, guarda l'assegnazione di **Toggle System Console** in **Options > Controls > Bindings** nella sezione **General Debug**), ed esegui questo comando: `print(getMissionFilename())`. Otterrai così il corretto nome da utilizzare.

Il tuo server con la mappa moddata è pronto!

## Come connettersi a un server

Come tu e altre persone possono connettersi al tuo server.

### Connettersi al proprio server

Se sei il proprietario del server devi connetterti tramite connessione diretta, per fare questo, clicca il pulsante **Direct Connect** a sinistra della lista dei server. Lascia i parametri predefiniti (IP `127.0.0.1` e porta `30814`) e clicca `Connect`. Se il tuo server è in esecuzione all'esterno della tua LAN devi prima [trovare il suo IP](https://whatismyipaddress.com/) e poi connetterti direttamente.

### Connessione di altre persone al proprio server (Pubblico)

Chiunque può connettersi al tuo server fintanto che si sia fatto port forwarding (una buona guida è [la seguente](https://www.aranzulla.it/come-aprire-le-porte-del-router-31808.html)). Per connettersi a un server pubblico basta andare sulla lista dei server, cercare il nome del server e cliccare `Connect`. Se non sei sicuro del nome del server, è lo stesso che hai messo nel file `ServerConfig.toml`.

### Connessione di altre persone al proprio server (Privato)

Chiunque può connettersi al tuo server fintanto che si sia fatto port forwarding (una buona guida è [la seguente](https://www.aranzulla.it/come-aprire-le-porte-del-router-31808.html)). Per connettersi a un server privato clicca il pulsante **Direct Connect** a sinistra della lista dei server, dopodiché inserisci l'indirizzo IP e la porta del server. Se non sei sicuro di quale sia il tuo IP, puoi verificarlo da [questo sito](https://whatismyipaddress.com/). Se non sei sicuro della porta, è la stessa che hai messo nel file `ServerConfig.toml`.

### Connessione di altre persone al proprio server (Hamachi)

Solo le persone nel tuo network di Hamachi possono connettersi al tuo server, non è necessario fare port forwarding in questo caso. Chi vuole connettersi, dopo essere entrato nel tuo network Hamachi, userà l'IP di Hamachi e la porta predefinita per eseguire una connessione diretta al tuo server. Per maggiori informazioni guarda la nostra guida per gli utenti [Hamachi](https://forum.beammp.com/t/tutorial-how-to-host-a-server-with-logmein-hamachi/52).