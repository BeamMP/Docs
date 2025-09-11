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

1. Open the `Windows Defender Firewall with advanced setting`.
2. In the Window, click `Inbound` to open the inbound exclusions tab.
3. Click `Create new rule` in the top right to create a new exclusion.
4. Select `Program` to create a program specific exclusion.
5. Enter the full qualified path towards the `BeamMP-Launcher.exe`. By default, this would be `%appdata%\BeamMP-Launcher\BeamMP-Launcher.exe` without quotes.
6. Make sure to allow the connection
7. Give the exclusion a name (e.g. "BeamMP-Launcher") and save it.
8. Restart your PC.

## 2. Antivirus exclsuion for the BeamMP-Launcher.

1. Open the `Windows Security` app.
2. Click the first item `virus and threat protection`.
3. Click `Manage settings` beneath "Virus &amp; threat protection settings".
4. Scroll down to navigate to the `Exclusions` tab.
5. There, click 'Add an exclusion' and select `process`.
6. Enter `BeamMP-Launcher.exe` into the field and save it.
7. Restart your PC.

## Still facing issues?

Open a Thread on the [Forum](https://forum.beammp.com) or on our [Discord server](https://discord.gg/beammp) in the `#support` channel.
