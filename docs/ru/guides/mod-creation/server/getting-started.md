# Создание многопользовательских модов

## Структура папок и основы файлов

Базовая структура папок и файлов должна выглядеть следующим образом:

```
Resources/
├─ Client/
│  └─ examplePlugin.zip/
│     ├─ scripts/
│     │  └─ modScript.lua
│     └─ lua/
│        └─ ge/
│           └─ extensions/
│              └─ examplePlugin.lua
└─ Server/
   └─ examplePlugin/
      ├─ examplePlugin.lua
      └─ further_lua/
         └─ further.lua
```

Серверный lua — это необходимый минимум, если вы хотите добавлять пользовательские события, вам также понадобится как минимум клиентский lua, а также modscript.lua.

Папка Server должна содержать подпапки, по одной для каждого серверного мода. Хорошей практикой является наличие только одного основного файла lua и добавление дополнительных файлов lua в подпапки. Однако вам не обязательно это делать, сервер загрузит файлы lua в алфавитном порядке, если их несколько.

Папка Client содержит zip-файлы, которые отправляются клиенту, который затем загружает их как мод. Любые другие файлы в папке Client вызовут ошибку при запуске сервера, но за исключением этого будут игнорироваться сервером. ModScript.lua будет прочитан BeamNG и укажет игре, какой плагин загружать.

!!!example "" [Загрузите examplePlugin.zip](../../../../assets/content/ResourcesForExamplePlugin.zip)

## Серверный lua

В examplePlugin есть и другие примеры, но вот самый простой, выводящий идентификаторы игроков:

```lua
function onInit() --runs when plugin is loaded

	MP.RegisterEvent("onPlayerAuth", "onPlayerAuth") --Provided by BeamMP

	print("examplePlugin loaded")
end

--A player has authenticated and is requesting to join
--The player's name (string), forum role (string), guest account (bool), identifiers (table -> ip, beammp)
function onPlayerAuth(player_name, role, isGuest, identifiers)
	local ip = identifiers.ip
	local beammp = identifiers.beammp or "N/A"
	print("onPlayerAuth: player_name: " .. player_name .. " | role: " .. role .. " | isGuest: " .. tostring(isGuest) .. " | identifiers: ip: " .. ip .. " - beammp: " .. beammp)
end
```

`onPlayerAuth` срабатывает, как только игрок хочет присоединиться, см. также [onPlayerAuth в справочнике по скриптам](../../../scripting/server/latest-server-reference/#onplayerauth)

Еще один пример использования onPlayerAuth, но он запретит гостям присоединяться к серверу, отправив клиенту ответное сообщение, которое затем будет показано игроку:

```lua
function onPlayerAuth(playerName, playerRole, isGuest, identifiers)
  if isGuest then
    return "No guests allowed, please use a BeamMP account"
  end
end
```

Дополнительную информацию о серверных функциях, предоставляемых BeamMP, можно найти в [последнем справочнике по серверу.](../../../scripting/server/latest-server-reference.md)

## Клиентская часть lua

Это в значительной степени соответствует [расширениям BeamNG.](https://documentation.beamng.com/modding/programming/extensions/)

```lua
local M = {}

if extensions.isExtensionLoaded("examplePlugin") then
  log("E", "examplePlugin", "examplePlugin loaded on client side")
  return
end

return M
```

Выводит на консоль информацию о том, что examplePlugin был загружен

Более подробную информацию см. в [документации beamNG по отладочным распечаткам.](https://documentation.beamng.com/modding/programming/debugging/#a-add-a-log)

## modScript.lua

Обычно содержит только две строки

```lua
load('examplePlugin')
setExtensionUnloadMode('examplePlugin', 'manual')
```

Вы можете добавить вывод журнала, если хотите видеть в журналах, когда ваш modScript обрабатывается BeamNG.

```lua
load('examplePlugin')
setExtensionUnloadMode('examplePlugin', 'manual')
log('I', 'modScript', "examplePlugin loaded")
```
