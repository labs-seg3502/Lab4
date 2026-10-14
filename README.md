# SEG3502 · Laboratoire 4 · Carnet de coordonnées

Application Angular 20 (composants standalone) avec un **formulaire réactif** et le **routage** entre deux pages :

| Route      | Composant     | Rôle |
|------------|---------------|------|
| `/form`    | `UserForm`    | Saisie du prénom, du nom, du téléphone et de l'email, avec validation |
| `/display` | `UserDisplay` | Tableau des utilisateurs soumis |

Le chemin vide et toute adresse inconnue redirigent vers `/form`.

## Règles de validation

- Prénom et nom de famille : obligatoires.
- Téléphone : facultatif ; s'il est rempli, 10 chiffres, le 1er et le 4e différents de 0 (`phoneValidator`).
- Email : facultatif ; format vérifié avec `Validators.email`.

Un message d'erreur s'affiche sous chaque champ invalide. Un envoi valide mène à la page `/display`.

## Installer et exécuter

Prérequis : Node.js 20.19 ou plus récent, npm et Git.

```bash
git clone https://github.com/labs-seg3502/Lab4.git
cd Lab4
npm install
npx ng serve        # ou : npm start
```

Ouvrir ensuite http://localhost:4200/ dans un navigateur. Arrêter le serveur avec `Ctrl + C`.

## Tests et compilation

```bash
npx ng test --watch=false   # 7 tests (création de l'application + validateur du téléphone)
npx ng build                # version de production dans dist/lab4/
```

## Interface

- `src/styles.css` : couleurs communes (variables CSS), police Barlow, carte blanche partagée, focus clavier.
- `src/app/app.*` : bandeau du haut et onglets de navigation (`routerLinkActive`).
- `src/app/user-form/*` : grille de champs, états valide / invalide, messages d'erreur.
- `src/app/user-display/*` : tableau, cas « aucun utilisateur », affichage en fiches sur téléphone.

La police Barlow est installée avec npm (`@fontsource/barlow`) : l'application s'affiche pareil sans connexion Internet.

## Équipe

- Hjiyej Andaloussi Elghali : logique (formulaire réactif, validateur, service, routes)
- Brayan Adou : interface (HTML, CSS, design), README et rapport
