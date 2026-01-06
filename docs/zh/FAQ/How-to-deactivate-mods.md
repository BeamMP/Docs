## 为什么我需要停用我的模组 ？

在BeamMP中，您决定连接的服务器提供了必要的模块。这些会在连接时被下载并自动启用。安装本地模组并启用通常会导致BeamMP不能正常工作，即使您除了BeamMP之外只有一个额外的模组。

!!! 警告

```
移除你安装在BeamNG.Drive\content\或子文件夹的任何模组。这个位置不是用来安装mod的，可能会导致位于同一目录下的“DO_NOT_INSTALL_MODS_HERE.txt”文件中所述的问题。

！！! 引用“DO_NOT_INSTALL_MODS_HERE.txt”

不要复制mod到这个文件夹：它会导致损坏的mod，更新的安装速度变慢，损坏的mod管理器，损坏的安全模式和其他。
```

## 我如何停用/删除我的模组 ？

在使用BeamMP时，有3个选项可以解决可能出现的问题。

### 1. 禁用模组

在加入任何服务器之前，请确保除了启用“multiplayerbeammp”之外没有其他mod。如果游戏死机或者你仍然有问题，请参考下一个选项

### 2. 创建一个新的用户文件夹

打开BeamNG.Drive的用户文件夹，并将`current`文件夹重命名为例如`current_old`。在重命名之前记得关闭BeamNG。![image](../../assets/content/new-userfolder.png)

### 3. 从内容文件夹中删除模组。

访问BeamNG.Drive\content\文件夹并删除文件夹中的任何模组，打开安装位置的BeamNG.Drive。右键单击`content`文件夹并删除它。继续通过Steam或Epic Games验证游戏文件。这将再次下载文件。

完成后，通过BeamMP- launcher启动BeamNG，您应该将“multiplayerbeammp”作为模组管理器中唯一启用的mod，然后点击主菜单上的按钮进入BeamMP。如果你在加入mod服务器时仍然有问题，他们可能提供了损坏/未更新的mod。

### 4. 清理BeamMP-Launcher缓存

要从BeamMP目录中清除缓存的模组，请转到BeamMP- launcher的安装位置。默认情况下，路径为“C:\Users\AppData\BeamMP-Launcher”。在那里，你会发现一个“Resources”文件夹。删除这个文件夹来删除所有缓存的mod。如果您需要更多磁盘空间或想要删除过时的BeamNG模组，这将非常有用。

!!! 问题 "我的设置和配置文件都不见了！ 我怎样才能恢复呢？"

```
如果你重命名了用户文件夹，你就会让游戏创建一个新的、干净的用户文件夹。你可以从你重命名的文件夹中复制“settings”和“vehicles”文件夹。‘ current_old ’)到它创建的新文件夹。
确保BeamNG已关闭，并替换要复制文件夹到的位置中的所有要素。现在，您应该就会有与以前一样的所有配置和设置。
```
