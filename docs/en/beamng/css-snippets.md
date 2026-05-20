!!! warning "This site is under construction!"

    This site is being actively worked on. 
    
    Feel you could help? Please do by clicking on the page with a pencil on the right!

    This can be done any page too.
    
# BeamNG.drive CSS Code Snippets

## Common variables

=== "BeamNG CEF Orange"

    ```css
    var(--bng-orange) /*Common orange*/
    var(--bng-orange-shade1) /*70% opacity*/
    var(--bng-orange-shade2) /*40% opacity*/
    var(--bng-orange-shade1opaque)
    var(--bng-orange-shade2opaque)
    ```

=== "Monochrome"

    ```css
    --- Monochrome
    var(--bng-black-8) /*80% opacity (duplicate --bng-black-o8)*/
    var(--bng-black-6) /*60% opacity (duplicate --bng-black-o6)*/
    var(--bng-black-4) /*40% opacity (duplicate --bng-black-o4)*/
    var(--bng-black-2) /*20% opacity (duplicate --bng-black-o2)*/

    var(--dark-neutral-grey)
    var(--neutral-grey)
    var(--light-neutral-grey)
    var(--dark-grey)
    var(--dark-grey-alpha) /*80% opacity*/

    var(--black-1) /*70% opacity*/
    var(--black-2) /*40% opacity (duplicate --bng-black-o4)*/

    var(--white-1) /*80% opacity*/
    var(--white-2) /*40% opacity*/
    var(--white-3) /*20% opacity*/
    ```

=== "BeamNG Vue UI Color Palette"

    All of these support adding `-rgb` to the end of the variable name to convert them to raw red, green, blue values. Use -rgb like so: `rgba(var(--bng-orange-500-rgb), 0.5)` for 50% opacity bng-orange-500.

    === "Add Red"

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
    
    === "Orange"

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
    
    === "Ter Peach"

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
    
    === "Ter Yellow"

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
    
    === "Add Green"

        ```css
        var(--bng-add-green-50)
        var(--bng-add-green-100)
        var(--bng-add-green-200)
        var(--bng-add-green-300)
        var(--bng-add-green-400)
        var(--bng-add-green-500)
        var(--bng-add-green-600)
        var(--bng-add-green-700)
        var(--bng-add-green-800)
        var(--bng-add-green-900)
        ```
    
    === "Baby Blue"

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
    
    === "Add Blue"

        ```css
        var(--bng-add-blue-50)
        var(--bng-add-blue-100)
        var(--bng-add-blue-200)
        var(--bng-add-blue-300)
        var(--bng-add-blue-400)
        var(--bng-add-blue-500)
        var(--bng-add-blue-600)
        var(--bng-add-blue-700)
        var(--bng-add-blue-800)
        var(--bng-add-blue-900)
        ```
    
    === "Indigo Blue"

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
    
    === "Add Magenta"

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
    
    === "Ter Blue Gray"

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

    === "Cool Gray"

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
    
    === "Other"

        ```css
        var(--bng-off-black) /*Used in Vue for buttons and some headers*/
        var(--bng-off-white) /*Used in Vue for interactable elements*/
        var(--bng-off-white-brighter) /*Used in Vue for headers*/
        ```
    
=== "Extra color presets"

    ```css
    var(--bng-filter-orange) /*Filter preset to force SVGs to use bng-orange*/
    var(--bng-black-o8) /*80% opacity*/
    var(--bng-black-o6) /*60% opacity*/
    var(--bng-black-o4) /*40% opacity*/
    var(--bng-black-o2) /*20% opacity*/
    ```

=== "Corner rounding presets"

    ```css
    var(--bng-corners-1) /*0.25rem*/
    var(--bng-corners-2) /*0.50rem*/
    var(--bng-corners-3) /*1.00rem*/
    ```
