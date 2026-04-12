# 入门

## **1. 兼容性**

BeamMP与Windows和Linux完全兼容，与MacOS的兼容性正在研究中。然而，Linux和MacOS都是次要平台，这意味着bug在所难免。

!!!警告

```
BeamMP将无法与盗版或过时版本的BeamNG.drive一起工作。
BeamMP支持团队不提供盗版/过期副本问题的支持。
```

## **2. 安装**

### **2a. Windows 安装**

1. 访问[beammp.com](https://beammp.com/)并点击“Download Client”按钮。
2. 解压`BeamMP_Installer.zip`。
3. 运行`BeamMP_Installer.exe`并按照说明进行操作。
4. BeamMP启动器图标应将出现在您的桌​​面上。如果没有，只需在Windows搜索栏中搜索“BeamMP”即可。
5. 启动器运行后，您应该会看到一个终端窗口，随即 BeamNG.drive将自动运行。**请勿**关闭终端窗口。
6. BeamNG启动后，在主菜单中点击`Repository`按钮，确保`multiplayerbeammp`是**唯一启用**的mod。
7. 返回主菜单，点击“More..”和“多人模式”按钮开始多人模式。
8. 系统将提示您登录或以访客身份游玩（并非所有服务器都允许访客）。您可以在我们的[论坛](https://forum.beammp.com)上创建一个帐户，然后使用相同的凭据登录BeamMP。
9. 选择您感兴趣的任何服务器，然后点击`连接` 。尽情享受吧！

!!!注意

```
当你加载到一个有多个车辆的地图时，它可能需要比预期更长的时间才能加入。
```

### **2b. Linux 安装**

目前您需要自己编译Launcher。为了做到这一点，您需要对如何编译应用程序有一个基本的了解。

确保你已经安装了基本的开发工具，通常可以在包中找到，例如：

- Debian: `sudo apt install build-essential`
- Fedora: `sudo dnf install cmake gcc-c++ perl-IPC-Cmd perl-FindBin perl-File-Compare perl-File-Copy`
- Arch: `sudo pacman -S base-devel`
- openSUSE: `zypper in -t pattern devel-basis`
- SteamOS (Arch): `sudo pacman -S base-devel linux-api-headers glibc libconfig` (You also need to do `sudo steamos-readonly disable` but make sure to enable it again after installing the packages)

克隆 `vcpkg` 仓库，执行引导脚本并加入系统路径

1.

```bash
git clone https://github.com/microsoft/vcpkg.git
```

1.

```bash
./vcpkg/bootstrap-vcpkg.sh
```

1.

```bash
export VCPKG_ROOT="$(pwd)/vcpkg"
export PATH=$VCPKG_ROOT:$PATH
```

使用`git`将BeamMP-Launcher仓库克隆至本地，操作示例如下：`git clone https://github.com/BeamMP/BeamMP-Launcher.git`。[查看GitHub仓库克隆操作完整指南](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

检出[最新发布版本](https://github.com/BeamMP/BeamMP-Launcher/releases/latest)所使用的标签。例如，若最新版本使用`v2.6.4`，则执行`git checkout v2.6.4`

在项目的根目录中，

1.

```cmake
cmake . -B bin -DCMAKE_TOOLCHAIN_FILE=$VCPKG_ROOT/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-linux
```

1.

```cmake
cmake --build bin --parallel
```

!!!注意 ""

```
如果在编译时内存耗尽，可以提交——parallel指令，由于只在一个CPU线程上编译，它将使用更少的RAM。
```

!!!注意 ""

```
通过不指定‘ -DCMAKE_BUILD_TYPE=Release ’，您正在编译一个调试版本，该版本的文件大小较大，但不包含launcher-can-only-connect-to- server-once错误
```

将完成的应用程序从`/bin`文件夹移到它自己的文件夹中，并从那里运行它

本机linux BeamMP-Launcher将启动并使用本机linux beammp .drive

### **2c. 在Proton兼容层上游玩BeamNG.drive**

若您需要在Proton环境运行BeamNG.drive时同步使用原生Linux版BeamMP启动器，可通过以下方案实现：

使用`--no-launch`参数运行BeamMP-Launcher（此参数将阻止启动器唤起原生Linux版BeamNG.drive）。更多启动器参数详解请参阅[开发环境配置指南](../guides/beammp-dev/beammp-dev.md)

将Proton-BeamNG.drive的用户文件夹路径指向Linux-BeamNG.drive的位置（因原生Linux版BeamMP-Launcher当前仅支持向Linux-BeamNG.drive用户文件夹写入数据）

例如，您可以通过创建符号链接实现该配置

- 记录Linux-BeamNG.drive用户文件夹路径（通常位于`~/.local/share/BeamNG.drive`），并将其重命名为类似`BeamNG.drive_old`的名称
- 记录Proton-BeamNG.drive用户文件夹路径（通常位于`~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive`）
- 建立双端用户文件夹的符号链接桥接 `ln -s ~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive ~/.local/share`

当用户文件夹间符号链接就绪且启动器完成编译后，可通过调整Steam启动参数实现：既让Steam通过Proton运行游戏，又能自动触发启动器执行。请前往Steam库中该游戏的属性设置界面，替换原版游戏启动参数为下方配置模板：

- `~/BeamMP/BeamMP-Launcher --no-launch & %command% ; killall BeamMP-Launcher`

请注意：此配置默认假设您已将编译完成的启动器二进制文件存放于`/home/user/BeamMP/`。请根据实际二进制文件存放路径调整配置，且每次启动器版本更新时需切换至官方Git仓库对应分支重新执行编译流程。

!!! 提示 "安装表情符号字体实现文本内嵌表情"

```
若需在服务器列表（作为服务器自定义名称组成部分）或游戏内聊天中显示表情符号，您需部署包含表情符号的字形库。例如，可通过安装Windows Segoe UI 表情符号字体的 Linux 移植版实现。
```

---

## **3. 已知的问题**

- 当前原生Linux版BeamMP启动器存在单会话限制：成功连接服务器并断开后需重启启动器。可通过热重载方案实现不关闭游戏进程的快速重启
- 若未显示多人游戏按钮，请确认以下操作：<br>检查BeamMP模组是否已安装并在模组管理器中启用<br>尝试执行热重载快捷键 Ctrl + L
- 任何类型的vpn都可能导致连接问题。
- 如果启动器报告任何错误，请阅读[FAQ](https://forum.beammp.com/c/faq/35)。

如果启动器报告任何错误，请阅读[FAQ](https://forum.beammp.com)。
