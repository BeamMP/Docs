# 我怎样才能找到我服务器的IP ？

## 对于VPS托管服务器

如果您使用的我们的合作托管服务之一的托管服务器，其IP地址将显示在对应服务商的服务器管理界面中。您还可以在[Keymaster](https://keymaster.beammp.com/login)网站上找到服务器的IP。

## 对于家庭托管服务器

对于家庭自托管服务器，请在浏览器中访问[whatsmyip.org](https://whatsmyip.org)，该网站将显示互联网访问您时所使用的公网IPv4地址。

注意，127.0.0.1是本地主机地址，如果服务器托管在同一台计算机上，则只能由您自己使用。如果您与家庭托管服务器的连接仍然有问题，请检查[端口转发](https://docs.beammp.com/server/port-forwarding/)以及使用CheckBeamMP

<form action="https://check.beammp.com/api/v2/beammp" method="get" target="_blank">
  <label for="ip">IP地址:</label>
  <input type="text" id="ip" name="ip"><br>
  <label for="port">端口:</label>
  <input type="text" id="port" name="port"><br>
  <input type="submit" value="CheckBeamMP">
</form>

## 怎么检查CGNAT?

请查看[这个页面](https://docs.beammp.com/FAQ/How-to-check-for-CGNAT/)，以确定您是否可以在家中托管服务器。

标签: IP, Server, Connection Failed, 10060/10061
