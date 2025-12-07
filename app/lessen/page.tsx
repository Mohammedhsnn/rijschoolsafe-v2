import { Car, Users, Award, CheckCircle2, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LessenPage() {
  const lesTypes = [
    {
      icon: Car,
      title: "Gratis Proefles",
      description:
        "Wil je kennismaken? Kom dan een proefles doen. Een proefles duurt 50 minuten, inclusief het evaluatiegesprek.",
      features: ["50 minuten rijles", "Evaluatiegesprek", "Kennismaking met instructeur", "Geen verplichtingen"],
    },
    {
      icon: Users,
      title: "Losse Rijlessen",
      description: "Flexibel lessen boeken wanneer het jou uitkomt. Ideaal voor mensen met een drukke agenda.",
      features: ["50 minuten per les", "Flexibel inplannen", "€55,- per les", "Betalen per les mogelijk"],
    },
    {
      icon: Award,
      title: "Lespakketten",
      description:
        "Een pakket geeft je veel voordelen en is voordeliger dan losse lessen. Verschillende pakketten beschikbaar.",
      features: [
        "Voordeliger dan losse lessen",
        "Verschillende pakketten",
        "Inclusief tussentijdse toets",
        "Inclusief praktijkexamen",
      ],
    },
    {
      icon: Calendar,
      title: "2toDrive (16+)",
      description:
        "Nog geen 18 en nu al beginnen aan je rijbewijs? Dat kan met 2toDrive. Begin met theorie op 16 jaar en autorijden als je 16½ bent.",
      features: ["Theorie vanaf 16 jaar", "Rijden vanaf 16½ jaar", "Rijbewijs op je 17e", "Officieel CBR programma"],
    },
  ]

  const process = [
    {
      step: "1",
      title: "Kennismaking",
      description: "Begin met een gratis proefles van 50 minuten inclusief evaluatiegesprek.",
    },
    {
      step: "2",
      title: "Theorie",
      description: "Leer de verkeersregels met ons online theoriepakket en haal je theorie-examen.",
    },
    {
      step: "3",
      title: "Praktijk",
      description: "Volg rijlessen op maat, aangepast aan jouw tempo en leerstijl.",
    },
    {
      step: "4",
      title: "Tussentijdse Toets",
      description: "Test je vaardigheden met een tussentijdse toets voordat je examen doet.",
    },
    {
      step: "5",
      title: "Rijexamen",
      description: "Doe je praktijkexamen en haal je rijbewijs!",
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 md:pt-20">
          <div className="absolute inset-0 z-0">
            <img src="/driving-road.jpg" alt="Leren Autorijden" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-0">
            <div className="max-w-4xl">
              <div className="inline-block mb-6 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30 animate-fade-in">
                <span className="text-sm font-medium text-white">✓ Flexibel & Op Maat</span>
              </div>

              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Leren Autorijden
                <br />
                <span className="text-orange-300">Met Henry</span>
              </h1>

              <p
                className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 leading-relaxed text-pretty max-w-2xl animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Leren autorijden is een spannende en nieuwe uitdaging. Ik help je daar graag bij met geduld en
                professionele begeleiding.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">
                    Gratis Proefles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 text-base md:text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/prijzen">Bekijk Pakketten</Link>
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

        {/* Les Types */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ons Les Aanbod</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Van gratis proefles tot complete lespakketten. Kies wat bij jou past.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {lesTypes.map((type, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <type.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Hoe Werken Wij?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Van eerste les tot rijbewijs in 5 stappen
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {process.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-lg text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/contact">Start Nu Met Een Proefles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Klaar Om Te Beginnen?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Neem contact op voor een gratis proefles of bekijk onze voordelige lespakketten.
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
                <Link href="/prijzen">Bekijk Prijzen</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
