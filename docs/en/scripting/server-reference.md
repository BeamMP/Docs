!!! warning "This site is under construction!"

    This site is being actively worked on. 
    
    Feel you could help? Please do by clicking on the page with a pencil on the right!

    This can be done any page too.

# Server Scripting Reference
## Server Version 3.X

### Introduction

BeamMP-Server release v3.0.0 does some drastic changes to the way the Lua plugin system works. There is no way to use the old lua with a new server, so you'll have to migrate.

The Server's Plugin system uses [Lua 5.3](https://www.lua.org/manual/5.3/). This section details how to get started writing plugins, teaches some basic concepts and gets you started with your first plugin. **It is recommended you read this section even if you know the pre-v3.0.0 system, as a few things changed drastically**.

For a migration guide from pre-v3.0.0 lua, go to the section ["Migrating from old Lua"](#migrating-from-old-lua).


### Directory Structure

Server plugins, unlike mods, are situated (by default) in `Resources/Server`, while mods, which are written for BeamNG.drive and are sent to the clients are in `Resources/Client`. Each plugin must have it's own subfolder in `Resources/Server`, for example for a plugin called "MyPlugin", the structure would be:

```
Resources
└── Server
    ├── MyPlugin
    │   └── main.lua
    └── SomeOtherPlugin
        └── ...
```

Here we also display another plugin called "SomeOtherPlugin", to illustrate how your `Resources/Server` folder can have multiple different plugin folders. We will keep using this directory structure as an example throughout this guide.

You also notice the `main.lua`. You can have as many Lua `.lua` files as you like. All Lua files in your plugin's main directory are loaded in *alphabetical order* (so `aaa.lua` is run before `bbb.lua`).


### Lua Files

Each Lua `.lua` file in the plugin's folder is loaded on server startup. This means that statements outside of functions are evaluated ("run") immediately.

Lua files in subfolders are ignored, but can be `require()`-ed.

For example, our `main.lua` looks like this:

```lua
function PrintMyName()
	print("I'm 'My Plugin'!")
end

print("What's up!")
```

When the server starts and the `main.lua` is loaded, it will run `print("What's up!")` *immediately*, but will **NOT** *call* the `PrintMyName` function yet (because it wasn't called)!

### Events

An event is something like "a player is joining", "a player sent a chat message", "a player spawned a vehicle".

You can cancel events (if they are cancellable) by returning `1` from the handler.

In Lua, you usually want to react to some of these. For this, you can register a "Handler". This is a function which is called when an event happens, and gets passed some arguments.

Example:

```lua
function MyChatMessageHandler(sender_id, sender_name, message)
	-- censoring only the exact message 'darn'
	if message == "darn" then
		-- cancel the event by returning 1
		return 1
	else
		return 0
	end
end

MP.RegisterEvent("onChatMessage", "MyChatMessageHandler")
```

This will effectively make sure that any message that is exactly equal to "darn" will not be sent and won't show in chat (note that for a real profanity filter you'd want to see if the message *contains* "darn", not *is* "darn"). Cancelling an event causes it to not happen, for example a chat message not to be shown to anyone else, a vehicle not to be spawned, etc.

### Custom Events

You can register to any event you like, for example:

```lua
MP.RegisterEvent("MyCoolCustomEvent", "MyHandler")
```

You can then trigger those custom events:

```lua
-- call all event handlers to this in ALL plugins
MP.TriggerGlobalEvent("MyCoolCustomEvent")
-- call all event handlers to this in THIS plugin
MP.TriggerLocalEvent("MyCoolCustomEvent")
```

You can do a lot more with events, but those possibilities will be covered in detail below in the API reference.

### Event Timers ("Threads")

Pre-v3.0.0 Lua had a concept of "threads" which run X times per second. This naming was slightly misleading, as they were synchronous.

v3.0.0 Lua instead has "Event Timers". These are timers which run inside the server, and once they run out, they trigger an event (globally). This is also synchronous. Please be aware that the second argument is an interval in milliseconds.

Example:

```lua
local seconds = 0

function CountSeconds()
	seconds = seconds + 1
end

-- create a custom event called 'EverySecond'
-- and register the handler function 'CountSeconds' to it
MP.RegisterEvent("EverySecond", "CountSeconds")

-- create a timer for this event, which will fire every 1000ms (1s)
MP.CreateEventTimer("EverySecond", 1000)
```

This will cause "CountSeconds" to be called every second. You can also cancel event timers with `MP.CancelEventTimer` (see API reference).

From the server's console, you can run `status` to see how many event timers are currently running, as well as info about event handlers that are waiting. This command will show more information in the future.

### Debugging

Lua is difficult to debug. An industry-grade debugger like `gdb` sadly doesn't exist for embedded Lua.

Generally, you can of course simple `print()` the values you want to inspect at any time. 

In v3.0.0, the server provides a way for you to inject an interpreter into a plugin and subsequently run Lua inside it in realtime. This is the closest we have to a debugger.

Assuming you have the plugin from above which we called `MyPlugin`, you can enter into its Lua state like so:

```
> lua MyPlugin
```

Capitalisation matters here, so be careful its entered correctly. 
The output is something like
```
lua @MyPlugin> 
```
As you can see, we switched into the Lua state for `MyPlugin`. From now on until we enter `exit()` (as of v3.1.0 `:exit`), we will be in `MyPlugin` and can execute Lua there. 

For example, if we have a global called `MyValue`, we can print that value like so:

```
lua @MyPlugin> print(MyValue)
```

You can call functions here and do anything you expect to be able to do.

Since v3.1.0: You can press TAB to autocomplete functions and variables.

WARNING: Sadly, if the Lua state is currently busy executing other code (like a `while` loop), this can fully hang the console until it finishes that work, so be very careful switching to states which may be waiting for something to happen.

Additionally, you can run `status` in the regular console (`> `), which will show you some statistics about Lua, among other things.

### Custom Commands

In order to implement custom commands for the server console, the event `onConsoleInput` can be used. 
This can be useful when you want to add a way for the server owner to signal something to your plugin, or to display internal state in a custom way.

Here's an example:

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

This will enable you to do the following in the server's console:

```
> print hello, world
hello, world
```

We implemented our own `print`. As an exercise, try to build a function like `say`, which sends a chat message to all players, or even a specific player (with `MP.SendChatMessage`).

**Caution:** For your own plugins, it's generally recommended to "namespace" them. Our `print` example, in a plugin called `mystuff`, could be called `mystuff.print` or `ms.print` or similar.

### API Reference

Documentation format: `function_name(arg_name: arg_type, arg_name: arg_type) -> return_types`

### Builtin Functions

#### `print(...)`, `printRaw(...)`

Prints the message to the server console, prefixed with `[DATE TIME] [LUA]`. If you don't want this prefix, you can use `printRaw(...)`.

Example:

```lua
local name = "John Doe"
print("Hello, I'm", name, "and I'm", 32)
```

It can take as many arguments of arbitrary types as you like. It will also happily dump tables!

This behaves like the lua interpreter's `print`, so it will put tabs between arguments.

#### `exit()`

Shuts down the server gracefully. Causes the `onShutdown` event to be triggered.

### MP Functions

#### `MP.CreateTimer() -> Timer`

Creates a timer object, which can be used to keep track of how long something took / how much time elapsed. It starts once created, and can be reset/restarted with `mytimer:Start()`.

You can get the current elapsed time in seconds with `mytimer:GetCurrent()`.

Example:

```lua
local mytimer = MP.CreateTimer()
-- do stuff here that needs to be timed
print(mytimer:GetCurrent()) -- print how much time elapsed
```

Timers do not need to be stopped (and can't be stopped), they have no overhead.

#### `MP.GetOSName() -> string`

Returns the name of the current OS, either `Windows`, `Linux` or `Other`.

#### `MP.GetServerVersion() -> number,number,number`

Returns the current server version in major, minor, patch format. For example, the v3.0.0 version would return `3, 0, 0`.

Example:

```lua
local major, minor, patch = MP.GetServerVersion()
print(major, minor, patch)
```
Output:
```
2	4	0
```

#### `MP.RegisterEvent(event_name: string, function_name: string)`

Remembers the function with name `Function Name` as an event handler to event with name `Event Name`.

You can register as many handlers to an event as you like.

For a list of events the server provides, see [here](/en/Scripting/new-lua-scripting#events-1).

If the event with that name doesn't exist, it's created, and thus RegisterEvent cannot fail. This can be used to create custom events.

#### `MP.CreateEventTimer(event_name: string, interval_ms: number, [strategy: number (since v3.0.2)])`

Starts a timer inside the server which triggers the event `event_name` every `interval_ms` milliseconds.

Event timers can be cancelled with `MP.CancelEventTimer`.

Intervals <25 ms are not encouraged, as multiple such intervals will likely not be served in time reliably. While multiple timers can be started on the same event, it's encouraged to create as few event timers as possible. For example, if you need one event that runs every half second, and one which runs every second, consider just making the half-second one and running the every-second-functiosecond trigger.

You may also use `MP.CreateTimer` to make a timer and measure time passed since the last event call, in order to minimize event timers, though this is not necessarily recommended as it increases the code complexity significantly.

**Since 3.0.2:**

An optional `CallStrategy` may be supplied as the third argument. This can be either:

- `MP.CallStrategy.BestEffort` (default): Will try to get your event to trigger at the specified interval, but will refuse to queue handlers if a handler takes too long.
- `MP.CallStrategy.Precise`: Will enqueue event handlers at the exact interval specified. Can lead to the queue filling up if the handler takes longer than the interval. Only use if you NEED the exact interval.

#### `MP.CancelEventTimer(event_name: string)`

Cancels all timers on the event with the name `event_name` On some occasions, the timer might go off one more time before being cancelled, due to the nature of asynchronous programming.

#### `MP.TriggerLocalEvent(event_name: string, ...) -> table`

Plugin-local synchronous event trigger.

Triggers an event locally, which causes all handlers to that event *in the current lua state* (usually the current plugin, unless state was shared via PluginConfig.toml) to be called.

You can pass arguments to this function (`...`) which are copied and sent to all handlers as function arguments.

This call is synchronous and will return once all event handlers finished.

The returned value is a table of all results. If a handler returned a value, it will be in this table, unannotated and unnamed. This can be used to "collect" things, or register sub-handlers for events that can be cancelled. This is practically an array.

Example:

```lua
local Results = MP.TriggerLocalEvent("MyEvent")
print(Results)
```

#### `MP.TriggerGlobalEvent(event_name: string, ...) -> table`

Global asynchronous event trigger.

Triggers an event globally, which causes all handlers to that event *in all plugins* (including *this* plugin) to be called.

You can pass arguments to this function (`...`) which are copied and sent to all handlers as function arguments.

This call is asynchronous and returns a future-like object. Local handlers (handlers in the same plugin as the caller) run synchronously and immediately. 

The table returned has two functions:

- `IsDone() -> boolean` tells you whether all handlers have finished. You can wait until this is true by checking it and `MP.Sleep`-ing for a little bit in a loop.
- `GetResults() -> table` returns an unannotated unnamed table with all return values of all handlers. This is practically an array.

Make sure to call these with `Obj:Function()` syntax (`:`, NOT `.`).

Example:

```lua
local Future = MP.TriggerGlobalEvent("MyEvent")
-- wait until handlers finished
while not Future:IsDone() do
	MP.Sleep(100) -- sleep 100 ms
end
local Results = Future:GetResults()
print(Results)
```

Be aware that a handler registering to "MyEvent" here and never returning could lock up your plugin. You likely want to keep track of how long you have waited and stop waiting after a few seconds.

#### `MP.Sleep(time_ms: number)`

Waits for an amount of time, specified in milliseconds.

This does not yield the execution of the lua state and nothing will execute in the state while asleep. 

WARNING: Do NOT sleep for >500 ms if you have event handlers registered, unless you know *exactly* what you are doing. This is intended to be used to sleep for 1-100 ms, in order to wait for results or similar. A locked up (sleeping) lua state can slow the entire server down drastically if not careful.

#### `MP.SendChatMessage(player_id: number, message: string)`

Sends a chat message that only the specified player can see (or everyone if the ID is `-1`).
In the game, this will not appear as a directed message.

You can use this, for example, to tell a player *why* you cancelled their vehicle spawn, chat message, or similar, or to display some information about your server.

#### `MP.TriggerClientEvent(player_id: number, event_name: string, data: string) -> boolean`
*until v3.1.0*

#### `MP.TriggerClientEvent(player_id: number, event_name: string, data: string) -> boolean,string`
*since v3.1.0*

#### `MP.TriggerClientEventJson(player_id: number, event_name: string, data: table) -> boolean,string`
*since v3.1.0*

Will call the given event with the given data on the specified client (-1 for broadcast). This event can then be handled in a clientside lua mod, see the "Client Scripting" documentation for this.

Will return `true` if it was able to send the message (for `id = -1`, so broadcasts, its always `true`), and `false` if the player with that ID doesn't exist or is disconnected but still has an ID (this is a known issue).

If `false` is returned, it makes no sense to retry this event, and a response (if any was expected) shouldn't be expected.

Since v3.1.0, the second return value contains an error message if the function failed. Also since this version, the `*Json` version of the function takes a table as the data argument, and converts it to json. This is simply a shorthand for `MP.TriggerClientEvent(..., Util.JsonEncode(mytable))`.

#### `MP.GetPlayerCount() -> number`

Returns the amount of players currently in the server.

#### `MP.GetPositionRaw(pid: number, vid: number) -> table,string`

Returns the current position of the vehicle `vid` (vehicle id) of player `pid` (player id), and an error string if an error occurred.

The table is decoded from a position packet, so it has a variety of data (that's why this function is postfixed "Raw").

TODO: Document fields. For now, users need to print() the result.

#### `MP.IsPlayerConnected(player_id: number) -> boolean`

// TODO Documentation incomplete

Whether the player is connected.

#### `MP.GetPlayerName(player_id: number) -> string`

Gets the display-name of the player.

#### `MP.RemoveVehicle(player_id: number, vehicle_id: number)`

Removes the specified vehicle for the specified player.

#### `MP.GetPlayerVehicles(player_id: number) -> table`

Returns a table of all vehicles the player currently has. Each entry in the table is a mapping from vehicle ID to vehicle data (which is currently a raw json string).

#### `MP.GetPlayers() -> table`

Returns a table of all connected players. This table maps IDs to Names, like so:  
```json
{
	0: "LionKor",
	1: "JohnDoe"
}
```

#### `MP.IsPlayerGuest(player_id: number) -> boolean`

Whether the player is a guest. A guest is someone who didn't log in, and instead chose to play as a guest. Their name is usually `guest` followed by a long number.

As guests aren't logged in, you might want to disallow them from joining, for example when running a serious racing server or similar.

#### `MP.DropPlayer(player_id: number, [reason: string])`

Kicks the player with the specified ID. The reason parameter is optional.

#### `MP.GetStateMemoryUsage() -> number`

Returns the memory usage of the current Lua state in bytes.

#### `MP.GetLuaMemoryUsage() -> number` 

Returns the memory usage of all lua states combined, in bytes.

#### `MP.GetPlayerIdentifiers(player_id: number) -> table`

Returns a table with information about the player, such as beammp forum ID and IP address.

Example:

```json
{
	ip: "1.2.3.4",
	beammp: "1234"
}
```

*Until v3.1.0 the `ip` field is incorrect and will not work as intended. Fixed in v3.1.0.*

#### `MP.Set(setting: number, ...)`

Sets a ServerConfig setting temporarily. For this, the `MP.Settings` table is useful.

Example:

Turning on Debug mode
```lua
MP.Set(MP.Settings.Debug, true)
```

#### `MP.Settings`

You can see an up-to-date list of these by printing them, like so:
```lua
print(MP.Settings)
```

### Util Functions

#### `Util.Json*`

Since BeamMP-Server `v3.1.0`.

This is a builtin JSON library, which is usually much faster than any Lua JSON library. Behind the scenes, C++'s `nlohmann::json` library is used, which is JSON compliant, full-coverage unit tested and continuously being fuzzed.

#### `Util.JsonEncode(table: table) -> string`

Encodes a Lua table into a JSON string, recursively (tables inside tables inside tables ... work as expected). All primitive types are respected, functions, userdata and similar are ignored.

The resulting JSON is minified and can be pretty-printed by using `Util.JsonPrettify` to prettify it.

Example: 
```lua
local player = {
	name = "Lion",
	age = 69,
	skills = { "skill A", "skill B" }
}
local json = Util.JsonEncode(player)
```

Results in: 
```json
{"name":"Lion","age":69,"skills":["skill A","skill B"]}
```

#### `Util.JsonDecode(json: string) -> table`

Decodes JSON into a Lua table. Will return `nil` if this failed, and print an error.

Example:
```lua
local json = "{\"message\":\"OK\",\"code\":200}"
local tbl = Util.JsonDecode(json)
```

Results in:
```lua
{
	message = "OK",
	code = 200,
}
```

#### `Util.JsonPrettify(json: string) -> string`

Add indentation and newlines to the json to make it more readable for humans.

Example:
```
local myjson = Util.JsonEncode({ name="Lion", age = 69, skills = { "skill A", "skill B" } })

print(Util.JsonPrettify(myjson))
```

Results in:
```json
{
    "age": 69.0,
    "name": "Lion",
    "skills": [
        "skill A",
        "skill B"
    ]
}
```

#### `Util.JsonMinify(json: string) -> string`

Removes indentation, newlines and any other whitespace. Not necessary unless you called `Util.JsonPrettify`, as all output from `Util.Json*` is already minified.

Example:
```lua
local pretty = Util.JsonPrettify(Util.JsonEncode({ name="Lion", age = 69, skills = { "skill A", "skill B" } }))

print(Util.JsonMinify(pretty))
```

Results in:
```json
{"age":69.0,"name":"Lion","skills":["skill A","skill B"]}
```

#### `Util.JsonFlatten(json: string) -> string`

Creates a JSON object whose key are flattened to JSON pointers, according to RFC 6901. You can restore the original with `Util.JsonUnflatten()`. For this to work, all values need to be primitives.

Example:
```lua
local json = Util.JsonEncode({ name="Lion", age = 69, skills = { "skill A", "skill B" } })
print("normal: " ..json)
print("flattened: " .. Util.JsonFlatten(json))
print("flattened pretty: " .. Util.JsonPrettify(Util.JsonFlatten(json)))

```

Results in: 
```json
normal: {"age":69.0,"name":"Lion","skills":["skill A","skill B"]}
flattened: {"/age":69.0,"/name":"Lion","/skills/0":"skill A","/skills/1":"skill B"}
flattened pretty: {
    "/age": 69.0,
    "/name": "Lion",
    "/skills/0": "skill A",
    "/skills/1": "skill B"
}
```

#### `Util.JsonUnflatten(json: string) -> string`

Restores the arbitrary nesting of a JSON value that has been flattened before using the `Util.JsonFlatten()` function. 

#### `Util.JsonDiff(a: string, b: string) -> string`

Creates a JSON diff according to RFC 6902 (http://jsonpatch.com/). This diff can then be applied as a patch via `Util.JsonDiffApply()`. Returns the diff.

#### `Util.JsonDiffApply(base: string, diff: string) -> string`

Applies the JSON `diff` to `base` as a JSON patch (RFC 6902, http://jsonpatch.com/). Returns the result.

### `Util.Random*`

Since BeamMP-Server `v3.1.0`.

#### `Util.Random() -> float`

Returns a float between 0 and 1.

Example:
```lua
local rand = Util.Random()
print("rand: " .. rand)
```

Results in: 
```lua
rand: 0.135477
```

#### `Util.RandomIntRange(min: int, max: int) -> int`

Returns an integer between min and max.

Example:
```lua
local randInt = Util.RandomIntRange(1, 100)
print("randInt: " .. randInt)
```

Results in: 
```lua
randInt:  69
```

#### `Util.RandomRange(min: number, max: number) -> float`

Returns a float between min and max.

Example:
```lua
local randFloat = Util.RandomRange(1, 1000)
print("randFloat: " .. randFloat)
```

Results in: 
```lua
randFloat: 420.6969
```

### FS Functions

`FS` functions are **f**ile**s**ystem functions, which aim to be better than the default Lua capabilities.

Please always use `/` as a separator when specifying paths, as this is cross-platform (windows, linux, macos, ...).

#### `FS.CreateDirectory(path: string) -> bool,string`


Creates the specified directory, and any parent directories if they don't exist. Behavior is roughly equivalent to the common linux command `mkdir -p`.

Returns whether the operation had an error, and, if it *did*, an error message. This means that, if `true` is returned, an error occurred.

Example:
```lua
local error, error_message = FS.CreateDirectory("data/mystuff/somefolder")

if error then
	print("failed to create directory: " .. error_message)
else
	-- do something with the directory
end
```

#### `FS.Remove(path: string) -> bool,string`

Removes the specified file or folder.

Returns `true` if an error occured, with an error message in the second return value.

Example:
```lua
local error, error_message = FS.Remove("myfile.txt")

if error then
	print("failed to delete myfile: " .. error_message)
end
```

#### `FS.Rename(pathA: string, pathB: string) -> bool,string`

Renames (or moves) `pathA` to `pathB`.

Returns `true` if an error occured, with an error message in the second return value.

#### `FS.Copy(pathA: string, pathB: string) -> bool,string`

Copies `pathA` to `pathB`.

Returns `true` if an error occured, with an error message in the second return value.

#### `FS.GetFilename(path: string) -> string`

Returns the last part of a path, which is usually the filename.
Here are some example inputs + outputs:

```lua
input -> output

"my/path/a.txt" 	-> "a.txt"
"somefile.txt" 		-> "somefile.txt"
"/awesome/path" 	-> "path"
```

#### `FS.GetExtension(path: string) -> string`


Returns the extension of the file, or an empty string if no extension exists.
Here are some example inputs + outputs

```lua
input -> output

"myfile.txt" 					-> ".txt"
"somefile." 					-> "."
"/awesome/path" 				-> ""
"/awesome/path/file.zip.txt"	-> ".txt"
"myexe.exe" 					-> ".exe"
```


#### `FS.GetParentFolder(path: string) -> string`

Returns the path to the parent directory, i.e. the folder a file or folder is contained in.
Here are some example inputs + outputs:

```lua
input -> output

"/var/tmp/example.txt" 		-> "/var/tmp"
"/"							-> "/"
"mydir/a/b/c.txt"			-> "mydir/a/b"
```


#### `FS.Exists(path: string) -> bool`

Returns `true` if the path exists, `false` if it doesn't.

#### `FS.IsDirectory(path: string) -> bool`

Returns `true` if the specified path is a directory, `false` if it's not. Note that `false` does NOT imply that the path is a file (see `FS.IsFile()`).

#### `FS.IsFile(path: string) -> bool`

Returns `true` if the specified path is a regular file (not a symlink, hardlink, block device, etc.), `false` if it's not. Note taht `false` does NOT imply that the path is a directory (see `FS.IsDirectory()`).

#### `FS.ListDirectories(path: string) -> table`

Returns a table of all the directories in the given path.

Example:
```lua
print(FS.ListDirectories("Resources"))
```
Results in: 
```lua
{
    1: "Client",
    2: "Server"
}
```

#### `FS.ListFiles(path: string) -> table`

Returns a table of all the files in the given path.

Example:
```lua
print(FS.ListFiles("Resources/Server/examplePlugin"))
```
Results in: 
```lua
{
    1: "example.json",
    2: "example.lua"
}
```

#### `FS.ConcatPaths(...) -> string`

Adds together (concatenates) all arguments with the system's preferred path separator.

Example:
```lua  
FS.ConcatPaths("a", "b", "/c/d/e/", "/f/", "g", "h.txt")
```
results in
```
a/b/c/d/e/f/g/h.txt
```

Also resolves `..`, if that exists in the path at any point. This function is safer than concatenating strings in lua, and respects the platform's separators.

Please always use `/` as a separator when specifying paths, as this is cross-platform (windows, linux, macos, ...).

### Events

#### Explanation

- Arguments: List of arguments given to handlers of this event
- Cancellable: Whether the event can be cancelled. If it can be cancelled, a handler can do so by returning `1`, like `return 1`.

#### Summary of events

A player join triggers the following events in the given order:

1. `onPlayerAuth`
2. `onPlayerConnecting`
3. `onPlayerJoining`
4. `onPlayerJoin`

#### System Events

##### `onInit`

Arguments: NONE
Cancellable: NO

Triggered right after all files in the plugin were initialized.

##### `onShutdown`

Arguments: NONE
Cancellable: NO

Triggered when the server shuts down. Currently happens after all players were kicked.

#### Game-Related Events

##### `onPlayerAuth`

Arguments: `player_name: string`, `player_role: string`, `is_guest: bool`, `identifiers: table -> beammp, ip`
Cancellable: YES

First event that gets triggered when a player wants to join.

##### `onPlayerConnecting`

Arguments: `player_id: number`
Cancellable: NO

Triggered when a player first starts connecting, after `onPlayerAuth`.

##### `onPlayerJoining`

Arguments: `player_id: number`
Cancellable: NO

Triggered when a player has finished loading all mods, after `onPlayerConnecting`.

##### `onPlayerDisconnect`

Arguments: `player_id: number`
Cancellable: NO

Triggered when a player disconnects.

##### `onChatMessage`

Arguments: `player_id: number`, `player_name: string`, `message: string`
Cancellable: YES

Triggered when a player sends a chat message. When cancelled, it will not show the chat message to anyone, not even the player who sent it.

##### `onVehicleSpawn`

Arguments: `player_id: number`, `vehicle_id: number`, `data: string`
Cancellable: YES

Triggered when a player spawns a new vehicle. The `data` argument contains the car's config as json. When cancelled, the car is not spawned.

##### `onVehicleEdited`

Arguments: `player_id: number`, `vehicle_id: number`, `data: string`
Cancellable: YES

Triggered when a player edits their vehicle and applies the edit. The `data` argument contains the car's change config as json. When cancelled, the edit is not applied.

##### `onVehicleDeleted`
 Lua, among other things.

Custom Commands
In order to implement custom commands for the server console, the event onConsoleInput can be used. This can be useful when you want to add a way for the server owner to signal something to your plugin, or to display internal state in a custom way.

Here’s an example:

function handleConsoleInput(cmd)
    local delim = cmd:find(' ')
    if delim then
        local message = cmd:sub(delim+1)
        if cmd:sub(1, delim-1) == "print" then
            return message
        end
    end
end

Arguments: `player_id: number`, `vehicle_id: number`
Cancellable: NO

Triggered when a player deletes their vehicle.

##### `onVehicleReset`

Arguments: `player_id: number`, `vehicle_id: number`, `data: string`
Cancellable: NO

Triggered when a player resets their vehicle. `data` is the car's data as json.

##### `onFileChanged`

*since v3.1.0*

Arguments: `path: string`
Cancellable: NO

Triggered if a file changes in the `Resources/Server` directory *or any subdirectory of it*. 

Any file change in the `Resources/Server/<plugin>` directory (not in a subfolder of it) will trigger a Lua state reload, and an `onFileChanged` event.

Any file in subfolders of `Resources/Server/<plugin>`, such as `Resources/Server/<plugin>/lua/stuff.lua`, will not trigger a state reload and will only trigger an `onFileChanged` event. This way, you can reload it yourself in the correct way (or not reload it).

This applies to all files, not just `.lua` files.

The `path` is relative to the root of the server, for example `Resources/Server/myplugin/myfile.txt`. You can do further processing on this string with the `FS.*` family of functions, such as extracting the name or extension (`FS.GetExtension(...)`, `FS.GetFilename(...)`, ...).

Note: Files added after the server is started are *not* tracked as of v3.1.0.

### Migrating from old Lua

This is a short run-down of the basic steps to take to migrate from old to new lua.

#### Understand how the new lua works

For this, please read through the section ["Introduction"](#how-to-start-writing-a-plugin) and all its subsections carefully.
It's necessary to do the next steps properly.

#### Search & Replace

First, you should search and replace all MP functions. The substitution should add an `MP.` infront of all MP functions, except `print()`.

Example:

```lua
local players = GetPlayers()
print(#players)
```
becomes

```lua
local players = MP.GetPlayers()
print(#players) -- note how print() doesn't change
```

#### Goodbye Threads, Hello Event Timers!

As discussed in the introduction, threads are event timers. For any calls to `CreateThread`, replace it with a call to `CreateEventTimer`. Carefully inspect the timing your old CreateThread had (the number was X per second), and think about what the event timer timeout value is for this (which is in milliseconds). Also keep in mind that instead of a function name, it takes an event name, so you will have to register an event as well.

Example:

```lua
CreateThread("myFunction", 2) -- calls "myFunction" twice per second
```
becomes

```lua
MP.RegisterEvent("myEvent", "myFunction") -- registering our event for the timer
MP.CreateEventTimer("myEvent", 500) -- 500 milliseconds = 2 times per second
```

If you have many event timers, it makes sense to see if you can combine them, e.g. by creating a "every minute" event and registering multiple functions to it which need to be called every minute, instead of having multiple event timers. Each event timer costs the server a little bit of time to trigger.

#### No more implicit event calling

You need to register all your events. You cannot rely on function names. In the old lua, this was unclear, but in the new lua this is usually enforced. A good pattern is: 

```lua
MP.RegisterEvent("onChatMessage", "chatMessageHandler")
-- or 
MP.RegisterEvent("onChatMessage", "handleChatMessage")
```

This is a better pattern than calling the handler the same as the event, which is misleading and confusing.


## Server Version 2.X
---

> This is 2.x scripting. Only refer to this if your server is old/outdated (version 2.x.x). For the reference for 3.x scripting and beyond, see [this page on 3.x scripting](https://wiki.beammp.com/en/Scripting/new-lua-scripting).
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
