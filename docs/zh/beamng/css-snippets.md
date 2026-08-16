!!! warning "本页面正在建设中！"

```
本站点目前正处于积极开发与维护阶段。

觉得您可以提供帮助？请点击页面右侧的铅笔图标参与编辑！
此操作适用于站内的任何页面。
```

# BeamNG.drive CSS Code 的片段

## 常见变量

=== "BeamNG CEF 橙"

```
```css
var(--bng-orange) /* 主橙色 */
var(--bng-orange-shade1) /* 70% 透明度 */
var(--bng-orange-shade2) /* 40% 透明度 */
var(--bng-orange-shade1opaque)
var(--bng-orange-shade2opaque)
```
```

=== "黑白灰"

```
```css
var(--bng-black-8) /* 80% 透明度（和 --bng-black-o8 重复）*/
var(--bng-black-6) /* 60% 透明度（和 --bng-black-o6 重复）*/
var(--bng-black-4) /* 40% 透明度（和 --bng-black-o4 重复）*/
var(--bng-black-2) /* 20% 透明度（和 --bng-black-o2 重复）*/

var(--dark-neutral-grey)
var(--neutral-grey)
var(--light-neutral-grey)
var(--dark-grey)
var(--dark-grey-alpha) /* 80% 透明度 */

var(--black-1) /* 70% 透明度 */
var(--black-2) /* 40% 透明度（和 --bng-black-o4 重复）*/

var(--white-1) /* 80% 透明度 */
var(--white-2) /* 40% 透明度 */
var(--white-3) /* 20% 透明度 */
```
```

=== "BeamNG Vue UI 配色"

