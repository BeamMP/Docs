!!!警告“该网站正在建设当中！“

```
该网站仍在积极开发中。

觉得你能帮上忙？点击页面右侧的铅笔即可！

这也可以在任何页面上完成。
```

# BeamNG.drive 代码的片段

## Lua代码片段

### 世界

#### 绘制标记和车辆检测

在地图中绘制标记可能是向用户表明他们可以在那里进行某种形式的交互的最佳方式之一。

绘制标记相当容易。以下是如何绘制公交车路线标记的示例：

```lua
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

  -- this can then be called in a loop to setup your markers.
  -- NOTE: You should only do this once as part of your setup and not called on each frame.
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

以下是来自[BeamNG-FuelStations](https://github.com/BeamMP/BeamNG-FuelStations/tree/master)的自定义标记示例：

```lua
  local stations = [
    { "location": [ -778.813,  485.973, 23.46 ], "type":"gas" },
    { "location": [  617.164, -192.107, 53.2  ], "type":"ev"  },
  ]

  local function IsEntityInsideArea(pos1, pos2, radius)
    return pos1:distance(pos2) < radius
  end

  local onUpdate = function (dt)
    for k, spot in pairs(stations) do -- loop through all spots on the current map
      local bottomPos = vec3(spot.location[1], spot.location[2], spot.location[3])
      local topPos = bottomPos + vec3(0,0,2) -- offset vec to get top position (2m tall)

      local spotInRange = false -- is this spot in range? used for color
      local spotCompatible = false -- is this spot compatible?

      if activeVeh then -- we have a car and its ours (if in mp)
        local vehPos = activeVeh:getPosition()

        spotInRange = IsEntityInsideArea(vec3(vehPos.x, vehPos.y,vehPos.z), bottomPos, 1.5)

        spotCompatible = activeFuelType == "any" or spot.type == "any" or activeFuelType == spot.type
      end

      local spotColor = (spotInRange and spotCompatible) and activeColorMap[spot.type] or inactiveColorMap[spot.type] or ColorF(1,1,1,0.5)

      debugDrawer:drawCylinder(bottomPos:toPoint3F(), topPos:toPoint3F(), 1, spotColor) --bottom, top, radius, color
    end
  end
```

### 用户界面

#### 屏幕右上角弹出的通知

<figure class="image image_resized" style="width:75%" markdown="">   ![image](https://github.com/StanleyDudek/Docs/assets/49531350/c8a87842-b95a-4eca-84dc-93072ecc9158) </figure>

```lua
--guihooks.trigger('toastrMsg', {type, title, msg, config = {timeOut}})
guihooks.trigger('toastrMsg', {type = "info", title = "Info Message:", msg = "Info Message Text Here", config = {timeOut = 5000}})
guihooks.trigger('toastrMsg', {type = "warning", title = "Warning Message:", msg = "Warning Message Text Here", config = {timeOut = 5000}})
guihooks.trigger('toastrMsg', {type = "error", title = "Error Message:", msg = "Error Message Text Here", config = {timeOut = 5000}})
```

#### 消息通知，消息应用程序中默认位于屏幕左上角

这需要'Messages' 或 'Messages &amp; Tasks' UI 插件。图标文件可以在以下路径中找到 `ui\ui-vue\src\assets\fonts\bngIcons\svg这需要'Messages' 或 'Messages &amp; Tasks' UI 插件。图标文件可以在以下路径中找到

