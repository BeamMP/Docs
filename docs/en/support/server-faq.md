# Server FAQ
List of commonly asked questions and known bugs.

---
## **Server**

---
#### **How can I setup my own servers**

All the information to setup your own server can be found [here](https://docs.beammp.com/server/create-a-server/).

---
#### **Can you make a server using linux?**

BeamMP server can be used on Linux and other OS, however builds are usually only provided for Ubuntu 22.04 and Debian 11. The newest builds can be found [here](https://github.com/BeamMP/BeamMP-Server/releases).

For other OS, you need to build from source yourself. Information for this can be found [here](https://github.com/BeamMP/BeamMP-Server#build-instructions).

---
#### **What are the minimum system requirements to run a BeamMP server?**

RAM: 50+ MiB usable (not counting OS overhead)
CPU: >1GHz, preferably multicore
OS: Windows, Linux (theoretically any POSIX)
GPU: None
HDD: 10 MiB + Mods/Plugins
Bandwidth: 5-10 Mb/s upload

---
### **Players outside my network can not join my self-hosted server**

If other players, trying to connect to your server, receive an error code 10060, 10061 or 10038 in their BeamMP launcher, then you should check the following steps:

- Forward port 30814 (or whichever port you set in your ServerConfig.toml), both TCP and UDP protocols.
- Allow BeamMP through the Windows Firewall, allow both incoming and outgoing connections. Turning off the firewall will usually NOT work.
- Make sure you're not using a VPN (this can cause issues).
- Make sure the server is actually running, without any errors or warnings.

You can check if you have successfully portforwarded using the site 'portchecker.co' whilst the server is running.

Please note, some internet providers do not offer dedicated IPv4 addresses to your connection, so port forwarding may not be possible, despite it being available in the router.
Port forwarding is not possible if you are using a mobile (4G/5G) internet connection.

---
### **I can see my self-hosted server in the server-list, but i can not join it myself**

If the server is running on the same machine as the game, you yourself have to use Direct Connect to join, with the IP 127.0.0.1 and your server's port.
For you to be able to join your own, self-hosted server trough the server-list, your router needs to support NAT-loopback, but this is a function not many home routers support.
