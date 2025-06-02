# How can I find the IP of my Server?

## For VPS Hosted Servers
If you are hosting a server with one of our partnered hosting services, the IP will be posted on the respective Server Management Interface.
You can also find the IP for your Server(s) on the [Keymaster](https://keymaster.beammp.com/login) Website.

## For Home-Hosted Servers
For Servers hosted at home, open [whatsmyip.org](https://whatsmyip.org) in a Browser.
This will output the public IPv4 address you are being contacted with from the Internet.

Note, that 127.0.0.1 is the localhost address and can only be used by yourself, if the Server is hosted on the same Computer.
If you are still having connection troubles with your home hosted server, check the [port forwardings](https://docs.beammp.com/server/port-forwarding/) as well as CheckBeamMP

<form action="https://check.beammp.com/api/v2/beammp/" method="get" target="_blank">
  <label for="ip">IP adress:</label>
  <input type="text" id="ip" name="ip"><br>
  <label for="port">Port:</label>
  <input type="text" id="port" name="port"><br>
  <input type="submit" value="CheckBeamMP">
</form>

## How to check for CGNAT?
Have a look at [this page](https://docs.beammp.com/FAQ/How-to-check-for-CGNAT/) to determine wether you can host a server at home or not.


Tags: IP, Server, Connection Failed, 10060/10061
