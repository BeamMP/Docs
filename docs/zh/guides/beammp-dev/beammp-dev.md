# 开始

为了开始开发BeamMP，你至少需要：

- 安装在本地的BeamNG.drive
- 安装在本地的BeamMP; 至少是启动器，另外还有服务器
- 安装在本地的Git, 和一个 GitHub.com 账号
- 一个代码编辑器, 例如VSCode或notepad++

---

# 模组，启动器和服务器之间的区别

BeamMP分为三个主要部分：

- 该模组与游戏中的其他载具模组或界面模组相同，均通过BeamNG引擎加载运行。其核心功能包括与启动器建立本地通信链路，以及渲染多人联机界面组件。技术架构方面，主体逻辑采用Lua脚本语言实现，界面层则基于JavaScript、HTML与CSS的复合式开发框架进行构建。相关代码仓库详见[https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)。
- 本启动器核心功能集包括：与模组维持持续通信、在需要时建立目标服务器连接，以及通过BeamMP后端系统执行用户登录认证流程。该程序基于C++语言开发，部署前已由BeamMP团队完成预编译处理，完整源代码参见[https://github.com/BeamMP/BeamMP-Launcher](https://github.com/BeamMP/BeamMP-Launcher)。
- 服务端核心功能涵盖：与多个启动器实例建立通信链路、向BeamMP后端系统发送"心跳"信号同步IP/端口/版本/玩家数量等运行参数，并管理与调度服务端Lua插件运行。底层架构基于C++语言实现，已由BeamMP针对多操作系统平台及CPU指令集进行预编译生成，完整源码仓库位于[https://github.com/BeamMP/BeamMP-Server](https://github.com/BeamMP/BeamMP-Server)。

---

# 配置适用于模组开发的运行环境

## 为BeamNG使用未打包文件

为实现BeamNG模组开发的高效迭代，建议开发者采用`非打包目录`的实时更新工作流模式，避免每次代码变更后执行重复的压缩打包操作。

请通过文件管理器访问BeamNG用户目录：`%appdata%/Local/BeamNG.drive/0.xx/mods`，其中`xx`对应当前最新的BeamNG版本号。在`mods`目录内创建名为`unpacked`的专用开发文件夹。

有关用户目录的技术规范细则，请参阅BeamNG官方文档中心：[https://documentation.beamng.com/support/userfolder/](https://documentation.beamng.com/support/userfolder/)

## 在BeamMP启动器中启用开发模式

为防止自动更新机制覆盖本地Git仓库副本，请通过添加运行参数`--no-download`强制停用该功能；若需同时禁止启动器自动运行BeamNG主程序，并获取实时调试日志，推荐配置方案为附加开发调试参数`--dev`。

命令行参数 | 说明
:-- | :--
`--help` or `-h` | 该指令将输出下列标准化参数清单
`--port <port>` or `-p` | 请将服务端默认监听端口修改为`<port>`，该项变更需同时在游戏客户端内进行同步配置。
`--verbose` or `-v` | 详细日志模式，输出调试级系统信息
`--no-download` | 强制禁用BeamMP Lua模组自动部署流程
`--no-update` | 激活维护模式锁定更新通道（需采用手动升级方式）
`--no-launch` | 强制解耦启动器与游戏进程链路（需进行独立启动流程）
`--dev` | 开发者模式，与 --verbose --no-download --no-launch --no-update相同
`--game <args...>` or `-- <args...>` | 实现运行参数向游戏进程的透传桥接

## 执行仓库克隆操作至目标解压目录

虽然您可手动从GitHub仓库(a0)https://github.com/BeamMP/BeamMP复制BeamMP模组文件，但强烈建议使用Git版本控制系统进行规范操作。请首先执行分叉(fork)操作。

最有效的方式是直接将存储库克隆到`unpacked`文件夹中。

在`git`环境配置下，请遵循以下部署流程：<br>从`解压根目录`启动PowerShell/CMD终端<br>执行克隆操作：`git clone https://github.com/yourName/BeamMP`

现在试试开发模式吧。启动BeamMP启动器，手动启动BeamNG，一旦进入游戏，确保BeamMP是唯一有效的模组。你应该能够像往常一样使用BeamMP。

使用代码编辑器，您现在可以直接在`unpacked`文件夹中添加或更改代码。然后你可以通过按`Ctrl+L`重新加载Lua来尝试更改（如果你做了UI更改，则按`F5`）。

一旦您对更改满意，就可以通过git提交它们。有关如何使用Git的教程和文档，请参阅Git- scm网站。一旦您的更改被提交并推送（到您的分支），您就可以发出拉取请求。

如果您遇到任何问题，请在[Discord](https://discord.gg/beammp)的#scripting频道中提问。

---

# 设置本地服务器

在使用BeamMP时，使用本地服务器可能是有益的。您可以遵循常规的[服务器安装](../../server/create-a-server.md)，同时省略纯本地连接的前两个步骤。

在`serverConfig`中将服务器设置为私有。使用任意字符串作为`AuthKey`。

---

# 贡献指南

有关代码格式、提交信息格式、通用开发最佳实践等详细信息，请参阅各仓库中的`CONTRIBUTING.md`文件。该文件包含更详细的贡献指南，各仓库中的`README.md`文件通常也会提供具体的构建步骤说明（针对需要编译的项目）。
