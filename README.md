# Site de tutorat — Zakary Gaillard-Duchassin

Site d'une page, bilingue (français par défaut, anglais avec le bouton FR/EN ou le lien `?lang=en`).
HTML + CSS + JavaScript simples, sans framework ni étape de compilation : GitHub Pages sert les fichiers tels quels.

```
index.html        Contenu (texte FRANÇAIS) et structure
styles.css        Mise en page et couleurs (variables en haut du fichier)
script.js         Prix, texte ANGLAIS, bouton de langue, formulaire, calendrier
assets/           Photo, favicon, image d'aperçu pour Facebook
```

**Voir le site sur votre ordinateur :**

```bash
cd tutoringWebSite
python3 -m http.server 8000
# puis ouvrir http://localhost:8000 (ou http://localhost:8000/?lang=en)
```

---

## 1. Cal.com : la réservation de la rencontre gratuite

Cal.com est un outil de prise de rendez-vous gratuit (comme Calendly). Les visiteurs choisissent un créneau libre directement sur le site ; Cal.com bloque le moment dans votre agenda, crée le lien vidéo et envoie les confirmations et rappels.

1. Créez un compte gratuit sur <https://cal.com/signup> et choisissez votre nom d'utilisateur (ex. : `zgaillard`).
2. **Connectez votre agenda** : *Settings → Calendars → Add calendar* (Outlook ou Google). Ainsi, Cal.com ne proposera jamais un moment où vous êtes déjà occupé.
3. **Vidéo** : *Apps* → installez Google Meet ou Zoom (ou gardez *Cal Video*, intégré et gratuit).
4. **Disponibilités** : *Availability* → indiquez vos heures, fuseau horaire *America/Toronto*.
5. **Type d'événement** : *Event Types → New*
   - Titre : `Rencontre gratuite 15 min` ; lien (slug) : `rencontre-15min` ; durée : 15 minutes.
   - *Location* : Google Meet, Zoom ou Cal Video.
   - Onglet *Limits* : *Before event* / *After event* (tampon, ex. 10 min), *Minimum notice* (ex. 12 h), *Limit booking frequency* (ex. 3 par jour).
   - Onglet *Advanced* : ajoutez une question « Niveau et matière » si vous voulez.
   - Langue : la page de réservation s'affiche dans la langue du navigateur du visiteur. Vous pouvez aussi la forcer dans *Settings → General → Language*.
