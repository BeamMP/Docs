# Pour commencer

## **1. Compatibilitée**

BeamMP est entièrement compatible avec Windows et Linux, la compatibilité avec MacOS est en cours de développement. 
Cependant, puisque Linux et MacOS sont des systèmes d'opération secondaire plusieurs problèmes (bug) sont à prévoir.

!!!warning

    BeamMP ne fonctionnera pas avec une version piratée ou dépassée de BeamNG.drive.
    L'équipe de soutient de BeamMP n'offre pas de soutient pour les versions piratées ou dépasées.

## **2. Installation**

### **2a. Installation sur Windows**
1. Allez à [beammp.com](https://beammp.com/) et cliquer sur le bouton "Download client".
2. Extractez l'archive `BeamMP_Installer.zip`.
3. Exécutez `BeamMP_Installer.exe` et suivez les instructions.
4. L'icone du lanceur BeamMP devrais apparaître sur le bureau de votre ordinateur. Si ce n'est pas le cas, cherchez "BeamMP" dans la barre de recherche Windows.
5. Une fois que le lanceur est lancé, vous devriez voir une fenêtre du terminal, BeamNG.drive devrais se lancer automatiquement peu de temps après. **Ne fermez pas** la fenêtre du terminal.
6. Une fois que BeamNG est lancé, cliquer sur l'onglet `Repository` (Dépot en français) dans le menu principal et assurez-vous que `multiplayerbeammp` **est le seul** mod activé.
7. Retournez au menu principal and cliquez le bouton 'Multiplayer' pour lancer le mode multijoueur.
8. On va vous demander si vous voulez vous connecter ou si vous voulez jouer en teant qu'invité (guest) (Certains serveurs bloque les joueur invités (guest)). Vous pouvez créer un compte sur notre [forum](https://forum.beammp.com) et vous connecter à BeamMP avec les mêmes informations par la suite.
9. Choisissez n'importe quel serveur de votre choix et appuyer sur `Connect`. Amusez-vous!

!!!note

      Si vous vous connectez à un serveur avec plusieurs joueurs et/ou véhicules, les temps de chargement peuvent s'allonger.

### **2b. Installation sur Linux**

Vous devrez construire le lanceur vous même pour le moment.
Pour ce faire, vous avez besoin d'un minimum de connaissences de base pour construire (build) une application.

Assurez-vous d'avoir [`vcpkg`](https://learn.microsoft.com/en-us/vcpkg/get_started/get-started?pivots=shell-bash#1---set-up-vcpkg) d'installé, ainse que des outil de dévelopement de base, souvent trouvé dans des packets (package) tel que (par exemple):

- Debian: `sudo apt install build-essential`
- Fedora: `sudo dnf install @development-tools`
- Arch: `sudo pacman -S base-devel`
- openSUSE: `zypper in -t pattern devel-basis`
- SteamOS (Arch): `sudo pacman -S base-devel linux-api-headers glibc libconfig` (Vous devez également faire `sudo steamos-readonly disable` mais assurez-vous de l'activer à nouveau après l'installation des paquets.)

Clônez le répertoire BeamMP-Launcher sur votre système en utilisant `git`, exemple:
`git clone https://github.com/BeamMP/BeamMP-Launcher.git`
[Informations complémentaires sur le clonage d'une réplique GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Assurez-vous d'avoir le bon identifiant de version utilisé pour la dernière version disponible (Latest version) [Dernière version](https://github.com/BeamMP/BeamMP-Launcher/releases/latest). Par exemple, si `v2.3.2` est utilisé dans la dernière version disponible, faites `git checkout v2.3.2`

Dans la root directory du projet,

1. 
```cmake
cmake . -B bin -DCMAKE_TOOLCHAIN_FILE=~/vcpkg/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-linux
```

2. 
```cmake
cmake --build bin --parallel
```

!!!note ""

      Si vous manquer de RAM lorsque vous construisez, vous pouvez ignorer --parallel instruction, cela va utiliser moin s de RAM puisque la construction n'utilisera qu'un fil (thread) du CPU.

!!!note ""

      Si vous ne spécifiez pas `-DCMAKE_BUILD_TYPE=Release`, vous allez construire la version debug qui est plus volumineuse, mais ne contient pas le problème (bug):
      launcher-can-only-connect-to-a-server-once (Lanceur-peut-se-connecter-seulement-unefois-à-un-serveur)

Déplacez l'application terminée en dehors du dossier `/bin` vers son propre dossier et executer l'application à partir de là.

La version native à linux du lanceur BeamMP va se lancer et va lancer la version native à linux de BeamNg.drive. 

### **2c. Utiliser BeamNG.drive avec Proton**

Vous souhaitez utiliser la version native à linux de BeamMP et Beamng via proton? Vous pouvez le faire en suivant les étapes ci-dessous:

Exécutez le lancer BeamMP avec la commande suivante ` --no-launch` (Ceci va empêcher le lanceur de lancer la version native à linux de beamNG.drive). Plus d'informations peut être retrouvée dans la [Configuration de l'environnement de développement](../guides/beammp-dev/beammp-dev.md)

Changez l'emplacement du userfolder de Proton-BeamNG.drive pour l'emplacement de Linux-BeamNG.drive (puisque la version native à linux du lanceur BeamMP écrit, pour le momant, que dans le Linux-BeamNG.drive userfolder)

Cela peut être fait simplement en créant un symlink

- Notez l'emplacement du userfolder de Linux-BeamNG.drive (il est généralement trouvé dans `~/.local/share/BeamNG.drive`) et renomez le, par exemple: `BeamNG.drive` à  `BeamNG.drive_old 
- Notez l'emplacement du userfolder de Proton-BeamNG.drive  (il est généralement trouvé dans `~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive`)
- Créez un symlink entre les deux userfolders `ln -s ~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive ~/.local/share`

Avec le symlink configuré antre le lanceur compilé et les userfolders, vous pouvez lancer le jeux avec Proton via Steam tout en executant automatiquement le lanceur avec les remplacement suivents pour les option de lancement du jeu vanilla (version sans mod), retrouvés dans la fenêtre des propriétées du jeu dans son entrée sur Steam.

- `~/BeamMP/BeamMP-Launcher --no-launch & %command% ; killall BeamMP-Launcher`

Notez que ceci assume que vous avez mis, les binairies du lanceur que vous avez compilé plus tôt, dans `/home/user/BeamMP/`, donc changez l'emplacement pour qu'il corresponde à où vous avez mis les binairies terminées et vous allez avoir besoin de recompiler le lanceur avec la bonne branche git à chaque fois qu'une nouvelle mise à jour sera disponible.

!!! tip "Ajoutez une police d'écriture pour les emojis pour avoir les emojis en jeu"

    Pour avoir accès aux emojis soit dans la liste des serveurs (certains serveurs utilisent des emojis dans leur nom personalisé), soit dans le chat en jeu, vous avez besoin d'une police d'écriture qui contient certains emojis.

    Cela peut être fait, par exemple, en ajoutant le [Linux-port of the Windows Segoe-UI emoji font](https://github.com/mrbvrz/segoe-ui-linux)

---

## **3. Problèmes connus**
- La version actuel du lanceur natif à linux ne peut ce connecter qu'une fois à un serveur, après vous être déconnecté, vous devez redémarer le lanceur. Vous pouvez le faire sans fermer le jeu à chaque fois
- Si vous ne voyez pas le bouton “Multiplayer”. Assurez-vous que le mod BeamMP est présent et activé dans le “Gestionnaire de mods” et appuyer sur CTRL + L sur votre clavier.
- Tout les types de VPNs pourrait causer des problèmes de connection.
- Si le lanceur donne n'importe quelle erreur, lisez la [FAQ](https://forum.beammp.com/c/faq/35).

Si vous avez besoin d'aide avec l'installation, faites un post sur notre [forum](https://forum.beammp.com) ou posez vos questions dans notre [serveur Discord](https://discord.gg/beammp).
