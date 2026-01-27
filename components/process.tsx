import { Card } from "@/components/ui/card"
import { FileCheck, Car, Award, PartyPopper } from "lucide-react"

export function Process() {
  const steps = [
    {
      number: "16",
      title: "Theorie-examen",
      description: "1,5 jaar geldig",
      details: "Begin met je theorie-examen en leg een solide basis voor je rijvaardigheden.",
      icon: FileCheck,
    },
    {
      number: "16½",
      title: "Praktijklessen + eventueel toets",
      description: "Aanmelding voor 2toDrive",
      details: "Ontvangen begeleiderspas met namen van de coaches. Start met praktijklessen.",
      icon: Car,
    },
    {
      number: "17",
      title: "Praktijk Examen",
      description: "Nadat je geslaagd bent",
      details: "Krijg je een rijbewijs. Samen met je rijbewijs, begeleiderspas en coach mag je oefenen.",
      icon: Award,
    },
    {
      number: "18",
      title: "Zelfst. Autorijden",
      description: "Gefeliciteerd!",
      details:
        "Nu mag je écht alleen autorijden, dus ook zonder coach. Nu kan je ook een auto op je naam laten zetten!",
      icon: PartyPopper,
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Het <span className="text-primary">2toDrive</span> Traject
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Nog geen 18 en nu al beginnen aan je rijbewijs? Dat kan met 2toDrive
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="p-5 sm:p-6 h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 text-primary mb-3 sm:mb-4">
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                      </div>
                      <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{step.number}</div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">{step.description}</p>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed mt-auto">{step.details}</p>
                  </div>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 text-primary">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-xs sm:text-sm italic text-muted-foreground">
            Wil je meer info over 2toDrive? Klik op één van de blokjes hierboven.
          </p>
        </div>
      </div>
    </section>
  )
}
