!!! warning "This site is under construction!"

    This site is being actively worked on. 
    
    Feel you could help? Please do by clicking on the page with a pencil on the right!

    This can be done any page too.
    
# BeamNG.drive ImGui Code Snippets

## Setup

### Setup ImGui

```lua
local im = ui_imgui
```

### Setup Window

```lua
im.SetNextWindowSize(im.ImVec2(366, 100), im.Cond_FirstUseEver)
```

### Create window

```lua
im.Begin("Window Title") -- Create window
im.End()
```

## General

=== Basic Formatting

    ```lua
    im.Text("")
    im.TextWrapped("") -- automatic word wrap
    im.TextColored(im.ImVec4(0,1,0,1), "") -- R,G,B,A
    im.TextDisabled("") -- predefined style for disabled text

    im.LabelText("", "")
    im.BulletText("") -- Bullet point with text
    im.SeparatorText("") -- Separator with centered text

    im.Separator() -- might want a NewLine before these
    im.SameLine() -- horizontally append the following element to the previous element
    im.NewLine()

    im.Spacing() -- small padding
    im.Indent()
    im.Unindent()
    ```

=== Inputs

    ```lua
    im.Button("", im.ImVec2(0,0)) -- 0 = fit to content
    im.SmallButton("") -- Fit to content and slightly less padding
    im.ArrowButton("", 0) -- arg 1: string is not actually used? arg 2: 0 = left, 1 = right, 2 = up, 3 = down
    im.InvisibleButton("", im.ImVec2(0,0), ...) -- used for imgui cursor positioning?

    im.Checkbox("", im.BoolPtr(false))

    im.RadioButton1("", im.BoolPtr(false))
    im.RadioButton2("", im.IntPtr(), 0) -- arg. 3: 0 or 1 for disabled or enabled
    ```

=== Other

    ```lua
    im.Bullet()

    im.ProgressBar(0.5, im.ImVec2(0,0), "") -- arg 2: 0 for default width and/or height

    im.TextUnformatted("", "") -- Second argument seems to crash the game
    ```
