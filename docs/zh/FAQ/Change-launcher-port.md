# 问题

启动器没有连接到游戏。这个快速指南解释了如何手动更改启动器端口。

# 手动修改端口

1. 启动 BeamNG
2. 在主菜单, 打开设置, 然后找到 “Multiplayer”
3. 在 “multiplayer” 设置, 启用 `显示高级选项`
4. 向下滚动
5. 在`启动端口号`中，将端口号更改为其他内容，例如4567
6. 关闭 BeamNG
7. 右键单击BeamMP-launcher快捷方式，并在上下文菜单中选择`“Open file location”`
8. 用文本编辑器打开`launcher.cfg`文件
9. 将`“port”：4444，`的编号更改为与之前在游戏内选项中使用的相同，在本例中为4567
10. 保存设置并关闭文本编辑器
11. 启动 BeamMP-launcher

如果仍然没有连接，用另一个端口再试一次。在~2000到65535之间的任何数字都是有效的端口

## 还面临问题吗？

在我们的[Discord服务器](https://discord.gg/BeamMP)上创建一个支持票。

标签: Launcher, Connection Failed, Port Number
