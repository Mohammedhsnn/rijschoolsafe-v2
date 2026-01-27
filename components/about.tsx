import { Card } from "@/components/ui/card"
import { Users, Trophy, Heart, Star } from "lucide-react"

export function About() {
  const stats = [
    { icon: Users, value: "200+", label: "Geslaagde Leerlingen" },
    { icon: Trophy, value: "70%", label: "Slagingspercentage" },
    { icon: Heart, value: "9+", label: "Jaar Ervaring" },
    { icon: Star, value: "4.7", label: "Gemiddelde Beoordeling" },
  ]

  return (
    <section id="about" className="hidden md:block py-16 sm:py-20 lg:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Over <span className="text-primary">Mijzelf</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                Mijn naam is Henry Rojer. Op 12 aug 2019 begon ik mijn eigen rijschool in Axel. Hiervoor was ik werkzaam
                bij de grootste rijschool van Terneuzen, waar ik veel heb mogen bijleren.
              </p>
              <p>
                Het doel van mijn rijschool is het aanleren van goed rijgedrag en het laten behalen van het B-rijbewijs
                door jong en oud. Ook jongeren die de leeftijd van 16.5 jaar hebben behaald zitten bij mij goed. Zij
                beginnen met rijles en vanaf hun 17e verjaardag mogen zij opgaan voor hun rijbewijs, mits ze daar goed
                genoeg voor rijden.
              </p>
              <p>
                Mensen met faalangst, maar ook mensen met een lichte verstandelijke beperking zijn van harte welkom om
                bij mij hun lessen te volgen.
              </p>
              <p className="font-semibold text-primary">Een dame of heer in het verkeer</p>
              <p>
                Leren autorijden kan stress veroorzaken, maar hier bij Rijschool Safe zien we dat toch anders. Ik geloof
                dat leren autorijden een spannende, nieuwe uitdaging moet zijn, zoals zoveel dingen die je voor het
                eerst doet. Het is mijn taak de weg voor je vrij te maken zodat jij met vertrouwen achter het stuur kunt
                kruipen.
              </p>
              <p>
                Ik geef les aan beginnelingen, maar ook aan leerlingen van alle leeftijden en ervaringsniveau's die
                veiliger de weg op willen. Buiten de nieuwe bestuurders leren hoe je leuk en veilig kunt rijden, doen we
                ook opfris cursussen en snelwegtrainingen.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-background/10 backdrop-blur-sm rounded-xl border border-primary/20">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Henry Rojer</h3>
                  <p className="text-sm sm:text-base text-secondary-foreground/80">Rijinstructeur & Eigenaar</p>
                  <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-secondary-foreground/70">
                    KvK: 75632780 | Rijschoolcode: 4713U8
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={index}
                  className="p-5 sm:p-6 text-center bg-background hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-3 sm:mb-4" />
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
