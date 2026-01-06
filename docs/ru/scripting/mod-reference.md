!!! предупреждение "Этот сайт находится в стадии разработки!"

```
This site is being actively worked on.

Feel you could help? Please do by clicking on the page with a pencil on the right!

This can be done any page too.
```

# Справочник по модам/внутриигровым скриптам

BeamMP также позволяет вам создавать собственные плагины на стороне клиента. Мы предоставили несколько функций, которые вы можете использовать для связи с другими многопользовательскими модами и другими игроками через сервер.

# Функции

Список доступных функций для написания скриптов:

Функция | Примечания
--- | ---
`TriggerServerEvent("eventName", "data")` | Запускает событие в серверной среде lua, оба параметра являются строками.
`TriggerClientEvent("eventName", "data")` | Запускает событие в локальной среде lua, оба параметра — строки. Хорошо подходит для связи между плагинами.
`AddEventHandler("eventName", Function)` | Добавляет 2-й параметр в таблицу, который будет вызываться при получении `eventName` (локально или с сервера). `Function` получит 1 параметр — строку, содержащую данные события.

# Фрагменты кода

Например, для анализа чата используйте включенное событие `ChatMessageIncluded` следующим образом:

```lua
local function chatReceived(msg) -- Receive event with parameters
    print("chat received: "..msg)
    local i = string.find(s, ":") -- Find where our first ':' is, used to separate the sender and message
    if i == nil then
        print("error parsing message: separator could not be found!")
        return -- Could not find separator, cancel function
    end
    print("index of separator: "..tostring(i))
    local sender = string.sub(msg, 1, i-1) -- Substring our input to separate its 2 parts
    local message = string.sub(msg, i+1, -1)  -- Do whatever you want to with the message
    print("sender: " .. sender)
    print("message: ".. message)
end

AddEventHandler("ChatMessageReceived", chatReceived) -- Add our event handler to the list managed by BeamMP
```
