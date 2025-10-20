!!! предупреждение "Этот сайт находится в стадии разработки!"

```
Над этим сайтом ведется активная работа.

Чувствуете, что можете помочь? Пожалуйста, сделайте это, нажав на страницу с карандашом справа!

Это можно сделать на любой странице.
```

# Справочник по серверным скриптам

## Версия сервера 3.X

### Введение

Выпуск BeamMP-Server v3.0.0 вносит радикальные изменения в работу системы плагинов Lua. Нет возможности использовать старый lua с новым сервером, поэтому вам придется мигрировать.

Система плагинов сервера использует [Lua 5.3](https://www.lua.org/manual/5.3/) . В этом разделе подробно описывается, как начать писать плагины, изучаются некоторые базовые концепции и начинается работа с вашим первым плагином. **Рекомендуется прочитать этот раздел, даже если вы знакомы с системой до версии 3.0.0, так как некоторые вещи кардинально изменились** .

Руководство по миграции с lua до версии 3.0.0 см. в разделе [«Миграция со старой версии Lua»](#migrating-from-old-lua) .

### Структура каталога

Серверные плагины, в отличие от модов, располагаются (по умолчанию) в `Resources/Server` , тогда как моды, которые пишутся для BeamNG.drive и отправляются клиентам, находятся в `Resources/Client` . Каждый плагин должен иметь свою собственную подпапку в `Resources/Server` , например, для плагина с именем "MyPlugin" структура будет следующей:

```
Resources
└── Server
    ├── MyPlugin
    │   └── main.lua
    └── SomeOtherPlugin
        └── ...
```

Здесь мы также отображаем другой плагин под названием "SomeOtherPlugin", чтобы проиллюстрировать, как ваша папка `Resources/Server` может иметь несколько различных папок плагинов. Мы продолжим использовать эту структуру каталогов в качестве примера на протяжении всего этого руководства.

Вы также заметите `main.lua` . У вас может быть столько файлов Lua `.lua` , сколько вам нужно. Все файлы Lua в главном каталоге вашего плагина загружаются в *алфавитном порядке* (поэтому `aaa.lua` запускается перед `bbb.lua` ).

### Файлы Lua

Каждый файл Lua `.lua` в папке плагина загружается при запуске сервера. Это означает, что операторы вне функций оцениваются («запускаются») немедленно.

Файлы Lua в подпапках игнорируются, но могут быть `require()` .

Например, наш `main.lua` выглядит так:

```lua
function PrintMyName()
	print("I'm 'My Plugin'!")
end

print("What's up!")
```

Когда сервер запустится и загрузится `main.lua` , он *немедленно* запустит `print("What's up!")` , но пока **НЕ** *вызовет* функцию `PrintMyName` (потому что она не была вызвана)!

### События

Событие — это что-то вроде «игрок присоединяется», «игрок отправил сообщение в чате», «игрок создал транспортное средство».

Вы можете отменить события (если они отменяемы), вернув `1` из обработчика.

В Lua вы обычно хотите реагировать на некоторые из них. Для этого вы можете зарегистрировать "Handler". Это функция, которая вызывается, когда происходит событие, и получает некоторые аргументы.

Пример:

```lua
function MyChatMessageHandler(sender_id, sender_name, message)
	-- censoring only the exact message 'darn'
	if message == "darn" then
		-- cancel the event by returning 1
		return 1
	else
		return 0
	end
end

MP.RegisterEvent("onChatMessage", "MyChatMessageHandler")
```

Это фактически гарантирует, что любое сообщение, которое в точности равно "darn", не будет отправлено и не будет показано в чате (обратите внимание, что для настоящего фильтра ненормативной лексики вам нужно будет проверить, *содержит* ли сообщение "darn", а не *является* ли оно "darn"). Отмена события приводит к тому, что оно не происходит, например, сообщение чата не будет показано никому другому, транспортное средство не будет создано и т. д.

### Пользовательские события

Вы можете зарегистрироваться на любое понравившееся вам мероприятие, например:

```lua
MP.RegisterEvent("MyCoolCustomEvent", "MyHandler")
```

Затем вы можете инициировать эти пользовательские события:

```lua
-- call all event handlers to this in ALL plugins
MP.TriggerGlobalEvent("MyCoolCustomEvent")
-- call all event handlers to this in THIS plugin
MP.TriggerLocalEvent("MyCoolCustomEvent")
```

С событиями можно делать гораздо больше, но эти возможности будут подробно рассмотрены ниже в справочнике по API.

### Таймеры событий («Потоки»)

До версии 3.0.0 Lua имела концепцию "потоков", которые запускались X раз в секунду. Такое наименование было немного обманчивым, поскольку они были синхронными.

v3.0.0 Lua вместо этого имеет "Таймеры событий". Это таймеры, которые работают внутри сервера, и как только они заканчиваются, они запускают событие (глобально). Это также синхронно. Пожалуйста, имейте в виду, что второй аргумент - это интервал в миллисекундах.

Пример:

```lua
local seconds = 0

function CountSeconds()
	seconds = seconds + 1
end

-- create a custom event called 'EverySecond'
-- and register the handler function 'CountSeconds' to it
MP.RegisterEvent("EverySecond", "CountSeconds")

-- create a timer for this event, which will fire every 1000ms (1s)
MP.CreateEventTimer("EverySecond", 1000)
```

Это приведет к тому, что "CountSeconds" будет вызываться каждую секунду. Вы также можете отменить таймеры событий с помощью `MP.CancelEventTimer` (см. справочник API).

С консоли сервера вы можете запустить `status` , чтобы увидеть, сколько таймеров событий запущено в данный момент, а также информацию об ожидающих обработчиках событий. Эта команда покажет больше информации в будущем.

### Отладка

Lua трудно отлаживать. К сожалению, для встроенного Lua не существует отладчика промышленного уровня, такого как `gdb` .

В общем случае вы, конечно, можете в любое время просто `print()` значения, которые хотите проверить.

В версии 3.0.0 сервер предоставляет вам возможность внедрить интерпретатор в плагин и впоследствии запустить Lua внутри него в реальном времени. Это самое близкое, что у нас есть к отладчику.

Предположим, у вас есть плагин, который мы назвали `MyPlugin` , вы можете войти в его состояние Lua следующим образом:

```
> lua MyPlugin
```

Здесь важны заглавные буквы, поэтому будьте внимательны, чтобы они были введены правильно. Вывод будет примерно таким:

```
lua @MyPlugin>
```

Как видите, мы перешли в состояние Lua для `MyPlugin` . С этого момента и до тех пор, пока мы не войдем в `exit()` (с версии 3.1.0 `:exit` ), мы будем в `MyPlugin` и сможем выполнить Lua там.

Например, если у нас есть глобальный объект с именем `MyValue` , мы можем вывести это значение следующим образом:

```
lua @MyPlugin> print(MyValue)
```

Здесь вы можете вызывать функции и делать все, что вам нужно.

Начиная с версии 3.1.0: Вы можете нажать клавишу TAB для автодополнения функций и переменных.

ВНИМАНИЕ: К сожалению, если состояние Lua в данный момент занято выполнением другого кода (например, цикла `while` ), это может полностью повесить консоль до тех пор, пока она не завершит эту работу, поэтому будьте очень осторожны, переключаясь на состояния, которые могут ожидать чего-то.

Кроме того, вы можете запустить `status` в обычной консоли ( `>` ), которая покажет вам, среди прочего, некоторую статистику о Lua.

### Пользовательские команды

Для реализации пользовательских команд для консоли сервера можно использовать событие `onConsoleInput` . Это может быть полезно, когда вы хотите добавить способ для владельца сервера подать сигнал на ваш плагин или отобразить внутреннее состояние пользовательским способом.

Вот пример:

```lua
function handleConsoleInput(cmd)
    local delim = cmd:find(' ')
    if delim then
        local message = cmd:sub(delim+1)
        if cmd:sub(1, delim-1) == "print" then
            return message
        end
    end
end

MP.RegisterEvent("onConsoleInput", "handleConsoleInput")
```

Это позволит вам выполнять следующие действия в консоли сервера:

```
> print hello, world
hello, world
```

Мы реализовали собственную `print` . В качестве упражнения попробуйте создать функцию, подобную `say` , которая отправляет сообщение чата всем игрокам или даже конкретному игроку (с помощью `MP.SendChatMessage` ).

**Внимание:** для ваших собственных плагинов обычно рекомендуется "пространство имен". Наш пример `print` в плагине с именем `mystuff` может называться `mystuff.print` или `ms.print` или что-то подобное.

### Ссылка на API

Формат документации: `function_name(arg_name: arg_type, arg_name: arg_type) -> return_types`

### Встроенные функции

#### `print(...)` , `printRaw(...)`

Выводит сообщение на консоль сервера с префиксом `[DATE TIME] [LUA]` . Если вам не нужен этот префикс, вы можете использовать `printRaw(...)` .

Пример:

```lua
local name = "John Doe"
print("Hello, I'm", name, "and I'm", 32)
```

Он может принимать столько аргументов произвольных типов, сколько вам нужно. Он также с радостью выгрузит таблицы!

Это похоже на `print` интерпретатора lua, поэтому она будет вставлять символы табуляции между аргументами.

#### `exit()`

Корректно завершает работу сервера. Вызывает срабатывание события `onShutdown` .

### Функции МП

#### `MP.CreateTimer() -> Timer`

Создает объект таймера, который можно использовать для отслеживания того, сколько времени заняло что-то / сколько времени прошло. Он запускается после создания и может быть сброшен/перезапущен с помощью `mytimer:Start()` .

Текущее прошедшее время в секундах можно получить с помощью `mytimer:GetCurrent()` .

Пример:

```lua
local mytimer = MP.CreateTimer()
-- do stuff here that needs to be timed
print(mytimer:GetCurrent()) -- print how much time elapsed
```

Таймеры не нужно останавливать (и их невозможно остановить), они не создают накладных расходов.

#### `MP.GetOSName() -> string`

Возвращает имя текущей ОС: `Windows` , `Linux` или `Other` .

#### `MP.GetServerVersion() -> number,number,number`

Возвращает текущую версию сервера в формате major, minor, patch. Например, версия v3.0.0 вернет `3, 0, 0` .

Пример:

```lua
local major, minor, patch = MP.GetServerVersion()
print(major, minor, patch)
```

Выход:

```
2	4	0
```

#### `MP.RegisterEvent(event_name: string, function_name: string)`

Запоминает функцию с именем Имя `Function Name` как обработчик события с именем `Event Name` .

Вы можете зарегистрировать столько обработчиков события, сколько захотите.

Список событий, предоставляемых сервером, можно посмотреть [здесь](#events-1) .

Если событие с таким именем не существует, оно создается, и, таким образом, RegisterEvent не может завершиться неудачей. Это можно использовать для создания пользовательских событий. Подробнее см. в разделах [Пользовательские события](#custom-events) и [События](#events) .

Пример:

```lua
function ChatHandler(player_id, player_name, msg)
    if msg == "hello" then
        print("Hello World!")
        return 0
    end
end

MP.RegisterEvent("onChatMessage", "ChatHandler")
```

#### `MP.CreateEventTimer(event_name: string, interval_ms: number, [strategy: number (since v3.0.2)])`

Запускает таймер внутри сервера, который запускает событие `event_name` каждые `interval_ms` миллисекунд.

Таймеры событий можно отменить с помощью `MP.CancelEventTimer` .

Интервалы &lt;25 мс не рекомендуются, так как несколько таких интервалов, скорее всего, не будут обслуживаться вовремя надежно. Хотя несколько таймеров могут быть запущены для одного и того же события, рекомендуется создавать как можно меньше таймеров событий. Например, если вам нужно одно событие, которое запускается каждые полсекунды, и одно, которое запускается каждую секунду, рассмотрите возможность создания просто события каждые полсекунды и запуска триггера every-second-functiosecond.

Вы также можете использовать `MP.CreateTimer` для создания таймера и измерения времени, прошедшего с момента последнего вызова события, чтобы минимизировать таймеры событий, хотя это не обязательно рекомендуется, поскольку это значительно увеличивает сложность кода.

**Начиная с версии 3.0.2:**

Необязательный `CallStrategy` может быть указан в качестве третьего аргумента. Это может быть:

- `MP.CallStrategy.BestEffort` (по умолчанию): попытается запустить событие с указанным интервалом, но откажется ставить обработчики в очередь, если выполнение обработчика займет слишком много времени.
- `MP.CallStrategy.Precise` : будет ставить обработчики событий в очередь с точным указанным интервалом. Может привести к заполнению очереди, если обработчику требуется больше времени, чем интервал. Используйте только если вам НУЖЕН точный интервал.

#### `MP.CancelEventTimer(event_name: string)`

Отменяет все таймеры для события с именем `event_name` В некоторых случаях таймер может сработать еще один раз, прежде чем будет отменен, из-за особенностей асинхронного программирования.

#### `MP.TriggerLocalEvent(event_name: string, ...) -> table`

Синхронный триггер событий локального плагина.

Запускает локальное событие, которое приводит к вызову всех обработчиков этого события *в текущем состоянии lua* (обычно в текущем плагине, если состояние не было передано через PluginConfig.toml).

Вы можете передать этой функции аргументы ( `...` ), которые копируются и отправляются всем обработчикам как аргументы функции.

Этот вызов является синхронным и вернет управление после завершения всех обработчиков событий.

Возвращаемое значение — это таблица всех результатов. Если обработчик вернул значение, оно будет в этой таблице, неаннотированное и неименованное. Это можно использовать для «сбора» вещей или регистрации подобработчиков для событий, которые можно отменить. Это практически массив.

Пример:

```lua
local Results = MP.TriggerLocalEvent("MyEvent")
print(Results)
```

#### `MP.TriggerGlobalEvent(event_name: string, ...) -> table`

Глобальный асинхронный триггер событий.

Запускает глобальное событие, которое приводит к вызову всех обработчиков этого события *во всех плагинах* (включая *этот* плагин).

Вы можете передать этой функции аргументы ( `...` ), которые копируются и отправляются всем обработчикам как аргументы функции.

Этот вызов асинхронный и возвращает объект, подобный будущему. Локальные обработчики (обработчики в том же плагине, что и вызывающий) запускаются синхронно и немедленно.

Возвращаемая таблица имеет две функции:

- `IsDone() -> boolean` сообщает, все ли обработчики завершились. Вы можете подождать, пока это не станет правдой, проверив это и `MP.Sleep` -ing на некоторое время в цикле.
- `GetResults() -> table` возвращает неаннотированную неименованную таблицу со всеми возвращаемыми значениями всех обработчиков. Это практически массив.

Обязательно вызывайте их с помощью синтаксиса `Obj:Function()` ( `:` , NOT `.` ).

Пример:

```lua
local Future = MP.TriggerGlobalEvent("MyEvent")
-- wait until handlers finished
while not Future:IsDone() do
	MP.Sleep(100) -- sleep 100 ms
end
local Results = Future:GetResults()
print(Results)
```

Имейте в виду, что обработчик, регистрирующийся здесь в "MyEvent" и никогда не возвращающийся, может заблокировать ваш плагин. Вероятно, вы захотите отслеживать, как долго вы ждали, и прекратить ожидание через несколько секунд.

#### `MP.Sleep(time_ms: number)`

Ожидает в течение указанного в миллисекундах времени.

Это не приведет к выполнению состояния lua, и в состоянии сна ничего не будет выполнено.

ВНИМАНИЕ: НЕ засыпайте более чем на 500 мс, если у вас зарегистрированы обработчики событий, если вы *точно* не знаете, что делаете. Это предназначено для использования в режиме сна на 1-100 мс, чтобы дождаться результатов или чего-то подобного. Заблокированное (спящее) состояние lua может существенно замедлить работу всего сервера, если не соблюдать осторожность.

#### `MP.SendChatMessage(player_id: number, message: string)`

Отправляет сообщение чата, которое может видеть только указанный игрок (или все, если идентификатор `-1` ). В игре это не будет отображаться как направленное сообщение.

Вы можете использовать это, например, чтобы сообщить игроку *, почему* вы отменили появление его транспортного средства, отправить сообщение в чате или что-то подобное, или чтобы отобразить некоторую информацию о вашем сервере.

Пример:

```lua
function ChatHandler(player_id, player_name, msg)
    if string.match(msg, "darn") then
        MP.SendChatMessage(player_id, "Please do not use profanity.") -- If the player sends a message containing "darn", notify the player and cancel the message
        return 1
    else
        return 0
    end
end

MP.RegisterEvent("onChatMessage", "ChatHandler")
```

Пример 2:

```lua
function ChatHandler(player_id, player_name, msg)
    if msg == "hello" then
        MP.SendChatMessage(-1, "Hello World!") -- If the player sends the exact message "hello", announce to the entire server "Hello World!"
        return 0
    end
end
```

#### `MP.TriggerClientEvent(player_id: number, event_name: string, data: string) -> boolean`

*до версии 3.1.0*

#### `MP.TriggerClientEvent(player_id: number, event_name: string, data: string) -> boolean,string`

*начиная с версии 3.1.0*

#### `MP.TriggerClientEventJson(player_id: number, event_name: string, data: table) -> boolean,string`

*начиная с версии 3.1.0*

Вызовет указанное событие с указанными данными на указанном клиенте (-1 для трансляции). Это событие затем может быть обработано в клиентском lua mod, см. документацию "Client Scripting" для этого.

Вернет `true` если сообщение удалось отправить (для `id = -1` , поэтому для трансляций это всегда `true` ), и `false` если игрок с таким идентификатором не существует или отключен, но у него все еще есть идентификатор (это известная проблема).

Если возвращается `false` , нет смысла повторять это событие, и не следует ожидать ответа (если таковой ожидался).

Начиная с версии 3.1.0, второе возвращаемое значение содержит сообщение об ошибке, если функция не удалась. Также, начиная с этой версии, версия функции `*Json` принимает таблицу в качестве аргумента данных и преобразует ее в json. Это просто сокращение для `MP.TriggerClientEvent(..., Util.JsonEncode(mytable))` .

#### `MP.GetPlayerCount() -> number`

Возвращает количество игроков, находящихся в данный момент на сервере.

#### `MP.GetPositionRaw(pid: number, vid: number) -> table,string`

Возвращает текущую позицию транспортного средства `vid` (идентификатор транспортного средства) игрока `pid` (идентификатор игрока) и строку ошибки, если произошла ошибка.

Таблица декодируется из пакета позиции, поэтому она содержит разнообразные данные, включая позицию и поворот (именно поэтому эта функция имеет постфикс «Raw»).

Пример:

```lua
local player_id = 4
local vehicle_id = 0

local raw_pos, error = MP.GetPositionRaw(player_id, vehicle_id)

if error == "" then
    print(raw_pos)
else
    print(error)
end
```

Выход:

```json
 {
    tim: 49.824, // Time since spawn
    rvel: { // Rotational velocity
            1: -1.33564e-05,
            2: -9.16553e-06,
            3: 8.33364e-07,
    },
    vel: { // Velocity
            1: -4.29755e-06,
            2: -5.79335e-06,
            3: 4.95236e-06,
    },
    pos: { // Position
            1: 269.979,
            2: -759.068,
            3: 46.554,
    },
    ping: 0.0125, // Vehicle latency
    rot: { // Rotation
            1: -0.00559953,
            2: 0.00894832,
            3: 0.772266,
            4: 0.635212,
    },
}
```

Пример 2:

```lua
local player_id = 4
local vehicle_id = 0

local raw_pos, error = MP.GetPositionRaw(player_id, vehicle_id)
if error = "" then
    local x, y, z = table.unpack(raw_pos["pos"])

    print("X:", x)
    print("Y:", y)
    print("Z:", z)
else
    print(error)
end
```

Выход:

```
X: -603.459
Y: -175.078
Z: 26.9505
```

#### `MP.IsPlayerConnected(player_id: number) -> boolean`

Подключен ли игрок и получил ли сервер от него UDP-пакет.

Пример:

```lua
local player_id = 8
print(MP.IsPlayerConnected(player_id)) -- Check if player with ID 8 is properly connected.
```

Выход:

```lua
true
```

#### `MP.GetPlayerName(player_id: number) -> string`

Получает отображаемое имя игрока.

Пример:

```lua
local player_id = 4
print(MP.GetPlayerName(player_id)) -- Get the name of the player with ID 4
```

Выход:

```
ilovebeammp2004
```

#### `MP.RemoveVehicle(player_id: number, vehicle_id: number)`

Удаляет указанное транспортное средство для указанного игрока.

Пример:

```lua
local player_id = 3
local player_vehicles = MP.GetPlayerVehicles(player_id)

-- Loop over all of player 3's vehicles and delete them
for vehicle_id, vehicle_data in pairs(player_vehicles) do
      MP.RemoveVehicle(player_id, vehicle_id)
end
```

#### `MP.GetPlayerVehicles(player_id: number) -> table`

Возвращает таблицу всех транспортных средств, которые в данный момент есть у игрока. Каждая запись в таблице представляет собой сопоставление идентификатора транспортного средства с данными о транспортном средстве (которые в настоящее время являются необработанной строкой json).

Пример:

```lua
local player_id = 3
local player_vehicles = MP.GetPlayerVehicles(player_id)

for vehicle_id, vehicle_data in pairs(player_vehicles) do
    local start = string.find(vehicle_data, "{")
    local formattedVehicleData = string.sub(vehicle_data, start, -1)
    print(Util.JsonDecode(formattedVehicleData))
end
```

Выход:

```json
{
    pid: 0,
    pro: "0",
    rot: {
            1: 0,
             2: 0,
            3: 0.776866,
            4: 0.629665,
    },
    jbm: "miramar",
    vcf: {
            parts: {
                    miramar_exhaust: "miramar_exhaust",
                    miramar_shock_R: "miramar_shock_R",
                    miramar_taillight: "miramar_taillight",
                    miramar_door_RL: "miramar_door_RL"
                    // ... continue
            },
            paints: {
                    1: {
                            roughness: 1,
                            metallic: 0,
                            clearcoat: 1,
                            baseColor: {
                                    1: 0.85,
                                    2: 0.84,
                                    3: 0.8,
                                    4: 1.2,
                            },
                            clearcoatRoughness: 0.09,
                    } // ... continue
            },
            partConfigFilename: "vehicles/miramar/base_M.pc",
            vars: {},
            mainPartName: "miramar",
    },
    pos: {
            1: 283.669,
            2: -754.332,
            3: 48.2151,
    },
    vid: 64822,
    ign: 0,
}
```

#### `MP.GetPlayers() -> table`

Возвращает таблицу всех подключенных игроков. Эта таблица сопоставляет идентификаторы с именами, например:

```json
{
	0: "LionKor",
	1: "JohnDoe"
}
```

#### `MP.IsPlayerGuest(player_id: number) -> boolean`

Является ли игрок гостем. Гость — это тот, кто не вошел в систему, а вместо этого решил играть как гость. Обычно его имя — `guest` за которым следует длинный номер.

Поскольку гости анонимны, вы можете запретить им присоединяться. В этом случае рекомендуется использовать аргумент [`onPlayerAuth`](#onplayerauth) `is_guest` .

#### `MP.DropPlayer(player_id: number, [reason: string])`

Выгоняет игрока с указанным ID. Параметр причины необязателен.

```lua
function ChatHandler(player_id, player_name, message)
    if string.match(message, "darn") then
        MP.DropPlayer(player_id, "Profanity is not allowed")
        return 1
    else
        return 0
    end
end
```

#### `MP.GetStateMemoryUsage() -> number`

Возвращает использование памяти текущим состоянием Lua в байтах.

#### `MP.GetLuaMemoryUsage() -> number`

Возвращает использование памяти всеми состояниями lua в байтах.

#### `MP.GetPlayerIdentifiers(player_id: number) -> table`

Возвращает таблицу с информацией об игроке, такой как идентификатор форума BeamMP, IP-адрес и идентификатор учетной записи Discord. Discord ID будет возвращен только в том случае, если пользователь связал его со своей учетной записью форума.

Вы можете найти идентификатор форума пользователя, перейдя по адресу `https://forum.beammp.com/u/USERNAME.json` и выполнив поиск по запросу `"user": {"id": 123456}` . Идентификатор BeamMP уникален для проигрывателя и не может быть изменен в отличие от имени пользователя.

Пример:

```lua
local player_id = 5
print(MP.GetPlayerIdentifiers(player_id))
```

Выход:

```json
{
    ip: "127.0.0.1",
    discord: "12345678987654321",
    beammp: "1234567",
}
```

*До версии 3.1.0 поле `ip` было неверным и не работало как задумано. Исправлено в версии 3.1.0.*

#### `MP.Set(setting: number, ...)`

Временно устанавливает параметр ServerConfig. Для этого полезна таблица `MP.Settings` .

Пример:

```lua
MP.Set(MP.Settings.Debug, true) -- Turns on debug mode
```

#### `MP.Settings -> table`

Таблица карты настройки идентификаторов для имени. Используется с `MP.Set` для изменения настроек ServerConfig.

Пример:

```lua
print(MP.Settings)
```

Выход:

```json
{
    MaxPlayers: 3,
    Debug: 0,
    Name: 5,
    Description: 6,
    MaxCars: 2,
    Private: 1,
    Map: 4,
}
```

### Утилитарные функции

#### `Util.Json*`

Начиная с BeamMP-Server `v3.1.0` .

Это встроенная библиотека JSON, которая обычно намного быстрее любой библиотеки Lua JSON. За кулисами используется библиотека C++ `nlohmann::json` , которая совместима с JSON, полностью протестирована и постоянно подвергается фаззингу.

#### `Util.JsonEncode(table: table) -> string`

Кодирует таблицу Lua в строку JSON, рекурсивно (таблицы внутри таблиц внутри таблиц ... работают как и ожидалось). Все примитивные типы учитываются, функции, пользовательские данные и т. п. игнорируются.

Полученный JSON минимизируется и может быть красиво выведен с помощью `Util.JsonPrettify` для его наглядности.

Пример:

```lua
local player = {
	name = "Lion",
	age = 69,
	skills = { "skill A", "skill B" }
}
local json = Util.JsonEncode(player)
```

Результаты в:

```json
{"name":"Lion","age":69,"skills":["skill A","skill B"]}
```

#### `Util.JsonDecode(json: string) -> table`

Декодирует JSON в таблицу Lua. Возвращает `nil` если это не удалось, и выводит ошибку.

Пример:

```lua
local json = "{\"message\":\"OK\",\"code\":200}"
local tbl = Util.JsonDecode(json)
```

Результаты в:

```lua
{
	message = "OK",
	code = 200,
}
```

#### `Util.JsonPrettify(json: string) -> string`

Добавьте отступы и новые строки в JSON, чтобы сделать его более читабельным для людей.

Пример:

```
local myjson = Util.JsonEncode({ name="Lion", age = 69, skills = { "skill A", "skill B" } })

print(Util.JsonPrettify(myjson))
```

Результаты в:

```json
{
    "age": 69.0,
    "name": "Lion",
    "skills": [
        "skill A",
        "skill B"
    ]
}
```

#### `Util.JsonMinify(json: string) -> string`

Удаляет отступы, переносы строк и любые другие пробелы. Не обязательно, если вы не вызвали `Util.JsonPrettify` , так как весь вывод из `Util.Json*` уже минифицирован.

Пример:

```lua
local pretty = Util.JsonPrettify(Util.JsonEncode({ name="Lion", age = 69, skills = { "skill A", "skill B" } }))

print(Util.JsonMinify(pretty))
```

Результаты в:

```json
{"age":69.0,"name":"Lion","skills":["skill A","skill B"]}
```

#### `Util.JsonFlatten(json: string) -> string`

Создает объект JSON, ключи которого сводятся к указателям JSON в соответствии с RFC 6901. Вы можете восстановить оригинал с помощью `Util.JsonUnflatten()` . Чтобы это работало, все значения должны быть примитивами.

Пример:

```lua
local json = Util.JsonEncode({ name="Lion", age = 69, skills = { "skill A", "skill B" } })
print("normal: " ..json)
print("flattened: " .. Util.JsonFlatten(json))
print("flattened pretty: " .. Util.JsonPrettify(Util.JsonFlatten(json)))

```

Результаты в:

```json
normal: {"age":69.0,"name":"Lion","skills":["skill A","skill B"]}
flattened: {"/age":69.0,"/name":"Lion","/skills/0":"skill A","/skills/1":"skill B"}
flattened pretty: {
    "/age": 69.0,
    "/name": "Lion",
    "/skills/0": "skill A",
    "/skills/1": "skill B"
}
```

#### `Util.JsonUnflatten(json: string) -> string`

Восстанавливает произвольную вложенность значения JSON, которое было сглажено перед использованием функции `Util.JsonFlatten()` .

#### `Util.JsonDiff(a: string, b: string) -> string`

Создает разницу JSON в соответствии с RFC 6902 (http://jsonpatch.com/). Затем эту разницу можно применить как патч через `Util.JsonDiffApply()` . Возвращает разницу.

#### `Util.JsonDiffApply(base: string, diff: string) -> string`

Применяет JSON `diff` к `base` как JSON patch (RFC 6902, http://jsonpatch.com/). Возвращает результат.

### `Util.Random*`

Начиная с BeamMP-Server `v3.1.0` .

#### `Util.Random() -> float`

Возвращает число с плавающей точкой от 0 до 1.

Пример:

```lua
local rand = Util.Random()
print("rand: " .. rand)
```

Результаты в:

```lua
rand: 0.135477
```

#### `Util.RandomIntRange(min: int, max: int) -> int`

Возвращает целое число от минимума до максимума.

Пример:

```lua
local randInt = Util.RandomIntRange(1, 100)
print("randInt: " .. randInt)
```

Результаты в:

```lua
randInt:  69
```

#### `Util.RandomRange(min: number, max: number) -> float`

Возвращает число с плавающей точкой между минимумом и максимумом.

Пример:

```lua
local randFloat = Util.RandomRange(1, 1000)
print("randFloat: " .. randFloat)
```

Результаты в:

```lua
randFloat: 420.6969
```

#### `Util.LogInfo(params: ...)` и др. (начиная с версии 3.3.0)

```lua
Util.LogInfo("Hello, World!")
Util.LogWarn("Cool warning")
Util.LogError("Oh no!")
Util.LogDebug("hi")
```

производит

```
[19/04/24 11:06:50.142] [Test] [INFO] Hello, World!
[19/04/24 11:06:50.142] [Test] [WARN] Cool warning
[19/04/24 11:06:50.142] [Test] [ERROR] Oh no!
[19/04/24 11:06:50.142] [Test] [DEBUG] hi
```

Поддерживает ту же самую печать/сброс данных, что и `print()` .

#### `Util.DebugExecutionTime() -> table`

Когда код Lua выполняется на сервере, выполнение каждого обработчика событий хронометрируется. Минимальное, максимальное, среднее (среднее) и стандартное отклонение этих времен выполнения вычисляются и возвращаются в таблице этой функцией. Расчет происходит пошагово, поэтому каждый раз, когда запускается обработчик событий, минимальное, максимальное, среднее и стандартное отклонение обновляются. Таким образом, `Util.DebugExecutionTime()` обычно не занимает значительного времени для выполнения (менее 0,25 мс).

Возвращает таблицу следующего вида:

```lua
[[table: 0x7af6d400aca0]]: {
	printStuff: [[table: 0x7af6d400be60]]: {
		mean: 0.250433,
		n: 76,
		max: 0.074475,
		stdev: 0.109405,
		min: 0.449274,
	},
	onInit: [[table: 0x7af6d400b130]]: {
		mean: 0.033095,
		n: 1,
		max: 0.033095,
		stdev: 0,
		min: 0.033095,
	},
}
```

Для каждого *обработчика* событий возвращаются следующие данные:

- `n` : Количество раз, когда событие срабатывало и был вызван обработчик
- `mean` : среднее значение всех времен выполнения, в мс
- `max` .: Максимальное время выполнения, в мс.
- `min` .: Наименьшее время выполнения, в мс.
- `stdev` : стандартное отклонение всех средних значений времени выполнения в мс

Вот функция, которую можно использовать для наглядной распечатки этих данных:

```lua
function printDebugExecutionTime()
    local stats = Util.DebugExecutionTime()
    local pretty = "DebugExecutionTime:\n"
    local longest = 0
    for name, t in pairs(stats) do
        if #name > longest then
            longest = #name
        end
    end
    for name, t in pairs(stats) do
        pretty = pretty .. string.format("%" .. longest + 1 .. "s: %12f +/- %12f (min: %12f, max: %12f) (called %d time(s))\n", name, t.mean, t.stdev, t.min, t.max, t.n)
    end
    print(pretty)
end
```

Вы можете вызвать его следующим образом для отладки кода, если он работает медленно:

```lua
-- event to print the debug times
MP.RegisterEvent("printStuff", "printDebugExecutionTime")
-- run every 5000 ms = 5 seconds (or 10, or 60, whatever makes sense for you
MP.CreateEventTimer("printStuff", 5000)
```

### Функции ФС

Функции `FS` — это функции **файловой** **системы** , которые стремятся превзойти возможности Lua по умолчанию.

Пожалуйста, всегда используйте `/` в качестве разделителя при указании путей, так как это кроссплатформенно (windows, linux, macos, ...).

#### `FS.CreateDirectory(path: string) -> bool,string`

Создает указанный каталог и любые родительские каталоги, если они не существуют. Поведение примерно эквивалентно обычной команде linux `mkdir -p` .

В случае успеха возвращает `true` и `""` . Если создание каталога не удалось, возвращается `false` и сообщение об ошибке ( `string` ).

Пример:

```lua
local success, error_message = FS.CreateDirectory("data/mystuff/somefolder")

if not success then
	print("failed to create directory: " .. error_message)
else
	-- do something with the directory
end

-- Be careful not to do this! This will ALWAYS be true!
if error_message then
	-- ...
end
```

#### `FS.Remove(path: string) -> bool,string`

Удаляет указанный файл или папку.

Возвращает `true` , если произошла ошибка, с сообщением об ошибке во втором возвращаемом значении.

Пример:

```lua
local error, error_message = FS.Remove("myfile.txt")

if error then
	print("failed to delete myfile: " .. error_message)
end
```

#### `FS.Rename(pathA: string, pathB: string) -> bool,string`

Переименовывает (или перемещает) `pathA` в `pathB` .

Возвращает `true` , если произошла ошибка, с сообщением об ошибке во втором возвращаемом значении.

#### `FS.Copy(pathA: string, pathB: string) -> bool,string`

Копирует `pathA` в `pathB` .

Возвращает `true` , если произошла ошибка, с сообщением об ошибке во втором возвращаемом значении.

#### `FS.GetFilename(path: string) -> string`

Возвращает последнюю часть пути, которая обычно является именем файла. Вот несколько примеров входов + выходов:

```lua
input -> output

"my/path/a.txt" 	-> "a.txt"
"somefile.txt" 		-> "somefile.txt"
"/awesome/path" 	-> "path"
```

#### `FS.GetExtension(path: string) -> string`

Возвращает расширение файла или пустую строку, если расширения нет. Вот несколько примеров входов + выходов

```lua
input -> output

"myfile.txt" 					-> ".txt"
"somefile." 					-> "."
"/awesome/path" 				-> ""
"/awesome/path/file.zip.txt"	-> ".txt"
"myexe.exe" 					-> ".exe"
```

#### `FS.GetParentFolder(path: string) -> string`

Возвращает путь к родительскому каталогу, т. е. папке, в которой содержится файл или папка. Вот несколько примеров входных и выходных данных:

```lua
input -> output

"/var/tmp/example.txt" 		-> "/var/tmp"
"/"							-> "/"
"mydir/a/b/c.txt"			-> "mydir/a/b"
```

#### `FS.Exists(path: string) -> bool`

Возвращает `true` если путь существует, `false` если нет.

#### `FS.IsDirectory(path: string) -> bool`

Возвращает `true` , если указанный путь является каталогом, `false` если нет. Обратите внимание, что `false` НЕ подразумевает, что путь является файлом (см. `FS.IsFile()` ).

#### `FS.IsFile(path: string) -> bool`

Возвращает `true` , если указанный путь является обычным файлом (не символической ссылкой, жесткой ссылкой, блочным устройством и т. д.), `false` если нет. Обратите внимание, что `false` НЕ подразумевает, что путь является каталогом (см. `FS.IsDirectory()` ).

#### `FS.ListDirectories(path: string) -> table`

Возвращает таблицу всех каталогов по указанному пути.

Пример:

```lua
print(FS.ListDirectories("Resources"))
```

Результаты в:

```lua
{
    1: "Client",
    2: "Server"
}
```

#### `FS.ListFiles(path: string) -> table`

Возвращает таблицу всех файлов по указанному пути.

Пример:

```lua
print(FS.ListFiles("Resources/Server/examplePlugin"))
```

Результаты в:

```lua
{
    1: "example.json",
    2: "example.lua"
}
```

#### `FS.ConcatPaths(...) -> string`

Складывает (объединяет) все аргументы с предпочитаемым разделителем пути системы.

Пример:

```lua
FS.ConcatPaths("a", "b", "/c/d/e/", "/f/", "g", "h.txt")
```

результаты в

```
a/b/c/d/e/f/g/h.txt
```

Также разрешает `..` , если он существует в пути в любой точке. Эта функция безопаснее, чем конкатенация строк в lua, и учитывает разделители платформы.

Пожалуйста, всегда используйте `/` в качестве разделителя при указании путей, так как это кроссплатформенно (windows, linux, macos, ...).

### События

#### Объяснение

- Аргументы: Список аргументов, переданных обработчикам этого события.
- Отменяемое: Можно ли отменить событие. Если его можно отменить, обработчик может сделать это, вернув `1` , например `return 1` .

#### Краткое изложение событий

Присоединение игрока вызывает следующие события в указанном порядке:

1. `onPlayerAuth`
2. `onPlayerConnecting`
3. `onPlayerJoining`
4. `onPlayerJoin`

#### Системные события

##### `onInit`

Аргументы: НЕТ Отменяемо: НЕТ

Срабатывает сразу после инициализации всех файлов в плагине.

##### `onConsoleInput`

Аргументы: `input: string` Отменяемость: НЕТ

Срабатывает, когда консоль BeamMP получает входной сигнал.

##### `onShutdown`

Аргументы: НЕТ Отменяемо: НЕТ

Срабатывает при отключении сервера. В настоящее время происходит после того, как все игроки были выгнаны.

#### События, связанные с игрой

##### `onPlayerAuth`

Аргументы: `player_name: string` , `player_role: string` , `is_guest: bool` , `identifiers: table -> beammp, ip` Возможность отмены: ДА

Первое событие, которое срабатывает, когда игрок хочет присоединиться. Игроку может быть отказано в присоединении, если вернуть `1` или причину ( `string` ) из функции-обработчика.

```lua
function myPlayerAuthorizer(name, role, is_guest, identifiers)
	return "Sorry, you cannot join at this time."
end
MP.RegisterEvent("onPlayerAuth", "myPlayerAuthorizer")
```

##### `onPlayerConnecting`

Аргументы: `player_id: number` Возможность отмены: НЕТ

Срабатывает, когда игрок впервые начинает подключение, после `onPlayerAuth` .

##### `onPlayerJoining`

Аргументы: `player_id: number` Возможность отмены: НЕТ

Срабатывает, когда игрок завершил загрузку всех модов, после `onPlayerConnecting` .

##### `onPlayerDisconnect`

Аргументы: `player_id: number` Возможность отмены: НЕТ

Срабатывает при отключении игрока.

##### `onChatMessage`

Аргументы: `player_id: number` , `player_name: string` , `message: string` Возможность отмены: ДА

Срабатывает, когда игрок отправляет сообщение в чате. При отмене сообщение в чате не будет показано никому, даже игроку, который его отправил.

##### `onVehicleSpawn`

Аргументы: `player_id: number` , `vehicle_id: number` , `data: string` Возможность отмены: ДА

Срабатывает, когда игрок создает новое транспортное средство. Аргумент `data` содержит конфигурацию автомобиля и данные о положении/вращении для транспортного средства в виде строки json.

##### `onVehicleEdited`

Аргументы: `player_id: number` , `vehicle_id: number` , `data: string` Возможность отмены: ДА

Срабатывает, когда игрок редактирует свое транспортное средство и применяет редактирование. Аргумент `data` содержит обновленную конфигурацию автомобиля в виде строки json, но **не** включает данные о положении или вращении. Вы можете использовать [MP.GetPositionRaw](#mpgetpositionrawpid-number-vid-number-tablestring) для получения данных о положении и вращении.

##### `onVehicleDeleted`

Аргументы: `player_id: number` , `vehicle_id: number` Возможность отмены: НЕТ

Срабатывает, когда игрок удаляет свое транспортное средство.

##### `onVehicleReset`

Аргументы: `player_id: number` , `vehicle_id: number` , `data: string` Возможность отмены: НЕТ

Срабатывает, когда игрок сбрасывает свое транспортное средство. `data` — это обновленное положение и вращение автомобиля, однако **не** включают конфигурацию транспортных средств. Вы можете использовать [MP.GetPlayerVehicles](#mpgetplayervehiclesplayer_id-number-table) , чтобы получить конфигурацию транспортных средств.

##### `onFileChanged`

*начиная с версии 3.1.0*

Аргументы: `path: string` Возможность отмены: НЕТ

Срабатывает при изменении файла в каталоге `Resources/Server` *или любом его подкаталоге* .

Любое изменение файла в каталоге `Resources/Server/<plugin>` (не в его подпапке) вызовет перезагрузку состояния Lua и событие `onFileChanged` .

Любой файл в подпапках `Resources/Server/<plugin>` , например `Resources/Server/<plugin>/lua/stuff.lua` , не вызовет перезагрузку состояния, а только вызовет событие `onFileChanged` . Таким образом, вы можете перезагрузить его самостоятельно правильным образом (или не перезагружать).

Это относится ко всем файлам, а не только к файлам `.lua` .

`path` указывается относительно корня сервера, например `Resources/Server/myplugin/myfile.txt` . Вы можете выполнить дальнейшую обработку этой строки с помощью семейства функций `FS.*` , например, извлечь имя или расширение ( `FS.GetExtension(...)` , `FS.GetFilename(...)` , ...).

Примечание: файлы, добавленные после запуска сервера, *не* отслеживаются, начиная с версии 3.1.0.

### Миграция со старого Lua

Это краткий обзор основных шагов, которые необходимо предпринять для перехода со старого на новый lua.

#### Понять, как работает новый lua

Для этого внимательно прочтите раздел [«Введение»](#how-to-start-writing-a-plugin) и все его подразделы. Необходимо правильно выполнить следующие шаги.

#### Найти и заменить

Сначала вам следует выполнить поиск и замену всех функций MP. Подстановка должна добавить `MP.` перед всеми функциями MP, за исключением `print()` .

Пример:

```lua
local players = GetPlayers()
print(#players)
```

становится

```lua
local players = MP.GetPlayers()
print(#players) -- note how print() doesn't change
```

#### Прощайте, темы, привет, таймеры событий!

Как обсуждалось во введении, потоки — это таймеры событий. Для любых вызовов `CreateThread` замените его вызовом `CreateEventTimer` . Внимательно проверьте время, которое имел ваш старый CreateThread (число было X в секунду), и подумайте о том, какое значение тайм-аута таймера событий для этого (которое указывается в миллисекундах). Также имейте в виду, что вместо имени функции он принимает имя события, поэтому вам придется также зарегистрировать событие.

Пример:

```lua
CreateThread("myFunction", 2) -- calls "myFunction" twice per second
```

становится

```lua
MP.RegisterEvent("myEvent", "myFunction") -- registering our event for the timer
MP.CreateEventTimer("myEvent", 500) -- 500 milliseconds = 2 times per second
```

Если у вас много таймеров событий, имеет смысл попробовать объединить их, например, создав событие "ежеминутное" и зарегистрировав в нем несколько функций, которые нужно вызывать каждую минуту, вместо того, чтобы иметь несколько таймеров событий. Каждый таймер событий требует от сервера немного времени для срабатывания.

#### Больше никаких неявных вызовов событий

Вам нужно регистрировать все ваши события. Вы не можете полагаться на имена функций. В старом lua это было неясно, но в новом lua это обычно соблюдается. Хороший шаблон:

```lua
MP.RegisterEvent("onChatMessage", "chatMessageHandler")
-- or
MP.RegisterEvent("onChatMessage", "handleChatMessage")
```

Это лучше, чем называть обработчик тем же, что и событие, что вводит в заблуждение и сбивает с толку.


