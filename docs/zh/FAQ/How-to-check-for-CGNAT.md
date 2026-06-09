如何检查CGNAT？

## 问题

所有防火墙规则和端口转发规则设置正确，但没有人可以加入您的家庭托管服务器？

如果您有连接问题，并且您正在使用托管服务，请联系他们寻求帮助。如果您想使用VPS或无法在家中托管服务器，请查看我们的[合作托管服务列表](../../server/create-a-server/#partnered-hosting-services-paid)（服务器设置文档）。

# CGNAT是什么？

有关CGNAT是什么以及在尝试在家中托管服务器时为什么会出现问题的详细解释，请查看[这个页面](https://en.wikipedia.org/wiki/Carrier-grade_NAT)。

# 怎么检查CGNAT?

## 方法 1:

打开命令提示符，运行`tracert -4 beammp.com`。这将输出一系列网络跳数。等待操作完成（可能需要30跳）。检查路由器/调制解调器/网关IP后的前几个IP地址。如果有多个IP地址在`100.64.x.x`—`100.127.x。X `或`10.xx.xx。xx`出现在第一跳之后，您很可能在CGNAT后面。

!!! 注意

```
第一跳将是你的路由器/调制解调器/网关，不同的设备不同。
本地网络的官方范围如下：‘ ’ 10.0.0。Xxx ' ' - ' ' 192.168.xxx. Xxx。Xxx ' ' - ' ' ' 172.16.xxx.xxx ' ‘ ’
```

## 方法 2:

在路由器的接口上查找WAN IP。将其与发布在例如https://whatsmyip.org上的IP进行比较。如果它们不一样，你就落后于CGNAT。

## 方法 3/解决方案:

请致电互联网服务提供商寻求帮助。根据您的ISP，他们可能不提供专用的*动态* IP地址。请记住，静态IP不是必需的。

!!! 警告

```
互联网服务提供商可能只提供专用IP地址作为**付费选项**。
请检查我们的合作托管服务的价格，因为他们可能比这个费用便宜！
```

非CGNAT网络的示例：

![图像](https://github.com/user-attachments/assets/fee21a50-cbb0-4322-9c26-d9f04f88ae37)

标签: Server, 10060 10061, CGNAT, Connection Failed, Port Forward, Firewall
