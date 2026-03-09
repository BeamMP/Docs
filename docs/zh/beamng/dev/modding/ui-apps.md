# 图形界面-应用程序 创建

为了制作一个图形界面应用程序，你需要一些AngularJS框架的知识，主要的文档可以在这里找到: [AngularJS docs](https://docs.angularjs.org/guide)

## 文件结构

一个图形界面应用程序需要四个重要的文件才能工作：

- app.js | 包含图形界面应用程序使用的主要代码 [Javascript docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- app.html | 显示应用程序的代码 [Html docs](https://developer.mozilla.org/fr/docs/Web/HTML)
- app.json | 包含图形界面应用程序的信息
- app.png | 显示在应用程序选择器中的图像文件

### 图形界面应用程序 样式

我们建议使用 `<style>` 标签来设置应用的样式, a .css 文件会工作，但您将无法实时看到更改。

## 范例

这个例子来自DanielW，感谢他

ui\modules\apps\ExampleApp\app.html

```html
<div style="width: 100%; height: 100%;" class="bngApp">
    <link type="text/css" rel="stylesheet" href="/ui/modules/apps/ExampleApp/app.css" />

    <div id="exampleAppContainer">
        <span>Gear: <span>{{ gearName }}</span></span>

        <div layout="row" layout-align="center center">
            <md-input-container flex>
                <label>Input</label>
                <input ng-model="message" ng-keydown="sendMessage($event)">
            </md-input-container>

            <md-button md-no-ink class="md-warn" ng-disabled="!message" ng-click="sendMessage()">Send</md-button>
        </div>

        <span style="display: block">Messages:</span>

        <!-- Scroll Area -->
        <ul bng-nav-scroll style="margin: 0; padding: 0; overflow-y: auto; width: 100%; height: 100%; background-color: #37373740;">

            <!-- Iterate over the messages and display them -->
            <li ng-repeat="message in messages track by $index" style="display: flex; align-items: center; height: 35px;">
                <span style="padding: 0 0.2em; width: 100%;">{{ message }}</span>
        
                <!-- Button to delete the message, this calls the `deleteMessage` function in `app.js` -->
                <md-button md-no-ink class="md-icon-button md-warn" ng-click="deleteMessage($index)">
                    <md-icon class="material-icons">delete</md-icon>
                </md-button>
            </li>
        </ul>
    </div>
</div>
```

在这里, 你可以看到一个 `<span>` 显示车辆挡位的标签, 用于将消息发送给 `sendMessage()`函数和一个重复的`<li>`标签（在Javascript中的`messages`变量上使用<b>ng-repeat</b>）

ui\modules\apps\ExampleApp\app.js

```js
angular.module('beamng.apps')
.directive('exampleApp', [function() {
    return {
        templateUrl: '/ui/modules/apps/ExampleApp/app.html',
        replace: true,
        restrict: 'EA',
        scope: true,

        controller: ['$scope', function($scope) {
            $scope.gearName = '0'
            $scope.message  = ''
            $scope.messages = []

            // Setup the streams we want. For now, we only want the engine information. You can add more, you'll just have to look around to find the different streams
            let steamList = ['engineInfo']
            StreamsManager.add(steamList)

            $scope.$on('destroy', function() {
                StreamsManager.remove(steamList)
            })

            // Do I even need to put this comment here explaining what this function does?
            // Well, I have done it for a lot of other things when they weren't needed. I'll leave this one be...
            $scope.$on('streamsUpdate', function(event, streams) {
                if (!streams.engineInfo) // Early return... You probably noticed that without this useless comment though
                    return;

                // `lua/vehicle/controller/vehicleController.lua:538` (or use console.log)
                let gear = streams.engineInfo[5]

                // Update the gear name in HTML if needed
                if ($scope.gearName !== gear)
                    $scope.gearName = gear
            })

            $scope.sendMessage = function(event) {
                if (event && event.key !== 'Enter')
                    return

                if ($scope.message == '')
                    return

                // Forward the message to the Lua extension to modify it
                bngApi.engineLua('extensions.exampleMod.modifyMessage("' + $scope.message + '")')
                $scope.message = ''
            }

            $scope.deleteMessage = function(idx) {
                $scope.messages.splice(idx, 1)
            }

            // The `modifyMessage` function will call this hook with the modified data
            $scope.$on('MessageReady', function(_, modifiedMessage) {
                $scope.messages.push(modifiedMessage)
            });
        }]
    }
}])
```

注意<b>$scope{/b0}的用法。这是非常重要的，因为你需要在{b1}$作用域</b>中定义变量和函数，以便能够从<b>ng-*</b>标签中的<b>Html</b>中访问它。所以在这个例子中，在<b>Html</b>中执行`sendMessage()`函数后，它将把它发送到mod的extensions目录中的lua文件中，并在这个lua文件中执行`modifyMessage()`函数。

下面是lua的一个例子：

```lua
local function modifyMessage(message)
    message = message .. " [Modified!]"
    guihooks.trigger('MessageReady', message)
end
```

^这是lua的一个简化版本，只是为了展示函数

这里主要关注的是<b>基钩子的使用。触发器</b>触发一个用`$scope.$on()`定义的AngularJS事件。正如您在Javascript文件的最底部看到的那样，该事件被命名为MessageReady，并将由<b>guihook执行。用消息有效负载触发</b>函数，然后将被推入`$范围。在<b data-md-type="raw_html">Html</b>文件中使用<b data-md-type="raw_html">ng-repeat</b>来显示li标签中的messages`变量

完整的lua文件就在下面

lua\ge\extensions\exampleMod.lua

```lua
local M = {}

--[[
    This is the entry point of our extension, this is what the game loads from our `modScript.lua`.
    In the modScript file, you can load more extensions and put them in the same directory as this file.

    In this file, we will communicate with the following:
      1. Our vehicle extension. That extension tells this extension when to send it data, and we send it. Take a look at `vehicle/extensions/auto/exampleVehicleExtension.lua`
      2. Input. Take a look at `core/input/actions/myActions.json`. When the bounded key is pressed, it will call `onActionKeyDown` (a function we export below)
]]

-- Game Function Hooks
--------------------------------------------
local function onExtensionLoaded()
    log('D', "onExtensionLoaded", "Called")
end

local function onExtensionUnloaded()
    log('D', "onExtensionUnloaded", "Called")
end

-- Custom Functions
--------------------------------------------
local function onActionKeyDown()
    log('D', "onActionKeyDown", "Pressed!")
end

local function onVehicleExtensionLoaded(vehID)
    log('D', "onVehicleExtensionLoaded", "Sending some data to the vehicle")

    local veh = be:getObjectByID(vehID) -- If you don't have the ID, you can also use `be:getPlayerVehicle(0)` to get the current vehicle.
    if not veh then return end -- The usual error checking

    local data = {
        ["name"] = "Daniel W"
    }

    veh:queueLuaCommand("extensions.exampleVehicleExtension.onDataReceived('" .. jsonEncode(data) .. "')")
end

local function modifyMessage(message)
    message = message .. " [Modified!]"
    guihooks.trigger('MessageReady', message)
end

-- Export Interface
--------------------------------------------
M.onExtensionLoaded        = onExtensionLoaded
M.onExtensionUnloaded      = onExtensionUnloaded

M.onActionKeyDown          = onActionKeyDown
M.onVehicleExtensionLoaded = onVehicleExtensionLoaded
M.modifyMessage            = modifyMessage

--[[ Other functions could include:
      - onPreRender(dtReal, dtSim, dtRaw)
      - onUpdate(dtReal, dtSim, dtRaw)
      - onClientPreStartMission(levelPath)
      - onClientPostStartMission(levelPath)

    To find all of these, search the following in `BeamNG.Drive/lua`: `extensions.hook(`
--]]

return M
```

请注意，返回包含所需函数的M（模块）变量非常重要！例如，如果没有`M。modifyMessage = modifyMessage`行，`bngApi.engineLua(‘extensions.exampleMod. ’modifyMessage（' + $scope. '）message + ' ') ')`函数将无法找到modifyMessage（）函数

ui\modules\apps\ExampleApp\app.css

```css
#exampleAppContainer {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
}

#exampleAppContainer > * {
    margin: 0;
    padding: 0;
}
```

ui\modules\apps\ExampleApp\app.json

```json
{
  "domElement": "<example-app></example-app>",
  "name": "Example App",
  "types": [
    "ui.apps.categories.debug"
  ],
  "description": "example-app",
  "css": {
    "left": "0px",
    "height": "auto",
    "width": "270px",
    "min-width": "200px",
    "min-height": "90px",
    "top": "0px"
  },
  "author": "Daniel W",
  "version": "0.1",
  "directive": "exampleApp"
}
```

该指令需要与<b>Javascript</b>文件中的指令相同

# 车祸模拟器为图形界面应用程序提供的Javascript函数

```js
bngApi.engineLua("lua_path.function()")
```

用于运行带或不带参数的lua函数

# 车祸模拟器为图形界面应用程序提供的Lua函数

```lua
guihooks.trigger("EventName", Payload)
```

有效载荷可以是任何类型，但最好将其保留为数组/对象或字符串，以免丢失。

<b>IMPORTANT</b>：有时候，你使用的事件名称可能已经在内部被其他东西使用了，从而导致问题，因此，如果你的应用名为Nickel，那么最好将你的每个Angular事件命名为NKEventName，而不是EventName
