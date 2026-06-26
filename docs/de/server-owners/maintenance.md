# Server Wartung

Anleitungen, Tipps und Tricks wie man einen BeamMP-Server konfiguriert und wartet.

## Wie man den Server installiert

Für Installations-Instruktionen, siehe [Server Installation](create-a-server.md).

## Die ServerConfig Datei

Die Serverkonfiguration, eine Datei mit dem Namen `ServerConfig.toml` , verwendet das [TOML-Format](https://toml.io/en/) .

*HINWEIS* : Die *alte* Serverkonfigurationsdatei hieß `Server.cfg` . Diese wird jedoch nicht mehr verwendet. Der Server warnt dich, wenn diese noch vorhanden ist. Bitte beachte auch, dass die beiden Konfigurationsformate **nicht** miteinander kompatibel sind.

Die Konfiguration hat standardmäßig einen Abschnitt namens `[General]` , der die folgenden Werte enthält:

Schlüssel | Wert Typ | Beschreibung
--- | --- | ---
AuthKey | AuthKey Format `xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` wobei alle ,,x" Alphanumerische Charaktere (Nummern und Buchstaben) | Wird verwendet, um den Server beim Backend zu identifizieren. Du solltest einen beim folgen der Installations-Instruktionen bekommen haben.
Debug | true /false | Wenn aktiviert (true), werden mehr Meldungen im Protokoll angezeigt und mehr Informationen bereitgestellt. Aktiviere diese Option, wenn Probleme auftreten. Die Aktivierung erhöht die Größe der Protokolldatei erheblich.
Private | true/false | Wenn aktiviert (true), wird dein Server nicht in der Serverliste angezeigt. Jeder mit der richtigen IP-Adresse und dem richtigen Port kann sich weiterhin verbinden.
Description | Irgendein ,,Text" | Wird als Beschreibung des Servers in der Serverliste angezeigt (sofern der Server öffentlich ist). Du kannst Sonderzeichen verwenden, um dies mit Farben und Stilen zu formatieren.
Name | Irgendein ,,Text" | Wird als Name/Titel deines Servers in der Serverliste angezeigt. Du kannst Sonderzeichen verwenden, um diesen mit Farben und Stilen zu formatieren.
Map | Eine valide Kartenlokation, wie `/levels/gridmap_v2/info.json` | Die Karte, die dein Server hosten wird. Muss entweder standardmäßig installiert werden (eine Liste findest du unten) oder als Server-Mod.
MaxCars | Eine Nummer ≥ 1 | Die maximale Anzahl an Fahrzeugen pro Spieler. Alle weiteren Fahrzeuge, die ein Spieler zu spawnen versucht, werden sofort gelöscht.
Port | 1024-65535 | Der Netzwerkport, über den der Server erreichbar ist. Damit sich ein Spieler direkt mit deinem Server verbinden kann, benötigt er deine IP-Adresse und diesen Port.

Andere Abschnitte können und sollten von Server-Plugins verwendet werden (Lua-API kommt bald), etwa so: `[MyMod]` .

Der AuthKey **muss** von dir festgelegt werden. Er ist standardmäßig leer und muss mit deinem AuthKey aus dem vorherigen Installationsschritt ausgefüllt werden. Gib diesen Schlüssel nicht an Dritte weiter und verwische ihn in Screenshots vollständig.

### Alle vanilla Karten Namen

Hier sind alle Standard Maps:

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

### Passe das Aussehen deines Servernamens an

Verwende diese Sonderzeichen vor deinem Text, um einen Effekt auf diesen Text in der Serverliste anzuwenden:

Wert | Beschreibung
:-: | ---
`^r` | Zurücksetzen
`^p` | Neue Zeile(nur Beschreibungen)
`^n` | Unterstrichen
`^l` | Fett
`^m` | Durchgestrichen
`^o` | Italic
`^0` | Schwarz
`^1` | Blau
`^2` | Grün
`^3` | Hellblau
`^4` | Rot
`^5` | Rosa
`^6` | Orange
`^7` | Grau
`^8` | Dunkelgrau
`^9` | Hellviolett
`^a` | Hellgrün
`^b` | Hellblau
`^c` | Dunkelorange
`^d` | Hellrosa
`^e` | Gelb
`^f` | Weiß

### Passe deine Server-Tags an

Mithilfe von Tags können Benutzer nach einem bestimmten Servertyp suchen. Deine ServerConfig.toml wird mit dem Freeroam-Tag `Tags = "Freeroam"` generiert.

Du kannst mehrere Tags durch Kommas getrennt hinzufügen `Tags = "Events,Offroad,lang:english"` , die Groß- und Kleinschreibung wird nicht berücksichtigt.

Du kannst aus der folgenden Liste wählen:

- Alter/Inhalt:

    - `Mature/18+`

- Spieltypen:

    - `Freeroam`
    - `Roleplay`
    - `Economy`
    - `Traffic`

- Rennkategorien:

    - `Racing`
    - `Racing:NASCAR`
    - `Racing:Track`
    - `Racing:Drag`
    - `Racing:Rally`
    - `Touge`

- Off-Roading und Herausforderungen:

    - `Offroad`
    - `Crawling`
    - `Dakar`
    - `Challenge`

- Zerstörungsevents

    - `Derby`
    - `Arena`

- Wetter und Zeit Zustände:

    - `Snow/Ice`
    - `Rain`
    - `Night`
    - `Weather`

- Spielmodi:

    - `Gamemode`
    - `Gamemode:Racing`
    - `Gamemode:Rally`
    - `Gamemode:Drag`
    - `Gamemode:Derby`
    - `Gamemode:Infection`
    - `Gamemode:Cops-Robbers`
    - `Gamemode:Delivery`
    - `Gamemode:Sumo`

- Community und Events:

    - `Scenarios`
    - `Events`
    - `Leaderboard`

- Mods:

    - `Modded`
    - `Mod:BeamPaint`
    - `Mod:BeamJoy`
    - `Mod:CEI`

- Sprachen:

    - `Lang:English`
    - `Lang:Russian`
    - `Lang:French`
    - `Lang:Spanish`
    - `Lang:Portuguese`
    - `Lang:German`
    - `Lang:Polish`
    - `Lang:Arabic`

- Andere:

    - `Vanilla`
    - `Moderated`

Sollte ein Tag in dieser Liste fehlen, kannst du [hier](https://forum.beammp.com/t/introducing-server-tags/1320081) einen Antrag auf dessen Ergänzung stellen.

## Die Server.log Datei

Diese Datei wird beim Serverstart generiert. Sie spiegelt die Meldungen wieder, die du in der Konsole siehst, wenn du den Server startest. Du solltest diese Datei jedes Mal anhängen, wenn du Unterstützung von unserem Support benötigst. Dein AuthKey wird nie angezeigt, sodass du sie in der Regel unverändert senden kannst.

Das Format ist wie folgt (das Präfix $ bedeutet „variabel“, siehe unten):

```
[$DATE $TIME] $CONTEXT [$LOG_LEVEL] $MESSAGE
```

Wo:

- `$DATE` ist das Datum der Nachricht, zum Beispiel 21.07.2021
- `$TIME` ist die Uhrzeit der Nachricht, zum Beispiel 11:05:23
- `$CONTEXT` (nur im Debug-Modus sichtbar und hauptsächlich für Entwickler relevant) ist der Kontext der Nachricht, der entweder lautet:
    - `(Player ID) “Player Name”` , wobei die Spieler-ID für die Moderation nützlich ist
    - Ein kurzer Name wie „HeartbeatThread“
- `$LOG_LEVEL` ist eine der Wichtigkeitsstufen einer Nachricht:
    - `DEBUG` : Nur im Debug-Modus sichtbar, normalerweise Spam und nur für Entwickler wichtig
    - `INFO` : Allgemeine Informationen
    - `LUA` : Nachricht von einem Lua-Plugin
    - `WARN` : Beschreibt etwas, das normalerweise nicht passieren sollte
    - `ERROR` : Etwas ist sehr schiefgelaufen oder war sehr unerwartet
    - `FATAL` : Es ist etwas passiert, das zur Abschaltung des Servers führte.
- `$MESSAGE` Die Nachricht selbst. Normalerweise solltest du darauf achten und sie verstehen. In manchen Fällen kann sie kryptisch sein, aber die allgemeine Regel lautet: Solange mit dem Server alles in Ordnung ist und keine sichtbaren Fehler auftreten, ist alles in Ordnung.

## Den Server updaten

### Warum aktualisieren

Sobald ein neues Update veröffentlicht wird, empfiehlt es sich, den Server zu aktualisieren. Neben den allgemeinen neuen Funktionen usw. beinhaltet dies in der Regel Fehlerbehebungen, Stabilitäts- und Sicherheitsverbesserungen.

Um Neuigkeiten zu Updates zu erhalten, sobald diese herauskommen, folge entweder dem „Update“-Kanal des Discord-Servers, halte in den Foren danach Ausschau oder sieh dir die die [GitHub-Release-Seite](https://github.com/BeamMP/BeamMP-Server/releases) an bzw. frage danach.

### So aktualisierst du

#### Wenn du einen Partner  Hosting-Anbieter von BeamMP verwendest

Wenn du einen Hosting-Partner von BeamMP nutzt, funktionieren die folgenden Anweisungen wahrscheinlich nicht. Wir empfehlen dir, auf weitere Informationen deines Hosting-Anbieters zu warten oder sich an diesen zu wenden, um Unterstützung zu erhalten.

#### Den Server selbst verwalten

Der Server wird aktualisiert, indem die alte ausführbare Datei durch die neue ersetzt wird. Falls du dir unsicher bist, wie das geht, findest du unten eine Schritt-für-Schritt-Anleitung für Windows und Linux.

Wenn du aus dem Quellcode gebaut hast, führe einfach einen Neuaufbau durch. Führe vor dem Neuaufbau unbedingt den `git submodule update --init --recursive` aus.

#### Auf Windows

1. Stelle sicher, dass du die [Visual C++ Redistributables](https://aka.ms/vs/17/release/vc_redist.x64.exe) installiert hast , um den Server auszuführen.
2. Gehe  zu [BeamMP.com](https://beammp.com/) und klicke auf die Schaltfläche „Server herunterladen“.
3. Nach dem Download sollte eine Datei namens `BeamMP-Server.exe` angezeigt werden. Wir nennen diese die „neue ausführbare Datei“.
4. Wechsle in den Ordner, in dem sich deine aktuelle `BeamMP-Server.exe` befindet (normalerweise derselbe Ordner, in dem sich deine `ServerConfig.toml` befindet). Wir nennen diesen Ordner die „alte ausführbare Datei“.
5. Ersetze die alte ausführbare Datei durch die neue ausführbare Datei (beispielsweise indem du die neue ausführbare Datei in den Ordner kopieren oder verschiebst).

#### Auf Linux

1. Gehe zu [BeamMP.com](https://beammp.com/) und klicke auf die Schaltfläche „Server herunterladen“. Du wirst zur Github-Release-Seite des Servers weitergeleitet.
2. Lade die richtige Version für deine Distribution herunter. Der Einfachheit halber heißt sie ab sofort `BeamMP-Server-xxx` , wobei `xxx` die Version für die von deiner verwendete Distribution bezeichnet.
3. Nach dem Download sollte eine Datei namens `BeamMP-Server-xxx` angezeigt werden, abhängig von der heruntergeladenen Version. Wir nennen diese Datei die „neue ausführbare Datei“.
4. Wechsele in den Ordner, in dem sich deine aktuelle `BeamMP-Server-xxx` Datei befindet (normalerweise derselbe Ordner, in dem sich deine `ServerConfig.toml` befindet). Wir nennen diesen Ordner die „alte Datei“.
5. Ersetze die alte ausführbare Datei durch die neue ausführbare Datei (beispielsweise indem du die neue ausführbare Datei in den Ordner kopieren oder verschiebst).
6. Öffne ein Terminal in dem Ordner, in dem du die ausführbare Datei ersetzt hast, und führe den Befehl `sudo chmod +x BeamMP-Server-xxx` aus. Dadurch wird sichergestellt, dass der Server ausgeführt werden kann.

### Automatisierte Updates

Der Server hat (noch) keinen Support für automatische Updates oder Update Benachrichtigungen.

Du kannst jedoch die GitHub-API nach der neuesten Version fragen, indem du  die Serverversion anhand der Tags überprüfst. Du erhältst diese per GET von `https://api.github.com/repos/BeamMP/BeamMP-Server/git/refs/tags` .
