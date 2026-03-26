## Зачем мне деактивировать моды?

В BeamMP сервер, к которому вы решили подключиться, предоставляет необходимые моды. Они загружаются и активируются автоматически при подключении. Наличие установленных и активных локальных модов часто приводит к тому, что BeamMP не работает должным образом, даже если у вас есть всего один дополнительный мод помимо BeamMP.

!!! предупреждение

```
Remove any mods you have placed in the BeamNG.Drive\content\ or sub-folders. That location is NOT meant for the installing mods and can lead to issues as stated in the `DO_NOT_INSTALL_MODS_HERE.txt` file, located in the same directory.

!!! quote "DO_NOT_INSTALL_MODS_HERE.txt"

    Do NOT copy mods into this folder: it can lead to broken mods, slower installation of updates, a broken mod manager, broken Safe Mode and others.
```

## Как деактивировать/удалить мои моды?

Существует 3 варианта решения возможных проблем при использовании BeamMP.

### 1. Отключить моды

Перед тем, как присоединиться к любому серверу, убедитесь, что у вас нет модов, кроме 'multiplayerbeammp'. Если игра зависает или у вас все еще есть проблемы, обратитесь к следующему варианту

### 2. Создание новой папки пользователя

Open the BeamNG.Drive userfolder and rename the `current` folder to for example `current_old`. Close BeamNG.drive before renaming it. ![image](../../assets/content/new-userfolder.png)

### 3. Удаление модов из папок контента.

To access the Beamng.drive\content\ folder and clean the folder of any mods, open the installation location of BeamNG.drive. Right click the `content` folder and delete it. Proceed to verify the game files via Steam or Epic Games. This is going to download the files again.

После того, как вы закончите, запустите BeamNG.Drive через BeamMP-Launcher, и у вас должен быть 'multiplayerbeammp' как ваш единственный включенный мод, доступный в репозитории, а также кнопка в главном меню для входа в BeamMP. Если у вас все еще есть проблемы с присоединением к модифицированному серверу, они, вероятно, предоставляют сломанные/устаревшие моды.

### 4. Очистка кэша BeamMP-Launcher

To clean up cached mods from the BeamMP directories, go to the installation location of your BeamMP-Launcher. By default, the path would be 'C:\Users\AppData\BeamMP-Launcher'. In there, you will find a 'Resources' folder. Delete the folder to delete all cached mods. This can be helpful if you need more space on your disk or want to clean out oudated BeamNG mods.

!!! вопрос "Мои настройки и конфигурации пропали! Как их восстановить?"

```
If you renamed the userfolder, you forced the game to create a new, clean userfolder. You may copy the 'settings' and 'vehicles' folder from the folder you renamed (e.g. `current_old`) to the new folder it created.
Make sure BeamNG.Drive is closed and replace all elements in the location you want to copy the folders to. You should now have all configs and settings as they were before.
```
