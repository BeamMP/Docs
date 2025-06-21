# FAQ et problèmes courants
Listes de questions posées fréquemment et problèmes connus.

---
## **Serveur**

---
### **Comment est-ce que je peux faire mon propre serveur?**

Toute l'information nécessaire pour créer votre propre serveur peut être retrouvée [ici](https://docs.beammp.com/server/create-a-server/).

---
### **Est-ce que Linux peut être utilisé pour faire un serveur?**

Nous fournissons les "binairies" pour plusieurs distributions de Linux [ici](https://github.com/BeamMP/BeamMP-Server/releases/latest). 
Si aucune "binairies" n'est disponible pour votre système d'opération/distribution, vous pouvez les construires vous même en téléchargeant le code source depuis notre [GitHub](https://github.com/BeamMP/BeamMP-Server), un tutoriel peut être trouvé [ici](https://github.com/BeamMP/BeamMP-Server#build-instructions).

---
### **Quelles sont les spécifications minimales pour éxecuter le logiciel serveur de BeamMP?**

- RAM: 50+ MiB utilisable (sans compter la ram utilisé par le système d'opération)
- CPU: >1GHz, préférablement multicore
- OS: Windows, Linux (théoriquement n'importe quel POSIX)
- GPU: Aucun
- HDD: 10 MiB + Mods/Plugins
- Bande passante: 5-10 Mb/s en téléversement

---
## **Les joueurs en dehors de mon réseau local ne peuvent pas rejoindre mon serveur auto-hébergé**

Lisez le guide (en anglais pour le moment, la version traduite s'envient) au sujet de la redirection de port disponible [ici](https://docs.beammp.com/server/port-forwarding/). Il y a un petit résumé des étapes les plus importantes ci-dessous.
Si d'autres joueurs essaient de se connecter et qu'ils reçoivent un code d'erreur 10060, 10061 ou 10038 dans leur lanceur BeamMP, vous devriez suicre les étapes ci-dessous:

- Redirigez les deux protocol UDP et TCP du  port 30814 (ou le port que vous avez spécifié dans votre fichier ServerConfig.toml).
- Authorisez BeamMP à passer au travers du parefeu Windows authorisez les connections entrantes et sortantes. En général, désactiver le parefeu **NE** fonctionnera **PAS**.
- Assurez-vous que vous n'utilisez pas de VPN (Cela peut causer des problèmes).
- Assurez-vous que le logiciel serveur est lancé et qu'il ne donne pas d'erreurs ni d'avertissements.

Vous pouvez vérifier si vous avez correctement configuré la redirection de port en utilisant CheckBeamMP lorsque le serveur est lancé.

<form action="https://check.beammp.com/api/v2/beammp" method="get" target="_blank">
  <label for="ip">IP adress:</label>
  <input type="text" id="ip" name="ip"><br>
  <label for="port">Port:</label>
  <input type="text" id="port" name="port"><br>
  <input type="submit" value="CheckBeamMP">
</form>

Notes:

- Certains fournisseurs d'internet n'offre pas d'adresse ipv4 dédiée à votre connection (CGNAT), la redirection de port pourrait donc ne pas être possible même si l'option est disponible dans l'interface de votre routeur.
- La redirection de port est impossible si vous utilisez une connection cellulaire (4G/5G).

---
### **Je peux voir mon serveur que j'auto-héberge, mais je ne peux pas m'y connecter**

Si le serveur fonctionne sur le même ordinateur que le jeu, vous devez utiliser l'onglet "Direct connect" avec l'adresse ip 127.0.0.1 and le port du serveur pour vous connecter.
Pour que vous puissiez vous connecter à votre serveur auto-hébergé via la liste des serveurs, votre routeur dois supporter le protocol NAT-loopback, une fonction très peu répandue dans les routeur de monsieur madame tout le monde.

---
## **Divers**

---
### **Où est-ce que je peux trouver le code?**

Le code source en entier peut être retouvé sur notre [GitHub](https://github.com/BeamMP).
Avant de faire n'importe quel changement, souvenez-vous que le code est assujettit à nos  [Conditions d'utilisation](https://forum.beammp.com/t/terms-of-use-v1-0/43) et licenses:

|   Code     | License                                                                    |
|------------|:--------------------------------------------------------------------------:|
| Serveur     | [LICENSE](https://github.com/BeamMP/BeamMP-Server/blob/master/LICENSE)     |
| Lanceur   | [LICENSE](https://github.com/BeamMP/BeamMP-Launcher/blob/master/LICENSE) |
| Client Lua | [LICENSE](https://github.com/BeamMP/BeamMP/blob/development/LICENSE)    |

---
### **J'ai trouvé un bug ou un exploit, que dois-je faire?**

Si le problème est en lien avec le code et que vous savez utiliser Github, ouvrez une nouvelle "issue" (en anlgais) dans le répertoire approprié sur notre [GitHub](https://github.com/BeamMP). Nous utilisons un rythme de travail basée sur les "issue" donc même si vous avez une solution au problème, ouvrez une nouvelle "issue" et un "pull request" qui contient la solution au problème. PLus d'information sur comment contribuer peut être trouvé [ici](https://github.com/BeamMP/BeamMP/blob/development/CONTRIBUTING.md).

Si vous n'avez pas de compte Github, ne savez pas comment utiliser Github ou si vous avez une n'importe quelle autre question, vous pouvez entrer en contact avec nous de ces deux façons:

- Si c'est quelque chose qui n'est pas sensible/personel, vous pouvez créer un post sur notre [Forum BeamMP](https://forum.beammp.com) ou vous pouvez le signaler sur notre [Discord Officiel](https://discord.gg/beammp).
- Si l'information est sensible/personelle, vous pouvez signaler le problème directement à un(e) membre de notre équipe (Staff) sur notre [Discord](https://discord.gg/beammp).
