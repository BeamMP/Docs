# Pour commencer

## **1. Compatibilitée**

BeamMP est entièrement compatible avec Windows et Linux. La compatibilité avec macOS est actuellement en cours de développement.

Cependant, Linux et macOS étant des systèmes moins couramment pris en charge, certains problèmes ou bugs peuvent encore survenir. Nous travaillons régulièrement à améliorer leur compatibilité et leur stabilité.

!!!warning "Attention"

    Aucune version piratée, modifiée ou obsolète de BeamNG.drive ne sera compatible avec BeamMP.
    L’équipe de support de BeamMP ne fournit aucune assistance pour les versions piratées ou défectueuses du jeu.

## **2. Installation**

### **2a. Installation sur Windows**
1. Accéder à [beammp.com](https://beammp.com/) et cliquer sur le bouton "Download now".
2. Extractez l'archive `BeamMP_Installer.zip`.
3. Exécutez `BeamMP_Installer.exe` et suivez les instructions.
4. L'icone du lanceur BeamMP devrais apparaître sur le bureau de votre ordinateur. Si ce n'est pas le cas, cherchez "BeamMP" dans la barre de recherche Windows.
5. Une fois que le lanceur est lancé, vous devriez voir une fenêtre du terminal, BeamNG.drive devrais se lancer automatiquement peu de temps après. **Ne fermez pas** la fenêtre du terminal.
6. Une fois que BeamNG est lancé, cliquer sur l'onglet `Repository` (Dépot en français) dans le menu principal et assurez-vous que `multiplayerbeammp` **est le seul** mod activé.
7. Retournez au menu principal and cliquez le bouton "plus..." et cliquer sur l'option "BeamMP" pour accéder au multijoueurs.
8. On va vous demander si vous voulez vous connecter ou si vous voulez jouer en teant qu'invité (guest) (Certains serveurs bloque les joueur invités (guest)). Vous pouvez créer un compte sur notre [forum](https://forum.beammp.com) et vous connecter à BeamMP avec les mêmes informations par la suite.
9. Choisissez n'importe quel serveur de votre choix et appuyer sur `Détails` et cliquer ensuite sur `Se connecter`. Amusez-vous!



!!!note

      Lorsque vous vous connectez à un serveur avec plusieurs joueurs et/ou véhicules, les temps de chargement peuvent être prolongés. 
      
      - Si le chargement semble particulièrement long ou si le serveur que vous essayez de rejoindre ne s’affiche pas correctement, n’hésitez pas à ouvrir un ticket sur notre serveur Discord afin que notre équipe puisse vous aider.

### **2b. Installation sur Linux**

Vous devrez construire le lanceur vous même pour le moment.
Pour ce faire, vous avez besoin d'un minimum de connaissences de base pour construire une application.

Assurez-vous d'avoir [`vcpkg`](https://learn.microsoft.com/en-us/vcpkg/get_started/get-started?pivots=shell-bash#1---set-up-vcpkg) d'installé, ainsi que des outil de dévelopement de base, souvent trouvé dans des packets (package) tel que (par exemple):

- Debian: `sudo apt install build-essential`
- Fedora: `sudo dnf install cmake gcc-c++ perl-IPC-Cmd perl-FindBin perl-File-Compare perl-File-Copy`
- Arch: `sudo pacman -S base-devel`
- openSUSE: `zypper in -t pattern devel-basis`
- SteamOS (Arch): `sudo pacman -S base-devel linux-api-headers glibc libconfig` (Vous devez également faire `sudo steamos-readonly disable` mais assurez-vous de l'activer à nouveau après l'installation des paquets.)

Clônez le répertoire BeamMP-Launcher sur votre système en utilisant `git`, exemple:
`git clone https://github.com/BeamMP/BeamMP-Launcher.git`

[Informations complémentaires concernant le clonage d’un dépôt GitHub.](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Assurez-vous d’utiliser le bon identifiant de version correspondant à la dernière version disponible (« Latest version » du dépôt).

Par exemple, si la dernière version disponible est v2.3.2, utilisez la commande suivante :

`git checkout v2.3.2`

Dans le répertoire racine du projet,

1. 
```cmake
cmake . -B bin -DCMAKE_TOOLCHAIN_FILE=~/vcpkg/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-linux
```

2. 
```cmake
cmake --build bin --parallel
```

!!!note ""

      Si vous manquez de RAM lors de la compilation, vous pouvez retirer l’option --parallel. Cela réduira la consommation de mémoire, car la compilation n’utilisera qu’un seul thread du processeur.

!!!note ""

      Si vous ne spécifiez pas `-DCMAKE_BUILD_TYPE=Release`, vous construirez la version Debug, qui est plus volumineuse, mais qui ne contient pas le bug suivant :
 
    launcher-can-only-connect-to-a-server-once (le lanceur ne peut se connecter qu’une seule fois à un serveur).

Déplacez l'application terminée en dehors du dossier `/bin` vers son propre dossier et executer l'application à partir de là.

La version native à linux du lanceur BeamMP va se lancer et va lancer la version native à linux de BeamNg.drive. 

### **2c. Utiliser BeamNG.drive avec Proton**

Vous souhaitez utiliser la version native Linux de BeamMP tout en exécutant BeamNG.drive via Proton ? Vous pouvez le faire en suivant les étapes ci-dessous.

Exécutez le lancer BeamMP avec la commande suivante ` --no-launch` (Ceci va empêcher le lanceur de lancer la version native à linux de beamNG.drive). 
- Plus d'informations peut être retrouvée dans la [configuration de l'environnement de développement](../guides/beammp-dev/beammp-dev.md)

Modifiez l’emplacement du `userfolder` de Proton-BeamNG.drive afin qu’il corresponde à celui de Linux-BeamNG.drive, car pour le moment, la version native Linux du lanceur BeamMP n’écrit que dans le `userfolder` de la version Linux de BeamNG.drive.

Cela peut être fait simplement en créant un symlink

- Notez l'emplacement du `userfolder` de Linux-BeamNG.drive (il est généralement trouvé dans `~/.local/share/BeamNG.drive`) et renomez le, par exemple: `BeamNG.drive` à `BeamNG.drive_old 
- Notez l'emplacement du `userfolder` de Proton-BeamNG.drive  (il est généralement trouvé dans `~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive`)
- Créez un symlink entre les deux userfolders `ln -s ~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive ~/.local/share`

Une fois le symlink configuré entre le lanceur compilé et les userfolders, vous pouvez lancer le jeu avec Proton via Steam tout en exécutant automatiquement le lanceur BeamMP. Pour cela, utilisez les paramètres de lancement suivants dans les propriétés du jeu sur Steam, dans le champ des options de lancement de la version vanilla (sans mod) :

- `~/BeamMP/BeamMP-Launcher --no-launch & %command% ; killall BeamMP-Launcher`

Notez que cela suppose que les binaires du lanceur que vous avez compilés précédemment se trouvent dans `/home/user/BeamMP/`. Modifiez ce chemin afin qu’il corresponde à l’emplacement où vous avez placé les binaires compilés.

Vous devrez également recompiler le lanceur en utilisant la branche Git correspondant à la nouvelle version chaque fois qu’une mise à jour sera disponible.

!!! tip "Ajoutez une police d’écriture prenant en charge les emojis afin de pouvoir les afficher correctement en jeu."

    Pour pouvoir afficher les emojis dans la liste des serveurs (certains serveurs utilisent des emojis dans leur nom personnalisé) ou dans le chat en jeu, vous devez installer une police d’écriture prenant en charge les emojis.

    Cela peut être fait, par exemple, en ajoutant le [Linux-port of the Windows Segoe-UI emoji font](https://github.com/mrbvrz/segoe-ui-linux)

---

## **3. Problèmes connus**
- La version actuelle du lanceur natif Linux ne peut se connecter qu’une seule fois à un serveur. Après vous être déconnecté, vous devez redémarrer le lanceur. Vous pouvez toutefois le faire sans fermer le jeu.
- Si vous ne voyez pas le l'option « BeamMP », assurez-vous que le mod BeamMP est présent et activé dans le « Gestionnaire de mods », puis appuyez sur CTRL + L sur votre clavier.
- Tout les types de VPNs pourrait causer des problèmes de connection.
- Si le lanceur donne n'importe quelle erreur, lisez notre [FAQ](https://forum.beammp.com/c/faq/35).

Si vous avez besoin d’aide pour l’installation, créez un sujet sur notre [forum](https://forum.beammp.com) ou posez vos questions sur notre [serveur Discord](https://discord.gg/beammp).

