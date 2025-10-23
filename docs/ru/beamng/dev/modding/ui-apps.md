# Создание UI-приложения

Для создания UI-приложения вам понадобятся некоторые знания фреймворка AngularJS, основную документацию можно найти здесь: [AngularJS docs](https://docs.angularjs.org/guide)

## Структура файла

Для работы UI-приложения необходимы четыре важных файла:

- app.js | Содержит основной код, используемый [документацией UI-приложения Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- app.html | Код, который отображает [HTML-документы](https://developer.mozilla.org/fr/docs/Web/HTML) вашего приложения
- app.json | Содержит информацию о UI-приложении
- app.png | Файл изображения, отображаемый в селекторе приложений

### Стиль UI-приложения

Мы рекомендуем использовать тег `<style>` для стилизации вашего приложения. Файл .css тоже подойдет, но вы не сможете видеть изменения в режиме реального времени.

## Пример

Этот пример от DanielW. Отдельная ему благодарность

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

Здесь вы можете увидеть тег `<span>` , отображающий передачу вашего транспортного средства, входные данные, используемые для отправки сообщения функции `sendMessage()` в Javascript, и повторяющийся тег `<li>` использующий <b>ng-repeat</b> для переменной `messages` , расположенной в Javascript.

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

Обратите внимание на использование <b>$scope{/b0} . Это очень важно, поскольку вам нужно будет определить переменные и функции в {b1}$scope</b> , чтобы иметь возможность доступа к ним из <b>Html</b> внутри любого тега <b>ng-*</b> . Таким образом, в этом примере после выполнения функции `sendMessage()` из <b>Html</b> она отправит его в файл lua, расположенный в каталоге расширений мода, и выполнит функцию `modifyMessage()` внутри этого файла lua.

Пример того, как может выглядеть сторона lua:

```lua
local function modifyMessage(message)
    message = message .. " [Modified!]"
    guihooks.trigger('MessageReady', message)
end
```

^ Это упрощенная версия lua, просто показывающая функцию.

Основное внимание здесь уделяется использованию <b>guihooks.trigger</b> , который запускает событие AngularJS, определенное с помощью `$scope.$on()` . Как вы можете видеть в самом низу файла Javascript, событие называется MessageReady и будет выполнено функцией <b>guihooks.trigger</b> с полезной нагрузкой сообщения, а затем будет помещено в переменную `$scope.messages` для отображения тегом li с помощью <b>ng-repeat</b> в файле <b>Html.</b>

Полный файл lua находится ниже

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

Обратите внимание, что очень важно вернуть переменную M (модуль) с необходимыми функциями внутри! Например, без строки `M.modifyMessage = modifyMessage` функция `bngApi.engineLua('extensions.exampleMod.modifyMessage("' + $scope.message + '")')` не сможет найти функцию modifyMessage()

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

Директива должна быть такой же, как в файле <b>Javascript.</b>

# Функции Javascript, предоставляемые BeamNG для UI-приложений

```js
bngApi.engineLua("lua_path.function()")
```

Полезно для запуска функции lua с аргументами или без них.

# Функции Lua, предоставляемые BeamNG для UI-приложений

```lua
guihooks.trigger("EventName", Payload)
```

Полезная нагрузка может быть любого типа, но лучше хранить ее в виде массива/объекта или строки, чтобы она не потерялась.

<b>ВАЖНО</b> : Иногда может случиться так, что имя события, которое вы используете, уже используется внутри чего-то другого, и это вызовет проблемы, поэтому, например, если ваше приложение называется Nickel, хорошей практикой будет называть каждое событие Angular как NKEventName вместо EventName.
