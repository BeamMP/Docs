!!! warning "This site is under construction!"

    This site is being actively worked on. 
    
    Feel you could help? Please do by clicking on the page with a pencil on the right!

    This can be done any page too.

# Getting started

In order to get started with development for BeamMP you will need at least:

- BeamNG.drive, installed locally
- BeamMP, installed locally; at least the launcher, additionally also the server
- Git, installed locally, and a GitHub.com account
- A code editor, for example VSCode or notepad++

---
# Difference between mod, launcher and server

BeamMP is split into three main parts:

- The mod is loaded by BeamNG, like any other vehicle or UI mod for the game. Its main function is to establish a local connection with the launcher and to display the multiplayer UI elements. It's mostly written in Lua, with some JavaScript, HTML, and CSS for the UI elements. Its repo is [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)
- The launcher's main function is to establish a constant connection to the mod, and once necessary, establish a connection to the chosen server, as well as handling user login with the BeamMP backend. It's written in C++, is precompiled by BeamMP and can be found at [https://github.com/BeamMP/BeamMP-Launcher](https://github.com/BeamMP/BeamMP-Launcher)
- The server establishes connections between one or many launchers, as well as "heartbeating" to the BeamMP backend, providing information such as IP, port, version, number of players, etc. Additionally, it manages and runs server-side Lua plugins. It's written in C++, precompiled by BeamMP for a few different OS and CPU architectures, and can be found at [https://github.com/BeamMP/BeamMP-Server](https://github.com/BeamMP/BeamMP-Server)

---
# Setting up a development environment to work on the mod

## Using an unpacked folder for BeamNG

In order to efficiently work on mods in BeamNG, it is advised to use an `unpacked` folder, rather than packaging zips after every change.

Open up the BeamNG userfolder by navigating to `%appdata%/Local/BeamNG.drive/0.xx/mods` where `xx` is the most recent BeamNG version.
Create a folder called `unpacked` inside the `mods` folder.

Further information about the userfolder can be found at [https://documentation.beamng.com/support/userfolder/](https://documentation.beamng.com/support/userfolder/)

## Enabling dev mode in the BeamMP launcher

In order to prevent auto-update to overwrite your local git clone, its necessary to disable it, using `--no-download`.
If you also dont want the launcher to start beamNG and would like to see debug prints, then using `--dev` is advised.

| Argument                 | Note                                       |
|:-------------------------|:-------------------------------------------|
| `--help` or `-h`         | Will print the following list of arguments |
| `--port <port>` or `-p`  | Change the default listen port to `<port>`. This must be configured ingame too |
| `--verbose` or `-v`      | Verbose mode, prints debug messages |
| `--no-download`          | Skip downloading and installing the BeamMP Lua mod |
| `--no-update`            | Skip applying launcher updates (you must update manually) |
| `--no-launch`            | Skip launching the game (you must launch the game manually) |
| `--dev`                  | Developer mode, same as --verbose --no-download --no-launch --no-update |
| `--game <args...>`       | Passes arguments to the game |

## Cloning the BeamMP repo into the unpacked folder

While you can manually copy the BeamMP mod files from our github repo, it is highly recommended to use a source-control system like git.
First create a fork of [https://github.com/BeamMP/BeamMP](https://github.com/BeamMP/BeamMP)

Most efficient would be to clone the repo directly into the `unpacked` folder.

For `git`, run `git clone https://github.com/yourName/BeamMP` from a PowerShell or CMD window started from the `unpacked` folder.
While in the userfolder, make sure theres no `multiplayer` folder left in `mods` and that now there's `unpacked/beammp`.

Now give the dev mode a try. Start the BeamMP launcher, start BeamNG manually, once ingame make sure that BeamMP is the only active mod.
You should be able to use BeamMP as usual.

Using a code editor, you can now add or change code directly in the `unpacked` folder.
You can then try the changes by reloading Lua ingame by pressing `Ctrl+L` (and `F5` if you made UI changes).

Once you're happy with your changes, you can commit them through git. See [the Git-SCM website](https://git-scm.com/doc) for tutorials and documentation on how to use Git. As soon as your changes are committed and pushed (to your fork), you can make a pull-request.

Feel free to ask in the #scripting channel in our [Discord](https://discord.gg/beammp) if you encounter any issues.

---
# Setting up a local server

While working on BeamMP, it can be beneficial to use a local server. You can follow the general [server installation](docs/en/server/create-a-server.md) while omitting the first two steps for purely local connections.

Set the server to private in the `serverConfig.toml` while using any string as the `AuthKey`.

---
# Contribution Guidelines

For details on code format, commit message format, general development best practices, etc. please see the `CONTRIBUTING.md` file in each repo. This file contains more detailed information on how to contribute. The `README.md` in each repo usually contains build steps as well (for compiled projects).
