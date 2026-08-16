# Configuration d’un serveur sur VPS

## **Configurer un serveur**

Les bases de la configuration de l’application serveur.

Ce guide part du principe que vous hébergez un serveur **sur un VPS avec un panneau de gestion**.

Pour obtenir un guide détaillé sur l’hébergement d’un serveur à domicile, consultez [Comment créer un serveur](https://docs.beammp.com/server/create-a-server/).

### **Présentation**

**Créer un serveur à domicile est gratuit, tandis que l’utilisation d’un VPS est plus simple et plus sécurisée.**

Les serveurs sont un élément essentiel de BeamMP : ils permettent aux joueurs de se connecter les uns aux autres. Ils fonctionnent nativement sous Windows et Linux.

Vous pouvez créer des serveurs privés, accessibles uniquement aux personnes que vous invitez, ou des serveurs publics, qui apparaîtront dans notre liste officielle des serveurs.

La mise en place d’un serveur se fait en quelques étapes. Si vous rencontrez un problème, n’hésitez pas à demander de l’aide sur notre [forum](https://forum.beammp.com) ou sur notre [serveur Discord](https://discord.gg/beammp), dans le canal `❔-support`. Consultez également la section [« Maintenance du serveur »](server-maintenance.md) pour plus d’informations.

Avant toute utilisation, veuillez lire la [licence](https://raw.githubusercontent.com/BeamMP/BeamMP-Server/master/LICENSE) du serveur.

!!! Info

```
L’utilisation d’un VPS pour héberger votre serveur ne nécessite aucune modification du pare-feu ou de la redirection de ports de votre routeur.
```

Si vous n’avez pas encore choisi de VPS pour héberger votre serveur, vous pouvez consulter nos **services d’hébergement partenaires (payants)** :

??? Abstract "Services d’hébergement partenaires"

```
* [Horizon Hosting](https://hrzn.link/beammp)
* [RackGenius](https://rackgeni.us/beammp-plans)
* [Connect Hosting](https://connecthosting.net/beammp)
* [Assetto Hosting](https://assettohosting.com/en/games/beamng)
* [ZAP-Hosting](https://zap-hosting.com/itsbeammp)
* [HostHavoc](https://hosthavoc.com/)
* [PedalHost](https://pedal.host/)
* [Vyper Hosting](https://vyperhosting.com/r/beammp)
* [BisectHosting](https://www.bisecthosting.com/beammp-server-hosting)
* [Four Seasons Hosting](https://fourseasonshosting.com)
* [Vertuo Hosting](https://vertuohosting.com)
* [Winheberg](https://winheberg.fr/offres/gaming/beammp?lang=en)
* [Wabbanode](https://wabbanode.com/partner/beammp)
* [Iceline Hosting](https://iceline-hosting.com/games/beammp)

(Nous déclinons toute responsabilité concernant le contenu des services ou sites web externes vers lesquels ces liens redirigent.)
```

### **1. Configurer le VPS**

Commencez par vérifier que le panneau de gestion de votre serveur est accessible.

Une fois que vous avez vérifié que le serveur est prêt à fonctionner, passez à l’étape 2.

### **2. Obtenir une clé d’authentification**

La **clé d’authentification**, souvent appelée `AuthKey`, est nécessaire pour rendre un serveur **public** et permettre son affichage dans la liste des serveurs. Il est toutefois recommandé d’ajouter également une clé d’authentification aux serveurs privés.

Le nombre de clés dont vous disposez est limité. Une même clé ne peut être utilisée que par un seul serveur à la fois : vous ne pouvez donc pas démarrer deux serveurs simultanément avec la même clé.

Vous pouvez obtenir davantage de clés en soutenant le projet. Consultez [cet article](https://docs.beammp.com/support/player-faq/) pour plus d’informations.

!!! warning

```
**NE PARTAGEZ JAMAIS CETTE CLÉ ET NE LA MONTREZ À PERSONNE. TRAITEZ-LA COMME UN MOT DE PASSE.**
```

Vous aurez besoin d’un compte [Discord](https://discord.com) pour cette étape. Cela permet notamment de limiter le spam.

#### **2.1. Accéder à la page des clés**

Connectez-vous avec Discord à [Keymaster](https://keymaster.beammp.com).

Depuis la page d’accueil de Keymaster, cliquez sur **« Keys »** à gauche de l’écran :

<figure markdown>
  ![](../../assets/content/keymaster_homepage.png)
</figure>

#### **2.2. Créer une clé**

Pour créer une clé, cliquez sur le bouton vert **« + »** situé en haut à droite.

<figure markdown>
  ![](../../assets/content/keymaster_new_key.png)
</figure>

#### **2.3. Renseigner les informations de la clé**

Saisissez ensuite le nom du serveur dans le champ **« Server Name »**. Il s’agit uniquement du nom associé à la clé et non du nom réel de votre serveur dans la liste. Cliquez ensuite sur **« Create »**.

Exemple :

<figure class="image image_resized" style="width:44.84%;" markdown>
  ![](../../assets/content/keymaster_server_name.png)
</figure>

Une fois la clé créée, vous devriez obtenir un résultat similaire à celui-ci :

<figure markdown>
  ![](../../assets/content/keymaster_key_done.png)
</figure>

#### **2.4. Copier la clé**

Copiez maintenant le contenu du champ **« Key »**. Dans cet exemple, il s’agit de `3173a2e-6az0-4542-a3p0-ddqq5ff95558`. Conservez cette clé pour l’étape suivante.

Vous pouvez la copier en cliquant sur l’icône en forme de presse-papiers située à droite de la clé :

<figure markdown>
  ![](../../assets/content/keymaster_copy_key.png)
</figure>

!!! warning

```
Vous ne pourrez pas modifier directement le fichier `ServerConfig.toml` depuis le gestionnaire de fichiers. Cette restriction est intentionnelle afin de permettre à l’hébergeur d’imposer certaines limites, comme le nombre maximal de joueurs.
```

### **3. Renseigner les champs**

Le panneau de gestion comporte plusieurs champs à remplir. Certains peuvent être marqués d’un **« * »**, ce qui signifie qu’ils sont obligatoires.

Avec l’`AuthKey` copiée dans votre presse-papiers, recherchez le champ **« Authkey »** dans le panneau de gestion et collez-y la clé.

Donnez également un **nom** et une **description** à votre serveur. Pour personnaliser leur apparence, notamment avec des couleurs, consultez [la section « Personnalisation du nom »](server-maintenance.md#customize-the-look-of-your-server-name) de la page consacrée à la maintenance du serveur.

#### **3.1. Vérification**

Démarrez maintenant votre serveur et vérifiez si d’autres messages `[ERROR]` ou `[WARN]` apparaissent. Le serveur devrait désormais rester actif.

Les étapes suivantes expliquent comment rejoindre votre serveur et y ajouter des mods.

### **4. Ajouter des mods à votre serveur**

Vous pouvez ajouter des mods à votre serveur à l’aide du gestionnaire de fichiers fourni par votre hébergeur.

L’installation des mods de véhicules et des cartes diffère, mais ils doivent tous deux être placés dans le dossier `Resources/Client` de votre serveur. Il vous suffit de glisser-déposer le mod souhaité dans ce dossier.

!!! warning

```
Les mods peuvent être incompatibles avec BeamNG, BeamMP ou d’autres mods, et peuvent également le devenir à la suite de mises à jour. Si vous rencontrez des problèmes, commencez par retirer les mods récemment ajoutés.

Si vous recevez un message **« done »** ou **« start »** lorsque vous essayez de rejoindre votre serveur après avoir ajouté des mods, il est probable que vous ayez installé un mod incompatible ou défectueux.

Des conflits peuvent également survenir entre deux ou plusieurs mods. Si vous avez installé des mods côté client, consultez [ce guide](../../FAQ/How-to-deactivate-mods.md) pour savoir comment les supprimer de votre jeu.
```

#### **4.1. Mods généraux**

Si vous souhaitez uniquement ajouter des mods de véhicules, placez simplement le fichier `.zip` du mod dans le dossier `Resources/Client`.

Ils seront automatiquement téléchargés par les joueurs qui rejoignent votre serveur.

#### **4.2. Cartes**

Toutes les cartes par défaut (c’est-à-dire les cartes qui ne sont pas des mods) fonctionnent directement et ne nécessitent aucune installation. Il vous suffit de modifier le paramètre `Map` dans le panneau de gestion et de choisir l’une des [cartes disponibles](server-maintenance.md#all-vanilla-maps-names).

Pour les autres cartes modifiées, procédez comme suit :

1. Placez le fichier `.zip` de votre carte dans le dossier `Resources/Client` de votre serveur.
2. Ouvrez le fichier `.zip` de la carte **sans l’extraire**, puis ouvrez le dossier `levels`. Celui-ci doit contenir un seul autre dossier portant le nom de la carte, par exemple `myawesomedriftmap2021`. Copiez ou mémorisez ce nom **exactement comme il apparaît**.
3. Ouvrez votre panneau de gestion. Dans le champ `Map`, vous devriez voir `/levels/MAPNAME/info.json`, où `MAPNAME` correspond probablement à un nom tel que `gridmap_v2`. Remplacez `MAPNAME` par le nom du dossier trouvé à l’étape précédente. Dans notre exemple, il s’agit de `myawesomedriftmap2021`.

Le résultat devrait alors ressembler à l’exemple correspondant et **doit impérativement se terminer par** `/info.json`.

Lorsqu’un joueur rejoindra votre serveur, la carte devrait désormais être téléchargée automatiquement et fonctionner normalement.

**Si cela ne fonctionne pas**, installez la carte sur votre version locale de BeamNG.drive, lancez le jeu et chargez la carte concernée. Ouvrez ensuite la console en appuyant sur la touche `~` (*tilde*). Si vous utilisez un clavier non américain, recherchez l’action **« Basculer la console système »** dans **Options > Contrôles > Liaisons**, sous la section **« Débogage général »**.

Dans la console, exécutez la commande suivante :

`print(getMissionFilename())`

Le nom à utiliser devrait alors s’afficher.

Et voilà ! Votre carte modifiée devrait maintenant être disponible sur votre serveur !

### **5. Comment rejoindre votre serveur**

Découvrez comment vous et les autres joueurs pouvez rejoindre votre serveur.

#### **5.1. Rejoindre votre propre serveur (privé ou public)**

Vous pouvez vous connecter directement à l’adresse IP publique et au port de votre serveur, indiqués dans le panneau de gestion. Ces mêmes informations doivent être utilisées par les autres joueurs qui souhaitent se connecter à votre serveur.

Vous pouvez également consulter [Keymaster](https://keymaster.beammp.com/) pour connaître l’adresse IP de votre serveur.

Pour rejoindre votre serveur public, les joueurs peuvent simplement ouvrir la liste des serveurs, rechercher le nom de votre serveur, puis cliquer sur **« Se connecter »**.

Si vous ne connaissez pas le nom exact de votre serveur, il s’agit de celui que vous avez défini dans `ServerConfig.toml`.

Si votre serveur n’apparaît pas dans la liste, vérifiez que les filtres de recherche sont désactivés et que la carte est définie sur **« Tout »**.

Si vous ou vos amis rencontrez l’erreur **« Échec de la connexion ! »**, vérifiez dans la fenêtre du lanceur si des codes tels que `10060`, `10061` ou `10030` apparaissent.

Cela signifie généralement que le serveur est inaccessible ou que les informations saisies dans les champs d’adresse IP et de port sont incorrectes.

La prise en charge d’IPv6 **n’est pas encore implémentée**.

## Vous rencontrez toujours des problèmes ?

Ouvrez un sujet sur le [forum](https://forum.beammp.com) ou créez un **ticket d’assistance serveur** sur notre [serveur Discord](https://discord.gg/beammp), dans le canal `❔-support`.
