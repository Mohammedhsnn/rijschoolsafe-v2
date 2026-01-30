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
      title: "Proefles",
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
      description: "Begin met een proefles van 50 minuten inclusief evaluatiegesprek.",
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
        <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24 bg-gradient-to-br from-white via-orange-50/30 to-white">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%23ea580c\' fillOpacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            {/* Large SAFE watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
              <div className="text-[12rem] sm:text-[18rem] lg:text-[24rem] font-bold text-primary select-none tracking-tight">SAFE</div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 sm:w-72 sm:h-72 bg-orange-200/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Car className="w-4 h-4" />
                CBR Erkende Rijschool
              </div>

              <h1
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight text-balance animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Jouw Rijbewijs,
                <br />
                <span className="text-primary">Onze Expertise</span>
              </h1>

              <p
                className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-pretty max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Van proefles tot rijbewijs. Persoonlijke begeleiding, flexibele lestijden en een hoog slagingspercentage.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto shadow-lg shadow-primary/25"
                  asChild
                >
                  <Link href="/contact">
                    Proefles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto bg-transparent"
                  asChild
                >
                  <Link href="/prijzen">Bekijk Pakketten</Link>
                </Button>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10 sm:mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">70%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Slagingspercentage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">250+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Geslaagde Leerlingen</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">9+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Jaar Ervaring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Les Types */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Ons Les Aanbod</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Van proefles tot complete lespakketten. Kies wat bij jou past.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {lesTypes.map((type, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <type.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl">{type.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <ul className="space-y-2 sm:space-y-3">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
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
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Hoe Werken Wij?</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Van eerste les tot rijbewijs in 5 stappen
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 sm:space-y-8">
                {process.map((item, index) => (
                  <div key={index} className="flex gap-4 sm:gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg sm:text-2xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/contact">Start Nu Met Een Proefles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Klaar Om Te Beginnen?</h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Neem contact op voor een proefles of bekijk onze voordelige lespakketten.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                <Link href="/contact">Proefles</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent w-full sm:w-auto"
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
