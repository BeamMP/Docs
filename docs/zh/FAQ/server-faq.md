# 常见问题和已知问题

常见问题和已知bug列表。

---

## **服务器**

---

### **我怎么设置自己的服务器**

设置您自己的服务器的所有信息可以在[中找到](https://docs.beammp.com/server/create-a-server/)。

---

### **服务器端兼容LINUX吗？**

我们在这里提供了许多Linux发行版的二进制文件[。如果您的操作系统/发行版没有二进制文件，您可以通过在](https://github.com/BeamMP/BeamMP-Server/releases/latest)[GitHub](https://github.com/BeamMP/BeamMP-Server)上下载源代码来自己编译它，教程可以在中找到[。](https://github.com/BeamMP/BeamMP-Server#build-instructions)

---

### **运行BeamMP服务器的最低系统要求是什么？**

- 内存: 50+ MiB可用（不计算操作系统开销）
- CPU: &gt;1GHz, 最好是多核
- 操作系统： Windows、Linux（理论上兼容所有POSIX系统）
- GPU: 不需要
- 硬盘：10 MiB + 模组/插件
- 带宽：上传5 ~ 10m /s

---

## **局域网外的玩家无法加入我的自托管服务器**

请查阅[此处](https://docs.beammp.com/server/port-forwarding/)提供的端口转发指南，下文为其关键步骤摘要。若其他玩家通过BeamMP启动器连接您的服务器时出现错误代码10060、10061或10038，请按以下流程排查：

- 转发端口30814（或在ServerConfig.toml中配置的其他端口），需同时开放TCP与UDP协议。
- 请在Windows防火墙中为BeamMP放行入站与出站连接，直接关闭防火墙通常无法解决问题。
- 确认你现在没有在使用VPN (这可能是问题的原因).
- 确保服务器确实在运行，没有任何错误或警告。

您可以在服务器运行时使用CheckBeamMP检查您是否成功地进行了端口转发。

<form action="https://check.beammp.com/api/v2/beammp" method="get" target="_blank">
  <label for="ip">IP地址:</label>
  <input type="text" id="ip" name="ip"><br>
  <label for="port">端口:</label>
  <input type="text" id="port" name="port"><br>
  <input type="submit" value="CheckBeamMP">
</form>

注意:

- 一些互联网提供商不为您的连接（CGNAT）提供专用的IPv4地址，因此端口转发可能不成功，尽管它在路由器中是可以的。
- 如果你使用的是移动（4G/5G）互联网连接，端口转发是不可能的。

---

### **我可以在服务器列表中看到我的自托管服务器，但我不能自己加入它**

若服务器与游戏运行于同一台设备，您需通过在直接连接中输入IP地址 127.0.0.1 和服务器端口来加入。若要通过服务器列表加入自托管服务器，您的路由器需支持NAT环回功能，但多数家用路由器未提供此功能。

---

## **其他**

---

### **我在哪里可以找到源码？**

所有源代码都可以在我们的[GitHub](https://github.com/BeamMP)上找到。在做任何事情之前，请记住代码受我们的[使用条款](https://forum.beammp.com/t/terms-of-use-v1-0/43)和许可的约束：

代码 | 许可证
--- | :-:
服务器 | [许可证](https://github.com/BeamMP/BeamMP-Server/blob/master/LICENSE)
启动器 | [许可证](https://github.com/BeamMP/BeamMP-Launcher/blob/master/README.md)
客户端 Lua | [许可证](https://github.com/BeamMP/BeamMP/blob/development/LICENSE.md)

---

### **我发现了一个bug或漏洞，我应该怎么做？**

如果问题与代码相关，并且您知道如何使用Github，请在[ Github ](https://github.com/BeamMP)上的适当存储库中创建一个新的“issue”。我们使用基于问题的工作流程，所以即使你已经修复了bug，也可以考虑打开一个新的“Issue”，然后请求一个“Pull Request”来解决你的“问题”。更多关于贡献的信息可以在[中找到](https://github.com/BeamMP/BeamMP/blob/development/CONTRIBUTING.md)。

如果您没有GitHub帐户或者您不知道如何使用GitHub，您可以通过以下方式与我们联系：

- 如果问题不涉及隐私或安全，您可以在我们的[BeamMP论坛](https://forum.beammp.com)发帖反馈，或前往[官方Discord服务器](https://discord.gg/beammp)提交报告。
- 如果信息敏感，您可以直接向我们的[Discord](https://discord.gg/beammp)上的工作人员报告问题。
