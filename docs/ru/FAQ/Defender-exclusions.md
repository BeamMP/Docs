# Как создать исключения в брандмауэре и антивирусе Защитника Windows?

!!! информация

```
Before tampering with the firewall, make sure that your network within the windows networking settings is set to private (assuming you are in a private network).

!!! danger ":material-scale-balance: DISCLAIMER:"

    **Firewall / Defender exclsuions are a risk**.

    By creating exclsuions, you understand the risks of allowing programs on your PC and opening up ports on your home network to the public and therefore void the right to hold BeamMP accountable for **any and all** damages that may happen to you or your household.

    We take no responsibility for any content on any externally linked services or websites.
```

## 1. Исключение брандмауэра для BeamMP-Launcher.

1. Откройте `Windows Defender Firewall with advanced setting` .
2. В окне нажмите `Inbound` , чтобы открыть вкладку исключений для входящих подключений.
3. Нажмите `Create new rule` в правом верхнем углу, чтобы создать новое исключение.
4. Выберите `Program` , чтобы создать исключение для конкретной программы.
5. Введите полный путь к `BeamMP-Launcher.exe` . По умолчанию это будет `%appdata%\BeamMP-Launcher\BeamMP-Launcher.exe` без кавычек.
6. Обязательно разрешите подключение
7. Дайте исключению имя (например, «BeamMP-Launcher») и сохраните его.
8. Перезагрузите компьютер.

## 2. Исключение антивируса для BeamMP-Launcher.

1. Откройте приложение `Windows Security` .
2. Нажмите на первый пункт `virus and threat protection` .
3. Нажмите `Manage settings` в разделе «Параметры защиты от вирусов и угроз».
4. Прокрутите страницу вниз, чтобы перейти на вкладку `Exclusions` .
5. Там нажмите «Добавить исключение» и выберите `process` .
6. Введите `BeamMP-Launcher.exe` в поле и сохраните его.
7. Перезагрузите компьютер.

## Все еще сталкиваетесь с проблемами?

Откройте тему на [форуме](https://forum.beammp.com) или на нашем [сервере Discord](https://discord.gg/beammp) в канале `#support` .
