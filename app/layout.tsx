import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ccbaixmontseny.cat"),
  title: {
    default: "Colla Castellera del Baix Montseny (CCBM) — Sant Celoni",
    template: "%s — CCBM",
  },
  description:
    "Colla Castellera del Baix Montseny (CCBM) — castellers de Sant Celoni i el Vallès Oriental. Vine als nostres assajos, consulta l'agenda de diades o contracta'ns per al teu acte.",
  keywords: [
    "colla castellera",
    "Baix Montseny",
    "CCBM",
    "Sant Celoni",
    "castells",
    "castellers",
    "Vallès Oriental",
  ],
  icons: { icon: "/logo-ccbm/logo-ccbm.svg" },
  openGraph: {
    type: "website",
    url: "https://ccbaixmontseny.cat/",
    locale: "ca_ES",
    siteName: "CCBM — Colla Castellera del Baix Montseny",
    images: ["/img/4d6-palau.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <Script id="ccbm-strapi-url" strategy="beforeInteractive">
          {`window.CCBM_STRAPI_URL = ${JSON.stringify(process.env.NEXT_PUBLIC_STRAPI_URL)};`}
        </Script>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        )}
      </head>
      <body>
        {/* TOP APP BAR */}
        <header className="top-bar" id="top-bar">
          <div className="top-bar__inner container">
            <a href="/" className="top-bar__brand">
              <img src="/logo-ccbm/logo-ccbm.svg" alt="Logo CCBM" className="top-bar__logo-img" />
              <span className="top-bar__title">CCBM</span>
            </a>
            <nav className="top-bar__nav" id="main-nav" aria-label="Navegació principal">
              <a href="/#diades" className="nav-link">Diades</a>
              <a href="/#nosaltres" className="nav-link">Nosaltres</a>
              <a href="/#equip" className="nav-link">Equip</a>
              <a href="/#contractacions" className="nav-link">Contractacions</a>
              <a href="/#contacte" className="nav-link">Contacte</a>
            </nav>
            <button className="nav-toggle" id="nav-toggle" aria-label="Obrir menú" aria-expanded="false" aria-controls="mobile-drawer">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>

        {/* MOBILE DRAWER */}
        <div className="drawer-backdrop" id="drawer-backdrop"></div>
        <nav className="mobile-drawer" id="mobile-drawer" aria-label="Menú mòbil">
          <div className="mobile-drawer__header">
            <img src="/logo-ccbm/logo-ccbm.svg" alt="Logo CCBM" className="top-bar__logo-img" />
            <span className="top-bar__title" style={{ color: "var(--md-primary)" }}>CCBM</span>
            <button className="drawer-close" id="drawer-close" aria-label="Tancar menú">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <a href="/#diades" className="mobile-drawer__link">
            <span className="material-symbols-outlined">calendar_month</span>Diades
          </a>
          <a href="/#nosaltres" className="mobile-drawer__link">
            <span className="material-symbols-outlined">groups</span>Nosaltres
          </a>
          <a href="/#equip" className="mobile-drawer__link">
            <span className="material-symbols-outlined">account_tree</span>Equip
          </a>
          <a href="/#contractacions" className="mobile-drawer__link">
            <span className="material-symbols-outlined">request_quote</span>Contractacions
          </a>
          <a href="/#contacte" className="mobile-drawer__link">
            <span className="material-symbols-outlined">mail</span>Contacte
          </a>
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <div className="footer__grid">
              <div className="footer__brand">
                <img src="/logo-ccbm/logo-ccbm.svg" alt="Logo CCBM" className="footer__logo-img" />
                <span className="footer__name">CCBM</span>
                <p className="footer__tagline">Castellers de Sant Celoni<br />i el Baix Montseny.</p>
                <div className="footer__social">
                  <a href="https://www.instagram.com/ccbaixmontseny" target="_blank" rel="noopener" className="footer__social-link" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                </div>
              </div>
              <div className="footer__nav">
                <h3 className="footer__heading">Navegació</h3>
                <a href="/#nosaltres" className="footer__link">Nosaltres</a>
                <a href="/#contacte" className="footer__link">Contacte</a>
              </div>
              <div className="footer__nav">
                <h3 className="footer__heading">La colla</h3>
                <a href="/#nosaltres" className="footer__link">Història</a>
                <a href="/#nosaltres" className="footer__link">Valors</a>
                <a href="/#contacte" className="footer__link">Uneix-te</a>
                <a href="/#contractacions" className="footer__link">Contractacions</a>
              </div>
            </div>
            <div className="footer__bottom">
              <p>&copy; 2026 CCBM — Colla Castellera. Tots els drets reservats.</p>
              <a href="/legal" className="footer__link" style={{ color: "rgba(255,255,255,.45)", fontSize: ".8125rem" }}>Avís legal i privacitat</a>
            </div>
          </div>
        </footer>

        <Script src="https://d3js.org/d3.v7.min.js" strategy="beforeInteractive" />
        <Script src="/js/historia.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
