!!! warning „Diese Site befindet sich im Aufbau!“

```
An dieser Seite wird aktiv gearbeitet.

Du meinst, du könntest helfen? Dann klicke einfach auf die Seite mit dem Bleistift rechts!

Dies kann auch auf jeder Seite erfolgen.
```

# Getting started

Um mit der Entwicklung für BeamMP zu beginnen, benötigst du mindestens:

- BeamNG.drive, installed locally
- BeamMP, lokal installiert; mindestens der Launcher, eventuell auch der Server
- Git, installed locally, and a GitHub.com account
- A code editor, for example VSCode or notepad++

---

# Difference between mod, launcher and server

BeamMP is split into three main parts:

- The mod is loaded by BeamNG, like any other vehicle or UI mod for the game. Its main function is to establish a local connection with the launcher and to display the multiplayer UI elements. It's mostly written in Lua, with some JavaScript, HTML, and CSS for the UI elements. Its repo is [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)
- The launcher's main function is to establish a constant connection to the mod, and once necessary, establish a connection to the chosen server, as well as handling user login with the BeamMP backend. It's written in C++, is precompiled by BeamMP and can be found at [https://github.com/BeamMP/BeamMP-Launcher](https://github.com/BeamMP/BeamMP-Launcher)
- The server establishes connections between one or many launchers, as well as "heartbeating" to the BeamMP backend, providing information such as IP, port, version, number of players, etc. Additionally, it manages and runs server-side Lua plugins. It's written in C++, precompiled by BeamMP for a few different OS and CPU architectures, and can be found at [https://github.com/BeamMP/BeamMP-Server](https://github.com/BeamMP/BeamMP-Server)

---

# Setting up a development environment to work on the mod

## Einen "unpacked" Ordner für BeamNG verwenden

Um effizient an Mods in BeamNG arbeiten zu können, empfiehlt es sich, einen `unpacked` Ordner zu verwenden, anstatt nach jeder Änderung Zip-Dateien zu verpacken.

Öffne den BeamNG-Benutzerordner, indem du zu `%appdata%/Local/BeamNG.drive/0.xx/mods` navigierst, wobei `xx` die neueste BeamNG-Version ist. Erstelle im Ordner `mods` einen Ordner mit dem Namen `unpacked` .

Weitere Informationen zum Benutzerordner finden sich unter [https://documentation.beamng.com/support/userfolder/](https://documentation.beamng.com/support/userfolder/)

## Enabling dev mode in the BeamMP launcher

Um zu verhindern, dass ein automatisches Update den lokalen Git-Klon überschreibt, kannst du dies mit dem Start-Argument `--no-download` deaktivieren. Wenn du außerdem nicht möchtest, dass der Launcher BeamNG automatisch startet, und Debug-Ausdrucke sehen möchtest, wird die Verwendung von `--dev` empfohlen.

Argument | Note
:-- | :--
`--help` or `-h` | Gibt die folgende Liste von Argumenten aus
`--port <port>` or `-p` | Ändere den Standard-Port auf `<port>` . Dies muss auch im Spiel geändert werden
`--verbose` or `-v` | Ausführlicher Modus, gibt Debugmeldungen aus
`--no-download` | Überspringt den Download und die Installation des BeamMP Lua-Mods
`--no-update` | Überspringe das Anwenden von Launcher-Updates (Du musst manuell aktualisieren)
`--no-launch` | Überspringe den Start des Spiels (Du musst das Spiel manuell starten)
`--dev` | Entwicklermodus, dasselbe wie --verbose --no-download --no-launch --no-update
`--game <args...>` or `-- <args...>` | Passes arguments to the game

## Cloning the BeamMP repo into the unpacked folder

While you can manually copy the BeamMP mod files from our github repo, it is highly recommended to use a source-control system like git. First create a fork of [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)

Am effizientesten ist es, das Repo direkt in den `unpacked` Ordner zu klonen.

Bei verwendung von`git`, führe `git clone https://github.com/yourName/BeamMP` in einem PowerShell- oder CMD-Fenster aus, das aus dem `unpacked` Ordner gestartet wurde. Stelle im Benutzerordner sicher, dass unter `mods` kein `multiplayer` Ordner mehr vorhanden ist und dass jetzt `unpacked/beammp` vorhanden ist.

Probiere jetzt den Entwicklermodus aus. Starte den BeamMP-Launcher, starte BeamNG manuell und stelle im Spiel sicher, dass BeamMP der einzige aktive Mod ist. Du solltest BeamMP wie gewohnt verwenden können.

Mithilfe eines Code-Editors kann nun Code direkt im `unpacked` Ordner hinzugefügt oder geändern werden. Du kannst die Änderungen dann ausprobieren, indem Lua im Spiel durch drücken von `Ctrl+L` neu geladen wird. Durch drücken von`F5` kann die Benutzeroberfläche neu geladen werden, falls Änderungen daran vorgenommen wurden.

Wenn du mit den Änderungen zufrieden bist, kann dies über Git "comitted" werden. [Auf der Git-SCM-Website](https://git-scm.com/doc) finden sich Tutorials und Dokumentationen zur Verwendung von Git. Sobald die Änderungen comitted und (an Ihren Fork) gepusht wurden, können Sie einen Pull-Request stellen.

Wenn du auf Probleme stößt, kannst du jederzeit im #scripting-Kanal in unserem [Discord](https://discord.gg/beammp) nachfragen.

---

# Setting up a local server

Beim Arbeiten mit BeamMP kann es von Vorteil sein, einen lokalen Server zu verwenden. Du kannst die allgemeine [Serverinstallation](../../server/create-a-server.md) durchführen und dabei die ersten beiden Schritte für rein lokale Verbindungen überspringen.

Setze den Server in der `serverConfig.toml` auf privat und verwende dabei eine beliebige Zeichenfolge als `AuthKey` .

---

# Mitwirkungsrichtlinien

Einzelheiten zum Codeformat, Commit-Nachrichtenformat, allgemeinen Best Practices für die Entwicklung usw. findest du in der Datei `CONTRIBUTING.md` in jedem Repo. Diese Datei enthält ausführlichere Informationen zum Mitwirken. Die `README.md` in jedem Repo enthält normalerweise auch Build-Schritte (für kompilierte Projekte).
