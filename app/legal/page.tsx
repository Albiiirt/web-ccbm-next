import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avís Legal i Privacitat",
  description: "Avís legal i política de privacitat de la Colla Castellera del Baix Montseny (CCBM).",
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <p className="legal-hero__eyebrow">Colla Castellera Baix Montseny</p>
          <h1 className="legal-hero__title">Avís Legal i Privacitat</h1>
        </div>
      </section>

      <nav className="legal-nav" aria-label="Seccions">
        <div className="container legal-nav__inner">
          <a href="#avis-legal" className="legal-nav__link">Avís Legal</a>
          <a href="#privacitat" className="legal-nav__link">Política de Privacitat</a>
        </div>
      </nav>

      <div className="legal-body">
        <div className="container">

          {/* AVÍS LEGAL */}
          <section className="legal-section" id="avis-legal">
            <h2>Avís Legal</h2>

            <p>COLLA CASTELLERA DEL BAIX MONTSENY, responsable del lloc web, d&apos;ara endavant el RESPONSABLE, posa a disposició dels usuaris aquest document, amb el qual pretén fer complir les obligacions que estableix la Llei 34/2002, d&apos;11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSICE), BOE N.º 166, així com informar tots els usuaris del lloc web sobre quines són les condicions d&apos;ús.</p>
            <p>Qualsevol persona que accedeixi a aquest lloc web assumeix el paper d&apos;usuari i es compromet a l&apos;observança i compliment rigorós de les disposicions que s&apos;hi estableixen, així com a qualsevol altra disposició legal aplicable. COLLA CASTELLERA DEL BAIX MONTSENY es reserva el dret de modificar qualsevol tipus d&apos;informació que pugui aparèixer al lloc web, sense l&apos;obligació de preavisar els usuaris.</p>

            <h3>1. Dades identificadores</h3>
            <ul>
              <li><strong>Nom del domini:</strong> ccbaixmontseny.cat</li>
              <li><strong>Denominació social:</strong> Colla Castellera del Baix Montseny</li>
              <li><strong>NIF:</strong> G67536334</li>
              <li><strong>Domicili social:</strong> C/Montserrat, 28, 08470 Sant Celoni (Barcelona)</li>
              <li><strong>Correu electrònic:</strong> <a href="mailto:secretaria@ccbaixmontseny.cat">secretaria@ccbaixmontseny.cat</a></li>
            </ul>

            <h3>2. Drets de propietat intel·lectual i industrial</h3>
            <p>El lloc web, incloent a títol enunciatiu però no limitatiu la seva programació, edició, compilació i altres elements necessaris per al seu funcionament, els dissenys, logotips, text i/o gràfics, són propietat del RESPONSABLE o bé disposa de llicència o autorització expressa per part dels autors. Tots els continguts del lloc web es troben degudament protegits per la normativa de propietat intel·lectual i industrial.</p>
            <p>La reproducció total o parcial, ús, explotació, distribució i comercialització requereix en tot cas l&apos;autorització escrita prèvia per part del RESPONSABLE. Qualsevol ús no autoritzat prèviament es considera un incompliment greu dels drets de propietat intel·lectual o industrial de l&apos;autor.</p>
            <p>Per efectuar qualsevol observació pel que fa a possibles incompliments dels drets de propietat intel·lectual o industrial, podeu contactar a través de <a href="mailto:secretaria@ccbaixmontseny.cat">secretaria@ccbaixmontseny.cat</a>.</p>

            <h3>3. Exempció de responsabilitats</h3>
            <p>El RESPONSABLE s&apos;eximeix de qualsevol tipus de responsabilitat derivada de la informació publicada al seu lloc web sempre que no tingui coneixement efectiu que aquesta informació hagi estat manipulada o introduïda per un tercer aliè, o si ho té, hagi actuat amb diligència per retirar les dades o fer impossible l&apos;accés a ells.</p>

            <h3>Ús de cookies</h3>
            <p>Aquest lloc web pot utilitzar cookies tècniques per dur a terme determinades funcions imprescindibles per al correcte funcionament i visualització del web. Les cookies utilitzades tenen caràcter temporal i desapareixen en finalitzar la sessió de l&apos;usuari. En cap cas proporcionen dades de caràcter personal.</p>
            <p>Aquest lloc web no instal·larà cookies prescindibles sense el consentiment previ de l&apos;usuari. L&apos;usuari té la possibilitat de configurar el seu navegador per ser alertat de la recepció de cookies i per impedir-ne la instal·lació al seu equip.</p>

            <h3>Política d&apos;enllaços</h3>
            <p>Des del lloc web és possible que es redirigeixi a continguts de tercers llocs web. Atès que el RESPONSABLE no pot controlar sempre els continguts introduïts per tercers, no assumeix cap tipus de responsabilitat respecte d&apos;aquests continguts. En qualsevol cas, retirarà immediatament qualsevol contingut que pugui transgredir la legislació nacional o internacional, la moral o l&apos;ordre públic.</p>

            <h3>Adreces IP</h3>
            <p>Els servidors del lloc web podran detectar automàticament l&apos;adreça IP i el nom del domini utilitzats per l&apos;usuari. Tota aquesta informació queda registrada en un fitxer d&apos;activitat del servidor que permet processar les dades posteriorment per obtenir mesuraments únicament estadístics sobre el nombre de visites, el punt d&apos;accés, etc.</p>

            <h3>4. Llei aplicable i jurisdicció</h3>
            <p>Per a la resolució de totes les controvèrsies o qüestions relacionades amb aquest lloc web o de les activitats que s&apos;hi duen a terme, s&apos;aplicarà la legislació espanyola. Les parts se sotmeten expressament als Jutjats i Tribunals del domicili de l&apos;USUARI o el lloc de compliment de l&apos;obligació per a la resolució de tots els conflictes derivats o relacionats amb el seu ús.</p>
          </section>

          {/* POLÍTICA DE PRIVACITAT */}
          <section className="legal-section" id="privacitat">
            <h2>Política de Privacitat</h2>

            <h3>1. Informació per a l&apos;usuari</h3>
            <p><strong>Qui és el responsable del tractament de les teves dades personals?</strong></p>
            <p>COLLA CASTELLERA DEL BAIX MONTSENY és el RESPONSABLE del tractament de les dades personals de l&apos;USUARI i l&apos;informa que aquestes dades es tractaran de conformitat amb el que disposa el Reglament (UE) 2016/679, de 27 d&apos;abril (GDPR), i la Llei Orgànica 3/2018, de 5 de desembre (LOPDGDD).</p>

            <h3>Perquè tractem les teves dades personals?</h3>
            <p>Per mantenir una relació amb l&apos;usuari. Les operacions previstes per fer el tractament són:</p>
            <ul>
              <li>Remesa de comunicacions comercials publicitàries per e-mail, xarxes socials o qualsevol altre mitjà electrònic o físic que permeti efectuar comunicacions comercials, relacionades amb els productes i serveis del RESPONSABLE.</li>
              <li>Tramitar encàrrecs de peticions, enviar pressupostos, donar resposta a les consultes o qualsevol tipus de petició que faci l&apos;USUARI a través de qualsevol de les formes de contacte disponibles.</li>
              <li>Enviar el butlletí informatiu online sobre novetats, ofertes i promocions en la nostra activitat.</li>
            </ul>

            <h3>Per quin motiu podem tractar les teves dades personals?</h3>
            <p>Perquè el tractament està legitimat per l&apos;article 6 del GDPR de la manera següent:</p>
            <ul>
              <li>Amb el consentiment de l&apos;USUARI: enviament de comunicacions comercials i del butlletí informatiu.</li>
              <li>Per interès legítim del RESPONSABLE: efectuar estudis de mercat, anàlisis estadístiques, i tramitar encàrrecs i sol·licituds a petició de l&apos;USUARI.</li>
            </ul>

            <h3>Durant quant de temps guardarem les teves dades personals?</h3>
            <p>Es conservaran durant no més temps del necessari per mantenir la finalitat del tractament o mentre hi hagi prescripcions legals que en dictaminin la custòdia. Quan ja no sigui necessari, se suprimiran amb mesures de seguretat adequades per garantir l&apos;anonimització o la seva destrucció total.</p>

            <h3>A qui facilitem les teves dades personals?</h3>
            <p>No està prevista cap comunicació de dades personals a tercers excepte, si fos necessari per al desenvolupament i execució de les finalitats del tractament, als proveïdors de serveis relacionats amb comunicacions, amb els quals el RESPONSABLE ha formalitzat els contractes de confidencialitat i d&apos;encarregat de tractament exigits per la normativa vigent de privacitat.</p>

            <h3>Quins són els teus drets?</h3>
            <p>Els drets que té l&apos;USUARI són:</p>
            <ul>
              <li>Dret a retirar el consentiment en qualsevol moment.</li>
              <li>Dret d&apos;accés, rectificació, portabilitat i supressió de les seves dades i de limitació o oposició al seu tractament.</li>
              <li>Dret a presentar una reclamació davant l&apos;autoritat de control (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>) si considera que el tractament no s&apos;ajusta a la normativa vigent.</li>
            </ul>
            <p>Dades de contacte per exercir els seus drets: COLLA CASTELLERA DEL BAIX MONTSENY. C/Montserrat, 28, 08470 Sant Celoni (Barcelona). Correu electrònic: <a href="mailto:secretaria@ccbaixmontseny.cat">secretaria@ccbaixmontseny.cat</a>.</p>

            <h3>2. Caràcter obligatori o facultatiu de la informació facilitada per l&apos;usuari</h3>
            <p>Els USUARIS, per mitjà de les caselles corresponents i la introducció de dades en els camps marcats amb l&apos;asterisc (*) en el formulari de contacte, accepten expressament i de manera lliure i inequívoca que les seves dades són necessàries per a l&apos;atenció de la seva petició. La inclusió de dades en els camps restants és voluntària.</p>
            <p>L&apos;USUARI garanteix que les dades personals facilitades al RESPONSABLE són verídiques i es fa responsable de comunicar-ne qualsevol modificació. El RESPONSABLE informa que totes les dades sol·licitades a través del lloc web són necessàries per a la prestació d&apos;un servei òptim a l&apos;USUARI.</p>

            <h3>3. Mesures de seguretat</h3>
            <p>De conformitat amb el que estableixen les normatives vigents en protecció de dades personals, el RESPONSABLE compleix amb totes les disposicions de les normatives GDPR i LOPDGDD per al tractament de les dades personals de la seva responsabilitat, i manifestament amb els principis descrits a l&apos;article 5 del GDPR, pels quals es tracten de manera lícita, lleial i transparent en relació amb l&apos;interessat i adequades, pertinents i limitades al que és necessari en relació amb les finalitats per a les quals es tracten.</p>
            <p>El RESPONSABLE garanteix que ha implementat polítiques tècniques i organitzatives apropiades per aplicar les mesures de seguretat que estableixen el GDPR i la LOPDGDD a fi de protegir els drets i les llibertats dels USUARIS. Per a més informació sobre les garanties de privacitat, podeu dirigir-vos al RESPONSABLE a través de <a href="mailto:secretaria@ccbaixmontseny.cat">secretaria@ccbaixmontseny.cat</a>.</p>
          </section>

          <p style={{ marginTop: "var(--space-xl)", fontSize: ".8125rem", color: "var(--md-on-surface-variant)" }}>
            Última actualització: maig de 2026
          </p>

        </div>
      </div>
    </main>
  );
}
