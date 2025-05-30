# Erstellen einer UI-App

Um eine UI-App zu erstellen, benötigst du einige Kenntnisse des AngularJS-Frameworks. Die Hauptdokumentation findest du hier: [AngularJS-Dokumente](https://docs.angularjs.org/guide)

## Dateistruktur

Eine UI-App braucht vier wichtige Dateien um zu funktionieren:

- app.js | Enthält den Hauptcode, welche die UI-App nutzt [Javascript docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- app.html | Der Code der deine App zeigt [Html docs](https://developer.mozilla.org/fr/docs/Web/HTML)
- app.json | Enthält die Information der UI-App
- app.png | Die Bild-Datei, welche im App-Selektor aufscheint

### UI-App Style

Wir empfehlen die Verwendung des `<style>` -Tags zum Stylen deiner  App. Eine CSS-Datei funktioniert zwar, aber du kannst die Änderungen nicht in Echtzeit sehen.

## Beispiel

Dieses Beispiel ist von DanielW. Danke an ihn.

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

Hier siehst du ein `<span>` -Tag, das den Gang deines Fahrzeugs anzeigt, eine Eingabe, die zum Senden einer Nachricht an die Funktion `sendMessage()` im Javascript verwendet wird und ein wiederholtes `<li>` -Tag, das <b>ng-repeat</b> für die Variable `messages` im Javascript verwendet.

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

Beachte die Verwendung von <b>$scope{/b0} . Dies ist sehr wichtig, da du deine Variablen und Funktionen innerhalb von {b1}$scope</b> definieren musst, um vom <b>HTML-Code</b> innerhalb eines <b>ng-*-</b> Tags darauf zugreifen zu können. In diesem Beispiel wird die Funktion `sendMessage()` nach der Ausführung vom <b>HTML-Code</b> an eine Lua-Datei im Erweiterungsverzeichnis des Mods gesendet und die Funktion `modifyMessage()` in dieser Lua-Datei ausgeführt.

Ein Beispiel wie die LUA Seite aussehen könnte:

```lua
local function modifyMessage(message)
    message = message .. " [Modified!]"
    guihooks.trigger('MessageReady', message)
end
```

^ Das ist eine vereinfachte Version der lua um die Funktionen zu zeigen

Der Schwerpunkt liegt hier auf der Verwendung von <b>guihooks.trigger</b> , das ein mit `$scope.$on()` definiertes AngularJS-Ereignis auslöst. Wie du ganz unten in der Javascript-Datei sehen kannst, heißt das Ereignis MessageReady und wird von der Funktion <b>guihooks.trigger</b> mit der Nachrichtennutzlast ausgeführt. Anschließend wird es in die Variable `$scope.messages` eingefügt, um vom li-Tag mit <b>ng-repeat</b> in der <b>HTML</b> -Datei angezeigt zu werden.

Die vollständige Lua-Datei befindet sich unten

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

Beachte , dass es sehr wichtig ist, die Variable M (Modul) mit den benötigten Funktionen zurückzugeben! Ohne die Zeile `M.modifyMessage = modifyMessage` kann die Funktion `bngApi.engineLua('extensions.exampleMod.modifyMessage("' + $scope.message + '")')` die Funktion modifyMessage() nicht finden.

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

Die Direktive muss gleich wie in der <b>Javascript</b> Datei sein.

# Javascript Funktionen bereitgestellt von BeamNG für UI-Apps

```js
bngApi.engineLua("lua_path.function()")
```

Hilfreich um eine lua Funktion ohne Argumente auszuführen.

# Lua Funktionen bereitgestellt von BeamNG für UI-Apps

```lua
guihooks.trigger("EventName", Payload)
```

Die Nutzlast kann von beliebigem Typ sein, aber es ist besser, sie als Array/Objekt oder Zeichenfolge beizubehalten, damit sie nicht verloren geht.

<b>WICHTIG</b> : Manchmal kann es vorkommen, dass der von dir verwendete Ereignisname intern bereits von etwas anderem verwendet wird und Probleme verursacht. Wenn deine App beispielsweise Nickel heißt, kann es eine gute Entscheidung sein, jedes deiner Angular-Ereignisse wie NKEventName anstelle von EventName zu benennen.
