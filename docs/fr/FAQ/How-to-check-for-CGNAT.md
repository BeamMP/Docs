Comment vérifier CGNAT ?

## Problème

Toutes les exclusions de pare-feu et les règles de redirection de port sont correctement configurées, mais personne ne peut rejoindre votre serveur hébergé à domicile ?

Si vous rencontrez des problèmes de connexion et que vous utilisez un hébergeur, contactez-le pour obtenir de l'aide. Si vous souhaitez utiliser un VPS ou ne pouvez pas héberger de serveur chez vous, consultez notre [liste de services d'hébergement partenaires](../../server/create-a-server/#partnered-hosting-services-paid) (documentation de configuration du serveur).

# Qu'est-ce que CGNAT ?

Pour une explication détaillée de ce qu'est CGNAT et pourquoi c'est un problème lorsque vous essayez d'héberger un serveur à la maison, jetez un œil à [cette page](https://en.wikipedia.org/wiki/Carrier-grade_NAT) .

# Comment vérifier CGNAT ?

## Méthode 1 :

Ouvrez une invite de commande et exécutez `tracert -4 beammp.com` . Cela affichera une série de sauts réseau. Attendez la fin de l'opération (jusqu'à 30 sauts peuvent être nécessaires). Vérifiez les premières adresses IP après celle de votre routeur/modem/passerelle. Si plusieurs adresses IP comprises entre `100.64.xx` et `100.127.xx` ou `10.xx.xx.xx` apparaissent après le premier saut, vous êtes probablement derrière un CGNAT.

!!! note

```
Le premier saut sera votre routeur/modem/passerelle et diffère selon les appareils.
Les plages officielles pour les réseaux locaux sont les suivantes : « 10.0.0.xxx » - « 192.168.xxx.xxx » - « 172.16.xxx.xxx »
```

## Méthode 2 :

Trouvez l'adresse IP WAN de votre routeur en la consultant sur son interface. Comparez-la à l'adresse IP publiée sur https://whatsmyip.org, par exemple. Si elles ne sont pas identiques, vous êtes derrière un CGNAT.

## Méthode 3/Solution :

Contactez votre fournisseur d'accès Internet pour obtenir de l'aide. Selon votre fournisseur d'accès, il se peut qu'il ne propose pas d'adresses IP *dynamiques* dédiées. N'oubliez pas qu'une adresse IP statique n'est pas nécessaire.

!!! warning

```
Les fournisseurs de services Internet ne peuvent proposer des adresses IP dédiées qu'en tant qu'**option payante**.
Veuillez vérifier les prix de nos services d'hébergement partenaires car ils pourraient être moins chers que ces frais !
```

Exemple de réseau non-CGNAT :

![image](https://github.com/user-attachments/assets/fee21a50-cbb0-4322-9c26-d9f04f88ae37)

Tags: Server, 10060 10061, CGNAT, Connection Failed, Port Forward, Firewall
