# Codes d'erreur

Cette page contient tous les codes d'erreur que le serveur peut afficher.

---

Code | Description | Solution possible
--- | --- | ---
10022 | Il y a un problème avec la liaison au port | Vérifiez si le port du serveur est déjà utilisé par un autre service, si c'est le cas, utilisez-en un autre.
10048 | Adresse déjà utilisée | Un autre serveur ou programme BeamMP est en cours d'exécution sur ce port, utilisez-en un autre.
10051 | Réseau inaccessible | Mauvaise redirection de port ou problèmes similaires, vérifiez que tout est correctement configuré.
10052 | Réinitialisation du réseau | Cela se produit si le réseau perd la connexion pendant l'établissement d'une connexion. Réessayez la connexion.
10053 | Connexion interrompue | En raison d'un délai d'attente ou d'une erreur réseau, réessayez la connexion.
10054 | Connexion réinitialisée par un homologue | Un client s'est déconnecté de votre serveur.
10060 | La connexion a expiré | Il y a un problème avec votre redirection de port, veuillez vous référer aux [étapes de ce guide](create-a-server.md#1-port-forwarding) .
10061 | Connexion rejetée | Il y a un problème avec votre redirection de port, veuillez vous référer aux [étapes de ce guide](create-a-server.md#1-port-forwarding) .
10064 | Hôte en panne | Erreur peu probable, mais cela signifie que l'hôte est en panne parce qu'il est arrêté ou que les ports ont été fermés.
10065 | Hôte non joignable | Pas d'Internet ou mauvaise redirection de port, veuillez vous référer aux [étapes de ce guide](create-a-server.md#1-port-forwarding) .

!!! note Pour tout autre code ne figurant pas dans cette liste, vous pouvez vous référer à [https://learn.microsoft.com/en-us/windows/win32/winsock/windows-sockets-error-codes-2](https://learn.microsoft.com/en-us/windows/win32/winsock/windows-sockets-error-codes-2) si vous savez un peu comment fonctionnent les réseaux / sockets.
