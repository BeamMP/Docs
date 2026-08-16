!!! warning "本页面正在建设中！"

```
本站点目前正处于积极开发与维护阶段。

觉得您可以提供帮助？请点击页面右侧的铅笔图标参与编辑！
此操作适用于站内的任何页面。
```

# BeamNG.drive ImGui Code 的片段

## 配置

### 配置 ImGui

```lua
local im = ui_imgui
```

### 配置 Window

```lua
im.SetNextWindowSize(im.ImVec2(366, 100), im.Cond_FirstUseEver)
```

### 创建 window

```lua
im.Begin("Window Title") -- Create window
im.End()
```

## 一般演示

=== 基本格式

```
```lua
im.Text("") -- 普通文本
im.TextWrapped("") -- 自动换行文本
im.TextColored(im.ImVec4(0,1,0,1), "") -- 彩色文本（参数为 R,G,B,A）
im.TextDisabled("") -- 禁用状态样式的文本（预设样式）

im.LabelText("", "") -- 带标签的文本
im.BulletText("") -- 带项目符号（圆点）的文本
im.SeparatorText("") -- 带中间文字的分隔线

im.Separator() -- 分隔线（在添加前可能需要换行）
im.SameLine() -- 将下一个元素水平附加到上一个元素之后
im.NewLine() -- 换行

im.Spacing() -- 微小间距（填充）
im.Indent() -- 缩进
im.Unindent() -- 取消缩进
```
```

=== 输入

```
```lua
im.Button("", im.ImVec2(0,0)) -- 按钮（0 = 自动适应内容大小）
im.SmallButton("") -- 小按钮（适应内容且内边距更小）
im.ArrowButton("", 0) -- 箭头按钮（参数1：字符串实际未被使用？参数2：0=左，1=右，2=上，3=下）
im.InvisibleButton("", im.ImVec2(0,0), ...) -- 不可见按钮（用于 ImGui 光标定位？）

im.Checkbox("", im.BoolPtr(false)) -- 复选框

im.RadioButton1("", im.BoolPtr(false)) -- 单选框 1
im.RadioButton2("", im.IntPtr(), 0) -- 单选框 2（参数3：0 或 1，分别代表禁用或启用状态）
```
```

=== 其他

```
```lua
im.Bullet()

im.ProgressBar(0.5, im.ImVec2(0,0), "") -- 进度条（参数 2：填 0 则使用默认宽度和/或高度）
im.TextUnformatted("", "") -- 非格式化文本（第二个参数似乎会导致游戏崩溃）
```
```
