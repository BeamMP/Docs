# Error Codes

This page contains all the error codes that the server may display.

---

| Code  | Description                                | Possible solution                                                                                                     |
|-------|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| 10022 | There is an issue with binding to the port | Check if the port for the server is already in use by another service, if it is use another one.                      |
| 10048 | Address already in use                     | Another BeamMP server or program is running on that port, use another one.                                            |
| 10051 | Network unreachable                        | Bad port forwarding or similar issues, verify that it is all set up correctly.                                        |
| 10052 | Network reset                              | Happens if the network drops connection while a connection is being established. Retry the connection.                |
| 10053 | Connection aborted                         | Caused by timeout or network error, retry the connection.                                                             |
| 10054 | Connection reset by peer                   | A client has disconnected from your server.                                                                           |
| 10060 | Connection timed out                       | There is an issue with your port forwarding, please refer to the [guide steps](create-a-server.md#1-port-forwarding). |
| 10061 | Connection refused                         | There is an issue with your port forwarding, please refer to the [guide steps](create-a-server.md#1-port-forwarding). |
| 10064 | Host down                                  | Unlikely error, but it means that the host is down because either it's shutdown or ports were closed.                 |
| 10065 | Host not reachable                         | No internet or bad port forwarding, please refer to the [guide steps](create-a-server.md#1-port-forwarding).          |

!!! note
	For any other code not in this list, you can refer to <https://learn.microsoft.com/en-us/windows/win32/winsock/windows-sockets-error-codes-2> if you know a bit how networks / sockets work.