6. Votre lien ressemble à : `https://cal.com/zgaillard/rencontre-15min`.
7. **Collez-le dans le site** : dans `index.html`, remplacez **partout** `YOUR-USERNAME/rencontre-15min` par votre lien (sans `https://cal.com/`), par exemple `zgaillard/rencontre-15min`. Il y a 3 occurrences :
   - `data-cal-link="..."` (le calendrier intégré) ;
   - 2 liens `https://cal.com/...` (liens de secours si le calendrier ne s'affiche pas).

Tant que `YOUR-USERNAME` est présent, le site affiche « Le calendrier de réservation sera bientôt disponible » et invite à utiliser le formulaire.

## 2. Formspree : le formulaire de contact

1. Créez un compte gratuit sur <https://formspree.io/register> avec l'adresse où vous voulez recevoir les messages.
2. **Vérifiez votre courriel** (cliquez le lien reçu).
3. *New form* → nom : `Site tutorat`. Formspree vous donne une adresse du type `https://formspree.io/f/abcdwxyz`.
4. Dans `index.html`, remplacez `YOUR_FORM_ID` par l'identifiant (ex. : `abcdwxyz`) :
   ```html
   <form ... action="https://formspree.io/f/abcdwxyz" ...>
   ```
5. Dans les réglages du formulaire Formspree, ajoutez votre URL GitHub Pages aux domaines autorisés (*Settings → Restrict to domain*), une fois le site en ligne.
6. Envoyez-vous un message de test depuis le site en ligne. Le **premier** envoi peut demander une confirmation dans votre boîte courriel.

Le plan gratuit permet 50 messages par mois. Un champ caché (« honeypot » `_gotcha`) bloque une bonne partie des robots.

## 3. Mettre le site en ligne avec GitHub Pages

Nom de dépôt prévu : `zgaillard-tutorat` → adresse publique : **https://zgaillard.github.io/zgaillard-tutorat/**

```bash
cd tutoringWebSite
git init -b main
git add index.html styles.css script.js assets README.md
git commit -m "Site de tutorat"
gh repo create zgaillard-tutorat --public --source=. --push
```

(Sans l'outil `gh` : créez le dépôt vide sur <https://github.com/new>, puis `git remote add origin https://github.com/ZGaillard/zgaillard-tutorat.git` et `git push -u origin main`.)

Ensuite, sur GitHub : **Settings → Pages → Build and deployment → Source : *Deploy from a branch* → Branch : `main` / `/ (root)` → Save.**
Après 1 à 2 minutes, l'adresse publique s'affiche en haut de cette page.

> Le fichier `tutoring_website_prompt.md` ne fait pas partie du site : ne l'ajoutez pas au dépôt (sinon il sera public).

**Aperçu Facebook :** après la mise en ligne, collez l'adresse dans <https://developers.facebook.com/tools/debug/> et cliquez *Scrape Again* pour que Facebook charge l'image d'aperçu.

## 4. (Optionnel) Nom de domaine personnalisé

1. Achetez un domaine (ex. chez Namecheap, Porkbun, Cloudflare : environ 15 $/an).
2. GitHub : *Settings → Pages → Custom domain* → entrez le domaine → *Save*, puis cochez *Enforce HTTPS* quand c'est possible.
3. Chez le registraire, ajoutez les enregistrements DNS indiqués par GitHub (4 enregistrements `A` vers `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`, et un `CNAME` `www` → `zgaillard.github.io`).
4. Dans `index.html`, remplacez `https://zgaillard.github.io/zgaillard-tutorat/` par le nouveau domaine (balises `canonical`, `hreflang`, `og:url`, `og:image`, `twitter:image`).

## 5. Modifier les prix et les textes

| Je veux changer… | Où |
|---|---|
| **Un prix** | `script.js`, l'objet `PRICES` tout en haut. Le format (« 100 $ » en français, « $100 » en anglais) est automatique. |
| **Un texte en français** | `index.html` : cherchez la phrase et modifiez-la directement. |
| **Un texte en anglais** | `script.js`, l'objet `EN` : la clé est la même que l'attribut `data-i18n="..."` de l'élément dans `index.html`. |
| La photo | Mettez votre photo dans `assets/photo.jpg` (portrait 4:5, environ 800 × 1000 px, moins de 200 Ko), puis dans `index.html` remplacez `assets/photo-placeholder.svg` par `assets/photo.jpg`. |
| L'adresse courriel affichée | `index.html`, l'élément `id="email-link"` : attributs `data-user` et `data-domain`. |
| Les couleurs | `styles.css`, les variables `--primary`, `--accent`, etc. en haut (et la section `prefers-color-scheme: dark` pour le mode sombre). |
| Titre et description Google | `index.html` (`<title>`, `meta description`) et `script.js` (`meta.title`, `meta.description` pour l'anglais). |
| Ajouter une question à la FAQ | Copiez un bloc `<details>` dans `index.html`, donnez-lui de nouvelles clés `data-i18n` (ex. `faq.9.q`, `faq.9.a`) et ajoutez ces clés en anglais dans `EN`. |

Note : les montants écrits dans `index.html` ne servent que si JavaScript est désactivé. Ce sont ceux de `PRICES` qui s'affichent normalement.

## 6. Liste de vérification avant de partager le lien

- [ ] `YOUR-USERNAME` et `YOUR_FORM_ID` ont été remplacés (chercher dans `index.html`).
- [ ] La vraie photo est en place.
- [ ] Sur **téléphone** : le menu ☰ s'ouvre et se ferme, le bouton « Réserver » en bas apparaît en défilant, rien ne déborde sur le côté.
- [ ] Bouton **FR / EN** : tout le texte change, y compris les prix (« 100 $ » ↔ « $100 ») ; le choix est conservé en rechargeant la page.
- [ ] Le lien `https://zgaillard.github.io/zgaillard-tutorat/?lang=en` ouvre le site en anglais.
- [ ] **Réservation** : le calendrier s'affiche ; faites une vraie réservation test et vérifiez l'invitation dans votre agenda, puis annulez-la.
- [ ] **Formulaire** : envoyer vide affiche les erreurs ; un vrai envoi affiche « Merci ! » et le message arrive dans votre boîte courriel.
- [ ] Les liens du menu mènent aux bonnes sections.
- [ ] Mode sombre (réglage du téléphone) : tout reste lisible.
- [ ] L'aperçu Facebook (outil de débogage ci-dessus) montre la bonne image et le bon titre.
