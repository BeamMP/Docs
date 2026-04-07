# Как создать исключения в брандмауэре и антивирусе Защитника Windows?

!!! информация

```
Перед изменением настроек брандмауэра убедитесь, что ваша сеть в параметрах Windows настроена как частная (при условии, что вы действительно находитесь в частной сети).

!!! danger ":material-scale-balance: DISCLAIMER:"

    **Исключения в Firewall / Defender представляют собой риск**.

    Создавая исключения, вы осознаёте риски, связанные с разрешением программам на вашем ПК и открытием портов вашей домашней сети для публичного доступа, и, следовательно, лишаете себя права привлекать BeamMP к ответственности за **любые** возможные убытки или ущерб, которые могут возникнуть у вас или вашего домохозяйства.

    Мы не несём ответственности за любой контент, размещённый на внешних сервисах или сайтах, на которые ведут ссылки.
```

## 1. Defender Firewall exclusion for the BeamMP-Launcher.

1. Откройте `Windows Defender Firewall with advanced setting`.
2. В окне нажмите `Inbound`, чтобы открыть вкладку исключений для входящих подключений.
3. Нажмите `Create new rule` в правом верхнем углу, чтобы создать новое исключение.
4. Выберите `Program`, чтобы создать исключение для конкретной программы.
5. Enter the full qualified path towards the `BeamMP-Launcher.exe`. The default would be `%appdata%\BeamMP-Launcher\BeamMP-Launcher.exe` (without quotes).
6. Обязательно разрешите подключение
7. Дайте исключению имя (например, «BeamMP-Launcher») и сохраните его.
8. Перезагрузите компьютер.

## 1.1 Defender Firewwall exclusion for the BeamMP-Server.

1. Open the `Windows Defender Firewall with advanced setting`.
2. In the Window, click `Inbound` to open the inbound exclusions tab.
3. Click `Create new rule` in the top right to create a new exclusion.
4. Select `Port` to create a program specific exclusion.
5. Enter the same port as in the ServerConfig.toml.
6. Enter the full qualified path towards the `BeamMP-Server.exe`. The file is located whereever you placed it after downloading it.
7. Make sure to allow the connection
8. Give the exclusion a name (e.g. "BeamMP-Server") and save it.
9. Перезагрузите компьютер.

## 2. Defender Antivirus exclsuion for the BeamMP-Launcher/Server.

1. Откройте приложение `Windows Security`.
2. Нажмите на первый пункт `virus and threat protection`.
3. Нажмите `Manage settings` в разделе «Параметры защиты от вирусов и угроз».
4. Прокрутите страницу вниз, чтобы перейти на вкладку `Exclusions`.
5. Там нажмите «Добавить исключение» и выберите `process`.
6. Enter `BeamMP-Launcher.exe` or `BeamMP-Server.exe`into the field and save it.
7. Restart your PC.

## Все еще сталкиваетесь с проблемами?

Откройте тему на [форуме](https://forum.beammp.com) или на нашем [сервере Discord](https://discord.gg/beammp) в канале `#support`.
