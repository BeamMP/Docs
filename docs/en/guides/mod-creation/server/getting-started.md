# Multiplayer mod creation

## Folderstructure and file basics

The basic folder and file structure needs to look like this:

```
Resources/
├─ Client/
│  └─ examplePlugin.zip/
│     ├─ scripts/
│     │  └─ modScript.lua
│     └─ lua/
│        └─ ge/
│           └─ extensions/
│              └─ examplePlugin.lua
└─ Server/
   └─ examplePlugin/
      ├─ examplePlugin.lua
      └─ further_lua/
         └─ further.lua
```

The serverside lua is the bare minimum, if you want to add custom events, you also need at least a clientside lua as well as a modscript.lua

The Server folder must contain subfolders, one for each server-side mod.
It is good practice to only have a single main lua file and add further lua files into subfolders.
However, you are not required to do that, the server will load lua files in alphabetical order should there be multiple.

The Client folder contains the zip files that are sent to a client, which then will load them as a mod.
Any other files in the Client folder will cause an error on server startup, but apart from that will be ignored by the server.
The modScript.lua will be read by BeamNG and instructs the game which plugin to load.

!!!example ""
    [Download the examplePlugin.zip](../../../../assets/content/ResourcesForExamplePlugin.zip)

## Serverside lua

There's more examples in the examplePlugin, but heres a very basic one, printing a players identifiers:

```lua
function onInit() --runs when plugin is loaded

	MP.RegisterEvent("onPlayerAuth", "onPlayerAuth") --Provided by BeamMP

	print("examplePlugin loaded")
end

--A player has authenticated and is requesting to join
--The player's name (string), forum role (string), guest account (bool), identifiers (table -> ip, beammp)
function onPlayerAuth(player_name, role, isGuest, identifiers)
	local ip = identifiers.ip
	local beammp = identifiers.beammp or "N/A"
	print("onPlayerAuth: player_name: " .. player_name .. " | role: " .. role .. " | isGuest: " .. tostring(isGuest) .. " | identifiers: ip: " .. ip .. " - beammp: " .. beammp)
end
```

`onPlayerAuth` gets triggered as soon as a player wants to join, also see [onPlayerAuth in the scripting reference](../../../scripting/server/latest-server-reference/#onplayerauth)

Another example using onPlayerAuth, but this will deny guests from joining the server by sending the client a message back, which will then be shown to the player:

```lua
function onPlayerAuth(playerName, playerRole, isGuest, identifiers)
  if isGuest then
    return "No guests allowed, please use a BeamMP account"
  end
end
```

Further info on serverside functions provided by BeamMP can be found in the [latest server reference](../../../scripting/server/latest-server-reference.md)

## Clientside lua

This largely follows the [BeamNG extensions](https://documentation.beamng.com/modding/programming/extensions/)

```lua
local M = {}

if extensions.isExtensionLoaded("examplePlugin") then
  log("E", "examplePlugin", "examplePlugin loaded on client side")
  return
end

return M
```
Prints to the console that the examplePlugin was loaded

Refer to the [beamNG documentation on debug prints](https://documentation.beamng.com/modding/programming/debugging/#a-add-a-log) to learn more

## modScript.lua

Usually contains only two lines

```lua
load('examplePlugin')
setExtensionUnloadMode('examplePlugin', 'manual')
```

You can add a log print if you want to see in the logs when your modScript gets processed by BeamNG

```lua
load('examplePlugin')
setExtensionUnloadMode('examplePlugin', 'manual')
log('I', 'modScript', "examplePlugin loaded")
```






