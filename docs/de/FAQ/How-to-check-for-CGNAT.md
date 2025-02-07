Wie prüfe ich auf ein CGNAT?

## Problem

Alle Firewall Ausschlüsse und Port Weiterleitungsregeln sind korrekt eingerichtet, jedoch kann niemand deinem heim-gehosteten Server beitreten?

Wenn du Verbindungsprobleme hast und einen Hosting Anbieter verwendest, kontaktiere diesen für Hilfe. Wenn du einen VPS verwenden möchtest oder keinen Server zuhause hosten kannst, sieh dir die [Liste unserer Hosting Partner](https://docs.beammp.com/server/create-a-server/#_1:~:text=our%20partnered%20Services!-,Paid%20Services%3A,-Horizon%20Hosting) an.

# Was ist CGNAT überhaupt?

Für eine detaillierte Erklärung, was CGNAT ist und warum es dich am heim-hosting hindert, sieh dir [diese Seite](https://en.wikipedia.org/wiki/Carrier-grade_NAT) an.

# Wie prüfe ich auf CGNAT?

## Methode 1:

Öffne ein Command Prompt, führe `tracert -4 beammp.com` aus. Das wird eine Reihe von Netzwerk-Hops ausgeben. Warte, bis die Operation abgeschlossen ist (kann bis zu 30 Hops dauern). Prüfe die ersten paar IP Adressen nach deinem Router/Modem/Gateway. Wenn mehrere IP Adressen im Block `100.64.x.x`-`100.127.x.x` oder `10.xx.xx.xx` nach dem ersten Hop erscheinen, bist du sehr wahrscheinlich hinter einem CGNAT.

!!!note

    Der erste Hop wird dein Router/Modem/Gateway sein und kann sich zwischen Modellen unterscheiden.
    Die offiziellen Adressblöcke für lokale Netzwerke lauten wie folgt: ``10.0.0.xxx`` - ``192.168.xxx.xxx`` - ```172.16.xxx.xxx``

## Methode 2:

Finde die WAN IP auf dem Web-Interface deines Routers. Vergleiche diese mit der IP auf https://whatsmyip.org . Wenn sie NICHT gleich sind, bist du hinter einem CGNAT.

## Methode 3/Lösung:

Rufe deinen Internet Anbieter an für Hilfe. Abhängig von deinem Anbieter, bieten diese möglicherweise garkeine *dynamischen* IP Adressen an. Behalte im Kopf, dass eine statische IP nicht nötig ist.

!!! warning

    Internet Anbieter bieten eine dedizierte IP Adresse eventuell nur als **bezahlte Option** an.
    Bitte prüfe die Preise unserer Hosting-Partner, weil diese billiger sein könnten als eine statische IP.

Beispiel eines nicht-CGNAT Netzwerks:

![image](https://github.com/user-attachments/assets/fee21a50-cbb0-4322-9c26-d9f04f88ae37)

Tags: Server, 10060 10061, CGNAT, Connection Failed, Port Forward, Firewall
