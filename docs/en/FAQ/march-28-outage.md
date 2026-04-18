# March 28, 2026 BeamMP Outage FAQ

Temporary FAQ for the (currently) ongoing BeamMP outage that started on March 28th, 2026.

**Last updated April 1st, 2026.**

=== Help! My BeamMP launcher doesn't work!
	Try reinstalling the BeamMP launcher. To do so, follow the instructions below:
	1. Go to [beammp.com](https://beammp.com/)
	2. Click *Download Now*
	3. Run the installer and follow instructions

	!!! note

		As of April 1st, 2026, the MSI installer is an "unrecognized app" according to Windows Defender SmartScreen.
		
		To bypass this warning, click *More info*, then click *Run anyway*.

=== Help! My authkey(s) don't work anymore!
	As of April 1st, 2026, keymaster and auth systems are offline. This means that your authkeys won't work. To get around this, follow the instructions below:
	1. Open your `ServerConfig.toml`, or wherever your server config is modified
	2. Set `Private` to `true`. It should look like this: `Private = true`
	3. This should fix the authkey issue.

	!!! note

		As of April 1st, 2026, BeamMP's auth systems are offline. Only guest accounts are available.
		
		Make sure your server allows guests.
	
