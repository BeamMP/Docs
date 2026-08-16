!!! warning "Ce site est en cours de construction !"

```
Ce site est actuellement en cours de développement.

Vous pensez pouvoir contribuer ? N'hésitez pas à le faire en cliquant sur l'icône en forme de crayon située à droite de la page !

Vous pouvez également proposer des modifications sur n'importe quelle page.
```


# Extraits de code Lua pour BeamNG.drive

!!! warning "Ce site est en cours de construction !"

```
Ce site est actuellement en cours de développement.

Vous pensez pouvoir aider ? N'hésitez pas à le faire en cliquant sur l'icône représentant un crayon à droite de la page !

Vous pouvez le faire sur n'importe quelle page.
```

## Monde

### Dessiner un marqueur et détecter un véhicule

Dessiner des marqueurs sur la carte peut être un excellent moyen d'indiquer au joueur qu'une interaction est possible à cet endroit.

Créer un marqueur est relativement simple. Voici un exemple basé sur le marqueur utilisé pour les lignes de bus :

```lua
local function createBusMarker(markerName)
  local marker = createObject('TSStatic')
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

-- Peut ensuite être appelé dans une boucle pour configurer vos marqueurs.
-- REMARQUE : vous ne devez effectuer cette opération qu'une seule fois
-- lors de l'initialisation et non à chaque image/frame.
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

Voici un exemple de marqueur personnalisé provenant de **BeamNG-FuelStations** :

```lua
local stations = [
  { "location": [ -778.813,  485.973, 23.46 ], "type":"gas" },
  { "location": [  617.164, -192.107, 53.2  ], "type":"ev"  },
]

local function IsEntityInsideArea(pos1, pos2, radius)
  return pos1:distance(pos2) < radius
end

local onUpdate = function (dt)
  for k, spot in pairs(stations) do -- Parcourt tous les emplacements sur la carte actuelle
    local bottomPos = vec3(spot.location[1], spot.location[2], spot.location[3])
    local topPos = bottomPos + vec3(0,0,2) -- Décalage vertical pour obtenir une hauteur de 2 m

    local spotInRange = false -- Le véhicule est-il à portée ? Utilisé pour la couleur
    local spotCompatible = false -- Cet emplacement est-il compatible ?

    if activeVeh then -- Nous avons un véhicule et il nous appartient (en multijoueur)
      local vehPos = activeVeh:getPosition()

      spotInRange = IsEntityInsideArea(vec3(vehPos.x, vehPos.y,vehPos.z), bottomPos, 1.5)

      spotCompatible = activeFuelType == "any" or spot.type == "any" or activeFuelType == spot.type
    end

    local spotColor = (spotInRange and spotCompatible) and activeColorMap[spot.type] or inactiveColorMap[spot.type] or ColorF(1,1,1,0.5)

    debugDrawer:drawCylinder(bottomPos:toPoint3F(), topPos:toPoint3F(), 1, spotColor) -- bas, haut, rayon, couleur
  end
end
```

---

# Interface utilisateur

## Notifications Toast — en haut à droite de l'écran

```lua
-- guihooks.trigger('toastrMsg', {type, title, msg, config = {timeOut}})
guihooks.trigger('toastrMsg', {
  type = "info",
  title = "Info Message:",
  msg = "Info Message Text Here",
  config = {timeOut = 5000}
})

guihooks.trigger('toastrMsg', {
  type = "warning",
  title = "Warning Message:",
  msg = "Warning Message Text Here",
  config = {timeOut = 5000}
})

guihooks.trigger('toastrMsg', {
  type = "error",
  title = "Error Message:",
  msg = "Error Message Text Here",
  config = {timeOut = 5000}
})
```

---

## Notifications — en haut à gauche par défaut dans l'application Messages

Cela nécessite l'application UI **« Messages »** ou **« Messages & Tasks »**.

Les icônes se trouvent dans :

```text
ui\ui-vue\src\assets\fonts\bngIcons\svg\
```

```lua
-- guihooks.trigger('Message', {msg, ttl, category, icon})
-- ui_message(msg, ttl, category, icon)

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "arrow_upward",
  icon = "arrow_upward"
})

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "arrow_downward",
  icon = "arrow_downward"
})

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "flag",
  icon = "flag"
})

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "check",
  icon = "check"
})

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "check_circle",
  icon = "check_circle"
})

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "warning",
  icon = "warning"
})

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "error",
  icon = "error"
})

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "directions_car",
  icon = "directions_car"
})

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "star",
  icon = "star"
})

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "timeline",
  icon = "timeline"
})

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "save",
  icon = "save"
})

guihooks.trigger('Message', {
  msg = "Message Text Here",
  ttl = 5.0,
  category = "settings",
  icon = "settings"
})
```

---

## Affichage central temporaire — grand ou petit

```lua
-- guihooks.trigger('ScenarioFlashMessage', {{msg, ttl, sound, big}})
-- nécessite l'application UI RaceCountdown

