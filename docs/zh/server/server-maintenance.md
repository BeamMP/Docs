# 服务器维护

有关如何配置和维护 BeamMP 服务器的指南、提示和技巧。

## 怎么安装

有关安装说明，请查看 [服务器安装](create-a-server.md).

## ServerConfig文件

服务器配置，即一个名为`ServerConfig.toml`的文件, 使用了 [TOML 格式](https://toml.io/en/).

*注意*：*旧的*服务器配置文件名为`Server.cfg`，但该文件已不再使用，若其仍存在服务器将发出警告。另请注意，两种配置格式**不**相互兼容。

该配置文件默认包含一个名为`[General]`的节，该节包含以下值：

Key | 值类型 | 描述
--- | --- | ---
Port | 1024-65535 | 服务器可访问的网络端口。（必须是唯一的，且不能被同一主机上的其他服务占用）
AuthKey | 认证密钥格式为`xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`，其中所有x代表字母数字字符（数字和字母）。 | 用于通过后端识别公共集合服务器。
AllowGuests | true/false | 决定游客是否可以加入服务器。
LogChat | true/false | 当启用（设置为“true”）时，聊天消息会被记录在 server.log 文件中。
Debug | true /false | 当启用（true）时，将在日志中显示更多消息并提供更多信息。如果遇到问题，请启用此选项。启用此选项将显著增加日志文件的大小。
IP | 连接到主机的其中一个网卡（NIC）的本地分类地址。（默认值："0.0.0.0" 或 "::"） | 服务器将尝试绑定到所提供的 IP。除非您清楚自己在做什么，否则请勿随意修改IP字段。此数值无需更改即可使服务器正常运行。
Private | true/false | 当启用（true）时，您的服务器将不会显示在服务器列表中。任何拥有正确IP地址和端口的人仍然可以连接。
InformationPacket | true/false | 当启用（true）时，服务器将允许未经身份验证的客户端直接通过服务器获取与服务器列表中相同的信息。
Name | Any "text" | 在服务器列表中显示为您的服务器名称/标题。您可以使用特殊字符来为其添加颜色和样式。
Tags | 请参见下方允许的标签列表。 | 标签用于搜索 e.g. Police, Racing etc...
MaxCars | 数字永远 ≥ 1 | 每位玩家的最大车辆数量。玩家尝试生成的额外车辆将被立即删除。
MaxPlayers | 数字永远 ≥ 1 | 每个服务器的最大玩家数量。这不影响车辆数量。
Map | 需要一个有效的地图位置，例如`/levels/gridmap_v2/info.json` | 你的服务器将要托管的地图。必须默认安装（下方可找到列表）或作为服务器模组安装。
Description | 永远只能填写 "文本" | 在服务器列表中显示为服务器的描述（如果服务器是公开的）。你可以使用特殊字符来格式化这个描述，包括颜色和样式。
ResourceFolder | 有效的文件夹位置，例如 "D:\Server\BeamMP\Resources" | 便于将服务器和资源文件夹分开存储。
ImScaredOfUpdates | true/false | 这设置服务器在新版本发布时是否自动更新。
UpdateReminderTime | 任何带有s、min、h、d后缀的数字（例如30s）。 | 设置在终端中打印的更新提醒消息的间隔。

其他部分可以并且应该由服务器插件使用（Lua API 即将推出），例如：`[MyMod]`。

AuthKey **必须**由你自己来设置。<br>默认情况下它是空的，需要填入你之前安装步骤中获得的 AuthKey。<br>请勿将此密钥分享给任何人，在截图时要完全模糊处理此密钥。

### 所有原版地图名称

以下是所有原版地图：

- /levels/gridmap_v2/info.json
- /levels/johnson_valley/info.json
- /levels/automation_test_track/info.json
- /levels/east_coast_usa/info.json
- /levels/hirochi_raceway/info.json
- /levels/italy/info.json
- /levels/jungle_rock_island/info.json
- /levels/industrial/info.json
- /levels/small_island/info.json
- /levels/smallgrid/info.json
- /levels/utah/info.json
- /levels/west_coast_usa/info.json
- /levels/driver_training/info.json
- /levels/derby/info.json

### 自定义你的服务器名称外观

在服务器列表中，在你的文本前使用这些特殊符号，即可为该文本应用对应效果：

值 | 描述
:-: | ---
`^r` | 重设
`^p` | 换行（仅描述）
`^n` | 下划线
`^l` | 加粗
`^m` | 删除线
`^o` | 斜体字
`^0` | 黑色
`^1` | 蓝色
`^2` | 绿色
`^3` | 亮蓝色
`^4` | 红色
`^5` | 粉色
`^6` | 橙色
`^7` | 灰色
`^8` | 深灰色
`^9` | 亮紫色
`^a` | 亮绿色
`^b` | 亮蓝色
`^c` | 深橙色
`^d` | 亮粉色
`^e` | 黄色
`^f` | 白色

### 自定义您的服务器标签

标签可用于让人们搜索特定类型的服务器。  <br>你的 serverConfig.toml 将会自动生成带有 freeroam 标签的配置：  <br>`Tags = "Freeroam"`

你可以添加多个标签，用逗号分隔  <br>`Tags = "Events,Offroad,lang:english"`，  <br>标签不区分大小写。

你可以从以下列表中选择：

- 年龄/内容：

    - `Mature/18+`

- 游戏玩法类型:

    - `Freeroam`
    - `Roleplay`
    - `Economy`
    - `Traffic`

- 比赛类型:

    - `Racing`
    - `Racing:NASCAR`
    - `Racing:Track`
    - `Racing:Drag`
    - `Racing:Rally`
    - `Touge`

- 越野活动与挑战：

    - `Offroad`
    - `Crawling`
    - `Dakar`
    - `Challenge`

- 破坏事件：

    - `Derby`
    - `Arena`

- 天气与时间状况：

    - `Snow/Ice`
    - `Rain`
    - `Night`
    - `Weather`

- 游戏模式：

    - `Gamemode`
    - `Gamemode:Racing`
    - `Gamemode:Rally`
    - `Gamemode:Drag`
    - `Gamemode:Derby`
    - `Gamemode:Infection`
    - `Gamemode:Cops-Robbers`
    - `Gamemode:Delivery`
    - `Gamemode:Sumo`

- 社区与活动：

    - `Scenarios`
    - `Events`
    - `Leaderboard`

- 模组：

    - `Modded`
    - `Mod:BeamPaint`
    - `Mod:BeamJoy`
    - `Mod:CEI`

- 语言：

    - `Lang:English`
    - `Lang:Russian`
    - `Lang:French`
    - `Lang:Spanish`
    - `Lang:Portuguese`
    - `Lang:German`
    - `Lang:Polish`
    - `Lang:Arabic`

- 其他：

    - `Vanilla`
    - `Moderated`

如果某个标签不在此列表中，你可以提交请求要求添加 [在这里](https://forum.beammp.com/t/introducing-server-tags/1320081)

## Server.log 文件

此文件将在服务器运行时生成。它是你在运行服务器时控制台中看到的日志的镜像。  <br>每次需要向我们的支持人员寻求帮助时，都应附上此文件，而且它永远不会显示你的 AuthKey，因此通常无需修改即可直接发送。

格式如下（$ 前缀表示“变量”，详见下方说明）：

```
[$DATE $TIME] $CONTEXT [$LOG_LEVEL] $MESSAGE
```

地点：

- `$DATE` 是消息的日期，例如 21/07/2021
- `$TIME` 是消息的时间，例如 11:05:23
- `$CONTEXT`（仅在调试模式下可见，主要与开发者相关）是消息的上下文，可能为以下之一：
    - `(Player ID) “Player Name”`，其中玩家的ID对管理非常有用
    - 翻译 一个简短的名称，例如 “HeartbeatThread”
- `$LOG_LEVEL` 是消息重要性级别之一：
    - `DEBUG`：仅在调试模式下可见，通常信息量很大，仅对开发者重要
    - `INFO`：一般信息
    - `LUA`：来自 Lua 插件的消息
    - `WARN`：描述了通常不应该发生的事情。
    - `ERROR`：发生了非常严重的问题，或者出现了完全意料之外的情况
    - `FATAL`：发生了导致服务器关闭的事件
- `$MESSAGE` 消息本身，通常是你需要注意并理解的内容。  <br>在某些情况下它可能显得比较隐晦，但一般规则是：只要服务器表面上没有任何明显问题，也没有出现 ERROR，那就一切正常。

## 更新服务器

### 为什么要更新服务器

每次发布新更新时，建议你更新服务器。通常这包括错误修复、稳定性提升和安全性改进，同时还会引入新的通用功能等。

要接收更新发布时的新闻，你可以：<br>关注 Discord 服务器的“update”频道  <br>在论坛上留意相关信息  <br>查看或询问 [GitHub releases 页面](https://github.com/BeamMP/BeamMP-Server/releases)

### 怎么更新服务器

#### 如果你正在使用 BeamMP 合作的托管服务提供商

如果你正在使用 BeamMP 合作的托管服务提供商，下面的说明很可能不适用。  <br>我们建议你等待托管服务提供商提供更多详细信息，或者直接联系他们寻求帮助。

#### 管理自己的服务器

服务器通过将旧的可执行文件替换为新的来更新。  <br>如果你不确定如何操作，下面提供了 Windows 和 Linux 的分步说明。

如果你是从源代码构建的，只需重新构建即可。  <br>在重新构建之前，请确保运行以下命令：  <br>`git submodule update --init --recursive`

#### 在Windows中

1. 确保你已安装 [Visual C++ Redistributables](https://aka.ms/vs/17/release/vc_redist.x64.exe)，以便运行服务器。
2. 前往 [BeamMP.com](https://beammp.com/) 并点击“Download Server”按钮。
3. 下载完成后，你应该会看到一个名为 `BeamMP-Server.exe` 的文件。我们将这个文件称为“新可执行文件”。
4. 前往你的当前 `BeamMP-Server.exe` 可执行文件所在的文件夹（通常也是 `ServerConfig.toml` 所在的同一文件夹）。我们将这个文件称为“旧可执行文件”。
5. 将旧的可执行文件替换为新的可执行文件（例如，通过复制或移动新可执行文件到该文件夹中）。

#### 在Linux中

1. 前往 [BeamMP.com](https://beammp.com/) 并点击“Download Server”按钮，你将被重定向到服务器的 GitHub Releases 页面。
2. 下载适用于你发行版的正确版本。为方便起见，从现在起我们将它称为 `BeamMP-Server-xxx`，其中 `xxx` 表示你所使用发行版的对应版本。
3. 下载完成后，你应该会看到一个名为 `BeamMP-Server-xxx` 的文件（具体名称取决于你下载的版本）。  <br>我们将这个文件称为“新可执行文件”。
4. 前往你的当前 `BeamMP-Server-xxx` 可执行文件所在的文件夹（通常也是 `ServerConfig.toml` 所在的同一文件夹）。  <br>我们将这个文件称为“旧可执行文件”。
5. 将旧的可执行文件替换为新的可执行文件（例如，通过复制或移动新可执行文件到该文件夹中）。
6. 在你刚刚替换可执行文件的那个文件夹中打开终端，然后运行以下命令：  <br>`sudo chmod +x BeamMP-Server-xxx`  <br>这将确保服务器可以被运行。

### 自动更新

服务器（目前）不支持自动更新或更新通知。

不过，你可以通过向 GitHub API 查询最新 release 来检查服务器版本与标签的对比。  <br>你可以通过 GET 请求从以下地址获取：  <br>`https://api.github.com/repos/BeamMP/BeamMP-Server/git/refs/tags`
