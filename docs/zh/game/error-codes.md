# 错误代码

此页包含启动程序可能显示的所有错误代码。

---

代码 | 描述 | 可能的解决方案
--- | --- | ---
10048 | 其他东西占用了启动器端口 | 确保只运行了一个BeamMP-Launcher程序。或尝试重新启动电脑。
10038 / 10060 / 10061 | 在此指定的IP和/或端口上没有服务器应答 | 若您为服务器所有者，请前往[BeamMP-Server](https://docs.beammp.com/server/create-a-server)核验端口转发规则及防火墙策略；若非所有者，请尝试切换其他服务器或联系已知管理员协同排障。
10054 | 对方/服务器突然断开了连接 | 您正在连接的服务器已离线。
Failed to find the game please launch it. Report this if the issue persists code 3. | 启动器无法在注册表项中找到游戏信息（游戏目录，配置文件目录，版本等） | 至少运行一次游戏，以便创建注册表值。
Failed to find the game please launch it. Report this if the issue persists code 4. | 启动器无法从注册表项中读取游戏信息（游戏目录、配置文件目录、版本等） | 此错误最有可能出现在**盗版**游戏的用户中。如果你已经购买了游戏，至少运行一次，这样注册表值就会被创建。
Failed to Launch the game! launcher closing soon | 启动器无法找到游戏的可执行文件 | 在再次运行启动器之前，至少运行一次游戏。
Game Closed! launcher closing soon | 游戏关闭了 | 此消息将在游戏结束或游戏启动失败时出现。
Launcher Update failed! | 启动器未能下载新版本 | 检查您的互联网连接和防火墙/防病毒规则，让启动器没有被阻止。
Logger file init failed | 启动器缺乏文件创建权限 | 使用管理员身份运行启动器
Please close the game and try again | 游戏已经打开，启动器无法清除`multiplayer/mod `文件夹 | 关闭游戏并重试
Please launch the game at least once | 启动器尝试修改游戏目录但是失败了 | 在再次运行启动器之前，至少运行一次游戏。
Primary Servers Offline! Sorry for the inconvenience! | 启动器未能检查更新 | 检查你的互联网连接和防火墙规则。如果您没有问题，请查看我们Discord上的[BeamMP更新频道](https://discord.com/channels/601558901657305098/697596153943949352)。
Sorry Backend System Outage! Don't worry it will back on soon! | BeamMP后端没有响应 | 检查你的互联网连接和防火墙规则。如果您没有问题，请查看我们Discord上的[BeamMP更新频道](https://discord.com/channels/601558901657305098/697596153943949352)。
Stuck on updating | 启动器卡在更新上，不会继续下一步 | 以管理员身份运行启动器并检查反病毒规则，以确保启动器未被阻止。

如果启动器迅速“闪退”了，请检查安装BeamMP的文件夹中的` launcher .log`文件。
