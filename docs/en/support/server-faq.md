# F.A.Q. and Known Issues
List of commonly asked questions and known bugs.

---
## **Server**

---
#### **How can I setup my own servers**

All the information to set up your own server can be found [here](https://docs.beammp.com/server/create-a-server/).

---
#### **Can you make a server using linux?**

We provide binaries for many Linux distributions [here](https://github.com/BeamMP/BeamMP-Server/releases/latest). 
If there are no binaries for your Operating System/Distribution, you can build it yourself by downloading the source on our [GitHub](https://github.com/BeamMP/BeamMP-Server), a tutorial can be found [here](https://github.com/BeamMP/BeamMP-Server#build-instructions).

---
#### **What are the minimum system requirements to run a BeamMP server?**

- RAM: 50+ MiB usable (not counting OS overhead)
- CPU: >1GHz, preferably multicore
- OS: Windows, Linux (theoretically any POSIX)
- GPU: None
- HDD: 10 MiB + Mods/Plugins
- Bandwidth: 5-10 Mb/s upload

---
### **Players outside my network can not join my self-hosted server**

Read the step `1. Port Forwarding` of our guide that's available [here](https://docs.beammp.com/server/create-a-server/#1-port-forwarding). Below there's a brief summary of the most noteworthy steps.
If other players, trying to connect to your server, receive an error code 10060, 10061 or 10038 in their BeamMP launcher, then you should check the following steps:

- Forward port 30814 (or whichever port you set in your ServerConfig.toml), both TCP and UDP protocols.
- Allow BeamMP through the Windows Firewall, allow both incoming and outgoing connections. Turning off the firewall will usually NOT work.
- Make sure you're not using a VPN (this can cause issues).
- Make sure the server is actually running, without any errors or warnings.

You can check if you have successfully portforwarded using the site 'portchecker.co' whilst the server is running.

Notes:

- Some internet providers do not offer dedicated IPv4 addresses to your connection, so port forwarding may not be possible, despite it being available in the router.
- Port forwarding is not possible if you are using a mobile (4G/5G) internet connection.

---
### **I can see my self-hosted server in the server-list, but i can not join it myself**

If the server is running on the same machine as the game, you yourself have to use Direct Connect to join, with the IP 127.0.0.1 and your server's port.
For you to be able to join your own, self-hosted server trough the server-list, your router needs to support NAT-loopback, but this is a function not many home routers support.

---
## **Miscellaneous**

---
#### **Where can I find the code?**

All the source code can be found on our [GitHub](https://github.com/BeamMP).
Before doing anything keep in mind that the code is subject to our [Terms of Use](https://forum.beammp.com/t/terms-of-use-v1-0/43) and licenses:

|   Code     | License                                                                    |
|------------|:--------------------------------------------------------------------------:|
| Server     | [LICENSE](https://github.com/BeamMP/BeamMP-Server/blob/master/LICENSE)     |
| Launcher   | [LICENSE](https://github.com/BeamMP/BeamMP-Launcher/blob/master/README.md) |
| Client Lua | [LICENSE](https://github.com/BeamMP/BeamMP/blob/development/LICENSE.md)    |

---
#### **I have found a bug or an exploit what should I do?**

If the issue is code related and you know how to use Github, create a new "Issue" in the appropriate repository on our [GitHub](https://github.com/BeamMP). We use an issue-based workflow so even if you already have a fix for the bug, consider opening a new "Issue", then asking a "Pull Request" that solves your "Issue". More info on contributing can be found [here](https://github.com/BeamMP/BeamMP/blob/development/CONTRIBUTING.md).

If you don't have a GitHub account or you don't know how to use GitHub you can get in touch with us in the following ways:

- If it is not something sensitive, you can create a post on our [BeamMP Forum](https://forum.beammp.com) or you can report this on our [Official Discord](https://discord.gg/beammp).
- If the information is sensitive you can directly report the issue to a Staff member on our [Discord](https://discord.gg/beammp).