# Fehlercodes

Diese Seite enthält alle Fehlercodes, die der Launcher möglicherweise anzeigt.

---

Code | Beschreibung | Mögliche Lösung
--- | --- | ---
10048 | Der Launcher-Port wird bereits von etwas anderem verwendet. | Stelle sicher, dass immer nur EINE Instanz des BeamMP-Launchers ausgeführt wird. Versuche eventuell, den PC neu zu starten.
10038 / 10060 / 10061 | Kein Server hat auf der angegebenen IP und/oder Port geantwortet | Wenn du der Serverbesitzer bist, überprüfen bitte die Portweiterleitungs- und/oder Firewall-Regeln, die du unter [BeamMP-Server](https://docs.beammp.com/server/create-a-server) finden. Wenn du nicht der Serverbesitzer bist, wähle einen anderen Server oder kontaktiere den Besitzer, falls bekannt.
10054 | Verbindung vom Peer zurückgesetzt | Der Server, mit dem eine Verbindung hergestellt werden soll, ist offline.
Failed to find the game please launch it. Report this if the issue persists code 3. | Der Launcher konnte die Spielinformationen (Spielverzeichnis, Profilverzeichnis, Version usw.) im Registrierungseintrag nicht finden | Starte das Spiel mindestens einmal, damit die Registrierungswerte erstellt werden.
Failed to find the game please launch it. Report this if the issue persists code 4. | Der Launcher konnte die Spielinformationen (Spielverzeichnis, Profilverzeichnis, Version usw.) im Registrierungseintrag nicht lesen | Dieser Fehler tritt am wahrscheinlichsten bei Benutzern mit **Raubkopien** des Spiels auf. Wenn du das Spiel gekauft hast, starte es mindestens einmal, damit die Registrierungswerte erstellt werden.
Failed to Launch the game! launcher closing soon | Der Launcher konnte die ausführbare Datei des Spiels nicht finden | Starte das Spiel mindestens einmal, bevor du den Launcher erneut ausführst.
Game Closed! launcher closing soon | Das Spiel wurde beendet | Diese Meldung wird beim Beenden des Spiels oder wenn der Spielstart fehlgeschlagen ist, angezeigt.
Launcher Update failed! | Der Launcher konnte keine neue Version herunterladen | Überprüfe die Internetverbindung und Firewall-/Antivirusregeln, damit der Launcher nicht blockiert wird.
Logger file init failed | Der Launcher kann keine Dateien erstellen | Führe den Launcher als Administrator aus.
Please close the game and try again | Das Spiel ist bereits geöffnet und der Launcher kann den Ordner `multiplayer/mods` nicht leeren. | Schließe das Spiel und versuche es erneut.
Please launch the game at least once | Der Launcher hat versucht, das Verzeichnis des Spiels zu ändern, was jedoch fehlschlug | Starte das Spiel mindestens einmal, bevor du den Launcher erneut ausführst.
Primary Servers Offline! sorry for the inconvenience! | Der Launcher konnte nicht nach einem Update suchen | Überprüfe die Internetverbindung und Firewall-Regeln. Wenn kein Problem vorliegt, überprüfe bitte den [BeamMP-Updatekanal](https://discord.com/channels/601558901657305098/697596153943949352) auf unserem Discord.
Sorry Backend System Outage! Don't worry it will back on soon! | Das BeamMP-Backend hat nicht geantwortet | Überprüfe die Internetverbindung und Firewall-Regeln. Wenn kein Problem vorliegt, überprüfe bitte den [BeamMP-Updatekanal](https://discord.com/channels/601558901657305098/697596153943949352) auf unserem Discord.
Stuck on updating | Der Launcher bleibt beim Aktualisieren hängen und fährt nicht mit dem nächsten Schritt fort | Führe den Launcher als Administrator aus und überprüfe deine Antivirenregeln, damit der Launcher nicht blockiert wird.

Wenn der Launcher sofort geschlossen wird, überprüfe die Datei `Launcher.log` im Ordner, in BeamMP installiert wurde.
