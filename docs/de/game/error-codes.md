# Fehlercodes

Diese Seite enthält alle Fehlercodes, die der Launcher möglicherweise anzeigt.

---

Code | Beschreibung | Mögliche Lösung
--- | --- | ---
10048 | Der Launcher-Port wird bereits von etwas anderem verwendet. | Make sure to only have ONE instance of the BeamMP-Launcher running at a time. Try restarting your PC.
10038 / 10060 / 10061 | No Server answered on this specified IP and / or port | If you are the server owner, please check the port forwarding and/or firewall rules found at [BeamMP-Server](https://docs.beammp.com/server/create-a-server). If you are not the server owner, choose a different server or contact the owner if known.
10054 | Verbindung vom Peer zurückgesetzt | The server you're connecting to has gone offline.
Failed to find the game please launch it. Report this if the issue persists code 3. | Der Launcher konnte die Spielinformationen (Spielverzeichnis, Profilverzeichnis, Version usw.) im Registrierungseintrag nicht finden | Run the game at least once so the registry values get created.
Failed to find the game please launch it. Report this if the issue persists code 4. | Der Launcher konnte die Spielinformationen (Spielverzeichnis, Profilverzeichnis, Version usw.) im Registrierungseintrag nicht lesen | This error is most likely to appear in users with **pirated copies** of the game. If you have bought the game, run it at least once so the registry values get created.
Failed to Launch the game! launcher closing soon | Der Launcher konnte die ausführbare Datei des Spiels nicht finden | Run the game at least once before running the launcher again.
Game Closed! launcher closing soon | Das Spiel wurde beendet | Diese Meldung wird beim Beenden des Spiels oder wenn der Spielstart fehlgeschlagen ist, angezeigt.
Launcher Update failed! | Der Launcher konnte keine neue Version herunterladen | Check your internet connection and firewall / antivirus rules so that the launcher is not blocked.
Logger file init failed | Der Launcher kann keine Dateien erstellen | Run the launcher as administrator.
Please close the game and try again | Das Spiel ist bereits geöffnet und der Launcher kann den Ordner `multiplayer/mods` nicht leeren. | Close the game and retry.
Please launch the game at least once | Der Launcher hat versucht, das Verzeichnis des Spiels zu ändern, was jedoch fehlschlug | Run the game at least once before running the launcher again.
Primary Servers Offline! sorry for the inconvenience! | Der Launcher konnte nicht nach einem Update suchen | Check your internet connection and firewall rules. If there is no problem on your end, please check the [BeamMP updates channel](https://discord.com/channels/601558901657305098/697596153943949352) on our Discord.
Sorry Backend System Outage! Don't worry it will back on soon! | Das BeamMP-Backend hat nicht geantwortet | Check your internet connection and firewall rules. If there is no problem on your end, please check the [BeamMP updates channel](https://discord.com/channels/601558901657305098/697596153943949352) on our Discord.
Stuck on updating | Der Launcher bleibt beim Aktualisieren hängen und fährt nicht mit dem nächsten Schritt fort | Run the launcher as administrator and check your antivirus rules so that the launcher is not blocked.

If the launcher closes immediately, check the `Launcher.log` file in the folder where you installed BeamMP.
