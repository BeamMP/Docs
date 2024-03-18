¡¡¡ ADVERTENCIA !!! "¡Esta página está bajo construcción!"

```
Se está trabajando en este sitio.

¿Crees que puedes ayudar? Por favor, hazlo haciendo clic en la página con un lápiz a la derecha.

Esto puede ser hecho en cualquier página.
```

# Fragmentos de Código de BeamNG.drive

## Fragmentos de Código en Lua

### Dibujar un marcador y Detectar la posición del vehículo

Dibujar marcadores en el mapa puede ser una de las mejores maneras de indicarle al usuario que hay algún tipo de interacción que pueden realizar ahí.

Dibujar un marcador es bastante fácil. He aquí un ejemplo de cómo el marcador de la ruta del autobús es dibujado:

```Lua
  local function createBusMarker(markerName)
    local marker =  createObject('TSStatic')
    marker:setField('shapeName', 0, "art/shapes/interface/position_marker.dae")
    marker:setPosition(vec3(0, 0, 0))
    marker.scale = vec3(1, 1, 1)
    marker:setField('rotation', 0, '1 0 0 0')
    marker.useInstanceRenderData = true
    marker:setField('instanceColor', 0, '1 1 1 0')
    marker:setField('collisionType', 0, "Collision Mesh")
    marker:setField('decalType', 0, "Collision Mesh")
    marker:setField('playAmbient', 0, "1")
    marker:setField('allowPlayerStep', 0, "1")
    marker:setField('canSave', 0, "0")
    marker:setField('canSaveDynamicFields', 0, "1")
    marker:setField('renderNormals', 0, "0")
    marker:setField('meshCulling', 0, "0")
    marker:setField('originSort', 0, "0")
    marker:setField('forceDetail', 0, "-1")
    marker.canSave = false
    marker:registerObject(markerName)
    scenetree.MissionGroup:addObject(marker)
    return marker
  end

  -- esto puede ser llamado en bucle para configurar tus marcadores.
  -- NOTA: Sólo deberías hacer esto una vez como parte de tu configuración y no llamarlo cada fotograma.
  if #markers == 0 then
    for k,v in pairs(nameMarkers) do
      local mk = scenetree.findObject(v)
      if mk == nil then
        log('I', logTag,'Creating marker '..tostring(v))
        mk = createBusMarker(v)
        ScenarioObjectsGroup:addObject(mk.obj)
      end
      table.insert(markers, mk)
    end
  end
```

