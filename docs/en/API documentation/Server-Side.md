## Table of Contents

### Global
- [Global Functions](#global-functions)

### MP
- [Players](#mp--players)
- [Vehicles](#mp--vehicles)
- [Communication](#mp--communication)
- [Events](#mp--events)
- [Utilities](#mp--utilities)

### Util
- [Logging](#util--logging)
- [JSON](#util--json)
- [Random](#util--random)
- [Profiling](#util--profiling)

### Http
- [Http Functions](#http)

### FS
- [Checks](#fs--checks)
- [Operations](#fs--operations)
- [Paths](#fs--paths)

### Events
- [Events Reference](#events)

---

## Global Functions

### `print(...)`

Prints to the server console, prefixed with date, time and `[LUA]`.

**Parameters:**
- `...` (any) - Values of any type. Tables are printed with their contents.

**Usage:**
```lua
local name = "John Doe"
print("Hello, I'm", name, "and I'm", 32)
```

---

### `printRaw(...)`

Prints to the server console without any prefix.

**Parameters:**
- `...` (any) - Values of any type.

---

### `exit()`

Shuts down the server gracefully. Triggers the `onShutdown` event.

---

## MP — Players

### `MP.GetPlayerCount() -> number`

Returns the number of currently connected players.

**Returns:**
- (number) - Player count.

---

### `MP.GetPlayers() -> table`

Returns a table of all connected players.

**Returns:**
- (table) - Map of `{[playerID] = playerName}`.

---

### `MP.GetPlayerName(playerID) -> string`

Returns the name of a player by ID.

**Parameters:**
- `playerID` (number) - The player's ID.

**Returns:**
- (string) - The player's name, or `""` if not found.

**Usage:**
```lua
local player_id = 4
print(MP.GetPlayerName(player_id))
```

---

### `MP.GetPlayerIDByName(name) -> number`

Returns the ID of a player by name.

**Parameters:**
- `name` (string) - The player's name.

**Returns:**
- (number) - The player's ID, or `-1` if not found.

---

### `MP.GetPlayerIdentifiers(playerID) -> table`

Returns identifiers for a player such as IP, BeamMP forum ID and Discord ID.

**Parameters:**
- `playerID` (number) - The player's ID.

**Returns:**
- (table) - Table with keys `ip`, `beammp`, `discord` (only if linked).
- (nil) - If the player was not found.

**Usage:**
```lua
local player_id = 5
print(MP.GetPlayerIdentifiers(player_id))
-- { ip: "127.0.0.1", discord: "12345678987654321", beammp: "1234567" }
```

---

### `MP.GetPlayerRole(playerID) -> string|nil`

Returns the player's role as set by the BeamMP backend.

**Parameters:**
- `playerID` (number) - The player's ID.

**Returns:**
- (string) - The player's role.
- (nil) - If the player was not found.

---

### `MP.IsPlayerConnected(playerID) -> boolean`

Returns whether a UDP packet has been received from the player, i.e. whether the connection is fully established.

**Parameters:**
- `playerID` (number) - The player's ID.

**Returns:**
- (boolean) - `true` if fully connected.

**Usage:**
```lua
local player_id = 8
print(MP.IsPlayerConnected(player_id))
```

---

### `MP.IsPlayerGuest(playerID) -> boolean`

Returns whether the player is a guest (not registered on the BeamMP forum).

**Parameters:**
- `playerID` (number) - The player's ID.

**Returns:**
- (boolean) - `true` if guest.

---

### `MP.DropPlayer(playerID, reason?)`

Kicks a player from the server.

**Parameters:**
- `playerID` (number) - The player's ID.
- `reason` (string, optional) - Reason for the kick.

**Usage:**
```lua
function ChatHandler(player_id, player_name, message)
    if string.match(message, "darn") then
        MP.DropPlayer(player_id, "Profanity is not allowed")
        return 1
    end
end
```

---

## MP — Vehicles

### `MP.GetPlayerVehicles(playerID) -> table`

Returns all vehicles of a player.

**Parameters:**
- `playerID` (number) - The player's ID.

**Returns:**
- (table) - Map of `{[vehicleID] = dataString}` where dataString is a raw JSON string.
- (nil) - If the player has no vehicles or was not found.

**Usage:**
```lua
local player_id = 3
local player_vehicles = MP.GetPlayerVehicles(player_id)

for vehicle_id, vehicle_data in pairs(player_vehicles) do
    local start = string.find(vehicle_data, "{")
    local formattedVehicleData = string.sub(vehicle_data, start, -1)
    print(Util.JsonDecode(formattedVehicleData))
end
```

---

### `MP.GetPositionRaw(playerID, vehicleID) -> table, string`

Returns the current raw position of a vehicle.

**Parameters:**
- `playerID` (number) - The player's ID.
- `vehicleID` (number) - The vehicle's ID.

**Returns:**
- (table) - Table with keys: `pos`, `rot`, `vel`, `rvel`, `tim`, `ping`.
- (string) - Error message if one occurred, empty string on success.

**Note:**
Each value in `pos`, `rot`, `vel`, `rvel` is a table with indices `1, 2, 3` (and `4` for `rot`).

**Usage:**
```lua
local player_id = 4
local vehicle_id = 0

local raw_pos, error = MP.GetPositionRaw(player_id, vehicle_id)
if error == "" then
    local x, y, z = table.unpack(raw_pos["pos"])
    print("X:", x, "Y:", y, "Z:", z)
else
    print(error)
end
```

---

### `MP.RemoveVehicle(playerID, vehicleID)`

Removes a vehicle belonging to a player.

**Parameters:**
- `playerID` (number) - The player's ID.
- `vehicleID` (number) - The vehicle's ID.

**Usage:**
```lua
local player_id = 3
local player_vehicles = MP.GetPlayerVehicles(player_id)

for vehicle_id, vehicle_data in pairs(player_vehicles) do
    MP.RemoveVehicle(player_id, vehicle_id)
end
```

---

## MP — Communication

### `MP.SendChatMessage(playerID, message, logChat?)`

Sends a chat message to a specific player or everyone.

**Parameters:**
- `playerID` (number) - The player's ID, or `-1` for everyone.
- `message` (string) - The message content.
- `logChat` (boolean, optional) - Whether to log to the server log (default: `true`).

**Note:**
This function does not return a value.

**Usage:**
```lua
-- To a specific player
function ChatHandler(player_id, player_name, msg)
    if string.match(msg, "darn") then
        MP.SendChatMessage(player_id, "Please do not use profanity.")
        return 1
    end
end

-- To everyone
MP.SendChatMessage(-1, "Hello World!")
```

---

### `MP.SendNotification(playerID, message, icon?, category?)`

Sends a notification (popup) to a specific player or everyone.

**Parameters:**
- `playerID` (number) - The player's ID, or `-1` for everyone.
- `message` (string) - The notification content.
- `icon` (string, optional) - Notification icon.
- `category` (string, optional) - Notification category.

**Note:**
This function does not return a value. When called with only 3 arguments (no category), the category is automatically set to the value of message.

---

### `MP.ConfirmationDialog(playerID, title, body, buttons, interactionID, warning?, reportToServer?, reportToExtensions?)`

Sends a confirmation dialog with buttons to a player.

**Parameters:**
- `playerID` (number) - The player's ID, or `-1` for everyone.
- `title` (string) - Dialog title.
- `body` (string) - Dialog body text.
- `buttons` (table) - Array of buttons.
- `interactionID` (string) - Unique identifier for this interaction.
- `warning` (boolean, optional) - Show warning styling (default: `false`).
- `reportToServer` (boolean, optional) - Send response to server (default: `true`).
- `reportToExtensions` (boolean, optional) - Trigger local event (default: `true`).

**Note:**
When called with only 5 arguments the function does not return a value. When called with 6–8 arguments it returns `boolean, string`.

---

### `MP.TriggerClientEvent(playerID, eventName, data) -> boolean, string`

Sends an event to a specific client or everyone.

**Parameters:**
- `playerID` (number) - The player's ID, or `-1` for everyone.
- `eventName` (string) - The event name.
- `data` (string) - The data to send.

**Returns:**
- (boolean) - `true` if sent successfully. Always `true` for `-1`.
- (string) - Error message if failed.

---

### `MP.TriggerClientEventJson(playerID, eventName, data) -> boolean, string`

Same as `TriggerClientEvent` but accepts a Lua table and automatically encodes it to JSON.

**Parameters:**
- `playerID` (number) - The player's ID, or `-1` for everyone.
- `eventName` (string) - The event name.
- `data` (table) - Lua table to be JSON-encoded and sent.

**Returns:**
- (boolean) - `true` on success.
- (string) - Error message if failed.

---

## MP — Events

### `MP.RegisterEvent(eventName, functionName)`

Registers a function as a handler for an event.

**Parameters:**
- `eventName` (string) - The event name.
- `functionName` (string) - The name of the Lua function to register.

**Note:**
If the event does not exist it is created. Multiple handlers can be registered for the same event.

**Usage:**
```lua
function ChatHandler(player_id, player_name, msg)
    if msg == "hello" then
        print("Hello World!")
        return 0
    end
end

MP.RegisterEvent("onChatMessage", "ChatHandler")
```

---

### `MP.TriggerLocalEvent(eventName, ...) -> table`

Triggers an event in the current state only. Synchronous.

**Parameters:**
- `eventName` (string) - The event name.
- `...` (any, optional) - Arguments passed to handlers.

**Returns:**
- (table) - Table of return values from all handlers.

**Usage:**
```lua
local Results = MP.TriggerLocalEvent("MyEvent")
print(Results)
```

---

### `MP.TriggerGlobalEvent(eventName, ...) -> table`

Triggers an event in all states. Asynchronous. Local handlers run synchronously and immediately.

**Parameters:**
- `eventName` (string) - The event name.
- `...` (any, optional) - Arguments. Supported types: string, number, boolean, table.

**Returns:**
- (table) - Future-like object with:
  - `:IsDone() -> boolean` — Whether all handlers have finished.
  - `:GetResults() -> table` — Return values from all handlers.

**Note:**
Call these methods with `:` not `.`.

**Usage:**
```lua
local Future = MP.TriggerGlobalEvent("MyEvent")
while not Future:IsDone() do
    MP.Sleep(100)
end
local Results = Future:GetResults()
print(Results)
```

---

### `MP.CreateEventTimer(eventName, intervalMS, strategy?)`

Creates a timer that repeatedly triggers an event.

**Parameters:**
- `eventName` (string) - The event to trigger.
- `intervalMS` (number) - Interval between triggers in milliseconds.
- `strategy` (number, optional) - `MP.CallStrategy.BestEffort` (default) or `MP.CallStrategy.Precise`.

**Note:**
Intervals below 25ms are not recommended and will not be served reliably.

**Usage:**
```lua
local seconds = 0

function CountSeconds()
    seconds = seconds + 1
end

MP.RegisterEvent("EverySecond", "CountSeconds")
MP.CreateEventTimer("EverySecond", 1000)
```

---

### `MP.CancelEventTimer(eventName)`

Cancels an existing event timer.

**Parameters:**
- `eventName` (string) - The event name.

**Note:**
The event may fire one more time before being cancelled due to asynchronous behaviour.

---

## MP — Utilities

### `MP.CreateTimer() -> table`

Creates a timer object for measuring elapsed time.

**Returns:**
- (table) - Object with:
  - `:GetCurrent() -> float` — Seconds elapsed since last Start.
  - `:Start()` — Resets the timer.

**Usage:**
```lua
local mytimer = MP.CreateTimer()
-- do stuff here that needs to be timed
print(mytimer:GetCurrent())
```

---

### `MP.GetOSName() -> string`

Returns the name of the server's operating system.

**Returns:**
- (string) - `"Windows"`, `"Linux"`, or `"Other"`.

---

### `MP.GetServerVersion() -> number, number, number`

Returns the server version.

**Returns:**
- (number) - major
- (number) - minor
- (number) - patch

**Usage:**
```lua
local major, minor, patch = MP.GetServerVersion()
print(major, minor, patch)
```

---

### `MP.Get(configID) -> value`

Reads a server config setting by ID.

**Parameters:**
- `configID` (number) - ID from `MP.Settings`.

**Returns:**
- (value) - The setting's current value.

---

### `MP.Set(configID, value)`

Temporarily changes a server config setting. The change is not saved to the config file.

**Parameters:**
- `configID` (number) - ID from `MP.Settings`.
- `value` (any) - New value. Type must match the setting.

**Usage:**
```lua
MP.Set(MP.Settings.Debug, true)
```

---

### `MP.Settings`

Enum of setting IDs for use with `MP.Get` and `MP.Set`.

```lua
MP.Settings.Debug             -- 0  (boolean)
MP.Settings.Private           -- 1  (boolean)
MP.Settings.MaxCars           -- 2  (number)
MP.Settings.MaxPlayers        -- 3  (number)
MP.Settings.Map               -- 4  (string)
MP.Settings.Name              -- 5  (string)
MP.Settings.Description       -- 6  (string)
MP.Settings.InformationPacket -- 7  (boolean)
```

---

### `MP.CallStrategy`

Enum for use with `MP.CreateEventTimer`.

```lua
MP.CallStrategy.BestEffort  -- Skip trigger if previous handler hasn't finished (default)
MP.CallStrategy.Precise     -- Always trigger, even if it causes the queue to build up
```

---

### `MP.Sleep(ms)`

Halts the entire current Lua state for a number of milliseconds.

**Parameters:**
- `ms` (number) - Time to sleep in milliseconds.

**Note:**
Nothing will execute in the state while sleeping. **Do not sleep for more than 500ms** if event handlers are registered — a sleeping state can slow the entire server down significantly.

**Usage:**
```lua
local Future = MP.TriggerGlobalEvent("MyEvent")
while not Future:IsDone() do
    MP.Sleep(100)
end
```

---

### `MP.GetStateMemoryUsage() -> number`

Returns the memory usage of the current Lua state.

**Returns:**
- (number) - Memory in bytes.

---

### `MP.GetLuaMemoryUsage() -> number`

Returns the total memory usage of all Lua states combined.

**Returns:**
- (number) - Memory in bytes.

---

## Util — Logging

### `Util.LogInfo(...)`, `Util.LogWarn(...)`, `Util.LogError(...)`, `Util.LogDebug(...)`

Prints to the server log at the corresponding level.

**Parameters:**
- `...` (any) - Values of any type.

**Note:**
`Util.LogDebug` is only shown when `MP.Settings.Debug` is enabled.

**Usage:**
```lua
Util.LogInfo("Hello, World!")
Util.LogWarn("Cool warning")
Util.LogError("Oh no!")
Util.LogDebug("hi")
```

---

## Util — JSON

### `Util.JsonEncode(table) -> string`

Encodes a Lua table into a JSON string.

**Parameters:**
- `table` (table) - The table to encode.

**Returns:**
- (string) - Minified JSON string.

**Note:**
Automatically detects array vs object based on key types. Functions, userdata and unsupported types are ignored.

**Usage:**
```lua
local player = {
    name = "Lion",
    age = 69,
    skills = { "skill A", "skill B" }
}
local json = Util.JsonEncode(player)
-- '{"name":"Lion","age":69,"skills":["skill A","skill B"]}'
```

---

### `Util.JsonDecode(json) -> table`

Decodes a JSON string into a Lua table.

**Parameters:**
- `json` (string) - A valid JSON string.

**Returns:**
- (table) - The decoded table.
- (nil) - If the JSON is invalid.

**Usage:**
```lua
local json = "{\"message\":\"OK\",\"code\":200}"
local tbl = Util.JsonDecode(json)
-- { message = "OK", code = 200 }
```

---

### `Util.JsonPrettify(json) -> string`

Adds indentation and newlines to a JSON string for human readability (indent of 4).

**Parameters:**
- `json` (string) - A valid JSON string.

**Returns:**
- (string) - Pretty-printed JSON.

**Usage:**
```lua
local myjson = Util.JsonEncode({ name="Lion", age = 69, skills = { "skill A", "skill B" } })
print(Util.JsonPrettify(myjson))
```

---

### `Util.JsonMinify(json) -> string`

Removes unnecessary whitespace and newlines from a JSON string.

**Parameters:**
- `json` (string) - A valid JSON string.

**Returns:**
- (string) - Minified JSON.

**Usage:**
```lua
local pretty = Util.JsonPrettify(Util.JsonEncode({ name="Lion", age = 69 }))
print(Util.JsonMinify(pretty))
```

---

### `Util.JsonFlatten(json) -> string`

Flattens a nested JSON into `/a/b/c`-style keys per RFC 6901.

**Parameters:**
- `json` (string) - A valid JSON string.

**Returns:**
- (string) - Flattened JSON.

**Usage:**
```lua
local json = Util.JsonEncode({ name="Lion", skills = { "skill A", "skill B" } })
print(Util.JsonFlatten(json))
-- '{"/name":"Lion","/skills/0":"skill A","/skills/1":"skill B"}'
```

---

### `Util.JsonUnflatten(json) -> string`

Restores a flattened JSON back to its nested structure.

**Parameters:**
- `json` (string) - A flattened JSON string.

**Returns:**
- (string) - Nested JSON.

---

### `Util.JsonDiff(a, b) -> string`

Computes a diff between two JSON strings per RFC 6902.

**Parameters:**
- `a` (string) - First JSON string.
- `b` (string) - Second JSON string.

**Returns:**
- (string) - JSON Patch representing the differences.

---

## Util — Random

### `Util.Random() -> float`

Returns a random float between 0 and 1.

**Returns:**
- (float)

**Usage:**
```lua
local rand = Util.Random()
print("rand: " .. rand)
-- rand: 0.135477
```

---

### `Util.RandomRange(min, max) -> float`

Returns a random float within a given range.

**Parameters:**
- `min` (number) - Lower bound.
- `max` (number) - Upper bound.

**Returns:**
- (float)

**Usage:**
```lua
local randFloat = Util.RandomRange(1, 1000)
print("randFloat: " .. randFloat)
-- randFloat: 420.6969
```

---

### `Util.RandomIntRange(min, max) -> number`

Returns a random integer within a given range.

**Parameters:**
- `min` (number) - Lower bound.
- `max` (number) - Upper bound.

**Returns:**
- (number) - Integer.

**Usage:**
```lua
local randInt = Util.RandomIntRange(1, 100)
print("randInt: " .. randInt)
-- randInt: 69
```

---

## Util — Profiling

### `Util.DebugStartProfile(name)`

Starts a named execution time measurement.

**Parameters:**
- `name` (string) - Identifier for this measurement.

---

### `Util.DebugStopProfile(name)`

Stops a named measurement. Must be called after `DebugStartProfile` with the same name.

**Parameters:**
- `name` (string) - Identifier for this measurement.

---

### `Util.DebugExecutionTime() -> table`

Returns execution time statistics for every handler that has run.

**Returns:**
- (table) - Per handler: `mean`, `stdev`, `min`, `max`, `n` (all in ms).

**Usage:**
```lua
function printDebugExecutionTime()
    local stats = Util.DebugExecutionTime()
    local pretty = "DebugExecutionTime:\n"
    local longest = 0
    for name, t in pairs(stats) do
        if #name > longest then
            longest = #name
        end
    end
    for name, t in pairs(stats) do
        pretty = pretty .. string.format("%" .. longest + 1 .. "s: %12f +/- %12f (min: %12f, max: %12f) (called %d time(s))\n", name, t.mean, t.stdev, t.min, t.max, t.n)
    end
    print(pretty)
end
```

---

## Http

### `Http.CreateConnection(host, port) -> table`

Creates an HTTP connection to an external server.

**Parameters:**
- `host` (string) - Server address.
- `port` (number) - Port number.

**Returns:**
- (table) - Connection object with method `:Get(path, headers)`.

---

### `connection:Get(path, headers)`

Sends an HTTP GET request.

**Parameters:**
- `path` (string) - The request path.
- `headers` (table) - Headers as `{[string] = string}`.

---

## FS — Checks

### `FS.Exists(path) -> boolean`

Returns whether a path exists.

**Parameters:**
- `path` (string) - The path to check.

**Returns:**
- (boolean) - `true` if exists.

---

### `FS.IsDirectory(path) -> boolean`

Returns whether a path is a directory.

**Parameters:**
- `path` (string) - The path to check.

**Returns:**
- (boolean) - `true` if directory.

**Note:**
`false` does not imply the path is a file. Use `FS.IsFile` to check separately.

---

### `FS.IsFile(path) -> boolean`

Returns whether a path is a regular file.

**Parameters:**
- `path` (string) - The path to check.

**Returns:**
- (boolean) - `true` if regular file.

**Note:**
`false` does not imply the path is a directory.

---

## FS — Operations

### `FS.CreateDirectory(path) -> boolean, string`

Creates a directory including any missing parent directories (like `mkdir -p`).

**Parameters:**
- `path` (string) - Path of the directory to create.

**Returns:**
- (boolean) - `true` on success.
- (string) - Error message on failure, or `""` on success.

**Usage:**
```lua
local success, error_message = FS.CreateDirectory("data/mystuff/somefolder")

if not success then
    print("failed to create directory: " .. error_message)
end
```

---

### `FS.Remove(path) -> boolean, string`

Removes a file or empty directory.

**Parameters:**
- `path` (string) - The path to remove.

**Returns:**
- (boolean) - `true` on success.
- (string) - Error message on failure.

---

### `FS.Rename(path, newPath) -> boolean, string`

Renames or moves a file or directory.

**Parameters:**
- `path` (string) - Current path.
- `newPath` (string) - New path.

**Returns:**
- (boolean) - `true` on success.
- (string) - Error message on failure.

---

### `FS.Copy(path, newPath) -> boolean, string`

Copies a file or directory (recursive).

**Parameters:**
- `path` (string) - Source path.
- `newPath` (string) - Destination path.

**Returns:**
- (boolean) - `true` on success.
- (string) - Error message on failure.

---

### `FS.ListFiles(path) -> table`

Returns a list of file names in a directory (not recursive).

**Parameters:**
- `path` (string) - Directory path.

**Returns:**
- (table) - Array of file names.
- (nil) - If the path does not exist.

**Usage:**
```lua
print(FS.ListFiles("Resources/Server/examplePlugin"))
-- { 1: "example.json", 2: "example.lua" }
```

---

### `FS.ListDirectories(path) -> table`

Returns a list of directory names inside a directory (not recursive).

**Parameters:**
- `path` (string) - Directory path.

**Returns:**
- (table) - Array of directory names.
- (nil) - If the path does not exist.

**Usage:**
```lua
print(FS.ListDirectories("Resources"))
-- { 1: "Client", 2: "Server" }
```

---

## FS — Paths

### `FS.GetFilename(path) -> string`

Returns the filename with extension from a path.

**Parameters:**
- `path` (string) - A path string.

**Returns:**
- (string) - The filename.

**Usage:**
```lua
"my/path/a.txt"  ->  "a.txt"
"somefile.txt"   ->  "somefile.txt"
"/awesome/path"  ->  "path"
```

---

### `FS.GetExtension(path) -> string`

Returns the file extension including the dot.

**Parameters:**
- `path` (string) - A path string.

**Returns:**
- (string) - The extension (e.g. `".json"`), or `""` if none.

**Usage:**
```lua
"myfile.txt"                  ->  ".txt"
"somefile."                   ->  "."
"/awesome/path"               ->  ""
"/awesome/path/file.zip.txt"  ->  ".txt"
```

---

### `FS.GetParentFolder(path) -> string`

Returns the path of the containing directory.

**Parameters:**
- `path` (string) - A path string.

**Returns:**
- (string) - Parent folder path.

**Usage:**
```lua
"/var/tmp/example.txt"  ->  "/var/tmp"
"/"                     ->  "/"
"mydir/a/b/c.txt"       ->  "mydir/a/b"
```

---

### `FS.ConcatPaths(...) -> string`

Joins path segments together using the system's preferred separator, resolving `..` where present.

**Parameters:**
- `...` (string) - Path segments.

**Returns:**
- (string) - Joined path.

**Usage:**
```lua
FS.ConcatPaths("a", "b", "/c/d/e/", "/f/", "g", "h.txt")
-- "a/b/c/d/e/f/g/h.txt"
```

---

## Events

### Player connection order

```
onPlayerAuth → onPlayerConnecting → onPlayerJoining → onPlayerJoin
```

---

### `onInit`

Triggered right after all plugin files have been loaded.

**Arguments:** none
**Cancellable:** no

---

### `onConsoleInput`

Triggered when the server console receives input.

**Arguments:**
- `input` (string) - The text that was entered.

**Cancellable:** no

**Usage:**
```lua
function handleConsoleInput(cmd)
    local delim = cmd:find(' ')
    if delim then
        local message = cmd:sub(delim+1)
        if cmd:sub(1, delim-1) == "print" then
            return message
        end
    end
end

MP.RegisterEvent("onConsoleInput", "handleConsoleInput")
```

---

### `onShutdown`

Triggered when the server shuts down, after all players have been kicked.

**Arguments:** none
**Cancellable:** no

---

### `onPlayerAuth`

Triggered when a player attempts to connect, before any other connection events.

**Arguments:**
- `name` (string) - Player name.
- `role` (string) - Player role from the backend.
- `isGuest` (boolean) - Whether the player is a guest.
- `identifiers` (table) - Identifiers: `ip`, `beammp`, `discord`.

**Cancellable:** yes
- Return `1` — deny with a generic message.
- Return `string` — deny with the string as the reason.
- Return `2` — allow entry even if the server is full.

**Usage:**
```lua
function myPlayerAuthorizer(name, role, is_guest, identifiers)
    return "Sorry, you cannot join at this time."
end

MP.RegisterEvent("onPlayerAuth", "myPlayerAuthorizer")
```

---

### `postPlayerAuth`

Triggered after `onPlayerAuth`, regardless of whether the player was accepted or rejected.

**Arguments:**
- `wasRejected` (boolean) - Whether the player was rejected.
- `reason` (string) - Rejection reason if rejected.
- `name` (string) - Player name.
- `role` (string) - Player role.
- `isGuest` (boolean) - Whether guest.
- `identifiers` (table) - Identifiers.

**Cancellable:** no

---

### `onPlayerConnecting`

Triggered when a player starts connecting, after `onPlayerAuth`.

**Arguments:**
- `playerID` (number)

**Cancellable:** no

---

### `onPlayerJoining`

Triggered after the player has finished downloading all mods.

**Arguments:**
- `playerID` (number)

**Cancellable:** no

---

### `onPlayerJoin`

Triggered after the player has finished syncing and entered the game.

**Arguments:**
- `playerID` (number)

**Cancellable:** no

---

### `onPlayerDisconnect`

Triggered when a player disconnects.

**Arguments:**
- `playerID` (number)

**Cancellable:** no

---

### `onChatMessage`

Triggered when a player sends a chat message.

**Arguments:**
- `playerID` (number)
- `playerName` (string)
- `message` (string)

**Cancellable:** yes — returning `1` prevents the message from being shown to anyone.

**Usage:**
```lua
function MyChatMessageHandler(sender_id, sender_name, message)
    if message == "darn" then
        return 1
    else
        return 0
    end
end

MP.RegisterEvent("onChatMessage", "MyChatMessageHandler")
```

---

### `postChatMessage`

Triggered after `onChatMessage`.

**Arguments:**
- `wasSent` (boolean) - Whether the message was sent.
- `playerID` (number)
- `playerName` (string)
- `message` (string)

**Cancellable:** no

---

### `onVehicleSpawn`

Triggered when a player spawns a new vehicle.

**Arguments:**
- `playerID` (number)
- `vehicleID` (number)
- `data` (string) - JSON string with vehicle configuration and positional data.

**Cancellable:** yes — returning a value other than `0` prevents the spawn.

---

### `postVehicleSpawn`

Triggered after `onVehicleSpawn`.

**Arguments:**
- `wasSpawned` (boolean) - Whether the vehicle was actually spawned.
- `playerID` (number)
- `vehicleID` (number)
- `data` (string)

**Cancellable:** no

---

### `onVehicleEdited`

Triggered when a player edits an existing vehicle.

**Arguments:**
- `playerID` (number)
- `vehicleID` (number)
- `data` (string) - JSON string of the new configuration (does not include positional data).

**Cancellable:** yes — returning a value other than `0` cancels the edit.

---

### `postVehicleEdited`

Triggered after `onVehicleEdited`.

**Arguments:**
- `wasAllowed` (boolean) - Whether the edit was allowed.
- `playerID` (number)
- `vehicleID` (number)
- `data` (string)

**Cancellable:** no

---

### `onVehicleDeleted`

Triggered when a vehicle is deleted.

**Arguments:**
- `playerID` (number)
- `vehicleID` (number)

**Cancellable:** no

---

### `onVehicleReset`

Triggered when a player resets a vehicle.

**Arguments:**
- `playerID` (number)
- `vehicleID` (number)
- `data` (string) - JSON string of the new position and rotation (does not include configuration).

**Cancellable:** no

---

### `onVehiclePaintChanged`

Triggered when a vehicle's paint is changed.

**Arguments:**
- `playerID` (number)
- `vehicleID` (number)
- `data` (string) - JSON string with the new paint data.

**Cancellable:** no

---

### `onFileChanged`

Triggered when a file in the plugin directory changes.

**Arguments:**
- `path` (string) - Path of the changed file, relative to the server root.

**Cancellable:** no

**Note:**
Files added after the server has started are not tracked.
