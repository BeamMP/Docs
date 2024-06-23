!!! warning "This site is under construction!"

    This site is being actively worked on. 
    
    Feel you could help? Please do by clicking on the page with a pencil on the right!

    This can be done any page too.

# Getting started

In order to get started with development for BeamMP you will need at least:

- BeamNG.drive, installed locally
- BeamMP,installed locally, at least the launcher, additionally also the server
- git, or at the very least an account on github.com
- A code editor, for example VSCode or notepad++

---
# Difference between mod, launcher and server

BeamMP is split into three main parts:

- The mod gets loaded by BeamNG, like any other vehicle or UI mod for the game. Its main function is to establish a local connection with the launcher and to display the multiplayer UI elements. It is mostly written in lua for the code side and JavaScript for the UI elemtens. Its repo is [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)
- The launcher's main function is to establish a constant connection to the mod, and once necessary, establish a connection to the chosen server, as well as handling user login with the BeamMP backend. Its mostly written in C++, is precompiled by BeamMP as a Windows executable (Linux version in development) and can be found at [https://github.com/BeamMP/BeamMP-Launcher](https://github.com/BeamMP/BeamMP-Launcher)
- The server establishes connections between one or many launchers, as well as heartbeating to the BeamMP backend, providing information such as IP, port, version, number of players, etc. Its mostly written in C++, precompiled by BeamMP for a few different OS and CPU architectures, and can be found at [https://github.com/BeamMP/BeamMP-Server](https://github.com/BeamMP/BeamMP-Server)

---
# Setting up a development environment to work on the mod

## Using an unpacked folder for BeamNG

In order to efficiently work on mods in BeamNG, it is advised to use an `unpacked` folder, rather than packaging zips after every change.

Open up the BeamNG userfolder by navigating to `%appdata%/Local/BeamNG.drive/0.xx/mods` where `xx` is the most recent BeamNG version.
Create a folder called `unpacked` inside the `mods` folder.

Further information about the userfolder can be found at [https://documentation.beamng.com/support/userfolder/](https://documentation.beamng.com/support/userfolder/)

## Enabling dev mode in BeamMP

By starting the launcher with the arguments ` 0 0` its development mode will be enabled. This will do two things, deactivate automatic mod updates and deactivate auto-starting BeamNG.
On Windows you can achieve this by opening the settings of the launcher shortcut on your desktop. Then add ` 0 0` (thats spaceZEROspaceZERO) to the end of the shortcut link.

Once dev mode was succesfully enabled, the launcher will stop with `[DEBUG] Core Network on start!` and wait until BeamNG was started by the user.

## Cloning the BeamMP repo into the unpacked folder

While you can manually copy the BeamMP mod files from our github repo, it is highly recommended to use a source-control system like git.
First create a fork of [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)

Most efficient would be to clone the repo directly into the `unpacked` folder.

For `git`, do `git clone https://github.com/yourName/BeamMP` while in the `unpacked` folder
While in the userfolder, make sure theres no `multiplayer` folder left in `mods` and that now theres `unpacked/beammp`

Now give the dev mode a try. Start the BeamMP launcher, start BeamNG manually, once ingame make sure that BeamMP is the only active mod.
You should be able to use BeamMP as usual.

Using a code editor, you can now add or change code directly in the `unpacked` folder, try these changes with minimal effort and then sync them using the source control.

---
# Setting up a local server

While working on BeamMP, it can be beneficial to use a local server. You can follow the general [server installation](docs/en/server/create-a-server.md) while omitting the first two steps for purely local connections.

Set the server to private in the `serverConfig.toml` while using any string as the `authKey`.

