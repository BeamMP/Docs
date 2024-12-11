!!! warning "This site is under construction!"

    This site is being actively worked on. 
    
    Feel you could help? Please do by clicking on the page with a pencil on the right!

    This can be done any page too.

# Server Scripting Reference
## Server Version 2.X
!!! warning

    BeamMP server version 2.X is now unsupported. This documentation is provided as a reference only.
    Please update to the latest version for maintenance and support.
---

> This is 2.x scripting. Only refer to this if your server is old/outdated (version 2.x.x). For the latest documentation see [here](https://docs.beammp.com/scripting/server/latest-server-reference).
{.is-warning}

### Notes

To get the output of a function in the server console you have to wrap it in a `print()` statement.
For example:
`print(GetPlayerName(0))` will return the name of your server's first player.

`<PlayersServerID>` starts at 0.

### List of available functions for scripting

#### GetPlayerName(playersServerID)
Returns the player's discord name as a string
  ```lua
  function onPlayerJoin(playerID)
  	local name = GetPlayerName(playerID)
  	-- Do something
  end
  ```

#### GetPlayerDiscordID(playersServerID)
Returns the player's discord name as a string
  ```lua
  function onPlayerJoin(playerID)
  	local name = GetPlayerDiscordID(playerID)
  	-- Do something
  end
  ```
  
#### GetPlayerHWID(playersServerID)
Returns the player's discord ID as a string
  ```lua
  function onPlayerJoin(playerID)
  	local name = GetPlayerHWID(playerID)
  	-- Do something
  end
  ```

#### GetPlayerVehicles(playersServerID)
Returns the player's vehicles as an object/array
  ```lua
  function onChatMessage(playerID, senderName, message)
  	local vehicleList = GetPlayerVehicles(playerID)
  	for vehicleID, vehicleData in pairs(vehicleList) do
    	-- Do something
      -- Could also be used to check how many vehicles a player have
  	end
  end
  ```

#### DropPlayer(playersServerID)
Drops the connection for a specific player. Essentially Kicking them
  ```lua
  function onVehicleSpawn(playerID, vehicleID, vehicleData)
  	-- Do something	
  	DropPlayer(playerID)
  end
  ```

#### SendChatMessage(playersServerID, message)
Sends a message over the network to the specified user. Use -1 for everyone
  ```lua
  function onPlayerJoin(playerID)
  	SendChatMessage(-1, "Someone just joined!")
  end
  ```
  
#### CancelEvent() -- DEPRECIATED
  Cancels the event from happening. This might be going soon. Use `return 1` to cancel the event.
  
#### onInit()
If declared in a lua file, it will be called once C++ successfully finished loading the current lua file
  ```lua
  function onInit()
  	print("Server ready")
  end
  ```
  
#### exit()
Will close the server
  ```lua
  function onInit()
  	print("Server Ready. But who needs a server which is running")
  	exit() -- Stops the server
  end
  ```
  
#### CreateThread(functionName, callInterval)
Will execute the function on a dedicated thread and it will run callInterval times a second. 
1 = It will run every second.

  ```lua
  function yourFunction()
   	for i = 1,10 do
  		SendChatMessage(-1, "Countdown: "..i)
  		Sleep(1000)
  	end
  end
  CreateThread("yourFunction", 30)
  ```
  
DEPRECIATED EXAMPLE
Will execute the function on a dedicated thread
  ```lua
  function yourFunction()
   	for i = 1,10 do
  		SendChatMessage(-1, "Countdown: "..i)
  		Sleep(1000)
  	end
  end
  CreateThread("yourFunction", 30)
  ```
  
#### StopThread(functionName)
Will stop trying to call the thread function of the current script
  ```lua
  function yourFunction()
  	delayExpired = false
  	Sleep(10000)
  	delayExpired = true
  end
  CreateThread("yourFunction", 30)
  -- Do something
  if not delayExpired then
  	StopThread("yourFunction")
  else
  	-- Do something
  end
  
  ```
  
#### Sleep(millisecs) - DEPRECIATED
Will pause execution for the amount of time specified (warning doing so will pause the entire server if you didn't create a thread)
  ```lua
  function countdown()
   	for i = 1,10 do
  		SendChatMessage(-1, "Countdown: "..i)
  		Sleep(1000)
  	end
  end
  CreateThread("countdown", 10)
  ```
  
#### GetPlayerCount()
Will return how many players are connected
  ```lua
  function onPlayerJoin(playerID)
  	SendChatMessage(playerID, "You are the "..GetPlayerCount().."th player!"
  end
  ```
  
#### RemoveVehicle(playerServerID, VehicleID)
Will despawn a vehicle
  ```lua
  function onVehicleSpawn(playerID, vehicleID, vehicleData)
  	if --[[ Vehicle data equal something it shouldn't be ]] then
  		RemoveVehicle(playerID, vehicleIID)
  	end
  end
  ```
  
#### GetPlayers()
Will return a table of IDs with Names
  ```lua
  local function onPlayerJoin(joinedPlayerID)
  	local players = GetPlayers()
  	for playerID, playerName in pairs(players) do
  		if playerID == joinedPlayerID then
  			-- Do something
  		end
  	end
  end
  ```
  
#### RegisterEvent(eventName, functionName)
Will register that function to the event specified. Both must be strings
  ```lua
    function anyEvent()
  		-- Do something
 		end
  	RegisterEvent("onAnyEventHappen", "anyEvent")
  	-- Do something
  	TriggerLocalEvent("onAnyEventHappen")
  ```
  
#### TriggerLocalEvent(eventName)
Will call every registered function in the same plugin folder.
  ```lua
    function anyEvent()
  		-- Do something
 		end
  	RegisterEvent("onAnyEventHappen", "anyEvent")
  	-- Do something
  	TriggerLocalEvent("onAnyEventHappen")
  ```
  
#### TriggerGlobalEvent(eventName)
Will call every registered function with this event name.
  ```lua
  	-- File A
    function anyEvent()
  		-- Do something
 		end
  	RegisterEvent("onAnyEventHappen", "anyEvent")
  ```
  ```lua
 		-- File B
  	TriggerGlobalEvent("onAnyEventHappen")
  ```
  
#### TriggerClientEvent(playerServerID, eventName, data)
Will call that event with the given data on the specified client (-1 for broadcast)
  ```lua
    function onPlayerJoin(playerServerID)
       TriggerClientEvent(playerServerID, "anyEvent", "You just joined the server")
    end
  	RegisterEvent("onAnyEventHappen", "anyEvent")
  ```
  
#### Set(configID, newValue)
will set a config setting to the new specified value table below|
  ```lua
    function onChatMessage(playerID, senderName, message)
      if playerID == adminPlayer then
        if message == --[[ anything ]] then
          Set(3, 10)
        end
      end
    end
  ```

#### List of available config settings for the `Set()` command
> Note that these will not save to the config file.

|Config ID|Name|Will only accept|
|---|---|---|
|`0`|Debug setting|true or false|
|`1`|Private setting|true or false|
|`2`|Max car per player|number|
|`3`|Max players|number|
|`4`|Map|string|
|`5`|Name|string|
|`6`|Description|string|
|any other ID will result in a console warning|

### List of available events for scripting
#### Default Events
Example of how to use an event:
```lua
	function onInit()
  	RegisterEvent("onPlayerJoin", "onPlayerJoin")
  end
  
  function onPlayerJoin(playerServerID)
  	-- Do something
  end
```

If you dont want guests on your server:
```lua
	function onInit()
		print("noGuests Ready")
		RegisterEvent("onPlayerAuth","onPlayerAuth")
	end

	function onPlayerAuth(name, role, isGuest)
		if isGuest then
			return "You must be signed in to join this server!"
		end
	end
```

|Event|Parameters|Description|
|---|---|---|
|`onPlayerAuth`|The player's name, forum role, guest account (bool)|A player has authenticated and is requesting to join|
|`onPlayerConnecting`|The player's ID|A player is loading in (Before loading the map)|
|`onPlayerJoining`|The player's ID|A player is loading the map and will be joined soon|
|`onPlayerJoin`|The player's ID|A player has joined and loaded in|
|`onPlayerDisconnect`|The player's ID|A player has disconnected|
|`onChatMessage`|The sender's ID, name, and the chat message|A chat message was sent. This would be good for making a commands system|
|`onVehicleSpawn`|The player's ID, the vehicle ID, and the vehicle data|This is called when someone spawns a vehicle|
|`onVehicleEdited`|The player's ID, the vehicle ID, and the vehicle data|This is called when someone  edits a vehicle, or replaces their existing one|
|`onVehicleDeleted`|The player's ID and the vehicle ID|This is called when someone deletes a vehicle they own|

#### Custom Events
Custom events can also be created for your own use. This is done very much the same to how the default ones are done.

Example of how to use a custom event:
```lua
	function onInit()
  	RegisterEvent("myCustomEvent", "myCustomEvent")
  end
  
  function myCustomEvent(playerServerID, customData)
  	-- Do something
  end
```

This can then be called either from client side or serverside using the respective functions.

### Players

When a player connects to your server, they are assigned a serverID starting from 0 and counting upwards. serverIDs are reused; if a player leaves and re-joins they will not be assigned a new serverID, they will simply get another available one. When the server restarts, serverIDs will be reset.

#### Static Identifiers

Players in BeamMP have 3 static identifiers which can be obtained from their serverID being their name, discordID, and their hardwareID or HWID. (though the latter of the aforementioned isn't implemented, we will act as if it is) Each of the three ID types has their own origins and strength's/weaknesses to using them for player identification.

| ID TYPE   | PROS                            | CONS           |  FUNCTION TO OBTAIN  |
|-----------|---------------------------------|----------------|:--------------------:|
| name      | easy to obtain, straightforward | not secure     | GetPlayerName()      |
| discordID | fairly secure                   | inconvenient   | GetPlayerDiscordID() |
| HWID      | extremely secure                | hard to obtain | GetPlayerHWID()      |

### Vehicles

Vehicles in beamMP have 3 attributes that the server pays attention to, the owner's serverID, the vehicles vehicleID and it's data. The Owner's serverID is straight forward, it is the serverID, every vehicle also has an ID, vehicle IDs are not unique to the vehicle; two vehicles may have the same ID, assuming they're from different owners. Unlike serverIDs, vehicleIDs are reused, for example, if I have 4 vehicles, their IDs are 0, 1, 2 and, 3 if I delete the vehicle in vehicleID 2, I will have 0, 1 and, 3, when I spawn a new vehicle, the new vehicle will slot into ID 2. Lastly, the last attribute vehicles have is data, data contains a vehicle, name, parts, and other data; as the name implies. data is stored as a raw JSON string, so you will need a JSON library alternatively, you can manually step through the string and dig out the information you need.
