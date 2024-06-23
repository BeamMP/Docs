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
# Setting up a development environment to work on the mod

## Using an unpacked folder for BeamNG

In order to efficiently work on mods in BeamNG, it is advised to use an `unpacked` folder, rather than packaging zips after every change.
Further information about the userfolder can be found at [https://documentation.beamng.com/support/userfolder/](https://documentation.beamng.com/support/userfolder/)

Open up the BeamNG userfolder by navigating to `%appdata%/Local/BeamNG.drive/0.xx/mods` where `xx` is the most recent BeamNG version.
Create a folder called `unpacked` inside the `mods` folder.

## Enabling dev mode in BeamMP

By starting the launcher with the arguments ` 0 0` its development mode will be enabled. This will do two things, deactivate automatic mod updates and deactivate auto-starting BeamNG.
On Windows you can achieve this by opening the settings of the launcher shortcut on your desktop. Then add ` 0 0` (thats spaceZEROspaceZERO) to the end of the shortcut link.

Once dev mode was succesfully enabled, the launcher will stop with `[DEBUG] Core Network on start!` and wait until BeamNG was started by the user.

## Cloning the BeamMP repo into the unpacked folder

While you can manually copy the BeamMP mod files, it is highly recommended to use a source-control system like git.
First create a fork of [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)

Most efficient would be to clone the repo directly into the `unpacked` folder.

For `git`, do `git clone https://github.com/yourName/BeamMP` while in the `unpacked` folder
While in the uderfolder, make sure theres no `multiplayer` folder left in `mods` and that now theres `unpacked/beammp`

Now give the dev mode a try. Start the BeamMP launcher, start BeamNG manually, once ingame make sure that BeamMP is the only active mod.
You should be able to use BeamMP as usual.
