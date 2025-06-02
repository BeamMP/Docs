# Fehlermeldungen

Diese Seite enthält jene Fehlermeldungen, die der Server anzeigen kann.

---

Code | Beschreibung | Mögliche Lösung
--- | --- | ---
10022 | Es gibt ein Problem mit der Anbindung des Ports | Prüfe, ob der Port für den Server bereits von einem anderen Service verwendet wird.
10048 | Adresse bereits in Verwendung | Ein anderer BeamMP Server oder Programm läuft auf demselben Port. Benutze einen anderen Port.
10051 | Netzwerk nicht erreichbar | Schlechtes Port Forwarding oder ähnliche Probleme, stelle sicher, dass alles korrekt eingerichtet ist.
10052 | Netzwerk neugestartet | Tritt auf, wenn das Netzwerk die Verbindung verliert während eine Verbindung hergestellt wird. Versuche den Verbindungsaufbau erneut.
10053 | Verbindung abgebrochen | Verursacht durch Zeitüberschreitung oder Netzwerkfehler. Versuche es erneut.
10054 | Verbindung von Peer abgebrochen | Ein Client hat die Verbindung getrennt.
10060 | Zeitüberschreitung der Verbindung | Es gibt ein Problem mit der Port Weiterleitng. Siehe [Port Weiterleitung](create-a-server.md#1-port-forwarding).
10061 | Verbindung nicht zugelassen | Es gibt ein Problem mit der Port Weiterleitng. Siehe [Port Weiterleitung](create-a-server.md#1-port-forwarding).
10064 | Host nicht verfügbar | Unwahrscheinlicher Fehler, aber bedeutet, der Server ist nicht erreichbar.<br>Entweder weil der Server abgeschaltet ist, oder weil die Ports geschlossen wurden.
10065 | Host nicht erreichbar | Kein Internet oder schlechtes Port Forwarding. Sieh dir die [Anleitung](create-a-server.md#1-port-forwarding) an.

!!! note
    Für codes, welche nicht in der Liste vorkommen, siehe [https://learn.microsoft.com/en-us/windows/win32/winsock/windows-sockets-error-codes-2](https://learn.microsoft.com/en-us/windows/win32/winsock/windows-sockets-error-codes-2) wenn du dich etwas mit Netzwerke / Sockets auskennst.
