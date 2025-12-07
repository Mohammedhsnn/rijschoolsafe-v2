import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Route, Gauge } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Tussentijdse Toets",
      icon: Clock,
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
      description:
        "Wil je graag snel je rijbewijs halen? Dan is onze tien- of vijftiendaagse spoed rijopleiding misschien wel wat voor jou.",
      features: ["Intensieve training", "Snel je rijbewijs halen", "Persoonlijke begeleiding", "Flexibele planning"],
    },
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Onze <span className="text-primary">Diensten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Verschillende opleidingen en trainingen om jou optimaal voor te bereiden
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <div className="flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">Lees Meer</Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
