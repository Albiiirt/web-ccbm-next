import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacte",
  description:
    "Contracta una actuació de la Colla Castellera del Baix Montseny (CCBM) per al teu acte, o posa't en contacte amb nosaltres per unir-te a la colla.",
  alternates: { canonical: "/contacte" },
  openGraph: {
    title: "Contacte — CCBM Colla Castellera del Baix Montseny",
    description: "Contracta'ns per al teu acte o posa't en contacte amb nosaltres per unir-te a la colla.",
    url: "https://ccbaixmontseny.cat/contacte",
  },
};

export default function ContactePage() {
  return (
    <main>
      {/* CONTACTE HERO */}
      <section className="agenda-hero">
        <div className="container">
          <p className="agenda-hero__eyebrow">Colla Castellera Baix Montseny</p>
          <h1 className="agenda-hero__title">Contacte</h1>
        </div>
      </section>

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
  );
}
