# F.A.Q. und bekannte Probleme

Liste häufig gestellter Fragen und bekannter Probleme.

---

## **Server**

---

#### **Wie kann ich meine eigenen Server einrichten?**

Alle Informationen um einen eigenen Server zu erstellen findest du [hier](https://docs.beammp.com/server/create-a-server/).

---

#### **Kann man unter Linux einen Server erstellen?**

Wir bieten Binaries für mehrere Linux Distributionen [hier](https://github.com/BeamMP/BeamMP-Server/releases/latest) an. Wenn es keine Binaries für dein OS oder deine Distro gibt, kannst du diese selber bauen, indem du dir die Source von unserem [GitHub](https://github.com/BeamMP/BeamMP-Server) runter lädst. Ein Tutorial kannst du [hier](https://github.com/BeamMP/BeamMP-Server#build-instructions) finden.

---

#### **Was sind die Hardware Mindestanforderungen für einen BeamMP-Server?**

- RAM: 50+ MiB nutzbar (ohne Betriebssystem puffer)
- CPU: &gt;1GHz, multicore bevorzugt
- Betriebssystem: Windows, Linux (theoretisch irgendein POSIX)
- GPU: Keine
- HDD: 10 MiB + Mods/Plugins
- Bandbreite: 5-10 MB/s Upload

---

### **Spieler außerhalb meines Netzwerks können meinem selbst gehosteten Server nicht beitreten**

Lese dir Schritt `1. Port Forwarding` in unserer Dokumentation, diese ist [hier](https://docs.beammp.com/server/create-a-server/#1-port-forwarding) verfügbar. Unten findest du eine Zusammenfassung von den wichtigsten Schritten. Wenn andere Spieler versuchen deinem Server beizutreten, und den Error Code 10060, 10061 oder 10083 im BeamMP-Launcher vorfinden, dann solltest du folgende Schritte prüfen:

- Leite Port 30814 weiter (oder welchen Port du in der  ServerConfig.toml gesetzt hast), für die Protokolle TCP und UDP.
- Erlaube BeamMP durch die Firewall für Einkommende und ausgehende Verbindungen. Das Deaktivieren der Firewall wird NICHT helfen
- Stelle sicher, dass du keinen VPN verwendest (dies wird Probleme verursachen).
- Stelle sicher, dass der Server ohne Probleme oder Fehlermeldungen läuft.

Du kanns prüfen, ob du den Port erfolgreich weitergeleitet hast, indem du die Website 'portchecker.co' nutzt während der Server läuft.

Beachte:

- Einige Internet Anbieter bieten keine dezidierten IPv4 Adressen an. Das bedeutet, dass eine Port Weiterleitung eventuell nicht möglich ist, obwohl diese Option am Router verfügbar ist.
- Die Weiterleitung von Ports ist nicht möglich, wenn du eine Mobile (4G/5G) Internet Verbindung hast.

---

### **Ich kann meinen selbst gehosteten Server in der Server-Liste sehen, aber nicht beitreten**

Wenn der Server auf demselben Computer wie das Spiel läuft, du selbst musst in dem Fall eine Direktverbindung mit 127.0.0.1 und dem Port deines Servers verwenden. Damit du deinem eigenen Server von der Server-Liste beitreten kannst, muss dein Router NAT-Loopback fähig sein. Diese Funktion wird nicht von allen Home-Routern unterstützt.

---

## **weitere Informationen**

---

#### **Wo kann ich den Code finden?**

Der Source Code kann auf unserem [GitHub](https://github.com/BeamMP) gefunden werden. Bevor du etwas damit anstellst, vergiss nicht, dass der Code unseren [Nutzungsbedingungen](https://forum.beammp.com/t/terms-of-use-v1-0/43) und Lizenzen unterliegt:

Code | Lizenz
--- | :-:
Server | [LIZENZ](https://github.com/BeamMP/BeamMP-Server/blob/master/LICENSE)
Launcher | [LIZENZ](https://github.com/BeamMP/BeamMP-Launcher/blob/master/README.md)
Client Lua | [LIZENZ](https://github.com/BeamMP/BeamMP/blob/development/LICENSE.md)

---

#### **Ich habe einen Bug oder Exploit gefunden. Was soll ich tun?**

Wenn das Problem auf den Code zurückzuführen ist, erstelle eine neue "Issue" im korrekten Repository auf [GitHub](https://github.com/BeamMP). Wir nutzen einen issue-basierten Workflow. Wenn du einen Fix für das Problem gefunden hast, erstelle am besten trotzdem eine "Issue", dann erstelle einen "Pull Request" der deine "Issue" löst. Weitere Informationen zum mitmachen findest du [hier](https://github.com/BeamMP/BeamMP/blob/development/CONTRIBUTING.md).

Wenn du keinen GitHub account hast oder nicht weißt, wie man GitHub nutzt, kannst du uns über folgende Wege kontaktieren:

- Wenn etwas nicht Empfindlich ist, kannst du es auf dem [BeamMP Forum](https://forum.beammp.com) posten, oder du kannst es auf unserem [Offiziellen Discord Server](https://discord.gg/beammp) melden.
- Wenn die Information empfindlich ist, melde diese direkt an ein Teammitglied auf unserem [Discord Server](https://discord.gg/beammp).
