import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, Heart, Target, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function HetBedrijfPage() {
  const values = [
    {
      icon: Heart,
      title: "Persoonlijke Aandacht",
      description: "Elke leerling is uniek en krijgt een op maat gemaakte aanpak",
    },
    {
      icon: Target,
      title: "Resultaatgericht",
      description: "Gericht op het behalen van je rijbewijs met een hoog slagingspercentage",
    },
    {
      icon: Award,
      title: "Ervaring",
      description: "Jarenlange ervaring in het opleiden van nieuwe bestuurders",
    },
    {
      icon: Users,
      title: "Geduldig & Professioneel",
      description: "Een rustige en professionele aanpak voor het beste leerresultaat",
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 md:pt-20">
          <div className="absolute inset-0 z-0">
            <img
              src="/modern-driving-school-car-on-scenic-road-with-suns.jpg"
              alt="Rijschool Safe"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-0">
            <div className="max-w-4xl">
              <div className="inline-block mb-6 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30 animate-fade-in">
                <span className="text-sm font-medium text-white">✓ Persoonlijk & Professioneel</span>
              </div>

              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Over Rijschool Safe
                <br />
                <span className="text-orange-300">Henry Rojer</span>
              </h1>

              <p
                className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 leading-relaxed text-pretty max-w-2xl animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Meer dan 10 jaar ervaring in het opleiden van veilige en zelfverzekerde bestuurders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">
                    Neem Contact Op
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

        {/* About Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Over Mijzelf</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Mijn naam is Henry Rojer en ik ben de eigenaar van Rijschool Safe. Ik ben een gediplomeerd
                    rij-instructeur met jarenlange ervaring in het opleiden van nieuwe bestuurders.
                  </p>
                  <p>
                    Leren autorijden is een spannende en nieuwe uitdaging, zoals zoveel dingen die je voor het eerst
                    doet. Ik help je daar graag bij! Met geduld, professionaliteit en persoonlijke aandacht begeleid ik
                    je naar je rijbewijs.
                  </p>
                  <p>
                    Bij Rijschool Safe staat jouw ontwikkeling centraal. Elke leerling is uniek en krijgt daarom een op
                    maat gemaakte aanpak. Of je nu net begint of al wat ervaring hebt, samen werken we aan jouw
                    rijvaardigheid en zelfvertrouwen achter het stuur.
                  </p>
                </div>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/contact">Neem Contact Op</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/modern-driving-school-car-on-scenic-road-with-suns.jpg"
                    alt="Rijschool Safe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl">
                  <div className="text-5xl font-bold">10+</div>
                  <div className="text-lg">Jaar Ervaring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Onze Kernwaarden</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Wat Rijschool Safe uniek maakt</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">95%</div>
                <div className="text-xl text-muted-foreground">Slagingspercentage</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">500+</div>
                <div className="text-xl text-muted-foreground">Geslaagde Leerlingen</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">10+</div>
                <div className="text-xl text-muted-foreground">Jaar Ervaring</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Klaar Om Te Beginnen?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Neem contact op voor een gratis proefles en ontdek hoe ik jou kan helpen aan je rijbewijs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Gratis Proefles</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/lessen">Bekijk Lessen</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
