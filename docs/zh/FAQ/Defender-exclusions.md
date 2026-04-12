# 如何在Windows Defender防火墙和防病毒软件中创建白名单？

!!! info

```
在修改防火墙之前，请确保将windows网络设置中的网络设置为专用（假设您在私有网络中）。

!！! 免责声明："

**防火墙/防御器关闭具有风险**。

通过创建排除条款，您了解允许在PC上运行程序并向公众开放家庭网络端口的风险，从而使BeamMP对可能发生在您或您的家庭中的任何和所有损害负责的权利无效。

我们对任何外部链接服务或网站上的任何内容不承担任何责任。
```

## 为 BeamMP-Launcher 添加 Windows Defender 防火墙例外规则

1. 打开带有高级设置的`Windows Defender防火墙。`
2. 在窗口中，单击`入站`以打开入站规则选项卡。
3. 点击 `新建规则` 在右上方创建一个新的规则。
4. 选择`程序`以创建特定于程序的规则。
5. 请输入 `BeamMP-Launcher.exe` 的完整限定路径。<br>默认路径为 `%appdata%\BeamMP-Launcher\BeamMP-Launcher.exe`（请勿包含引号）。
6. 确保允许连接
7. 给排除项起一个名字(例如：“BeamMP-Launcher”)并保存它。
8. 重启电脑

## 1.1 为 BeamMP-Launcher 添加 Windows Defender 防火墙例外规则

1. 打开 `Windows Defender高级防火墙设置`.
2. 在窗口中，点击 `入站` 以打开入站规则选项卡。
3. 在右上角点击 `新建规则` 以创建一条新的规则。
4. 选择 `端口` 以创建针对特定程序的规则。
5. 输入与 ServerConfig.toml 中配置的相同的端口号。
6. 请输入 `BeamMP-Server.exe` 的完整限定路径。<br>该文件位于你下载后自行放置的位置。
7. 确保允许连接
8. 为该排除规则命名（例如 “BeamMP-Server”），然后保存规则。
9. 重启电脑

## 2. BeamMP-Launcher 与 BeamMP-Server 的 Windows Defender 病毒防护排除设置

1. 打开 `Windows 安全中心` 应用.
2. 单击第一个项目`病毒和威胁防护`。
3. 单击“病毒和威胁防护设置”下方的`管理设置`。
4. 向下滚动以导航到`排除项`选项卡。
5. 在那里，单击“添加排除项”并选择`进程`。
6. 在字段中输入 `BeamMP-Launcher.exe` 或 `BeamMP-Server.exe`，然后保存。
7. 重启电脑。

## 还有问题吗？

在[论坛](https://forum.beammp.com)或我们的[Discord服务器](https://discord.gg/beammp) `#support`频道中打开一个频道。
