# Serveur Manuel

# Environnement

Le serveur est affecté par l'état de divers paramètres externes :

- Le dossier « Ressources »
- L'ENV (environnement de processus)
- Les arguments de la ligne de commande
- Le fichier ServerConfig.toml
- Le répertoire de travail

## Dossier de ressources

Le dossier « ressources » est créé au démarrage du serveur, avec les sous-répertoires « Client » et « Serveur ». Le sous-répertoire « Serveur » accepte des dossiers contenant chacun au moins un fichier `.lua` . Chacun de ces dossiers est appelé « Plugin ». Les fichiers `.lua` contenus dans le répertoire principal d'un plugin sont rechargés à chaud en cas de modification. Le sous-répertoire « Client » accepte *uniquement* les fichiers `.zip` , chargés au démarrage du serveur et supposés inchangés pendant l'exécution.

## ENV

### Paramètres Général

Depuis la version 3.2.0 du serveur, le serveur BeamMP accepte les variables d'environnement, qui **remplacent** les paramètres du fichier ServerConfig.toml. Toutes les variables ServerConfig de la catégorie/section « Général » sont en PascalCase ; elles sont en majuscules et préfixées par `BEAMMP_` . Par exemple, le paramètre `MaxPlayers` converti en majuscules est `MAX_PLAYERS` (notez le `_` au début d'un nouveau mot) et préfixé par `BEAMMP_MAX_PLAYERS` . Ce format est utilisé pour tous les paramètres « Général ». Les variables d'environnement suivantes existent :

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

Toutes les variables d'environnement correspondant à des paramètres de configuration (chaînes ou nombres) doivent être des chaînes, par exemple `BEAMMP_NAME="Cool Server"` , `BEAMMP_NAME=Server1` , `BEAMMP_PORT=12345` . Les variables d'environnement correspondant à des paramètres de configuration booléens (true/false, on/off) doivent être soit `true` , soit `1` (les deux signifiant ON), ou toute autre valeur (signifiant OFF).

### Paramètres du fournisseur

Ces variables d'environnement permettent aux fournisseurs d'hébergement (et aux autres utilisateurs disposant d'un plus grand nombre de serveurs), ici appelés « fournisseurs », d'écraser certains paramètres spécifiques au fournisseur.

#### `BEAMMP_PROVIDER_PORT_ENV` (depuis la version 3.3.0)

Lorsqu'elle est définie sur une chaîne non vide, la variable `BEAMMP_PORT` est remplacée par une autre, afin de pouvoir la lire depuis un environnement existant. Par exemple, Pterodactyl peut exposer `SERVER_PORT` comme environnement. Pour l'utiliser avec BeamMP-Server, il faudrait utiliser `BEAMMP_PORT=${SERVER_PORT}` , ce qui est un peu absurde.

Au lieu de cela, vous pouvez désormais utiliser `BEAMMP_PROVIDER_PORT_ENV="SERVER_PORT"` , ce qui conduit BeamMP-Server à lire le port à partir de la variable `SERVER_PORT` ENV.

#### `BEAMMP_PROVIDER_DISABLE_CONFIG` (depuis la version 3.3.0)

Si la valeur est `1` ou `true` , le `ServerConfig.toml` **n'est pas généré** et **n'est pas lu** s'il existe. La `BEAMMP_AUTH_KEY` doit être définie pour que le serveur fonctionne.

#### `BEAMMP_PROVIDER_UPDATE_MESSAGE` (depuis la version 3.2.2)

Si la chaîne est non vide, elle remplace l'intégralité du message de mise à jour, qui est par défaut « NOUVELLE VERSION ! Veuillez mettre à jour vers la nouvelle… », etc. Le message de mise à jour que vous fournissez doit **obligatoirement** contenir `{}` , que le serveur remplacera par le nouveau numéro de version. Par exemple, votre message de mise à jour pourrait ressembler à ceci :

```sh
BEAMMP_PROVIDER_UPDATE_MESSAGE="Une nouvelle version du serveur BeamMP est disponible : {} ! Veuillez suivre le guide de mise à jour ici : https://example.com/update-"
```

Ce qui entraînerait un message de mise à jour comme

```
Une nouvelle version du serveur BeamMP est disponible : v5.0.2 ! Veuillez suivre le guide de mise à jour ici : https://example.com/update-guide
```

Veuillez veiller à bien faire comprendre aux utilisateurs qu'ils doivent effectuer la mise à jour et à leur expliquer comment procéder.

## Arguments de ligne de commande

Exécutez le serveur BeamMP avec l'argument `--help` pour en savoir plus. Par exemple : `./BeamMP-Server --help` .

## ServerConfig.toml

Ce fichier est généré au premier démarrage. Les commentaires contenus dans le fichier constituent le moyen le plus récent de comprendre la fonction de chaque paramètre.

## Répertoire de travail

Le répertoire de travail du serveur, et non l'emplacement de l'exécutable du serveur, est le facteur déterminant sur l'endroit où le ServerConfig.toml, les fichiers journaux du serveur et le dossier Ressources sont générés.

# Limites

Les limitations suivantes sont appliquées dans le backend BeamMP, ce qui affecte les serveurs :

- Le nom est limité à 250 caractères
- La description est limitée à 1000 caractères
- La carte est limitée à 100 caractères
- Les tags sont limités à 100 caractères
