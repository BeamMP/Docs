# UI-App Creation

In order to make a UI-App you will need some knowledge of the AngularJS framework, the main documentation can be found here: [AngularJS docs](https://docs.angularjs.org/guide)

## File structure

An UI-App need 4 important files to work :
- app.js | Contain the main code used by the UI-App [Javascript docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- app.html | The code that displays your app [Html docs](https://developer.mozilla.org/fr/docs/Web/HTML)
- app.json | Contains the information of the UI-App
- app.png | The image file showing in the app selector

### UI-App style
I recommend using the <style> tag to style your app, a .css file will work, but you will not be able to see the changes in real-time.

## Example

This example is from DanielW Thanks to him

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
Here, you can see a ``<span>`` tag displaying the gear of your vehicle, an input used to send a message to the ``sendMessage()`` function in the Javascript and a repeated ``<li>`` tag using <b>ng-repeat</b> on the ``messages`` variable located in the Javascript

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
The first things you see is the usage of <b>$scope</b>. This is very important because you will need to define your variables and functions within <b>$scope</b> to be able to access it from the <b>Html</b> inside any <b>ng-*</b> tag.
So in this example, after the ``sendMessage()`` function being executed from the <b>Html</b> it will send it to a lua file located in the extensions directory of the mod and execute the ``modifyMessage()`` function inside this lua file.

This lua function look like this :
```lua
local function modifyMessage(message)
    message = message .. " [Modified!]"
    guihooks.trigger('MessageReady', message)
end
```
^ This is a simplified version of the lua to just show the function

The main things here is the usage of <b>guihooks.trigger</b> which triggers an AngularJS event defined with ``$scope.$on()``. As you can see at the very bottom of the Javascript file the event is named MessageReady and will be executed by the <b>guihooks.trigger</b> function with the message payload and then will be pushed inside the ``$scope.messages`` variable to be displayed by the li tag using <b>ng-repeat</b> in the <b>Html</b> file

The full lua file is just below

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

Note that its very important to return the M (module) variable with the needed functions inside !
Example, without the ``M.modifyMessage = modifyMessage`` line, the ``bngApi.engineLua('extensions.exampleMod.modifyMessage("' + $scope.message + '")')`` function will not be able to find the modifyMessage() function


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
The directive need to be the same as in the <b>Javascript</b> file




# Javascript functions provided by BeamNG for UI-Apps

```js
bngApi.engineLua("lua_path.function()")
```
Usefull to run a lua function with or without arguments

# Lua functions provided by BeamNG for UI-Apps

```lua
guihooks.trigger("EventName", Payload)
```
The payload can be any types but its better to keep it as an Array / Object or a String to not be lost.

<b>IMPORTANT</b> : Sometime it can happen that the event name you use is already used internally by something else and cause problems, so for example if your app is named Nickel, it can be a good practice to name every of your Angular event like NKEventName instead of EventName

