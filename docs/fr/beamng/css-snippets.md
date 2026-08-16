!!! warning "Ce site est en cours de construction !"

```
Ce site est actuellement en cours de développement.

Vous pensez pouvoir contribuer ? Cliquez simplement sur l'icône en forme de crayon située à droite de la page !

Vous pouvez également contribuer à n'importe quelle autre page.
```

# Extraits de code CSS pour BeamNG.drive

## Variables courantes

=== "Orange CEF de BeamNG"

````
```css
var(--bng-orange) /* Orange principale */
var(--bng-orange-shade1) /* 70 % d'opacité */
var(--bng-orange-shade2) /* 40 % d'opacité */
var(--bng-orange-shade1opaque)
var(--bng-orange-shade2opaque)
```
````

=== "Monochrome"

````
```css
--- Monochrome
var(--bng-black-8) /* 80 % d'opacité (équivalent à --bng-black-o8) */
var(--bng-black-6) /* 60 % d'opacité (équivalent à --bng-black-o6) */
var(--bng-black-4) /* 40 % d'opacité (équivalent à --bng-black-o4) */
var(--bng-black-2) /* 20 % d'opacité (équivalent à --bng-black-o2) */

var(--dark-neutral-grey)
var(--neutral-grey)
var(--light-neutral-grey)
var(--dark-grey)
var(--dark-grey-alpha) /* 80 % d'opacité */

var(--black-1) /* 70 % d'opacité */
var(--black-2) /* 40 % d'opacité (équivalent à --bng-black-o4) */

var(--white-1) /* 80 % d'opacité */
var(--white-2) /* 40 % d'opacité */
var(--white-3) /* 20 % d'opacité */
```
````

=== "Palette de couleurs de l'interface Vue de BeamNG"

Toutes ces variables permettent d'ajouter `-rgb` à la fin de leur nom afin d'obtenir directement les valeurs rouge, vert et bleu. Par exemple, `rgba(var(--bng-orange-500-rgb), 0.5)` permet d'utiliser `bng-orange-500` avec une opacité de 50 %.

=== "Rouge additionnel"

````
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
````

=== "Orange"

````
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
````

=== "Pêche secondaire"

````
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
````

=== "Jaune secondaire"

````
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
````

=== "Vert additionnel"

````
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
````

=== "Bleu ciel"

````
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
````

=== "Bleu additionnel"

````
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
````

=== "Bleu indigo"

````
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
````

=== "Magenta additionnel"

````
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
````

=== "Bleu-gris secondaire"

````
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
````

=== "Gris froid"

````
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
````

=== "Autres"

````
```css
var(--bng-off-black) /* Utilisé dans Vue pour les boutons et certains en-têtes */
var(--bng-off-white) /* Utilisé dans Vue pour les éléments interactifs */
var(--bng-off-white-brighter) /* Utilisé dans Vue pour les en-têtes */
```
````

=== "Préréglages de couleurs supplémentaires"

````
```css
var(--bng-filter-orange) /* Préréglage de filtre pour forcer les SVG à utiliser bng-orange */
var(--bng-black-o8) /* 80 % d'opacité */
var(--bng-black-o6) /* 60 % d'opacité */
var(--bng-black-o4) /* 40 % d'opacité */
var(--bng-black-o2) /* 20 % d'opacité */
```
````

=== "Préréglages d'arrondi des coins"

````
```css
var(--bng-corners-1) /* 0,25 rem */
var(--bng-corners-2) /* 0,50 rem */
var(--bng-corners-3) /* 1,00 rem */
```
````
