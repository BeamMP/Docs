# F.A.Q. e problemi noti
Una lista di domande frequenti e bug noti.

---
## **Server**

---
#### **Come posso creare un server?**

Tutte le informazioni per creare un server sono contenute in [questa guida](https://docs.beammp.com/it/server/create-a-server/).

---
#### **Posso creare un server su Linux?**

Offriamo i binari pre-compilati per diverse distribuzioni Linux [qui](https://github.com/BeamMP/BeamMP-Server/releases/latest).
Nel caso la tua distribuzione non fosse presente, puoi compilare i file sorgente scaricando il codice dal nostro [GitHub](https://github.com/BeamMP/BeamMP-Server), una guida si può trovare [qui](https://github.com/BeamMP/BeamMP-Server#build-instructions).

---
#### **Quali sono i requisiti di sistema necessari per il server?**

- RAM: 50+ MiB (senza contare l'overhead del sistema operativo)
- CPU: >1GHz, preferibilmente multicore
- OS: Windows, Linux (in teoria qualsiasi POSIX)
- GPU: non necessaria
- HDD: 10 MiB + spazio per eventuali mod/plugin
- Larghezza di banda internet: almeno 5-10 Mb/s in upload

---
#### **I giocatori all'esterno della mia rete locale non riescono a connettersi al mio server**

Leggi il passo `1. Port Forwarding` della nostra guida disponibile [qui](https://docs.beammp.com/it/server/create-a-server/#1-port-forwarding). Di seguito c'è un breve riassunto dei punti salienti.
Se giocatori esterni alla tua LAN non riescono a connettersi e ricevono sul launcher codici di errore come 10060, 10061 o 10038, segui questi passi:

- Fai port forwarding della porta specificata nel file `ServerConfig.toml` (quella predefinita è 30814), sia con protocollo TCP sia UDP;
- Permetti il traffico sia in entrata sia in uscita e sia TCP sia UDP di BeamMP-Server attraverso il firewall. Spegnere il firewall di solito **non** funziona.
- Assicurati di non stare usando una VPN.
- Assicurati che il server funzioni senza errori.

Puoi vedere se la porta è aperta correttamente usando un sito come ['portchecker.co'](https://portchecker.co/) mentre il server è attivo.

Note:

- Alcuni ISP non offrono un indirizzo IPv4 dedicato a tutti (trattasi di [CGNAT](https://en.wikipedia.org/wiki/Carrier-grade_NAT)), quindi il port forwarding potrebbe non essere possibile.
- Non è possibile effettuare port forwarding su connessioni mobili (4G/5G).

---
#### **Riesco a vedere il mio server sulla lista dei server, ma non riesco a connettermi**

Leggi [questa sezione](https://docs.beammp.com/it/server/create-a-server/#come-connettersi-a-un-server) della nostra guida.
Se non vuoi usare il pulsante `Direct Connect` e vuoi connetterti tramite la lista dei server al **tuo** server, il tuo router deve supportare il NAT-loopback, che di solito non è supportato dai router domestici.

---
## **Varie ed eventuali**

---
#### **Dove posso trovare il codice?**

Tutto il codice sorgente è disponibile su [GitHub](https://github.com/BeamMP).
Prima di modificare il codice, ricordati che è soggetto ai nostri [termini di utilizzo](https://forum.beammp.com/t/terms-of-use-v1-0/43) e con le seguenti licenze:

| Codice     | Licenza                                                                    |
|------------|:--------------------------------------------------------------------------:|
| Server     | [LICENSE](https://github.com/BeamMP/BeamMP-Server/blob/master/LICENSE)     |
| Launcher   | [LICENSE](https://github.com/BeamMP/BeamMP-Launcher/blob/master/README.md) |
| Client Lua | [LICENSE](https://github.com/BeamMP/BeamMP/blob/development/LICENSE.md)    |

---
#### **Ho trovato un bug o un exploit cosa faccio?**

Se il problema è legato al codice e sai come usare GitHub, crea una nuova "Issue" nel repo corretto sul nostro [GitHub](https://github.com/BeamMP). Il nostro flusso di lavoro è basato sulle "Issue" di GitHub; anche se hai già una soluzione al bug, sei pregato di creare una nuova "Issue" e poi chiedere una "Pull Request" che risolva la "Issue". Maggiori informazioni [qui](https://github.com/BeamMP/BeamMP/blob/development/CONTRIBUTING.md).

Nel caso non abbia o non sappia usare GitHub, puoi procedere nei seguenti modi:

- Se il problema non concerne nulla di sensibile, puoi creare un nuovo post sul nostro [forum](https://forum.beammp.com) o sul nostro [Discord](https://discord.gg/beammp).
- Se il problema concerne informazioni sensibili, contatta un nostro membro dello staff su [Discord](https://discord.gg/beammp).