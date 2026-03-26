# Руководство Сервера

# Окружение

The server is affected by the state of various external parameters:

- The "Resources" folder
- ENV (переменные среды)
- The commandline arguments
- The ServerConfig.toml file
- The working directory

## Папка Ресурсов

Папка ресурсов создается при запуске сервера вместе с подкаталогами "Client" и "Server". Подкаталог "Server" принимает папки внутри себя, каждая из которых содержит как минимум один файл `.lua`. Каждая из этих папок в подкаталоге "Server" называется «плагином». Файлы `.lua`, содержащиеся в каталоге корневом каталоге плагина, перезагружаются на ходу при изменении. Подкаталог "Client" принимает *только* файлы `.zip`, которые загружаются при запуске сервера и, как предполагается, не изменяются во время выполнения.

## ENV

### Общие Настройки

Начиная с версии Server v3.2.0, сервер BeamMP принимает переменные среды, которые **переопределяют** настройки в ServerConfig.toml. Все переменные ServerConfig, которые существуют в категории/разделе "General", имеют PascalCase, переменные среды имеют ALL_CAPS и префикс `BEAMMP_`. Например, настройка `MaxPlayers`, преобразованная в ALL_CAPS, имеет вид `MAX_PLAYERS` (обратите внимание на `_`, где начинается новое слово), а с префиксом она становится `BEAMMP_MAX_PLAYERS`. Это формат, который используется для всех настроек "General". Существуют следующие переменные ENV:

- `BEAMMP_DEBUG`
- `BEAMMP_PRIVATE`
- `BEAMMP_PORT`
- `BEAMMP_MAX_CARS`
- `BEAMMP_MAX_PLAYERS`
- `BEAMMP_MAP`
- `BEAMMP_NAME`
- `BEAMMP_DESCRIPTION`
- `BEAMMP_TAGS`
- `BEAMMP_RESOURCE_FOLDER`
- `BEAMMP_AUTH_KEY`
- `BEAMMP_LOG_CHAT`

Любые переменные среды, соответствующие параметрам конфигурации, которые являются строками или числами, должны быть строками, например `BEAMMP_NAME="Cool Server"`, `BEAMMP_NAME=Server1`, `BEAMMP_PORT=12345`. Переменные среды, соответствующие параметрам конфигурации, которые являются логическими значениями (true/false, on/off), должны быть либо `true`, либо `1` (оба означают ON), либо любым другим значением (означающим OFF).

### Настройки Провайдера

These environment variables allow hosting providers (and other users with a larger number of servers), here called "providers", to overwrite certain provider-specific settings.

#### `BEAMMP_PROVIDER_PORT_ENV` (since v3.3.0)

Если задана непустая строка, это заменяет переменную `BEAMMP_PORT` на другую, чтобы прочитать переменную из существующего ENV. Например, Pterodactyl может выставлять `SERVER_PORT` как ENV. Чтобы использовать его с BeamMP-Server, вам придется сделать `BEAMMP_PORT=${SERVER_PORT}`, что немного глупо.

Вместо этого теперь можно использовать `BEAMMP_PROVIDER_PORT_ENV="SERVER_PORT"`, что заставит BeamMP-Server прочитать порт из переменной ENV `SERVER_PORT`.

#### `BEAMMP_PROVIDER_DISABLE_CONFIG` (since v3.3.0)

Если установлено значение `1` или `true`, `ServerConfig.toml` **не создаётся** и **не считывается**, даже если существует. Для работы сервера необходимо установить `BEAMMP_AUTH_KEY`.

#### `BEAMMP_PROVIDER_UPDATE_MESSAGE` (начиная с версии 3.2.2)

Если задано непустое значение, это заменяет все сообщение об обновлении, которое по умолчанию выглядит как "НОВАЯ ВЕРСИЯ ВЫШЛА! Пожалуйста, обновитесь до новой версии..." и т. д. **ОБЯЗАТЕЛЬНО**, чтобы предоставленное вами сообщение об обновлении содержало `{}` где-то, что сервер заменит на новый номер версии. Например, ваше сообщение об обновлении может выглядеть так:

```sh
BEAMMP_PROVIDER_UPDATE_MESSAGE="NEW VERSION of the BeamMP-Server has been released: {}! Please follow the update guide here: https://example.com/update-guide"
```

Which would result in an update message like

```
NEW VERSION of the BeamMP-Server has been released: v5.0.2! Please follow the update guide here: https://example.com/update-guide
```

Please take care to make it clear to the users that they should update, and explain how to update.

## Аргументы командной строки

Run the BeamMP Server with the `--help` argument to learn more. For example: `./BeamMP-Server --help`.

## ServerConfig.toml

This file is generated on first startup. Comments inside the file are the most up-to-date way to understand what each setting does.

## Рабочий каталог

The working directory of the server, not the location of the server executable, is the deciding factor on where the ServerConfig.toml, server log files, and Resources folder, are generated.

# Ограничения

В Бэкэнде BeamMP действуют следующие ограничения, которые влияют на Серверы:

- Имя ограничено 250 символами
- Описание ограничено 1000 символами
- Карта ограничена 100 символами
- Теги ограничены 100 символами
