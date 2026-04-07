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

Убедитесь, что у вас установлены базовые инструменты разработки, которые обычно входят в пакеты, например:

- Debian/Ubuntu: `sudo apt install build-essential`
- Fedora: `sudo dnf install cmake gcc gcc-c++ make perl perl-IPC-Cmd perl-FindBin perl-File-Compare perl-File-Copy kernel-headers kernel-devel`
- Arch: `sudo pacman -S base-devel`
- openSUSE: `zypper in -t pattern devel-basis`
- SteamOS (Arch): `sudo pacman -S base-devel linux-api-headers glibc libconfig` (Вам также необходимо выполнить команду `sudo steamos-readonly disable` , но не забудьте включить ее снова после установки пакетов)

Склонируйте `vcpkg`, выполните его начальную сборку (bootstrap) и добавьте в PATH

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

Клонируйте репозиторий BeamMP-Launcher в свою систему с помощью `git`, например: `git clone https://github.com/BeamMP/BeamMP-Launcher.git` [Дополнительная информация о клонировании репозитория GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Переключитесь на тег, который использовался для [последнего релиза](https://github.com/BeamMP/BeamMP-Launcher/releases/latest). Например, если в последнем релизе использовался `v2.6.4`, выполните команду `git checkout v2.6.4`

Если вы использовали пример команды клонирования, который мы предоставили, вы можете использовать `cd BeamMP-Launcher`, чтобы перейти в корневой каталог проекта.

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

Переместите готовое приложение из папки `/bin` в отдельную папку и запустите его оттуда:

```bash
mkdir -p ~/beammp-launcher
cp bin/BeamMP-Launcher ~/beammp-launcher/
cd ~/beammp-launcher
./BeamMP-Launcher
```

Нативный Linux-ланчер BeamMP запустится и будет использовать нативную версию BeamNG.drive для Linux

### **2c. Использование beamNG.drive с Proton**

Если вы хотите использовать родной Linux BeamMP-Launcher вместе с BeamNG.drive, работающим через Proton, вы можете сделать это:

Запустите BeamMP-Launcher, используя аргумент `--no-launch` (Это не позволит Launcher запустить собственный Linux BeamNG.drive). Дополнительную информацию об аргументах Launcher можно найти в [разделе Настройка среды разработки](../guides/beammp-dev/beammp-dev.md)

Измените расположение пользовательской папки Proton-BeamNG.drive на расположение Linux-BeamNG.drive (поскольку собственный Linux BeamMP-Launcher в настоящее время записывает только в пользовательскую папку Linux-BeamNG.drive)

Это можно сделать, например, создав символическую ссылку

- Запомните местоположение пользовательской папки Linux-BeamNG.drive (обычно она находится в `~/.local/share/BeamNG.drive`) и переименуйте ее, например, в `BeamNG.drive_old`
- Обратите внимание на расположение пользовательской папки Proton-BeamNG.drive (обычно она находится в `~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive`)
- Создайте символическую ссылку между обеими папками пользователей `ln -s ~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive ~/.local/share`

После установки символической ссылки между пользовательскими папками и скомпилированным лаунчером вы можете заставить Steam запустить игру через Proton, при этом лаунчер автоматически запустится со следующей заменой параметров запуска для оригинальной игры, которые можно найти в окне «Свойства» игры в ее записи в Steam:

- `~/BeamMP/BeamMP-Launcher --no-launch & %command% ; killall BeamMP-Launcher`

Обратите внимание, что это предполагает, что вы поместили скомпилированный ранее двоичный файл лаунчера в `/home/user/BeamMP/`, поэтому измените его так, чтобы он соответствовал месту, куда вы поместили готовый двоичный файл, и вам придется перекомпилировать лаунчер с правильной веткой git каждый раз при выпуске обновления лаунчера.

!!! совет "Добавление шрифта эмодзи для получения эмодзи в тексте"

```
In order to get emojis to show up in either the serverlist (As part of a servers customised name) or in the ingame chat, you need to have a font that contains emojis.

This can be done for example by adding the [Linux-port of the Windows Segoe-UI emoji font](https://github.com/mrbvrz/segoe-ui-linux)
```

---

## **3. Using BeamMP**

1. Once you have started the launcher, you should see a terminal window. Shortly after, the standard BeamNG launcher should start. **Do not** close the terminal window.
2. In the BeamNG.drive main menu, click the `Repository` button and check to make sure that `multiplayerbeammp` is **the only** enabled mod.
3. Выйдите в главное меню, нажмите «Ещё..», затем кнопку «Мультиплеер», чтобы начать игру по сети.
4. Вам будет предложено войти или играть в качестве гостя (не все серверы допускают гостей). Вы можете создать учетную запись на нашем [форуме](https://forum.beammp.com), а затем войти в BeamMP с теми же учетными данными.
5. Выберите любой понравившийся вам сервер и нажмите `Connect`. Наслаждайтесь!

---

## **4. Known Issues**

- Нативный linux BeamMP-Launcher в настоящее время может подключиться к серверу только один раз, после отключения вам нужно перезапустить лаунчер. Вы можете сделать это, не закрывая игру между
- Если вы не видите кнопку «Мультиплеер». Убедитесь, что мод BeamMP присутствует и активирован в «Менеджере модов», затем попробуйте нажать CTRL + L.
- VPN любого типа могут вызывать проблемы с подключением.
- Если Launcher сообщает о каких-либо ошибках, прочтите [FAQ](https://forum.beammp.com/c/faq/35).

Если вам потребуется дополнительная помощь с установкой, вы можете создать сообщение на нашем [форуме](https://forum.beammp.com) или задать вопрос на нашем [сервере Discord](https://discord.gg/beammp).
