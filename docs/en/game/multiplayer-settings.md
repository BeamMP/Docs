# Mutliplayer Settings

## **1. General**

??? setting "Show advanced options"

    If enabled, you will see all multiplayer settings

    If disabled, you will see only basic multiplayer settings

??? setting "Enable config cloning protection"

    If enabled, your spawned vehicle config will be protected from other players saving it

    If disabled, your spawned vehicle config can be saved by other players

??? setting "Disable pausing caused by instabilities"

    If enabled, physics instabilities will not cause your game to pause

    If disabled, physics instabilities will cause your game to pause

    !!! note ""

        Its advised to leave disabled, since repeated instabilities can cause the game to crash

??? setting "Use simplified vehicles when available"

    If enabled, the game will replace vehicles of other players with their simplified versions (from AI traffic) if available

    If disabled, the game will use the intended vehicle models

??? setting "New chat menu"

    If enabled, the ingame chat will be displayed in an [IMGUI](https://github.com/ocornut/imgui) window, that for example can be dragged out of the game onto another monitor

    If disabled, the ingame chat will be displayed in the UI app

    !!! note ""

        Dragging IMGUI windows out of the main game window can cause performance issues, as well as trick screen recording software into recording the chat window instead of the main game window

??? setting "Enable vehicle position smoothing"

    If enabled, beamMP will use an algorithm to smooth vehicle position updates to regular intervalls. Can be beneficial between players with high ping or when a connection experiences a high package drop rate

    If disabled, beamMP will update vehicle locations as they are received

??? setting "Skip the mod security warning popusp"

    If enabled, the mod security popup will not be shown when trying to connect to a server with mods

    If disabled, the mod security popup will be shown when trying to connect to a server with mods the first time

??? setting "Enable player vehicle update/edit queuing"

    If enabled, other players vehicle spawns and edits will be put into a queue. See the section `2. Event queue` for further details

    If disabled, other players vehicle spawns and edits will be loaded by the game instantly

??? setting "Enable automatic part sync"

    If enabled, your vehicles parts will automatically be synced to other players after a few seconds

    If disbaled, you need to click the part sync button in the part picker in order to send a sync out to other players

??? setting "Disable switching to other players vehicles"

    If enabled, tabbing trough vehicles will skip other players vehicles

    If disabled, tabbing trough vehicles will cycle over every spawned vehicle

??? setting "Fade out vehicles as they get closer"

    If enabled, other vehicles will fade out as they get closer

    If disbaled, other vehicles will stay fully visible regardless of distance

    !!! note ""

        This only affects the visible 3d mesh of a vehicle, not its physics node-beam-mesh. In order to also disable physics, you need to enable `Simplified collision physics` in the Gameplay settings

??? setting "Show the player ID`s"

    If enabled, the ingame playerlist will have an additional row showing each players ID. Useful for development or moderation

    If disabled, the ingame playerlist will only show the rows for playername and ping

??? setting "Allow the serverlist to refresh ingame"

    If enabled, the serverlist will update in regular intervalls while playing. This can cause lag spikes

    If disabled, the serverlist will only update once you open the main menu

## **2. Event queue**

??? setting "Highlight queued players"

    If enabled, players with a queued event will be highlighted in the ingame playerlist

    If disabled, players will not be individually highlighted

??? setting "Apply vehicle changes with"

    If set to `Left mouse button`, clicking on a players name in the playerlist using the left mouse button will load the queued events. Clicking with the right mouse button will spectate said player

    If set to `Right mouse button`, clicking on a players name in the playerlist using the right mouse button will load the queued events. Clicking with the left mouse button will spectate said player

??? setting "Automatically apply queued vehicle changes"

    If enabled, the queued events will be automatically loaded once `Queue apply speed treshold` was not surpassed for `Queue apply timeout`

    If disabled, the queued events will only load manually, by clicking on either the `Events` button at the top of the screen or on a players name in the playerlist

??? setting "Queue apply speed treshold"

    This setpoint defines the speed treshold of the automatic event queue loading. Your vehicle has to be slower than this for longer than `Queue apply timeout` in order to load the queued events

??? setting "Queue apply timeout"

    This setpoint defines the time delay of the automatic event queue loading. Your vehicle has to be slower than `Queue apply speed treshold` for this time in order to load the queued events

??? setting "Skip queue if spectating others"

    If enabled, an event will instantly load if you are spectating another player

    If disabled, an event will be queued just like it would when focused on your own vehicle

??? setting "Don't queue Unicycles (Snowmen/Beamlings)"

    If enabled, an event concerning a snowmen/beamling will be loaded instantly

    If disabled, snowmen/beamlings will be queued just like other vehicles

## **3. Set default Unicycle**

??? setting "Default Unicycle config"

    This setpoint defines the unicycle variant to be loaded by default. You can choose between premade configs and your own should you have saved custom unicycle configs

??? setting "Automatically save your last used Unicycle"

    If enabled, your last used unicycle will be automatically saved and reloaded once you spawn it again

    If disabled, your default unicycle config will spawn every time

## **4. Blobs**

??? setting "Enable blobs for unspawned vehicles"

    If enabled, you will see a placeholder orb, or blob, in place of an unspawned vehicle

    If disabled, an unspawned vehicle will be invisible

??? setting "Tune colors"

    ??? setting "Visible"

        If enabled, a blob will be drawn, using the color below

        If disabled, no blob will be drawn for the specified function

    ??? setting "RGB HEX values"

        Queued vehicle: The color a blob will use if a vehicle is queued for spawning. Standard value #FF6400

        Illegal vehicle: The color a blob will use if a vehicle is illegal, for example trough a mod that was sideloaded. Standard value #000000

        Deleted vehicle: The color a blob will use if a vehicle was deleted by the user. Standard value #333333

## **5. Nametags**

??? setting "Hide player nametags"

    If enabled, player nametags will not be drawn

    If disabled, player nametags will be drawn according to their vehicles relative position

??? setting "Show distance from other players"

    If enabled, the nametag will be prepended by the distance to the respective vehicle

    If disabled, no additional distance will be shown in the nametag

??? setting "Fade nametags in/out"

    If enabled, a nametag will be faded in/out according to `Fade distance` and `Invert nametag fade direction`

    If disabled, anametag will be drawn at standard opacity regardless of distance to the respective vehicle

??? setting "Fade distance/Invert nametag fade direction"

    ??? setting "Fade out"

        `Fade distance` defines the distance at which a nametag will be drawn at minimal opacity. The opacity level is gradually increased over that distance, getting more visible the closer a vehicle gets

    ??? setting "Fade in"

        `Fade distance` defines the distance at which a nametag will be drawn at maximal opacity. The opacity level is gradually decreased over that distance, getting less visible the closer a vehicle gets

??? setting "Don't fully hide nametags"

    If enabled, a nametag can not get fully invisible, it will retain a minimal opacity regardless of distance

    If disabled, nametags can get fully invisble

??? setting "Shorten nametag and role tags"

    If enabled, `Nametag length limit` will truncate nametags and roles to the set limit of characters

    If disabled, nametag and role tags will be shown at full length

??? setting "Show spectators' nametag under vehicle nametags"
