# Начало работы

Чтобы начать разработку для BeamMP вам понадобится как минимум:

- BeamNG.drive, установленный локально
- BeamMP, установленный локально; как минимум лаунчер, дополнительно также сервер
- Git, установленный локально, и учетная запись GitHub.com
- Редактор кода, например VSCode или notepad++

---

# Разница между модом, лаунчером и сервером

BeamMP разделен на три основные части:

- Мод загружается BeamNG, как и любой другой мод транспортного средства или пользовательского интерфейса для игры. Его основная функция — установить локальное соединение с лаунчером и отобразить элементы многопользовательского пользовательского интерфейса. Он в основном написан на Lua, с некоторым количеством JavaScript, HTML и CSS для элементов пользовательского интерфейса. Его репозиторий — [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)
- Основная функция лаунчера — установить постоянное соединение с модом, а при необходимости — и с выбранным сервером, а также обрабатывать вход пользователя с помощью бэкенда BeamMP. Он написан на C++, предварительно скомпилирован BeamMP и его можно найти по адресу [https://github.com/BeamMP/BeamMP-Launcher](https://github.com/BeamMP/BeamMP-Launcher)
- Сервер устанавливает соединения между одним или несколькими лаунчерами, а также «пульсирует» бэкенд BeamMP, предоставляя такую информацию, как IP, порт, версия, количество игроков и т. д. Кроме того, он управляет и запускает серверные плагины Lua. Он написан на C++, предварительно скомпилирован BeamMP для нескольких различных архитектур ОС и ЦП и может быть найден по адресу [https://github.com/BeamMP/BeamMP-Server](https://github.com/BeamMP/BeamMP-Server)

---

# Настройка среды разработки для работы над модом

## Использование распакованной папки для BeamNG

Для эффективной работы с модами в BeamNG рекомендуется использовать `unpacked` папку, а не упаковывать zip-архивы после каждого изменения.

Open up the BeamNG userfolder by navigating to `%appdata%/Local/BeamNG.drive/0.xx/mods` where `xx` is the most recent BeamNG version. Create a folder called `unpacked` inside the `mods` folder.

Дополнительную информацию о папке пользователя можно найти по адресу [https://documentation.beamng.com/support/userfolder/](https://documentation.beamng.com/support/userfolder/)

## Включение режима разработчика в лаунчере BeamMP

In order to prevent auto-update deleting your local git clone, it's necessary to disable it, using `--no-download`. If you also don't want the launcher to start BeamNG, and would like to see debug prints, then using `--dev` is advised.

Аргумент | Примечание
:-- | :--
`--help` или `-h` | Выведет следующий список аргументов
`--port <port>` или `-p` | Change the default listen port to `<port>`. This must be configured ingame too
`--verbose` или `-v` | Подробный режим, выводит отладочные сообщения
`--no-download` | Пропустить загрузку и установку мода BeamMP Lua
`--no-update` | Пропустить применение обновлений лаунчера (необходимо выполнить обновление вручную)
`--no-launch` | Пропустить запуск игры (игру необходимо запустить вручную)
`--dev` | Режим разработчика, то же самое, что и --verbose --no-download --no-launch --no-update
`--game <args...>` или `-- <args...>` | Передает аргументы в игру

## Клонирование репозитория BeamMP в распакованную папку

Хотя вы можете вручную скопировать файлы модов BeamMP из нашего репозитория github, настоятельно рекомендуется использовать систему управления исходным кодом, например git. Сначала создайте форк [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)

Наиболее эффективным было бы клонировать репозиторий непосредственно в `unpacked` папку.

For `git`, run `git clone https://github.com/yourName/BeamMP` from a PowerShell or CMD window started from the `unpacked` folder. While in the userfolder, make sure theres no `multiplayer` folder left in `mods` and that now there's `unpacked/beammp`.

Теперь попробуйте режим разработчика. Запустите лаунчер BeamMP, запустите BeamNG вручную, после входа в игру убедитесь, что BeamMP — единственный активный мод. Вы должны иметь возможность использовать BeamMP как обычно.

Используя редактор кода, вы теперь можете добавлять или изменять код непосредственно в `unpacked` папке. Затем вы можете попробовать изменения, перезагрузив Lua в игре, нажав `Ctrl+L` (и `F5` если вы внесли изменения в пользовательский интерфейс).

Как только вы будете довольны своими изменениями, вы можете зафиксировать их через git. Посетите [веб-сайт Git-SCM](https://git-scm.com/doc) для получения руководств и документации по использованию Git. Как только ваши изменения будут зафиксированы и отправлены (в ваш форк), вы можете сделать запрос на извлечение.

Feel free to ask in the #scripting channel in our [Discord](https://discord.gg/beammp) if you encounter any issues.

---

# Настройка локального сервера

При работе с BeamMP может быть полезно использовать локальный сервер. Вы можете следовать общей [установке сервера](../../server/create-a-server.md) , пропуская первые два шага для чисто локальных подключений.

Set the server to private in the `serverConfig.toml` while using any string as the `AuthKey`.

---

# Contribution Guidelines

Подробную информацию о формате кода, формате сообщения о коммите, общих рекомендациях по разработке и т. д. см. в файле `CONTRIBUTING.md` в каждом репозитории. Этот файл содержит более подробную информацию о том, как внести свой вклад. Файл `README.md` в каждом репозитории обычно также содержит шаги сборки (для скомпилированных проектов).
