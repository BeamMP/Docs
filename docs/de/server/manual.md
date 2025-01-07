# Server Anleitung

# Umgebung

Der Server wird durch den Zustand verschiedener externe Parameter beeinflusst:

- Der "Resources" Ordner
- Die ENV (Prozess Umgebung)
- Die Eingabeaufforderungsargmuente
- Die ServerConfig.toml Datei
- Das Arbeitsverzeichnis

## Ressourcen Ordner

Der Ressourcenordner wird beim Start des Servers zusammen mit den Unterverzeichnissen „Client“ und „Server“ erstellt. Das Unterverzeichnis „Server“ akzeptiert Ordner, die jeweils mindestens eine `.lua` Datei enthalten. Jeder dieser Ordner im Unterverzeichnis „Server“ wird als „Plugin“ bezeichnet. `.lua` Dateien im obersten Verzeichnis eines Plugins werden bei Änderungen neu geladen. Das Unterverzeichnis „Client“ akzeptiert *nur* `.zip` Dateien, die beim Start des Servers geladen werden in der Annahme, dass diese während der Laufzeit nicht verändert werden.

## ENV

### Allgemeine Einstellungen

Ab Server-Release v3.2.0 akzeptiert der BeamMP-Server Umgebungsvariablen, die Einstellungen in ServerConfig.toml **überschreiben**. Alle ServerConfig-Variablen, die in der Kategorie/Sektion „Allgemein“ vorhanden sind, sind in PascalCase geschrieben, die Umgebungsvariablen sind ALL_CAPS und haben das Präfix `BEAMMP_` . Beispielsweise lautet die in ALL_CAPS konvertierte Einstellung `MaxPlayers` `MAX_PLAYERS` (beachten Sie das `_` am Anfang eines neuen Wortes) und wird mit dem Präfix `BEAMMP_MAX_PLAYERS` . Dies ist das Format, das für alle „Allgemeinen“ Einstellungen verwendet wird. Die folgenden ENV-Variablen sind vorhanden:

- `BEAMMP_DEBUG`
- `BEAMMP_PRIVATE`
- `BEAMMP_PORT`
- `BEAMMP_MAX_CARS`
- `BEAMMP_MAX_PLAYERS`
- `BEAMMP_MAP`
- `BEAMMP_NAME`
- `BEAMMP_DESCRIPTION`
- `BEAMMP_TAGS`
- `BEAMMP_RESOURCE_FOLDER`
- `BEAMMP_AUTH_KEY`
- `BEAMMP_LOG_CHAT`

Alle Umgebungsvariablen, die Konfigurationsparametern entsprechen, die Zeichenfolgen oder Zahlen sind, müssen Zeichenfolgen sein, zum Beispiel `BEAMMP_NAME="Cool Server"` , `BEAMMP_NAME=Server1` , `BEAMMP_PORT=12345` . Umgebungsvariablen, die Konfigurationsparametern entsprechen, die Boolesche Werte (true/false, an/aus) sind, müssen entweder `true` oder `1` (beides bedeutet AN) oder ein beliebiger anderer Wert (bedeutet AUS) sein.

### Anbietereinstellungen

Diese Umgebungsvariablen ermöglichen es Hosting-Anbietern (und anderen Benutzern mit einer größeren Anzahl von Servern), hier „Anbieter“ genannt, bestimmte Anbieterspezifische Einstellungen zu überschreiben.

#### `BEAMMP_PROVIDER_PORT_ENV` (seit v3.3.0)

Wenn dies auf eine nicht leere Zeichenfolge gesetzt wird, wird die Variable `BEAMMP_PORT` durch eine andere ersetzt, um die Variable aus einer vorhandenen ENV zu lesen. Beispielsweise könnte Pterodactyl den `SERVER_PORT` als ENV enthüllen. Um es mit einem BeamMP-Server zu verwenden, müsste man `BEAMMP_PORT=${SERVER_PORT}` eingeben, was ein wenig albern ist.

Stattdessen kannst du jetzt `BEAMMP_PROVIDER_PORT_ENV="SERVER_PORT"` verwenden, was den BeamMP-Server dazu veranlasst, den Port aus der ENV-Variable `SERVER_PORT` zu lesen.

#### `BEAMMP_PROVIDER_DISABLE_CONFIG` (seit v3.3.0)

Wenn der Wert auf `1` oder `true` gesetzt ist, wird die `ServerConfig.toml` **nicht generiert** und, falls vorhanden, **nicht gelesen** . Der `BEAMMP_AUTH_KEY` muss gesetzt sein, damit der Server funktioniert.

#### `BEAMMP_PROVIDER_UPDATE_MESSAGE` (seit v3.2.2)

Wenn dies auf eine nicht leere Zeichenfolge gesetzt wird, ersetzt dies die gesamte Update-Mitteilung, die standardmäßig lautet: „NEW VERSION IS OUT! Please update to the new...“ usw. Es ist **ERFORDERLICH** , dass die von dir angegebene Update-Nachricht irgendwo `{}` enthält, die der Server durch die neue Versionsnummer ersetzt. Ihre Update-Mitteilung könnte beispielsweise so aussehen:

```sh
BEAMMP_PROVIDER_UPDATE_MESSAGE="NEW VERSION of the BeamMP-Server has been released: {}! Please follow the update guide here: https://example.com/update-guide"
```

Was in einer Update Meldung wie diese resultiert

```
NEW VERSION of the BeamMP-Server has been released: v5.0.2! Please follow the update guide here: https://example.com/update-guide
```

Bitte mach den User bewusst, dass sie das Update durchführen sollen und erkläre wie man das tut.

## Eingabeaufforderungsargumente

Starte den BeamMP Server mit dem `--help` Argument um mehr zu erfahren. Zum Beispiel: `./BeamMP-Server --help`.

## ServerConfig.toml

Diese Datei wird beim ersten Start generiert. Kommentare in der Datei sind die aktuellsten Informationen um zu verstehen, was jede Einstellung tut.

## Arbeitsverzeichnis

Das Arbeitsverzeichnis vom Server, nicht da wo der ausführbare Server liegt, ist der entscheidende Faktor, wo die ServerConfig.toml, Serverlog Dateien und der Ressourcen Ordner generiert wird.

# Beschränkungen

Die folgenden Beschränkungen werden im BeamMP Backend auf die Server angewendet:

- Der Name ist auf 250 Charaktere limitiert.
- Die Beschreibung ist auf 1000 Charaktere limitiert.
- Die Karte ist auf 100 Charaktere limitiert.
- Tags sind auf 100 Charaktere limitiert.
