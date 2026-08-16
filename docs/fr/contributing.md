# Contribuer à la documentation de BeamMP

BeamMP utilise [Material for MkDocs](https://squidfunk.github.io/mkdocs-material) comme thème pour sa documentation. Material for MkDocs est un thème conçu pour [MkDocs](https://www.mkdocs.org). Vous pouvez consulter la documentation officielle de ces deux projets sur leurs sites respectifs.

## Pour commencer

Vous pouvez contribuer à la documentation de deux façons différentes :

### 1. Modifier directement les fichiers Markdown

La modification directe des fichiers Markdown est la méthode la plus rapide pour effectuer de petites corrections, comme des fautes de frappe, des erreurs grammaticales ou de petits ajouts de contenu.

Cette méthode nécessite toutefois une certaine connaissance du format Markdown, car vous devez comprendre l'impact de vos modifications sur la documentation finale.

Si vous choisissez cette méthode, suivez les étapes suivantes :

1. Cliquez sur **Edit** sur la page que vous souhaitez modifier.
2. Faites un **fork** du dépôt et ajoutez-le à votre propre compte GitHub.
3. Effectuez les modifications que vous jugez nécessaires.
4. Vérifiez les modifications apportées par votre fork.
5. Créez une **Pull Request** afin de proposer vos changements au dépôt principal : [BeamMP/Docs sur GitHub](https://github.com/BeamMP/Docs).

Une fois votre Pull Request créée, un membre de l'équipe de modération de BeamMP examinera vos modifications.

Les changements pourront être :

* **acceptés directement** ;
* **modifiés à votre demande** avant d'être acceptés.

Si des modifications supplémentaires sont demandées, vous pourrez les effectuer directement sur votre branche. La Pull Request sera alors réexaminée.

Une fois les changements approuvés et fusionnés, ils seront automatiquement déployés grâce au système d'intégration continue.

### 2. Modifier la documentation avec un aperçu en direct

Cette méthode est similaire à la première, mais elle vous permet de **visualiser vos modifications en temps réel** avant de les proposer.

1. Cliquez sur **Edit** sur la page que vous souhaitez modifier.
2. Faites un **fork** du dépôt et ajoutez-le à votre compte GitHub.
3. Clonez votre fork du projet sur votre ordinateur.
4. Configurez **Material for MkDocs** en suivant le guide officiel : [Guide d'installation de Material for MkDocs](https://squidfunk.github.io/mkdocs-material/getting-started/).
5. Exécutez la commande suivante pour démarrer le serveur de développement avec rechargement automatique :

```bash
mkdocs serve
```

6. Effectuez les modifications que vous souhaitez apporter.
7. Vérifiez le résultat directement dans votre navigateur.
8. Une fois satisfait, créez une **Pull Request** vers le dépôt principal : [BeamMP/Docs sur GitHub](https://github.com/BeamMP/Docs).

Cette méthode est particulièrement recommandée pour les modifications importantes ou lorsqu'une page contient beaucoup de formatage Markdown, de code ou de composants Material for MkDocs.

## Structure du projet

L'organisation générale du projet est la suivante :

```text
mkdocs.yml    # Fichier de configuration de MkDocs.
docs/
    index.md  # Page d'accueil de la documentation.
    ...       # Autres pages Markdown, images et fichiers.
```