```
所有这些颜色变量都支持在变量名末尾添加 `-rgb`，以转换为原始的红、绿、蓝（RGB）数值。

使用方式如下：

`rgba(var(--bng-orange-500-rgb), 0.5)`

例如，上述代码可以将 `bng-orange-500` 颜色设置为 50% 的透明度。

=== "Add Red（附加红）"

    ```css
    var(--bng-add-red-50)
    var(--bng-add-red-100)
    var(--bng-add-red-200)
    var(--bng-add-red-300)
    var(--bng-add-red-400)
    var(--bng-add-red-500)
    var(--bng-add-red-550)
    var(--bng-add-red-600)
    var(--bng-add-red-650)
    var(--bng-add-red-700)
    var(--bng-add-red-750)
    var(--bng-add-red-800)
    var(--bng-add-red-850)
    var(--bng-add-red-900)
    ```

=== "Orange（橙色）"

    ```css
    var(--bng-orange-50)
    var(--bng-orange-100)
    var(--bng-orange-200)
    var(--bng-orange-300)
    var(--bng-orange-400)
    var(--bng-orange-500)
    var(--bng-orange-550)
    var(--bng-orange-600)
    var(--bng-orange-650)
    var(--bng-orange-700)
    var(--bng-orange-750)
    var(--bng-orange-800)
    var(--bng-orange-850)
    var(--bng-orange-900)
    ```

=== "Ter Peach（三级桃色）"

    ```css
    var(--bng-ter-peach-50)
    var(--bng-ter-peach-100)
    var(--bng-ter-peach-200)
    var(--bng-ter-peach-300)
    var(--bng-ter-peach-400)
    var(--bng-ter-peach-500)
    var(--bng-ter-peach-550)
    var(--bng-ter-peach-600)
    var(--bng-ter-peach-650)
    var(--bng-ter-peach-700)
    var(--bng-ter-peach-750)
    var(--bng-ter-peach-800)
    var(--bng-ter-peach-850)
    var(--bng-ter-peach-900)
    ```

=== "Ter Yellow（三级黄色）"

    ```css
    var(--bng-ter-yellow-50)
    var(--bng-ter-yellow-100)
    var(--bng-ter-yellow-200)
    var(--bng-ter-yellow-300)
    var(--bng-ter-yellow-400)
    var(--bng-ter-yellow-500)
    var(--bng-ter-yellow-550)
    var(--bng-ter-yellow-600)
    var(--bng-ter-yellow-650)
    var(--bng-ter-yellow-700)
    var(--bng-ter-yellow-750)
    var(--bng-ter-yellow-800)
    var(--bng-ter-yellow-850)
    var(--bng-ter-yellow-900)
    ```

=== "Add Green（附加绿）"

    ```css
    var(--bng-add-green-50)
    var(--bng-add-green-100)
    var(--bng-add-green-200)
    var(--bng-add-green-300)
    var(--bng-add-green-400)
    var(--bng-add-green-500)
    var(--bng-add-green-550)
    var(--bng-add-green-600)
    var(--bng-add-green-650)
    var(--bng-add-green-700)
    var(--bng-add-green-750)
    var(--bng-add-green-800)
    var(--bng-add-green-850)
    var(--bng-add-green-900)
    ```

=== "Baby Blue（浅蓝）"

    ```css
    var(--bng-add-babyblue-50)
    var(--bng-add-babyblue-100)
    var(--bng-add-babyblue-200)
    var(--bng-add-babyblue-300)
    var(--bng-add-babyblue-400)
    var(--bng-add-babyblue-500)
    var(--bng-add-babyblue-550)
    var(--bng-add-babyblue-600)
    var(--bng-add-babyblue-650)
    var(--bng-add-babyblue-700)
    var(--bng-add-babyblue-750)
    var(--bng-add-babyblue-800)
    var(--bng-add-babyblue-850)
    var(--bng-add-babyblue-900)
    ```

=== "Add Blue（附加蓝）"

    ```css
    var(--bng-add-blue-50)
    var(--bng-add-blue-100)
    var(--bng-add-blue-200)
    var(--bng-add-blue-300)
    var(--bng-add-blue-400)
    var(--bng-add-blue-500)
    var(--bng-add-blue-550)
    var(--bng-add-blue-600)
    var(--bng-add-blue-650)
    var(--bng-add-blue-700)
    var(--bng-add-blue-750)
    var(--bng-add-blue-800)
    var(--bng-add-blue-850)
    var(--bng-add-blue-900)
    ```

=== "Indigo Blue（靛蓝）"

    ```css
    var(--bng-add-indigoblue-50)
    var(--bng-add-indigoblue-100)
    var(--bng-add-indigoblue-200)
    var(--bng-add-indigoblue-300)
    var(--bng-add-indigoblue-400)
    var(--bng-add-indigoblue-500)
    var(--bng-add-indigoblue-550)
    var(--bng-add-indigoblue-600)
    var(--bng-add-indigoblue-650)
    var(--bng-add-indigoblue-700)
    var(--bng-add-indigoblue-750)
    var(--bng-add-indigoblue-800)
    var(--bng-add-indigoblue-850)
    var(--bng-add-indigoblue-900)
    ```

=== "Add Magenta（附加品红）"

    ```css
    var(--bng-add-magenta-50)
    var(--bng-add-magenta-100)
    var(--bng-add-magenta-200)
    var(--bng-add-magenta-300)
    var(--bng-add-magenta-400)
    var(--bng-add-magenta-500)
    var(--bng-add-magenta-550)
    var(--bng-add-magenta-600)
    var(--bng-add-magenta-650)
    var(--bng-add-magenta-700)
    var(--bng-add-magenta-750)
    var(--bng-add-magenta-800)
    var(--bng-add-magenta-850)
    var(--bng-add-magenta-900)
    ```

=== "Ter Blue Gray（三级蓝灰）"

    ```css
    var(--bng-ter-blue-gray-50)
    var(--bng-ter-blue-gray-100)
    var(--bng-ter-blue-gray-200)
    var(--bng-ter-blue-gray-300)
    var(--bng-ter-blue-gray-400)
    var(--bng-ter-blue-gray-500)
    var(--bng-ter-blue-gray-550)
    var(--bng-ter-blue-gray-600)
    var(--bng-ter-blue-gray-650)
    var(--bng-ter-blue-gray-700)
    var(--bng-ter-blue-gray-750)
    var(--bng-ter-blue-gray-800)
    var(--bng-ter-blue-gray-850)
    var(--bng-ter-blue-gray-900)
    ```

=== "Cool Gray（冷灰）"

    ```css
    var(--bng-cool-gray-50)
    var(--bng-cool-gray-100)
    var(--bng-cool-gray-200)
    var(--bng-cool-gray-300)
    var(--bng-cool-gray-400)
    var(--bng-cool-gray-500)
    var(--bng-cool-gray-550)
    var(--bng-cool-gray-600)
    var(--bng-cool-gray-650)
    var(--bng-cool-gray-700)
    var(--bng-cool-gray-750)
    var(--bng-cool-gray-800)
    var(--bng-cool-gray-850)
    var(--bng-cool-gray-900)
    ```

=== "Other（其他）"

    ```css
    var(--bng-off-black) /* 在 Vue 中用于按钮和部分标题 */
    var(--bng-off-white) /* 在 Vue 中用于可交互元素 */
    var(--bng-off-white-brighter) /* 在 Vue 中用于标题 */
    ```
```

=== "额外颜色预设"

```
```css
var(--bng-filter-orange) /* 滤镜预设，强制 SVG 用主橙色 */
var(--bng-black-o8) /* 80% 透明度 */
var(--bng-black-o6) /* 60% 透明度 */
var(--bng-black-o4) /* 40% 透明度 */
var(--bng-black-o2) /* 20% 透明度 */
```
```

=== "圆角预设"

```
```css
var(--bng-corners-1) /* 0.25rem */
var(--bng-corners-2) /* 0.50rem */
var(--bng-corners-3) /* 1.00rem */
```
```
