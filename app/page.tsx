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
                  <a href="#contacte" className="btn btn--filled">Uneix-te</a>
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
                <a href="#contacte" className="btn btn--filled">Uneix-te</a>
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

        {/* CONTRACTACIONS */}
        <section id="contractacions" className="section">
          <div className="container">
            <div className="contact__grid">
              <div className="contact__info">
                <span className="section__eyebrow">Contractacions</span>
                <h2 className="section__title">Ens vols<br />contractar?</h2>
                <p className="contact__body">Si representeu una entitat, empresa o organisme i voleu comptar amb la nostra actuació per al vostre acte, esteu al lloc correcte. Ompliu el formulari i us enviarem un pressupost personalitzat sense compromís.</p>
                <ul className="contact__details">
                  <li className="contact__detail">
                    <span className="material-symbols-outlined">castle</span>
                    <span>Castells, torres i pilars</span>
                  </li>
                  <li className="contact__detail">
                    <span className="material-symbols-outlined">music_note</span>
                    <span>Gralla i percussió</span>
                  </li>
                  <li className="contact__detail">
                    <span className="material-symbols-outlined">event</span>
                    <span>Festes Majors, actes corporatius i celebracions privades</span>
                  </li>
                  <li className="contact__detail">
                    <span className="material-symbols-outlined">mail</span>
                    <a href="mailto:tresoreria@ccbaixmontseny.cat">tresoreria@ccbaixmontseny.cat</a>
                  </li>
                </ul>
              </div>
              <form className="contact__form" id="book-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="5516b450-d049-48df-9b17-6ff2d1fbe8ea" />
                <input type="hidden" name="subject" value="Nova sol·licitud de contractació - CCBM" />
                <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                <div className="field">
                  <input type="text" id="b-entity" name="entitat" className="field__input" placeholder=" " required />
                  <label htmlFor="b-entity" className="field__label">Entitat o promotor</label>
                  <div className="field__outline"></div>
                </div>
                <div className="field">
                  <input type="text" id="b-contact" name="persona_contacte" className="field__input" placeholder=" " required />
                  <label htmlFor="b-contact" className="field__label">Persona de contacte</label>
                  <div className="field__outline"></div>
                </div>
                <div className="field">
                  <input type="email" id="b-email" name="email" className="field__input" placeholder=" " required />
                  <label htmlFor="b-email" className="field__label">Correu electrònic</label>
                  <div className="field__outline"></div>
                </div>
                <div className="field">
                  <input type="tel" id="b-phone" name="telefon" className="field__input" placeholder=" " required />
                  <label htmlFor="b-phone" className="field__label">Telèfon</label>
                  <div className="field__outline"></div>
                </div>
                <div className="field field--date">
                  <input type="date" id="b-date" name="data_acte" className="field__input" />
                  <label htmlFor="b-date" className="field__label">Data prevista de l&apos;acte</label>
                  <div className="field__outline"></div>
                </div>
                <div className="field">
                  <input type="text" id="b-place" name="lloc_acte" className="field__input" placeholder=" " />
                  <label htmlFor="b-place" className="field__label">Lloc de l&apos;acte (opcional)</label>
                  <div className="field__outline"></div>
                </div>
                <div className="field field--select">
                  <select id="b-type" name="tipus_acte" className="field__input" required defaultValue="">
                    <option value="" disabled>&nbsp;</option>
                    <option value="festa-major">Festa Major</option>
                    <option value="corporatiu">Acte corporatiu</option>
                    <option value="privat">Celebració privada</option>
                    <option value="inauguracio">Inauguració</option>
                    <option value="altres">Altres</option>
                  </select>
                  <label htmlFor="b-type" className="field__label field__label--select">Tipus d&apos;acte</label>
                  <span className="material-symbols-outlined field__select-arrow">expand_more</span>
                  <div className="field__outline"></div>
                </div>
                <div className="field field--textarea">
                  <textarea id="b-message" name="missatge" className="field__input" placeholder=" " rows={4}></textarea>
                  <label htmlFor="b-message" className="field__label">Descripció de l&apos;acte (opcional)</label>
                  <div className="field__outline"></div>
                </div>
                <div className="field field--checkbox">
                  <label className="checkbox__label">
                    <input type="checkbox" name="terms" id="b-terms" required />
                    <span>He llegit i accepto la <a href="/legal" target="_blank">política de privacitat</a></span>
                  </label>
                </div>
                <button type="submit" className="btn btn--filled btn--full" id="book-submit">
                  <span className="material-symbols-outlined">request_quote</span>
                  Demanar pressupost
                </button>
                <div className="form-feedback" id="book-feedback" aria-live="polite"></div>
              </form>
            </div>
          </div>
        </section>

        {/* CONTACTE */}
        <section id="contacte" className="section section--alt">
          <div className="container">
            <div className="contact__grid">
              <div className="contact__info">
                <span className="section__eyebrow">Contacte</span>
                <h2 className="section__title">Vols formar<br />part de la colla?</h2>
                <p className="contact__body">Tant si ets casteller/a veterà com si vols descobrir el món casteller per primer cop, t&apos;estem esperant. Vine als nostres assajos o escriu-nos!</p>
                <ul className="contact__details">
                  <li className="contact__detail">
                    <span className="material-symbols-outlined">location_on</span>
                    <a href="https://www.google.com/maps/search/?api=1&query=Sax+Sala+Sant+Celoni" target="_blank" rel="noopener">Sax Sala, Sant Celoni</a>
                  </li>
                  <li className="contact__detail">
                    <span className="material-symbols-outlined">schedule</span>
                    <span>Dimarts i divendres de 19:00 h a 21:30 h</span>
                  </li>
                  <li className="contact__detail">
                    <span className="material-symbols-outlined">mail</span>
                    <a href="mailto:esdeveniments@ccbaixmontseny.cat">esdeveniments@ccbaixmontseny.cat</a>
                  </li>
                </ul>
              </div>
              <form className="contact__form" id="contact-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="3a285b3b-cda8-4df8-8a48-5ae45332f630" />
                <input type="hidden" name="subject" value="Nou missatge des de la web CCBM" />
                <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                <div className="field">
                  <input type="text" id="f-name" name="name" className="field__input" placeholder=" " required />
                  <label htmlFor="f-name" className="field__label">Nom i cognoms</label>
                  <div className="field__outline"></div>
                </div>
                <div className="field">
                  <input type="email" id="f-email" name="email" className="field__input" placeholder=" " required />
                  <label htmlFor="f-email" className="field__label">Correu electrònic</label>
                  <div className="field__outline"></div>
                </div>
                <div className="field">
                  <input type="tel" id="f-phone" name="phone" className="field__input" placeholder=" " />
                  <label htmlFor="f-phone" className="field__label">Telèfon (opcional)</label>
                  <div className="field__outline"></div>
                </div>
                <div className="field field--select">
                  <select id="f-subject" name="motiu" className="field__input" required defaultValue="">
                    <option value="" disabled>&nbsp;</option>
                    <option value="unirse">Vull unir-me a la colla</option>
                    <option value="actuacio">Sol·licitar una actuació</option>
                    <option value="info">Informació general</option>
                    <option value="altres">Altres</option>
                  </select>
                  <label htmlFor="f-subject" className="field__label field__label--select">Motiu del contacte</label>
                  <span className="material-symbols-outlined field__select-arrow">expand_more</span>
                  <div className="field__outline"></div>
                </div>
                <div className="field field--textarea">
                  <textarea id="f-message" name="message" className="field__input" placeholder=" " rows={4} required></textarea>
                  <label htmlFor="f-message" className="field__label">Missatge</label>
                  <div className="field__outline"></div>
                </div>
                <div className="field field--checkbox">
                  <label className="checkbox__label">
                    <input type="checkbox" name="terms" id="f-terms" required />
                    <span>He llegit i accepto la <a href="/legal" target="_blank">política de privacitat</a></span>
                  </label>
                </div>
                <button type="submit" className="btn btn--filled btn--full" id="form-submit">
                  <span className="material-symbols-outlined">send</span>
                  Enviar missatge
                </button>
                <div className="form-feedback" id="form-feedback" aria-live="polite"></div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