guihooks.trigger('ScenarioFlashMessage', {{"Message", 5.0, 0, true}})
guihooks.trigger('ScenarioFlashMessage', {{"Message Text Here", 5.0, 0, false}})
```

### Exemple de compte à rebours

Lorsque tous les messages sont exécutés immédiatement, ils sont placés dans une file d'attente et affichés les uns après les autres une fois que la durée (`ttl`) du précédent est écoulée.

```lua
guihooks.trigger('ScenarioFlashMessage', {{
  "3",
  1.0,
  "Engine.Audio.playOnce('AudioGui', 'event:UI_Countdown1')",
  true
}})

guihooks.trigger('ScenarioFlashMessage', {{
  "2",
  1.0,
  "Engine.Audio.playOnce('AudioGui', 'event:UI_Countdown2')",
  true
}})

guihooks.trigger('ScenarioFlashMessage', {{
  "1",
  1.0,
  "Engine.Audio.playOnce('AudioGui', 'event:UI_Countdown3')",
  true
}})

guihooks.trigger('ScenarioFlashMessage', {{
  "GO!",
  3.0,
  "Engine.Audio.playOnce('AudioGui', 'event:UI_CountdownGo')",
  true
}})
```

### Autre exemple avec un son

```lua
guihooks.trigger('ScenarioFlashMessage', {{
  "Teleported!",
  3.0,
  "Engine.Audio.playOnce('AudioGui', 'event:UI_Checkpoint')",
  false
}})
```

---

## Affichage central permanent de taille moyenne

Cela nécessite l'application UI **« Race Realtime Display »**.

```lua
-- guihooks.trigger('ScenarioRealtimeDisplay', {msg = msg})
-- nécessite l'application UI Race Realtime Display

guihooks.trigger('ScenarioRealtimeDisplay', {
  msg = "Message Text Here"
})

-- Ces messages restent affichés.
-- Pour les supprimer, envoyez une chaîne vide.

guihooks.trigger('ScenarioRealtimeDisplay', {
  msg = ""
})
```

Ce système est particulièrement pratique pour afficher des informations mises à jour régulièrement, comme :

* un chronomètre ;
* une distance ;
* une vitesse ;
* un compteur ;
* des données en temps réel.

---

# Boîte de dialogue de confirmation

`ConfirmationDialog` est une fenêtre contextuelle simple pouvant contenir jusqu'à **deux boutons**.

```lua
-- Ouvre une ConfirmationDialog avec un titre,
-- un texte et jusqu'à deux boutons.

guihooks.trigger(
  "ConfirmationDialogOpen",
  "Example Title",
  "Example Body Text",
  "Okay",
  "", -- gelua
  "Cancel",
  "" -- gelua
)

-- Ferme une ConfirmationDialog ouverte avec le titre fourni.

guihooks.trigger(
  "ConfirmationDialogClose",
  "Example Title"
)
```

Les deux paramètres d'un bouton doivent être des chaînes de caractères pour que le bouton soit affiché.

Si le bouton **OK** est fourni, l'action **OK / Action principale** est équivalente à l'appui sur ce bouton.

Si le bouton **Cancel** est fourni, l'action **Menu** est équivalente à l'appui sur ce bouton.

Le HTML est pris en charge et peut notamment être utilisé pour ajouter des images ou des icônes.

Plusieurs dialogues peuvent être affichés ; ils seront alors affichés **les uns après les autres**.

!!! bug

```
Ne fournir aucun bouton empêche le joueur de quitter la boîte de dialogue sans utiliser la console.
```

!!! bug

```
Les éléments SDF de l'application UI Minimap restent visibles lorsqu'une ConfirmationDialog est active.

