## 目录

### 全局

- [全局函数](#global-functions)

### MP

- [玩家](#mp--players)
- [车辆](#mp--vehicles)
- [通信](#mp--communication)
- [事件](#mp--events)
- [工具](#mp--utilities)

### Util

- [日志记录](#util--logging)
- [JSON](#util--json)
- [随机数](#util--random)
- [性能分析](#util--profiling)

### Http

- [HTTP 函数](#http)

### FS

- [检查](#fs--checks)
- [操作](#fs--operations)
- [路径](#fs--paths)

### 事件

- [事件参考](#events)

---

## 全局函数

### `print(...)`

打印到服务器控制台，以日期、时间和`[LUA]`为前缀。

**参数：**

- `...` （任意）——任何类型的值。表会连同其内容一起打印出来。

**用法：**

```lua
local name = "John Doe"
print("Hello, I'm", name, "and I'm", 32)
```

---

### `printRaw(...)`

不带任何前缀直接打印到服务器控制台。

**参数：**

- `...` （任意）——任何类型的值。

---

### `exit()`

正常关闭服务器。触发`onShutdown`事件。

---

## MP — 玩家

### `MP.GetPlayerCount() -> number`

返回当前在线玩家的数量。

**返回：**

- （数字）- 玩家人数。

---

### `MP.GetPlayers() -> table`

返回所有已连接玩家的表。

**返回：**

- （表）- `{[playerID] = playerName}`的映射。

---

### `MP.GetPlayerName(playerID) -> string`

根据ID返回玩家名称。

**参数：**

- `playerID` （数字）- 玩家的 ID。

**返回：**

- （字符串）- 玩家名称，如果找不到则为`""` 。

**用法：**

```lua
local player_id = 4
print(MP.GetPlayerName(player_id))
```

---

### `MP.GetPlayerIDByName(name) -> number`

根据名称返回玩家的 ID。

**参数：**

- `name` （字符串）- 玩家的名称。

**返回：**

- （数字）- 玩家 ID，如果找不到则为`-1` 。

---

### `MP.GetPlayerIdentifiers(playerID) -> table`

返回玩家的标识符，例如 IP 地址、BeamMP 论坛 ID 和 Discord ID。

**参数：**

- `playerID` （数字）- 玩家的 ID。

**返回：**

- （表）- 包含键`ip` 、 `beammp` 、 `discord` （仅当已链接时）的表。
- （nil）- 如果未找到玩家。

**用法：**

```lua
local player_id = 5
print(MP.GetPlayerIdentifiers(player_id))
-- { ip: "127.0.0.1", discord: "12345678987654321", beammp: "1234567" }
```

---

### `MP.GetPlayerRole(playerID) -> string|nil`

返回玩家在 BeamMP 后端设置的角色。

**参数：**

- `playerID` （数字）- 玩家的 ID。

**返回：**

- （字符串）- 玩家的角色。
- （nil）- 如果未找到玩家。

---

### `MP.IsPlayerConnected(playerID) -> boolean`

返回是否已收到来自玩家的 UDP 数据包，即连接是否已完全建立。

**参数：**

- `playerID` （数字）- 玩家的 ID。

**返回：**

- （布尔值）- 如果完全连接， `true` 。

**用法：**

```lua
local player_id = 8
print(MP.IsPlayerConnected(player_id))
```

---

### `MP.IsPlayerGuest(playerID) -> boolean`

返回玩家是否为访客（未在 BeamMP 论坛注册）。

**参数：**

- `playerID` （数字）- 玩家的 ID。

**返回：**

- （布尔值）- 如果是访客`true` 。

---

### `MP.DropPlayer(playerID, reason?)`

将玩家踢出服务器。

**参数：**

- `playerID` （数字）- 玩家的 ID。
- `reason` （字符串，可选）- 被踢的原因。

**用法：**

```lua
function ChatHandler(player_id, player_name, message)
    if string.match(message, "darn") then
        MP.DropPlayer(player_id, "Profanity is not allowed")
        return 1
    end
end
```

---

## MP — 车辆

### `MP.GetPlayerVehicles(playerID) -> table`

返回玩家的所有车辆。

**参数：**

- `playerID` （数字）- 玩家的 ID。

**返回：**

- （表）- `{[vehicleID] = dataString}`的映射，其中 dataString 是原始 JSON 字符串。
- （nil）- 如果玩家没有车辆或未被找到。

**用法：**

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

返回车辆的当前原始位置。

**参数：**

- `playerID` （数字）- 玩家的 ID。
- `vehicleID` （number）- 车辆的 ID。

**返回：**

- （表）- 包含以下键的表： `pos` 、 `rot` 、 `vel` 、 `rvel` 、 `tim` 、 `ping` 。
- （字符串）- 如果发生错误，则显示错误信息；成功时显示空字符串。

**注意：** `pos` 、 `rot` 、 `vel` 、 `rvel`中的每个值都是一个表，索引为`1, 2, 3` （ `rot`的索引为`4` ）。

**用法：**

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

移除玩家拥有的车辆。

**参数：**

- `playerID` （数字）- 玩家的 ID。
- `vehicleID` （number）- 车辆的 ID。

**用法：**

```lua
local player_id = 3
local player_vehicles = MP.GetPlayerVehicles(player_id)

for vehicle_id, vehicle_data in pairs(player_vehicles) do
    MP.RemoveVehicle(player_id, vehicle_id)
end
```

---

## MP — 通讯

### `MP.SendChatMessage(playerID, message, logChat?)`

向特定玩家或所有人发送聊天消息。

**参数：**

- `playerID` （数字）- 玩家的 ID， `-1`表示所有人。
- `message` （字符串）- 消息内容。
- `logChat` （布尔值，可选）- 是否记录到服务器日志（默认值： `true` ）。

**注意：**此函数不返回值。

**用法：**

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

向特定玩家或所有玩家发送通知（弹出窗口）。

**参数：**

- `playerID` （数字）- 玩家的 ID， `-1`表示所有人。
- `message` （字符串）- 通知内容。
- `icon` （字符串，可选）- 通知图标。
- `category` （字符串，可选）- 通知类别。

**注意：**此函数不返回值。当仅使用 3 个参数（不指定类别）调用时，类别会自动设置为消息的值。

---

### `MP.ConfirmationDialog(playerID, title, body, buttons, interactionID, warning?, reportToServer?, reportToExtensions?)`

向玩家发送带有按钮的确认对话框。

**参数：**

- `playerID` （数字）- 玩家的 ID， `-1`表示所有人。
- `title` （字符串）- 对话框标题。
- `body` （字符串）- 对话框正文。
- `buttons` （表）- 按钮数组。
- `interactionID` （字符串）- 此交互的唯一标识符。
- `warning` （布尔值，可选）- 显示警告样式（默认值： `false` ）。
- `reportToServer` （布尔值，可选）- 向服务器发送响应（默认值： `true` ）。
- `reportToExtensions` （布尔值，可选）- 触发本地事件（默认值： `true` ）。

**注意：**当只使用 5 个参数调用该函数时，该函数不返回值。当使用 6-8 个参数调用该函数时，它会返回`boolean, string` 。

---

### `MP.TriggerClientEvent(playerID, eventName, data) -> boolean, string`

将事件发送给特定客户端或所有人。

**参数：**

- `playerID` （数字）- 玩家的 ID， `-1`表示所有人。
- `eventName` （字符串）- 事件名称。
- `data` （字符串）- 要发送的数据。

**返回：**

- （布尔值）- 如果发送成功则为`true` `-1`始终为`true` 。
- （字符串）- 如果失败，则显示错误消息。

---

### `MP.TriggerClientEventJson(playerID, eventName, data) -> boolean, string`

与`TriggerClientEvent`相同，但接受 Lua 表并自动将其编码为 JSON。

**参数：**

- `playerID` （数字）- 玩家的 ID， `-1`表示所有人。
- `eventName` （字符串）- 事件名称。
- `data` （表） - 要进行 JSON 编码并发送的 Lua 表。

**返回：**

- （布尔值）- 成功时为`true` 。
- （字符串）- 如果失败，则显示错误消息。

---

## MP — 事件

### `MP.RegisterEvent(eventName, functionName)`

将函数注册为事件的处理程序。

**参数：**

- `eventName` （字符串）- 事件名称。
- `functionName` （字符串）- 要注册的 Lua 函数的名称。

**注意：**如果事件不存在，则会创建该事件。可以为同一个事件注册多个处理程序。

**用法：**

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

仅在当前状态下触发事件。同步。

**参数：**

- `eventName` （字符串）- 事件名称。
- `...` （任意，可选）——传递给处理程序的参数。

**返回：**

- （表）- 所有处理程序的返回值表。

**用法：**

```lua
local Results = MP.TriggerLocalEvent("MyEvent")
print(Results)
```

---

### `MP.TriggerGlobalEvent(eventName, ...) -> table`

在所有状态下触发事件。异步执行。本地处理程序同步且立即运行。

**参数：**

- `eventName` （字符串）- 事件名称。
- `...` （任意，可选）- 参数。支持的类型：字符串、数字、布尔值、表。

**返回：**

- （表）- 类似 Future 的对象，包含：
    - `:IsDone() -> boolean` — 所有处理程序是否已完成。
    - `:GetResults() -> table` — 返回所有处理程序的值。

**注意：**调用这些方法时要用冒号`:`不要用句点`.` 。

**用法：**

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

创建一个定时器，重复触发一个事件。

**参数：**

- `eventName` （字符串）- 要触发的事件。
- `intervalMS` （数值）- 触发之间的间隔，以毫秒为单位。
- `strategy` （数字，可选）- `MP.CallStrategy.BestEffort` （默认值）或`MP.CallStrategy.Precise` 。

**注意：**不建议使用低于 25 毫秒的间隔，且服务可能无法稳定运行。

**用法：**

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

取消已存在的事件计时器。

**参数：**

- `eventName` （字符串）- 事件名称。

**注意：**由于异步行为，该事件在被取消之前可能会再次触发一次。

---

## MP — 工具

### `MP.CreateTimer() -> table`

创建一个计时器对象，用于测量经过的时间。

**返回：**

- （表）- 对象包含：
    - `:GetCurrent() -> float` — 自上次开始以来经过的秒数。
    - `:Start()` — 重置计时器。

**用法：**

```lua
local mytimer = MP.CreateTimer()
-- do stuff here that needs to be timed
print(mytimer:GetCurrent())
```

---

### `MP.GetOSName() -> string`

返回服务器操作系统的名称。

**返回：**

- （字符串）- `"Windows"` 、 `"Linux"`或`"Other"` 。

---

### `MP.GetServerVersion() -> number, number, number`

返回服务器版本。

**返回：**

- （数字）- 主要
- （数字）- 次要
- （number）- 补丁

**用法：**

```lua
local major, minor, patch = MP.GetServerVersion()
print(major, minor, patch)
```

---

### `MP.Get(configID) -> value`

通过 ID 读取服务器配置设置。

**参数：**

- `configID` （数字）- 来自`MP.Settings`的 ID。

**返回：**

- （值）- 设置的当前值。

---

### `MP.Set(configID, value)`

临时更改服务器配置设置。更改不会保存到配置文件中。

**参数：**

- `configID` （数字）- 来自`MP.Settings`的 ID。
- `value` （任意）- 新值。类型必须与设置匹配。

**用法：**

```lua
MP.Set(MP.Settings.Debug, true)
```

---

### `MP.Settings`

用于`MP.Get`和`MP.Set`设置 ID 枚举。

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

用于`MP.CreateEventTimer`枚举。

```lua
MP.CallStrategy.BestEffort  -- Skip trigger if previous handler hasn't finished (default)
MP.CallStrategy.Precise     -- Always trigger, even if it causes the queue to build up
```

---

### `MP.Sleep(ms)`

暂停当前​​ Lua 状态若干毫秒。

**参数：**

- `ms` （数字）- 睡眠时间（以毫秒为单位）。

**注意：**睡眠状态下不会执行任何操作。如果注册了事件处理程序，**请勿让服务器睡眠超过 500 毫秒**——睡眠状态会显著降低整个服务器的运行速度。

**用法：**

```lua
local Future = MP.TriggerGlobalEvent("MyEvent")
while not Future:IsDone() do
    MP.Sleep(100)
end
```

---

### `MP.GetStateMemoryUsage() -> number`

返回当前 Lua 状态的内存使用情况。

**返回：**

- （数字）- 内存大小（以字节为单位）。

---

### `MP.GetLuaMemoryUsage() -> number`

返回所有 Lua 状态的总内存使用量。

**返回：**

- （数字）- 内存大小（以字节为单位）。

---

## Util — 日志记录

### `Util.LogInfo(...)` 、 `Util.LogWarn(...)` 、 `Util.LogError(...)` 、 `Util.LogDebug(...)`

在相应级别的服务器日志中打印信息。

**参数：**

- `...` （任意）——任何类型的值。

**注意：**仅当启用`MP.Settings.Debug`时才会显示`Util.LogDebug` 。

**用法：**

```lua
Util.LogInfo("Hello, World!")
Util.LogWarn("Cool warning")
Util.LogError("Oh no!")
Util.LogDebug("hi")
```

---

## Util — JSON

### `Util.JsonEncode(table) -> string`

将 Lua 表编码为 JSON 字符串。

**参数：**

- `table` （table） - 要编码的表。

**返回：**

- （字符串）- 压缩后的 JSON 字符串。

**注意：**根据键类型自动检测数组还是对象。函数、用户数据和不支持的类型将被忽略。

**用法：**

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

将 JSON 字符串解码为 Lua 表。

**参数：**

- `json` （字符串）- 有效的 JSON 字符串。

**返回：**

- （表）——解码后的表。
- （nil）- 如果 JSON 无效。

**用法：**

```lua
local json = "{\"message\":\"OK\",\"code\":200}"
local tbl = Util.JsonDecode(json)
-- { message = "OK", code = 200 }
```

---

### `Util.JsonPrettify(json) -> string`

为 JSON 字符串添加缩进和换行符，以提高可读性（缩进为 4）。

**参数：**

- `json` （字符串）- 有效的 JSON 字符串。

**返回：**

- （字符串）- 美化打印的 JSON。

**用法：**

```lua
local myjson = Util.JsonEncode({ name="Lion", age = 69, skills = { "skill A", "skill B" } })
print(Util.JsonPrettify(myjson))
```

---

### `Util.JsonMinify(json) -> string`

从 JSON 字符串中删除不必要的空格和换行符。

**参数：**

- `json` （字符串）- 有效的 JSON 字符串。

**返回：**

- （字符串）- 压缩后的 JSON。

**用法：**

```lua
local pretty = Util.JsonPrettify(Util.JsonEncode({ name="Lion", age = 69 }))
print(Util.JsonMinify(pretty))
```

---

### `Util.JsonFlatten(json) -> string`

根据 RFC 6901 将嵌套的 JSON 扁平化为`/a/b/c`样式的键。

**参数：**

- `json` （字符串）- 有效的 JSON 字符串。

**返回：**

- （字符串）- 扁平化的 JSON。

**用法：**

```lua
local json = Util.JsonEncode({ name="Lion", skills = { "skill A", "skill B" } })
print(Util.JsonFlatten(json))
-- '{"/name":"Lion","/skills/0":"skill A","/skills/1":"skill B"}'
```

---

### `Util.JsonUnflatten(json) -> string`

将扁平化的 JSON 恢复到其嵌套结构。

**参数：**

- `json` （字符串）- 扁平化的 JSON 字符串。

**返回：**

- （字符串）- 嵌套 JSON。

---

### `Util.JsonDiff(a, b) -> string`

根据 RFC 6902 计算两个 JSON 字符串之间的差异。

**参数：**

- `a` （字符串）- 第一个 JSON 字符串。
- `b` （字符串）- 第二个 JSON 字符串。

**返回：**

- （字符串）- 表示差异的 JSON 补丁。

---

## Util — 随机

### `Util.Random() -> float`

返回一个介于 0 和 1 之间的随机浮点数。

**返回：**

- （float）

**用法：**

```lua
local rand = Util.Random()
print("rand: " .. rand)
-- rand: 0.135477
```

---

### `Util.RandomRange(min, max) -> float`

返回给定范围内的随机浮点数。

**参数：**

- `min` （数字）- 下限。
- `max` （数字）- 上限。

**返回：**

- （float）

**用法：**

```lua
local randFloat = Util.RandomRange(1, 1000)
print("randFloat: " .. randFloat)
-- randFloat: 420.6969
```

---

### `Util.RandomIntRange(min, max) -> number`

返回给定范围内的随机整数。

**参数：**

- `min` （数字）- 下限。
- `max` （数字）- 上限。

**返回：**

- （数字）- 整数。

**用法：**

```lua
local randInt = Util.RandomIntRange(1, 100)
print("randInt: " .. randInt)
-- randInt: 69
```

---

## Util — 分析

### `Util.DebugStartProfile(name)`

启动一个命名执行时间测量。

**参数：**

- `name` （字符串）- 此测量的标识符。

---

### `Util.DebugStopProfile(name)`

停止指定名称的测量。必须在调用`DebugStartProfile`之后，并使用相同的名称调用此函数。

**参数：**

- `name` （字符串）- 此测量的标识符。

---

### `Util.DebugExecutionTime() -> table`

返回每个已运行处理程序的执行时间统计信息。

**返回：**

- （表）- 每个处理程序： `mean` 、 `stdev` 、 `min` 、 `max` 、 `n` （全部以毫秒为单位）。

**用法：**

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

创建与外部服务器的HTTP连接。

**参数：**

- `host` （字符串）- 服务器地址。
- `port` （number）- 端口号。

**返回：**

- （表）- 具有方法的连接对象`:Get(path, headers)` 。

---

### `connection:Get(path, headers)`

发送HTTP GET请求。

**参数：**

- `path` （字符串）- 请求路径。
- `headers` （表）- 表头作为`{[string] = string}` 。

---

## FS — 检查

### `FS.Exists(path) -> boolean`

返回路径是否存在。

**参数：**

- `path` （字符串）- 要检查的路径。

**返回：**

- （布尔值）- 如果存在`true` 。

---

### `FS.IsDirectory(path) -> boolean`

返回指定路径是否为目录。

**参数：**

- `path` （字符串）- 要检查的路径。

**返回：**

- （布尔值）- 如果目录为`true` 。

**注意：** `false`并不意味着该路径就是一个文件。请使用`FS.IsFile`单独进行检查。

---

### `FS.IsFile(path) -> boolean`

返回指定路径是否为普通文件。

**参数：**

- `path` （字符串）- 要检查的路径。

**返回：**

- （布尔值）- 如果是普通文件`true` 。

**注意：** `false`并不意味着该路径是一个目录。

---

## FS — 操作

### `FS.CreateDirectory(path) -> boolean, string`

创建目录，包括任何缺失的父目录（类似于`mkdir -p` ）。

**参数：**

- `path` （字符串）- 要创建的目录的路径。

**返回：**

- （布尔值）- 成功时为`true` 。
- （字符串）- 失败时显示错误消息，成功时显示`""` 。

**用法：**

```lua
local success, error_message = FS.CreateDirectory("data/mystuff/somefolder")

if not success then
    print("failed to create directory: " .. error_message)
end
```

---

### `FS.Remove(path) -> boolean, string`

删除文件或空目录。

**参数：**

- `path` （字符串）- 要删除的路径。

**返回：**

- （布尔值）- 成功时为`true` 。
- （字符串）- 失败时的错误信息。

---

### `FS.Rename(path, newPath) -> boolean, string`

重命名或移动文件或目录。

**参数：**

- `path` （字符串）- 当前路径。
- `newPath` （字符串）- 新路径。

**返回：**

- （布尔值）- 成功时为`true` 。
- （字符串）- 失败时的错误信息。

---

### `FS.Copy(path, newPath) -> boolean, string`

复制文件或目录（递归）。

**参数：**

- `path` （字符串）- 源路径。
- `newPath` （字符串）- 目标路径。

**返回：**

- （布尔值）- 成功时为`true` 。
- （字符串）- 失败时的错误信息。

---

### `FS.ListFiles(path) -> table`

返回目录中的文件名列表（非递归）。

**参数：**

- `path` （字符串）- 目录路径。

**返回：**

- （表）- 文件名数组。
- （nil）- 如果路径不存在。

**用法：**

```lua
print(FS.ListFiles("Resources/Server/examplePlugin"))
-- { 1: "example.json", 2: "example.lua" }
```

---

### `FS.ListDirectories(path) -> table`

返回目录内所有目录名称的列表（非递归）。

**参数：**

- `path` （字符串）- 目录路径。

**返回：**

- （表格）- 目录名称数组。
- （nil）- 如果路径不存在。

**用法：**

```lua
print(FS.ListDirectories("Resources"))
-- { 1: "Client", 2: "Server" }
```

---

## FS — 路径

### `FS.GetFilename(path) -> string`

从指定路径返回带扩展名的文件名。

**参数：**

- `path` （字符串）- 路径字符串。

**返回：**

- （字符串）- 文件名。

**用法：**

```lua
"my/path/a.txt"  ->  "a.txt"
"somefile.txt"   ->  "somefile.txt"
"/awesome/path"  ->  "path"
```

---

### `FS.GetExtension(path) -> string`

返回包含点号的文件扩展名。

**参数：**

- `path` （字符串）- 路径字符串。

**返回：**

- （字符串）- 扩展名（例如`".json"` ），如果没有扩展名，则为`""` 。

**用法：**

```lua
"myfile.txt"                  ->  ".txt"
"somefile."                   ->  "."
"/awesome/path"               ->  ""
"/awesome/path/file.zip.txt"  ->  ".txt"
```

---

### `FS.GetParentFolder(path) -> string`

返回包含目录的路径。

**参数：**

- `path` （字符串）- 路径字符串。

**返回：**

- （字符串）- 父文件夹路径。

**用法：**

```lua
"/var/tmp/example.txt"  ->  "/var/tmp"
"/"                     ->  "/"
"mydir/a/b/c.txt"       ->  "mydir/a/b"
```

---

### `FS.ConcatPaths(...) -> string`

使用系统首选分隔符将路径段连接起来，并解析存在的`..`分隔符。

**参数：**

- `...` （字符串）- 路径段。

**返回：**

- （字符串）- 连接路径。

**用法：**

```lua
FS.ConcatPaths("a", "b", "/c/d/e/", "/f/", "g", "h.txt")
-- "a/b/c/d/e/f/g/h.txt"
```

---

## 事件

### 玩家连接顺序

```
onPlayerAuth → onPlayerConnecting → onPlayerJoining → onPlayerJoin
```

---

### `onInit`

插件文件全部加载完毕后立即触发。

**参数：**无**可取消：**否

---

### `onConsoleInput`

当服务器控制台收到输入时触发。

**参数：**

- `input` （字符串）- 输入的文本。

**可取消：**否

**用法：**

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

服务器关闭且所有玩家都被踢出后触发。

**参数：**无**可取消：**否

---

### `onPlayerAuth`

当玩家尝试连接时触发，在任何其他连接事件之前触发。

**参数：**

- `name` （字符串）- 玩家名称。
- `role` （字符串）- 后端玩家角色。
- `isGuest` （布尔值）- 玩家是否为访客。
- `identifiers` （表） - 标识符： `ip` 、 `beammp` 、 `discord` 。

**可取消：**是

- 返回`1` — 以通用消息拒绝。
- 返回`string` ——拒绝，拒绝理由为该字符串。
- 返回`2` — 即使服务器已满也允许进入。

**用法：**

```lua
function myPlayerAuthorizer(name, role, is_guest, identifiers)
    return "Sorry, you cannot join at this time."
end

MP.RegisterEvent("onPlayerAuth", "myPlayerAuthorizer")
```

---

### `postPlayerAuth`

无论玩家是否被接受或拒绝，都会在`onPlayerAuth`之后触发。

**参数：**

- `wasRejected` （布尔值）- 玩家是否被拒绝。
- `reason` （字符串）- 如果被拒绝，则显示拒绝原因。
- `name` （字符串）- 玩家名称。
- `role` （字符串）- 玩家角色。
- `isGuest` （布尔值）- 是否为访客。
- `identifiers` （表）- 标识符。

**可取消：**否

---

### `onPlayerConnecting`

当玩家开始连接时触发，在`onPlayerAuth`之后。

**参数：**

- `playerID` （数字）

**可取消：**否

---

### `onPlayerJoining`

玩家完成所有模组下载后触发。

**参数：**

- `playerID` （数字）

**可取消：**否

---

### `onPlayerJoin`

玩家完成同步并进入游戏后触发。

**参数：**

- `playerID` （数字）

**可取消：**否

---

### `onPlayerDisconnect`

当玩家断开连接时触发。

**参数：**

- `playerID` （数字）

**可取消：**否

---

### `onChatMessage`

当玩家发送聊天消息时触发。

**参数：**

- `playerID` （数字）
- `playerName` （字符串）
- `message` （字符串）

**可取消：**是——返回`1`可防止消息显示给任何人。

**用法：**

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

在`onChatMessage`之后触发。

**参数：**

- `wasSent` （布尔值）- 消息是否已发送。
- `playerID` （数字）
- `playerName` （字符串）
- `message` （字符串）

**可取消：**否

---

### `onVehicleSpawn`

当玩家生成新车辆时触发。

**参数：**

- `playerID` （数字）
- `vehicleID` （number）
- `data` （字符串）- 包含车辆配置和位置数据的 JSON 字符串。

**可取消：**是——返回非`0`值可阻止生成。

---

### `postVehicleSpawn`

在`onVehicleSpawn`之后触发。

**参数：**

- `wasSpawned` （布尔值）- 车辆是否实际生成。
- `playerID` （数字）
- `vehicleID` （number）
- `data` （字符串）

**可取消：**否

---

### `onVehicleEdited`

当玩家编辑现有车辆时触发。

**参数：**

- `playerID` （数字）
- `vehicleID` （number）
- `data` （字符串）- 新配置的 JSON 字符串（不包含位置数据）。

**可取消：**是——返回非`0`值将取消编辑。

---

### `postVehicleEdited`

在`onVehicleEdited`之后触发。

**参数：**

- `wasAllowed` （布尔值）- 是否允许编辑。
- `playerID` （数字）
- `vehicleID` （number）
- `data` （字符串）

**可取消：**否

---

### `onVehicleDeleted`

当车辆被删除时触发。

**参数：**

- `playerID` （数字）
- `vehicleID` （number）

**可取消：**否

---

### `onVehicleReset`

当玩家重置车辆时触发。

**参数：**

- `playerID` （数字）
- `vehicleID` （number）
- `data` （字符串）- 新位置和旋转的 JSON 字符串（不包含配置）。

**可取消：**否

---

### `onVehiclePaintChanged`

当车辆油漆发生变化时触发。

**参数：**

- `playerID` （数字）
- `vehicleID` （number）
- `data` （字符串）- 包含新绘制数据的 JSON 字符串。

**可取消：**否

---

### `onFileChanged`

当插件目录中的文件发生更改时触发。

**参数：**

- `path` （字符串）- 相对于服务器根目录的已更改文件的路径。

**可取消：**否

**注意：**服务器启动后添加的文件不会被跟踪。
