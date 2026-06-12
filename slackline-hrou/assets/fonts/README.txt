FONTY
=====
Složka pro lokální hostování fontů (alternativa k CDN).

PRIMÁRNÍ FONT (nadpisy): Chaloops
  Zdroj: Adobe Fonts (vyžaduje předplatné Adobe CC)
  Použití přes CDN: <link rel="stylesheet" href="https://use.typekit.net/VÁŠ_KIT.css">
  CSS: font-family: 'chaloops', cursive;

  Pokud chcete hostovat lokálně (např. kvůli GDPR nebo výkonu):
    1. Stáhněte font přes Adobe Fonts desktop app
    2. Vložte soubory sem: chaloops.woff2, chaloops.woff
    3. V variables.css přidejte @font-face:

    @font-face {
      font-family: 'chaloops';
      src: url('../fonts/chaloops.woff2') format('woff2'),
           url('../fonts/chaloops.woff') format('woff');
      font-weight: 400 800;
      font-display: swap;
    }

SEKUNDÁRNÍ FONT (body text): Nunito
  Zdroj: Google Fonts (zdarma)
  CDN: https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800
  Lokálně: stáhněte z fonts.google.com → Nunito → Download family
    Soubory: Nunito-Regular.woff2, Nunito-SemiBold.woff2, Nunito-Bold.woff2, Nunito-ExtraBold.woff2

FALLBACK (pokud Chaloops není dostupný):
  Baloo 2 (Google Fonts) – automaticky načtena v HTML jako fallback
  CSS: font-family: 'chaloops', 'Baloo 2', cursive;
