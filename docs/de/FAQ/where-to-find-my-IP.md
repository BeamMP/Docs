# Wie finde ich die IP von meinem Server?

## Für VPS gehostete Server

Wenn du einen Server mit einer unseren Partner Hosting Services hostest, wird die IP auf dem dedizierten Server Management Interface angezeigt. Du kannst die IP(s) für deine Server auf der [Keymaster](https://keymaster.beammp.com/login) Webseite finden.

## Für Heim-gehostete Server

Für heim-gehostete Server, öffne [whatsmyip.org](https://whatsmyip.org) in einem Browser. Das wird die öffentliche IPv4 Adress ausgeben, mit der du vom Internet aus kontaktiert wirst.

Beachte, dass 127.0.0.1 die Localhost Adresse ist und nur von dir verwendet werde kann, wenn der Server auf demselben Computer läuft. Wenn du immer noch Verbindungsprobleme mit deinem heim-Server hast, prüfe die [Port Weiterleitung](https://docs.beammp.com/server/port-forwarding/) sowie CheckBeamMP

<form action="https://check.beammp.com/api/v2/beammp/" method="get" target="_blank">
  <label for="ip">IP adress:</label>
  <input type="text" id="ip" name="ip"><br>
  <label for="port">Port:</label>
  <input type="text" id="port" name="port"><br>
  <input type="submit" value="CheckBeamMP">
</form>

## Wie prüft man auf CGNAT?

Schau dir [diese Seite](https://docs.beammp.com/FAQ/How-to-check-for-CGNAT/) an, um fesstzustellen, ob du einen Server daheim hosten kannst oder nicht.

Tags: IP, Server, Connection Failed, 10060/10061
