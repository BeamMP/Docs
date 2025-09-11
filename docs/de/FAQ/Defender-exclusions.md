# Wie erstelle ich Ausnahmen für Windows Defender Firewall und Antivirus?

!!! info

```
Bevor Änderungen an der Firewall vorgenommen werden, sollte sichergestellt werden, dass das aktive Netzwerk in den Windows Netzwerk-Einstellungen als "privat" gekennzeichnet ist (vorausgesetzt, das Netzwerk ist tatsächlich ein privates).

!!! danger ":material-scale-balance: ACHTUNG:"

    **Firewall-/Defender-Ausnahmen stellen ein Sicherheitsrisiko dar**.

    Es wird vorausgesetzt, dass der/die Leser*in die Risiken versteht, die mit dem Deaktivieren des Virenschutzes für ein Programm und dem Öffnen von Firewall-Ports in seinem/ihrem Heimnetzwerk einhergehen. BeamMP kann für keine daraus resultierenden Schäden jeglicher Art zur Verantwortung gezogen werden.

    Für externe, auf dieser Webseite verlinkte Inhalte wird keine Haftung übernommen.
```

## 1. Firewall-Ausnahme für den BeamMP-Launcher

1. Öffne die `Windows Defender Firewall mit erweiterten Einstellungen` .
2. Klicke im Fenster auf `Eingehend` , um die Registerkarte „Eingehende Ausschlüsse“ zu öffnen.
3. Klicke oben rechts auf `Regel erstellen` um eine neue Ausnahme zu erstellen.
4. Wähle `Programm` aus, um einen programmspezifischen Ausschluss zu erstellen.
5. Gebe den vollständigen Pfad zu `BeamMP-Launcher.exe` ein. Standardmäßig wäre dies `%appdata%\BeamMP-Launcher\BeamMP-Launcher.exe` ohne Anführungszeichen.
6. Stelle sicher, dass die Verbindung zugelassen ist
7. Gebe der Ausnahme einen Namen (z. B. „BeamMP-Launcher“) und speichere diese.
8. Starte deinen PC neu.

## 2. Antivirus-Ausschluss für den BeamMP-Launcher.

1. Öffne die `Windows Security` -App.
2. Klicke auf das erste Element `Virus und Bedrohungsschutz` .
3. Klicke im Unter-menü auf `Einstellungen verwalten`.
4. Scrolle nach unten, um zur Registerkarte `Asschlüsse` zu navigieren.
5. Klicke dort auf „Ausschluss hinzufügen“ und wähle  `Prozesss` aus.
6. Gebe `BeamMP-Launcher.exe` in das Feld ein und speichere diese.
7. Starte deinen PC neu.

## Immer noch Probleme?

Öffne einen Thread im [Forum](https://forum.beammp.com) oder auf unserem [Discord-Server](https://discord.gg/beammp) im `#support` Kanal.
