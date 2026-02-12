!!! 警告 "这个网站正在建设中！"

```
这个网站正在积极建设中。

觉得你能帮上忙吗？请用铅笔在右侧点击页面！

这也可以在任何页面上完成。
```

# 模组/游戏内脚本参考

BeamMP允许您创建自己的客户端插件。我们提供了一些功能，你可以用它来与其他多人模式和其他玩家通过服务器进行通信。

# 函数列表

脚本可用函数列表：

函数 | 说明
--- | ---
`TriggerServerEvent("eventName", "data")` | 在服务器lua环境中触发事件，两个参数都是字符串。
`TriggerClientEvent("eventName", "data")` | 在本地lua环境中触发事件，两个参数都是字符串。有利于插件之间的通信。
`AddEventHandler("eventName", Function)` | 当`eventName`被接收时（本地或从服务器），`function`将获得1个参数，一个包含事件数据的字符串。

# 代码片段

例如，使用包含的`ChatMessageIncluded`事件解析聊天，如下所示：

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
