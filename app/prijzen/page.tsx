// Prijzenpagina - Rijschool Safe (test commit)
import { Check, Info, ArrowRight, Euro, Gift, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrijzenPage() {
  const pakketten = [
    {
      name: "Theorie Auto (B)",
      price: "135",
      description: "Alles wat je nodig hebt voor je theorie-examen",
      features: ["1 Theorieboek", "1 Online Cursus", "1 Theorie Examen"],
      popular: false,
    },
    {
      name: "Startpakket Auto (B)",
      price: "1415",
      description: "20 rijlessen om je op weg te helpen",
      features: [
        "20 Rijlessen (50 min)",
        "1 Praktijk-examen",
        "Optioneel: Tussentijdse Toets (+€275,-)",
      ],
      popular: false,
    },
    {
      name: "30 Lessenpakket",
      price: "1950",
      description: "30 rijlessen voor een solide basis",
      features: [
        "30 Rijlessen (50 min)",
        "1 Praktijk-examen",
        "Optioneel: Tussentijdse Toets (+€275,-)",
      ],
      popular: true,
    },
    {
      name: "40 Lessenpakket",
      price: "2465",
      description: "40 rijlessen voor extra oefening",
      features: [
        "40 Rijlessen (50 min)",
        "1 Praktijk-examen",
        "Optioneel: Tussentijdse Toets (+€275,-)",
      ],
      popular: false,
    },
    {
      name: "All-In Pakket",
      price: "2740",
      description: "Alles inclusief voor een zorgeloze weg naar je rijbewijs",
      features: ["40 Rijlessen (50 min)", "1 Tussentijdse Toets", "1 Praktijk-examen"],
      popular: false,
    },
    {
      name: "Her-Examenpakket",
      price: "585",
      description: "Extra voorbereiding voor je volgende examen",
      features: ["5 Rijlessen (50 min)", "1 Her-examen"],
      popular: false,
    },
  ]

  const lossePrijzen = [
    {
      category: "Theorie",
      items: [
        { name: "Theorie B online", price: "€59,-" },
        { name: "Theorie B online pakket", price: "€115,-" },
        { name: "Theorie Examen", price: "€55,-" },
      ],
    },
    {
      category: "Praktijk",
      items: [
        { name: "Losse rijles (50 min)", price: "€55,-" },
        { name: "10 lessen (50 min)", price: "€525,-" },
      ],
    },
    {
      category: "Toetsing/Examens",
      items: [
        { name: "Praktijk Examen", price: "€300,-" },
        { name: "Her-examen", price: "€300,-" },
        { name: "Tussentijdse Toets", price: "€275,-" },
        { name: "Faalangst-Examen", price: "€385,-" },
        { name: "Bnor/Staatsexamen", price: "€350,-" },
      ],
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24 bg-gradient-to-br from-white via-green-50/30 to-orange-50/20">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ea580c 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            {/* Decorative price tags */}
            <div className="absolute top-24 right-10 sm:right-20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-primary/20 rounded-full flex items-center justify-center rotate-12">
                <Euro className="w-5 h-5 sm:w-6 sm:h-6 text-primary/30" />
              </div>
            </div>
            <div className="absolute bottom-24 left-10 sm:left-20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-green-500/20 rounded-lg flex items-center justify-center -rotate-12">
                <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-green-500/30" />
              </div>
            </div>
            <div className="absolute top-1/3 left-1/4 hidden lg:block">
              <div className="w-10 h-10 border-2 border-primary/15 rounded-full" />
            </div>
            <div className="absolute bottom-1/3 right-1/4 hidden lg:block">
              <div className="w-8 h-8 bg-green-500/10 rounded-lg rotate-45" />
            </div>
            {/* Gradient orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-100/40 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Value badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Gift className="w-4 h-4" />
                Voordelige Lespakketten
              </div>

              <h1
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight text-balance animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Transparante
                <br />
                <span className="text-primary">Prijzen</span>
              </h1>

              <p
                className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-pretty max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Geen verborgen kosten. Kies een pakket of losse lessen - altijd de beste prijs-kwaliteitverhouding.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto shadow-lg shadow-primary/25"
                  asChild
                >
                  <Link href="/contact">
                    Kies Je Pakket
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto bg-transparent"
                  asChild
                >
                  <Link href="/lessen">Bekijk Lessen</Link>
                </Button>
              </div>

              {/* Price highlights */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 sm:mt-12 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-primary/10 shadow-sm">
                  <p className="text-lg sm:text-2xl font-bold text-primary">Vanaf</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">€135,- theorie</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-green-500/20 shadow-sm">
                  <p className="text-lg sm:text-2xl font-bold text-green-600">Gratis</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Proefles</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-primary/10 shadow-sm">
                  <p className="text-lg sm:text-2xl font-bold text-primary">6</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Pakketten</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pakketten */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Lespakketten</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Kies het pakket dat bij jou past. Alle pakketten zijn flexibel uit te breiden.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {pakketten.map((pakket, index) => (
                <Card
                  key={index}
                  className={`relative border-2 hover:shadow-xl transition-all ${pakket.popular ? "border-primary shadow-lg" : "hover:border-primary/50"}`}
                >
                  {pakket.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-xs sm:text-sm">Populair</Badge>
                  )}
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl">{pakket.name}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{pakket.description}</CardDescription>
                    <div className="pt-3 sm:pt-4">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">€{pakket.price}</span>
                      <span className="text-muted-foreground">,-</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <ul className="space-y-2 sm:space-y-3">
                      {pakket.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <Button className="w-full text-sm sm:text-base" variant={pakket.popular ? "default" : "outline"} asChild>
                      <Link href="/contact">Kies Dit Pakket</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Losse Prijzen */}
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Losse Prijzen</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Liever losse lessen of diensten? Bekijk hier onze tarieven.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {lossePrijzen.map((category, index) => (
                <Card key={index} className="border-2">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <ul className="space-y-3 sm:space-y-4">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex justify-between items-start gap-2 sm:gap-4 pb-3 sm:pb-4 border-b last:border-0 last:pb-0"
                        >
                          <span className="text-xs sm:text-sm text-muted-foreground">{item.name}</span>
                          <span className="text-sm sm:text-base font-semibold whitespace-nowrap">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-xl mb-2">Betaalinformatie</CardTitle>
                      <CardDescription className="text-base text-foreground/80">
                        Bovenstaande tarieven dienen vooraf betaald te worden. Je kan de rijlessen op verschillende
                        manieren betalen:
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 ml-9">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600" />
                      <span>Contant per les</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600" />
                      <span>Op rekening per 10 rijlessen</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600" />
                      <span>Per pakket</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600" />
                      <span>Via de rijschool app kan je zelf de lessen aankopen of je pakket uitbreiden</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 max-w-3xl mx-auto">
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80">
                      <strong>BNOR/Staatsexamen:</strong> Wanneer je binnen vijf jaar vier keer bent gezakt voor het CBR
                      rijexamen ga je de volgende keer naar een BNOR examen, ook wel bekend als het staatsexamen.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Nog Vragen Over Onze Prijzen?</h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Neem gerust contact op. We helpen je graag bij het kiezen van het juiste pakket.
            </p>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
              <Link href="/contact">Neem Contact Op</Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
