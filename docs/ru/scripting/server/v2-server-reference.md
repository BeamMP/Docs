!!! предупреждение "Этот сайт находится в стадии разработки!"

```
This site is being actively worked on.

Feel you could help? Please do by clicking on the page with a pencil on the right!

This can be done any page too.
```

# Справочник по серверным скриптам

## Версия сервера 2.X

!!! предупреждение

```
BeamMP server version 2.X is now unsupported. This documentation is provided as a reference only.
Please update to the latest version for maintenance and support.
```

---

> Это скрипт 2.x. Обращайтесь к нему только если ваш сервер старый/устаревший (версия 2.xx). Для получения последней документации см. [здесь](https://docs.beammp.com/scripting/server/latest-server-reference) . {.is-warning}

### Примечания

Чтобы получить вывод функции в консоли сервера, вам нужно обернуть его в оператор `print()` . Например: `print(GetPlayerName(0))` вернет имя первого игрока вашего сервера.

`<PlayersServerID>` начинается с 0.

### Список доступных функций для написания скриптов

#### GetPlayerName(идентификатор_сервера_игроков)

Возвращает имя игрока в Discord в виде строки

```lua
function onPlayerJoin(playerID)
	local name = GetPlayerName(playerID)
	-- Do something
end
```

#### GetPlayerDiscordID(playersServerID)

Возвращает имя игрока в Discord в виде строки

```lua
function onPlayerJoin(playerID)
	local name = GetPlayerDiscordID(playerID)
	-- Do something
end
```

#### GetPlayerHWID(идентификатор_сервера_игроков)

Возвращает идентификатор игрока в Discord в виде строки

```lua
function onPlayerJoin(playerID)
	local name = GetPlayerHWID(playerID)
	-- Do something
end
```

#### GetPlayerVehicles(идентификатор_сервера_игроков)

Возвращает транспортные средства игрока в виде объекта/массива.

```lua
function onChatMessage(playerID, senderName, message)
	local vehicleList = GetPlayerVehicles(playerID)
	for vehicleID, vehicleData in pairs(vehicleList) do
  	-- Do something
    -- Could also be used to check how many vehicles a player have
	end
end
```

#### DropPlayer(идентификатор_сервера_игроков)

Сбрасывает соединение для определенного игрока. По сути выгоняет его

```lua
function onVehicleSpawn(playerID, vehicleID, vehicleData)
	-- Do something
	DropPlayer(playerID)
end
```

#### SendChatMessage(playersServerID, сообщение)

Отправляет сообщение по сети указанному пользователю. Используйте -1 для всех

```lua
function onPlayerJoin(playerID)
	SendChatMessage(-1, "Someone just joined!")
end
```

#### CancelEvent() -- УСТАРЕЛО

Отменяет событие. Это может произойти скоро. Используйте `return 1` чтобы отменить событие.

#### onInit()

Если объявлено в файле lua, оно будет вызвано после того, как C++ успешно завершит загрузку текущего файла lua.

```lua
function onInit()
	print("Server ready")
end
```

#### Выход()

Закрою сервер.

```lua
function onInit()
	print("Server Ready. But who needs a server which is running")
	exit() -- Stops the server
end
```

#### CreateThread(имя_функции, интервал_вызова)

Функция будет выполняться в выделенном потоке, и она будет запускать callInterval раз в секунду. 1 = Она будет запускаться каждую секунду.

```lua
function yourFunction()
 	for i = 1,10 do
		SendChatMessage(-1, "Countdown: "..i)
		Sleep(1000)
	end
end
CreateThread("yourFunction", 30)
```

УСТАРЕВШИЙ ПРИМЕР Функция будет выполняться в выделенном потоке

```lua
function yourFunction()
 	for i = 1,10 do
		SendChatMessage(-1, "Countdown: "..i)
		Sleep(1000)
	end
end
CreateThread("yourFunction", 30)
```

#### StopThread(имя_функции)

Прекратит попытки вызвать функцию потока текущего скрипта.

```lua
function yourFunction()
	delayExpired = false
	Sleep(10000)
	delayExpired = true
end
CreateThread("yourFunction", 30)
-- Do something
if not delayExpired then
	StopThread("yourFunction")
else
	-- Do something
end

```

#### Сон (миллисек) - ИЗНОС

Приостановит выполнение на указанное время (предупреждение: это приведет к приостановке всего сервера, если вы не создали поток)

```lua
function countdown()
 	for i = 1,10 do
		SendChatMessage(-1, "Countdown: "..i)
		Sleep(1000)
	end
end
CreateThread("countdown", 10)
```

#### ПолучитьPlayerCount()

Вернет количество подключенных игроков

```lua
function onPlayerJoin(playerID)
	SendChatMessage(playerID, "You are the "..GetPlayerCount().."th player!"
end
```

#### RemoveVehicle(playerServerID, VehicleID)

Исчезнет транспортное средство.

```lua
function onVehicleSpawn(playerID, vehicleID, vehicleData)
	if --[[ Vehicle data equal something it shouldn't be ]] then
		RemoveVehicle(playerID, vehicleIID)
	end
end
```

#### ПолучитьИгроков()

Вернет таблицу идентификаторов с именами

```lua
local function onPlayerJoin(joinedPlayerID)
	local players = GetPlayers()
	for playerID, playerName in pairs(players) do
		if playerID == joinedPlayerID then
			-- Do something
		end
	end
end
```

#### RegisterEvent(имя_события, имя_функции)

Зарегистрирует эту функцию для указанного события. Оба должны быть строками

```lua
  function anyEvent()
		-- Do something
  	end
	RegisterEvent("onAnyEventHappen", "anyEvent")
	-- Do something
	TriggerLocalEvent("onAnyEventHappen")
```

#### TriggerLocalEvent(имя_события)

Будет вызывать каждую зарегистрированную функцию в той же папке плагина.

```lua
  function anyEvent()
		-- Do something
  	end
	RegisterEvent("onAnyEventHappen", "anyEvent")
	-- Do something
	TriggerLocalEvent("onAnyEventHappen")
```

#### TriggerGlobalEvent(имя_события)

Будет вызывать каждую зарегистрированную функцию с этим именем события.

```lua
	-- File A
  function anyEvent()
		-- Do something
  	end
	RegisterEvent("onAnyEventHappen", "anyEvent")
```

```lua
  	-- File B
	TriggerGlobalEvent("onAnyEventHappen")
```

#### TriggerClientEvent(playerServerID, eventName, data)

Вызовет это событие с указанными данными на указанном клиенте (-1 для широковещательной передачи)

```lua
  function onPlayerJoin(playerServerID)
     TriggerClientEvent(playerServerID, "anyEvent", "You just joined the server")
  end
	RegisterEvent("onAnyEventHappen", "anyEvent")
```

#### Установить(configID, newValue)

установит настройку конфигурации на новое указанное значение из таблицы ниже|

```lua
  function onChatMessage(playerID, senderName, message)
    if playerID == adminPlayer then
      if message == --[[ anything ]] then
        Set(3, 10)
      end
    end
  end
```

#### Список доступных настроек конфигурации для команды `Set()`

> Обратите внимание, что они не будут сохранены в файле конфигурации.

Идентификатор конфигурации | Имя | Приму только
--- | --- | ---
`0` | Настройка отладки | правда или ложь
`1` | Частная обстановка | правда или ложь
`2` | Макс. количество автомобилей на игрока | число
`3` | Макс. количество игроков | число
`4` | Карта | нить
`5` | Имя | нить
`6` | Описание | нить
любой другой идентификатор приведет к появлению предупреждения на консоли |  |

### Список доступных событий для написания сценариев

#### События по умолчанию

Пример использования события:

```lua
	function onInit()
  	RegisterEvent("onPlayerJoin", "onPlayerJoin")
  end
  
  function onPlayerJoin(playerServerID)
  	-- Do something
  end
```

Если вы не хотите, чтобы на вашем сервере были гости:

```lua
	function onInit()
		print("noGuests Ready")
		RegisterEvent("onPlayerAuth","onPlayerAuth")
	end

	function onPlayerAuth(name, role, isGuest)
		if isGuest then
			return "You must be signed in to join this server!"
		end
	end
```

Событие | Параметры | Описание
--- | --- | ---
`onPlayerAuth` | Имя игрока, роль на форуме, гостевая учетная запись (bool) | Игрок прошел аутентификацию и запрашивает присоединение
`onPlayerConnecting` | Идентификатор игрока | Игрок загружается (до загрузки карты)
`onPlayerJoining` | Идентификатор игрока | Игрок загружает карту и скоро присоединится
`onPlayerJoin` | Идентификатор игрока | Игрок присоединился и загрузился
`onPlayerDisconnect` | Идентификатор игрока | Игрок отключился
`onChatMessage` | Идентификатор отправителя, имя и сообщение чата | Сообщение чата было отправлено. Это было бы хорошо для создания системы команд
`onVehicleSpawn` | Идентификатор игрока, идентификатор транспортного средства и данные транспортного средства | Это называется, когда кто-то создает транспортное средство.
`onVehicleEdited` | Идентификатор игрока, идентификатор транспортного средства и данные транспортного средства | Это называется, когда кто-то редактирует транспортное средство или заменяет существующее.
`onVehicleDeleted` | Идентификатор игрока и идентификатор транспортного средства | Это называется, когда кто-то удаляет принадлежащее ему транспортное средство.

#### Пользовательские события

Пользовательские события также могут быть созданы для вашего собственного использования. Это делается примерно так же, как и события по умолчанию.

Пример использования пользовательского события:

```lua
	function onInit()
  	RegisterEvent("myCustomEvent", "myCustomEvent")
  end
  
  function myCustomEvent(playerServerID, customData)
  	-- Do something
  end
```

Затем его можно вызвать либо со стороны клиента, либо со стороны сервера, используя соответствующие функции.

### Игроки

Когда игрок подключается к вашему серверу, ему назначается serverID, начиная с 0 и далее. serverID используются повторно; если игрок покидает сервер и снова присоединяется, ему не будет назначен новый serverID, он просто получит другой доступный. Когда сервер перезапустится, serverID будут сброшены.

#### Статические идентификаторы

У игроков в BeamMP есть 3 статических идентификатора, которые можно получить из их serverID: имя, discordID и hardwareID или HWID. (Хотя последний из вышеупомянутых не реализован, мы будем действовать так, как будто он реализован). Каждый из трех типов идентификаторов имеет свое собственное происхождение и сильные/слабые стороны при использовании их для идентификации игрока.

ТИП ИДЕНТИФИКАТОРА | ПЛЮСЫ | МИНУСЫ | ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ
--- | --- | --- | :-:
имя | легко получить, просто | не безопасно | ПолучитьИмяИгрока()
DiscordID | довольно безопасно | неудобно | GetPlayerDiscordID()
HWID | чрезвычайно безопасно | трудно получить | GetPlayerHWID()

### Транспортные средства

У транспортных средств в beamMP есть 3 атрибута, на которые обращает внимание сервер: serverID владельца, vehicleID транспортного средства и его данные. ServerID владельца прост, это serverID, у каждого транспортного средства также есть ID, идентификаторы транспортных средств не уникальны для транспортного средства; два транспортных средства могут иметь одинаковый ID, если они принадлежат разным владельцам. В отличие от serverID, vehicleID используются повторно, например, если у меня есть 4 транспортных средства, их идентификаторы — 0, 1, 2 и 3, если я удалю транспортное средство в vehicleID 2, у меня будут 0, 1 и 3, когда я создам новое транспортное средство, новое транспортное средство будет помещено в слот ID 2. Наконец, последний атрибут, который есть у транспортных средств, — это data, data содержит транспортное средство, название, детали и другие данные; как следует из названия. data хранится в виде необработанной строки JSON, поэтому вам понадобится библиотека JSON. В качестве альтернативы вы можете вручную пройти по строке и извлечь необходимую информацию.
