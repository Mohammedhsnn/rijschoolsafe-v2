import { Check, Info, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrijzenPage() {
  const pakketten = [
    {
      name: "Theorie Pakket",
      price: "125",
      description: "Alles wat je nodig hebt voor je theorie-examen",
      features: ["1 Theorieboek", "1 Online Cursus", "1 Theorie Examen"],
      popular: false,
    },
    {
      name: "Basis Pakket",
      price: "1299",
      description: "20 rijlessen om je op weg te helpen",
      features: [
        "20 Rijlessen (50 min)",
        "Optioneel: Tussentijdse Toets (+€275,-)",
        "Optioneel: Praktijk-examen (+€300,-)",
      ],
      popular: false,
    },
    {
      name: "Standaard Pakket",
      price: "1775",
      description: "30 rijlessen voor een solide basis",
      features: [
        "30 Rijlessen (50 min)",
        "Optioneel: Tussentijdse Toets (+€275,-)",
        "Optioneel: Praktijk-examen (+€300,-)",
      ],
      popular: true,
    },
    {
      name: "Uitgebreid Pakket",
      price: "2250",
      description: "40 rijlessen voor extra oefening",
      features: [
        "40 Rijlessen (50 min)",
        "Optioneel: Tussentijdse Toets (+€275,-)",
        "Optioneel: Praktijk-examen (+€300,-)",
      ],
      popular: false,
    },
    {
      name: "Compleet Pakket",
      price: "2525",
      description: "Alles inclusief voor een zorgeloze weg naar je rijbewijs",
      features: ["40 Rijlessen (50 min)", "1 Tussentijdse Toets", "1 Praktijk-examen"],
      popular: false,
    },
    {
      name: "Her-examen Pakket",
      price: "555",
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
        <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 md:pt-20">
          <div className="absolute inset-0 z-0">
            <img src="/modern-car-dashboard.png" alt="Prijzen & Pakketten" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-0">
            <div className="max-w-4xl">
              <div className="inline-block mb-6 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30 animate-fade-in">
                <span className="text-sm font-medium text-white">✓ Transparante Prijzen</span>
              </div>

              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Prijzen &
                <br />
                <span className="text-orange-300">Pakketten</span>
              </h1>

              <p
                className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 leading-relaxed text-pretty max-w-2xl animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Lespakketten op maat. Uiteraard kan je bij ons losse lessen nemen, maar een pakket geeft veel voordelen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
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
                  className="bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 text-base md:text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/lessen">Bekijk Lessen</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Pakketten */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Lespakketten</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Kies het pakket dat bij jou past. Alle pakketten zijn flexibel uit te breiden.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pakketten.map((pakket, index) => (
                <Card
                  key={index}
                  className={`relative border-2 hover:shadow-xl transition-all ${pakket.popular ? "border-primary shadow-lg" : "hover:border-primary/50"}`}
                >
                  {pakket.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Populair</Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{pakket.name}</CardTitle>
                    <CardDescription className="text-base">{pakket.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-5xl font-bold">€{pakket.price}</span>
                      <span className="text-muted-foreground">,-</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pakket.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={pakket.popular ? "default" : "outline"} asChild>
                      <Link href="/contact">Kies Dit Pakket</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Losse Prijzen */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Losse Prijzen</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Liever losse lessen of diensten? Bekijk hier onze tarieven.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {lossePrijzen.map((category, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex justify-between items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                        >
                          <span className="text-muted-foreground">{item.name}</span>
                          <span className="font-semibold whitespace-nowrap">{item.price}</span>
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
        <section className="py-20 lg:py-28 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nog Vragen Over Onze Prijzen?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Neem gerust contact op. We helpen je graag bij het kiezen van het juiste pakket.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Neem Contact Op</Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
