# Maintenance du serveur

Guides et astuces sur la façon de configurer et de prendre soin d'un serveur BeamMP.

## Comment installer

Pour les instructions d'installation, veuillez consulter [l'installation du serveur](create-a-server.md) .

## Le fichier ServerConfig

La configuration du serveur, qui est un fichier appelé `ServerConfig.toml` , utilise le [format TOML](https://toml.io/en/) .

*REMARQUE* : L' *ancien* fichier de configuration du serveur s'appelait `Server.cfg` , mais il n'est plus utilisé et le serveur vous avertira s'il est toujours présent. Veuillez également noter que les deux formats de configuration ne sont **pas** compatibles.

La configuration comporte une section par défaut, appelée `[General]` , qui contient les valeurs suivantes :

Key | Type de valeur | Description
--- | --- | ---
AuthKey | Format AuthKey `xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` où tous les x sont des caractères alphanumériques (chiffres et lettres) | Utilisé pour identifier votre serveur auprès du backend. Vous devriez en avoir obtenu un en suivant les instructions d'installation.
Debug | true /false | Si cette option est activée (true), davantage de messages seront affichés dans le journal et des informations supplémentaires seront fournies. Activez-la en cas de problème. L'activation de cette option augmentera considérablement la taille du fichier journal.
Private | true/false | Si cette option est activée (true), votre serveur n'apparaîtra pas dans la liste des serveurs. Toute personne disposant de l'adresse IP et du port corrects pourra se connecter.
Description | Tout « texte » | Affiché comme description du serveur dans la liste des serveurs (si le serveur est public). Vous pouvez utiliser des caractères spéciaux pour le formater avec des couleurs et des styles.
Name | Tout « texte » | Affiché comme nom/titre de votre serveur dans la liste des serveurs. Vous pouvez utiliser des caractères spéciaux pour le formater avec des couleurs et des styles.
Map | Un emplacement de carte valide, tel que `/levels/gridmap_v2/info.json` | La carte que votre serveur hébergera. Elle doit être installée soit par défaut (liste ci-dessous), soit en tant que mod de serveur.
MaxCars | Tout nombre ≥ 1 | Nombre maximal de voitures par joueur. Toute voiture supplémentaire qu'un joueur tentera de faire apparaître sera supprimée instantanément.
Port | 1024-65535 | Le port réseau sur lequel le serveur sera accessible. Pour qu'un joueur puisse se connecter directement à votre serveur, il aura besoin de votre adresse IP et de ce port.

D'autres sections peuvent et doivent être utilisées par les plugins du serveur (API Lua à venir), comme ceci : `[MyMod]` .

Vous **devez** définir la clé d'authentification. Elle est vide par défaut et doit être renseignée avec la clé d'authentification obtenue lors de l'installation précédente. Ne la partagez avec personne et floutez-la complètement sur les captures d'écran.

### Tous les noms de cartes vanilla

Voici toutes les cartes en stock :

- /levels/gridmap_v2/info.json
- /levels/johnson_valley/info.json
- /levels/automation_test_track/info.json
- /levels/east_coast_usa/info.json
- /levels/hirochi_raceway/info.json
- /levels/italy/info.json
- /levels/jungle_rock_island/info.json
- /levels/industrial/info.json
- /levels/small_island/info.json
- /levels/smallgrid/info.json
- /levels/utah/info.json
- /levels/west_coast_usa/info.json
- /levels/driver_training/info.json
- /levels/derby/info.json

### Personnalisez l'apparence du nom de votre serveur

Utilisez ces symboles spéciaux avant votre texte et ils appliqueront un effet à ce texte dans la liste des serveurs :

Valeur | Description
:-: | ---
`^r` | Réinitialiser
`^p` | Nouvelle ligne (descriptions uniquement)
`^n` | Souligner
`^l` | Gras
`^m` | Barré
`^o` | Italique
`^0` | Noir
`^1` | Bleu
`^2` | Vert
`^3` | Bleu clair
`^4` | Rouge
`^5` | Rose
`^6` | Orange
`^7` | Gris
`^8` | Gris foncé
`^9` | Violet clair
`^a` | Vert clair
`^b` | Light blue
`^c` | Orange foncé
`^d` | Rose clair
`^e` | Jaune
`^f` | Blanc

### Personnalisez les tags de votre serveur

Les tags peuvent être utilisées pour permettre aux utilisateurs de rechercher un type de serveur spécifique. Votre fichier serverConfig.toml sera généré avec la balise freeroam `Tags = "Freeroam"` .

Vous pouvez ajouter plusieurs tags séparées par une virgule `Tags = "Events,Offroad,lang:english"` , elles ne sont pas sensibles à la casse.

Vous pouvez choisir parmi la liste suivante :

- Âge/Contenu :

    - `Mature/18+`

- Types de jeu :

    - `Freeroam`
    - `Roleplay`
    - `Economy`
    - `Traffic`

- Catégories de courses :

    - `Racing`
    - `Racing:NASCAR`
    - `Racing:Track`
    - `Racing:Drag`
    - `Racing:Rally`
    - `Touge`

- Tout-terrain et défis :

    - `Offroad`
    - `Crawling`
    - `Dakar`
    - `Challenge`

- Événements de destruction :

    - `Derby`
    - `Arena`

- Conditions météorologiques et horaires :

    - `Snow/Ice`
    - `Rain`
    - `Night`
    - `Weather`

- Modes de jeu :

    - `Gamemode`
    - `Gamemode:Racing`
    - `Gamemode:Rally`
    - `Gamemode:Drag`
    - `Gamemode:Derby`
    - `Gamemode:Infection`
    - `Gamemode:Cops-Robbers`
    - `Gamemode:Delivery`
    - `Gamemode:Sumo`

- Communauté et événements :

    - `Scenarios`
    - `Events`
    - `Leaderboard`

- Mods:

    - `Modded`
    - `Mod:BeamPaint`
    - `Mod:BeamJoy`
    - `Mod:CEI`

- Langues:

    - `Lang:English`
    - `Lang:Russian`
    - `Lang:French`
    - `Lang:Spanish`
    - `Lang:Portuguese`
    - `Lang:German`
    - `Lang:Polish`
    - `Lang:Arabic`

- Autre:

    - `Vanilla`
    - `Moderated`

Si une balise manque dans cette liste, vous pouvez soumettre une demande pour qu'elle soit ajoutée [ici](https://forum.beammp.com/t/introducing-server-tags/1320081)

## Le fichier Server.log

Ce fichier sera généré lors de l'exécution du serveur. Il reproduit les messages affichés dans la console lors de l'exécution du serveur. Vous devez joindre ce fichier à chaque fois que vous avez besoin d'aide auprès de notre équipe d'assistance. Il n'affichera jamais votre clé d'authentification ; vous pouvez donc généralement l'envoyer sans modification.

Le format est le suivant (le préfixe "$" signifie « variable », expliqué ci-dessous) :

```
[$DATE $TIME] $CONTEXT [$LOG_LEVEL] $MESSAGE
```

Où:

- `$DATE` est la date du message, par exemple 21/07/2021
- `$TIME` est l'heure du message, par exemple 11:05:23
- `$CONTEXT` (visible uniquement en mode débogage et principalement destiné aux développeurs) est le contexte du message, qui est soit :
    - `(Player ID) “Player Name”` , où l'ID du joueur est utile pour la modération
    - Un nom court tel que « Baguette »
- `$LOG_LEVEL` est l'un des niveaux d'importance d'un message :
    - `DEBUG` : visible uniquement en mode débogage, généralement spammé et important uniquement pour les développeurs
    - `INFO` : Informations générales
    - `LUA` : Message d'un plugin Lua
    - `WARN` : Décrit quelque chose qui n'est pas censé se produire, généralement
    - `ERROR` : Quelque chose s'est très mal passé ou était très inattendu
    - `FATAL` : Un événement s'est produit qui a provoqué l'arrêt du serveur
- `$MESSAGE` le message lui-même, généralement important à comprendre. Dans certains cas, il peut être cryptique, mais en règle générale, tant que le serveur est opérationnel et qu'il n'y a pas d'erreur, tout va bien.

## Mise à jour du serveur

### Pourquoi mettre à jour

À chaque nouvelle mise à jour, il est conseillé de mettre à jour votre serveur. Cela implique généralement des corrections de bugs, des améliorations de stabilité et de sécurité, en plus des nouvelles fonctionnalités générales.

Pour recevoir des nouvelles des mises à jour dès leur sortie, suivez le canal « mise à jour » du serveur Discord, recherchez-le sur les forums ou consultez/demandez la [page des versions de GitHub](https://github.com/BeamMP/BeamMP-Server/releases) .

### Comment mettre à jour

#### Si vous utilisez un fournisseur d'hébergement partenaire BeamMP

Si vous utilisez un hébergeur partenaire de BeamMP, les instructions ci-dessous ne fonctionneront probablement pas. Nous vous recommandons d'attendre plus d'informations de votre hébergeur ou de le contacter pour obtenir de l'aide.

#### Gérer le serveur vous-même

La mise à jour du serveur se fait en remplaçant l'ancien exécutable par le nouveau. Si vous ne savez pas comment procéder, vous trouverez ci-dessous des instructions détaillées pour Windows et Linux.

Si vous avez compilé à partir des sources, il vous suffit de reconstruire. Assurez-vous d'exécuter `git submodule update --init --recursive` avant de reconstruire.

#### On Windows

1. Assurez-vous d’avoir installé les fichiers [redistribuables de Visual C++](https://aka.ms/vs/17/release/vc_redist.x64.exe) afin d’exécuter le serveur.
2. Accédez à [BeamMP.com](https://beammp.com/) et cliquez sur le bouton « Télécharger le serveur ».
3. Une fois téléchargé, vous devriez voir un fichier nommé `BeamMP-Server.exe` . Nous l'appellerons « nouvel exécutable ».
4. Accédez au dossier où se trouve votre exécutable `BeamMP-Server.exe` actuel (généralement le même dossier que votre fichier `ServerConfig.toml` ). Nous l'appellerons « ancien exécutable ».
5. Replace the old executable with the new executable (for example by copying or moving the new executable into the folder).

#### Sous Linux

1. Accédez à [BeamMP.com](https://beammp.com/) et cliquez sur le bouton « Télécharger le serveur », vous serez redirigé vers la page de publication Github du serveur.
2. Téléchargez la version adaptée à votre distribution. Par souci de simplicité, elle s'appellera désormais `BeamMP-Server-xxx` , où `xxx` désigne la version de la distribution que vous utilisez.
3. Une fois téléchargé, vous devriez voir un fichier nommé `BeamMP-Server-xxx` selon la version téléchargée. Nous l'appellerons le « nouvel exécutable ».
4. Accédez au dossier où se trouve votre exécutable `BeamMP-Server-xxx` actuel (généralement le même dossier que votre `ServerConfig.toml` ). Nous l'appellerons « ancien exécutable ».
5. Remplacez l'ancien exécutable par le nouvel exécutable (par exemple en copiant ou en déplaçant le nouvel exécutable dans le dossier).
6. Ouvrez un terminal dans le dossier où vous venez de remplacer l'exécutable et exécutez `sudo chmod +x BeamMP-Server-xxx` . Cela permettra de vérifier que le serveur peut être exécuté.

### Mises à jour automatiques

Le serveur ne prend pas en charge les mises à jour automatiques ni les notifications de mise à jour (pour l'instant).

Vous pouvez toutefois demander à l'API GitHub la dernière version en comparant la version du serveur aux balises. Vous pouvez l'obtenir via une commande GET depuis `https://api.github.com/repos/BeamMP/BeamMP-Server/git/refs/tags` .
