!!! warning "本页面正在建设中!"

```
本站点目前正处于积极开发与维护阶段。

觉得您可以提供帮助？请点击页面右侧的铅笔图标参与编辑！
此操作适用于站内的任何页面。

#创建 ImGui 窗口
```

本页将介绍如何创建一个基础的 ImGui 窗口。

## 设置

在开始使用 ImGui 之前，需要进行一些基础设置：

```lua
local im = ui_imgui -- 缩写以避免频繁查找。这有助于性能优化
local imguiExampleWindowOpen = im.BoolPtr(true)
```

`imguiExampleWindowOpen` 将用于决定该示例窗口是否应当进行渲染。

## 窗口渲染

ImGui 窗口及其内容必须在每一个需要显示的帧中重新创建。这意味着，若要使用 ImGui，必须通过某种形式的onUpdate函数来实现。

```lua
local function onUpdate()
	if worldReadyState == 2 then
		if imguiExampleWindowOpen[0] == true then
			imguiExample()
		end
	end
end
M.onUpdate = onUpdate
```

只要关卡已完全加载，且示例窗口处于应当显示的状态，这段代码就会运行一个函数来创建该示例窗口。

## 窗口内容

如果您是初次编写 ImGui，可以把ImGui看作 HTML 的亲戚：

- `im.SetNextWindowSize(im.ImVec2(x, y), im.Cond_FirstUseEver)` 用于在尚未定义视口尺寸的情况下，对其进行初始化定义。
- `im.Begin()` 和 `im.End()`相当于你的 `<body>` 和 `</body>`
- `im.Text()` 相当于你的 `<p></p>`

```lua
local buttonPresses = 0

local function imguiExample()
	im.SetNextWindowSize(im.ImVec2(366, 100), im.Cond_FirstUseEver) -- 准备窗口尺寸
	im.Begin("Hello World, I am a window") -- 创建一个标题为“Hello World, I am a window”的窗口
		im.Indent() -- 缩进元素（类似于内边距）
			im.Text("Hello World, I am text.") -- 添加一行文本，类似于 <p> 标签
			im.SameLine() -- 与 HTML 不同，这会将下一个元素附加到上一个元素的同一行
			if im.Button("The Hello World Button") then -- 类似于 <button>。点击时运行 Lua 代码
				buttonPresses = buttonPresses + 1
			end
			if buttonPresses > 0 then
				im.Text("The Hello World Button has been pressed " .. buttonPresses .. " times!")
			else
				im.Text("The Hello World Button has not been pressed.")
			end
		im.Unindent() -- 结束缩进
	im.End() -- 完成“画布”以便进行渲染
end
```

您可以添加以下函数，以便轻松切换窗口的可见性：

```lua
local function toggleExampleImgui()
	imguiExampleWindowOpen[0] = not imguiExampleWindowOpen[0]
end
```

## 结果

<figure class="image image_resized" style="width:100%" markdown="">   ![演示游戏内使用的 ImGui 示例代码](../../../../assets/content/imguiExample.png) </figure>

当The Hello World Button按钮被按下时，其下方的计数器将更新，并显示The Hello World Button按钮被按下的次数。

## 下载

本教程几乎完全基于 [StanleyDudek](https://github.com/StanleyDudek) 的 ImGui 示例模组（Mod）。您可以从[此处](../../../../assets/content/imguiExample.zip)下载该示例模组。
