How to check for CGNAT?
## Issue

All Firewall and Port forwarding rules are 100% correct, yet nobody can join your home-hosted Server!

If you have connection problems and you are using a Hosting-Service, contact them for assistance. If you want to use a VPS, take a look at this
[list of Partnered hosting services](https://docs.beammp.com/server/create-a-server/#_1:~:text=our%20partnered%20Services!-,Paid%20Services%3A,-Horizon%20Hosting) (Server setup documentation)

# How to check for CGNAT?

## Method 1:
Open a command prompt, run ``tracert -4 beammp.com``. This will output a series of network hops. Wait for the operation to finish (may take up to 30 hops). Check the first few IP addresses after the IP of your Router/Modem/Gateway.
If multiple IP addresses within the range of ``100.64.x.x``-``100.127.x.x`` or ``10.xx.xx.xx`` appear after the first hop, you are most likely behind a CGNAT.
The first hop is your Router/Modem/Gateway and differs between Devices.

## Method 2:
Find out the WAN IP on your router by looking it up on its interface. Compare it to the IP posted on e.g. https://whatsmyip.org . If they are NOT the same, you are behind a CGNAT.

## Method 3/Solution:
Call your Internet Service Provider for assistance.
Depending on your ISP, they might not offer dedicated *dynamic* IP adresses, or as a paid option only. Keep in mind, that a static IP is not necessary.

Example of a non-CGNAT Network:

![image](https://github.com/user-attachments/assets/fee21a50-cbb0-4322-9c26-d9f04f88ae37)

Tags: Server, 10060 10061, CGNAT, Connection Failed, Port Forward, Firewall
