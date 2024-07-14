!!! warning "Questo sito è ancora in costruzione"

	Questo sito è in fase di lavorazione.
	
	Pensi di poter aiutare? Puoi farlo cliccando sulla pagina con la matita in alto a destra!
	
	Puoi contribuire a qualsiasi pagina.

# Riferimento per lo scripting lato client

BeamMP ti permette di creare i tuoi personali plugin da eseguire lato client. Abbiamo creato delle funzioni che ti permettono di comunicare con altre mod legate al multiplayer e ad altri giocatori tramite il server.

# Funzioni

Lista di funzioni disponibili per gli script:

| Funzione                                  | Note                                                                                                                                                                                                              |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `TriggerServerEvent("eventName", "data")` | Scatena un evento nel contesto Lua lato server, entrambi i parametri sono stringhe.                                                                                                                               |
| `TriggerClientEvent("eventName", "data")` | Scatena un evento nel contesto Lua lato client, entrambi i parametri sono stringhe. Buono da usare per la comunicazione tra plugin diversi.                                                                       |
| `AddEventHandler("eventName", Function)`  | Aggiunge il secondo parametro alla tabella che viene invocata quando viene ricevuto `eventName` (sia localmente sia dal server), `Function` riceverà un (1) parametro, una stringa contenente i dati dell'evento. |

# Esempi di codice

Per esempio si può analizzare la chat usando il suo evento evento `ChatMessageIncluded`:

```lua
local function chatReceived(msg) -- Receive event with parameters
    print("chat received: "..msg)
    local i = string.find(s, ":") -- Find where our first ':' is, used to separate the sender and message
    if i == nil then
        print("error parsing message: separator could not be found!")
        return -- Could not find separator, cancel function
    end
    print("index of separator: "..tostring(i))
    local sender = string.sub(msg, 1, i-1) -- Substring our input to separate its 2 parts
    local message = string.sub(msg, i+1, -1)  -- Do whatever you want to with the message
    print("sender: " .. sender)
    print("message: ".. message)
end

AddEventHandler("ChatMessageReceived", chatReceived) -- Add our event handler to the list managed by BeamMP
```