# Pegasus Novus — Vocabulaire (latin → pont français → néerlandais)

Petite appli de flashcards pour réviser le vocabulaire latin → néerlandais,
en utilisant le **français comme pont mnémotechnique** (cognats).

## Ouvrir
Double-clique simplement sur **`index.html`** — ça s'ouvre dans le navigateur,
marche hors-ligne et sur téléphone. (Aucune installation.)

## Comment ça marche
- **Réviser** : révélation en 3 temps — mot latin → indice (cognat français) → réponse néerlandaise.
  - Sens de révision réglable (latin→NL, NL→latin, français→NL…)
  - Ordre : priorité aux non-maîtrisés / aléatoire / par chapitre / alphabétique
  - Filtres par chapitre (caput) et par catégorie
  - Auto-évaluation (système de boîtes : 5 bonnes réponses = mot acquis)
  - Raccourcis : `Espace` révéler · `1` je savais · `2` pas sûr · `←`/`→` naviguer
- **Quiz** (style Kahoot) : QCM à 4 cases colorées, chrono, points selon la rapidité,
  bonus de série 🔥, médaille + record en fin de partie. Touches `1`–`4` pour répondre.
- **Liste & tri** : tableau complet, triable par colonne, recherche, export CSV.

Les progrès sont stockés dans le navigateur (localStorage).

## Ajouter / modifier des mots
Tout est dans **`vocab.js`**. Une ligne = un mot. Format :

```js
{ n: 637, caput: 8, sectie: "8.3", la: "rēs", gen: "reī, v.", type: "subst",
  nl: "de zaak", fr: "la chose; l'affaire", pont: "réel, réalité, république" }
```

- `n` = numéro du mot dans le manuel · `sectie` = pensum (filtre principal)
- `la` + `gen` = le mot latin et sa 2e forme (génitif / 1re pers. / formes adj.)
- `nl` = traduction du manuel (la réponse à retenir) — **prioritaire**
- `fr` + `pont` = le pont français (cognats qui aident à mémoriser)
- `type` : subst · ww (verbe) · adj · adv · voorz · vnw · vw · telw · naam · uitdr

## État
Chargé : **n° 514 → 688** (Caput 6, 7 et 8 — 14 pensums), **156 mots**.
Retirés à la demande : n° 624–628 et 636–649.

Les filtres (pensums + catégories) se réinitialisent automatiquement sur « tout »
si de nouvelles données sont ajoutées à `vocab.js`.
