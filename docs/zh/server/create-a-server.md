# 服务器端的安装

## **创建服务器**

设置服务器应用程序的基础知识

---

### **概述**

**创建一个家里云是免费的，但是托管一个VPS更容易也更安全**

服务器是BeamMP的一个组成部分；玩家通过服务器相互连接。它们在Windows和Linux上本机运行。

你可以制作私人服务器，只有你邀请的人才能加入，或者设置为公共服务器，显示在我们的官方服务器列表中。

让服务器上线运行需要经过几个步骤！如果遇到任何问题，可以随时在我们的 [论坛](https://forum.beammp.com) 或 [Discord 服务器](https://discord.gg/beammp) 的 `#support` 频道提问。更多信息也可参考 [服务器维护](server-maintenance.md) 部分。

请在使用服务器前务必阅读 [许可协议](https://raw.githubusercontent.com/BeamMP/BeamMP-Server/master/LICENSE)。

*服务器仅支持 IPv4。如果你不确定自己使用的是哪种协议，可以查看在 [*whatsmyip.org*](https://www.whatsmyip.org/) 上看到的 IP 地址——如果它包含 `:` *冒号，则为 **IPv6**。在这种情况下，你需要进一步确认自己是否也拥有 IPv4。你可以联系你的 ISP 查询，或者问问与你同住的人（如果他们懂技术，可能知道！）。计划将来支持 IPv6。**

## 设置服务器

设置包括以下步骤，您应该遵循所有步骤。

### **1. 端口转发**

!!! info

```
如果你使用的是 VPS（虚拟专用服务器）、Rootserver，或者计划在本地托管服务器（与家里其他玩家在同一屋檐下），可以跳过此步骤。
如果你希望家外的人加入你本地托管的服务器（即在本地网络之外），则必须执行此步骤。

!!! danger ":material-scale-balance: 免责声明："

    **端口转发存在风险**.

    进行端口转发意味着你理解将家庭网络端口向公众开放的风险，因此 BeamMP 对你或你家庭可能发生的**任何和所有**损害不承担责任。

我们不对任何外部链接服务或网站上的内容负责。

   因此，建议使用我们的合作服务来托管服务器！

*请参阅 [端口转发指南]了解详细操作(port-forwarding.md)*
```

#### 合作托管服务（付费）：

- [Horizon Hosting](https://hrzn.link/beammp)
- [RackGenius](https://rackgeni.us/beammp-plans)
- [Connect Hosting](https://connecthosting.net/beammp)
- [Assetto Hosting](https://assettohosting.com/en/games/beamng)
- [ZAP-Hosting](https://zap-hosting.com/itsbeammp)
- [HostHavoc](https://hosthavoc.com/)
- [PedalHost](https://pedal.host/)
- [Vyper Hosting](https://vyperhosting.com/r/beammp)
- [BisectHosting](https://www.bisecthosting.com/beammp-server-hosting)
- [Four Seasons Hosting](https://fourseasonshosting.com)
- [Vertuo Hosting](https://vertuohosting.com)
- [Winheberg](https://winheberg.fr/offres/gaming/beammp?lang=en)
- [Wabbanode](https://wabbanode.com/partner/beammp)
- [Iceline Hosting](https://iceline-hosting.com/games/beammp)

#### 1.1 防火墙

根据你的设置，你可能需要允许 BeamMP-Server 通过防火墙。在 Windows 上通常需要这样操作（关闭防火墙通常 **无效**），在许多预装的 Linux 服务器上也是如此

在这里，你需要允许 BeamMP-Server 通过防火墙，**包括入站和出站连接**，并且 **包括 TCP 和 UDP**。如果防火墙要求指定端口，则必须使用你在步骤“1. 端口转发”中使用的相同端口（通常为 30814）。

如需更详细的指南，请参阅 [此文档页面](https://docs.beammp.com/FAQ/Defender-exclusions/)。<br>如果遇到问题，也欢迎随时在我们的 [论坛](https://forum.beammp.com) 或 [Discord 服务器](https://discord.gg/beammp) 的 `#support` 频道中提问。

### **2. 获取认证密钥**

‘认证密钥’，通常称为 ‘AuthKey’，是使 **公共** 服务器可以通过服务器列表访问所必需的。虽然也建议将 AuthKey 添加到私人服务器。你拥有的密钥数量有限。一个密钥一次只能用于一台服务器，因此不能用同一个密钥同时启动两台服务器。通过支持该项目可以获得更多密钥。更多信息请参阅 [这篇文章](https://docs.beammp.com/support/player-faq/)。

!!! 警告

```
千万不要把密钥给别人看，把它当作密码！
```

此步骤需要一个 [Discord](https://discord.com) 账号。此举是为了防止垃圾信息。

#### 2.1. 访问密钥页面

通过 Discord 登录至 [Keymaster](https://keymaster.beammp.com)。在 Keymaster 主页中，点击屏幕左侧的“Keys（密钥）”：

<figure markdown="">   ![](../../assets/content/keymaster_homepage.png) </figure>

#### 2.2. 创建密钥

要创建密钥，请单击右上角的绿色“+”按钮。

<figure markdown="">   ![](../../assets/content/keymaster_new_key.png) </figure>

#### 2.3. 填写关键信息

接下来，填写服务器名称字段（这只是密钥的名称，而不是服务器列表上显示的实际名称），然后点击“Create”。范例：

<figure class="image image_resized" style="width:44.84%;" markdown="">   ![](../../assets/content/keymaster_server_name.png) </figure>

最后，它看起来应该是这样的：

<figure markdown="">   ![](../../assets/content/keymaster_key_done.png) </figure>

#### 2.4. 复制密钥

现在复制“Key”字段中的文本，在此范例中为 `3173a2e-6az0-4542-a3p0-ddqq5ff95558`，并保存以便下一步使用。你可以点击密钥右侧的剪贴板图标来完成复制：

<figure markdown="">   ![](../../assets/content/keymaster_copy_key.png) </figure>

### **3. 安装**

BeamMP-Server适用于Windows和Linux。接下来的两节分别介绍Windows和Linux。

#### 3.a. 安装在Windows上

对于Linux安装，请参见下一步。

在尝试在家托管服务器之前，请确保已完成端口转发！如果端口未转发，你将无法向公众托管服务器！

1. 请确保已安装 [Visual C++ 可再发行组件](https://aka.ms/vs/17/release/vc_redist.x64.exe) 以运行服务器。
2. 从 [beammp.com](https://www.beammp.com/) 下载服务器可执行文件。你将得到一个可执行文件，名称类似于 `BeamMP-Server.exe`。
3. 下载完成后，在某个位置创建一个文件夹，并将 `BeamMP-Server.exe` 放入其中。这就是你的服务器端所在的位置。
4. 双击启动服务器一次。这将为你生成所有必要的文件，当你看到文本输出后即可关闭并进行下一步。你应该会在 `BeamMP-Server.exe` 旁看到一个 `ServerConfig.toml` 文件。
5. （可选）为了日后快速访问，你可以轻松为 `BeamMP-Server.exe` 创建桌面快捷方式，方法是 **[右键点击]** &gt; **发送到** &gt; **桌面（创建快捷方式）**。

现在继续进行步骤 [4. 配置](#4-configuration)。

#### 3.b. 在Linux上安装

##### 使用我们的版本（推荐）

此步骤适用于我们在 [此处](https://github.com/BeamMP/BeamMP-Server/releases/latest) 提供二进制文件的所有发行版。如果你使用的是其他发行版或架构，请参考下方的“从源码构建”步骤。

1. 请确保已安装列在 [此处](https://github.com/BeamMP/BeamMP-Server#runtime-dependencies) 的依赖项。
2. 访问 [beammp.com](https://beammp.com/) 并点击“Download Server”按钮，你将被重定向到服务器的 Github 发布页面。
3. 下载与你的发行版对应的正确版本。为了简便起见，今后将其称为 `BeamMP-Server-xxx`，其中 `xxx` 表示你所使用发行版的版本。
4. 下载完成后，你应该会看到一个名为 `BeamMP-Server-xxx` 的文件，其他文件暂时可以忽略。在某个位置创建一个文件夹，并将 `BeamMP-Server-xxx` 放入其中。这就是你的服务器所在的位置。
5. 打开终端，进入你放置 `BeamMP-Server-xxx` 的文件夹，并运行 `chmod +x BeamMP-Server-xxx`。这可以确保你有权限运行它。
6. 运行 `./BeamMP-Server-xxx` 启动服务器一次。这将为你生成所有必要的文件，当你看到文本输出后即可关闭并进行下一步。你应该会在 `BeamMP-Server-xxx` 旁看到一个 `ServerConfig.toml` 文件。
7. 可选）强烈建议创建一个名为 `beammpserver`（或类似名称）的用户，因为我们不建议以 root、sudo 或你的个人用户账号运行服务器。之后，你应采取措施确保服务器仅以该用户身份启动。

现在继续进行步骤“4. 配置”。

##### 从源码编译

除了我们在 [此处](https://github.com/BeamMP/BeamMP-Server/releases/latest) 提供二进制文件的发行版外，其他发行版也可能可用，但不在官方支持范围内。如果你想自行编译，可以从我们的 [GitHub](https://github.com/BeamMP/BeamMP-Server) 下载源码，教程可在 [此处](https://github.com/BeamMP/BeamMP-Server#build-instructions) 找到。

最后，确保运行一次服务器：`./BeamMP-Server`，然后继续进行下一步。

### **4. 配置**

现在你已经运行过一次服务器，它应该已经生成了一些文件，并可能出现了一两个错误。这是正常的，因为我们还没有完成。你的文件夹中应该包含以下文件：

<figure markdown="">   ![](../../assets/content/after-running-once.png) </figure>

它们分别是 ‘ServerConfig.toml’、‘Server.log’ 和 ‘BeamMP-Server.exe’！（根据你的设置，你可能看不到 [.toml]、[.log]、[.exe] 后缀）

使用文本编辑器（例如 `Notepad`）打开 `ServerConfig.toml`。你可以通过 [右键点击] → “打开方式…” 然后选择文本编辑器来完成此操作。

以下是一个示例配置：

```TOML
[General]
Port = 30814
AuthKey = "auth-key"
AllowGuests = false
LogChat = false
Debug = false
IP = "::"
Private = true
InformationPacket = true
Name = "Test Server"
Tags = "Freeroam,Modded,Racing,Police"
MaxCars = 2
MaxPlayers = 10
Map = "/levels/ks_nord/info.json"
Description = "Total Random Beam MP Server"
ResourceFolder = "Resources"
```

!!! info

```
这是您的配置文件。它采用了一种名为 TOML的格式。有关该文件及其变量的更多信息，请参考 [Server Maintenance（服务器维护）](server-maintenance.md) 章节。

只要设置了`Private = true`，您的服务器就不会出现在服务器列表中。如果您希望服务器在列表中显示，请将其设置为`Private = false`。
```

目前，我们只需要关注 `AuthKey`字段。请将你在第一步中复制的AuthKey粘贴到引号 `''`之间。

对于我们的范例密钥，它应该是这样的：

```TOML
AuthKey = '3173a2e-6az0-4542-a3p0-ddqq5ff95558'
```

同时，请在`Name`字段中为您的服务器命名。您可以为其设置颜色或其他样式，具体请参考服务器维护页面中关于[名称自定义的章节](server-maintenance.md#customize-the-look-of-your-server-name)。

如果你选择了除 **30814** 之外的其他 **端口**，请确保在 `Port` 下进行替换。

### **5. 验证**

现在再次运行你的服务器，看看是否还会出现 `[ERROR]` 或 `[WARN]` 消息。此时服务器应该会保持开启状态。在下面的步骤（6.）中，你可以了解如何加入服务器。

---

#### 5.1 怎么添加模组到我的服务器中

车辆模组和地图模组的安装方式不同，但都需要将它们放入服务器的 (`Resources/Client`) 文件夹中。只需将你想添加的模组放入该文件夹即可。

!!! 警告

```
如果在添加模组后尝试加入服务器时收到“done”或“start”消息，很可能是因为你向服务器添加了不兼容或损坏的模组。
模组之间也可能存在不兼容的情况。如果你在客户端安装了模组，请查阅本指南
了解如何从游戏中移除模组。
```

#### 5.2 一般的模组

如果你只想添加带模组的车辆，只需将模组的 zip 文件放入 `Resources/Client` 文件夹。加入你服务器的任何人都会自动下载这些模组。

#### 5.3 地图

所有默认地图（非模组的地图）都可以开箱即用，无需安装。您只需在 `ServerConfig.toml` 文件中将 `Map` 设置更改为 [这些](server-maintenance.md#all-vanilla-maps-names) 中的任意一个。对于任何其他模组地图，请执行以下操作：

1. 将你的地图 `.zip` 文件放入服务器的 (`Resources/Client`) 文件夹中。
2. 接下来，查看地图的 zip 文件内容（不要解压），并打开 `levels` 文件夹。在此文件夹中，应仅有一个以地图名称命名的子文件夹，例如 “myawesomedriftmap2021”。请确保 *完全按照该文件夹的名称复制或记住这个名称*。
3. 打开你的 `ServerConfig.toml`。在 `Map` 设置中，你应该会看到 `/levels/MAPNAME/info.json`，其中 `MAPNAME` 可能类似于 `gridmap_v2`。现在，你需要将此 `MAPNAME` 替换为上一步中子文件夹的名称，在本例中是 `myawesomedriftmap2021`。最终它应像下面这样（以本例为例），并且 ***必须*** 在末尾保留 `/info.json`。

```TOML
Map = '/levels/myawesomedriftmap2021/info.json'
```

现在，当有人加入你的服务器时，地图应会自动下载并正常运行。

**如果这不起作用**，请在你的单人模式 BeamNG.drive 中安装该地图，启动并进入地图。然后，通过按 `~`（*波浪号*）键打开控制台（如果你使用非美式键盘，请在 **选项 &gt; 控制 &gt; 绑定** 菜单的 **通用调试** 部分中查看 **切换系统控制台** 的操作），并运行 `print(getMissionFilename())`。这样就会显示你需要使用的地图名称。

就这样！你添加的模组地图现在应该可以加入了！

### **6. 怎么加入你的服务器**

你和其他玩家如何加入你的服务器。

#### 6.a. 加入您自己的服务器（私有和公共）

如果你的服务器与游戏运行在同一台电脑上，你必须通过直接连接加入服务器。为此，请在服务器列表左侧点击 **Direct Connect Tab**。保持默认信息（应为 127.0.0.1 及对应端口），然后点击连接。

如果你的服务器托管在本地网络中的另一台电脑上，你必须找到该电脑的本地 IP，并使用该本地 IP 进行直接连接。

如果你的服务器托管在家外（例如 VPS），你必须找到该机器的 [公网 IP](https://whatismyipaddress.com/) 并通过该方式进行直接连接。

#### 6.b. 其他人加入您的私人服务器

你必须将服务器的公网 IP 地址提供给其他用户。但请注意，不要随意将你的公网 IP 地址分享给陌生人！要加入你的私人服务器，玩家必须在 BeamMP 中进入 **Direct Connect Tab**，然后输入你的 IP 和端口。

#### 6.c. 其他人加入您的公共服务器

若要加入您的公开服务器，其他玩家只需前往服务器列表，输入服务器名称并点击连接即可。如果您不确定自己的服务器名称，请查看您在 `ServerConfig.toml`中填写的名称。<br>如果找不到服务器，请确保已禁用所有搜索过滤器，并将地图设置为“全部”。您也可以前往 [Keymaster](https://keymaster.beammp.com/) 网站查看服务器的 IP 地址。

如果你或你的朋友遇到“Connection Failed!”错误，请查看启动器窗口中的代码，如 10060、10061、10030。这意味着你要么使用了 CGNAT IPv4，要么在步骤 **1 端口转发** 或 **1.1 防火墙** 中操作有误。要检查是否使用 CGNAT IPv4，请在路由器界面上查看 WAN IP 地址，并将其与你的 [公网 IP](https://www.whatsmyip.org/) 进行比较。如果两者相同，则表示你不在 CGNAT 后面。IPv6 支持尚未 **实现**。

### **7. 如何检查您的BeamMP-Server的连通性**

在下方输入服务器的公网 IPv4 和端口，然后点击“CheckBeamMP”。

<form action="https://check.beammp.com/api/v2/beammp" method="get" target="_blank">
  <label for="ip">IP 地址:</label>
  <input type="text" id="ip" name="ip"><br>
  <label for="port">端口:</label>
  <input type="text" id="port" name="port"><br>
  <input type="submit" value="CheckBeamMP">
</form>

!!! warning "我想使用 RadminVPN、Hamachi 或类似的 VPN。"

```
BeamMP 不支持这些 VPN，因为它们经常引发问题。其中一个问题是 UDP 流量无法转发。要解决此问题，请参考第 1 节。

!!! question "那为什么以前可以用？"

    这是因为这些应用程序的开发者更新了软件并实施了 BeamMP 无法控制的更改。
是否支持像 BeamMP-Server 这样的特定使用场景，由这些应用程序的开发者决定。
```

## 还有问题吗？

在 [论坛](https://forum.beammp.com) 或我们的 [Discord 服务器](https://discord.gg/beammp) 的 `#support` 频道中发起一个讨论帖。
