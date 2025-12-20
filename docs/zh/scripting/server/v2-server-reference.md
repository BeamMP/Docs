!!! 警告 "这个网站正在建设中！"

```
这个网站正在积极建设中。

觉得你能帮上忙吗？请用铅笔在右侧点击页面！

这也可以在任何页面上完成。
```

# 服务器脚本参考

## 服务器端版本 2.X

!!! 警告

```
BeamMP 服务器版本 2.X 已不再提供支持。
本文档仅供参考。
请更新到最新版本以进行维护和支持。
```

---

> 这是 2.x 的脚本，仅当你的服务器端版本是老的/过时的(version 2.x.x)， 时才能使用此方法，有关最新文档，请参见 [这里](https://docs.beammp.com/scripting/server/latest-server-reference)。 {.is-warning}

### 说明

要在服务器控制台中获得函数的输出，必须将其包装在`print()`语句中。例如：`print(GetPlayerName(0))`将返回服务器上第一个玩家的名字。

`<PlayersServerID>` 从0开始。

### 用于编写脚本的可用函数列表

#### GetPlayerName(playersServerID)

以字符串形式返回玩家的Discord名称

```lua
function onPlayerJoin(playerID)
	local name = GetPlayerName(playerID)
	-- Do something
end
```

#### GetPlayerDiscordID(playersServerID)

以字符串形式返回玩家的Discord名称

```lua
function onPlayerJoin(playerID)
	local name = GetPlayerDiscordID(playerID)
	-- Do something
end
```

#### GetPlayerHWID(playersServerID)

以字符串形式返回玩家的Discord ID

```lua
function onPlayerJoin(playerID)
	local name = GetPlayerHWID(playerID)
	-- Do something
end
```

#### GetPlayerVehicles(playersServerID)

返回玩家的车辆作为一个对象/数组

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

断开特定玩家的连接。“其实就是踢出玩家”

```lua
function onVehicleSpawn(playerID, vehicleID, vehicleData)
	-- Do something
	DropPlayer(playerID)
end
```

#### SendChatMessage(playersServerID, message)

通过网络向指定的用户发送消息。每个人都用-1

```lua
function onPlayerJoin(playerID)
	SendChatMessage(-1, "Someone just joined!")
end
```

#### CancelEvent() -- DEPRECIATED

取消事件的发生。这可能很快就会发生。使用`return 1`来取消事件。

#### onInit()

如果在lua文件中声明，它将在c++成功加载当前lua文件后被调用

```lua
function onInit()
	print("Server ready")
end
```

#### exit()

将关闭服务器

```lua
function onInit()
	print("Server Ready. But who needs a server which is running")
	exit() -- Stops the server
end
```

#### CreateThread(functionName, callInterval)

将在专用线程上执行该函数，它将每秒运行callInterval数次。它每秒钟都会跑一次。

```lua
function yourFunction()
 	for i = 1,10 do
		SendChatMessage(-1, "Countdown: "..i)
		Sleep(1000)
	end
end
CreateThread("yourFunction", 30)
```

已弃用示例：将在专用线程上执行该函数

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

将停止尝试调用当前脚本的线程函数

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

将暂停执行指定的时间（警告，如果没有创建线程，将暂停整个服务器）

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

将返回多少玩家连接

```lua
function onPlayerJoin(playerID)
	SendChatMessage(playerID, "You are the "..GetPlayerCount().."th player!"
end
```

#### RemoveVehicle(playerServerID, VehicleID)

这会导致一辆载具消失。

```lua
function onVehicleSpawn(playerID, vehicleID, vehicleData)
	if --[[ Vehicle data equal something it shouldn't be ]] then
		RemoveVehicle(playerID, vehicleIID)
	end
end
```

#### GetPlayers()

将返回一个带有name的id表

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

将该函数注册到指定的事件，都必须是字符串。

```lua
  function anyEvent()
		-- Do something
  	end
	RegisterEvent("onAnyEventHappen", "anyEvent")
	-- Do something
	TriggerLocalEvent("onAnyEventHappen")
```

#### TriggerLocalEvent(eventName)

将调用同一插件文件夹中的每个注册函数。

```lua
  function anyEvent()
		-- Do something
  	end
	RegisterEvent("onAnyEventHappen", "anyEvent")
	-- Do something
	TriggerLocalEvent("onAnyEventHappen")
```

#### TriggerGlobalEvent(eventName)

将使用此事件名称调用每个已注册的函数。

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

将使用给定的数据在指定的客户端（-1 表示广播）上触发该事件。

```lua
  function onPlayerJoin(playerServerID)
     TriggerClientEvent(playerServerID, "anyEvent", "You just joined the server")
  end
	RegisterEvent("onAnyEventHappen", "anyEvent")
```

#### Set(configID, newValue)

会将配置设置修改为下方表格中指定的新值。

```lua
  function onChatMessage(playerID, senderName, message)
    if playerID == adminPlayer then
      if message == --[[ anything ]] then
        Set(3, 10)
      end
    end
  end
```

#### 可用于 `Set()` 命令的配置项列表

> Note that these will not save to the config file.

Config ID | 名称 | 只接受以下内容
--- | --- | ---
`0` | 调试设置 | true 或 false
`1` | 私人设置 | true 或 false
`2` | 每个玩家的最大车辆数 | 数字
`3` | 最大玩家数 | 数字
`4` | 地图 | 字符串
`5` | 名称 | 字符串
`6` | 描述 | 字符串
任何其他ID都会导致控制台警告 |  |

### 用于编写脚本的可用事件列表

#### 默认事件

如何使用事件的示例:

```lua
	function onInit()
  	RegisterEvent("onPlayerJoin", "onPlayerJoin")
  end
  
  function onPlayerJoin(playerServerID)
  	-- Do something
  end
```

如果你不希望访客进入你的服务器：

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

事件 | 参数 | 描述
--- | --- | ---
`onPlayerAuth` | 玩家的名称、论坛角色、是否为访客账号（布尔值） | 有一名玩家已通过验证并正在请求加入。
`onPlayerConnecting` | 玩家的ID | 玩家正在加载（在加载地图之前）
`onPlayerJoining` | 玩家的ID | 玩家正在加载地图，很快就会加入
`onPlayerJoin` | 玩家的ID | 玩家已加入并加载
`onPlayerDisconnect` | 玩家的ID | 玩家退出了游戏
`onChatMessage` | 发消息的玩家的ID、昵称和聊天消息 | 发送了一条聊天消息。这对于创建命令系统非常有用
`onVehicleSpawn` | 玩家ID，车辆ID和车辆数据 | 当有人刷出一辆车时输出
`onVehicleEdited` | 玩家ID，车辆ID和车辆数据 | 当有人编辑车辆或替换现有车辆时，就会调用此操作
`onVehicleDeleted` | 玩家的ID和车辆ID | 当某人删除自己拥有的车辆时，就会调用此操作

#### 自定义事件

可以创建自定义事件以供自己使用。这与默认值的处理方式非常相似。

如何使用自定义事件的范例:

```lua
	function onInit()
  	RegisterEvent("myCustomEvent", "myCustomEvent")
  end
  
  function myCustomEvent(playerServerID, customData)
  	-- Do something
  end
```

接着可以使用各自的函数从客户端或服务器端调用该函数。

### 玩家

当玩家连接到你的服务器时，他们会被分配一个从 0 开始递增的 serverID。<br>serverID 会被重复利用；如果玩家离开后再次加入，他们不会获得新的 serverID，而是会被分配一个当前可用的 serverID。<br>当服务器重新启动时，serverID 会被重置。

#### 静态标识符

BeamMP 中的玩家拥有 3 个可通过其 serverID 获取的静态标识符，分别是他们的名称、discordID，以及硬件ID（HWID）。<br>（尽管最后一个尚未实现，但在此处我们将假设它已实现。）<br>这三种 ID 类型各自具有不同的来源，以及在玩家识别用途上的优点和缺点。

ID 类型 | 优点 | 缺点 | 获取的函数
--- | --- | --- | :-:
name | 容易获得，直截了当 | 不安全 | GetPlayerName()
discordID | 非常安全 | 不方便 | GetPlayerDiscordID()
HWID | 超级安全 | 难获得 | GetPlayerHWID()

### 车辆

BeamMP 中的车辆有 3 个服务器会关注的属性：车辆所属者的 serverID、车辆的 vehicleID 以及车辆的数据。<br>所属者的 serverID 很简单，它就是玩家的 serverID。每辆车也有一个 vehicleID，但 vehicleID 并不是车辆唯一的；来自不同玩家的两辆车可能拥有相同的 vehicleID。<br>与 serverID 不同，vehicleID 会被重复使用。例如，如果我有 4 辆车，它们的 ID 分别是 0、1、2 和 3。如果我删除 vehicleID 为 2 的车辆，我就只剩下 0、1 和 3。当我生成一辆新车时，这辆新车会占用 ID 2。<br>最后，车辆的第三个属性是 data。data 包含车辆名称、部件以及其他数据，顾名思义。data 是以原始 JSON 字符串存储的，因此你需要使用 JSON 库来解析它，或者你也可以手动逐步解析字符串，提取所需的信息。
