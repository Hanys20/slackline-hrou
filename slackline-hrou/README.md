# Slackline Hrou – Web projekt

Kompletní responzivní web pro značku Slackline Hrou.
Cíl: sběr poptávek, prezentace programů pro školy, firmy a veřejnost.

---

## 📁 Struktura projektu

```
slackline-hrou/
│
├── index.html                  ← Homepage (hotová kostra)
│
├── pages/
│   ├── pro-skoly.html          ← Nabídka – Pro školy
│   ├── pro-firmy.html          ← Nabídka – Pro firmy
│   ├── pro-verejnost.html      ← Nabídka – Pro veřejnost
│   ├── o-mne.html              ← O mně / Kdo stojí za Slackline Hrou
│   ├── o-slackline.html        ← Co je slackline
│   └── kontakt.html            ← Kontakt
│
├── assets/
│   ├── css/
│   │   ├── variables.css       ← CSS proměnné, barvy, fonty, spacing, reset
│   │   ├── nav.css             ← Navigace (desktop + hamburger mobil)
│   │   ├── homepage.css        ← Styly pro homepage
│   │   └── subpages.css        ← Styly pro podstránky (hero, FAQ, steps...)
│   │
│   ├── js/
│   │   └── main.js             ← Navigace, FAQ accordion, counter, carousel, scroll
│   │
│   ├── images/
│   │   ├── hero/               ← Fotky pro hero sekce
│   │   ├── gallery/            ← Fotogalerie akcí
│   │   ├── team/               ← Fotky týmu / zakladatelky
│   │   ├── logos/              ← Loga partnerů, škol, firem
│   │   └── icons/              ← Ikony, ilustrace, lenochod SVG/PNG
│   │
│   └── fonts/                  ← Lokální fonty (pokud nepoužíváte Adobe Fonts CDN)
│
└── README.md                   ← Tento soubor
```

---

## 🎨 Font: Chaloops (Adobe Fonts)

Font **Chaloops** je dostupný přes Adobe Fonts (vyžaduje předplatné Adobe CC).

### Jak zapojit:
1. Přihlaste se na [fonts.adobe.com](https://fonts.adobe.com)
2. Najděte „Chaloops" a přidejte do Web Project
3. Zkopírujte vygenerovaný `<link>` tag (formát: `https://use.typekit.net/XXXXXXX.css`)
4. V každém HTML souboru nahraďte placeholder:
   ```html
   <!-- PLACEHOLDER: nahraďte src za váš Adobe Fonts kit -->
   <!-- <link rel="stylesheet" href="https://use.typekit.net/VASE_KIT_ID.css"> -->
   ```
   za skutečný kit ID:
   ```html
   <link rel="stylesheet" href="https://use.typekit.net/váš_kit_id.css">
   ```
5. V `variables.css` je font již nastaven:
   ```css
   --font-display: 'chaloops', 'Baloo 2', cursive;
   ```
   Pokud Chaloops není dostupný, fallback je **Baloo 2** z Google Fonts (načítá se automaticky).

---

## 🎨 Barevná paleta

| Proměnná | Hodnota | Použití |
|---|---|---|
| `--color-cream` | `#FAF7F0` | Hlavní pozadí |
| `--color-beige` | `#EFE8D8` | Sekundární pozadí, karty |
| `--color-green` | `#4A7C3F` | Hlavní zelená, CTA tlačítka |
| `--color-green-light` | `#6FAE5F` | Světlejší zelená |
| `--color-green-pale` | `#EDF4E8` | Pozadí boxů, ikon |
| `--color-brown` | `#4A2012` | Nadpisy (tmavě hnědá) |
| `--color-brown-mid` | `#7B4A2D` | Detaily, střední hnědá |
| `--color-white` | `#FFFFFF` | Karty, formuláře |

---

## 🖼 Obrázky – placeholder systém

Všechny obrázky jsou označeny komentáři `<!-- PLACEHOLDER -->`.
Nahraďte je skutečnými fotkami nebo SVG ilustracemi:

```html
<!-- PLACEHOLDER: nahraďte src za skutečnou fotku -->
<img src="assets/images/hero/hero-main.jpg" alt="Dívka na slackline v parku" />
```

Doporučené formáty:
- Hero fotky: **WebP**, min. 1200×900 px
- Galerie: **WebP**, 800×600 px
- Loga partnerů: **SVG** nebo **PNG** s průhledným pozadím
- Lenochod maskot: **SVG** (vektorová ilustrace pro ostrost)

---

## 🦥 Lenochod maskot

Web počítá s ilustrací lenochoda v těchto pozicích:
- Hero sekce (balancující na lajně)
- Sekce recenzí (zavěšený na větvi)
- Kontaktní formulář (drží obálku)
- FAQ sekce (leží na laně)
- Různé „plovoucí" pozice na podstránkách

Zatím jsou použity emoji `🦥` jako placeholder.
Nahraďte je SVG/PNG ilustrací: `assets/images/icons/lenochod-*.svg`

---

## ⚙️ JavaScript funkce (`main.js`)

| Funkce | Popis |
|---|---|
| Hamburger menu | Mobilní navigace s animací |
| FAQ accordion | Otevírání/zavírání odpovědí |
| Čítač čísel | Animovaný counter ve stats sekci (data-counter) |
| Scroll animace | IntersectionObserver pro fade-in karet |
| Carousel | Foto karusel s dotykovým ovládáním |
| Smooth scroll | Plynulé scrollování pro anchor linky |

---

## 📱 Responzivita

Breakpointy:
- **Desktop**: 1200px+ (výchozí)
- **Tablet**: 768px–1024px
- **Mobil**: do 768px

---

## 🚀 Další kroky (Claude Code)

1. **Doplnit font** – zapojit Adobe Fonts Chaloops kit
2. **Doplnit obrázky** – nahradit placeholdery skutečnými fotkami
3. **Dostavět podstránky** – pro-skoly, pro-firmy, pro-verejnost, o-mne, o-slackline, kontakt
4. **Formulář** – zapojit backend (Formspree / Netlify Forms / vlastní PHP)
5. **Logo** – vložit SVG logo do navigace a footeru
6. **Lenochod SVG** – doplnit vektorového lenochoda místo emoji
7. **Foto karusel** – doplnit skutečné fotky z akcí
8. **SEO** – meta tagy, Open Graph, schema.org
9. **Analytics** – Google Analytics / Plausible

---

## 📝 Poznámky pro Claude Code

- Všechny CSS proměnné jsou v `variables.css` – měňte jen tam
- Styly podstránek sdílejí `subpages.css` – komponenty jsou znovupoužitelné
- Komentáře `<!-- TODO -->` a `<!-- PLACEHOLDER -->` označují místa k doplnění
- Web je čistý HTML/CSS/JS bez frameworků – snadná integrace do WordPressu/Elementoru

---

*Slackline Hrou © 2025 – Rovnováha, která baví.*
