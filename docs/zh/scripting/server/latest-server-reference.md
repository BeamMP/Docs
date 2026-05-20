!!! 警告 "这个网站正在建设中！"

```
这个网站正在积极建设中。

觉得你能帮上忙吗？请用铅笔在右侧点击页面！

这也可以在任何页面上完成。
```

# 服务器脚本参考

## 服务器版本 3.X

### 介绍

BeamMP-Server v3.0.0版本对Lua插件系统的工作方式做了一些重大的改变。没有办法在新服务器上使用旧的lua，因此您必须进行迁移。

服务器的插件系统使用[Lua 5.3](https://www.lua.org/manual/5.3/)。本节详细介绍了如何开始编写插件，教一些基本概念，并让您开始使用第一个插件。即使您了解v3.0.0之前的系统，也建议您阅读本节，因为现在发生了一些巨大的变化。

有关从v3.0.0之前版本的lua迁移指南，请转到[“从旧lua迁移”](#migrating-from-old-lua)一节。

### 目录结构

服务器插件（Server plugins）与模组（mods）的默认安装路径存在差异：前者默认位于&lt;code&gt;Resources/Server&lt;/code&gt;目录下，而专为BeamNG.drive编写且需同步至客户端的模组则存放于&lt;code&gt;Resources/Client&lt;/code&gt;路径。每个插件必须在&lt;code&gt;Resources/Server&lt;/code&gt;目录下拥有独立子文件夹，例如名为"MyPlugin"的插件应具备如下结构：

```
Resources
└── Server
    ├── MyPlugin
    │   └── main.lua
    └── SomeOtherPlugin
        └── ...
```

为演示&lt;code&gt;Resources/Server&lt;/code&gt;目录如何管理多插件共存的情况，此处同时展示名为"SomeOtherPlugin"的另一插件配置。本指南将持续以该目录结构作为操作基准示例，所有代码片段及配置文件均基于此层级关系展开说明。

您会注意到核心配置文件&lt;code&gt;main.lua&lt;/code&gt;的存在。开发者可自由创建多个&lt;code&gt;.lua&lt;/code&gt;扩展名的脚本文件（建议遵循&lt;a href="https://github.com/BeamMP/BeamMP-Server/wiki/Scripting-Guide"&gt;BeamMP脚本规范&lt;/a&gt;），所有位于插件主目录层级的Lua文件将按&lt;strong&gt;字母表顺序&lt;/strong&gt;初始化（如&lt;code&gt;aaa.lua&lt;/code&gt;优先于&lt;code&gt;bbb.lua&lt;/code&gt;执行）。

### Lua 文件

插件目录中的每个&lt;code&gt;.lua&lt;/code&gt;文件都会在服务器启动时加载。这意味着所有函数外部的语句会被立即解析执行（即"运行"），该行为由BeamMP服务端核心的Lua虚拟机在初始化阶段强制触发。

子目录中的Lua文件不会被自动加载，但可通过`require()`函数手动调用。

例如，`main.Lua `是这样的：

```lua
function PrintMyName()
	print("I'm 'My Plugin'!")
end

print("What's up!")
```

当服务器启动时，`main.lua`会启动，它会把`print("What's up!")`*运行*，但是**不会** *调用* `PrintMyName`函数（因为它没有被调用）！

### 事件

事件类似于“玩家加入”，“玩家发送聊天信息”，“玩家生成车辆”。

您可以通过从处理程序返回`1`来取消事件（如果它们是可取消的）。

在Lua中，您通常希望对其中的一些做出反应。为此，您可以注册一个“处理程序”。这是一个在事件发生时调用的函数，并传递一些参数。

范例:

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

这将有效确保任何与<em>"darn"</em><strong>完全匹配</strong>的信息既不会被发送也不会出现在聊天中（注意：实际脏话过滤器应检测消息*是否包含*"darn"而非*完全等于*）。<code>取消事件</code>会阻止其发生，例如使聊天信息<code>不向其他玩家显示</code>，载具<code>无法生成</code>等情形。

### 自定义事件

您可以注册任何您喜欢的事件，例如：

```lua
MP.RegisterEvent("MyCoolCustomEvent", "MyHandler")
```

您可以触发这些自定义事件：

```lua
-- call all event handlers to this in ALL plugins
MP.TriggerGlobalEvent("MyCoolCustomEvent")
-- call all event handlers to this in THIS plugin
MP.TriggerLocalEvent("MyCoolCustomEvent")
```

您可以使用事件做更多的事情，但是这些可能性将在下面的API参考中详细介绍。

### 事件计时器 ("线程")

在v3.0.0之前，Lua有一个每秒运行X次的“线程”概念。这个命名有点误导人，因为它们是同步的。

v3.0.0 Lua改为“事件计时器”。这些是在服务器内部运行的计时器，一旦它们用完，它们就会触发一个事件（全局）。这也是同步的。请注意，第二个参数是以毫秒为单位的间隔。

范例:

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

这将导致“CountSeconds”每秒被调用一次。您还可以取消使用事件计时器`MP.CancelEventTimer`（参见API参考）。

从服务器的控制台中，您可以运行`status`来查看当前正在运行的事件计时器的数量，以及正在等待的事件处理程序的信息。该命令将在将来显示更多信息。

### 调试

Lua很难调试。遗憾的是，像`gdb`这样的工业级调试器并不存在于嵌入式Lua中。

通常，您当然可以在任何时候简单地`print()`您想要检查的值。

在v3.0.0中，服务器为您提供了一种将解释器注入插件并随后在其中实时运行Lua的最接近调试器的方法。

假设你有上面我们称为`MyPlugin`的插件，你可以像这样进入它的Lua状态：

```
> lua MyPlugin
```

字母大小写在此处至关重要，请确保输入准确无误。最终输出结果需严格遵循既定格式要求。

```
lua @MyPlugin>
```

如你所见，我们已切入`MyPlugin`的Lua运行环境。自当前操作时点起，至执行`exit()`指令前（v3.1.0版本后变更为`:exit`），系统将全程驻留于`MyPlugin`模块，在此状态下可执行Lua脚本操作。

例如，如果我们有一个名为`MyValue`的全局变量，我们可以像这样输出该值：

```
lua @MyPlugin> print(MyValue)
```

你可以在这里调用函数，做任何你想做的事情。

从v3.1.0开始：你可以按TAB键来自动完成函数和变量。

警告：不幸的是，如果Lua状态当前正忙于执行其他代码（如`while`循环），这可能会使控制台完全挂起，直到它完成这项工作，所以切换到可能正在等待某些事情发生的状态时要非常小心。

此外，您可以在常规控制台（`> `）中运行`status`，这将向您显示有关Lua的一些统计信息。

### 自定义命令

为了实现服务器控制台的自定义命令，可以使用事件`onConsoleInput`。当你想为服务器所有者添加一种向插件发送信号的方式，或者以自定义方式显示内部状态时，这可能很有用。

这里有一个范例：

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

这将使您能够在服务器的控制台中执行以下操作：

```
> print hello, world
hello, world
```

我们实现了自己的`print`。作为练习，尝试构建一个像`say`这样的函数，它将聊天消息发送给所有玩家，甚至是特定的玩家（使用`MP.SendChatMessage`）。

**注意：**对于你自己的插件，通常建议给它们“namespace”。我们的`print`示例，在一个名为`mystuff`的插件中，可以称为`mystuff.print`或`ms.print`或类似内容。

### API 参考

文档格式: `function_name(arg_name: arg_type, arg_name: arg_type) -> return_types`

### 内键指令功能

#### `print(...)`, `printRaw(...)`

将消息输出到服务器控制台,前缀`[DATE TIME] [LUA]`. 如果你不想要这个前缀, 你可以使用`printRaw(…)`。

范例:

```lua
local name = "John Doe"
print("Hello, I'm", name, "and I'm", 32)
```

它可以接受任意类型的任意多参数。它也会开心的转储表！

它的行为类似于lua解释器的`print`，所以它会在参数之间放置制表符。

#### `exit()`

正常关闭服务器。触发`onShutdown`事件。

### MP 功能

#### `MP.CreateTimer() -> Timer`

创建一个计时器对象，该对象可用于跟踪某事花费了多长时间/经过了多少时间。它一旦创建就会启动，并且可以使用`mytimer:Start()`来重置/重新启动。

您可以使用`mytimer:GetCurrent()`获取当前经过的时间（以秒为单位）。

范例:

```lua
local mytimer = MP.CreateTimer()
-- do stuff here that needs to be timed
print(mytimer:GetCurrent()) -- print how much time elapsed
```

计时器不需要停止（也不能停止），它们没有性能开销。

#### `MP.GetOSName() -> string`

返回当前操作系统的名称，`Windows`， `Linux`或`Other`。

#### `MP.GetServerVersion() -> number,number,number`

以主要、次要、补丁格式返回当前服务器版本。例如，v3.0.0版本将返回` 3,0,0 `。

范例:

```lua
local major, minor, patch = MP.GetServerVersion()
print(major, minor, patch)
```

输出:

```
2	4	0
```

#### `MP.RegisterEvent(event_name: string, function_name: string)`

将名称为`Function Name`的函数注册为`Event Name`事件对应处理器，完成事件与回调逻辑的映射关联操作。

您可以根据需要为一个事件注册任意多个处理程序。

有关服务器提供的事件列表，请参阅[这里](#events-1)。

如果具有该名称的事件不存在，则创建它，因此RegisterEvent不会失败。这可用于创建自定义事件。更多信息请参见[自定义事件](#custom-events)和[事件](#events)。

范例:

```lua
function ChatHandler(player_id, player_name, msg)
    if msg == "hello" then
        print("Hello World!")
        return 0
    end
end

MP.RegisterEvent("onChatMessage", "ChatHandler")
```

#### `MP.CreateEventTimer(event_name: string, interval_ms: number, [strategy: number (since v3.0.2)])`

在服务器内部启动定时器，触发事件`event_name`每`interval_ms`毫秒。

事件计时器可以取消 `MP.CancelEventTimer`.

不建议间隔小于25毫秒，因为多个这样的间隔可能无法及时可靠地提供服务。虽然可以在同一事件上启动多个计时器，但建议创建尽可能少的事件计时器。例如，如果您需要一个每半秒运行一次的事件和一个每秒钟运行一次的事件，可以考虑只创建一个每半秒运行一次的事件，并运行每秒钟运行一次的functionosecond触发器。

您也可以使用`MP.CreateTimer`来创建一个计时器并测量自上次事件调用以来经过的时间，以尽量减少事件计时器，尽管不一定建议这样做，因为它会显着增加代码复杂性。

**自 3.0.2 起：**

可选的`CallStrategy`可以作为第三个参数提供。可以是以下任一值：

- `MP.CallStrategy.BestEffort` （默认）：将尝试以指定的时间间隔触发事件，但如果处理程序花费的时间太长，将拒绝排队处理程序。
- `MP.CallStrategy.Precise` ：将按照指定的精确间隔将事件处理程序入队。如果处理程序执行时间超过该间隔，则可能导致队列填满。仅在需要精确间隔时使用。

#### `MP.CancelEventTimer(event_name: string)`

取消名称为`event_name`的事件上的所有计时器在某些情况下，由于异步编程的性质，计时器可能在被取消之前再次关闭。

#### `MP.TriggerLocalEvent(event_name: string, ...) -> table`

本地插件同步事件触发器。

在本地触发一个事件，这将导致*当前Lua状态*（通常是当前插件，除非通过PluginConfig.toml共享了状态）中注册该事件的所有处理函数被调用。

你可以传递参数给这个函数（`…`），这些参数被复制并作为函数参数发送给所有的处理程序。

此调用是同步的，并将在所有事件处理程序完成后返回。

返回的值是一个包含所有结果的表。如果某个处理程序返回了值，它就会出现在这个表中，未加注释且未命名。这可用于“收集”东西，或者为可取消的事件注册子处理程序。实际上，这就像一个数组。

范例:

```lua
local Results = MP.TriggerLocalEvent("MyEvent")
print(Results)
```

#### `MP.TriggerGlobalEvent(event_name: string, ...) -> table`

全局异步事件触发器。

全局触发一个事件，导致所有插件（包括*this*插件）中该事件*的所有处理程序被调用。*

您可以向此函数(`...`)传递参数，这些参数会被复制并作为函数参数发送给所有处理程序。

此调用是异步的，并返回一个类似未来对象的值。本地处理程序（与调用者处于同一插件中的处理程序）会同步且立即运行。

返回的表有两个函数：

- `IsDone() -> boolean` 会告知您所有处理程序是否已完成。还可以通过检查它的`MP.Sleep`-来等待变为True
- `GetResults() -> table` 返回一个未注释且未命名的表，其中包含所有处理程序的所有返回值，这是一个数组

 一定要用`Obj:Function()` 语法 (`:`, 不要 `.`).

范例:

```lua
local Future = MP.TriggerGlobalEvent("MyEvent")
-- wait until handlers finished
while not Future:IsDone() do
	MP.Sleep(100) -- sleep 100 ms
end
local Results = Future:GetResults()
print(Results)
```

请注意，在这里注册到“MyEvent”的处理程序如果一直不返回，可能导致您的插件卡死，您可能需要跟踪等待的时间，并在等待几秒后停止等待。

#### `MP.Sleep(time_ms: number)`

等待的时间以毫秒为单位指定

这不会让lua状态的执行，并且在休眠状态下不会执行任何操作。

警告：如果您注册了事件处理程序，请不要在&gt;500毫秒内休眠，除非您确切地知道*您正在做什么。这是用来睡眠1-100毫秒，以便等待结果或类似的。如果不小心，锁定（睡眠）的lua状态可能会大大降低整个服务器的速度。*

#### `MP.SendChatMessage(player_id: number, message: string)`

发送一个聊天消息，只有指定的玩家可以看到（或所有人，如果ID是`-1`）。在游戏中，这不会显示为直接消息。

例如，你可以用它来告诉玩家为什么你取消了他们的车辆刷出，聊天信息，或者类似的，或者显示一些关于你的服务器的信息。

范例:

```lua
function ChatHandler(player_id, player_name, msg)
    if string.match(msg, "darn") then
        MP.SendChatMessage(player_id, "Please do not use profanity.") -- If the player sends a message containing "darn", notify the player and cancel the message
        return 1
    else
        return 0
    end
end

MP.RegisterEvent("onChatMessage", "ChatHandler")
```

范例 2:

```lua
function ChatHandler(player_id, player_name, msg)
    if msg == "hello" then
        MP.SendChatMessage(-1, "Hello World!") -- If the player sends the exact message "hello", announce to the entire server "Hello World!"
        return 0
    end
end
```

#### `MP.TriggerClientEvent(player_id: number, event_name: string, data: string) -> boolean`

*在 v3.1.0 中*

#### `MP.TriggerClientEvent(player_id: number, event_name: string, data: string) -> boolean,string`

*在 v3.1.0 中*

#### `MP.TriggerClientEventJson(player_id: number, event_name: string, data: table) -> boolean,string`

*从 v3.1.0 以来*

将使用指定客户机上的给定数据调用给定事件（-1表示广播）。这个事件可以在客户端lua mod中处理，请参阅“客户端脚本”文档。

如果能够发送消息，将返回`true`（对于`id = -1`，因为广播，它总是`true`），如果具有该id的播放器不存在或断开连接但仍有id（这是一个已知问题），则返回`false`。

如果返回`false`，则重试此事件没有意义，并且不应该期望响应（如果期望有响应）。

从v3.1.0开始，如果函数失败，第二个返回值包含一条错误消息。同样从这个版本开始，函数的`*Json`版本接受一个表作为数据参数，并将其转换为Json。这是` mp . triggerclienttevent（…）的简写。Util.JsonEncode (mytable)) {/ code1}。`

#### `MP.GetPlayerCount() -> number`

返回服务器中当前玩家的数量。

#### `MP.GetPositionRaw(pid: number, vid: number) -> table,string`

返回玩家`pid`（玩家id）的车辆`vid`（车辆id）的当前位置，如果发生错误则返回错误字符串。

这个表是从位置数据包解码的，所以它有各种各样的数据，包括位置和旋转（这就是为什么这个函数后面加了“Raw”）。

范例:

```lua
local player_id = 4
local vehicle_id = 0

local raw_pos, error = MP.GetPositionRaw(player_id, vehicle_id)

if error == "" then
    print(raw_pos)
else
    print(error)
end
```

输出:

```json
 {
    tim: 49.824, // Time since spawn
    rvel: { // Rotational velocity
            1: -1.33564e-05,
            2: -9.16553e-06,
            3: 8.33364e-07,
    },
    vel: { // Velocity
            1: -4.29755e-06,
            2: -5.79335e-06,
            3: 4.95236e-06,
    },
    pos: { // Position
            1: 269.979,
            2: -759.068,
            3: 46.554,
    },
    ping: 0.0125, // Vehicle latency
    rot: { // Rotation
            1: -0.00559953,
            2: 0.00894832,
            3: 0.772266,
            4: 0.635212,
    },
}
```

范例 2:

```lua
local player_id = 4
local vehicle_id = 0

local raw_pos, error = MP.GetPositionRaw(player_id, vehicle_id)
if error = "" then
    local x, y, z = table.unpack(raw_pos["pos"])

    print("X:", x)
    print("Y:", y)
    print("Z:", z)
else
    print(error)
end
```

输出:

```
X: -603.459
Y: -175.078
Z: 26.9505
```

#### `MP.IsPlayerConnected(player_id: number) -> boolean`

玩家是否已连接以及服务器是否已收到来自其的UDP数据包。

范例:

```lua
local player_id = 8
print(MP.IsPlayerConnected(player_id)) -- Check if player with ID 8 is properly connected.
```

输出:

```lua
true
```

#### `MP.GetPlayerName(player_id: number) -> string`

获取玩家的显示名称。

范例:

```lua
local player_id = 4
print(MP.GetPlayerName(player_id)) -- Get the name of the player with ID 4
```

输出:

```
ilovebeammp2004
```

#### `MP.RemoveVehicle(player_id: number, vehicle_id: number)`

移除指定玩家的指定车辆。

范例:

```lua
local player_id = 3
local player_vehicles = MP.GetPlayerVehicles(player_id)

-- Loop over all of player 3's vehicles and delete them
for vehicle_id, vehicle_data in pairs(player_vehicles) do
      MP.RemoveVehicle(player_id, vehicle_id)
end
```

#### `MP.GetPlayerVehicles(player_id: number) -> table`

返回玩家当前拥有的所有车辆的表。表中的每个条目都是从车辆ID到车辆数据（目前是一个原始json字符串）的映射。

范例:

```lua
local player_id = 3
local player_vehicles = MP.GetPlayerVehicles(player_id)

for vehicle_id, vehicle_data in pairs(player_vehicles) do
    local start = string.find(vehicle_data, "{")
    local formattedVehicleData = string.sub(vehicle_data, start, -1)
    print(Util.JsonDecode(formattedVehicleData))
end
```

输出:

```json
{
    pid: 0,
    pro: "0",
    rot: {
            1: 0,
             2: 0,
            3: 0.776866,
            4: 0.629665,
    },
    jbm: "miramar",
    vcf: {
            parts: {
                    miramar_exhaust: "miramar_exhaust",
                    miramar_shock_R: "miramar_shock_R",
                    miramar_taillight: "miramar_taillight",
                    miramar_door_RL: "miramar_door_RL"
                    // ... continue
            },
            paints: {
                    1: {
                            roughness: 1,
                            metallic: 0,
                            clearcoat: 1,
                            baseColor: {
                                    1: 0.85,
                                    2: 0.84,
                                    3: 0.8,
                                    4: 1.2,
                            },
                            clearcoatRoughness: 0.09,
                    } // ... continue
            },
            partConfigFilename: "vehicles/miramar/base_M.pc",
            vars: {},
            mainPartName: "miramar",
    },
    pos: {
            1: 283.669,
            2: -754.332,
            3: 48.2151,
    },
    vid: 64822,
    ign: 0,
}
```

#### `MP.GetPlayers() -> table`

返回所有已连接玩家的表。这个表将id映射到name，如下所示：

```json
{
	0: "LionKor",
	1: "JohnDoe"
}
```

#### `MP.IsPlayerGuest(player_id: number) -> boolean`

玩家是否为游客。游客指未进行登录，而是直接选择以游客身份游玩的用户，其名称通常为`guest`后接一长串数字。

由于游客是匿名的，您可能希望禁止他们加入，如果是这样，建议使用[`onPlayerAuth`](#onplayerauth) `is_guest`参数。

#### `MP.DropPlayer(player_id: number, [reason: string])`

踢出带有指定ID的玩家。reason为可选参数。

```lua
function ChatHandler(player_id, player_name, message)
    if string.match(message, "darn") then
        MP.DropPlayer(player_id, "Profanity is not allowed")
        return 1
    else
        return 0
    end
end
```

#### `MP.GetStateMemoryUsage() -> number`

以字节为单位返回当前Lua状态的内存使用情况。

#### `MP.GetLuaMemoryUsage() -> number`

返回所有lua状态的内存使用情况，以字节为单位。

#### `MP.GetPlayerIdentifiers(player_id: number) -> table`

返回一个包含玩家信息的表，例如 BeamMP 论坛 ID、IP 地址及 Discord 账户 ID。Discord ID 仅会在用户已将其绑定至论坛账户时返回。

您可通过访问`https://forum.beammp.com/u/USERNAME.json`并在返回数据中查找`"user": {"id": 123456}`以获取用户的论坛 ID。BeamMP ID 是玩家的唯一标识，与用户名不同，该 ID 一经设定便不可更改。

范例:

```lua
local player_id = 5
print(MP.GetPlayerIdentifiers(player_id))
```

输出:

```json
{
    ip: "127.0.0.1",
    discord: "12345678987654321",
    beammp: "1234567",
}
```

*在 v3.1.0 之前的版本中，`ip` 字段存在错误且无法正常工作，该问题已在 v3.1.0 版本中修复。*

#### `MP.Set(setting: number, ...)`

临时设置服务器配置项。为此，`MP.Settings` 表格非常实用。

范例:

```lua
MP.Set(MP.Settings.Debug, true) -- Turns on debug mode
```

#### `MP.Settings -> table`

设置项ID与名称的对照表。配合`MP.Set`使用，用于更改服务器配置项。

范例:

```lua
print(MP.Settings)
```

输出:

```json
{
    MaxPlayers: 3,
    Debug: 0,
    Name: 5,
    Description: 6,
    MaxCars: 2,
    Private: 1,
    Map: 4,
}
```

### Util 功能

#### `Util.Json*`

从 BeamMP-Server `v3.1.0`以来。

这是内置JSON库，其性能通常远超任何Lua JSON库。底层使用C++的`nlohmann::json`库实现，严格遵循JSON规范，具备完整单元测试覆盖且持续进行模糊测试。

#### `Util.JsonEncode(table: table) -> string`

将Lua表递归编码为JSON字符串（支持表中有表、表中再有表……等多层嵌套结构），所有基本类型均会被保留，函数、userdata及类似数据则会被忽略。

生成的JSON为压缩格式，可使用`Util.JsonPrettify`对其进行美化排版。

范例:

```lua
local player = {
	name = "Lion",
	age = 69,
	skills = { "skill A", "skill B" }
}
local json = Util.JsonEncode(player)
```

结果:

```json
{"name":"Lion","age":69,"skills":["skill A","skill B"]}
```

#### `Util.JsonDecode(json: string) -> table`

将JSON解码为Lua表。如果失败，将返回`nil`，并输出错误。

范例:

```lua
local json = "{\"message\":\"OK\",\"code\":200}"
local tbl = Util.JsonDecode(json)
```

结果:

```lua
{
	message = "OK",
	code = 200,
}
```

#### `Util.JsonPrettify(json: string) -> string`

向json中添加缩进和换行，使其更易于人们阅读。

实例:

```
local myjson = Util.JsonEncode({ name="Lion", age = 69, skills = { "skill A", "skill B" } })

print(Util.JsonPrettify(myjson))
```

结果:

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

范例:

```lua
local pretty = Util.JsonPrettify(Util.JsonEncode({ name="Lion", age = 69, skills = { "skill A", "skill B" } }))

print(Util.JsonMinify(pretty))
```

结果:

```json
{"age":69.0,"name":"Lion","skills":["skill A","skill B"]}
```

#### `Util.JsonFlatten(json: string) -> string`

创建符合RFC 6901标准的JSON扁平化对象（将键名转换为JSON指针路径）。您可通过`Util.JsonUnflatten()`还原原始结构，但要求所有键值必须为基本数据类型。

范例:

```lua
local json = Util.JsonEncode({ name="Lion", age = 69, skills = { "skill A", "skill B" } })
print("normal: " ..json)
print("flattened: " .. Util.JsonFlatten(json))
print("flattened pretty: " .. Util.JsonPrettify(Util.JsonFlatten(json)))

```

结果:

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

还原由`Util.JsonFlatten()`函数扁平化处理的JSON值的任意嵌套结构。

#### `Util.JsonDiff(a: string, b: string) -> string`

根据RFC 6902规范（http://jsonpatch.com/）生成JSON差异文件。可通过`Util.JsonDiffApply()`方法应用该差异补丁，最终返回差异结果集

#### `Util.JsonDiffApply(base: string, diff: string) -> string`

将JSON `diff`作为补丁应用于`base`（遵循RFC 6902标准，详见http://jsonpatch.com/），最终返回处理结果。

### `Util.Random*`

从 BeamMP-Server `v3.1.0`开始。

#### `Util.Random() -> float`

返回一个介于0到1之间的浮点数值。

范例:

```lua
local rand = Util.Random()
print("rand: " .. rand)
```

结果:

```lua
rand: 0.135477
```

#### `Util.RandomIntRange(min: int, max: int) -> int`

返回一个介于min和max之间的整数。

范例:

```lua
local randInt = Util.RandomIntRange(1, 100)
print("randInt: " .. randInt)
```

结果:

```lua
randInt:  69
```

#### `Util.RandomRange(min: number, max: number) -> float`

返回一个介于min和max之间的浮点数。

范例:

```lua
local randFloat = Util.RandomRange(1, 1000)
print("randFloat: " .. randFloat)
```

结果:

```lua
randFloat: 420.6969
```

#### `Util.LogInfo(params: ...)` 及其关联方法集（自 v3.3.0 版本起）

```lua
Util.LogInfo("Hello, World!")
Util.LogWarn("Cool warning")
Util.LogError("Oh no!")
Util.LogDebug("hi")
```

输出的内容

```
[19/04/24 11:06:50.142] [Test] [INFO] Hello, World!
[19/04/24 11:06:50.142] [Test] [WARN] Cool warning
[19/04/24 11:06:50.142] [Test] [ERROR] Oh no!
[19/04/24 11:06:50.142] [Test] [DEBUG] hi
```

支持与`print()`方法完全一致的数据打印/转储能力。

#### `Util.DebugExecutionTime() -> table`

当Lua代码在服务器端运行时，系统会对每个事件处理器的执行进行计时。这些执行时间的最小值、最大值、平均值（算术平均数）和标准偏差会被计算，并通过本函数以表格形式返回。该计算采用增量方式进行，因此每当事件处理器运行时，最小值、最大值、平均值和标准偏差都会实时更新。这样设计确保`Util.DebugExecutionTime()`方法的执行时间通常极短（低于0.25毫秒）。

它会返回一个这样的表：

```lua
[[table: 0x7af6d400aca0]]: {
	printStuff: [[table: 0x7af6d400be60]]: {
		mean: 0.250433,
		n: 76,
		max: 0.074475,
		stdev: 0.109405,
		min: 0.449274,
	},
	onInit: [[table: 0x7af6d400b130]]: {
		mean: 0.033095,
		n: 1,
		max: 0.033095,
		stdev: 0,
		min: 0.033095,
	},
}
```

对于每个事件*处理器*，将返回如下结构数据：

- `n`: 触发事件和调用处理程序的次数
- `mean`: 所有执行时间的平均值/中间值，单位为ms
- `max`: 最长执行时间，单位为ms
- `min`: 最短的执行时间，单位为毫秒
- `stdev`: 所有执行时间平均值的标准偏差，单位为ms

这里有一个函数，你可以用它来漂亮地输出这些数据：

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

如果它很慢，你可以像这样调用它来调试你的代码：

```lua
-- event to print the debug times
MP.RegisterEvent("printStuff", "printDebugExecutionTime")
-- run every 5000 ms = 5 seconds (or 10, or 60, whatever makes sense for you
MP.CreateEventTimer("printStuff", 5000)
```

### FS的功能

`FS`函数是**f**ile**s** system函数，目的是比默认的Lua功能更好。

在指定路径时，请始终使用`/`作为分隔符，因为这是跨平台的（windows, linux, macos，…）。

#### `FS.CreateDirectory(path: string) -> bool,string`

创建指定的目录和任何父目录（如果父目录不存在）。其行为大致相当于常见的linux命令`mkdir -p`。

如果成功，返回`true`和`""`。如果创建目录失败，则返回`false`和错误消息（`string`）。

范例:

```lua
local success, error_message = FS.CreateDirectory("data/mystuff/somefolder")

if not success then
	print("failed to create directory: " .. error_message)
else
	-- do something with the directory
end

-- Be careful not to do this! This will ALWAYS be true!
if error_message then
	-- ...
end
```

#### `FS.Remove(path: string) -> bool,string`

删除指定的文件或文件夹。

如果发生错误，返回`true`，并在第二个返回值中显示错误消息。

范例:

```lua
local error, error_message = FS.Remove("myfile.txt")

if error then
	print("failed to delete myfile: " .. error_message)
end
```

#### `FS.Rename(pathA: string, pathB: string) -> bool,string`

将`pathA`重命名（或移动）为`pathB`。

如果发生错误，返回`true`，并在第二个返回值中显示错误消息。

#### `FS.Copy(pathA: string, pathB: string) -> bool,string`

复制 `pathA` 到 `pathB`.

如果发生错误，返回`true`，并在第二个返回值中显示错误消息。

#### `FS.GetFilename(path: string) -> string`

返回路径的最后一部分，通常是文件名。下面是一些输入+输出示例：

```lua
input -> output

"my/path/a.txt" 	-> "a.txt"
"somefile.txt" 		-> "somefile.txt"
"/awesome/path" 	-> "path"
```

#### `FS.GetExtension(path: string) -> string`

返回文件的扩展名，如果不存在扩展名则返回空字符串。下面是一些输入+输出示例

```lua
input -> output

"myfile.txt" 					-> ".txt"
"somefile." 					-> "."
"/awesome/path" 				-> ""
"/awesome/path/file.zip.txt"	-> ".txt"
"myexe.exe" 					-> ".exe"
```

#### `FS.GetParentFolder(path: string) -> string`

返回父目录的路径，即包含文件或文件夹的文件夹。下面是一些输入+输出示例：

```lua
input -> output

"/var/tmp/example.txt" 		-> "/var/tmp"
"/"							-> "/"
"mydir/a/b/c.txt"			-> "mydir/a/b"
```

#### `FS.Exists(path: string) -> bool`

如果路径存在返回`true`，如果路径不存在返回`false`。

#### `FS.IsDirectory(path: string) -> bool`

如果指定的路径是目录，返回`true`，如果不是，返回`false`。注意`false`并不意味着路径是一个文件（参见`FS.IsFile()`）。

#### `FS.IsFile(path: string) -> bool`

如果指定的路径是目录，返回`true`，如果不是，返回`false`。注意`false`并不意味着路径是一个文件（参见`FS.IsFile()`）。

#### `FS.ListDirectories(path: string) -> table`

返回给定路径中所有目录的表。

范例:

```lua
print(FS.ListDirectories("Resources"))
```

结果:

```lua
{
    1: "Client",
    2: "Server"
}
```

#### `FS.ListFiles(path: string) -> table`

返回给定路径中所有目录的表。

范例:

```lua
print(FS.ListFiles("Resources/Server/examplePlugin"))
```

结果:

```lua
{
    1: "example.json",
    2: "example.lua"
}
```

#### `FS.ConcatPaths(...) -> string`

使用系统的首选路径分隔符将所有参数加在一起（连接）。

范例:

```lua
FS.ConcatPaths("a", "b", "/c/d/e/", "/f/", "g", "h.txt")
```

结果

```
a/b/c/d/e/f/g/h.txt
```

当路径中存在`..`符号时，本函数会执行智能路径解析。该方法相较于Lua原生字符串拼接更为安全，且自动适配不同操作系统的路径分隔符。

在指定路径时，请始终使用 `/`作为分隔符，因为它是跨平台通用的（Windows，Linux，MacOS等）

### 事件

#### 说明

- 参数：给出此事件处理程序的参数列表
- 可取消:表示该事件是否可以被取消。如果事件可取消，处理函数可以通过返回 `1`, 来取消事件，例如 `return 1`.

#### 事件摘要

玩家的加入将按照给定的顺序触发以下事件：

1. `onPlayerAuth`
2. `onPlayerConnecting`
3. `onPlayerJoining`
4. `onPlayerJoin`

#### 系统事件

##### `onInit`

参数: NONE 可取消: NO

在插件中的所有文件初始化后触发。

##### `onConsoleInput`

参数: `input: string` 可取消: NO

当BeamMP控制台接收到输入时触发。

##### `onShutdown`

参数: NONE 可取消: NO

服务器关闭时触发。目前发生在所有玩家被踢之后。

#### 游戏相关事件

##### `onPlayerAuth`

参数: `player_name: string`, `player_role: string`, `is_guest: bool`, `identifiers: table -> beammp, ip` 可取消: YES

当玩家尝试加入时触发的第一个事件。<br>处理函数可以通过返回`1` 或一个原因 (`string`) 来拒绝玩家加入。

```lua
function myPlayerAuthorizer(name, role, is_guest, identifiers)
	return "Sorry, you cannot join at this time."
end
MP.RegisterEvent("onPlayerAuth", "myPlayerAuthorizer")
```

##### `onPlayerConnecting`

参数: `player_id: number` 可取消: NO

当玩家第一次开始连接时触发`onPlayerAuth`。

##### `onPlayerJoining`

参数: `player_id: number` 可取消: NO

当玩家加载完所有mod后触发`onPlayerConnecting`。

##### `onPlayerDisconnect`

参数: `player_id: number` 可取消: NO

当玩家断开连接时触发。

##### `onChatMessage`

参数: `player_id: number`, `player_name: string`, `message: string` 可取消: YES

当玩家发送聊天消息时触发。<br>如果该事件被取消，聊天消息将不会对任何人显示，甚至发送消息的玩家自己也看不到。

##### `onVehicleSpawn`

参数: `player_id: number`, `vehicle_id: number`, `data: string` 可取消: YES

当玩家生成一辆新车辆时触发。参数 `data`包含该车辆的配置，以及位置和旋转等信息，格式为 JSON 字符串。

##### `onVehicleEdited`

参数: `player_id: number`, `vehicle_id: number`, `data: string` 可取消: YES

当玩家编辑并应用其车辆修改时触发。参数 `data` 包含车辆更新后的配置，格式为 JSON 字符串， 但 **不**包含位置或旋转数据。你可以使用 [MP.GetPositionRaw](#mpgetpositionrawpid-number-vid-number-tablestring) 来获取位置和旋转数据。

##### `onVehicleDeleted`

参数: `player_id: number`, `vehicle_id: number` 可取消: NO

当玩家删除其车辆时触发。

##### `onVehicleReset`

参数: `player_id: number`, `vehicle_id: number`, `data: string` 可取消: NO

当玩家重置其车辆时触发。参数 `data`包含车辆更新后的位置和旋转信息，但 **不** 包含车辆的配置，你可以使用 [MP.GetPlayerVehicles](#mpgetplayervehiclesplayer_id-number-table) 来获取车辆配置。

##### `onFileChanged`

*在 v3.1.0*

参数: `path: string` 可取消: NO

当 `Resources/Server` 目录或其任意子目录中的文件发生变化时触发。

当 `Resources/Server/<plugin>` 目录中的任意文件（不包括其子文件夹）发生变化时，将触发一次 Lua 状态重载，并触发一个 `onFileChanged` 事件。

位于 `Resources/Server/<plugin>` 子文件夹中的任何文件（例如 `Resources/Server/<plugin>/lua/stuff.lua`）发生变化时，不会触发 Lua 状态重载，而只会触发一个 `onFileChanged` 事件。<br>这样你可以自行选择是否以及如何以正确的方式重新加载它。

这适用于所有文件，不仅仅是`.lua` 文件。

参数 `path` 是相对于服务器根目录的路径，例如`Resources/Server/myplugin/myfile.txt`。你可以使用`FS.*`系列函数对该字符串进行进一步处理，例如提取文件名或扩展名（如(`FS.GetExtension(...)`, `FS.GetFilename(...)`, ...)。

注意: 自 v3.1.0 起，服务器启动后新增的文件将*不会*被追踪。

### 从旧Lua迁移

本文简要介绍了从旧lua迁移到新lua的基本步骤。

#### 理解新的lua如何工作

为此，请仔细阅读[“介绍”](#how-to-start-writing-a-plugin)部分及其所有子部分。这是正确进行后续步骤所必需的。

#### 搜索和替换

首先，你需要搜索并替换所有 MP 函数。替换时应在所有 MP 函数前加上 `MP.` 前缀，但`print()`函数除外。

范例:

```lua
local players = GetPlayers()
print(#players)
```

替换为

```lua
local players = MP.GetPlayers()
print(#players) -- note how print() doesn't change
```

#### 再见线程，你好事件计时器！

如在 <a>“介绍”</a> 部分所述，线程（threads）即事件定时器（event timers）。<br>对于所有调用 `CreateThread` 的地方，应将其替换为 `CreateEventTimer`。<br><br>请仔细检查你原先的 `CreateThread` 的执行频率（每秒运行 X 次），并据此计算出事件定时器的超时时间（以毫秒为单位）。<br><br>另外请注意，`CreateEventTimer` 传入的不是函数名，而是事件名，因此你还需要注册一个事件来配合使用。

范例:

```lua
CreateThread("myFunction", 2) -- calls "myFunction" twice per second
```

替换为

```lua
MP.RegisterEvent("myEvent", "myFunction") -- registering our event for the timer
MP.CreateEventTimer("myEvent", 500) -- 500 milliseconds = 2 times per second
```

如果你有很多事件定时器，那么可以考虑将它们合并。<br>例如，你可以创建一个 “每分钟” 事件，然后将所有需要每分钟调用的函数都注册到这个事件上，而不是为每个函数单独创建一个事件定时器。<br><br>因为每个事件定时器在触发时都会让服务器多消耗一点时间。

#### 不再支持隐式事件调用

你需要注册所有的事件，不能再依赖函数名。<br>在旧版 Lua 中，这一点并不明确，但在新版 Lua 中通常会强制要求这样做。<br>一个好的示例模式是：

```lua
MP.RegisterEvent("onChatMessage", "chatMessageHandler")
-- or
MP.RegisterEvent("onChatMessage", "handleChatMessage")
```

这种做法比让事件处理函数与事件同名要更好，因为后者容易造成误导和混淆。


