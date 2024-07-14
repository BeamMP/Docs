!!! warning "This site is under construction!"

    This site is being actively worked on. 
    
    Feel you could help? Please do by clicking on the page with a pencil on the right!

    This can be done any page too.

# Mod/In-Game Scripting Reference

BeamMP allows you to create your own client side plugins as well. We have provided a few functions that you can use to communicate with other multiplayer mods, and other players through the server.

# Functions

List of available functions for scripting:

| Function                                  | Notes                                                                                                                                                                                 |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `TriggerServerEvent("eventName", "data")` | Triggers an event in the server lua environment, both parameters are strings.                                                                                                         |
| `TriggerClientEvent("eventName", "data")` | Triggers an event in the local lua environment, both parameters are strings. Good for communication between plugins.                                                                  |
| `AddEventHandler("eventName", Function)`  | Adds the 2nd parameter to the table to be called when eventName is received (either locally or from the server), `Function` will get 1 parameter, a string containing the event data. |

# Code snippets

For example to parse the chat use the included `ChatMessageIncluded` event as such:

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