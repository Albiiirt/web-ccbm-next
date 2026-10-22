import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda de diades i actuacions",
  description:
    "Consulta totes les diades i actuacions de la Colla Castellera del Baix Montseny (CCBM) de Sant Celoni. Vine a veure'ns!",
  alternates: { canonical: "/agenda" },
  openGraph: {
    title: "Agenda de diades — CCBM Colla Castellera del Baix Montseny",
    description: "Totes les diades i actuacions de la Colla Castellera del Baix Montseny (CCBM) de Sant Celoni.",
    url: "https://ccbaixmontseny.cat/agenda",
  },
};

export default function AgendaPage() {
  return (
    <main>
      {/* AGENDA HERO */}
      <section className="agenda-hero">
        <div className="container">
          <p className="agenda-hero__eyebrow">Colla Castellera Baix Montseny</p>
          <h1 className="agenda-hero__title">Agenda</h1>
        </div>
      </section>

      {/* CALENDAR */}
      <section className="agenda-section">
        <div className="container">
          <div className="calendar-wrap">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=6cb959c29bb2f62951329408433bcfcbaeb639c7ae81bff9a998b84314710da1%40group.calendar.google.com&ctz=Europe%2FMadrid"
              style={{ border: 0, display: "block" }}
              width="100%"
              height={600}
              scrolling="no"
              title="Calendari d'activitats CCBM"
            />
          </div>
          <div className="section__header">
            <div>
              <span className="section__eyebrow">Agenda</span>
              <h2 className="section__title">Totes les properes diades</h2>
            </div>
          </div>
          <div className="diades__grid" id="agenda-diades-grid" />
        </div>
      </section>
    </main>
  );
}