<figure class="image image_resized" style="width:75%" markdown="">   ![image](https://github.com/StanleyDudek/Docs/assets/49531350/6baef813-50cb-43c3-9c59-0de550b014b6) </figure>

```lua
--guihooks.trigger('Message', {msg, ttl, category, icon})
--ui_message(msg, ttl, category, icon)
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

#### 位于中心，大，小型短暂显示

<figure class="image image_resized" style="width:75%" markdown="">   ![image](https://github.com/StanleyDudek/Docs/assets/49531350/d0cf754f-83f8-4d15-9159-27350da127de) </figure>

<figure class="image image_resized" style="width:75%" markdown="">   ![image](https://github.com/StanleyDudek/Docs/assets/49531350/1df6fc9b-756f-484e-b8d9-5df346dc4c26) </figure>

```lua
--guihooks.trigger('ScenarioFlashMessage', {{msg, ttl, sound, big}} ) -- requires RaceCountdown ui app
guihooks.trigger('ScenarioFlashMessage', {{"Message", 5.0, 0, true}} )
guihooks.trigger('ScenarioFlashMessage', {{"Message Text Here", 5.0, 0, false}} )

--countdown example, when all executed at once, the items are queued and will follow eachother after the previous ttl expires
guihooks.trigger('ScenarioFlashMessage', {{"3", 1.0, "Engine.Audio.playOnce('AudioGui', 'event:UI_Countdown1')", true}})
guihooks.trigger('ScenarioFlashMessage', {{"2", 1.0, "Engine.Audio.playOnce('AudioGui', 'event:UI_Countdown2')", true}})
guihooks.trigger('ScenarioFlashMessage', {{"1", 1.0, "Engine.Audio.playOnce('AudioGui', 'event:UI_Countdown3')", true}})
guihooks.trigger('ScenarioFlashMessage', {{"GO!", 3.0, "Engine.Audio.playOnce('AudioGui', 'event:UI_CountdownGo')", true}})

--another sound example
guihooks.trigger('ScenarioFlashMessage', {{"Teleported!", 3.0, "Engine.Audio.playOnce('AudioGui', 'event:UI_Checkpoint')", false}})
```

#### 位于中心，中型持续显示

这需要 **“比赛实时显示 (Race Realtime Display)”** UI 插件。

<figure class="image image_resized" style="width:75%" markdown="">   ![image](https://github.com/StanleyDudek/Docs/assets/49531350/6290e018-6b3d-4674-98f2-34282a723258) </figure>

```lua
--guihooks.trigger('ScenarioRealtimeDisplay', {msg = msg} ) -- requires Race Realtime Display ui app
guihooks.trigger('ScenarioRealtimeDisplay', {msg = "Message Text Here"} )
--these messages persist, clear with a blank string
--if you are running live data, this is a good one to update rapidly (think timers, distance calcs, et cetera)
guihooks.trigger('ScenarioRealtimeDisplay', {msg = ""} )
```

#### Confirmation Dialog

ConfirmationDialog是一种简单的弹出窗口，最多支持两个按钮。

```lua
-- -- 打开一个包含标题、正文及最多两个按钮的Confirmation Dialog
guihooks.trigger("ConfirmationDialogOpen",
    "Example Title",
    "Example Body Text",
    "Okay",
    "", --gelua. empty string
    "Cancel",
    "" --gelua
)

-- 关闭任何具有指定标题且处于打开状态的确认对话框
guihooks.trigger("ConfirmationDialogClose", "Example Title")
```

<figure class="image image_resized" style="width:75%" markdown="">   ![ConfirmationDialog示例](../../assets/content/ConfirmationDialog.png) </figure>

按钮的两个字段都必须是字符串，该按钮才能正常显示。

如果提供了Okay按钮，按下 *确定 / 主要动作 (OK / Primary action)*按键的效果等同于点击确定按钮。

如果提供了Cancel按钮，按下*菜单 (Menu)*按键的效果等同于点击取消按钮。

支持HTML格式，例如可以用来添加图像或图标。

可以同时显示多个，并将按顺序依次呈现。

!!! bug

```
不提供任何按钮会导致玩家在不使用控制台的情况下无法退出该对话框。
```

!!! bug

```
当 **ConfirmationDialog**（确认对话框）处于活动状态时，小地图 (Minimap) UI 插件的 **SDF 部分** 依然保持可见。

可以使用 `#!lua guihooks.trigger('ShowApps', false)` 隐藏 UI 插件，作为一种临时性的补救方案。
```

<figure class="image image_resized" style="width:75%" markdown="">   ![ConfirmationDialog被用于挂机踢出系统的示例](../../assets/content/ConfirmationDialog_Example.png) </figure>

#### introPopupTutorial

introPopupTutorial 是一种高度可定制的弹出窗口，其内容主要由嵌入式 HTML 定义。标准做法是从位于`/gameplay/tutorials/pages/*/content.html`的独立 HTML 文件中进行加载。

```lua
guihooks.trigger("introPopupTutorial", {
    {
        content = readFile("/gameplay/tutorials/pages/template/content.html"):gsub("\r\n",""),
        flavour = "onlyOk"
    }
})

guihooks.trigger("introPopupClose")
```

<figure class="image image_resized" style="width:75%" markdown="">   ![在BeamNG.drive中显示的introPopupTutorial代码片段](../../assets/content/introPopupTutorial.png) </figure>

Flavours控制显示的按钮类型。共有四种预设模式：

- `withLogbook`
    - Buttons: Career Logbook, Okay
- `onlyOk`
    - Buttons: Okay
- `onlyLogbook`
    - Buttons: Career Logbook
- `noButtons`
    - Provides no buttons

!!! 警告

```
当页面使用noButtons模式时，如果页面内容中未提供用于关闭弹出窗口的额外 JavaScript 代码，则会导致软锁定。在这种模式下，多个页面不会合并到同一个弹出窗口中。因此，不建议使用该模式。
```

如果提供了多个页面，或者该hook被多次触发，这些页面将合并到同一个弹出窗口中。<br>如果在introPopup处于活动状态时触发钩子，或者已经触发了另一种类型的introPopup，则新内容将在现有弹出窗口关闭后，以独立的弹出窗口形式显示。

#### introPopupCareer

introPopupCareer是一种易于使用且具有高度开放性的弹出窗口，如有需要，它还支持嵌入 HTML 内容。

Flavours控制显示的按钮类型以及默认的图像宽高比。共有四种预设模式：

- `default`
    - Default image aspect ratio: 16x9
    - Buttons: Later, Okay
- `welcome`
    - Default image aspect ratio: 16x9
    - Buttons: Career Logbook, Okay
- `branch-info`
    - Default image aspect ratio: 16x9
    - Buttons: Career Logbook, Okay
- `garage`
    - Buttons: Later, Okay

```lua
guihooks.trigger("introPopupCareer", {
    {
        title   = "Example title",
        text    = "Example text",
        image   = "/gameplay/tutorials/pages/template/image.jpg",
        ratio   = "16x9",
        flavour = "default"
    }
})

guihooks.trigger("introPopupClose")
```

<figure class="image image_resized" style="width:75%" markdown="">   !在BeamNG.drive中显示的introPopupCareer代码片段](../../assets/content/introPopupCareer.png) </figure>

如果提供了多个页面，或者该hook被多次触发，这些页面将合并到同一个弹出窗口中。<br>如果在introPopup处于活动状态时触发了hook，或者已经触发了另一种类型的introPopup，则新内容将在当前弹出窗口关闭后，以独立的弹出窗口形式显示。

!!! bug

```
背景模糊具有最小高度限制，这会导致内容较短的弹出窗口下方出现多余的模糊区域。目前主要有两种规避方案：

* 重复输入 `\n` 并以 `#!html <div />` 结尾，直到窗口完全覆盖模糊区域。
* 使用空路径或缺失的 `image` 路径，并调整宽高比（Aspect Ratio），直到窗口覆盖模糊区域。
```

#### introPopupMission

introPopupMission与introPopupCareer几乎完全相同，但它需要手动定义按钮，而不是直接为按钮选择Flavour的预设模式。

按钮样式以 *bng-button-*`style` 的格式进行组合。内置的按钮样式包括：

- `main` - 橙色
- `secondary` - 青色
- `attention` - 红色
- `white` - 白色
- `link`  - 半透明
- `outline` - 橙色轮廓

```lua
guihooks.trigger('introPopupMission', {
    title   = "introPopupMission title",
    text    = "introPopupMission description",
    image   = "/gameplay/tutorials/pages/template/image.jpg",
    ratio   = "16x9",
    buttons = {
        { default=true,  class="main",      label="main button",      clickLua="" },
        { default=false, class="secondary", label="secondary button", clickLua="" },
        { default=false, class="attention", label="attention button", clickLua="" },
        { default=false, class="white",     label="white button",     clickLua="" },
        { default=false, class="link",      label="link button",      clickLua="" },
        { default=false, class="outline",   label="outline button",   clickLua="" }
    }
})

guihooks.trigger("introPopupClose")
```

<figure class="image image_resized" style="width:75%" markdown="">   ![在BeamNG.drive中显示的introPopupMission代码片段](../../assets/content/introPopupMission.png) </figure>

如果提供了多个页面，或者该hook被多次触发，这些页面将合并到同一个弹出窗口中。<br>如果在introPopup处于活动状态时触发了hook，或者已经触发了另一种类型的introPopup，则新内容将在当前弹出窗口关闭后，以独立的弹出窗口形式显示。

!!! bug

```
背景模糊具有最小高度限制，这会导致内容较短的弹出窗口在其窗口下方出现多余的模糊区域。目前主要有两种规避方案：

* 重复使用 `\n` 并以 `#!html <div />` 结尾，直到窗口高度足以覆盖模糊区域。
* 使用空路径或缺失的 `image` 路径，并调整宽高比（Aspect Ratio），直到窗口完全覆盖模糊区域。
```

#### Dialogue

Dialogue被用于*A Rocky Start*活动中，用于显示有关任务的信息。它是一个居中且垂直对齐的弹出窗口，具有特定的布局。它不支持嵌入 HTML。

```lua
ui_missionInfo.openDialogue({
    title    = "Dialogue title",
    type     = "Custom", -- isn't actually displayed
    typeName = "typeName",
    data     = {
        {label = "objective",  value = "reward"}
        -- add more...
    },
    buttons  = {
        {action = "accept", text = "Accept",  cmd = ""},
        {action = 'decline',text = "Decline", cmd = ""}
        -- add more...
    }
})

ui_missionInfo.closeDialogue()
```

<figure class="image image_resized" style="width:75%" markdown="">   ![在BeamNG.drive中显示的Dialogue代码片段](../../assets/content/Dialogue.png) </figure>

同时只能显示一个Dialogue。任何现有的Dialogue都会被直接覆盖。

!!! info

```
`#!lua ui_missionInfo.closeDialogue()` 必须使用该函数来关闭对话框。

请确保在按下任何按钮时都调用此函数。
```

## IMGUI代码片段

todo

## CEF UI代码片段

todo