He aquí un ejemplo de un marcador personalizado de [BeamNG-FuelStations](https://github.com/BeamMP/BeamNG-FuelStations/tree/master):

```Lua
  local stations = [
    { "location": [ -778.813,  485.973, 23.46 ], "type":"gas" },
    { "location": [  617.164, -192.107, 53.2  ], "type":"ev"  },
  ]

  local function IsEntityInsideArea(pos1, pos2, radius)
    return pos1:distance(pos2) < radius
  end

  local onUpdate = function (dt)
    for k, spot in pairs(stations) do -- recorre en bucle todos los puntos del mapa actual
      local bottomPos = vec3(spot.location[1], spot.location[2], spot.location[3])
      local topPos = bottomPos + vec3(0,0,2) -- desplaza vec para obtener la posición superior (2m de altura)

      local spotInRange = false -- ¿este lugar está en el rango? usado para colores
      local spotCompatible = false -- ¿es este lugar compatible?

      if activeVeh then -- tenemos un coche y es nuestro (si se está en Multijugador)
        local vehPos = activeVeh:getPosition()

        spotInRange = IsEntityInsideArea(vec3(vehPos.x, vehPos.y,vehPos.z), bottomPos, 1.5)

        spotCompatible = activeFuelType == "any" or spot.type == "any" or activeFuelType == spot.type
      end

      local spotColor = (spotInRange and spotCompatible) and activeColorMap[spot.type] or inactiveColorMap[spot.type] or ColorF(1,1,1,0.5)

      debugDrawer:drawCylinder(bottomPos:toPoint3F(), topPos:toPoint3F(), 1, spotColor) --bottom, top, radius, color
    end
  end
```

### Ejemplos de guihooks

#### Notificaciones 'Toast', en la esquina derecha de la pantalla

![image](https://github.com/StanleyDudek/Docs/assets/49531350/c8a87842-b95a-4eca-84dc-93072ecc9158)

```lua
--guihooks.trigger('toastrMsg', {type, title, msg, config = {timeOut}})
guihooks.trigger('toastrMsg', {type = "info", title = "Info Message:", msg = "Info Message Text Here", config = {timeOut = 5000}})
guihooks.trigger('toastrMsg', {type = "warning", title = "Warning Message:", msg = "Warning Message Text Here", config = {timeOut = 5000}})
guihooks.trigger('toastrMsg', {type = "error", title = "Error Message:", msg = "Error Message Text Here", config = {timeOut = 5000}})
```

#### Mensajes de notificaciones, en la esquina izquierda de la pantalla de forma predeterminada, en la Aplicación de IU de Mensajes

![image](https://github.com/StanleyDudek/Docs/assets/49531350/6baef813-50cb-43c3-9c59-0de550b014b6)

```lua
--guihooks.trigger('Message', {msg, ttl, category, icon}) -- requiere la Aplicación de IU de Mensajes
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "arrow_upward", icon = "arrow_upward"})
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "arrow_downward", icon = "arrow_downward"})
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "flag", icon = "flag"})
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "check", icon = "check"})
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "check_circle", icon = "check_circle"})
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "warning", icon = "warning"})
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "error", icon = "error"})
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "directions_car", icon = "directions_car"})
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "star", icon = "star"})
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "timeline", icon = "timeline"})
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "save", icon = "save"})
guihooks.trigger('Message', {msg = "Message Text Here", ttl = 5.0, category = "settings", icon = "settings"})
```

#### Mensaje temporal grande o pequeño en el centro de la pantalla

![image](https://github.com/StanleyDudek/Docs/assets/49531350/d0cf754f-83f8-4d15-9159-27350da127de) ![image](https://github.com/StanleyDudek/Docs/assets/49531350/1df6fc9b-756f-484e-b8d9-5df346dc4c26)

```lua
--guihooks.trigger('ScenarioFlashMessage', {{msg, ttl, sound, big}} ) -- Requiere la Aplicación de IU de 'Cuenta atrás de la carrera'
guihooks.trigger('ScenarioFlashMessage', {{"Message", 5.0, 0, true}} )
guihooks.trigger('ScenarioFlashMessage', {{"Message Text Here", 5.0, 0, false}} )

-- ejemplo de cuenta atrás, cuando se ejecutan todos a la vez, los elementos se ponen en cola y se seguirán unos a otros después de que expire el ttl anterior
guihooks.trigger('ScenarioFlashMessage', {{"3", 1.0, "Engine.Audio.playOnce('AudioGui', 'event:UI_Countdown1')", true}})
guihooks.trigger('ScenarioFlashMessage', {{"2", 1.0, "Engine.Audio.playOnce('AudioGui', 'event:UI_Countdown2')", true}})
guihooks.trigger('ScenarioFlashMessage', {{"1", 1.0, "Engine.Audio.playOnce('AudioGui', 'event:UI_Countdown3')", true}})
guihooks.trigger('ScenarioFlashMessage', {{"GO!", 3.0, "Engine.Audio.playOnce('AudioGui', 'event:UI_CountdownGo')", true}})

-- otro sonido de ejemplo
guihooks.trigger('ScenarioFlashMessage', {{"Teleported!", 3.0, "Engine.Audio.playOnce('AudioGui', 'event:UI_Checkpoint')", false}})
```

#### Mensaje persistente mediano en el centro de la pantalla

![image](https://github.com/StanleyDudek/Docs/assets/49531350/6290e018-6b3d-4674-98f2-34282a723258)

```lua
--guihooks.trigger('ScenarioRealtimeDisplay', {msg = msg} ) -- Requiere la Aplicación de IU 'Visualización de carrera en tiempo real'
guihooks.trigger('ScenarioRealtimeDisplay', {msg = "Message Text Here"} )
--these messages persist, clear with a blank string
--if you are running live data, this is a good one to update rapidly (think timers, distance calcs, et cetera)
guihooks.trigger('ScenarioRealtimeDisplay', {msg = ""} )
```

## Ejemplos de Código de IMGUI

## Ejemplos de Código de CEF UI