Une solution de contournement consiste à utiliser :
```

```lua
guihooks.trigger('ShowApps', false)
```

---

# `introPopupTutorial`

`introPopupTutorial` est une fenêtre contextuelle hautement personnalisable, principalement définie à l'aide de HTML intégré.

Il est courant de charger le contenu depuis un fichier HTML indépendant situé dans :

```text
/gameplay/tutorials/pages/*/content.html
```

Exemple :

```lua
guihooks.trigger("introPopupTutorial", {
  {
    content = readFile(
      "/gameplay/tutorials/pages/template/content.html"
    ):gsub("\r\n",""),
    flavour = "onlyOk"
  }
})

guihooks.trigger("introPopupClose")
```

Le paramètre `flavour` détermine quels boutons sont affichés.

Il existe quatre variantes :

| Variante      | Boutons            |
| ------------- | ------------------ |
| `withLogbook` | Career Logbook, OK |
| `onlyOk`      | OK                 |
| `onlyLogbook` | Career Logbook     |
| `noButtons`   | Aucun bouton       |

!!! warning

```
Avec la variante `noButtons`, si aucun JavaScript supplémentaire n'est présent dans la page pour fermer la fenêtre, le joueur peut rester bloqué.

Les pages ne sont pas regroupées dans une seule fenêtre avec cette variante. Son utilisation n'est donc pas recommandée.
```

Si plusieurs pages sont fournies, ou si le hook est appelé plusieurs fois, les pages sont regroupées dans la même fenêtre.

Si le hook est appelé alors qu'un `introPopup` est déjà actif, ou qu'un autre type d'`introPopup` a déjà été déclenché, le nouveau popup sera affiché séparément après la fermeture du précédent.

---

# `introPopupCareer`

`introPopupCareer` est une fenêtre contextuelle facile à utiliser et très flexible, qui permet également d'intégrer du HTML si nécessaire.

Le paramètre `flavour` détermine les boutons affichés ainsi que le rapport d'aspect par défaut de l'image.

Il existe quatre variantes :

### `default`

* Rapport d'aspect par défaut : `16x9`
* Boutons : **Later**, **Okay**

### `welcome`

* Rapport d'aspect par défaut : `16x9`
* Boutons : **Career Logbook**, **Okay**

### `branch-info`

* Rapport d'aspect par défaut : `16x9`
* Boutons : **Career Logbook**, **Okay**

### `garage`

* Boutons : **Later**, **Okay**

Exemple :

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

Comme avec `introPopupTutorial`, plusieurs pages peuvent être regroupées dans le même popup.

Si un popup est déjà actif, un nouveau popup sera affiché après la fermeture du précédent.

!!! bug

```
Le flou d'arrière-plan possède une hauteur minimale. Les fenêtres contenant peu de contenu peuvent donc avoir une zone de flou inutilement grande sous leur fenêtre.
```

Deux solutions de contournement principales existent :

* répéter `\n` et terminer avec `<div />` jusqu'à ce que la fenêtre couvre correctement le flou ;
* utiliser une image vide ou inexistante et ajuster le rapport d'aspect jusqu'à ce que la fenêtre couvre correctement le flou.

---

# `introPopupMission`

`introPopupMission` est très similaire à `introPopupCareer`, mais contrairement à celui-ci, les boutons doivent être définis manuellement.

Les styles des boutons sont construits avec :

```text
bng-button-{style}
```

Styles disponibles :

| Style       | Apparence      |
| ----------- | -------------- |
| `main`      | Orange         |
| `secondary` | Cyan           |
| `attention` | Rouge          |
| `white`     | Blanc          |
| `link`      | Translucide    |
| `outline`   | Contour orange |

Exemple :

```lua
guihooks.trigger('introPopupMission', {
  title   = "introPopupMission title",
  text    = "introPopupMission description",
  image   = "/gameplay/tutorials/pages/template/image.jpg",
  ratio   = "16x9",

  buttons = {
    {
      default = true,
      class = "main",
      label = "main button",
      clickLua = ""
    },

    {
      default = false,
      class = "secondary",
      label = "secondary button",
      clickLua = ""
    },

    {
      default = false,
      class = "attention",
      label = "attention button",
      clickLua = ""
    },

    {
      default = false,
      class = "white",
      label = "white button",
      clickLua = ""
    },

    {
      default = false,
      class = "link",
      label = "link button",
      clickLua = ""
    },

    {
      default = false,
      class = "outline",
      label = "outline button",
      clickLua = ""
    }
  }
})

guihooks.trigger("introPopupClose")
```

Comme pour les autres types de popup, plusieurs pages peuvent être regroupées dans la même fenêtre.

!!! bug

```
Le flou d'arrière-plan possède une hauteur minimale, ce qui peut provoquer une zone de flou excessive sous les petites fenêtres.
```

Les deux solutions de contournement sont :

* répéter `\n` et terminer avec `<div />` ;
* utiliser une image vide ou inexistante et ajuster le rapport d'aspect.

---

# Dialogue

Le système **Dialogue** est utilisé notamment dans la campagne **A Rocky Start** pour afficher les informations relatives à une mission.

Il s'agit d'une fenêtre centrée verticalement avec une présentation spécifique.

Contrairement aux autres popups présentés ci-dessus, elle **ne prend pas en charge l'intégration de HTML**.

```lua
ui_missionInfo.openDialogue({
  title = "Dialogue title",
  type = "Custom", -- n'est pas réellement affiché
  typeName = "typeName",

  data = {
    {
      label = "objective",
      value = "reward"
    }
    -- Ajouter d'autres éléments...
  },

  buttons = {
    {
      action = "accept",
      text = "Accept",
      cmd = ""
    },

    {
      action = "decline",
      text = "Decline",
      cmd = ""
    }

    -- Ajouter d'autres boutons...
  }
})

ui_missionInfo.closeDialogue()
```

Un seul **Dialogue** peut être affiché à la fois.

Tout dialogue déjà ouvert sera remplacé.

!!! info

```
Vous devez utiliser :
```

```lua
ui_missionInfo.closeDialogue()
```

pour fermer un dialogue.

Assurez-vous d'appeler cette fonction lorsqu'un bouton est pressé.
