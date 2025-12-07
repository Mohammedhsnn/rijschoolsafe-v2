import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Emma van der Berg",
      rating: 5,
      text: "Er word aandachtig tijd besteed aan hoe je de handelingen tot je neemt en daarna ook aan je tekortkomingen. Rijschool waar je daadwerkelijk het examen in één keer haalt nadat je het gevoel hebt gehaald! Heel erg bedankt!",
    },
    {
      name: "Lars Janssen",
      rating: 5,
      text: "Communicatie, Kwaliteit, Professionaliteit, Waarde. Ik heb mijn rijbewijs gehaald bij Rijschool Safe en ben zeer tevreden. De lessen waren leerzaam en de instructeur was geduldig en professioneel.",
    },
    {
      name: "Sophie Vermeulen",
      rating: 5,
      text: "Top rijschool! Henry is een uitstekende instructeur die rustig en duidelijk uitlegt. Dankzij hem heb ik mijn rijbewijs in één keer gehaald. Aanrader!",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Wat Onze <span className="text-primary">Leerlingen</span> Zeggen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Lees de ervaringen van onze geslaagde leerlingen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="font-semibold">{testimonial.name}</div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="font-bold text-lg">4.9</span>
            <span className="text-muted-foreground">uit 5 sterren op basis van 50+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
