import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Route, Gauge } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      title: "Tussentijdse Toets",
      icon: Clock,
      href: "/lessen",
      description:
        "Een tussentijdse toets is een soort proefexamen. De toets duurt even lang als een rijexamen en heeft dezelfde onderdelen.",
      features: [
        "Dezelfde duur als rijexamen",
        "Alle onderdelen worden getest",
        "Tips van een examinator",
        "Voorbereiding op het echte examen",
      ],
    },
    {
      title: "Snelwegtraining",
      icon: Route,
      href: "/lessen",
      description:
        "2 uur alleen snelwegen rijden en niet alleen maar in de buurt (die je waarschijnlijk wel kent) maar ook verder weg.",
      features: [
        "Rijden in de buurt en verder weg",
        "Door de Westerscheldetunnel",
        "In Goes, Middelburg, etc.",
        "Waar de situaties soms complexer zijn",
      ],
    },
    {
      title: "Spoedopleiding",
      icon: Gauge,
      href: "/prijzen",
      description:
        "Wil je graag snel je rijbewijs halen? Dan is onze tien- of vijftiendaagse spoed rijopleiding misschien wel wat voor jou.",
      features: ["Intensieve training", "Snel je rijbewijs halen", "Persoonlijke begeleiding", "Flexibele planning"],
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Onze <span className="text-primary">Diensten</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Verschillende opleidingen en trainingen om jou optimaal voor te bereiden
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-6 sm:p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <div className="flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 text-primary mb-4 sm:mb-6">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base" asChild>
                    <Link href={service.href}>Lees Meer</Link>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
