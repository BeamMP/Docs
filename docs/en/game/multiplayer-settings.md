# Mutliplayer Settings

## **1. Général**

??? setting "Afficher les options avancées"

    Si cette option est activée, vous verrez tous les paramètres multijoueurs.

    Si cette option est désactivée, seuls les paramètres de base du mode multijoueur s'afficheront.

??? setting "Activer la protection contre le clonage de la configuration"

    Si cette option est activée, la configuration de votre véhicule sera protégée contre les sauvegardes par d'autres joueurs.

    Si cette option est désactivée, la configuration du véhicule créé peut être sauvegardée par d'autres joueurs.

??? setting "Désactiver la mise en pause causée par des instabilités"

    Si cette option est activée, les instabilités physiques n'entraîneront pas la mise en pause du jeu.

    Si cette option est désactivée, les instabilités physiques entraîneront la mise en pause du jeu.

    !!! note ""

        Il est conseillé de le laisser désactivé, car des instabilités répétées peuvent faire planter le jeu.

??? setting "Utiliser des véhicules simplifiés lorsqu'ils sont disponibles"

    Si cette option est activée, le jeu remplacera les véhicules des autres joueurs par leurs versions simplifiées (provenant du trafic de l'IA) si elles sont disponibles.

    Si cette option est désactivée, le jeu utilisera les modèles de véhicules prévus.

??? setting "Nouveau menu de chat"

    Si elle est activée, la discussion en cours de jeu sera affichée dans une fenêtre [IMGUI](https://github.com/ocornut/imgui), qui peut par exemple être déplacée hors du jeu sur un autre moniteur.

    S'il est désactivé, le chat en cours de jeu sera affiché en jeu.

    !!! note ""

        Le fait de faire glisser des fenêtres IMGUI hors de la fenêtre principale du jeu peut entraîner des problèmes de performance et tromper les logiciels d'enregistrement d'écran en leur faisant enregistrer la fenêtre de discussion au lieu de la fenêtre principale du jeu.

??? setting "Activer le lissage de la position du véhicule"

    Si cette option est activée, BeamMP utilisera un algorithme pour lisser les mises à jour de la position du véhicule à intervalles réguliers. Cela peut être bénéfique pour les joueurs ayant un ping élevé ou lorsqu'une connexion connaît un taux élevé d'abandon de paquets.

    S'il est désactivé, BeamMP mettra à jour les positions des véhicules au fur et à mesure qu'elles sont reçues.

??? setting "Ignorer l'avertissement de sécurité des mods"

    Si cette option est activée, la fenêtre contextuelle de sécurité des mods ne s'affichera pas lorsque vous essayez de vous connecter à un serveur avec des mods

    Si elle est désactivée, la fenêtre contextuelle de sécurité des mods s'affichera à chaque fois que vous vous connecterez à un serveur avec des mods.

??? setting "Activation de la file d'attente pour les mises à jour/modifications des véhicules des joueurs"

    Si cette option est activée, les véhicules des autres joueurs et les modifications seront placés dans une file d'attente. Voir la section `2. File d'attente d'événements` pour plus de détails

    Si cette option est désactivée, les véhicules des autres joueurs seront chargés instantanément par le jeu.

??? setting "Activer la synchronisation automatique des pièce des véhicules"

    Si cette option est activée, les pièces de vos véhicules seront automatiquement synchronisées avec les autres joueurs après quelques secondes.

    Si cette option est désactivée, vous devez cliquer sur le bouton de synchronisation des pièces dans le sélecteur de pièces pour envoyer une synchronisation aux autres joueurs.

??? setting "Désactiver le passage aux véhicules des autres joueurs"

    Si cette option est activée, le passage d'un véhicule à l'autre saute les véhicules des autres joueurs.

    Si cette option est désactivée, la navigation dans les véhicules passe par tous les véhicules apparus.

??? setting "Fondu enchaîné des véhicules à mesure qu'ils se rapprochent"

    Si cette option est activée, les autres véhicules s'effacent au fur et à mesure qu'ils se rapprochent.

    Si l'option est désactivée, les autres véhicules restent entièrement visibles quelle que soit la distance.

    !!! note ""

        Cela n'affecte que le maillage 3D visible d'un véhicule, et non son maillage de faisceaux de nœuds physiques. Afin de désactiver également la physique, vous devez activer la « physique de collision simplifiée » dans les paramètres de jeu.

??? setting "Afficher les identifiants des joueurs"

    Si cette option est activée, la liste des joueurs en jeu comportera une ligne supplémentaire indiquant l'identifiant de chaque joueur. Utile pour le développement ou la modération

    Si l'option est désactivée, la liste des joueurs en jeu n'affichera que les lignes du nom de joueur et du ping.

??? setting "Autoriser le rafraîchissement de la liste des serveurs en cours de jeu"

    Si cette option est activée, la liste des serveurs sera mise à jour à intervalles réguliers pendant le jeu. Cela peut provoquer des pics de lag

    Si cette option est désactivée, la liste des serveurs ne sera mise à jour qu'à l'ouverture du menu principal.

## **2. File d'attente d'événements**

??? setting "Mettre en évidence les joueurs en file d'attente"

    Si cette option est activée, les joueurs ayant un événement en attente seront mis en évidence dans la liste des joueurs en jeu.

    Si cette option est désactivée, les joueurs ne seront pas mis en évidence individuellement.

??? setting "Appliquer les changements de véhicule avec"

    S'il est réglé sur `Bouton gauche de la souris`, cliquer sur le nom d'un joueur dans la liste des joueurs en utilisant le bouton gauche de la souris chargera les événements en file d'attente. En cliquant avec le bouton droit de la souris, le joueur sera spectateur.

    Si le réglage est `Bouton droit de la souris`, cliquer sur le nom d'un joueur dans la liste des joueurs en utilisant le bouton droit de la souris chargera les événements en attente. En cliquant avec le bouton gauche de la souris, le joueur sera spectateur.

??? setting "Appliquer automatiquement les changements de véhicules en attente"

    Si cette option est activée, les événements en file d'attente seront automatiquement chargés une fois que vous aurez passé sous le seuil de vitesse pendant le temps défini comme délai d'attente.

    S'il est désactivé, les événements en file d'attente ne seront chargés que manuellement, en cliquant soit sur le bouton « Événements » en haut de l'écran à droite, soit sur le nom d'un joueur dans la liste des joueurs.

??? setting "Seuil de vitesse d'application de la file d'attente"

    Ce point de consigne définit le seuil de vitesse du chargement automatique de la file d'attente d'événements. Votre véhicule doit être plus lent que ce seuil pendant plus longtemps que le délai d'application de la file d'attente pour que les événements en file d'attente soient chargés.

??? setting "Délai d'application de la file d'attente"

    Ce point de consigne définit le délai de chargement automatique de la file d'attente des événements. Votre véhicule doit être plus lent que le « Seuil de vitesse d'application de la file d'attente » pendant ce temps afin de charger les événements en file d'attente.

??? setting "Sauter la file d'attente si l'on est spectateur"

    Si cette option est activée, un événement se chargera instantanément si vous êtes spectateur d'un autre joueur.

    S'il est désactivé, un événement sera mis en file d'attente comme il le serait si vous étiez concentré sur votre propre véhicule.

??? setting "Ne mets pas en file d'attente les Monocycles (Bonshommes de neige/Beamlings)"

    Si l'option est activée, un événement concernant un bonhomme de neige ou un phare sera chargé instantanément.

    Si cette option est désactivée, les bonshommes de neige et les phares seront mis en file d'attente comme les autres véhicules.

## **3. Définir Unicycle par défaut**

??? setting "Configuration par défaut de l'unicycle"

    Ce paramètre définit la variante de monocycle à charger par défaut. Vous pouvez choisir entre des configurations préétablies et les vôtres si vous avez enregistré des configurations d'unicycle personnalisées.

??? setting "Sauvegarde automatique de votre dernière utilisation d'unicycle"

    Si cette option est activée, le dernier monocycle utilisé sera automatiquement sauvegardé et rechargé lorsque vous le ferez apparaître à nouveau.

    Si désactivé, la configuration par défaut de l'unicycle sera utilisée à chaque fois.

## **4. Boules**

??? setting "Activer les boules pour les véhicules non chargées"

    Si cette option est activée, vous verrez un orbe ou une boule à la place d'un véhicule non apparu.

    Si cette option est désactivée, le véhicule non apparu sera invisible.

??? setting "Accorder les couleurs"

    ??? setting « Visible »

        Si cette option est activée, une boule sera dessiné, en utilisant la couleur ci-dessous

        S'il est désactivé, aucune boule ne sera dessiné pour la fonction spécifiée.

    ??? setting "Valeurs RGB HEX"

        Véhicule en attente : La couleur qu'une boule utilisera si un véhicule est en file d'attente. Valeur standard #FF6400

        Véhicule illégal : La couleur qu'une boule utilisera si un véhicule est illégal, par exemple à cause d'un mod qui a été "interdit". Valeur standard #000000

        Véhicule supprimé : La couleur qu'une boule utilisera si un véhicule a été supprimé par l'utilisateur. Valeur standard #333333
## **5. Étiquettes**

??? setting "Masquer les étiquettes des joueurs"

    Si cette option est activée, les étiquettes des joueurs ne seront pas affiché.

    Si cette option est désactivée, les étiquettes des joueurs seront affiché en fonction de la position relative de leur véhicule.

??? setting "Afficher la distance par rapport aux autres joueurs"

    Si cette option est activée, le nom du véhicule sera précédé de la distance qui le sépare du véhicule concerné.

    Si cette option est désactivée, aucune distance supplémentaire n'est indiquée.

??? setting "Les étiquettes s'estompent à l'intérieur et à l'extérieur."

    Si cette option est activée, l'étiquette sera estompé en fonction de la « distance d'estompement » et de la « direction d'estompement de l'étiquette ».

    S'il est désactivé, l'étiquette sera affiché avec une opacité standard, quelle que soit la distance par rapport au véhicule concerné.

??? setting "Distance de fondu/direction de fondu de l'étiquette inversé"

    !!! setting "Fondu enchaîné"

        Les étiquettes sont de moins en moins visibles au fur et à mesure que le joueur s'éloigne.

        `Distance de fondu` définit la distance à laquelle l'étiquette sera dessiné avec une opacité minimale.

    !!! setting "Fondu enchaîné"

        Les étiquettes sont de plus en plus visibles au fur et à mesure que le joueur s'éloigne

        `Distance de fondu` définit la distance à laquelle l'étiquette sera affiché avec une opacité maximale.

??? setting "Ne pas cacher complètement les étiquettes"

    Si cette option est activée, l'étiquette ne peut pas devenir totalement invisible, il conservera une opacité minimale quelle que soit la distance.

    Si cette option est désactivée, les étiquettes peuvent devenir totalement invisibles.

??? setting "Raccourcir les étiquettes de noms et de rôles"

    Si cette option est activée, `Limite de longueur du nom` tronquera les noms et les rôles jusqu'à la limite de caractères fixée.

    Si elle est désactivée, les étiquettes de nom et de rôle seront affichées dans leur intégralité.

??? setting "Faire affiché le nom des spectateurs sous le nom des véhicules."

    Si cette option est activée, le nom d'un spectateur sera ajouté sous l'étiquette d'un joueur.

    Si cette option est désactivée, aucun nom de spectateur ne sera ajouté à l'étiquette.

??? setting "Même couleur pour les étiquettes des spectateurs"

    Si cette option est activée, le nom d'un spectateur sera toujours entouré d'un fond gris.

    S'il est désactivé, le nom d'un spectateur sera entouré d'un arrière-plan coloré, reflétant le rôle du spectateur.

## **6. Autres**

??? setting "Afficher l'activité du réseau dans la console"

    Si cette option est activée, l'activité du réseau beamMP sera affichée dans la console.

    Si elle est désactivée, aucune autre activité réseau ne sera affichée dans la console.

    !!! danger ""

        Soyez prudent avec ce paramètre, car toutes les sorties de la console sont également écrites dans les fichiers journaux
        
        Ceux-ci peuvent croître de plusieurs centaines de Mo en quelques minutes lorsque ce paramètre est activé.

??? setting "Port du lanceur BeamMP"

    Ce paramètre définit le port utilisé pour communiquer avec le lanceur

    Ne doit être modifié que si le port standard 4444 ne peut pas être utilisé

    N'oubliez pas de le changer également du côté du lanceur, en modifiant `launcher.cfg`.

    !!! tip ""

        Le port spécifié n'est que le premier de deux, le second port utilisé est directement suivant, set port + 1

        Le premier port transporte les paquets du réseau central, le second les paquets du réseau de jeu, tous deux via TCP.
