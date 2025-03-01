# Getting Started

## **1. Compatibility**

BeamMP is fully compatible with Windows and Linux, compatibility with MacOS is being worked on.
However, both Linux and MacOS are secondary platforms, this means bugs are to be expected.

!!!warning

      BeamMP does not support pirated copies of BeamNG.Drive!

## **2. Installation**

### **2a. Windows Installation**
1. Go to [beammp.com](https://beammp.com/) and click the "Download client" button.
2. Extract the `BeamMP_Installer.zip` archive.
3. Launch `BeamMP_Installer.exe` and follow the instructions.
4. The BeamMP Launcher icon should appear on your desktop. If not, just search for “BeamMP” in the windows search bar.
5. Once the launcher has started, you should see a terminal window, shortly after BeamNG.drive should automatically start. **Do not** close the terminal window.
6. After BeamNG launched, in the main menu, click the `Repository` button and make sure that `multiplayerbeammp` is **the only** enabled mod.
7. Return to the main menu and click the 'Multiplayer' button to start multiplayer.
8. You will be prompted to login or play as a guest (not all servers will allow guests). You can create an account on our [forum](https://forum.beammp.com) and then login to BeamMP with the same credentials.
9. Select any server you like, and press `Connect`. Enjoy!

!!!note

      As you are loading into a map with multiple vehicles spawned it might take longer than expected to join.

### **2b. Linux Installation**

Currently you need to build the Launcher yourself.
In order to do this, you need a basic understanding of how to build an application.

Make sure you have [`vcpkg` installed](https://learn.microsoft.com/en-us/vcpkg/get_started/get-started?pivots=shell-bash#1---set-up-vcpkg), as well as basic development tools, often found in packages, for example:

- Debian: `sudo apt install build-essential`
- Fedora: `sudo dnf install @development-tools`
- Arch: `sudo pacman -S base-devel`
- openSUSE: `zypper in -t pattern devel-basis`
- SteamOS (Arch): `sudo pacman -S base-devel linux-api-headers glibc libconfig` (You also need to do `sudo steamos-readonly disable` but make sure to enable it again after installing the packages)

Clone the BeamMP-Launcher Repository to your system using `git`, for example:
`git clone https://github.com/BeamMP/BeamMP-Launcher.git`
[Additional information about cloning a GitHub Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Checkout the tag that was used for the [latest release](https://github.com/BeamMP/BeamMP-Launcher/releases/latest). For example, if `v2.3.2` is used in the latest release, then do `git checkout v2.3.2`

In the root directory of the project,

1. 
```cmake
cmake -DCMAKE_BUILD_TYPE=Release . -B bin -DCMAKE_TOOLCHAIN_FILE=~/vcpkg/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-linux
```

2. 
```cmake
cmake --build bin --parallel --config Release
```

!!!note

      Should you run out of RAM while building, you can ommit the --parallel instruction, it will then use less RAM due to building only on one CPU thread.

Move the finished application out of the `/bin` folder into its own folder and run it from there

The native linux BeamMP-Launcher will start and use native linux BeamNG.drive

### **2c. Using beamNG.drive with Proton**

Should you want to use the native linux BeamMP-Launcher together with BeamNG.drive running through Proton, you can do so:

Run the BeamMP-Launcher using the argument ` --no-launch` (This will prevent the Launcher from starting native linux BeamNG.drive). Further information about launcher arguments can be found in the [Development Environment Setup](../guides/beammp-dev/beammp-dev.md)

Change the userfolder location of Proton-BeamNG.drive to the location of Linux-BeamNG.drive (since the native linux BeamMP-Launcher currently only writes into the Linux-BeamNG.drive userfolder)

This can be done for example by creating a symlink

- Note the Linux-BeamNG.drive userfolder location (this is usually found in `~/.local/share/BeamNG.drive`) and rename it, for example to `BeamNG.drive_old`
- Note the Proton-BeamNG.drive userfolder location (this is usually found in `~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive`)
- Create a symlink between both userfolders `ln -s ~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive ~/.local/share`

With the symlink in place between the userfolders and the launcher compiled, you can have Steam run the game via Proton, while also automatically executing the launcher with the following replacement for your launch options for the vanilla game, found in the game's Properties window in its entry in Steam:

- `~/BeamMP/BeamMP-Launcher --no-launch & %command% ; killall BeamMP-Launcher`

Note that this assumes you put the launcher's binary you compiled earlier into `/home/user/BeamMP/`, so change it to match where you put the finished binary, and you will need to re-compile the launcher with the correct git branch each time a launcher update is released.

#### **2d. Adding an emoji-font to get in-text emojis**

In order to get emojis to show up in either the serverlist (As part of a servers customised name) or in the ingame chat, you need to have a font that contains emojis.

This can be done for example by adding the [Linux-port of the Windows Segoe-UI emoji font](https://github.com/mrbvrz/segoe-ui-linux)

---

## **3. Known Issues**
- The native linux BeamMP-Launcher currently can only connect to a server once, after disconnecting you need to restart the launcher. You can do that without closing the game inbetween
- If you don’t see the “Multiplayer” button. Make sure that the BeamMP mod is present and activated in the “Mod Manager” then try pressing CTRL + L.
- VPNs of any type may cause connection issues.
- If the Launcher reports any errors, read the [FAQ](https://forum.beammp.com/c/faq/35).

Should you need further help with installation, you are welcome to create a post on our [forum](https://forum.beammp.com) or ask on our [Discord server](https://discord.gg/beammp).
