# Serveur manuel

## Environnement

Le fonctionnement du serveur dépend de plusieurs paramètres externes :

* le dossier `Resources` ;
* les variables d’environnement ;
* les arguments de la ligne de commande ;
* le fichier `ServerConfig.toml` ;
* le répertoire de travail.

## Dossier de ressources

Le dossier `Resources` est créé au démarrage du serveur et contient deux sous-dossiers : `Client` et `Server`.

Le sous-dossier `Server` peut contenir des dossiers de plugins, chacun devant contenir au moins un fichier `.lua`. Chacun de ces dossiers est considéré comme un **plugin**. Les fichiers `.lua` situés à la racine d’un plugin sont rechargés automatiquement lorsqu’ils sont modifiés.

Le sous-dossier `Client` accepte **uniquement** les fichiers `.zip`. Ceux-ci sont chargés au démarrage du serveur et sont supposés rester inchangés pendant son fonctionnement.

## Variables d’environnement

### Paramètres généraux

Depuis la version 3.2.0 du serveur, BeamMP prend en charge les variables d’environnement. Celles-ci **prennent priorité sur les paramètres définis dans `ServerConfig.toml`**.

Les paramètres de la section `[General]` du fichier de configuration sont convertis en majuscules, puis préfixés par `BEAMMP_`. Les mots successifs sont séparés par un `_`.

Par exemple, `MaxPlayers` devient `BEAMMP_MAX_PLAYERS`.

Les variables d’environnement disponibles sont :

* `BEAMMP_DEBUG`
* `BEAMMP_PRIVATE`
* `BEAMMP_PORT`
* `BEAMMP_MAX_CARS`
* `BEAMMP_MAX_PLAYERS`
* `BEAMMP_MAP`
* `BEAMMP_NAME`
* `BEAMMP_DESCRIPTION`
* `BEAMMP_TAGS`
* `BEAMMP_RESOURCE_FOLDER`
* `BEAMMP_AUTH_KEY`
* `BEAMMP_LOG_CHAT`

Les variables correspondant à des paramètres de configuration de type chaîne ou nombre doivent être définies sous forme de chaîne. Par exemple :

```sh
BEAMMP_NAME="Cool Server"
BEAMMP_NAME="Server1"
BEAMMP_PORT="12345"
```

Pour les paramètres booléens (`true/false`, `on/off`), utilisez `true` ou `1` pour activer l’option. Toute autre valeur sera considérée comme désactivée.

### Paramètres du fournisseur

Ces variables d’environnement permettent aux hébergeurs et aux utilisateurs gérant plusieurs serveurs, ci-après appelés **fournisseurs**, de remplacer certains paramètres spécifiques.

#### `BEAMMP_PROVIDER_PORT_ENV` — depuis la version 3.3.0

Lorsque cette variable contient une chaîne non vide, elle indique au serveur de récupérer le port depuis une autre variable d’environnement au lieu d’utiliser directement `BEAMMP_PORT`.

Par exemple, Pterodactyl peut fournir le port du serveur via la variable `SERVER_PORT`. Plutôt que d’utiliser :

```sh
BEAMMP_PORT=${SERVER_PORT}
```

vous pouvez définir :

```sh
BEAMMP_PROVIDER_PORT_ENV="SERVER_PORT"
```

BeamMP-Server récupérera alors automatiquement le port depuis `SERVER_PORT`.

#### `BEAMMP_PROVIDER_DISABLE_CONFIG` — depuis la version 3.3.0

Si cette variable vaut `1` ou `true`, le fichier `ServerConfig.toml` **ne sera ni généré ni lu**, même s’il existe déjà.

La variable `BEAMMP_AUTH_KEY` doit alors être définie pour que le serveur puisse fonctionner.

#### `BEAMMP_PROVIDER_UPDATE_MESSAGE` — depuis la version 3.2.2

Lorsque cette variable contient une valeur, elle remplace entièrement le message de mise à jour par défaut.

Le message doit **obligatoirement contenir `{}`**. Le serveur remplacera cette séquence par le numéro de la nouvelle version.

Par exemple :

```sh
BEAMMP_PROVIDER_UPDATE_MESSAGE="Une nouvelle version du serveur BeamMP est disponible : {} ! Consultez le guide de mise à jour ici : https://example.com/update-guide"
```

Le serveur affichera alors un message similaire à :

```text
Une nouvelle version du serveur BeamMP est disponible : v5.0.2 ! Consultez le guide de mise à jour ici : https://example.com/update-guide
```

Veillez à indiquer clairement aux utilisateurs qu’ils doivent effectuer la mise à jour et à leur expliquer comment procéder.

## Arguments de la ligne de commande

Exécutez BeamMP-Server avec l’argument `--help` pour afficher les informations disponibles.

Par exemple :

```sh
./BeamMP-Server --help
```

## `ServerConfig.toml`

Le fichier `ServerConfig.toml` est généré lors du premier démarrage du serveur.

Les commentaires présents dans ce fichier constituent la référence la plus à jour pour comprendre le rôle de chaque paramètre.

## Répertoire de travail

Le **répertoire de travail du serveur**, et non le dossier contenant son exécutable, détermine l’emplacement où seront générés :

* `ServerConfig.toml` ;
* les fichiers journaux du serveur ;
* le dossier `Resources`.

## Limites

Certaines limites sont appliquées par le backend BeamMP et affectent les serveurs :

* **Nom** : 250 caractères maximum ;
* **Description** : 1 000 caractères maximum ;
* **Carte** : 100 caractères maximum ;
* **Tags** : 100 caractères maximum.
