(function () {
  'use strict';

  // Detect depth: are we in pages/ subfolder or at root?
  const isSubpage = location.pathname.includes('/pages/');
  const base = isSubpage ? '../' : '';

  // Current page filename for active-state detection
  const page = location.pathname.split('/').pop() || 'index.html';

  // Link helper: subpages link sideways (pro-skoly.html), root links into pages/ folder
  function p(slug) {
    return isSubpage ? slug + '.html' : 'pages/' + slug + '.html';
  }

  // Nav CTA: use page's own #kontakt if it has one, else go to homepage contact
  const hasKontakt = !!document.getElementById('kontakt');
  const kontaktHref = hasKontakt ? '#kontakt' : base + 'index.html#kontakt';

  // Active-state helpers
  const isHome     = (page === 'index.html' || page === '' || page === '/');
  const isNabidka  = ['pro-skoly.html', 'pro-firmy.html', 'pro-verejnost.html'].includes(page);
  const isOMne     = page === 'o-mne.html';
  const isOSlackline = page === 'o-slackline.html';

  function a(cond) { return cond ? ' class="active" aria-current="page"' : ''; }

  // Shared icon helper (asset path auto-prefixed)
  function icon(file) {
    return `<img src="${base}assets/images/icons/ui/${file}" alt="" class="ui-icon" />`;
  }

  // Shared inline SVGs
  const svgWA = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.524 5.854L.057 23.26a1 1 0 001.223 1.223l5.406-1.467A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.034-1.383l-.36-.213-3.73 1.013 1.013-3.73-.213-.36A9.812 9.812 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/></svg>`;
  const svgIG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`;
  const svgYT = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`;
  const svgNavArrow    = `<svg class="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`;
  const svgMobileArrow = `<svg class="mobile-nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`;

  /* ── NAV HTML ─────────────────────────────────────────── */
  const navHtml = `
<nav class="site-nav" role="navigation" aria-label="Hlavní navigace">
  <div class="container">
    <div class="nav-inner">
      <a href="${base}index.html" class="nav-logo" aria-label="Slackline Hrou – domů">
        <img src="${base}assets/images/icons/HLAVNI LOGO.svg" alt="Slackline Hrou" class="nav-logo-img" width="160" height="48" />
      </a>
      <ul class="nav-links" role="list">
        <li><a href="${base}index.html"${a(isHome)}>Domů</a></li>
        <li class="nav-item has-dropdown">
          <button class="nav-dropdown-trigger${isNabidka ? ' active' : ''}" aria-haspopup="true" aria-expanded="false">
            Nabídka
            ${svgNavArrow}
          </button>
          <div class="nav-dropdown" role="menu">
            <a href="${p('pro-skoly')}" class="nav-dropdown-item${page === 'pro-skoly.html' ? ' active' : ''}" role="menuitem">
              <div class="nav-dropdown-icon">${icon('graduation-cap_3074058.svg')}</div>
              <div><span class="nav-dropdown-title">Pro školy</span><span class="nav-dropdown-desc">Workshopy, sportovní dny, tábory</span></div>
            </a>
            <a href="${p('pro-firmy')}" class="nav-dropdown-item${page === 'pro-firmy.html' ? ' active' : ''}" role="menuitem">
              <div class="nav-dropdown-icon">${icon('deal_1154596.svg')}</div>
              <div><span class="nav-dropdown-title">Pro firmy</span><span class="nav-dropdown-desc">Teambuildingy a firemní akce</span></div>
            </a>
            <a href="${p('pro-verejnost')}" class="nav-dropdown-item${page === 'pro-verejnost.html' ? ' active' : ''}" role="menuitem">
              <div class="nav-dropdown-icon">${icon('teamwork_538891.svg')}</div>
              <div><span class="nav-dropdown-title">Pro veřejnost</span><span class="nav-dropdown-desc">Festivaly a dny měst</span></div>
            </a>
          </div>
        </li>
        <li><a href="${p('o-mne')}"${a(isOMne)}>O mně</a></li>
        <li><a href="${p('o-slackline')}"${a(isOSlackline)}>O slackline</a></li>
      </ul>
      <div class="nav-cta">
        <a href="${kontaktHref}" class="btn btn-primary">Poptat program</a>
      </div>
      <div class="nav-social" aria-label="Sociální sítě">
        <a href="https://wa.me/420776665913" aria-label="WhatsApp" title="WhatsApp" target="_blank" rel="noopener noreferrer">${svgWA}</a>
        <a href="https://www.instagram.com/slacklinehrou/" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">${svgIG}</a>
        <a href="https://www.youtube.com/@Slacklinehrou" aria-label="YouTube" title="YouTube" target="_blank" rel="noopener noreferrer">${svgYT}</a>
      </div>
      <button class="nav-hamburger" aria-label="Otevřít menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- Mobilní menu -->
<div class="nav-mobile" role="dialog" aria-label="Mobilní navigace">
  <a href="${base}index.html"${isHome ? ' aria-current="page"' : ''}><span class="mobile-nav-icon">${icon('home_house.svg')}</span> Domů</a>
  <div class="mobile-nav-group">
    <button class="mobile-nav-group-trigger" aria-expanded="false">
      <span class="mobile-nav-group-trigger-label"><span class="mobile-nav-icon">${icon('target_5957094.svg')}</span> Nabídka</span>
      ${svgMobileArrow}
    </button>
    <div class="mobile-nav-sub">
      <a href="${p('pro-skoly')}"><span class="mobile-nav-sub-icon">${icon('graduation-cap_3074058.svg')}</span> Pro školy</a>
      <a href="${p('pro-firmy')}"><span class="mobile-nav-sub-icon">${icon('deal_1154596.svg')}</span> Pro firmy</a>
      <a href="${p('pro-verejnost')}"><span class="mobile-nav-sub-icon">${icon('teamwork_538891.svg')}</span> Pro veřejnost</a>
    </div>
  </div>
  <div class="mobile-nav-divider"></div>
  <a href="${p('o-mne')}"><span class="mobile-nav-icon">${icon('user_1946429.svg')}</span> O mně</a>
  <a href="${p('o-slackline')}"><span class="mobile-nav-icon">${icon('rope_2121227.svg')}</span> O slackline</a>
  <div class="mobile-social">
    <a href="https://wa.me/420776665913" aria-label="WhatsApp" title="WhatsApp" target="_blank" rel="noopener noreferrer">${svgWA}</a>
    <a href="https://www.instagram.com/slacklinehrou/" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">${svgIG}</a>
    <a href="https://www.youtube.com/@Slacklinehrou" aria-label="YouTube" title="YouTube" target="_blank" rel="noopener noreferrer">${svgYT}</a>
  </div>
</div>`.trim();

  /* ── FOOTER HTML ──────────────────────────────────────── */
  const footerHtml = `
<footer class="site-footer" aria-label="Zápatí stránky">
  <div class="container">
    <div class="footer-inner">

      <div class="footer-brand">
        <img src="${base}assets/images/icons/SVG_Logo textové.svg" alt="Slackline Hrou" loading="lazy" style="max-width:260px;width:100%;height:auto;margin-bottom:var(--space-4);" width="160" height="48" />
        <p class="footer-brand-desc">Přivážíme slackline, giboardy a pohybové hry na školy, firmy, festivaly a veřejné akce. Rovnováha, která baví.</p>
        <div class="footer-social" aria-label="Sociální sítě">
          <a href="https://wa.me/420776665913" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">${svgWA}</a>
          <a href="https://www.instagram.com/slacklinehrou/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">${svgIG}</a>
          <a href="https://www.youtube.com/@Slacklinehrou" aria-label="YouTube" target="_blank" rel="noopener noreferrer">${svgYT}</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Nabídka</h4>
        <ul>
          <li><a href="${p('pro-skoly')}">Pro školy</a></li>
          <li><a href="${p('pro-firmy')}">Pro firmy</a></li>
          <li><a href="${p('pro-verejnost')}">Pro veřejnost</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>O nás</h4>
        <ul>
          <li><a href="${p('o-mne')}">Kdo jsme</a></li>
          <li><a href="${p('o-slackline')}">Co je slackline</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Kontakt</h4>
        <ul>
          <li><a href="tel:+420776665913" class="contact-item">+420 776 665 913</a></li>
          <li><a href="mailto:info@slacklinehrou.cz" class="contact-item">info@slacklinehrou.cz</a></li>
          <li><span class="contact-item">Působíme po celé ČR</span></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <span>© <span id="footer-year"></span> Slackline Hrou. Všechna práva vyhrazena.</span>
      <a href="${p('ochrana-osobnich-udaju')}" class="footer-bottom-link">Ochrana osobních údajů</a>
    </div>
  </div>
</footer>`.trim();

  /* ── INJECT ───────────────────────────────────────────── */
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.outerHTML = navHtml;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = footerHtml;
})();
