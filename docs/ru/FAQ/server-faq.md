# Часто задаваемые вопросы и известные проблемы

Список часто задаваемых вопросов и известных ошибок.

---

## **Сервер**

---

### **Как мне настроить свои собственные серверы?**

All the information to set up your own server can be found [here](https://docs.beammp.com/server/create-a-server/).

---

### **Можно ли создать сервер с использованием Linux?**

We provide binaries for many Linux distributions [here](https://github.com/BeamMP/BeamMP-Server/releases/latest). If there are no binaries for your Operating System/Distribution, you can build it yourself by downloading the source on our [GitHub](https://github.com/BeamMP/BeamMP-Server), a tutorial can be found [here](https://github.com/BeamMP/BeamMP-Server#build-instructions).

---

### **Каковы минимальные системные требования для запуска сервера BeamMP?**

- ОЗУ: 50+ МБ полезной памяти (не считая накладных расходов ОС)
- Процессор: &gt;1 ГГц, желательно многоядерный
- ОС: Windows, Linux (теоретически любая POSIX)
- Графический процессор: Нет
- HDD: 10 МБ + Моды/Плагины
- Пропускная способность: загрузка 5-10 Мбит/с

---

## **Игроки за пределами моей сети не могут присоединиться к моему серверу, размещенному на моем собственном сервере.**

Read the port forwarding guide that's available [here](https://docs.beammp.com/server/port-forwarding/). Below there's a brief summary of the most noteworthy steps. If other players, trying to connect to your server, receive an error code 10060, 10061 or 10038 in their BeamMP launcher, then you should check the following steps:

- Перенаправьте порт 30814 (или любой другой порт, указанный в ServerConfig.toml), протоколы TCP и UDP.
- Разрешить BeamMP через брандмауэр Windows, разрешить как входящие, так и исходящие соединения. Отключение брандмауэра обычно НЕ работает.
- Убедитесь, что вы не используете VPN (это может вызвать проблемы).
- Убедитесь, что сервер действительно работает, без ошибок и предупреждений.

You can check if you have successfully portforwarded using CheckBeamMP whilst the server is running.

<form action="https://check.beammp.com/api/v2/beammp" method="get" target="_blank">
  <label for="ip">IP adress:</label>
  <input type="text" id="ip" name="ip"><br>
  <label for="port">Port:</label>
  <input type="text" id="port" name="port"><br>
  <input type="submit" value="CheckBeamMP">
</form>

Примечания:

- Некоторые интернет-провайдеры не предоставляют выделенные адреса IPv4 для вашего соединения (CGNAT), поэтому переадресация портов может быть невозможна, несмотря на то, что она доступна в маршрутизаторе.
- Переадресация портов невозможна, если вы используете мобильное (4G/5G) интернет-подключение.

---

### **I can see my self-hosted server in the server-list, but i cannot join it myself**

If the server is running on the same machine as the game, you yourself have to use Direct Connect to join, with the IP 127.0.0.1 and your server's port. For you to be able to join your own, self-hosted server trough the server-list, your router needs to support NAT-loopback, but this is a function not many home routers support.

---

## **Разнообразный**

---

### **Где я могу найти код?**

All the source code can be found on our [GitHub](https://github.com/BeamMP). Before doing anything keep in mind that the code is subject to our [Terms of Use](https://forum.beammp.com/t/terms-of-use-v1-0/43) and licenses:

Код | Лицензия
--- | :-:
Сервер | [ЛИЦЕНЗИЯ](https://github.com/BeamMP/BeamMP-Server/blob/master/LICENSE)
Пусковая установка | [ЛИЦЕНЗИЯ](https://github.com/BeamMP/BeamMP-Launcher/blob/master/README.md)
Клиент Луа | [ЛИЦЕНЗИЯ](https://github.com/BeamMP/BeamMP/blob/development/LICENSE.md)

---

### **Я нашел ошибку или эксплойт, что мне делать?**

If the issue is code related and you know how to use Github, create a new "Issue" in the appropriate repository on our [GitHub](https://github.com/BeamMP). We use an issue-based workflow so even if you already have a fix for the bug, consider opening a new "Issue", then asking a "Pull Request" that solves your "Issue". More info on contributing can be found [here](https://github.com/BeamMP/BeamMP/blob/development/CONTRIBUTING.md).

Если у вас нет учетной записи GitHub или вы не знаете, как пользоваться GitHub, вы можете связаться с нами следующими способами:

- If it is not something sensitive, you can create a post on our [BeamMP Forum](https://forum.beammp.com) or you can report this on our [Official Discord](https://discord.gg/beammp).
- If the information is sensitive you can directly report the issue to a Staff member on our [Discord](https://discord.gg/beammp).
