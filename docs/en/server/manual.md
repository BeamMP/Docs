# Server Manual

# Environment

The server is affected by the state of various external parameters:

- The "Resources" folder
- The ENV (process environment)
- The commandline arguments
- The ServerConfig.toml file
- The working directory

## Resources Folder

The resources folder is created upon startup of the server, together with the "Client" and "Server" subdirectories.
The "Server" subdirectory accepts folders within it, each containing at least one `.lua` file. Each of these folders in the "Server" subdirectory is called a "Plugin". `.lua` files contained in the top-level directory of a plugin are hot-reloaded on change.
The "Client" subdirectory accepts *only* `.zip` files, which are loaded when the server starts, and assumed to not change during runtime.

## ENV

### General Settings

As of Server release v3.2.0, the BeamMP Server accepts environment variables, which **override** settings in the ServerConfig.toml. All ServerConfig variables which exist in the "General" category/section are PascalCase, the environment variables are ALL_CAPS and prefixed with `BEAMMP_`. For example, the `MaxPlayers` setting converted to ALL_CAPS is `MAX_PLAYERS` (note the `_` where a new word starts), and prefixed it becomes `BEAMMP_MAX_PLAYERS`. This is the format followed for all "General" settings. The follwing ENV variables exist:

- `BEAMMP_DEBUG`
- `BEAMMP_PRIVATE`
- `BEAMMP_PORT`
- `BEAMMP_MAX_CARS`
- `BEAMMP_MAX_PLAYERS`
- `BEAMMP_MAP`
- `BEAMMP_NAME`
- `BEAMMP_DESCRIPTION`
- `BEAMMP_TAGS`
- `BEAMMP_RESOURCE_FOLDER`
- `BEAMMP_AUTH_KEY`
- `BEAMMP_LOG_CHAT`

Any environment variables corresponding to config parameters which are strings or numbers must be strings, for example `BEAMMP_NAME="Cool Server"`, `BEAMMP_NAME=Server1`, `BEAMMP_PORT=12345`.
Environment variables corresponding to config parameters which are booleans (true/false, on/off) must be either `true` or `1` (both meaning ON), or any other value (meaning OFF).

### Provider Settings

These environment variables allow hosting providers (and other users with a larger number of servers), here called "providers", to overwrite certain provider-specific settings.

#### `BEAMMP_PROVIDER_UPDATE_MESSAGE` (since v3.2.2)

When set to a non-empty string, this replaces the entire update message, which by default is "NEW VERSION IS OUT! Please update to the new..." etc.
It is **REQUIRED** that the update message you provide contains `{}` somewhere, which the server will replace with the new version number. For example, your update message could look like: 
```sh
BEAMMP_PROVIDER_UPDATE_MESSAGE="NEW VERSION of the BeamMP-Server has been released: {}! Please follow the update guide here: https://example.com/update-guide"
```
Which would result in an update message like
```
NEW VERSION of the BeamMP-Server has been released: v5.0.2! Please follow the update guide here: https://example.com/update-guide
```

Please take care to make it clear to the users that they should update, and explain how to update.

## Commandline arguments

Run the BeamMP Server with the `--help` argument to learn more. For example: `./BeamMP-Server --help`.

## ServerConfig.toml

This file is generated on first startup. Comments inside the file are the most up-to-date way to understand what each setting does.

## Working directory

The working directory of the server, not the location of the server executable, is the deciding factor on where the ServerConfig.toml, server log files, and Resources folder, are generated.

# Limitations

The following limitations are enforced in the BeamMP Backend, which affects the Servers:

- Name is limited to 250 characters
- Description is limited to 1000 characters
- Map is limited to 100 characters
- Tags are limited to 100 characters
