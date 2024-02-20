# Codici di errore

Questa pagina contiene tutti i possibili errori del server.

---

| Codice | Descrizione                      | Soluzione possibile                                                                                                                         |
|--------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| 10022  | Problema di associazione porta   | Controlla se la porta in uso dal server è già occupata da altri servizi, se lo è scegline un'altra.                                         |
| 10048  | Indirizzo già in uso             | Un altro server BeamMP o altro programma sta già usando quella porta, scegline un'altra.                                                    |
| 10051  | Rete non raggiungibile           | Port forward non corretto o errori simili, controlla che sia tutto impostato correttamente.                                                 |
| 10052  | Reset della rete                 | Capita quando la rete cade nel momento in cui si effettua una nuova connessione. Riprova a connetterti.                                     |
| 10053  | Connessione interrotta           | Causata da un timeout o errore di rete, riprova a connetterti.                                                                              |
| 10054  | Connessione reimpostata dal peer | Un utente si è disconnesso dal tuo server.                                                                                                  |
| 10060  | Timeout della connessione        | Port forward non corretto, guarda la [guida di installazione](create-a-server.md#1-port-forwarding).                                        |
| 10061  | Connessione rifiutata            | Port forward non corretto, guarda la [guida di installazione](create-a-server.md#1-port-forwarding).                                        |
| 10064  | Host inattivo                    | Errore non comune, significa che l'host è inattivo perché è spento o perché ha le porte chiuse.                                             |
| 10065  | Host non raggiungibile           | Nessuna connessione ad internet oppure port forward non corretto, guarda la [guida di installazione](create-a-server.md#1-port-forwarding). |

!!! note
	Altri codici non riportati in tabella sono disponibili qui <https://learn.microsoft.com/en-us/windows/win32/winsock/windows-sockets-error-codes-2> se sai un po' come funzionano le reti e i socket.

