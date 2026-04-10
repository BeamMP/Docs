# BeamMP Client-Side API Documentation

## Table of Contents

### MPVehicleGE
- [Vehicle Functions](#vehicle-functions)
- [Player Functions](#player-functions)
- [Nametag Functions](#nametag-functions)
- [Role Functions](#role-functions)
- [Navigation Functions](#navigation-functions)
- [Object Methods](#object-methods)
- [Event Hooks](#event-hooks)

### MPConfig
- [MPConfig Functions](#mpconfig-functions)

### MPCoreNetwork
- [MPCoreNetwork Functions](#mpcorenetwork-functions)

### MPGameNetwork
- [Event System Functions](#event-system-functions)
- [Keypress Functions](#keypress-functions)
- [UI Functions](#ui-functions)
- [MPGameNetwork Callbacks](#mpgamenetwork-callbacks)

### MPHelpers
- [Encoding Functions](#encoding-functions)
- [Color Functions](#color-functions)
- [String Functions](#string-functions)
- [Table Functions](#table-functions)
- [Debug Functions](#debug-functions)

---

## Vehicle Functions

### `getGameVehicleID(serverVehicleID)`
Resolves a serverVehicleID into the gameVehicleID

**Parameters:**
- `serverVehicleID` (string) - Format: "X-Y" where X is PlayerID and Y is VehicleID

**Returns:**
- (number) - The game's internal vehicle ID
- (number) `-1` - If vehicle is unknown

**Usage:**
```lua
local gameID = extensions.MPVehicleGE.getGameVehicleID("0-0")
```

---

### `getServerVehicleID(gameVehicleID)`
Resolves a gameVehicleID into the serverVehicleID

**Parameters:**
- `gameVehicleID` (number) - The game's internal vehicle ID

**Returns:**
- (string) - Server vehicle ID (e.g., "0-0")
- (nil) - If gameVehicleID is unknown

**Usage:**
```lua
local serverID = extensions.MPVehicleGE.getServerVehicleID(11171)
```

---

### `getVehicleByServerID(serverVehicleID)`
Returns the complete vehicle table for this vehicle

**Parameters:**
- `serverVehicleID` (string) - Format: "X-Y"

**Returns:**
- (table) - Vehicle information (name, gameVehicleID, jbeam, ownerID, ownerName, isLocal, isSpawned, etc.)
- (nil) - If serverVehicleID is invalid

**Usage:**
```lua
local vehicle = extensions.MPVehicleGE.getVehicleByServerID("0-0")
if vehicle then
    print("Owner: " .. vehicle.ownerName)
end
```

---

### `getVehicleByGameID(gameVehicleID)`
Returns the complete vehicle table for this vehicle

**Parameters:**
- `gameVehicleID` (number) - The game's internal vehicle ID

**Returns:**
- (table) - Vehicle information
- (nil) - If gameVehicleID is invalid

**Usage:**
```lua
local vehicle = extensions.MPVehicleGE.getVehicleByGameID(11171)
```

---

### `isOwn(gameVehicleID)`
Checks if the given vehicle belongs to this client

**Parameters:**
- `gameVehicleID` (number) - The game's internal vehicle ID

**Returns:**
- (boolean) - True if vehicle belongs to this client

**Usage:**
```lua
if extensions.MPVehicleGE.isOwn(11171) then
    print("This is my vehicle")
end
```

---

### `getOwnMap()`
Returns a table containing all vehicles owned by this client

**Parameters:**
- None

**Returns:**
- (table) - Map of owned vehicles `{[gameVehicleID] = vehicles_subtable}`

**Usage:**
```lua
local myVehicles = extensions.MPVehicleGE.getOwnMap()
```

---

### `getVehicleMap()`
Returns a table of all known multiplayer vehicles

**Parameters:**
- None

**Returns:**
- (table) - Map of all vehicles `{[serverVehicleID] = gameVehicleID}`

**Usage:**
```lua
local allVehicles = extensions.MPVehicleGE.getVehicleMap()
```

---

### `getDistanceMap()`
Returns the distance from each multiplayer vehicle to this client's point of view

**Parameters:**
- None

**Returns:**
- (table) - Map of distances `{[gameVehicleID] = distanceInMeters}`

**Usage:**
```lua
local distances = extensions.MPVehicleGE.getDistanceMap()
```

---

### `getNicknameMap()`
Returns all multiplayer gameVehicleIDs with their owner names

**Parameters:**
- None

**Returns:**
- (table) - Map of nicknames `{[gameVehicleID] = ownerName}`

**Usage:**
```lua
local nicknameMap = extensions.MPVehicleGE.getNicknameMap()
```

---

### `getVehicles()`
Returns the complete vehicles table

**Parameters:**
- None

**Returns:**
- (table) - All vehicles `{[serverVehicleID] = vehicles_subtable}`

**Usage:**
```lua
local vehicles = extensions.MPVehicleGE.getVehicles()
for serverID, vehicle in pairs(vehicles) do
    print("Vehicle: " .. vehicle.jbeam)
end
```

---

## Player Functions

### `getPlayerByName(name)`
Returns this player's table and ID

**Parameters:**
- `name` (string) - The player's name

**Returns:**
- (table) - Player information (name, playerID, role, vehicles, etc.)
- (number) - The player's ID
- (nil) - If player not found

**Usage:**
```lua
local player, playerID = extensions.MPVehicleGE.getPlayerByName("John")
if player then
    print("Player ID: " .. playerID)
end
```

---

### `getPlayers()`
Returns the complete players table

**Parameters:**
- None

**Returns:**
- (table) - All players `{[playerID] = players_subtable}`

**Usage:**
```lua
local players = extensions.MPVehicleGE.getPlayers()
for playerID, player in pairs(players) do
    print("Player: " .. player.name)
end
```

---

## Nametag Functions

### `setPlayerNickPrefix(targetName, tagSource, text)`
Adds a prefix to a player's nametag (displayed before the name)

**Parameters:**
- `targetName` (string) - The player's name
- `tagSource` (string) - Unique identifier for this prefix
- `text` (string) - Text to display before the name

**Usage:**
```lua
extensions.MPVehicleGE.setPlayerNickPrefix("John", "RANK", "1st.")
-- Result: "1st. John"
```

---

### `setPlayerNickSuffix(targetName, tagSource, text)`
Adds a suffix to a player's nametag (displayed after the name)

**Parameters:**
- `targetName` (string) - The player's name
- `tagSource` (string) - Unique identifier for this suffix
- `text` (string) - Text to display after the name

**Usage:**
```lua
extensions.MPVehicleGE.setPlayerNickSuffix("John", "STATUS", "[AFK]")
-- Result: "John [AFK]"
```

---

### `hideNicknames(hide)`
Turns on or off the nametag drawing from BeamMP

**Parameters:**
- `hide` (boolean) - True to hide nametags, false to show them

**Usage:**
```lua
extensions.MPVehicleGE.hideNicknames(true)  -- Hide
extensions.MPVehicleGE.hideNicknames(false) -- Show
```

---

### `toggleNicknames()`
Toggles the displaying of nametags

**Parameters:**
- None

**Usage:**
```lua
extensions.MPVehicleGE.toggleNicknames()
```

---

## Role Functions

### `setPlayerRole(playerID, tag, shorttag, red, green, blue)`
Sets a custom role for a player

**Parameters:**
- `playerID` (number) - ID of the player
- `tag` (string) - Role tag (e.g., "VIP")
- `shorttag` (string) - Short version (e.g., "V")
- `red` (number) - Red channel (0-255)
- `green` (number) - Green channel (0-255)
- `blue` (number) - Blue channel (0-255)

**Returns:**
- (boolean, string) - `false, "player not found"` if player doesn't exist
- (boolean, string) - `false, error` if invalid arguments
- (nil) - Nothing on success

**Usage:**
```lua
local success, error = extensions.MPVehicleGE.setPlayerRole(0, "VIP", "V", 255, 215, 0)
if success == false then
    print("Error: " .. error)
end
```

---

### `clearPlayerRole(playerID)`
Clears a custom role for a player

**Parameters:**
- `playerID` (number) - ID of the player

**Returns:**
- (boolean) - Always returns `false` (implementation quirk - use to check if player exists)

**Usage:**
```lua
extensions.MPVehicleGE.clearPlayerRole(0)
```

---

### `setVehicleRole(playerIDVehicleID, tag, shorttag, red, green, blue)`
Sets a custom role for a specific vehicle

**Parameters:**
- `playerIDVehicleID` (string) - Vehicle ID (format: "0-0")
- `tag` (string) - Role tag
- `shorttag` (string) - Short version
- `red` (number) - Red (0-255)
- `green` (number) - Green (0-255)
- `blue` (number) - Blue (0-255)

**Returns:**
- (boolean, string) - `false, "vehicle not found"` if vehicle doesn't exist
- (boolean, string) - `false, error` if invalid arguments
- (nil) - Nothing on success

**Usage:**
```lua
local success, error = extensions.MPVehicleGE.setVehicleRole("0-0", "Police", "POL", 0, 0, 255)
if success == false then
    print("Error: " .. error)
end
```

---

### `clearVehicleRole(playerIDVehicleID)`
Clears a custom role for a vehicle

**Parameters:**
- `playerIDVehicleID` (string) - Vehicle ID (format: "0-0")

**Returns:**
- (boolean) - Always returns `false` (implementation quirk - use to check if vehicle exists)

**Usage:**
```lua
extensions.MPVehicleGE.clearVehicleRole("0-0")
```

---

## Navigation Functions

### `groundmarkerToPlayer(targetName)`
Sets a ground marker route to target player's position (static)

**Parameters:**
- `targetName` (string) - Player's name, or nil to clear

**Usage:**
```lua
extensions.MPVehicleGE.groundmarkerToPlayer("John")  -- Set
extensions.MPVehicleGE.groundmarkerToPlayer(nil)     -- Clear
```

---

### `groundmarkerFollowPlayer(targetName, dontfollow)`
Sets a ground marker route that follows target player

**Parameters:**
- `targetName` (string) - Player's name, or nil to stop
- `dontfollow` (boolean) - If true, creates static marker

**Usage:**
```lua
extensions.MPVehicleGE.groundmarkerFollowPlayer("John")       -- Follow
extensions.MPVehicleGE.groundmarkerFollowPlayer("John", true) -- Static
extensions.MPVehicleGE.groundmarkerFollowPlayer(nil)          -- Stop
```

---

### `queryRoadNodeToPosition(targetPosition, owner)`
Finds the closest road nodes to a target position

**Parameters:**
- `targetPosition` (vec3 or table) - Target position with x, y, z
- `owner` (string) - Optional identifier (default: "target")

**Returns:**
- (boolean) - Success status
- (number) - nodeID (if successful)

**Usage:**
```lua
local pos = vec3(100, 200, 50)
local success, nodeID = extensions.MPVehicleGE.queryRoadNodeToPosition(pos)
```

---

## Object Methods

### Player Object Methods

#### `player:setNickPrefix(tagSource, text)`
Sets a prefix for this player's nametag

**Parameters:**
- `tagSource` (string) - Unique identifier
- `text` (string) - Text to display (or nil to remove)

**Usage:**
```lua
local player = extensions.MPVehicleGE.getPlayerByName("John")
if player then
    player:setNickPrefix("STATUS", "[AFK]")
end
```

---

#### `player:setNickSuffix(tagSource, text)`
Sets a suffix for this player's nametag

**Parameters:**
- `tagSource` (string) - Unique identifier
- `text` (string) - Text to display (or nil to remove)

**Usage:**
```lua
local player = extensions.MPVehicleGE.getPlayerByName("John")
if player then
    player:setNickSuffix("MISSION", "[In Mission]")
end
```

---

#### `player:setCustomRole(role)`
Sets a custom role for this player

**Parameters:**
- `role` (table) - Role table: `{backcolor = {r, g, b}, tag = string, shorttag = string}`

**Usage:**
```lua
local player = extensions.MPVehicleGE.getPlayerByName("John")
if player then
    player:setCustomRole({
        backcolor = {r = 255, g = 0, b = 0},
        tag = " [VIP]",
        shorttag = " [V]"
    })
end
```

---

#### `player:clearCustomRole()`
Clears the custom role for this player

**Usage:**
```lua
local player = extensions.MPVehicleGE.getPlayerByName("John")
if player then
    player:clearCustomRole()
end
```

---

### Vehicle Object Methods

#### `vehicle:getOwner()`
Returns the owner of this vehicle

**Returns:**
- (table) - Player object
- (number) - Player's ID

**Usage:**
```lua
local vehicle = extensions.MPVehicleGE.getVehicleByServerID("0-0")
if vehicle then
    local owner, ownerID = vehicle:getOwner()
    print("Owner: " .. owner.name)
end
```

---

#### `vehicle:setCustomRole(role)`
Sets a custom role for this vehicle

**Parameters:**
- `role` (table) - Role table: `{backcolor = {r, g, b}, tag = string, shorttag = string}`

**Usage:**
```lua
local vehicle = extensions.MPVehicleGE.getVehicleByServerID("0-0")
if vehicle then
    vehicle:setCustomRole({
        backcolor = {r = 0, g = 0, b = 255},
        tag = " [Police]",
        shorttag = " [POL]"
    })
end
```

---

#### `vehicle:clearCustomRole()`
Clears the custom role for this vehicle

**Usage:**
```lua
local vehicle = extensions.MPVehicleGE.getVehicleByServerID("0-0")
if vehicle then
    vehicle:clearCustomRole()
end
```

---

#### `vehicle:setDisplayName(displayName)`
Sets a custom display name for this vehicle

**Parameters:**
- `displayName` (string) - Custom name to display

**Usage:**
```lua
local vehicle = extensions.MPVehicleGE.getVehicleByServerID("0-0")
if vehicle then
    vehicle:setDisplayName("Patrol Car #1")
end
```

---

## Event Hooks

BeamMP provides event hooks that you can override to execute custom code when specific events occur. **Do not call these functions directly** - instead, override them while preserving the original functionality.

### Hook Pattern

Always preserve the original function when overriding:

```lua
-- Save the original function
local originalCallback = MPVehicleGE.onVehicleSpawned

-- Override with your custom logic
MPVehicleGE.onVehicleSpawned = function(gameVehicleID)
    -- Call the original first
    originalCallback(gameVehicleID)
    
    -- Your custom code here
    print("Vehicle spawned: " .. gameVehicleID)
end
```

---

### Available Event Hooks

#### `onUpdate(dt)`
Called every frame while connected to multiplayer

**Parameters:**
- `dt` (number) - Delta time in seconds since last frame

**Usage:**
```lua
local originalOnUpdate = MPVehicleGE.onUpdate
MPVehicleGE.onUpdate = function(dt)
    originalOnUpdate(dt)
    -- Your frame-by-frame logic here
end
```

---

#### `onPreRender(dt)`
Called every frame before rendering

**Parameters:**
- `dt` (number) - Delta time in seconds

**Note:**
This handles nametag rendering, distance calculations, and ground markers internally.

**Usage:**
```lua
local originalOnPreRender = MPVehicleGE.onPreRender
MPVehicleGE.onPreRender = function(dt)
    originalOnPreRender(dt)
    -- Your pre-render logic here
end
```

---

#### `onVehicleSpawned(gameVehicleID)`
Called when a vehicle spawns (both local and remote)

**Parameters:**
- `gameVehicleID` (number) - The game's internal vehicle ID

**Usage:**
```lua
local originalOnVehicleSpawned = MPVehicleGE.onVehicleSpawned
MPVehicleGE.onVehicleSpawned = function(gameVehicleID)
    originalOnVehicleSpawned(gameVehicleID)
    
    local vehicle = extensions.MPVehicleGE.getVehicleByGameID(gameVehicleID)
    if vehicle then
        print(vehicle.ownerName .. " spawned a " .. vehicle.jbeam)
    end
end
```

---

#### `onVehicleDestroyed(gameVehicleID)`
Called when a vehicle is destroyed/removed

**Parameters:**
- `gameVehicleID` (number) - The game's internal vehicle ID

**Usage:**
```lua
local originalOnVehicleDestroyed = MPVehicleGE.onVehicleDestroyed
MPVehicleGE.onVehicleDestroyed = function(gameVehicleID)
    local vehicle = extensions.MPVehicleGE.getVehicleByGameID(gameVehicleID)
    if vehicle then
        print("Vehicle " .. vehicle.jbeam .. " was destroyed")
    end
    
    originalOnVehicleDestroyed(gameVehicleID)
end
```

---

#### `onVehicleSwitched(oldGameVehicleID, newGameVehicleID)`
Called when player switches between vehicles

**Parameters:**
- `oldGameVehicleID` (number) - Previous vehicle ID (or -1)
- `newGameVehicleID` (number) - New vehicle ID (or -1)

**Usage:**
```lua
local originalOnVehicleSwitched = MPVehicleGE.onVehicleSwitched
MPVehicleGE.onVehicleSwitched = function(oldID, newID)
    originalOnVehicleSwitched(oldID, newID)
    
    print("Switched from vehicle " .. oldID .. " to " .. newID)
end
```

---

#### `onVehicleResetted(gameVehicleID)`
Called when a vehicle is reset (local vehicles only)

**Parameters:**
- `gameVehicleID` (number) - The game's internal vehicle ID

**Usage:**
```lua
local originalOnVehicleResetted = MPVehicleGE.onVehicleResetted
MPVehicleGE.onVehicleResetted = function(gameVehicleID)
    originalOnVehicleResetted(gameVehicleID)
    
    print("Vehicle " .. gameVehicleID .. " was reset")
end
```

---

#### `onVehicleColorChanged(gameVehicleID, index, paint)`
Called when a vehicle's paint color is changed

**Parameters:**
- `gameVehicleID` (number) - The game's internal vehicle ID
- `index` (number) - Paint slot index (0, 1, or 2)
- `paint` (table) - Paint data with color information

**Usage:**
```lua
local originalOnVehicleColorChanged = MPVehicleGE.onVehicleColorChanged
MPVehicleGE.onVehicleColorChanged = function(gameVehicleID, index, paint)
    originalOnVehicleColorChanged(gameVehicleID, index, paint)
    
    print("Vehicle " .. gameVehicleID .. " changed paint slot " .. index)
end
```

---

#### `onVehicleReady(gameVehicleID)`
Called when a vehicle's extensions have loaded and the vehicle is fully ready

**Parameters:**
- `gameVehicleID` (number) - The game's internal vehicle ID

**Note:**
Use this instead of `onVehicleSpawned` if you need vehicle extensions to be loaded.

**Usage:**
```lua
local originalOnVehicleReady = MPVehicleGE.onVehicleReady
MPVehicleGE.onVehicleReady = function(gameVehicleID)
    originalOnVehicleReady(gameVehicleID)
    
    -- Safe to interact with vehicle extensions here
    local veh = be:getObjectByID(gameVehicleID)
    if veh then
        veh:queueLuaCommand("print('Vehicle is ready!')")
    end
end
```

---

#### `onUIInitialised()`
Called when the BeamMP UI is initialized

**Usage:**
```lua
local originalOnUIInitialised = MPVehicleGE.onUIInitialised
MPVehicleGE.onUIInitialised = function()
    originalOnUIInitialised()
    
    print("BeamMP UI initialized")
end
```

---

#### `onSettingsChanged()`
Called when BeamMP settings are changed

**Usage:**
```lua
local originalOnSettingsChanged = MPVehicleGE.onSettingsChanged
MPVehicleGE.onSettingsChanged = function()
    originalOnSettingsChanged()
    
    print("BeamMP settings changed")
end
```

---

## MPConfig Functions

### `MPConfig.getPlayerServerID()`
Returns the local player's server-assigned ID

**Returns:**
- (number) - The player's server ID (-1 if not set)

**Usage:**
```lua
local myID = extensions.MPConfig.getPlayerServerID()
```

---

### `MPConfig.getNickname()`
Returns the local player's nickname

**Returns:**
- (string) - The player's current nickname

**Usage:**
```lua
local name = extensions.MPConfig.getNickname()
```

---

### `MPConfig.getConfig()`
Returns the BeamMP configuration settings

**Returns:**
- (table) - Configuration table with all BeamMP settings
- (nil) - If config file doesn't exist

**Usage:**
```lua
local config = extensions.MPConfig.getConfig()
```

---

### `MPConfig.setConfig(settingName, settingVal)`
Sets a specific configuration value

**Parameters:**
- `settingName` (string) - Name of the setting
- `settingVal` (any) - Value to set

**Usage:**
```lua
extensions.MPConfig.setConfig("myCustomSetting", true)
```

---

## MPCoreNetwork Functions

### `MPCoreNetwork.getCurrentServer()`
Returns information about the current connected server

**Returns:**
- (table) - Server data (ip, port, name, map)
- (nil) - If not connected

**Usage:**
```lua
local server = extensions.MPCoreNetwork.getCurrentServer()
if server then
    print("Server: " .. server.name)
    print("IP: " .. server.ip .. ":" .. server.port)
end
```

---

## Event System Functions

### `TriggerServerEvent(name, data)`
Sends an event to the server

**Parameters:**
- `name` (string) - Event name
- `data` (string) - Data to send

**Note:**
Global function. The server must have a registered handler for this event.

**Usage:**
```lua
TriggerServerEvent("playerReady", "ready")

-- With JSON
local data = {position = {x=100, y=200, z=50}}
TriggerServerEvent("updatePlayer", jsonEncode(data))
```

---

### `TriggerClientEvent(name, data)`
Triggers a local client event

**Parameters:**
- `name` (string) - Event name
- `data` (string) - Data to send

**Note:**
Global function. Triggers locally without sending to server.

**Usage:**
```lua
TriggerClientEvent("localUpdate", "data")
```

---

### `AddEventHandler(event_name, func, name)`
Registers a function to handle a specific event

**Parameters:**
- `event_name` (string) - Name of the event to handle
- `func` (function) - Handler function (receives event data)
- `name` (string) - Optional internal name

**Note:**
Global function.

**Usage:**
```lua
AddEventHandler("playerDamage", function(data)
    print("Damage: " .. data)
end)

-- With JSON
AddEventHandler("vehicleSpawned", function(data)
    local vehData = jsonDecode(data)
    print("Spawned: " .. vehData.model)
end)
```

---

### `RemoveEventHandler(event_name, name)`
Removes an event handler

**Parameters:**
- `event_name` (string) - Name of the event
- `name` (string) - Optional internal name

**Note:**
Global function.

**Usage:**
```lua
RemoveEventHandler("playerDamage")
```

---

## Keypress Functions

### `onKeyPressed(keyname, func)`
Registers a function to be called when a key is pressed

**Parameters:**
- `keyname` (string) - Name of the key (e.g., "NUMPAD1", "F1")
- `func` (function) - Function to call (receives boolean)

**Note:**
Global function.

**Usage:**
```lua
onKeyPressed("NUMPAD1", function(state)
    print("NUMPAD1 pressed!")
end)
```

---

### `onKeyReleased(keyname, func)`
Registers a function to be called when a key is released

**Parameters:**
- `keyname` (string) - Name of the key
- `func` (function) - Function to call (receives boolean)

**Note:**
Global function.

**Usage:**
```lua
onKeyReleased("NUMPAD1", function(state)
    print("NUMPAD1 released!")
end)
```

---

### `addKeyEventListener(keyname, func, type)`
Registers a key event listener with customizable trigger type

**Parameters:**
- `keyname` (string) - Name of the key
- `func` (function) - Function to call
- `type` (string) - Event type: "down", "up", or "both" (default: "both")

**Note:**
Global function.

**Usage:**
```lua
addKeyEventListener("F1", function(isPressed)
    if isPressed then
        print("F1 pressed")
    else
        print("F1 released")
    end
end, "both")
```

---

### `getKeyState(keyname)`
Returns the current state of a key

**Parameters:**
- `keyname` (string) - Name of the key

**Returns:**
- (boolean) - True if pressed, false otherwise

**Note:**
Global function. Only works for keys registered with addKeyEventListener.

**Usage:**
```lua
local isPressed = getKeyState("NUMPAD1")
if isPressed then
    print("NUMPAD1 is held down")
end
```

---

## UI Functions

### `MPGameNetwork.spawnUiDialog(dialogInfo)`
Creates a custom interactive dialog box

**Parameters:**
- `dialogInfo` (table) - Dialog configuration:
  - `title` (string) - Dialog title (optional)
  - `body` (string) - Dialog message (optional)
  - `buttons` (table) - Button configurations (optional)
  - `class` (string) - "experimental" for hazard lines (optional)
  - `interactionID` (string) - Interaction identifier (optional)
  - `reportToServer` (boolean) - Send to server (optional, default: false)
  - `reportToExtensions` (boolean) - Trigger local event (optional, default: false)

**Usage:**
```lua
-- Simple dialog
extensions.MPGameNetwork.spawnUiDialog({
    title = "Welcome",
    body = "Welcome to the server!"
})

-- Choice dialog
extensions.MPGameNetwork.spawnUiDialog({
    title = "Choose Team",
    body = "Which team?",
    buttons = {
        {label = "Red", key = "joinRed"},
        {label = "Blue", key = "joinBlue"}
    },
    interactionID = "teamSelection",
    reportToServer = true
})
```

---

## MPGameNetwork Callbacks

### `MPGameNetwork.onUpdate(dt)`
Called every frame while connected to multiplayer

**Parameters:**
- `dt` (number) - Delta time in seconds

**Usage:**
```lua
local originalOnUpdate = MPGameNetwork.onUpdate
MPGameNetwork.onUpdate = function(dt)
    originalOnUpdate(dt)
    -- Your code here
end
```

---

### `MPGameNetwork.onVehicleReady(gameVehicleID)`
Called when a vehicle is ready and extensions are loaded

**Parameters:**
- `gameVehicleID` (number) - The game's internal vehicle ID

**Usage:**
```lua
local originalOnVehicleReady = MPGameNetwork.onVehicleReady
MPGameNetwork.onVehicleReady = function(gameVehicleID)
    originalOnVehicleReady(gameVehicleID)
    -- Your code here
end
```

---

## Encoding Functions

### `MPHelpers.b64encode(string)`
Encodes a string to Base64 (RFC 2045)

**Parameters:**
- `string` (string) - String to encode

**Returns:**
- (string) - Base64-encoded string

**Usage:**
```lua
local encoded = extensions.MPHelpers.b64encode("Hello World")

-- Encoding JSON
local data = {name = "Player", score = 100}
local encoded = extensions.MPHelpers.b64encode(jsonEncode(data))
TriggerServerEvent("sendData", encoded)
```

---

### `MPHelpers.b64decode(string)`
Decodes a Base64 string (RFC 2045)

**Parameters:**
- `string` (string) - Base64-encoded string

**Returns:**
- (string) - Decoded string

**Usage:**
```lua
local decoded = extensions.MPHelpers.b64decode("SGVsbG8gV29ybGQ=")

-- Decoding JSON
AddEventHandler("receiveData", function(data)
    local decoded = extensions.MPHelpers.b64decode(data)
    local jsonData = jsonDecode(decoded)
end)
```

---

## Color Functions

### `MPHelpers.hex2rgb(hex)`
Converts a hexadecimal color code to RGB values

**Parameters:**
- `hex` (string) - Hex color code (e.g., "#FF5733" or "#F57")

**Returns:**
- (table) - RGB values `{r, g, b}` in 0-1 range
- (table) - `{0, 0, 0}` if invalid

**Note:**
Supports both 3-character and 6-character hex codes.

**Usage:**
```lua
local rgb = extensions.MPHelpers.hex2rgb("#FF5733")
print(rgb[1], rgb[2], rgb[3]) -- 1.0, 0.341, 0.2

-- Short format
local rgb = extensions.MPHelpers.hex2rgb("#F57")
```

---

## String Functions

### `MPHelpers.splitStringToTable(string, delimiter, convert_into)`
Splits a string by delimiter and optionally converts values

**Parameters:**
- `string` (string) - String to split
- `delimiter` (string) - Delimiter to split by
- `convert_into` (number) - Conversion type (optional):
  - `nil` or `0` - Keep as strings (default)
  - `1` - Convert to numbers
  - `2` - Convert to booleans

**Returns:**
- (table) - Array of split values

**Usage:**
```lua
-- Strings
local parts = extensions.MPHelpers.splitStringToTable("Hello,World", ",")
-- {"Hello", "World"}

-- Numbers
local nums = extensions.MPHelpers.splitStringToTable("10,20,30", ",", 1)
-- {10, 20, 30}

-- Parse coordinates
local coords = extensions.MPHelpers.splitStringToTable("100,200,50", ",", 1)
local x, y, z = coords[1], coords[2], coords[3]
```

---

## Table Functions

### `MPHelpers.tableDiff(old, new)`
Compares two tables and returns their differences

**Parameters:**
- `old` (table) - First table to compare
- `new` (table) - Second table to compare

**Returns:**
- (table) `diff` - All keys that differ
- (table) `o` - Values from old that differ
- (table) `n` - Values from new that differ

**Usage:**
```lua
local oldConfig = {speed = 100, damage = 50, armor = 30}
local newConfig = {speed = 120, damage = 50, armor = 40}

local diff, oldVals, newVals = extensions.MPHelpers.tableDiff(oldConfig, newConfig)
-- diff = {speed = 120, armor = 40}

for key, value in pairs(diff) do
    print(key .. " changed from " .. oldVals[key] .. " to " .. newVals[key])
end
```

---

## Debug Functions

### `MPHelpers.simpletraces(level)`
Returns formatted caller information as string

**Parameters:**
- `level` (number) - Stack level (optional, default: 2)

**Returns:**
- (string) - Formatted string: `"source:line, namewhat name"`
- (string) - `"unknown"` if info not available

**Usage:**
```lua
local function myFunction()
    local caller = extensions.MPHelpers.simpletraces()
    print("Called from: " .. caller)
end
```

---

### `MPHelpers.simpletrace(level)`
Logs caller information to console

**Parameters:**
- `level` (number) - Stack level (optional, default: 1)

**Note:**
Logs the calling location to the console.

**Usage:**
```lua
local function myFunction()
    extensions.MPHelpers.simpletrace()
    -- Logs: "Code was called from: lua/ge/extensions/mymod.lua:42"
end
```

---

*Last updated: 01.01.2026*
