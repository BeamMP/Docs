## 目录

### MPVehicleGE

- [Vehicle Functions（车辆函数）](#vehicle-functions)
- [Player Functions（玩家函数）](#player-functions)
- [Nametag Functions（昵称标签函数）](#nametag-functions)
- [Role Functions（角色函数）](#role-functions)
- [Navigation Functions（导航函数）](#navigation-functions)
- [Object Methods（对象方法）](#object-methods)
- [Event Hooks（事件钩子）](#event-hooks)

### MPConfig

- [MPConfig Functions（MPConfig函数）](#mpconfig-functions)

### MPCoreNetwork

- [MPCoreNetwork Functions](#mpcorenetwork-functions)

### MPGameNetwork

- [事件系统功能](#event-system-functions)
- [按键功能](#keypress-functions)
- [用户界面功能](#ui-functions)
- [MPGameNetwork 回调](#mpgamenetwork-callbacks)

### MPHelpers

- [编码函数](#encoding-functions)
- [颜色函数](#color-functions)
- [字符串函数](#string-functions)
- [表函数](#table-functions)
- [调试函数](#debug-functions)

---

## 车辆函数

### `getGameVehicleID(serverVehicleID)`

将 serverVehicleID 解析为 gameVehicleID

**参数：**

- `serverVehicleID` （字符串）- 格式：“X-Y”，其中 X 为玩家 ID，Y 为车辆 ID

**返回：**

- （数字）- 游戏内部车辆 ID
- （编号） `-1` - 如果车辆未知

**用法：**

```lua
local gameID = extensions.MPVehicleGE.getGameVehicleID("0-0")
```

---

### `getServerVehicleID(gameVehicleID)`

将 gameVehicleID 解析为 serverVehicleID

**参数：**

- `gameVehicleID` （数字）- 游戏内部车辆 ID

**返回：**

- （字符串）- 服务器车辆 ID（例如，“0-0”）
- （nil）- 如果 gameVehicleID 未知

**用法：**

```lua
local serverID = extensions.MPVehicleGE.getServerVehicleID(11171)
```

---

### `getVehicleByServerID(serverVehicleID)`

返回此车辆的完整车辆表

**参数：**

- `serverVehicleID` （字符串）- 格式：“X-Y”

**返回：**

- （表）- 车辆信息（名称、游戏车辆 ID、jbeam、所有者 ID、所有者名称、是否本地、是否已生成等）
- （nil）- 如果服务器车辆 ID 无效

**用法：**

```lua
local vehicle = extensions.MPVehicleGE.getVehicleByServerID("0-0")
if vehicle then
    print("Owner: " .. vehicle.ownerName)
end
```

---

### `getVehicleByGameID(gameVehicleID)`

返回此车辆的完整车辆表

**参数：**

- `gameVehicleID` （数字）- 游戏内部车辆 ID

**返回：**

- （表）- 车辆信息
- (nil) - 如果 gameVehicleID 无效

**用法：**

```lua
local vehicle = extensions.MPVehicleGE.getVehicleByGameID(11171)
```

---

### `isOwn(gameVehicleID)`

检查给定车辆是否属于此客户端

**参数：**

- `gameVehicleID` （数字）- 游戏内部车辆 ID

**返回：**

- （boolean）- 如果车辆属于此客户端，则返回 true

**用法：**

```lua
if extensions.MPVehicleGE.isOwn(11171) then
    print("This is my vehicle")
end
```

---

### `getOwnMap()`

返回一个包含此客户端拥有的所有车辆的表。

**参数：**

- 无

**返回：**

- （表）- 已拥有车辆地图`{[gameVehicleID] = vehicles_subtable}`

**用法：**

```lua
local myVehicles = extensions.MPVehicleGE.getOwnMap()
```

---

### `getVehicleMap()`

返回一个包含所有已知多人游戏载具的表。

**参数：**

- 无

**返回：**

- （表）- 所有车辆的地图`{[serverVehicleID] = gameVehicleID}`

**用法：**

```lua
local allVehicles = extensions.MPVehicleGE.getVehicleMap()
```

---

### `getDistanceMap()`

返回每个多人游戏载具到此客户端视角的距离

**参数：**

- 无

**返回：**

- （表）- 距离地图`{[gameVehicleID] = distanceInMeters}`

**用法：**

```lua
local distances = extensions.MPVehicleGE.getDistanceMap()
```

---

### `getNicknameMap()`

返回所有多人游戏车辆 ID 及其所有者名称

**参数：**

- 无

**返回：**

- （表）- 昵称映射表`{[gameVehicleID] = ownerName}`

**用法：**

```lua
local nicknameMap = extensions.MPVehicleGE.getNicknameMap()
```

---

### `getVehicles()`

返回完整的车辆表

**参数：**

- 无

**返回：**

- （表）- 所有车辆`{[serverVehicleID] = vehicles_subtable}`

**用法：**

```lua
local vehicles = extensions.MPVehicleGE.getVehicles()
for serverID, vehicle in pairs(vehicles) do
    print("Vehicle: " .. vehicle.jbeam)
end
```

---

## 玩家函数

### `getPlayerByName(name)`

返回该玩家的信息表和 ID

**参数：**

- `name` （字符串）- 玩家名称

**返回：**

- （表）- 玩家信息（姓名、玩家ID、角色、载具等）
- （数字）- 玩家 ID
- （nil）- 如果未找到玩家

**用法：**

```lua
local player, playerID = extensions.MPVehicleGE.getPlayerByName("John")
if player then
    print("Player ID: " .. playerID)
end
```

---

### `getPlayers()`

返回完整的玩家表

**参数：**

- 无

**返回：**

- （表）- 所有玩家`{[playerID] = players_subtable}`

**用法：**

```lua
local players = extensions.MPVehicleGE.getPlayers()
for playerID, player in pairs(players) do
    print("Player: " .. player.name)
end
```

---

## 昵称标签函数

### `setPlayerNickPrefix(targetName, tagSource, text)`

给玩家的名字标签添加前缀（显示在名字前面）

**参数：**

- `targetName` （字符串）- 玩家名称
- `tagSource` （字符串）- 此前缀的唯一标识符
- `text` （字符串）- 显示在名称之前的文本

**用法：**

```lua
extensions.MPVehicleGE.setPlayerNickPrefix("John", "RANK", "1st.")
-- Result: "1st. John"
```

---

### `setPlayerNickSuffix(targetName, tagSource, text)`

给玩家的名字标签添加后缀（显示在名字后面）

**参数：**

- `targetName` （字符串）- 玩家名称
- `tagSource` （字符串）- 此后缀的唯一标识符
- `text` （字符串）- 名称后显示的文本

**用法：**

```lua
extensions.MPVehicleGE.setPlayerNickSuffix("John", "STATUS", "[AFK]")
-- Result: "John [AFK]"
```

---

### `hideNicknames(hide)`

开启或关闭 BeamMP 的姓名标签绘制功能

**参数：**

- `hide` （boolean） - True 表示隐藏姓名标签，False 表示显示姓名标签

**用法：**

```lua
extensions.MPVehicleGE.hideNicknames(true)  -- Hide
extensions.MPVehicleGE.hideNicknames(false) -- Show
```

---

### `toggleNicknames()`

切换显示姓名标签

**参数：**

- 无

**用法：**

```lua
extensions.MPVehicleGE.toggleNicknames()
```

---

## 角色函数

### `setPlayerRole(playerID, tag, shorttag, red, green, blue)`

为玩家设置自定义角色

**参数：**

- `playerID` （数字）- 玩家的ID
- `tag` （字符串）- 角色标签（例如，“VIP”）
- `shorttag` （字符串）- 简短版本（例如，“V”）
- `red` （数字）- 红色通道（0-255）
- `green` （数字）- 绿色通道（0-255）
- `blue` （数字）- 蓝色通道（0-255）

**返回：**

- （布尔值，字符串）- 如果玩家不存在`false, "player not found"`
- （布尔值，字符串）- 如果参数无效，则`false, error`
- （无）——关于成功无信息

**用法：**

```lua
local success, error = extensions.MPVehicleGE.setPlayerRole(0, "VIP", "V", 255, 215, 0)
if success == false then
    print("Error: " .. error)
end
```

---

### `clearPlayerRole(playerID)`

清除玩家的自定义角色

**参数：**

- `playerID` （数字）- 玩家的ID

**返回：**

- （布尔值）- 始终返回`false` （实现怪癖 - 用于检查玩家是否存在）

**用法：**

```lua
extensions.MPVehicleGE.clearPlayerRole(0)
```

---

### `setVehicleRole(playerIDVehicleID, tag, shorttag, red, green, blue)`

为特定车辆设置自定义角色

**参数：**

- `playerIDVehicleID` （字符串）- 车辆 ID（格式：“0-0”）
- `tag` （字符串）- 角色标签
- `shorttag` （字符串）- 短版本
- `red` （数字）- 红色（0-255）
- `green` （数字）- 绿色（0-255）
- `blue` （数字）- 蓝色（0-255）

**返回：**

- （布尔值，字符串）- 如果车辆不存在`false, "vehicle not found"`
- （布尔值，字符串）- 如果参数无效，则`false, error`
- （无）——关于成功无信息

**用法：**

```lua
local success, error = extensions.MPVehicleGE.setVehicleRole("0-0", "Police", "POL", 0, 0, 255)
if success == false then
    print("Error: " .. error)
end
```

---

### `clearVehicleRole(playerIDVehicleID)`

清除车辆的自定义角色

**参数：**

- `playerIDVehicleID` （字符串）- 车辆 ID（格式：“0-0”）

**返回：**

- （布尔值）- 始终返回`false` （实现特性 - 用于检查车辆是否存在）

**用法：**

```lua
extensions.MPVehicleGE.clearVehicleRole("0-0")
```

---

## 导航函数

### `groundmarkerToPlayer(targetName)`

设置一条通往目标玩家位置的地面标记路线（静态）

**参数：**

- `targetName` （字符串）- 玩家名称，如果为 nil 则清除

**用法：**

```lua
extensions.MPVehicleGE.groundmarkerToPlayer("John")  -- Set
extensions.MPVehicleGE.groundmarkerToPlayer(nil)     -- Clear
```

---

### `groundmarkerFollowPlayer(targetName, dontfollow)`

设置跟随目标玩家的地面标记路线

**参数：**

- `targetName` （字符串）- 玩家名称，如果为 nil 则停止
- `dontfollow` （布尔值）- 如果为true，则创建静态标记

**用法：**

```lua
extensions.MPVehicleGE.groundmarkerFollowPlayer("John")       -- Follow
extensions.MPVehicleGE.groundmarkerFollowPlayer("John", true) -- Static
extensions.MPVehicleGE.groundmarkerFollowPlayer(nil)          -- Stop
```

---

### `queryRoadNodeToPosition(targetPosition, owner)`

查找距离目标位置最近的道路节点

**参数：**

- `targetPosition` （vec3 或表）- 目标位置，包含 x、y、z 坐标
- `owner` （字符串）- 可选标识符（默认值：“target”）

**返回：**

- （布尔值）- 成功状态
- （数字）- 节点 ID（如果成功）

**用法：**

```lua
local pos = vec3(100, 200, 50)
local success, nodeID = extensions.MPVehicleGE.queryRoadNodeToPosition(pos)
```

---

## 对象方法

### 玩家对象方法

#### `player:setNickPrefix(tagSource, text)`

设置该玩家名称标签的前缀

**参数：**

- `tagSource` （字符串）- 唯一标识符
- `text` （字符串）- 要显示的文本（或 nil 表示不显示）

**用法：**

```lua
local player = extensions.MPVehicleGE.getPlayerByName("John")
if player then
    player:setNickPrefix("STATUS", "[AFK]")
end
```

---

#### `player:setNickSuffix(tagSource, text)`

为该玩家的姓名标签设置后缀

**参数：**

- `tagSource` （字符串）- 唯一标识符
- `text` （字符串）- 要显示的文本（或 nil 表示不显示）

**用法：**

```lua
local player = extensions.MPVehicleGE.getPlayerByName("John")
if player then
    player:setNickSuffix("MISSION", "[In Mission]")
end
```

---

#### `player:setCustomRole(role)`

为该玩家设置自定义角色

**参数：**

- `role` （表）- 角色表： `{backcolor = {r, g, b}, tag = string, shorttag = string}`

**用法：**

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

清除该玩家的自定义角色

**用法：**

```lua
local player = extensions.MPVehicleGE.getPlayerByName("John")
if player then
    player:clearCustomRole()
end
```

---

### 车辆对象方法

#### `vehicle:getOwner()`

返回此车辆的所有者

**返回：**

- （表）- 玩家对象
- （数字）- 玩家 ID

**用法：**

```lua
local vehicle = extensions.MPVehicleGE.getVehicleByServerID("0-0")
if vehicle then
    local owner, ownerID = vehicle:getOwner()
    print("Owner: " .. owner.name)
end
```

---

#### `vehicle:setCustomRole(role)`

为这辆车设置自定义角色

**参数：**

- `role` （表）- 角色表： `{backcolor = {r, g, b}, tag = string, shorttag = string}`

**用法：**

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

清除此车辆的自定义角色

**用法：**

```lua
local vehicle = extensions.MPVehicleGE.getVehicleByServerID("0-0")
if vehicle then
    vehicle:clearCustomRole()
end
```

---

#### `vehicle:setDisplayName(displayName)`

为这辆车设置自定义显示名称

**参数：**

- `displayName` （字符串）- 要显示的自定义名称

**用法：**

```lua
local vehicle = extensions.MPVehicleGE.getVehicleByServerID("0-0")
if vehicle then
    vehicle:setDisplayName("Patrol Car #1")
end
```

---

## 事件钩子

BeamMP 提供事件钩子，您可以重写这些钩子以在特定事件发生时执行自定义代码。**请勿直接调用这些函数**，而应在保留原始功能的前提下对其进行重写。

### 钩子模式

重写函数时，务必保留原函数：

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

### 可用的事件钩子

#### `onUpdate(dt)`

连接到多人游戏时，每一帧都会被调用

**参数：**

- `dt` （数值）- 自上一帧以来的时间间隔（秒）。

**用法：**

```lua
local originalOnUpdate = MPVehicleGE.onUpdate
MPVehicleGE.onUpdate = function(dt)
    originalOnUpdate(dt)
    -- Your frame-by-frame logic here
end
```

---

#### `onPreRender(dt)`

在渲染每一帧之前调用

**参数：**

- `dt` （数值）- 时间差（秒）

**注意：**此功能在内部处理名称标签渲染、距离计算和地面标记。

**用法：**

```lua
local originalOnPreRender = MPVehicleGE.onPreRender
MPVehicleGE.onPreRender = function(dt)
    originalOnPreRender(dt)
    -- Your pre-render logic here
end
```

---

#### `onVehicleSpawned(gameVehicleID)`

当车辆生成时调用（包括本地和远程车辆）

**参数：**

- `gameVehicleID` （数字）- 游戏内部车辆 ID

**用法：**

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

车辆被销毁/移除时调用

**参数：**

- `gameVehicleID` （数字）- 游戏内部车辆 ID

**用法：**

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

当玩家切换车辆时调用

**参数：**

- `oldGameVehicleID` （数字）- 先前的车辆 ID（或 -1）
- `newGameVehicleID` （数字）- 新车辆 ID（或 -1）

**用法：**

```lua
local originalOnVehicleSwitched = MPVehicleGE.onVehicleSwitched
MPVehicleGE.onVehicleSwitched = function(oldID, newID)
    originalOnVehicleSwitched(oldID, newID)
    
    print("Switched from vehicle " .. oldID .. " to " .. newID)
end
```

---

#### `onVehicleResetted(gameVehicleID)`

车辆重置时调用（仅限本地车辆）

**参数：**

- `gameVehicleID` （数字）- 游戏内部车辆 ID

**用法：**

```lua
local originalOnVehicleResetted = MPVehicleGE.onVehicleResetted
MPVehicleGE.onVehicleResetted = function(gameVehicleID)
    originalOnVehicleResetted(gameVehicleID)
    
    print("Vehicle " .. gameVehicleID .. " was reset")
end
```

---

#### `onVehicleColorChanged(gameVehicleID, index, paint)`

当车辆的涂装颜色发生变化时调用

**参数：**

- `gameVehicleID` （数字）- 游戏内部车辆 ID
- `index` （数字）- 涂装槽索引（0、1 或 2）
- `paint` （表） - 包含颜色信息的油漆数据

**用法：**

```lua
local originalOnVehicleColorChanged = MPVehicleGE.onVehicleColorChanged
MPVehicleGE.onVehicleColorChanged = function(gameVehicleID, index, paint)
    originalOnVehicleColorChanged(gameVehicleID, index, paint)
    
    print("Vehicle " .. gameVehicleID .. " changed paint slot " .. index)
end
```

---

#### `onVehicleReady(gameVehicleID)`

当车辆的扩展设备加载完毕且车辆完全准备就绪时，就会发出此通知。

**参数：**

- `gameVehicleID` （数字）- 游戏内部车辆 ID

**注意：**如果需要加载车辆扩展，请使用此方法代替`onVehicleSpawned` 。

**用法：**

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

在 BeamMP 用户界面初始化时调用

**用法：**

```lua
local originalOnUIInitialised = MPVehicleGE.onUIInitialised
MPVehicleGE.onUIInitialised = function()
    originalOnUIInitialised()
    
    print("BeamMP UI initialized")
end
```

---

#### `onSettingsChanged()`

当 BeamMP 设置更改时调用

**用法：**

```lua
local originalOnSettingsChanged = MPVehicleGE.onSettingsChanged
MPVehicleGE.onSettingsChanged = function()
    originalOnSettingsChanged()
    
    print("BeamMP settings changed")
end
```

---

## MPConfig 函数

### `MPConfig.getPlayerServerID()`

返回本地玩家的服务器分配 ID

**返回：**

- （数字）- 玩家的服务器 ID（如果未设置则为 -1）

**用法：**

```lua
local myID = extensions.MPConfig.getPlayerServerID()
```

---

### `MPConfig.getNickname()`

返回本地玩家的昵称

**返回：**

- （字符串）- 玩家当前的昵称

**用法：**

```lua
local name = extensions.MPConfig.getNickname()
```

---

### `MPConfig.getConfig()`

返回 BeamMP 配置设置

**返回：**

- （表）- 包含所有 BeamMP 设置的配置表
- （nil）- 如果配置文件不存在

**用法：**

```lua
local config = extensions.MPConfig.getConfig()
```

---

### `MPConfig.setConfig(settingName, settingVal)`

设置特定配置值

**参数：**

- `settingName` （字符串）- 设置的名称
- `settingVal` （任意值） - 要设置的值

**用法：**

```lua
extensions.MPConfig.setConfig("myCustomSetting", true)
```

---

## MPCoreNetwork 函数

### `MPCoreNetwork.getCurrentServer()`

返回有关当前连接服务器的信息

**返回：**

- （表）- 服务器数据（IP 地址、端口、名称、映射）
- （nil）- 如果未连接

**用法：**

```lua
local server = extensions.MPCoreNetwork.getCurrentServer()
if server then
    print("Server: " .. server.name)
    print("IP: " .. server.ip .. ":" .. server.port)
end
```

---

## 事件系统功能

### `TriggerServerEvent(name, data)`

向服务器发送事件

**参数：**

- `name` （字符串）- 事件名称
- `data` （字符串）- 要发送的数据

**注意：**这是一个全局函数。服务器必须已注册此事件的处理程序。

**用法：**

```lua
TriggerServerEvent("playerReady", "ready")

-- With JSON
local data = {position = {x=100, y=200, z=50}}
TriggerServerEvent("updatePlayer", jsonEncode(data))
```

---

### `TriggerClientEvent(name, data)`

触发本地客户端事件

**参数：**

- `name` （字符串）- 事件名称
- `data` （字符串）- 要发送的数据

**注意：**全局函数。在本地触发，无需发送到服务器。

**用法：**

```lua
TriggerClientEvent("localUpdate", "data")
```

---

### `AddEventHandler(event_name, func, name)`

注册一个用于处理特定事件的函数

**参数：**

- `event_name` （字符串）- 要处理的事件的名称
- `func` （函数）- 处理函数（接收事件数据）
- `name` （字符串）- 可选的内部名称

**注意：**全局函数。

**用法：**

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

移除事件处理程序

**参数：**

- `event_name` （字符串）- 事件名称
- `name` （字符串）- 可选的内部名称

**注意：**全局函数。

**用法：**

```lua
RemoveEventHandler("playerDamage")
```

---

## 按键功能

### `onKeyPressed(keyname, func)`

注册一个按键按下时要调用的函数

**参数：**

- `keyname` （字符串）- 按键的名称（例如，“NUMPAD1”、“F1”）
- `func` （函数）- 要调用的函数（接收布尔值）

**注意：**全局函数。

**用法：**

```lua
onKeyPressed("NUMPAD1", function(state)
    print("NUMPAD1 pressed!")
end)
```

---

### `onKeyReleased(keyname, func)`

注册一个在按键释放时要调用的函数

**参数：**

- `keyname` （字符串）- 键的名称
- `func` （函数）- 要调用的函数（接收布尔值）

**注意：**全局函数。

**用法：**

```lua
onKeyReleased("NUMPAD1", function(state)
    print("NUMPAD1 released!")
end)
```

---

### `addKeyEventListener(keyname, func, type)`

注册一个具有可自定义触发类型的按键事件监听器

**参数：**

- `keyname` （字符串）- 键的名称
- `func` （函数）- 要调用的函数
- `type` （字符串）- 事件类型：“向下”、“向上”或“两者”（默认值：“两者”）

**注意：**全局函数。

**用法：**

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

返回键的当前状态

**参数：**

- `keyname` （字符串）- 按键名称

**返回：**

- （布尔值）- 按下时为true，否则为false

**注意：**全局函数。仅适用于通过 addKeyEventListener 注册的键。

**用法：**

```lua
local isPressed = getKeyState("NUMPAD1")
if isPressed then
    print("NUMPAD1 is held down")
end
```

---

## UI 函数

### `MPGameNetwork.spawnUiDialog(dialogInfo)`

创建自定义交互式对话框

**参数：**

- `dialogInfo` （表）- 对话框配置：
    - `title` （字符串）- 对话框标题（可选）
    - `body` （字符串）- 对话框消息（可选）
    - `buttons` （表） - 按钮配置（可选）
    - `class` （字符串）- “experimental” 用于危险警示线（可选）
    - `interactionID` （字符串）- 交互标识符（可选）
    - `reportToServer` （布尔值）- 发送到服务器（可选，默认值：false）
    - `reportToExtensions` （布尔值）- 触发本地事件（可选，默认值：false）

**用法：**

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

## MPGameNetwork 回调

### `MPGameNetwork.onUpdate(dt)`

连接到多人游戏时，每一帧都会被调用

**参数：**

- `dt` （数值）- 时间差（秒）

**用法：**

```lua
local originalOnUpdate = MPGameNetwork.onUpdate
MPGameNetwork.onUpdate = function(dt)
    originalOnUpdate(dt)
    -- Your code here
end
```

---

### `MPGameNetwork.onVehicleReady(gameVehicleID)`

当车辆准备就绪且扩展设备已加载完毕时，会发出呼叫。

**参数：**

- `gameVehicleID` （数字）- 游戏内部车辆 ID

**用法：**

```lua
local originalOnVehicleReady = MPGameNetwork.onVehicleReady
MPGameNetwork.onVehicleReady = function(gameVehicleID)
    originalOnVehicleReady(gameVehicleID)
    -- Your code here
end
```

---

## 编码函数

### `MPHelpers.b64encode(string)`

将字符串编码为 Base64（RFC 2045）

**参数：**

- `string` （字符串）- 要编码的字符串

**返回：**

- （字符串）- Base64 编码的字符串

**用法：**

```lua
local encoded = extensions.MPHelpers.b64encode("Hello World")

-- Encoding JSON
local data = {name = "Player", score = 100}
local encoded = extensions.MPHelpers.b64encode(jsonEncode(data))
TriggerServerEvent("sendData", encoded)
```

---

### `MPHelpers.b64decode(string)`

解码 Base64 字符串（RFC 2045）

**参数：**

- `string` （string）- Base64 编码的字符串

**返回：**

- （字符串）- 解码后的字符串

**用法：**

```lua
local decoded = extensions.MPHelpers.b64decode("SGVsbG8gV29ybGQ=")

-- Decoding JSON
AddEventHandler("receiveData", function(data)
    local decoded = extensions.MPHelpers.b64decode(data)
    local jsonData = jsonDecode(decoded)
end)
```

---

## 颜色函数

### `MPHelpers.hex2rgb(hex)`

将十六进制颜色代码转换为 RGB 值

**参数：**

- `hex` （字符串）- 十六进制颜色代码（例如，“#FF5733”或“#F57”）

**返回：**

- （表）- RGB 值`{r, g, b}`范围为 0-1
- （表）- 如果无效则为`{0, 0, 0}`

**注意：**支持 3 位和 6 位十六进制代码。

**用法：**

```lua
local rgb = extensions.MPHelpers.hex2rgb("#FF5733")
print(rgb[1], rgb[2], rgb[3]) -- 1.0, 0.341, 0.2

-- Short format
local rgb = extensions.MPHelpers.hex2rgb("#F57")
```

---

## 字符串函数

### `MPHelpers.splitStringToTable(string, delimiter, convert_into)`

按分隔符拆分字符串，并可选择转换值

**参数：**

- `string` （字符串）- 要拆分的字符串
- `delimiter` （字符串） - 用于分割的分隔符
- `convert_into` (number) - 转换类型（可选）：
    - `nil`或`0` - 保留为字符串（默认值）
    - `1` - 转换为数字
    - `2` - 转换为布尔值

**返回：**

- （表）- 分割值的数组

**用法：**

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

## 表函数

### `MPHelpers.tableDiff(old, new)`

比较两个表并返回它们的差异

**参数：**

- `old`表 - 要比较的第一个表
- `new` （表）——第二个用于比较的表

**返回：**

- （表） `diff` - 所有不同的键
- （表） `o` - 与旧值不同的值
- （表） `n` - 与新值不同的数值

**用法：**

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

## 调试函数

### `MPHelpers.simpletraces(level)`

返回格式化的调用者信息字符串。

**参数：**

- `level` （数字）- 堆栈层级（可选，默认值：2）

**返回：**

- （字符串）- 格式化字符串： `"source:line, namewhat name"`
- （字符串）- 如果信息不可用，则为`"unknown"`

**用法：**

```lua
local function myFunction()
    local caller = extensions.MPHelpers.simpletraces()
    print("Called from: " .. caller)
end
```

---

### `MPHelpers.simpletrace(level)`

将调用者信息记录到控制台

**参数：**

- `level` （数字）- 堆栈层级（可选，默认值：1）

**注意：**将调用位置记录到控制台。

**用法：**

```lua
local function myFunction()
    extensions.MPHelpers.simpletrace()
    -- Logs: "Code was called from: lua/ge/extensions/mymod.lua:42"
end
```

---

*最后更新日期：2026年1月1日*
