# Как узнать IP моего Сервера?

## For VPS Hosted Servers

Если вы размещаете сервер с помощью одного из наших партнерских хостинговых сервисов, IP будет опубликован в соответствующем интерфейсе управления сервером. Вы также можете найти IP для вашего сервера(ов) на веб-сайте [Keymaster](https://keymaster.beammp.com/login).

## For Home-Hosted Servers

For Servers hosted at home, open [whatsmyip.org](https://whatsmyip.org) in a Browser. This will output the public IPv4 address you are being contacted with from the Internet.

Обратите внимание, что 127.0.0.1 — это локальный адрес (localhost), и его можно использовать только самому себе, если сервер запущен на том же компьютере. Если у вас всё ещё возникают проблемы с подключением к серверу, размещённому дома, проверьте [проброс портов](https://docs.beammp.com/server/port-forwarding/), а также используйте CheckBeamMP

<form action="https://check.beammp.com/api/v2/beammp" method="get" target="_blank">
  <label for="ip">IP-адрес:</label>
  <input type="text" id="ip" name="ip"><br>
  <label for="port">Порт:</label>
  <input type="text" id="port" name="port"><br>
  <input type="submit" value="CheckBeamMP">
</form>

## How to check for CGNAT?

Have a look at [this page](https://docs.beammp.com/FAQ/How-to-check-for-CGNAT/) to determine wether you can host a server at home or not.

Теги: IP, Сервер, Сбой Подключения, 10060/10061
