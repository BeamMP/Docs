!!! warning "Ce site est en cours de construction !"

```
Ce site est actuellement en cours de développement.

Vous pensez pouvoir contribuer ? N'hésitez pas à le faire en cliquant sur l'icône en forme de crayon située à droite de la page !

Vous pouvez également proposer des modifications sur n'importe quelle page.
```

# Extraits de code ImGui pour BeamNG.drive

## Configuration

### Configurer ImGui

```lua
local im = ui_imgui
```

### Configurer la fenêtre

```lua
im.SetNextWindowSize(im.ImVec2(366, 100), im.Cond_FirstUseEver)
```

### Créer une fenêtre

```lua
im.Begin("Window Title") -- Crée la fenêtre
im.End()
```

## Général

=== "Formatage de base"

```lua
im.Text("")
im.TextWrapped("") -- Retour automatique à la ligne
im.TextColored(im.ImVec4(0,1,0,1), "") -- R,V,B,A
im.TextDisabled("") -- Style prédéfini pour le texte désactivé

im.LabelText("", "")
im.BulletText("") -- Texte avec une puce
im.SeparatorText("") -- Séparateur avec texte centré

im.Separator() -- Il peut être utile d'ajouter une nouvelle ligne avant
im.SameLine() -- Place l'élément suivant horizontalement à côté du précédent
im.NewLine()

im.Spacing() -- Petit espacement
im.Indent() -- Augmente l'indentation
im.Unindent() -- Réduit l'indentation
```

=== "Champs de saisie"

```lua
im.Button("", im.ImVec2(0,0)) -- 0 = s'adapte au contenu
im.SmallButton("") -- S'adapte au contenu avec un espacement légèrement réduit
im.ArrowButton("", 0) -- arg 1 : la chaîne n'est apparemment pas utilisée
                      -- arg 2 : 0 = gauche, 1 = droite, 2 = haut, 3 = bas

im.InvisibleButton("", im.ImVec2(0,0), ...)
-- Utilisé notamment pour positionner le curseur ImGui

im.Checkbox("", im.BoolPtr(false))

im.RadioButton1("", im.BoolPtr(false))
im.RadioButton2("", im.IntPtr(), 0)
-- arg 3 : 0 ou 1 pour désactivé ou activé
```

=== "Autres"

```lua
im.Bullet()

im.ProgressBar(
  0.5,
  im.ImVec2(0,0),
  ""
)
-- arg 2 : 0 pour utiliser la largeur et/ou hauteur par défaut

im.TextUnformatted("", "")
-- Le deuxième argument semble provoquer un crash du jeu
```
