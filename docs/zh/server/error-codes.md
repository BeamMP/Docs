# 错误代码

此页面包含服务器可能显示的所有错误代码。

---

错误代码 | 描述 | 可能的解决方案
--- | --- | ---
10022 | 绑定端口时出现问题 | 检查该端口是否已被其他服务占用，如果是，请更换为其他端口。
10048 | 地址已被占用 | 有另一个 BeamMP 服务器或程序正在使用该端口，请更换为其他端口。
10051 | 网络不可达 | 端口转发配置错误或类似问题，请确认所有设置均已正确配置。
10052 | 网络重置 | 当网络在建立连接过程中断开时会发生此情况。请重试连接。
10053 | 连接已中止 | 由于超时或网络错误导致，请重试连接。
10054 | 连接被对端重置。 | 有客户端已从你的服务器断开连接。
10060 | 连接超时 | 你的端口转发存在问题，请参考 [指南步骤](create-a-server.md#1-port-forwarding)。
10061 | 连接被拒绝 | 你的端口转发存在问题，请参照 [指南步骤](create-a-server.md#1-port-forwarding)。
10064 | 主机宕机 | 罕见错误，但表示主机已宕机，可能是因为主机已关闭或端口被关闭。
10065 | 无法访问主机 | 无网络或端口转发错误，请参考 [指南步骤](create-a-server.md#1-port-forwarding)。

!!! note “对于本列表中未包含的任何其他错误代码，如果你对网络/套接字有一定了解，可以参考 [https://learn.microsoft.com/en-us/windows/win32/winsock/windows-sockets-error-codes-2](https://learn.microsoft.com/en-us/windows/win32/winsock/windows-sockets-error-codes-2)。
