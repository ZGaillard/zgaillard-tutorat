#!/usr/bin/env node
/* ==========================================================================
   Génère en/index.html (version anglaise statique) à partir de :
     - index.html  (structure + texte français)
     - script.js   (objets EN et PRICES)

   Pourquoi : Facebook, Kijiji, Messenger et Google lisent le HTML sans
   exécuter le JavaScript. Une vraie page anglaise donne le bon aperçu et
   le bon référencement quand on partage le lien anglais.

   Utilisation (depuis le dossier du site) :
     node tools/build-en.js           # écrit en/index.html
     node tools/build-en.js --check   # vérifie seulement qu'il est à jour
   ========================================================================== */
"use strict";

var fs = require("fs");
var path = require("path");

var ROOT = path.join(__dirname, "..");
var SRC = path.join(ROOT, "index.html");
var OUT = path.join(ROOT, "en", "index.html");
var SITE = "https://zgaillard.github.io/zgaillard-tutorat/";

var lib = require(path.join(ROOT, "script.js"));
var EN = lib.EN, PRICES = lib.PRICES;

var html = fs.readFileSync(SRC, "utf8");
var missing = [];

function fail(msg) { console.error("build-en: " + msg); process.exit(1); }
function escAttr(s) { return String(s).replace(/&(?!amp;|lt;|gt;|quot;|#)/g, "&amp;").replace(/"/g, "&quot;"); }
function lookup(key) {
  if (EN[key] == null) { missing.push(key); return null; }
  return EN[key];
}

/* Trouve l'élément dont la balise ouvrante contient la position `at`.
   Renvoie { start, openEnd, innerEnd, end, tag } (indices dans `src`). */
function elementAt(src, at) {
  var start = src.lastIndexOf("<", at);
  var openEnd = src.indexOf(">", at) + 1;
  var tag = /^<([a-zA-Z0-9-]+)/.exec(src.slice(start))[1].toLowerCase();
  var re = new RegExp("<(/?)" + tag + "\\b[^>]*>", "gi");
  re.lastIndex = openEnd;
  var depth = 1, m;
  while ((m = re.exec(src))) {
    depth += m[1] ? -1 : 1;
    if (depth === 0) return { start: start, openEnd: openEnd, innerEnd: m.index, end: re.lastIndex, tag: tag };
  }
  fail("balise <" + tag + "> non fermée près de la position " + at);
}

/* Remplace le contenu de chaque élément portant `attr`, de la fin vers le début
   pour que les positions restent valides. */
function replaceInner(src, attr, valueFor) {
  var re = new RegExp("\\s" + attr + '="([^"]*)"', "g");
  var hits = [], m;
  while ((m = re.exec(src))) hits.push({ at: m.index, key: m[1] });
  for (var i = hits.length - 1; i >= 0; i--) {
    var val = valueFor(hits[i].key);
    if (val == null) continue;
    var el = elementAt(src, hits[i].at);
    src = src.slice(0, el.openEnd) + val + src.slice(el.innerEnd);
  }
  return src;
}

// 1. Textes (data-i18n)
html = replaceInner(html, "data-i18n", lookup);

// 2. Attributs traduits (data-i18n-attr="aria-label:nav.label;alt:...")
html = html.replace(/<[a-zA-Z][^>]*\sdata-i18n-attr="([^"]*)"[^>]*>/g, function (tag, map) {
  map.split(";").forEach(function (pair) {
    var p = pair.trim().split(":");
    if (p.length !== 2) return;
    var val = lookup(p[1]);
    if (val == null) return;
    var re = new RegExp("(\\s" + p[0] + '=")[^"]*(")');
    tag = re.test(tag) ? tag.replace(re, "$1" + escAttr(val) + "$2") : tag.replace(/\s*\/?>$/, ' ' + p[0] + '="' + escAttr(val) + '"$&');
  });
  return tag;
});

// 3. Prix au format anglais ($100)
html = replaceInner(html, "data-price", function (key) {
  var p = key.split(".");
  var v = PRICES[p[0]] && PRICES[p[0]][p[1]];
  if (v == null) fail("prix inconnu : " + key);
  return "$" + v;
});

// 4. En-tête : langue, titre, description, aperçus sociaux
function setMeta(re, value, label) {
  if (!re.test(html)) fail("introuvable dans index.html : " + label);
  html = html.replace(re, function (_, a, b) { return a + escAttr(value) + b; });
}
html = html.replace('<html lang="fr-CA" data-page="home" data-source-lang="fr">',
  "<!-- FICHIER GÉNÉRÉ par tools/build-en.js : ne pas modifier à la main.\n" +
  "     Modifiez index.html (structure) ou script.js (textes anglais), puis lancez : node tools/build-en.js -->\n" +
  '<html lang="en-CA" data-page="home" data-source-lang="en">');
if (html.indexOf('data-source-lang="en"') === -1) fail("balise <html> inattendue dans index.html");

html = html.replace(/<title>[^<]*<\/title>/, "<title>" + EN["meta.title"].replace(/&/g, "&amp;") + "</title>");
setMeta(/(<meta name="description" content=")[^"]*(")/, EN["meta.description"], "meta description");
setMeta(/(<link rel="canonical" href=")[^"]*(")/, SITE + "en/", "canonical");
setMeta(/(<meta property="og:url" content=")[^"]*(")/, SITE + "en/", "og:url");
setMeta(/(<meta property="og:title" content=")[^"]*(")/, EN["meta.ogTitle"], "og:title");
setMeta(/(<meta property="og:description" content=")[^"]*(")/, EN["meta.ogDescription"], "og:description");
setMeta(/(<meta property="og:image:alt" content=")[^"]*(")/, EN["meta.ogImageAlt"], "og:image:alt");
setMeta(/(<meta property="og:locale" content=")[^"]*(")/, "en_CA", "og:locale");
setMeta(/(<meta property="og:locale:alternate" content=")[^"]*(")/, "fr_CA", "og:locale:alternate");
setMeta(/(<meta name="twitter:title" content=")[^"]*(")/, EN["meta.ogTitle"], "twitter:title");
setMeta(/(<meta name="twitter:description" content=")[^"]*(")/, EN["meta.twitterDescription"], "twitter:description");

// Bouton de langue actif (pour les lecteurs d'écran, même sans JavaScript)
html = html.replace(/(data-lang="fr" aria-pressed=")true(")/, "$1false$2")
           .replace(/(data-lang="en" aria-pressed=")false(")/, "$1true$2");

// 5. Chemins relatifs : la page est un dossier plus bas
html = html.replace(/(\s(?:href|src)=")(?![#/]|[a-z]+:)([^"]+")/gi, "$1../$2");

if (missing.length) {
  fail("textes anglais manquants dans script.js (objet EN) :\n  " +
    missing.filter(function (k, i) { return missing.indexOf(k) === i; }).join("\n  "));
}

if (process.argv.indexOf("--check") !== -1) {
  var current = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
  if (current !== html) fail("en/index.html n'est pas à jour. Lancez : node tools/build-en.js");
  console.log("en/index.html est à jour.");
} else {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, html);
  console.log("en/index.html généré.");
}
