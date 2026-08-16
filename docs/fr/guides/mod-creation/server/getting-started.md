# Création d'un mod multijoueur

## Structure des dossiers et fichiers

La structure de base des dossiers et fichiers doit être organisée comme suit :

```text
Resources/
├─ Client/
│  └─ examplePlugin.zip/
│     ├─ scripts/
│     │  └─ modScript.lua
│     └─ lua/
│        └─ ge/
│           └─ extensions/
│              └─ examplePlugin.lua
└─ Server/
   └─ examplePlugin/
      ├─ examplePlugin.lua
      └─ further_lua/
         └─ further.lua
```

Le fichier Lua côté serveur constitue le minimum requis. Si vous souhaitez ajouter des événements personnalisés, vous aurez également besoin d’au moins un fichier Lua côté client ainsi que d’un fichier `modScript.lua`.

Le dossier `Server` doit contenir des sous-dossiers, à raison d’un pour chaque mod côté serveur.

Il est recommandé de n’utiliser qu’un seul fichier Lua principal et de placer les fichiers Lua supplémentaires dans des sous-dossiers. Toutefois, ce n’est pas obligatoire : si plusieurs fichiers Lua sont présents, le serveur les chargera dans l’ordre alphabétique.

Le dossier `Client` contient les fichiers `.zip` envoyés aux joueurs, qui les chargeront ensuite comme des mods.

Tout autre fichier présent directement dans le dossier `Client` provoquera une erreur au démarrage du serveur. Ces fichiers seront néanmoins ignorés par le serveur.

Le fichier `modScript.lua` est lu par BeamNG.drive et indique au jeu quelle extension doit être chargée.

!!! example ""

```
[Télécharger `examplePlugin.zip`](../../../../assets/content/ResourcesForExamplePlugin.zip)
```

## Lua côté serveur

Le plugin `examplePlugin` contient d’autres exemples. Voici toutefois un exemple très simple permettant d’afficher les identifiants d’un joueur :

```lua
function onInit() -- exécuté lorsque le plugin est chargé

    MP.RegisterEvent("onPlayerAuth", "onPlayerAuth") -- fourni par BeamMP

    print("examplePlugin loaded")
end

-- Un joueur s'est authentifié et demande à rejoindre le serveur.
-- Nom du joueur (string), rôle sur le forum (string), compte invité (bool),
-- identifiants (table -> ip, beammp)
function onPlayerAuth(player_name, role, isGuest, identifiers)
    local ip = identifiers.ip
    local beammp = identifiers.beammp or "N/A"
    print("onPlayerAuth: player_name: " .. player_name .. " | role: " .. role .. " | isGuest: " .. tostring(isGuest) .. " | identifiers: ip: " .. ip .. " - beammp: " .. beammp)
end
```

`onPlayerAuth` est déclenché dès qu'un joueur tente de rejoindre le serveur. Consultez également [`onPlayerAuth` dans la référence du scripting](../../../scripting/server/latest-server-reference/#onplayerauth).

Voici un autre exemple utilisant `onPlayerAuth`. Celui-ci refuse les joueurs invités en leur envoyant un message qui sera ensuite affiché dans le jeu :

```lua
function onPlayerAuth(playerName, playerRole, isGuest, identifiers)
    if isGuest then
        return "No guests allowed, please use a BeamMP account"
    end
end
```

Vous trouverez davantage d'informations sur les fonctions côté serveur fournies par BeamMP dans la [référence du serveur](../../../scripting/server/latest-server-reference.md).

## Lua côté client

Le fonctionnement côté client suit en grande partie le système d'extensions de [BeamNG.drive](https://documentation.beamng.com/modding/programming/extensions/) :

```lua
local M = {}

if extensions.isExtensionLoaded("examplePlugin") then
    log("E", "examplePlugin", "examplePlugin loaded on client side")
    return
end

return M
```

Ce code affiche dans la console que `examplePlugin` a été chargé côté client.

Consultez la [documentation de BeamNG.drive sur les messages de débogage](https://documentation.beamng.com/modding/programming/debugging/#a-add-a-log) pour en savoir plus.

## `modScript.lua`

Ce fichier ne contient généralement que deux lignes :

```lua
load('examplePlugin')
setExtensionUnloadMode('examplePlugin', 'manual')
```

Vous pouvez également ajouter un message dans les journaux afin de vérifier que votre `modScript.lua` a bien été traité par BeamNG.drive :

```lua
load('examplePlugin')
setExtensionUnloadMode('examplePlugin', 'manual')
log('I', 'modScript', "examplePlugin loaded")
```
