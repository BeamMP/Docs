# Comment puis-je trouver l'IP de mon serveur ?

## Pour les serveurs hébergés VPS

Si vous hébergez un serveur auprès de l'un de nos hébergeurs partenaires, l'adresse IP sera affichée sur l'interface de gestion du serveur concernée. Vous pouvez également trouver l'adresse IP de votre/vos serveur(s) sur le site web [de Keymaster](https://keymaster.beammp.com/login) .

## Pour les serveurs hébergés à domicile

Pour les serveurs hébergés à domicile, ouvrez [whatsmyip.org](https://whatsmyip.org) dans un navigateur. Cela affichera l'adresse IPv4 publique avec laquelle vous êtes contacté depuis Internet.

Notez que 127.0.0.1 est l'adresse locale et ne peut être utilisée que par vous-même, si le serveur est hébergé sur le même ordinateur. Si vous rencontrez toujours des problèmes de connexion avec votre serveur hébergé, vérifiez les [redirections de port](https://docs.beammp.com/server/port-forwarding/) et CheckBeamMP.

<form action="https://check.beammp.com/api/v2/beammp" method="get" target="_blank">
  <label for="ip">IP adress:</label>
  <input type="text" id="ip" name="ip"><br>
  <label for="port">Port:</label>
  <input type="text" id="port" name="port"><br>
  <input type="submit" value="CheckBeamMP">
</form>

## Comment vérifier CGNAT ?

Jetez un œil à [cette page](https://docs.beammp.com/FAQ/How-to-check-for-CGNAT/) pour déterminer si vous pouvez héberger un serveur à la maison ou non.

Mots-clés : IP, serveur, échec de connexion, 10060/10061
