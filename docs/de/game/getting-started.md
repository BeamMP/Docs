# Erste Schritte

## **1. Kompatibilität**

BeamMP ist vollständig kompatibel mit Windows und Linux, an der Kompatibilität mit MacOS noch wird gearbeitet. Da es sich bei Linux und MacOS jedoch um sekundäre Plattformen handelt, sind Fehler zu erwarten.

!!! warning "Warnung"

    BeamMP funktioniert nicht mit Raubkopien oder veralteten Versionen von BeamNG.drive.
    Das BeamMP-Support Team bietet keinen Support für Probleme mit Raubkopien / veralteten Kopien.

## **2. Installation**

### **2a. Windows Installation**

1. Öffne [beammp.com](https://beammp.com/) und klicke auf die Schaltfläche „Download Client“.
2. Extrahiere das Archiv `BeamMP_Installer.zip` .
3. Starte `BeamMP_Installer.exe` und folge den Anweisungen.
4. Das BeamMP Launcher-Symbol sollte auf dem Desktop erscheinen. Wenn nicht, suchen Sie einfach in der Windows-Suchleiste nach „BeamMP“.
5. Sobald der Launcher gestartet ist, sollte ein Terminalfenster angezeigt werden. Kurz darauf sollte BeamNG.drive automatisch starten. Schließe **das Terminalfenster nicht**.
6. Klicke nach dem Start von BeamNG im Hauptmenü auf die Schaltfläche `Repository` und stelle sicher, dass `multiplayerbeammp` **der einzige** aktivierte Mod ist.
7. Kehre zum Hauptmenü zurück und klicke auf die Schaltfläche „Multiplayer“, um den Multiplayer zu starten.
8. Du wirst aufgefordert, dich anzumelden oder als Gast zu spielen (nicht alle Server erlauben Gäste). Du kannst in unserem [Forum](https://forum.beammp.com) ein Konto erstellen und dich dann mit denselben Anmeldeinformationen bei BeamMP anmelden.
9. Wählen einen beliebigen Server aus und drücken `Connect` . Viel Spaß!

!!! note ""

    Wenn du in eine Sitzung mit mehreren bereits gespawnten Autos beitrittst, könnte das Laden eventuell etwas länger dauern.

### **2b. Linux Installation**

Derzeit musst du den Launcher selbst erstellen. Dazu benötigst du grundlegende Kenntnisse zum Erstellen einer Anwendung.

Stelle sicher, dass grundlegende Entwicklungstools installiert sind, welche oft in Paketen enthalten sind, zum Beispiel:

- Debian: `sudo apt install build-essential`
- Fedora: `sudo dnf install cmake gcc gcc-c++ make perl perl-IPC-Cmd perl-FindBin perl-File-Compare perl-File-Copy kernel-headers kernel-devel`
- Arch: `sudo pacman -S base-devel`
- openSUSE: `zypper in -t pattern devel-basis`
- SteamOS (Arch): `sudo pacman -S base-devel linux-api-headers glibc libconfig` (Du musst auch `sudo steamos-readonly disable` ausführen, schalte es jedoch nach der Installation wieder ein)


Klone `vcpkg`, initialisiere es und füge es zu PATH hinzu

1.
```bash
git clone https://github.com/microsoft/vcpkg.git
```

2.
```bash
./vcpkg/bootstrap-vcpkg.sh
```

3.
```bash
export VCPKG_ROOT="$(pwd)/vcpkg"
export PATH=$VCPKG_ROOT:$PATH
```


Klone das BeamMP-Launcher-Repository mit `git` auf dein System, zum Beispiel:
`git clone https://github.com/BeamMP/BeamMP-Launcher.git`
[Weitere Informationen zum Klonen eines GitHub-Repos](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Lade das "Tag", das für die [neueste Version](https://github.com/BeamMP/BeamMP-Launcher/releases/latest) verwendet wurde. Wenn beispielsweise `v2.3.2` in der neuesten Version verwendet wird, führe `git checkout v2.3.2` aus.

Im Stammverzeichnis des Projekts, führe aus:

1.
```cmake
cmake . -B bin -DCMAKE_TOOLCHAIN_FILE=$VCPKG_ROOT/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-linux
```

2.
```cmake
cmake --build bin --parallel
```

!!!note ""

    Sollte dir während des Erstellens der RAM ausgehen, kannst du die Anweisung --parallel weglassen. Dann wird weniger RAM verwendet, da das Erstellen nur auf einem CPU-Thread erfolgt.

!!!note ""

    Wenn du -DCMAKE_BUILD_TYPE=Release nicht spezifizierst, erstellst du eine Debug-Version, die zwar eine größere Dateigröße hat, aber nicht den Fehler „Launcher kann sich nur einmal mit einem Server verbinden" enthält.

!!!note "Fedora Benutzer"
    Wenn vcpkg während der OpenSSL-Kompilierung mit Kernel-Header-Fehlern fehlschlägt, stelle sicher, dass alle Abhängigkeiten installiert sind:
    ```bash
    sudo dnf install kernel-headers kernel-devel gcc gcc-c++ make perl
    ```
    Bereinige dann den vcpkg-Cache:
    ```bash
    rm -rf $VCPKG_ROOT/buildtrees/openssl
    ```
    Und wiederhole den cmake-Konfigurationsbefehl.

Verschiebe die fertige Anwendung aus dem `/bin` Ordner in einen eigenen Ordner und führe sie von dort aus aus:
```bash
mkdir -p ~/beammp-launcher
cp bin/BeamMP-Launcher ~/beammp-launcher/
cd ~/beammp-launcher
./BeamMP-Launcher
```

!!!note "Konfiguration des nativen Linux-Spielpfads"
    Um die native Linux-Version von BeamNG.drive zu verwenden (bessere Leistung als Proton), konfiguriere den Spielpfad in `Launcher.cfg`:

    Finde deine BeamNG-Installation:
    ```bash
    find ~/.steam ~/.local/share/Steam -name "BeamNG.drive.x64" 2>/dev/null
    ```

    Erstelle oder bearbeite `~/beammp-launcher/Launcher.cfg`:
    ```json
    {
        "Port": 4444,
        "Build": "Default",
        "CachingDirectory": "./Resources",
        "GamePath": "$HOME/.steam/steam/steamapps/common/BeamNG.drive/BinLinux/BeamNG.drive.x64"
    }
    ```

    Häufige Pfade:
    - `$HOME/.steam/steam/steamapps/common/BeamNG.drive/BinLinux/BeamNG.drive.x64`
    - `$HOME/.local/share/Steam/steamapps/common/BeamNG.drive/BinLinux/BeamNG.drive.x64`

Der native Linux BeamMP-Launcher wird gestartet und verwendet das native Linux BeamNG.drive

### **2c. Nutzung BeamNG.drive mit Proton**

Wenn du den nativen Linux BeamMP-Launcher zusammen mit BeamNG.drive, das über Proton läuft, verwenden möchtest, kannst du dies folgendermassen tun:

Starte den BeamMP-Launcher mit dem Argument `--no-launch` (dadurch wird verhindert, dass der Launcher das native Linux BeamNG.drive startet). Weitere Informationen zu den Launcher-Argumenten findest du im [Abschnitt „Einrichtung der Entwicklungsumgebung“.](../guides/beammp-dev/beammp-dev.md)

Ändere den Speicherort des Benutzerordners von Proton-BeamNG.drive in den Speicherort von Linux-BeamNG.drive (da der native Linux BeamMP-Launcher derzeit nur in den Benutzerordner des Linux-BeamNG.drive schreibt).

Dies kann beispielsweise durch die Erstellung eines symbolischen Links erfolgen.

- Notiere dir den Speicherort des Benutzerordners Linux-BeamNG.drive (dieser befindet sich normalerweise in `~/.local/share/BeamNG.drive` ) und benenne<br>ihn um, beispielsweise in `BeamNG.drive_old`
- Notiere den Speicherort des Benutzerordners von Proton-BeamNG.drive (normalerweise zu finden unter `~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive `).
- Erstelle einen symbolischen Link zwischen beiden Benutzerordnern, zum Beispiel: `ln -s ~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive ~/.local/share`

Wenn der symbolische Link zwischen den Benutzerordnern und dem kompilierten Launcher vorhanden ist, kann Steam das Spiel über Proton ausführen lassen und gleichzeitig den Launcher automatisch mit dem folgenden Ersatz für die Startoptionen für das Standardspiel ausführen, die im Eigenschaftenfenster des Spiels in seinem Eintrag in Steam zu finden sind:

- `~/BeamMP/BeamMP-Launcher --no-launch & %command% ; killall BeamMP-Launcher`

Beachte, dass hierbei davon ausgegangen wird, dass die Binärdatei des Launchers, die Sie zuvor kompiliert wurde, in `/home/user/BeamMP/` abgelegt wurde. Ändere diese daher so, dass sie mit der Stelle übereinstimmt, an der du die fertige Binärdatei abgelegt hast. Außerdem musst du  den Launcher jedes Mal mit dem richtigen Git-Zweig neu kompilieren, wenn ein Launcher-Update veröffentlicht wird.

!!! tip "Hinzufügen von emoji-font um in-text emojis zu erhalten"

    Damit Emojis entweder in der Serverliste (als Teil eines benutzerdefinierten Servernamens) oder im Ingame-Chat angezeigt werden, benötigst du eine Schriftart, die Emojis enthält.

    Dies kann beispielsweise durch Hinzufügen des [Linux-Ports der Windows Segoe-UI-Emoji-Schriftart](https://github.com/mrbvrz/segoe-ui-linux) erfolgen.

---

## **3. Bekannte Probleme**

- Der native Linux BeamMP-Launcher kann sich derzeit nur einmal mit einem Server verbinden, nach dem Trennen der Verbindung muss der Launcher neu gestartet werden. Dies ist möglich, ohne das Spiel zwischendurch schließen zu müssen.
- Wenn die Schaltfläche „Multiplayer" nicht angezeigt wird, stelle sicher, dass der BeamMP-Mod im „Mod Manager" vorhanden und aktiviert ist, und drücke dann STRG + L.
- VPNs jeglicher Art können Verbindungsprobleme verursachen.
- Beim ersten Start unter Linux Native erstellt der Launcher seine Konfigurationsdatei, was möglicherweise einen GNOME-Dialog „Reagiert nicht" auslöst. Klicke auf „Warten", dies tritt nur einmal auf.
- Wenn der Launcher Fehler meldet, lies die [FAQ](https://forum.beammp.com/c/faq/35) .

Solltest du weitere Hilfe bei der Installation benötigen, kannst du einen Beitrag in unserem [Forum](https://forum.beammp.com) erstellen oder auf unserem [Discord-Server](https://discord.gg/beammp) nachfragen.
