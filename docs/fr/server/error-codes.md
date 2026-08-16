# Codes d’erreur

Cette page répertorie les principaux codes d’erreur que le serveur peut afficher.

---

| Code  | Description                              | Solution possible                                                                                                                                                                   |
| ----- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10022 | Problème lors de la liaison au port      | Vérifiez si le port du serveur est déjà utilisé par un autre service. Si c’est le cas, utilisez un autre port.                                                                      |
| 10048 | Adresse déjà utilisée                    | Un autre serveur ou programme BeamMP utilise déjà ce port. Arrêtez-le ou utilisez un autre port.                                                                                    |
| 10051 | Réseau inaccessible                      | Vérifiez votre redirection de port ainsi que les autres paramètres réseau.                                                                                                          |
| 10052 | Réinitialisation du réseau               | Le réseau a perdu la connexion pendant l’établissement de la connexion. Réessayez.                                                                                                  |
| 10053 | Connexion interrompue                    | La connexion a été interrompue en raison d’un délai d’attente ou d’une erreur réseau. Réessayez.                                                                                    |
| 10054 | Connexion réinitialisée par un homologue | Un client s’est déconnecté de votre serveur.                                                                                                                                        |
| 10060 | Délai d’attente de la connexion dépassé  | Un problème lié à votre redirection de port est probablement à l’origine de l’erreur. Consultez [la section dédiée à la redirection de port](create-a-server.md#1-port-forwarding). |
| 10061 | Connexion refusée                        | Un problème lié à votre redirection de port est probablement à l’origine de l’erreur. Consultez [la section dédiée à la redirection de port](create-a-server.md#1-port-forwarding). |
| 10064 | Hôte hors service                        | Erreur peu probable. Elle indique généralement que l’hôte est hors service, par exemple parce que le serveur est arrêté ou que les ports sont fermés.                               |
| 10065 | Hôte inaccessible                        | Il peut s’agir d’un problème de connexion Internet ou de redirection de port. Consultez [la section dédiée à la redirection de port](create-a-server.md#1-port-forwarding).         |

!!! note

Pour tout autre code ne figurant pas dans cette liste, vous pouvez consulter la [liste des codes d’erreur Windows Sockets](https://learn.microsoft.com/en-us/windows/win32/winsock/windows-sockets-error-codes-2), si vous avez quelques connaissances en matière de réseaux et de sockets.
