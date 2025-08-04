# Issue

The Launcher is not connecting to the game.
This quick guide explains how to manually change the launcher port.

# Changing the port manually

1. Start BeamNG
2. In the main menu, go to Options, then Multiplayer
3. In the multiplayer options, enable `Show advanced options`
4. Scroll all the way down
5. In `Launcher port` change the port number to something else, for example 4567
6. Close BeamNG
7. Right click on the BeamMP-launcher shortcut, and select `Open file location` in the context menu
8. Open the `launcher.cfg` file in a text editor
9. Change the `"Port": 4444,` number to the same you used earlier in the ingame options, in this example 4567
10. Save the changes and close the text editor
11. Start the BeamMP-launcher

If theres still no connection, try again with another port. Any number between ~2000 and 65535 is a valid port

## Still facing issue?

Create a support ticket on our [Discord Server](https://discord.gg/BeamMP).

Tags: Launcher, Connection Failed, Port Number
