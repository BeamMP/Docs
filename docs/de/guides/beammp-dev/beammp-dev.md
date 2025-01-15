!!! warning „Diese Site befindet sich im Aufbau!“

```
An dieser Seite wird aktiv gearbeitet.

Du meinst, du könntest helfen? Dann klicke einfach auf die Seite mit dem Bleistift rechts!

Dies kann auch auf jeder Seite erfolgen.
```

# Erste Schritte

Um mit der Entwicklung für BeamMP zu beginnen, benötigst du mindestens:

- BeamNG.drive, lokal installiert
- BeamMP, lokal installiert; mindestens der Launcher, eventuell auch der Server
- Git, lokal installiert, und ein GitHub.com-Konto
- Ein Code-Editor, zum Beispiel VSCode oder Notepad++

---

# Unterschied zwischen Mod, Launcher und Server

BeamMP ist in drei Hauptteile unterteilt:

- Der Mod wird von BeamNG geladen, wie jeder andere Fahrzeug- oder UI-Mod für das Spiel. Seine Hauptfunktion besteht darin, eine lokale Verbindung mit dem Launcher herzustellen und die Multiplayer-UI-Elemente anzuzeigen. Er ist größtenteils in Lua geschrieben, mit etwas JavaScript, HTML und CSS für die UI-Elemente. Sein Repo ist [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)
- Die Hauptfunktion des Launchers besteht darin, eine konstante Verbindung zum Mod herzustellen und bei Bedarf eine Verbindung zum ausgewählten Server herzustellen sowie die Benutzeranmeldung beim BeamMP-Backend abzuwickeln. Er ist in C++ geschrieben, wird von BeamMP vorkompiliert und ist unter [https://github.com/BeamMP/BeamMP-Launcher](https://github.com/BeamMP/BeamMP-Launcher) zu finden.
- Der Server stellt Verbindungen zwischen einem oder mehreren Launchern her und sendet „Heartbeats“ an das BeamMP-Backend, wobei er Informationen wie IP, Port, Version, Anzahl der Spieler usw. bereitstellt. Darüber hinaus verwaltet und führt er serverseitige Lua-Plugins aus. Er ist in C++ geschrieben, von BeamMP für einige verschiedene Betriebssysteme und CPU-Architekturen vorkompiliert und kann unter [https://github.com/BeamMP/BeamMP-Server](https://github.com/BeamMP/BeamMP-Server) gefunden werden.

---

# Einrichten einer Entwicklungsumgebung zum Arbeiten am Mod

## Einen "unpacked" Ordner für BeamNG verwenden

Um effizient an Mods in BeamNG arbeiten zu können, empfiehlt es sich, einen `unpacked` Ordner zu verwenden, anstatt nach jeder Änderung Zip-Dateien zu verpacken.

Öffne den BeamNG-Benutzerordner, indem du zu `%appdata%/Local/BeamNG.drive/0.xx/mods` navigierst, wobei `xx` die neueste BeamNG-Version ist. Erstelle im Ordner `mods` einen Ordner mit dem Namen `unpacked` .

Weitere Informationen zum Benutzerordner finden sich unter [https://documentation.beamng.com/support/userfolder/](https://documentation.beamng.com/support/userfolder/)

## Aktivieren des Entwicklermodus im BeamMP-Launcher

Um zu verhindern, dass ein automatisches Update den lokalen Git-Klon überschreibt, kannst du dies mit dem Start-Argument `--no-download` deaktivieren. Wenn du außerdem nicht möchtest, dass der Launcher BeamNG automatisch startet, und Debug-Ausdrucke sehen möchtest, wird die Verwendung von `--dev` empfohlen.

Argument | Notiz
:-- | :--
`--help` oder `-h` | Gibt die folgende Liste von Argumenten aus
`--port <port>` oder `-p` | Ändere den Standard-Port auf `<port>` . Dies muss auch im Spiel geändert werden
`--verbose` oder `-v` | Ausführlicher Modus, gibt Debugmeldungen aus
`--no-download` | Überspringt den Download und die Installation des BeamMP Lua-Mods
`--no-update` | Überspringe das Anwenden von Launcher-Updates (Du musst manuell aktualisieren)
`--no-launch` | Überspringe den Start des Spiels (Du musst das Spiel manuell starten)
`--dev` | Entwicklermodus, dasselbe wie --verbose --no-download --no-launch --no-update
`--game <args...>` oder `-- <args...>` | Übergibt Argumente an das Spiel

## Klonen des BeamMP-Repos in den entpackten Ordner

Sie können die BeamMP-Mod-Dateien zwar manuell aus unserem GitHub-Repo kopieren, es wird jedoch dringend empfohlen, ein Quellcodeverwaltungssystem wie Git zu verwenden. Erstellen Sie zunächst einen Fork von [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)

Am effizientesten ist es, das Repo direkt in den `unpacked` Ordner zu klonen.

Bei verwendung von`git`, führe `git clone https://github.com/yourName/BeamMP` in einem PowerShell- oder CMD-Fenster aus, das aus dem `unpacked` Ordner gestartet wurde. Stelle im Benutzerordner sicher, dass unter `mods` kein `multiplayer` Ordner mehr vorhanden ist und dass jetzt `unpacked/beammp` vorhanden ist.

Probiere jetzt den Entwicklermodus aus. Starte den BeamMP-Launcher, starte BeamNG manuell und stelle im Spiel sicher, dass BeamMP der einzige aktive Mod ist. Du solltest BeamMP wie gewohnt verwenden können.

Mithilfe eines Code-Editors kann nun Code direkt im `unpacked` Ordner hinzugefügt oder geändern werden. Du kannst die Änderungen dann ausprobieren, indem Lua im Spiel durch drücken von `Ctrl+L` neu geladen wird. Durch drücken von`F5` kann die Benutzeroberfläche neu geladen werden, falls Änderungen daran vorgenommen wurden.

Wenn du mit den Änderungen zufrieden bist, kann dies über Git "comitted" werden. [Auf der Git-SCM-Website](https://git-scm.com/doc) finden sich Tutorials und Dokumentationen zur Verwendung von Git. Sobald die Änderungen comitted und (an Ihren Fork) gepusht wurden, können Sie einen Pull-Request stellen.

Wenn du auf Probleme stößt, kannst du jederzeit im #scripting-Kanal in unserem [Discord](https://discord.gg/beammp) nachfragen.

---

# Einrichten eines lokalen Servers

Beim Arbeiten mit BeamMP kann es von Vorteil sein, einen lokalen Server zu verwenden. Du kannst die allgemeine [Serverinstallation](../../server/create-a-server.md) durchführen und dabei die ersten beiden Schritte für rein lokale Verbindungen überspringen.

Setze den Server in der `serverConfig.toml` auf privat und verwende dabei eine beliebige Zeichenfolge als `AuthKey` .

---

# Mitwirkungsrichtlinien

Einzelheiten zum Codeformat, Commit-Nachrichtenformat, allgemeinen Best Practices für die Entwicklung usw. findest du in der Datei `CONTRIBUTING.md` in jedem Repo. Diese Datei enthält ausführlichere Informationen zum Mitwirken. Die `README.md` in jedem Repo enthält normalerweise auch Build-Schritte (für kompilierte Projekte).
