## Why do I need to deactivate my mods?

In BeamMP, the Server you decide to connect to, provides the necessary mods. These get downloaded and activated automatically upon connecting.
Having local mods installed and active often leads to BeamMP not functioning properly, even if you have just one additional mod besides BeamMP.

!!! warning

    Remove any mods you have placed in the BeamNG.Drive\content\ or sub-folders. That location is NOT meant for the installing mods and can lead to issues as stated in the `DO_NOT_INSTALL_MODS_HERE.txt` file, located in the same directory.

    !!! quote "DO_NOT_INSTALL_MODS_HERE.txt"
    
        Do NOT copy mods into this folder: it can lead to broken mods, slower installation of updates, a broken mod manager, broken Safe Mode and others.
        

## How do I deactivate/remove my mods?

There are 3 options to resolve possible issues when using BeamMP.

### 1. Deactivate mods 
Before joining any server, make sure you have no mods besides 'multiplayerbeammp' enabled.
If the game freezes or you still have issues, refer to the next option

### 2. Creating a new Userfolder
Open the BeamNG.Drive userfolder and rename the folder of the latest version (e.g. 0.34) to for example 0.xx_OLD (0.34_OLD). Close BeamNG.drive before renaming it.
![image](../../assets/content/new-userfolder.png)

### 3. Removing mods from the content folders.
To access the Beamng.drive\content\ folder and clean the folder of any mods, open the installation location of BeamNG.drive.
Right click the `content` folder and delete it. Proceed to verify the game files via Steam or Epic Games. This is going to download the files again.

After you are done, start BeamNG.Drive via the BeamMP-Launcher and you should have 'multiplayerbeammp' as your only enabled mod available in the repository as well as the button on the Main Menu to enter BeamMP.
If you still have issues joining modded server, they likely provide broken/outdated mods.

### 4. Cleaning up the BeamMP-Launcher cache
To clean up cached mods from the BeamMP directories, go to the installation location of your BeamMP-Launcher. By default, the path would be 'C:\Users\AppData\BeamMP-Launcher\'. In there, you will find a 'Resources' folder.
Delete the folder to delete all cached mods. This can be helpful if you need more space on your disk or want to clean out oudated BeamNG mods.

!!! question "My settings and configs are gone! How can I restore them?"

    If you renamed the userfolder, you forced the game to create a new, clean userfolder. You may copy the 'settings' and 'vehicles' folder from the folder you renamed (e.g. 0.34_OLD) to the new folder it created.
    Make sure BeamNG.Drive is closed and replace all elements in the location you want to copy the folders to. You should now have all configs and settings as they were before.
