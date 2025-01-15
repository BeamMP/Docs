# Erste Schritte

## **Compatibility**

BeamMP ist vollständig kompatibel mit Windows und Linux, an der Kompatibilität mit MacOS noch wird gearbeitet. Da es sich bei Linux und MacOS jedoch um sekundäre Plattformen handelt, sind Fehler zu erwarten.

BeamMP funktioniert möglicherweise nicht mit Raubkopien des Spiels.

## **Installation**

### **Windows Installation**

1. Öffne [beammp.com](https://beammp.com/) und klicke auf die Schaltfläche „Download Client“.
2. Extrahiere das Archiv `BeamMP_Installer.zip` .
3. Starte `BeamMP_Installer.exe` und folge den Anweisungen.
4. Das BeamMP Launcher-Symbol sollte auf dem Desktop erscheinen. Wenn nicht, suchen Sie einfach in der Windows-Suchleiste nach „BeamMP“.
5. Sobald der Launcher gestartet ist, sollte ein Terminalfenster angezeigt werden. Kurz darauf sollte BeamNG.drive automatisch starten. Schließe **das Terminalfenster nicht**.
6. Klicke nach dem Start von BeamNG im Hauptmenü auf die Schaltfläche `Repository` und stelle sicher, dass `multiplayerbeammp` **der einzige** aktivierte Mod ist.
7. Kehre zum Hauptmenü zurück und klicke auf die Schaltfläche „Multiplayer“, um den Multiplayer zu starten.
8. Du wirst aufgefordert, dich anzumelden oder als Gast zu spielen (nicht alle Server erlauben Gäste). Du kannst in unserem [Forum](https://forum.beammp.com) ein Konto erstellen und dich dann mit denselben Anmeldeinformationen bei BeamMP anmelden.
9. Wählen einen beliebigen Server aus und drücken `Connect` . Viel Spaß!

Hinweis: *Da beim Verbinden mit einem Server wahrscheinlich Fahrzeuge von anderen Spielern geladen werden müssen, kann der Beitritt länger als erwartet dauern.*

### **Linux Installation**

Derzeit musst du den Launcher selbst erstellen. Dazu benötigst du grundlegende Kenntnisse zum Erstellen einer Anwendung.

Stelle sicher, dass [`vcpkg`](https://learn.microsoft.com/en-us/vcpkg/get_started/get-started?pivots=shell-bash#1---set-up-vcpkg) sowie grundlegende Entwicklungstools installiert sind, welche oft in Paketen enthalten sind, zum Beispiel:

- Debian: `sudo apt install build-essential`
- Fedora: `sudo dnf groupinstall "Development Tools"`
- Arch: `sudo pacman -S base-devel`
- openSUSE: `zypper in -t pattern devel-basis`

Klone das BeamMP-Launcher-Repository mit `git` auf dein System, zum Beispiel: `git clone https://github.com/BeamMP/BeamMP-Launcher.git` [Weitere Informationen zum Klonen eines GitHub-Repos](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Lade das "Tag", das für die [neueste Version](https://github.com/BeamMP/BeamMP-Launcher/releases/latest) verwendet wurde. Wenn beispielsweise `v2.3.2` in der neuesten Version verwendet wird, führe `git checkout v2.3.2` aus.

Im Stammverzeichnis des Projekts, führe aus:

1. `cmake -DCMAKE_BUILD_TYPE=Release . -B bin -DCMAKE_TOOLCHAIN_FILE=~/vcpkg/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-linux`
2. `cmake --build bin --parallel --config Release`

> Sollte während des Erstellens der Arbeitsspeicher ausgehen, kann man die Anweisung --parallel weglassen. Dann wird weniger Arbeitsspeicher benötigt, da das Erstellen nur noch auf einem CPU-Thread erfolgt.

Verschiebe die fertige Anwendung aus dem `/bin` Ordner in einen eigenen Ordner und führe sie von dort aus aus.

Der native Linux BeamMP-Launcher wird gestartet und verwendet das native Linux BeamNG.drive

#### **Using beamNG.drive with Proton**

Wenn du den nativen Linux BeamMP-Launcher zusammen mit BeamNG.drive, das über Proton läuft, verwenden möchtest, kannst du dies folgendermassen tun:

Führe den BeamMP-Launcher mit dem Argument `-no-launch` aus (dadurch wird verhindert, dass der Launcher das native Linux-System BeamNG.drive startet). Weitere Informationen zu den Launcher-Argumenten finden sich unter [Development Environment Setup.](../guides/beammp-dev/beammp-dev.md)

Ändere den Speicherort des Benutzerordners von Proton-BeamNG.drive in den Speicherort von Linux-BeamNG.drive (da der native Linux BeamMP-Launcher derzeit nur in den Benutzerordner des Linux-BeamNG.drive schreibt).

Dies kann beispielsweise durch die Erstellung eines symbolischen Links erfolgen.

- Notiere den Speicherort des Benutzerordners des nativen  Linux-BeamNG.drive (normalerweise zu finden unter `~/.local/share/BeamNG.drive` ) und benenne ihn um, zum Beispiel in „BeamNG.drive_old“
- Notiere den Speicherort des Benutzerordners von Proton-BeamNG.drive (normalerweise zu finden unter `~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive `).
- Erstelle einen symbolischen Link zwischen beiden Benutzerordnern, zum Beispiel: `ln -s ~/.local/share/Steam/steamapps/compatdata/284160/pfx/drive_c/users/steamuser/AppData/Local/BeamNG.drive ~/.local/share`

---

## **Known Issues**

- Der native Linux BeamMP-Launcher kann sich derzeit nur einmal mit einem Server verbinden, nach dem Trennen der Verbindung muss der Launcher neu gestartet werden. Dies ist möglich, ohne das Spiel zwischendurch schließen zu müssen.
- Wenn die Schaltfläche „Multiplayer“ nicht angezeigt wird, stelle sicher, dass der BeamMP-Mod im „Mod Manager“ vorhanden und aktiviert ist, und drücke dann STRG + L.
- VPNs jeglicher Art können Verbindungsprobleme verursachen.
- Wenn der Launcher Fehler meldet, lies die [FAQ](https://forum.beammp.com/c/faq/35) .

Solltest du weitere Hilfe bei der Installation benötigen, kannst du einen Beitrag in unserem [Forum](https://forum.beammp.com) erstellen oder auf unserem [Discord-Server](https://discord.gg/beammp) nachfragen.
