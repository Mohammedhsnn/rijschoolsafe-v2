import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leveringsvoorwaarden - Rijschool Safe",
  description: "Algemene Leveringsvoorwaarden behorende bij aanmeldingsformulier of lesovereenkomst van Verkeersschool Safe.",
}

export default function LeveringsvoorwaardenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Leveringsvoorwaarden</h1>
        <p className="text-muted-foreground mb-10">
          Algemene Leveringsvoorwaarden behorende bij aanmeldingsformulier of lesovereenkomst van Verkeersschool Safe.
        </p>

        <section className="prose prose-neutral dark:prose-invert max-w-none space-y-10">
          <div>
            <h2 className="text-xl font-semibold mb-3">Artikel 1: Verplichtingen verkeersschool</h2>
            <p className="mb-2">De verkeersschool is verplicht er zorg voor te dragen:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
              <li>Dat les wordt gegeven door instructeurs, die voldoen aan de Wet Rijonderricht Motorrijtuigen.</li>
              <li>Dat de leerling zo veel mogelijk rijonderricht ontvangt van dezelfde instructeur.</li>
              <li>Dat de instructeur de leerling periodiek en in ieder geval eens per 5 lessen informatie geeft over de vooruitgang van de leerling en de voortgang in relatie tot de exameneisen.</li>
              <li>Dat uiterlijk twee weken na de datum waarop overeenstemming met de leerling is bereikt dat het onderzoek naar de rijvaardigheid (hierna: het onderzoek) kan worden aangevraagd en de leerling de kosten van het onderzoek aan de verkeersschool heeft voldaan, de aanvraag daadwerkelijk is ingediend bij de Stichting Centraal Bureau Rijvaardigheidsbewijzen (CBR) het CCV of het Bureau Nader Onderzoek Rijvaardigheden (BNOR) onder voldoening van de daarvoor geldende bedragen en bescheiden.</li>
              <li>Dat de leerling, die de verkeersschool het onderzoek heeft aangevraagd, op de datum en tijd waarvoor hij/zij is opgeroepen voor het afleggen van een onderzoek de beschikking heeft over hetzelfde les(motor)voertuig als waarin de rijlessen zijn ontvangen, dan wel over een voertuig van hetzelfde of gelijkwaardig type.</li>
              <li>Dat de tijdsduur van de te geven rijles, zoals overeengekomen in de lesovereenkomst, volledig wordt benut voor het geven van rijles.</li>
              <li>Dat er een verzekering is afgesloten, welke in ieder geval een dekking biedt van € 1.134.450,00 tegen aansprakelijkheid van de rijschool ten opzichte van de leerling.</li>
              <li>De leerling te wijzen op het feit dat eventuele medische klachten, waarvan de kandidaat redelijkerwijs kan verwachten dat deze van invloed kunnen zijn op de bevoegdheid een motorvoertuig te besturen, van invloed kunnen zijn op de aanvraag en het doen van een onderzoek.</li>
              <li>De leerling te wijzen op het feit dat op grond van de verblijfsstatus wordt bepaald of een rijbewijs kan worden afgegeven.</li>
              <li>De leerling te wijzen op het feit dat, zodra er sprake is van een ontzegging van de bevoegdheid tot het besturen van motorrijtuigen, hij/zij hiervan melding moet maken aan de verkeersschool.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Artikel 2: Verplichtingen leerling</h2>
            <p className="mb-2">De leerling is verplicht:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
              <li>Zich te houden aan de afgesproken datum, tijd en plaats voor de rijles (door de verkeersschool wordt een wachttijd van 10 minuten in acht genomen) en bij niet verschijnen op het afgesproken tijdstip zonder tijdige afzegging, de volledige lesprijs te voldoen.</li>
              <li>De volledige lesprijs te voldoen indien de rijles wordt afgezegd binnen 48 uur voor de afgesproken tijd (zondagen alsmede erkende feestdagen worden niet meegerekend).</li>
              <li>Een les of opleiding kan uitsluitend telefonisch afgezegd worden via het hoofdnummer van rijschool Safe.</li>
              <li>Een te laat afgezegde rijles wordt niet in rekening gebracht bij afzegging vanwege een dringende reden, hieronder wordt verstaan een ernstig ongeval, een ernstige ziekte of overlijden. Deze dringende reden geldt voor kandidaten, familieleden in de eerste of tweede graad of huisgenoten die volgens het bevolkingsregister op hetzelfde adres staan ingeschreven.</li>
              <li>Bij annulering van opleidingen c.q. cursussen (opleidingen c.q. cursussen waarbij de rij- en/of theorielessen en praktijk- en theorie-examen al gepland zijn) wordt de volgende annuleringstaffel in acht genomen: uiterlijk vier weken voorafgaand aan eerste opleidings- en/of cursusdag: kosteloos; uiterlijk drie weken voorafgaand aan eerste opleidings- en/of cursusdag: 50%; uiterlijk twee weken voorafgaand aan eerste opleidings- en/of cursusdag: 75%; uiterlijk één week voorafgaand aan eerste opleidings- en/of cursusdag: 100%.</li>
              <li>Alle aanwijzingen van de rij-instructeur tijdens de rijlessen op te volgen.</li>
              <li>Het met de verkeersschool overeengekomen lesschema, zoals de aan te leren lesonderdelen en het aantal te volgen rijlessen per week, tot aan de datum van ieder onderzoek na te komen.</li>
              <li>De leerling dient bij het onderzoek een geldig legitimatiebewijs en een geldig theoriecertificaat te overleggen.</li>
              <li>Eventuele medische klachten, waarvan de kandidaat redelijkerwijs kan verwachten dat deze van invloed kunnen zijn op de bevoegdheid een motorvoertuig te besturen, tijdig af te stemmen met het examenbureau voordat de rijopleiding wordt begonnen. Als de leerling nalaat dit te doen en de rijopleiding daardoor moet worden onderbroken of afgebroken, kan de verkeersschool hiervoor niet aansprakelijk worden gesteld.</li>
              <li>Indien een examen is aangevraagd / vastgelegd is de leerling te allen tijde verplicht deze te voldoen samen met de administratiekosten, tenzij men na de annulering een schriftelijke medische verklaring kan overleggen met een gegronde rede, waarna de administratiekosten nog wel verrekend worden; dit geldt voor een periode binnen drie weken voor de examendatum.</li>
              <li>Indien een leerling is ingedeeld voor een cursus of spoedcursus is deze verplicht de cursuskosten te betalen, tenzij men na de annulering een schriftelijke medische verklaring kan overleggen met een gegronde reden; dit geldt voor een periode binnen vier weken voor de eerste cursusdag.</li>
              <li>De verkeersschool met DigiD te machtigen, zodat de verkeersschool het onderzoek kan aanvragen. De verkeersschool kan er niet aansprakelijk voor worden gesteld als de leerling dit nalaat.</li>
              <li>De verkeersschool te melden indien er sprake is van een ontzegging van de bevoegdheid tot het besturen van motorrijtuigen. De verkeersschool kan er niet aansprakelijk voor worden gesteld als de leerling dit nalaat.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Artikel 3: Betaling</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
              <li>De leerling of opdrachtgever is verplicht het overeengekomen bedrag aan inschrijvingsgeld / cursusgeld / administratiekosten voor aanvang van de eerste les te voldoen. Tenzij uitdrukkelijk anders wordt overeengekomen moet betaling van het lesgeld en de kosten, verbonden aan de individueel of in groepsverband te volgen lessen, per les worden voldaan. De kosten voor de noodzakelijke leerboeken en ander lesmateriaal dienen bij het afleveren te worden voldaan, tenzij schriftelijk anders overeengekomen.</li>
              <li>De verkeersschool is gerechtigd tijdens de duur van de lesovereenkomst de lesprijs te verhogen. De leerling is gerechtigd in dat geval de lesovereenkomst schriftelijk te ontbinden, van welke bevoegdheid hij gebruik kan maken tot twee weken na kennisneming van de prijsverhoging.</li>
              <li>Indien niet conform artikel 3 lid b en c betaald wordt en er niet uitdrukkelijk een ander moment van betaling is overeengekomen dan wel indien wel uitdrukkelijk een ander moment van betaling is overeengekomen en betaling op dat overeengekomen moment niet plaatsvindt, dan is de verkeersschool vanaf dat moment gerechtigd over het verschuldigde bedrag de wettelijke rente in rekening te brengen. Hierbij wordt het resterende gedeelte van de maand vanaf het moment waarop de betaling had moeten plaatsvinden als gehele maand aangemerkt. Deze verhoging van het verschuldigde bedrag wordt beschouwd als een voorwaarde, waaronder door de verkeersschool uitstel van betaling is verleend, zonder dat hiermee de verplichting van de leerling tot contante betaling c.q. tot betaling per overeengekomen tijdstip komt te vervallen.</li>
              <li>Indien de leerling na sommatie in gebreke is gebleven, blijft het verschuldigde bedrag te betalen, en is de verkeersschool gerechtigd dit bedrag met de incassokosten te verhogen. Deze incassokosten omvatten zowel de gerechtelijke als de buitengerechtelijke kosten. Buitengerechtelijke kosten zijn alle kosten die aan de verkeersschool in rekening worden gebracht door advocaten, procureurs, deurwaarders en ieder ander van wie de verkeersschool zich bedient voor de invordering van het verschuldigde bedrag. De buitengerechtelijke kosten worden vastgesteld op ten minste 15% van het verschuldigde bedrag met een minimum van € 40,00.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Artikel 4: Aanvraag onderzoek naar de rijvaardigheid c.q. herhalingsonderzoek (verder te noemen onderzoek)</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
              <li>Tenzij uitdrukkelijk anders overeengekomen dienen de kosten van of ten behoeve van de aanvraag van het onderzoek gelijktijdig met de invulling van de aanvraag en de eigen verklaring (of het verstrekken van de laatste) contant aan de verkeersschool te worden voldaan.</li>
              <li>Veertien dagen na datum van invulling en betaling van de betaling van de aanvraag van het onderzoek heeft de leerling recht op inzage van het geleidebiljet en van het stortings- of overschrijvingsbewijs waaruit blijkt dat zijn/haar aanvraag van het onderzoek bij het CBR, CCV, of het BNOR is ingediend.</li>
              <li>Indien het onderzoek geen doorgang vindt omdat de leerling niet of te laat op het onderzoek verschijnt en dit niet te wijten is aan de verkeersschool, of omdat de leerling geen vereiste, geldige documenten kan tonen, dan zijn de kosten voor de aanvraag van een nieuw onderzoek voor rekening van de leerling.</li>
              <li>Indien het onderzoek geen doorgang vindt wegens vakantie van de leerling, draagt de leerling zelf de verantwoordelijkheid voor de kosten, tenzij de vakantieperiode (zoals bij de vakantieregeling CBR geldt) bij de aanvraag van het onderzoek aan de verkeersschool is opgegeven.</li>
              <li>De verkeersschool is na mondeling of schriftelijke aankondiging gerechtigd tussentijdse prijswijzigingen van de theorie en het praktijk gedeelte van het onderzoek door te berekenen en is verplicht op verzoek van de leerling een specificatie van de prijswijzigingen te geven.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Artikel 5: Onderzoek naar de rijvaardigheid</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
              <li>Indien het CBR, het CCV of het BNOR het onderzoek wegens slechte weersomstandigheden op de afgesproken tijd geen doorgang laat vinden, kan de verkeersschool de leerling het lesgeld van één rijles in rekening brengen voor het opnieuw vastgestelde examen.</li>
              <li>Indien de leerling het onderzoek niet kan aanvangen of voltooien als gevolg van het feit dat: Er sprake is van een dringende reden zoals genoemd in artikel 2 lid d; Het lesvoertuig, waarmee het onderzoek dient te worden afgelegd, door overmacht niet ter beschikking is en geen lesvoertuig van hetzelfde of gelijkwaardig type ter beschikking is; Het lesvoertuig, waarmee het onderzoek dient te worden afgelegd, door de examinator van het CBR, het CCV of de deskundige van het BNOR wordt afgekeurd en geen vervangend lesvoertuig van hetzelfde of gelijkwaardig type beschikbaar is, zal de verkeersschool ervoor zorgen dat voor de leerling een nieuw onderzoek wordt aangevraagd indien de leerling dit wenst.</li>
              <li>De verkeersschool staat ervoor in dat het aanvragen van het onderzoek dan geschiedt zonder kosten voor de leerling.</li>
              <li>In de in lid b punt 2 en 3 genoemde gevallen garandeert de verkeersschool bovendien dat de leerling, indien hij/zij opnieuw onderzoek aanvraagt, drie werkelijke uren (180 minuten) gratis rijlessen ontvangt.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Artikel 6: Beëindiging van de lesovereenkomst</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
              <li>Indien de lesovereenkomst niet is aangegaan voor een vast aantal lessen dan wel niet is aangegaan voor een vaste periode kan de lesovereenkomst door zowel de leerling als de verkeersschool worden opgezegd met in achtneming van een opzeggingstermijn van één maand en wel tegen de eerste dag van een kalendermaand.</li>
              <li>Indien er sprake is van een al vooruitbetaald bedrag heeft de leerling in dit geval recht op restitutie van een eventueel vooruitbetaald bedrag, onder aftrek van het al aan CBR, CCV of BNOR betaalde examengeld, al genoten rijlessen evenals administratiekosten. De leerling is niet verplicht om gedurende deze opzegtermijn rijlessen te volgen, mits is voldaan in artikel 2 lid b.</li>
              <li>Indien de lesovereenkomst is aangegaan voor een vast aantal lessen of voor een vast overeengekomen periode (bv. de 10 daagse rijopleiding) kan de leerling de lesovereenkomst slechts beëindigen indien er sprake is van dringende reden zoals vermeld in artikel 2 lid d. Bij beëindiging om dringende reden is de leerling gehouden de prijs voor de al genoten lessen vermeerderd met de prijs van één lesuur, evenals de administratiekosten, evenals het al aan het CBR, CCV of BNOR betaalde examengeld, te vergoeden.</li>
              <li>Bij beëindigen zonder geldige reden word 30% van het overige tegoed in rekening gebracht.</li>
              <li>Indien het bedrag ineens bijvooruitbetaling is voldaan zal de verkeersschool het verschuldigde bedrag restitueren onder aftrek van het betaalde examengeld en een bedrag naar rato van het aantal al genoten lessen, vermeerderd met een vergoeding gelijk aan de prijs van één lesuur evenals de administratiekosten.</li>
              <li>De verkeersschool kan de lesovereenkomst, aangegaan voor een vast aantal lessen dan wel voor een vaste periode, slechts beëindigen om dusdanig dringende redenen, dat van de verkeersschool onmogelijk verwacht kan worden deze te continueren onder terugbetaling aan de leerling van die (les)gelden, waarvoor de verkeersschool nog niet heeft gepresteerd, onverminderd de in artikel 7 van deze overeenkomst gemelde mogelijkheid van de leerling zich te wenden tot het daar genoemde bemiddelingsbureau.</li>
              <li>Bij beëindiging van de lesovereenkomst heeft de leerling in alle gevallen recht op restitutie van aan de verkeersschool betaalde examengelden ter hoogte van het door het CBR, CCV of BNOR vastgestelde tarief, voor zover de verkeersschool deze gelden nog niet heeft afgedragen aan het CBR, CCV of BNOR.</li>
            </ul>
            <p className="mt-4 text-sm sm:text-base">
              <strong>Kortingspakketten:</strong> Pakketten waarop korting wordt verleend zijn gebaseerd op volledige afname van alle inbegrepen onderdelen (zoals lessen en examen). Bij voortijdige beëindiging of annulering vervalt het recht op korting en vindt geen (gedeeltelijke) restitutie plaats.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Artikel 7: Bemiddelings- en Geschillenregeling</h2>
            <h3 className="font-medium mt-2">Bemiddeling</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
              <li>De leerling kan, indien er geschillen ontstaan tussen hem/haar en de verkeersschool ter zake van de in de artikelen 1 t/m 6 van de in deze voorwaarde bedoelde verplichtingen, een beroep doen op bemiddeling.</li>
              <li>De bemiddeling wordt verleend door het BOVAG Bemiddelingsbureau, Postbus 1100, 3980 DC te Bunnik. Telefoon (à 35 eurocent per minuut) 0900-2692268. Bemiddeling kan slechts worden ingeroepen nadat de leerling zich eerst tot de verkeersschool heeft gewend en dit niet heeft geleid tot een oplossing van het geschil.</li>
              <li>Het beroep op bemiddeling moet schriftelijk worden gedaan binnen een periode van twee weken nadat het geschil is ontstaan.</li>
              <li>Indien bemiddeling naar de mening van de leerling niet tot een bevredigende oplossing leidt c.q. indien de rijschool de bij de bemiddeling geadviseerde oplossing van het geschil niet volgt, kan, onverminderd de bevoegdheid van de burgerlijke rechter, het geschil op schriftelijk verzoek van de leerling worden onderworpen aan een voor beide partijen bindend advies.</li>
            </ul>
            <h3 className="font-medium mt-4">Geschillenregeling</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
              <li>De leerling kan, als de in lid 1 genoemde bemiddelingspoging niet is geslaagd, of als de leerling niet de voorkeur aan een bemiddeling geeft, bij geschillen tussen hem/haar en de verkeersschool terzake van de in de artikelen 1 t/m 6 van de in deze voorwaarden bedoelde verplichtingen het geschil aanhangig maken bij de geschillencommissie Rijopleidingen van de stichting Geschillencommissies, p/a Postbus 90600, 2509 LP te Den Haag.</li>
              <li>In het geval dat bemiddeling door het BOVAG-bemiddelingsbureau heeft plaatsgehad, dient de leerling het geschil binnen 6 weken na ontvangst van het bericht dat de bemiddeling geen resultaat heeft gehad, bij de geschillencommissie aanhangig te maken. Als er geen bemiddeling door het BOVAG-bemiddelingsbureau heeft plaatsgevonden, dient de leerling het geschil, uiterlijk 3 maanden nadat het is gerezen, bij de geschillencommissie aanhangig te maken.</li>
              <li>De Geschillencommissie Rijopleidingen doet uitspraak met inachtneming van de bepalingen van het voor haar geldende reglement bij wege van bindend advies. Het reglement wordt desgevraagd toegezonden. Voor de behandeling van een geschil is een vergoeding verschuldigd.</li>
              <li>Voor de behandeling van het geschil door de Geschillencommissie is de leerling een vergoeding verschuldigd.</li>
              <li>Een uitspraak van de Geschillencommissie Rijopleidingen zal in rechte niet aantastbaar zijn, indien meer dan twee maanden na de verzending ervan, zijn verstreken en geen beroep op de gewone rechter is gedaan.</li>
              <li>De BOVAG afdeling verkeersopleidingen staat borg voor de uitvoering van het bindend advies dat ten nadele van de verkeersschool is uitgebracht tot een bedrag van maximaal € 454,-. In geval van faillissement of surseance van betaling of bedrijfsbeëindiging geldt de borgstelling alléén als de leerling het geschil aanhangig heeft gemaakt bij de geschillencommissie vóórdat van een dergelijke situatie sprake is.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Artikel 8: Vrijwaring</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
              <li>De verkeersschool vrijwaart de leerling voor aanspraken van derden als gevolg van botsing, aan- of overrijdingen tijdens de rijles evenals tijdens het onderzoek met uitzondering van die voorvallen die het gevolg zijn van opzet en/of grove schuld van de leerling, evenals het gebruik door de leerling van alcohol, verdovende middelen of geneesmiddelen die de rijvaardigheid beïnvloeden.</li>
              <li>Indien de leerling, ondanks zijn/haar verklaring dat hem/haar bij rechterlijke uitspraak niet de bevoegdheid is ontzegd motorvoertuigen te besturen noch zijn/ haar rijbewijs is ingevorderd, toch rijles neemt, dan wel indien de opgave onjuist zou zijn, vrijwaart de leerling de verkeersschool volledig en zal eventueel ter zake de opgelegde boetes geheel vergoeden, evenals alle andere financiële consequenties geheel overnemen.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Artikel 9: Aanvullende voorwaarden</h2>
            <p className="text-sm sm:text-base">
              Lespakketten zijn 12 maanden geldig. Na het vervallen van het lespakket kan er geen aanspraak meer worden gedaan op examens/rijlessen en lespakketten die verlopen zijn. Rijlespakketten met korting worden niet terugbetaald. De verkeersschool behoudt zich het recht voor een opleiding c.q. cursus af te zeggen of te verplaatsen om moverende redenen.
            </p>
            <p className="mt-4 text-sm sm:text-base">
              <strong>Rijschool Safe</strong><br />
              Gerbrandylaan 13<br />
              4571TW Axel<br />
              Tel: 06 40146812<br />
              info@rijschoolsafe.nl<br />
              www.rijschoolsafe.nl<br />
              IBAN: NL95KNAB 0259 6894 08
            </p>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}
