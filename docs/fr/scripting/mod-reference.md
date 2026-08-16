!!! warning "Ce site est en cours de construction !"

```
Ce site est actuellement en cours de développement.

Vous pensez pouvoir aider ? N'hésitez pas à le faire en cliquant sur l'icône représentant un crayon à droite de la page !

Cela est possible sur **n'importe quelle page**.
```

# Référence du scripting des mods / en jeu

BeamMP vous permet également de créer vos propres **plugins côté client**. Nous avons mis à votre disposition plusieurs fonctions permettant de communiquer avec d'autres mods multijoueurs ainsi qu'avec les autres joueurs via le serveur.

# Fonctions

Voici la liste des fonctions disponibles pour le scripting :

| Fonction                                  | Description                                                                                                                                                                                                                                   |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TriggerServerEvent("eventName", "data")` | Déclenche un événement dans l'environnement Lua du serveur. Les deux paramètres doivent être des chaînes de caractères.                                                                                                                       |
| `TriggerClientEvent("eventName", "data")` | Déclenche un événement dans l'environnement Lua local. Les deux paramètres doivent être des chaînes de caractères. Utile pour communiquer entre différents plugins.                                                                           |
| `AddEventHandler("eventName", Function)`  | Ajoute le deuxième paramètre à la liste des fonctions à exécuter lorsqu'un événement est reçu, localement ou depuis le serveur. La fonction reçoit **un paramètre**, contenant les données de l'événement sous forme de chaîne de caractères. |

# Exemples de code

Par exemple, pour analyser les messages du chat, vous pouvez utiliser l'événement `ChatMessageReceived` fourni par BeamMP :

```lua
local function chatReceived(msg) -- Reçoit l'événement avec ses paramètres
    print("chat received: "..msg)

    local i = string.find(msg, ":") -- Recherche le premier ':' servant à séparer l'expéditeur du message
    if i == nil then
        print("error parsing message: separator could not be found!")
        return -- Le séparateur n'a pas été trouvé, on annule la fonction
    end

    print("index of separator: "..tostring(i))

    local sender = string.sub(msg, 1, i-1) -- Sépare la chaîne en deux parties pour récupérer l'expéditeur
    local message = string.sub(msg, i+1, -1) -- Récupère le contenu du message

    print("sender: " .. sender)
    print("message: ".. message)
end

AddEventHandler("ChatMessageReceived", chatReceived) -- Ajoute notre gestionnaire d'événement à la liste gérée par BeamMP
```

### Fonctionnement de l'exemple

L'événement `ChatMessageReceived` transmet le message du chat à la fonction `chatReceived`.

Le message reçu est ensuite séparé en deux parties :

* `sender` → le nom de l'expéditeur ;
* `message` → le contenu du message.

Le caractère `:` est utilisé comme séparateur entre les deux.

> **Remarque :** dans le code original, `string.find(s, ":")` semble être une erreur : la variable utilisée pour le message reçu est `msg`. Il faut donc utiliser `string.find(msg, ":")`, comme dans l'exemple corrigé ci-dessus.
