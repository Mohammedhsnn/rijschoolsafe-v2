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
        <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/20">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Abstract shapes */}
            <div className="absolute top-1/4 right-10 w-20 h-20 sm:w-32 sm:h-32 border-4 border-primary/10 rounded-full" />
            <div className="absolute bottom-1/4 left-10 w-16 h-16 sm:w-24 sm:h-24 border-4 border-primary/10 rounded-lg rotate-45" />
            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary/20 rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary/15 rounded-full" />
            {/* Gradient orbs */}
            <div className="absolute -top-32 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-32 left-1/4 w-64 h-64 bg-gradient-to-tr from-orange-100/50 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Award className="w-4 h-4" />
                Gediplomeerd Rij-instructeur
              </div>

              <h1
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight text-balance animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Passie voor
                <br />
                <span className="text-primary">Verkeersveiligheid</span>
              </h1>

              <p
                className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-pretty max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Met toewijding en expertise begeleid ik elke leerling naar een veilig en zelfverzekerd rijbewijs. 
                Persoonlijke aandacht staat bij mij voorop.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto shadow-lg shadow-primary/25"
                  asChild
                >
                  <Link href="/contact">
                    Maak Kennis
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

              {/* Mission statement card */}
              <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <p className="text-sm sm:text-base text-muted-foreground italic">
                  "Mijn missie is om elke leerling niet alleen te leren rijden, maar ook om een veilige en verantwoordelijke verkeersdeelnemer te worden."
                </p>
                <p className="text-primary font-semibold mt-3">— Henry Rojer</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">Over Mijzelf</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
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
              <div className="mt-6 sm:mt-8 text-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Neem Contact Op</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Onze Kernwaarden</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">Wat Rijschool Safe uniek maakt</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <value.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">{value.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">70%</div>
                <div className="text-xs sm:text-base lg:text-lg text-muted-foreground">Slagingspercentage</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">250+</div>
                <div className="text-xs sm:text-base lg:text-lg text-muted-foreground">Geslaagde Leerlingen</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">9+</div>
                <div className="text-xs sm:text-base lg:text-lg text-muted-foreground">Jaar Ervaring</div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
