# 创建多人模式

## 文件夹结构和基础文件

基本的文件夹和文件结构应该是这样的：

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

服务器端lua是最基本的，如果您想添加自定义事件，您还至少需要一个客户端lua以及一个modscript.lua

Server目录需创建多个子文件夹存放各服务端模组。推荐只在根目录保留一个主Lua文件，新增的Lua文件可归类到对应子目录。实际使用中不必严格遵循此规范，若同一层级存在多个Lua文件时，服务器会按文件名称的字母表顺序自动加载。

Client目录专门存放将发送给客户端的ZIP格式模组包，当客户端接收后会自动以模组形式加载。该目录若存在其他类型文件会导致服务器启动时报错（但不会阻断服务运行），不过这些无关文件仅会被服务端忽略。核心配置脚本modScript.lua由BeamNG游戏引擎解析，用于指引游戏加载指定插件模块。

!!!范例 "" [Download the examplePlugin.zip](../../../../assets/content/ResourcesForExamplePlugin.zip)

## 服务器端 lua

更多完整示例可参考examplePlugin模块的实现，现提供一个基础调试示例，实例的功能是显示玩家身份标识

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

`onPlayerAuth`会在玩家尝试加入时触发，详细信息请参考脚本文档中的[onPlayerAuth条目](../../../scripting/server/latest-server-reference/#onplayerauth)

以下是使用onPlayerAuth的另一个示例，该示例将通过向客户端返回信息来禁止游客加入服务器，返回的信息会直接显示给玩家：

```lua
function onPlayerAuth(playerName, playerRole, isGuest, identifiers)
  if isGuest then
    return "No guests allowed, please use a BeamMP account"
  end
end
```

关于BeamMP服务端函数的详细信息请查阅[最新版服务端技术文档](../../../scripting/server/latest-server-reference.md)

## 客户端 lua

该实现主要遵循[BeamNG扩展模块](https://documentation.beamng.com/modding/programming/extensions/)的技术规范。

```lua
local M = {}

if extensions.isExtensionLoaded("examplePlugin") then
  log("E", "examplePlugin", "examplePlugin loaded on client side")
  return
end

return M
```

终端输出提示：examplePlugin已完成加载。

建议查阅[BeamNG调试输出官方文档](https://documentation.beamng.com/modding/programming/debugging/#a-add-a-log)获取详细说明

## modScript.lua

通常只包含两行

```lua
load('examplePlugin')
setExtensionUnloadMode('examplePlugin', 'manual')
```

如果你想在日志中看到你的modScript被BeamNG处理，你可以添加一个日志打印

```lua
load('examplePlugin')
setExtensionUnloadMode('examplePlugin', 'manual')
log('I', 'modScript', "examplePlugin loaded")
```
