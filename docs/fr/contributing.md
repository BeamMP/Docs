# Contribuer à la documentation de BeamMP

BeamMP utilise [Material for MkDocs](https://squidfunk.github.io/mkdocs-material) pour son thème. C'est un thème pour [MkDocs](https://www.mkdocs.org). Les documentations peuvent être retrouvées sur leurs site web respectifs.

## Pour commencer

Vous pouvez utiliser une des deux méthodes ci-dessous pour contribuer à la documentation:

### 1. Modifiez directement les fichiers markdown

Modifier directement les fichiers markdown est la façon la plus rapide pour les petites modifications tel que les erreurs de frappes, erreurs de grammaires ou les petits ajouts de contenus. Cette approche nécessite une compréhension des fichiers markdown puisque vous devez comprendre les changement que vos modifications vont produire.

Si vous décider d'utiliser cette méthode, veuillez suivre ces étapes:

1. Cliquez sur edit sur la page que vous souhaitez modifier.
2. Faites une fork du projet et intégrez le à votre propre compte GitHub.
3. Faites les modifications que vous pensez nécessaires.
4. Vérifiez les modifications que votre fork apporte.
5. Faite une requête de pour intégrer vos changement à notre répertoire [ici](https://github.com/BeamMP/Docs).

Une fois que vous avez fait votre demande d'intégration, une personne de l'équipe de modération de BeamMP va réviser vos modifications et va, soit approuver les changements, soit demander de faire des modifications nécessaires. Si des modifications ont été demandées et que vous les avez effectuées nous allons réévaluer votre requête d'intégration. Les modifications que vous avez apporter seront ensuite appliquées automatiquement due à notre intégration continue.

### 2. Faire des modifications avec un aperçu en direct

Modifier notre documentation de cette façon ressemble à l'option 1, cependant, vous allez pouvoir apercevoir vos changements en direct.

1. Cliquez sur edit sur la page que vous souhaitez modifier.
2. Faites une fork du projet et intégrez le à votre propre compte GitHub.
3. Faite une copie local du projet.
4. Configurez: «Material for MkDocs» en suivant leur guide [ici](https://squidfunk.github.io/mkdocs-material/getting-started/)
5. Exécutez `mkdocs serve` pour démarrer le serveur de documentation de rechargement en direct à partir duquel vous avez cloné le fork.
6. Faites les modifications que vous pensez nécessaires.
7. Vérifiez les modifications que votre fork apporte.
8. Faite une requête de pour intégrer vos changement à notre répertoire  [here](https://github.com/BeamMP/Docs).

## Présentation du projet

```
mkdocs.yml    # The configuration file.
docs/
    index.md  # The documentation homepage.
    ...       # Other markdown pages, images and other files.
```
