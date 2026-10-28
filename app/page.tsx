export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "SportsOrganization"],
            name: "Colla Castellera del Baix Montseny",
            alternateName: [
              "CCBM",
              "Castellers del Baix Montseny",
              "Castellers de Sant Celoni",
              "Castellers Baix Montseny",
              "Colles Castelleres Baix Montseny",
              "Colla Castellera CCBM",
            ],
            url: "https://ccbaixmontseny.cat",
            logo: "https://ccbaixmontseny.cat/logo-ccbm/logo-ccbm.svg",
            image: "https://ccbaixmontseny.cat/img/4d6-palau.jpeg",
            description:
              "Colla castellera de Sant Celoni i la comarca del Baix Montseny (Vallès Oriental, Catalunya). Fem castells, actuem a diades i obrim les portes a nous castellers. Contacta'ns per contractar una actuació.",
            email: "secretaria@ccbaixmontseny.cat",
            sameAs: ["https://www.instagram.com/ccbaixmontseny", "https://ccbaixmontseny.cat"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "C/Montserrat, 28",
              addressLocality: "Sant Celoni",
              postalCode: "08470",
              addressRegion: "Vallès Oriental",
              addressCountry: "ES",
            },
          }),
        }}
      />

      <main>
        {/* 1. HERO */}
        <section id="hero" className="hero">
          <video className="hero__bg hero__video" autoPlay muted loop playsInline>
            <source src="/img/tritoners.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay"></div>
          <div className="container hero__container">
            <div className="hero__inner">
              <div className="hero__text">
                <p className="hero__eyebrow">Benvinguts a la</p>
                <h1 className="hero__title">Colla Castellera<br /><em>del Baix Montseny</em></h1>
                <p className="hero__subtitle">Tradició, esforç i passió. Construïm castells junts<br />des de Sant Celoni i el Vallès Oriental.</p>
                <div className="hero__actions">
                  <a href="/contacte" className="btn btn--filled">Uneix-te</a>
                  <a href="/agenda" className="btn btn--outlined-light">Agenda</a>
                </div>
              </div>
              <aside className="widget widget--newsletter" aria-label="Newsletter">
                <div className="widget__newsletter-body">
                  <span className="material-symbols-outlined widget__newsletter-icon">mail</span>
                  <p className="widget__newsletter-hook">No et perdis cap novetat</p>
                  <p className="widget__newsletter-text">Notícies i agenda al teu correu, sense soroll.</p>
                  <form className="widget__newsletter-form" id="newsletter-form" action="/api/subscribe" method="POST">
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" className="widget__newsletter-honeypot" aria-hidden="true" />
                    <div className="widget__newsletter-field">
                      <input type="email" name="email" id="newsletter-email" className="widget__newsletter-input" placeholder="El teu email" required />
                      <button type="submit" id="newsletter-submit" className="widget__newsletter-btn" aria-label="Subscriu-te">
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </button>
                    </div>
                    <div className="field field--checkbox widget__newsletter-checkbox">
                      <label className="checkbox__label">
                        <input type="checkbox" name="terms" id="newsletter-terms" required />
                        <span>He llegit i accepto la <a href="/legal" target="_blank">política de privacitat</a></span>
                      </label>
                    </div>
                    <div className="form-feedback" id="newsletter-feedback" aria-live="polite"></div>
                  </form>
                </div>
              </aside>
            </div>
          </div>
          <a href="#diades" className="hero__scroll-cta" aria-label="Continua llegint">
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </a>
        </section>

        {/* 2. DIADA GRAN */}
        <section id="diada-gran" className="diada-gran" hidden>
          <div className="diada-gran__inner container">
            <div className="diada-gran__left">
              <div className="diada-gran__badge">
                <span className="material-symbols-outlined filled">star</span>
                Diada
              </div>
              <h2 className="diada-gran__title" id="dg-title"></h2>
              <div className="diada-gran__meta" id="dg-meta"></div>
              <p className="diada-gran__desc" id="dg-desc"></p>
            </div>
            <div className="diada-gran__right">
              <p className="diada-gran__countdown-label">Compte enrere</p>
              <div className="diada-gran__countdown">
                <div className="dg-unit"><span className="dg-num" id="dg-days">00</span><span className="dg-label">dies</span></div>
                <span className="dg-sep">:</span>
                <div className="dg-unit"><span className="dg-num" id="dg-hours">00</span><span className="dg-label">hores</span></div>
                <span className="dg-sep">:</span>
                <div className="dg-unit"><span className="dg-num" id="dg-mins">00</span><span className="dg-label">min</span></div>
                <span className="dg-sep">:</span>
                <div className="dg-unit"><span className="dg-num" id="dg-secs">00</span><span className="dg-label">seg</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROPERES DIADES */}
        <section id="diades" className="diades">
          <div className="container">
            <div className="diades__header">
              <div>
                <span className="diades__eyebrow">Agenda</span>
                <h2 className="diades__title">Properes diades</h2>
              </div>
              <div className="slider-controls" id="diades-slider-controls" hidden>
                <button className="icon-btn" id="diades-prev" aria-label="Diada anterior">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="icon-btn" id="diades-next" aria-label="Diada següent">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="diades__grid" id="diades-grid"></div>
          </div>
          <div className="slider-viewport" id="diades-slider-viewport" hidden>
            <div className="slider" id="diades-slider"></div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="nosaltres" className="section section--alt">
          <div className="container">
            <div className="about__grid">
              <div className="about__text">
                <span className="section__eyebrow">Qui som</span>
                <h2 className="section__title" id="about-title"></h2>
                <p className="about__body" id="about-body"></p>
                <div className="about__stats" id="about-stats"></div>
                <a href="/contacte" className="btn btn--filled">Uneix-te</a>
              </div>
              <div className="about__visual">
                <div className="about__image-frame">
                  <img src="/img/4d6-palau.jpeg" alt="Colla Castellera del Baix Montseny fent un castell al Palau" className="about__image" loading="lazy" />
                </div>
                <div className="about__accent-card">
                  <span className="material-symbols-outlined">emoji_events</span>
                  <p>Millors castellers<br />de la temporada 2025</p>
                </div>
              </div>
            </div>
            <div className="values-grid" id="about-values"></div>
          </div>
        </section>

        {/* EQUIP */}
        <section id="equip" className="equip">
          <div className="container">
            <div className="section__header">
              <div>
                <span className="section__eyebrow">La nostra gent</span>
                <h2 className="section__title">L&apos;equip</h2>
                <p className="equip__body">La colla s&apos;organitza en comissions que treballen per fer possible cada diada: des de la planificació tècnica dels caps de colla fins a la gestió econòmica i la festa. Fes clic sobre qualsevol membre per veure&apos;n la fitxa.</p>
              </div>
              <p className="equip__hint"><span className="material-symbols-outlined">open_with</span>Arrossega els nodes per explorar</p>
            </div>
            <div className="equip__graph" id="equip-graph"></div>
            <div className="equip__accordion" id="equip-accordion" aria-hidden="true"></div>
          </div>
        </section>

        {/* HISTÒRIA */}
        <section id="historia" className="section section--alt">
          <div className="container">
            <div className="section__header">
              <div>
                <span className="section__eyebrow">Trajectòria</span>
                <h2 className="section__title">La nostra història</h2>
              </div>
            </div>
            <p className="historia__hint">
              <span className="material-symbols-outlined">mouse</span>
              Scroll per fer zoom · Clica i arrossega per moure&apos;t · Clica un esdeveniment per veure&apos;n els detalls
            </p>
            <div className="historia__wrap">
              <div id="historia-graph"></div>
              <div className="tl-card" id="tl-card" hidden>
                <div className="tl-card__header">
                  <span className="tl-card__badge" id="tl-card-tipus"></span>
                  <button className="tl-card__close" id="tl-card-close" aria-label="Tancar detall">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                <h3 className="tl-card__title" id="tl-card-titol"></h3>
                <p className="tl-card__date" id="tl-card-data"></p>
                <p className="tl-card__desc" id="tl-card-desc"></p>
              </div>
            </div>
          </div>
        </section>

        {/* LIGHTBOX */}
        <div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Visor d'imatge" hidden>
          <div className="lightbox__backdrop" id="lightbox-backdrop"></div>
          <button className="lightbox__close" id="lightbox-close" aria-label="Tancar">
            <span className="material-symbols-outlined">close</span>
          </button>
          <button className="lightbox__nav lightbox__nav--prev" id="lightbox-prev" aria-label="Anterior">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="lightbox__stage">
            <img className="lightbox__img" id="lightbox-img" alt="" />
            <p className="lightbox__caption" id="lightbox-caption"></p>
          </div>
          <button className="lightbox__nav lightbox__nav--next" id="lightbox-next" aria-label="Següent">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

      </main>
    </>
  );
}
