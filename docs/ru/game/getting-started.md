# Начиная

## **1. Совместимость**

BeamMP полностью совместим с Windows и Linux, совместимость с MacOS находится в разработке. Однако Linux и MacOS являются вторичными платформами, поэтому следует ожидать ошибок.

!!!предупреждение

```
BeamMP will not work with pirated or outdated versions of BeamNG.drive.
The BeamMP support team does not offer support for issues with pirated / outdated copies.
```

---

## **2. Установка**

### **2а. Установка Windows**

!!!примечание

```
As of April 1st, 2026, the MSI installer is an "unrecognized app" according to Windows Defender SmartScreen.

To bypass this warning, click 'More info', then click 'Run anyway'.
```

1. Go to [beammp.com](https://beammp.com/) and click the 'Download Now' button.
2. Run the `BeamMP_Installer.msi` installer and follow the instructions.
3. The BeamMP Launcher icon should appear on your desktop. If not, just search for “BeamMP” in the Windows search bar.

!!!note

```
  As you are loading into a map with multiple vehicles spawned it might take longer than expected to join.
```

### **2б. Установка Linux**

В настоящее время вам необходимо самостоятельно собрать Launcher. Для этого вам необходимо базовое понимание того, как собрать приложение.

Make sure you have basic development tools installed, often found in packages, for example:

- Debian/Ubuntu: `sudo apt install build-essential`
- Fedora: `sudo dnf install cmake gcc gcc-c++ make perl perl-IPC-Cmd perl-FindBin perl-File-Compare perl-File-Copy kernel-headers kernel-devel`
- Arch: `sudo pacman -S base-devel`
- openSUSE: `zypper in -t pattern devel-basis`
- SteamOS (Arch): `sudo pacman -S base-devel linux-api-headers glibc libconfig` (Вам также необходимо выполнить команду `sudo steamos-readonly disable` , но не забудьте включить ее снова после установки пакетов)

Clone `vcpkg`, bootstrap it and add it to PATH

1.

```bash
git clone https://github.com/microsoft/vcpkg.git
```

1.

```bash
./vcpkg/bootstrap-vcpkg.sh
```

1.

```bash
export VCPKG_ROOT="$(pwd)/vcpkg"
export PATH=$VCPKG_ROOT:$PATH
```

Clone the BeamMP-Launcher Repository to your system using `git`, for example: `git clone https://github.com/BeamMP/BeamMP-Launcher.git` [Additional information about cloning a GitHub Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Checkout the tag that was used for the [latest release](https://github.com/BeamMP/BeamMP-Launcher/releases/latest). For example, if `v2.6.4` is used in the latest release, then do `git checkout v2.6.4`

If you've used the example clone command we provided, you can use `cd BeamMP-Launcher` to go to the project's root directory.

В корневом каталоге проекта,

1.

```cmake
cmake . -B bin -DCMAKE_TOOLCHAIN_FILE=$VCPKG_ROOT/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-linux
```

1.

```cmake
cmake --build bin --parallel
```

!!!примечание ""

```
  Should you run out of RAM while building, you can ommit the --parallel instruction, it will then use less RAM due to building only on one CPU thread.
```

!!!примечание ""

```
  By not specifying `-DCMAKE_BUILD_TYPE=Release` you are building a debug version, which is larger in filesize but does not contain the launcher-can-only-connect-to-a-server-once bug
```

!!!note "Fedora Users" If vcpkg fails during OpenSSL compilation with kernel headers errors, ensure all dependencies are installed: `bash sudo dnf install kernel-headers kernel-devel gcc gcc-c++ make perl ` Then clean the vcpkg cache: `bash rm -rf $VCPKG_ROOT/buildtrees/openssl ` And retry the cmake configuration command.

Move the finished application out of the `/bin` folder into its own folder and run it from there:

```bash
mkdir -p ~/beammp-launcher
cp bin/BeamMP-Launcher ~/beammp-launcher/
cd ~/beammp-launcher
./BeamMP-Launcher
```

The native Linux BeamMP-Launcher will start and use native Linux BeamNG.drive

### **2c. Использование beamNG.drive с Proton**

Если вы хотите использовать родной Linux BeamMP-Launcher вместе с BeamNG.drive, работающим через Proton, вы можете сделать это:

Запустите BeamMP-Launcher, используя аргумент `--no-launch` (Это не позволит Launcher запустить собственный Linux BeamNG.drive). Дополнительную информацию об аргументах Launcher можно найти в [разделе Настройка среды разработки](../guides/beammp-dev/beammp-dev.md)

Измените расположение пользовательской папки Proton-BeamNG.drive на расположение Linux-BeamNG.drive (поскольку собственный Linux BeamMP-Launcher в настоящее время записывает только в пользовательскую папку Linux-BeamNG.drive)

Это можно сделать, например, создав символическую ссылку

- Note the Linux-BeamNG.drive userfolder location (this is usually found in `~/.local/share/BeamNG.drive`) and rename it, for example to `BeamNG.drive_old`
- Note the Proton-BeamNG.drive userfolder location (this is usually found in `~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive`)
- Создайте символическую ссылку между обеими папками пользователей `ln -s ~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive ~/.local/share`

После установки символической ссылки между пользовательскими папками и скомпилированным лаунчером вы можете заставить Steam запустить игру через Proton, при этом лаунчер автоматически запустится со следующей заменой параметров запуска для оригинальной игры, которые можно найти в окне «Свойства» игры в ее записи в Steam:

- `~/BeamMP/BeamMP-Launcher --no-launch & %command% ; killall BeamMP-Launcher`

Note that this assumes you put the launcher's binary you compiled earlier into `/home/user/BeamMP/`, so change it to match where you put the finished binary, and you will need to re-compile the launcher with the correct git branch each time a launcher update is released.

!!! совет "Добавление шрифта эмодзи для получения эмодзи в тексте"

```
In order to get emojis to show up in either the serverlist (As part of a servers customised name) or in the ingame chat, you need to have a font that contains emojis.

This can be done for example by adding the [Linux-port of the Windows Segoe-UI emoji font](https://github.com/mrbvrz/segoe-ui-linux)
```

---

## **3. Using BeamMP**

1. Once you have started the launcher, you should see a terminal window. Shortly after, the standard BeamNG launcher should start. **Do not** close the terminal window.
2. In the BeamNG.drive main menu, click the `Repository` button and check to make sure that `multiplayerbeammp` is **the only** enabled mod.
3. Return to the main menu, click on 'More..' and the 'Multiplayer' button to start multiplayer.
4. You will be prompted to login or play as a guest (not all servers will allow guests). You can create an account on our [forum](https://forum.beammp.com) and then login to BeamMP with the same credentials.
5. Select any server you like, and press `Connect`. Enjoy!

---

## **4. Known Issues**

- Нативный linux BeamMP-Launcher в настоящее время может подключиться к серверу только один раз, после отключения вам нужно перезапустить лаунчер. Вы можете сделать это, не закрывая игру между
- Если вы не видите кнопку «Мультиплеер». Убедитесь, что мод BeamMP присутствует и активирован в «Менеджере модов», затем попробуйте нажать CTRL + L.
- VPN любого типа могут вызывать проблемы с подключением.
- If the Launcher reports any errors, read the [FAQ](https://forum.beammp.com/c/faq/35).

Should you need further help with installation, you are welcome to create a post on our [forum](https://forum.beammp.com) or ask on our [Discord server](https://discord.gg/beammp).
