# Проблема

Лаунчер не подключается к игре. Это краткое руководство объясняет, как вручную изменить порт лаунчера.

# Изменение порта вручную

1. Запустить BeamNG
2. In the main menu, go to Options, then Multiplayer
3. In the multiplayer options, enable `Show advanced options`
4. Прокрутите страницу вниз
5. In `Launcher port` change the port number to something else, for example 4567
6. Закрыть BeamNG
7. Щелкните правой кнопкой мыши по ярлыку BeamMP-launcher и выберите в контекстном меню `Open file location`
8. Откройте файл `launcher.cfg` в текстовом редакторе.
9. Измените `"Port": 4444,` номер на тот же, который вы использовали ранее в игровых настройках, в этом примере 4567
10. Сохраните изменения и закройте текстовый редактор.
11. Запустите BeamMP-лаунчер

Если соединения все еще нет, попробуйте еще раз с другим портом. Любое число между ~2000 и 65535 является допустимым портом

## Проблема все еще не решена?

Create a support ticket on our [Discord Server](https://discord.gg/BeamMP).

Tags: Launcher, Connection Failed, Port Number
