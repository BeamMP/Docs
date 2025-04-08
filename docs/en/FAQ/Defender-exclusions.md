# How to create exclusions in the Windows Defender Firewall and Antivirus?

!!! info
    
    Before tampering with the firewall, make sure that your network within the windows networking settings is set to private (assuming you are in a private network).

    !!! danger ":material-scale-balance: DISCLAIMER:"

        **Firewall exclsuions are a risk**.

        By creating exclsuions, you understand the risks of opening up ports on your home network to the public and therefore void the right to hold BeamMP accountable for **any and all** damages that may happen to you or your household.

        We take no responsibility for any content on any externally linked services or websites.

## 1. Firewall exclusion for the BeamMP-Launcher.

1 Open the 'Windows Defender Firewall with advanced settings'
2 In the Window, click 'inbound' to open the inbound exclusions tab.
3 Click 'Create new rule' in the top right to create a new exclusion.
4 Select 'Program' to create a program specific exclusion.
5 Enter the full qualified path towards the 'BeamMP-Launcher.exe'. By default, this would be '%appdata%\BeamMP-Launcher\BeamMP-Launcher.exe' without quotes.
6 Make sure to allow the connection
7 Give the exclusion a name (e.g. 'BeamMP-Launcher') and save it.
8 Restart your PC.

## 2. Antivirus exclsuion for the BeamMP-Launcher.

1 Open the 'Windows Security' app.
2 Click the first item 'virus and threat protection'.
3 Click 'Manage settings' beneath "Virus & threat protection settings".
4 Scroll down to navigate to the 'Exclusions' tab.
5 There, click 'Add an exclusion' and select 'process'.
6 Enter 'BeamMP-Launcher.exe' into the field and save it.
7 Restart your PC.

## Still facing issues?

Open a Thread on the [Forum](https://forum.beammp.com) or on our [Discord server](https://discord.gg/beammp) in the `#support` channel.
