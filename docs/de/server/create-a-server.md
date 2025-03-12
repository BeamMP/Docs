# Server Installation

## **Einen Server erstellen**

Die Grundlagen für das Erstellen eines Servers

---

### **Übersicht**

**Von Zuhause aus einen Server anzubieten ist kostenlos. Einen externen VPS zu verwenden ist jedoch meist leichter und wesentlich sicherer!**

Server sind ein integraler Teil von BeamMP. Spieler verbinden sich darüber. Diese laufen nativ auf Windows und Linux.

Du kannst einen privaten Server erstellen, welcher nur zugänglich für vertraute Personen ist, oder einen öffentlichen Server, der in der Serverliste aufscheint.

Einen Server einzurichten ist ein Prozess von ein paar Schritten! Wenn du Probleme hast, Frage im [Forum](https://forum.beammp.com) oder auf unserem [Discord server](https://discord.gg/beammp) im `#support` Kanal. Siehe auch [Server Wartung](server-maintenance.md) für mehr Informationen.

Lies dir die [LICENSE](https://raw.githubusercontent.com/BeamMP/BeamMP-Server/master/LICENSE) des Servers vorher durch!

Achtung: Der Server unterstützt nur IPv4 . Wenn du dir nicht sicher bist, welche du hast, schau auf  [*whatsmyip.org*](https://www.whatsmyip.org/) nach. *&nbsp;Wenn die Adresse * `_:_` *&nbsp;Doppelpunkte enthält, ist dies eine  **IPv6** Adresse. In diesem Fall solltest du überprüfen, ob du auch eine IPv4 Adresse hast. Du kannst hierzu deinen Anbieter anrufen oder jemanden im Haushalt fragen (Wenn sich jemand auskennt, wird es die Person bestimmt wissen). IPv6 support ist in Planung.*

## Den Server aufsetzen

Das Aufsetzen besteht aus folgenden Schritten. Du solltest alle davon durchgehen.

### 1. Port Weiterleitung

!!! info
    Wenn du auf einem VPS (Virtual Private Server), Rotoserver bist, oder planst einen Server lokal zu hosten (mit Spielern im selben Haus wie du), kannst du diesen Schritt überspringen.
    Dieser Schritt ist jedoch notwendig, wenn Spieler **außerhalb** deines Haushaltes deinem heim-gehosteten Server beitreten sollen (außerhalb von deinem lokalen Netzwerk)

!!! danger ":material-scale-balance: ACHTUNG:"

    **Port forwarding ist ein Risiko**.

    Wenn du Ports weiterleitest, sind dir die Risiken beim öffnen von Ports von deinem Heimnetz ins öffentliche Netz bewusst und verlierst das Recht, BeamMP für **jegliche Schäden**, welche deinem Haushalt passieren könnten, Haften zu lassen.

    Wir übernehmen keine Haftung für jegliche extern gelinkten Dienste oder Webseiten.

Es  ist somit zu empfehlen, einen Server mit einem unserer Partner zu hosten!

*Siehe [Anleitung zur Port Weiterleitung](port-forwarding.md)*

#### Partner Hosting Services (bezahlt):

- [Horizon Hosting](https://hrzn.link/beammp)
- [Snakecraft Hosting](https://schost.us/beammp-plans)
- [Connect Hosting](https://connecthosting.net/beammp)
- [Assetto Hosting](https://assettohosting.com/en/games/beamng)
- [WinHeberg](https://winheberg.fr/offres/gaming/beammp?lang=en)
- [Zap Hosting](https://zap-hosting.com/en/beammp-server-hosting/)
- [HostHavoc](https://hosthavoc.com/)
- [PedalHost](https://pedal.host/)
- [Vyper Hosting](https://vyperhosting.com/r/beammp)
- [BisectHosting](https://www.bisecthosting.com/)

#### 1.1 Firewall

Abhängig von deinem Setup, muss in der Firewall eine Ausnahme für den BeamMP-Server erstellt werden. Dies ist der Fall bei Windows (das ausschalten der Firewall funktioniert meistens **nicht**) und auf vielen vorinstallierten Linux Servern.

Sowohl Ein- als auch Ausgehende Verbindungen auf **TCP** und **UDP** müssen als Firewall-Regel für die Anwendung BeamMP-Server.exe freigegeben werden. Wenn deine Firewall stattdessen nach einem Port fragt, muss dies derselbe Port sein, den du in Schritt „1. Portweiterleitung“ verwendet hast (Standard ist 30814).

Solltest du Probleme haben, frage auf unserem [Forum](https://forum.beammp.com) oder auf unserem [Discord server](https://discord.gg/beammp) im `#support` Kanal.

### 2. Authentifizierungsschlüssel

Der Authentifizierungsschlüssel, auch “Authentication Key” oder “AuthKey” genannt, ist nötig, um einen Öffentlichen Server zu erstellen. Für einen privaten Server benötigst du nicht zwingend einen offiziellen Schlüssel, jedoch darf das Feld in der Konfigurationsdatei nicht leer gelassen werden.

Um einen Schlüssel zu erwerben ist ein [Discord](https://discord.com) Konto erforderlich. Das ist wichtig um gegen Spam zu schützen.

#### 2.1. Die Schlüssel-Übersicht öffnen

Melde dich mit Discord beim [Keymaster](https://beammp.com/keymaster) an. Klicke auf der Keymaster-Homepage links auf dem Bildschirm auf „Keys“:


<figure markdown="">     ![](../../assets/content/keymaster_homepage.png) </figure>

#### 2.2. Einen Schlüssel erstellen

Um einen Schlüssel zu erstellen, klicke das grüne ,,+" oben rechts.


<figure markdown="">     ![](../../assets/content/keymaster_new_key.png) </figure>

#### 2.3. Schlüssel-Informationen eingeben

Als nächstes, fülle das Feld für den Servernamen (das ist lediglich der Name des Schlüssels, nicht der Name vom Server in der Liste), dann klick ,,Create".<br>Beispiel:


<figure class="image image_resized" style="width:44.84%;" markdown="">     ![](../../assets/content/keymaster_server_name.png) </figure>

es sollte am Ende wie folgt aussehen:


<figure markdown="">     ![](../../assets/content/keymaster_key_done.png) </figure>

**GEBE DIESEN SCHLÜSSEL NIEMALS AN ANDERE WEITER UND ZEIGEN IHN AUCH NIEMANDEM. BEHANDLE IHN WIE EIN PASSWORT.**

Du hast die Möglichkeit, zwei kostenlose Schlüssel zu erstellen. Ein Schlüssel kann jeweils nur auf einem aktiven Server gleichzeitig verwendet werden. Du kannst also nicht zwei Server gleichzeitig mit demselben Schlüssel betreiben.

#### 2.4. Den Schlüssel kopieren

Kopiere den Text im “Key” Feld. In diesem Beispiel wäre das  `3173a2e-6az0-4542-a3p0-ddqq5ff95558`. Klicke das ,,Klemmbrett Symbol" neben dem Schlüssel um diesen zu kopieren.


<figure markdown="">     ![](../../assets/content/keymaster_copy_key.png) </figure>

### 3. Installation

Es gibt Server-Anwendungen für Windows und Linux. Die folgenden zwei Abschnitte widmen sich Windows und Linux separat.

#### 3.a. Installation auf Windows

Für die Linux Installation, springe zum nächsten Punkt.

Sei sicher, dass du die nötigen Ports weitergeleitet hast. Ansonsten kann niemand außerhalb des Netzwerks dem Server beitreten!

1. Stelle sicher dass das [Visual C++ Redistributables](https://aka.ms/vs/17/release/vc_redist.x64.exe) Paket installiert ist.
2. Downloade die EXE von [beammp.com](https://www.beammp.com/).<br>Diese sollte dann so aussehen:<br>`BeamMP-Server.exe`.
3. Nach dem runterladen, erstelle einen Ordner indem du die `BeamMP-Server.exe` ablegst. Dort wird der Server  betrieben.
4. Mittels Doppelklick startet man den Server. Beim ersten Start erstellt der Server automatisch die benötigten Dateien, im anschluss schliesst sich das Serverfenster von selbst. Nun solltes du die `ServerConfig.toml` neben dem `BeamMP-Server.exe` sehen.
5. (optional) Für schnellen Zugriff kannst du eine Desktop Verknüpfung zu `BeamMP-Server.exe` erstellen mittels **[Rechtsklick]** &gt; **Senden zu** &gt; **Desktop (erstelle Verknüpfung).**

Nun springe zu Schritt "4. Konfiguration".

#### 3.b. Installation auf Linux

##### Vorgefertigte Binaries verwenden

Dieser Schritt funktioniert auf allen Distributionen für die wir Binaries anbieten. Binaries findest du [hier](https://github.com/BeamMP/BeamMP-Server/releases/latest). Wenn du auf einer anderen Distribution bist, schau dir "Binary selbst erstellen” im Schritt darunter an.

1. Stelle sicher, dass du die nötigen Abhängigkeiten installiert hast. Eine Liste findest du [hier](https://github.com/BeamMP/BeamMP-Server#runtime-dependencies).
2. Gehe zu [beammp.com](https://beammp.com/) und klicke “Download Server”. Du wirst im Anschluss auf die GitHub Seite weitergeleitet.
3. Downloade die richtige Version für deine Distribution und CPU-Architektur. Zur Erleichterung nennen wir diese `BeamMP-Server-xxx`. Ansonsten denotiert `xxx` die Version deiner Distro.
4. Nach dem Download solltest du neben anderen Dateien eine Datei namens `BeamMP-Server-xxx` sehen, die du vorerst ignorieren kannst. Erstelle irgendwo einen Ordner und lege die `BeamMP-Server-xxx` dort ab. Dort wird der Server betrieben.
5. Öffne ein Terminal, navigiere zu dem Ordner in dem der `BeamMP-Server-xxx` liegt und führe `chmod +x BeamMP-Server-xxx` aus. Das stellt sicher, dass du die korrekte Berechtigungen hast.
6. Start den Server mittels `./BeamMP-Server-xxx`. Der Server erstellt automatisch die benötigten Dateien. <br>Wenn Text im Server Feld erscheint, kannst du diesen wieder schließen. Du solltest eine `ServerConfig.toml` neben dem `BeamMP-Server.exe` sehen.
7. (optional) Es wird empfohlen einen User namens `beammpserver` (oder ähnlich) zu erstellen, da wir empfehlen, NICHT den Server als root, sudo oder mit dem persönlichen Useraccount auszuführen. Du solltest dann die nötigen Schritte tätigen um den Server als den Server-user zu starten.

Nun springe zu Schritt "4. Konfiguration".

##### Binary selbst erstellen

Andere Distributionen zusätzlich zu denen, für die es [hier](https://github.com/BeamMP/BeamMP-Server/releases/latest) bereits eine Server-Binary gibt, funktionieren wahrscheinlich auch, werden aber nicht offiziell unterstützt. Wenn du diese selbst erstellen möchten, kannst du das tun, indem du die Quelle auf unserem [GitHub](https://github.com/BeamMP/BeamMP-Server) herunterlädst. Ein Tutorial findest du [hier](https://github.com/BeamMP/BeamMP-Server#build-instructions) .

Führe zum Abschluss den Server unbedingt einmal mit `./BeamMP-Server` aus und fahre dann mit dem nächsten Schritt fort.

### 4. Konfiguration

Nachdem der Server einmal gestartet wurde, sollte er die nötigen Dateien erstellt haben und einen oder zwei Fehler in die Konsole schreiben. Das ist normal, da wir noch nicht fertig sind.<br>Es sollten nun folgende Dateien vorhanden sein:


<figure markdown="">     ![](../../assets/content/after-running-once.png) </figure>

Genannt ,,ServerConfig.toml”, ,,Server.log” und ,,BeamMP-Server.exe”! (Je nach deinen Einstellungen, siehst du möglicherweise die [.toml] [.log] [.exe] Erweiterungen nicht)

Öffne die `ServerConfig.toml` mit einem Texteditor wie zum Beispiel `Notepad` . Dies kannst du mit <strong>[Rechtsklick] → „Öffnen mit…“</strong> und anschließender Auswahl eines Texteditors tun.

Die Datei sollte ungefähr so aussehen

```TOML
[General]
AuthKey = ''
Debug = false
Description = 'BeamMP Default Description'
Map = '/levels/gridmap_v2/info.json'
MaxCars = 1
MaxPlayers = 10
Name = 'BeamMP Server'
Port = 30814
Private = false
ResourceFolder = 'Resources'
```

Das ist die Konfigurationsdatei. Sie nutzt das sogenannte ,,TOML" Format. Siehe die [Server Wartung](server-maintenance.md) Sektion für weitere Informationen bezüglich dieser Datei.

Als erstes kümmern wir uns um den <code>AuthKey</code>. Dazu muss der Schlüssel zwischen die Anführungszeichen <code>" "</code> eingefügt werden.

Für unser Beispiel sollte der Eintrag so aussehen:

```TOML
AuthKey = '3173a2e-6az0-4542-a3p0-ddqq5ff95558'
```

Vergib deinem Server einen Namen im `Name` Feld. Du kannst diesen mit Farben und mehr formatieren. Siehe [diese Sesktion](server-maintenance.md#customize-the-look-of-your-server-name) auf der Server-Wartungsseite.

Wenn du einen anderen **Port** als **30814** ausgewählt hast, achte darauf, ihn hier unter `Port` zu ersetzen.

!!! info

```
Dein Server wird **NICHT** in der Serverliste aufscheinen, solange `Private = true` ist. _Wenn_ du ihn gelistet haben willst, stell den Parameter auf **`Private = false`**.
```

### 5. Validierung

Nun führe den Server erneut aus und sieh nach, ob weitere `[ERROR]` oder `[WARN]` Meldungen erscheinen. Der Server sollte nun offen bleiben. In den folgenden Schritten (6.) erfährst du, wie man dem Server beitretet.

---

#### 5.1 Wie man dem Server Mods hinzufügt

Fahrzeug und Map Mods werden unterschiedlich im Server installiert, müssen aber beide im Ordner  (`Resources/Client`) abelegt werden. Alle Mods die hinzugefügt werden sollen kommen in diesen Ordner.

#### 5.2 Allgemeine Mods

Wenn du nur modifizierte Fahrzeuge hinzufügen möchtest, lege die Zip-Datei der Mods einfach in den Ordner `Resources/Client`. Diese werden automatisch von jedem heruntergeladen, der dem Server beitritt.

#### 5.3 Karten

Alle originalen BeamNG.Drive Karten (Karten, die keine Mods sind) funktionieren ohne dass die Karte auf den Server kopiert werden muss. Du änderst einfach den `Map` Pfad in der `ServerConfig.toml` Datei auf eine von [diesen](server-maintenance.md#all-vanilla-maps-names). Für andere Mod Karten, siehe folgende Instruktionen.

1. Legen die `.zip` Datei der Karte in den Ordner <br> `Resources/Client` des Servers.
2. Sieh dir als Nächstes in die Zip-Datei der Karte (entpacke sie nicht) und öffne den Ordner „ `levels` “. In diesem Ordner sollte sich lediglich ein weiterer Ordner mit dem Namen der Karte befinden, zum Beispiel „myawesomedriftmap2021“. Achte darauf, diesen Namen *genau so zu kopieren oder zu merken, wie er im Namen dieses Ordners geschrieben ist.*
3. Öffne die `ServerConfig.toml`. In der `Map` Einstellung solltest du  `/levels/MAPNAME/info.json` sehen, wobei `MAPNAME` wahrscheinlich so etwas wie `gridmap_v2` ist. Ersetze diesen `MAPNAME` nun durch den Namen des Ordners aus dem letzten Schritt. In diesem Beispiel war es `myawesomedriftmap2021` . Am Ende sollte es so aussehen (für dieses Beispiel) und am Ende <code>/info.json</code> <em><strong>haben</strong></em> .

```TOML
Map = '/levels/myawesomedriftmap2021/info.json'
```

Wenn jemand deinem Server beitritt, sollte die Karte automatisch heruntergeladen werden und wie erwartet funktionieren.

**Wenn dies NICHT funktioniert** , installiere die Karte in Ihrem Einzelspieler-BeamNG.drive, starte es und rufe die Karte auf. Öffne dann die Konsole, indem du die Taste `~` ( *Tilde* ) drückst (wenn du eine nicht-US-Tastatur verwendest, sieh dir die Aktion **Systemkonsole umschalten** im Menü **Optionen &gt; Steuerung &gt; Bindungen** im Abschnitt **Allgemeines Debuggen an** ) und führe `print(getMissionFilename())` aus. Dies sollte dir dann den zu verwendenden Namen anzeigen.

Das wärs! Die modifizierte Karte sollte jetzt geladen werden!

### 6. Wie du deinem Server beitrittst

Wie du und andere Spieler deinem Server beitreten können.

#### 6.a. Deinem eigenen Server beitreten (öffentlich &amp; privat)

Wenn der Server auf demselben PC, auf dem du spielst, gehostet wird, solltest du mittels direkter Verbindung beitreten. Um das zu tun, klick **Direkte Verbindung** auf der linken Seite der Serverliste. Belasse die Standarddaten (sollte 127.0.0.1 und der dazugehörige Port sein) danach klicke Verbinden.

Wenn der Server auf einem anderen PC in deinem lokalen Netzwerk gehostet wird, solltest du die lokale IP von dieser Maschine herausfinden und diese zum direkt verbinden verwenden.

Wenn der Server außerhalb deines Haushaltes gehostet wird (z.B. VPS), musst du die [öffentliche IP](https://whatismyipaddress.com/) von dieser Maschine herausfinden und mit dich mit dieser direkt verbinden.

#### 6.b. Andere Spieler die deinem Server beitreten

Du musst anderen Spielern die öffentliche IP Adresse des Servers geben. Sei jedoch vorsichtig beim teilen deiner IP mit unbekannten! Um deinem privaten Server beizutreten, müssen Spieler das **Direkt Verbindung** Menü aufrufen und die Server IP sowie dessen Port eingeben.

#### 6.c. Andere Spieler treten deinem öffentlichen Server bei

Um deinem öffentlichen Server beizutreten, gehe zur Server Liste und gib den Namen des Servers ein und klicke ,,Connect". Wenn du dir nicht sicher über den Namen des Server bist, es wird der Name sein, welchen du in der `ServerConfig.toml` festlegst. Stelle sicher dass Suchfilter deaktiviert sind und dass die Karte auf "Any" gesetzt ist, wenn du ihn nicht findest. Du kannst auch die [Keymaster](https://beammp.com/keymaster) Webseite für die IP des Servers prüfen.

Sollten du oder deine Freunde einen ,,Verbindung Fehlgeschlagen!" Fehler bekommen, prüfe das Launcher Fenster auf Codes wie 10060, 10061 oder 10030. Das bedeutet, dass du entweder eine CGNAT IPv4 hast, oder du hast etwas bei Schritt **1 Port Forwarding** oder **1.1. Firewall** falsch gemacht. Um zu prüfen ob du eine CGNAT IPv4 hast, finde die WAN IP Adresse im Router Interface. Vergleiche diese mit deiner [öffentlichen IP](https://www.whatsmyip.org/). Wenn diese gleich sind, hast du keine CGNAT IP. IPv6 Support ist noch **NICHT** implementiert.

!!! warning "Ich möchte einen VPN wie RadminVPN, Hamachi oder ähnlich verwenden"

```
    BeamMP unterstützt diese VPNs nicht, weil diese oft Probleme verursachen. Eines davon ist das blockieren von UDP Verkehr. Um dies zu beheben, siehe Sektion 1.
        
    !!! question "Aber warum hat es vorher funktioniert?"

        Das passiert, weil die Entwickler dieser Applikationen updaten und Änderungen implementiere, über welche BeamMP keine Kontroll hat.
        Es liegt an den Entwicklern diesen Applikationen, um Support für spezifische Fälle wie eines BeamMP-Servers zu unterstützen.

## Immer noch Probleme?

Öffne ein Post auf dem [Forum](https://forum.beammp.com) oder auf dem [Discord server](https://discord.gg/beammp) im `#support` Kanal.
