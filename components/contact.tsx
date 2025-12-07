"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      details: ["Henry Rojer", "Gerbrandylaan 13", "4571TW Axel"],
    },
    {
      icon: Phone,
      title: "Telefoon",
      details: ["+31 6 40146812"],
    },
    {
      icon: Mail,
      title: "Rijschoolcode",
      details: ["4713U8", "KvK: 75632780"],
    },
    {
      icon: Clock,
      title: "IBAN",
      details: ["NL95 KNAB 0259 6894 08"],
    },
  ]

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Neem <span className="text-primary">Contact</span> Op
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Heb je vragen of wil je een proefles boeken? Neem gerust contact met ons op!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 mb-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Voornaam</label>
                    <Input placeholder="Jouw voornaam" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Achternaam</label>
                    <Input placeholder="Jouw achternaam" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="jouw@email.nl" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefoon</label>
                  <Input type="tel" placeholder="+31 6 12345678" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bericht</label>
                  <Textarea placeholder="Vertel ons waar we je mee kunnen helpen..." rows={5} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Verstuur Bericht
                </Button>
              </form>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="p-6">
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-bold mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="h-full min-h-[600px]">
            <Card className="h-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.8!2d3.9!3d51.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDE2JzEyLjAiTiAzwrA1NCcwMC4wIkU!5e0!3m2!1snl!2snl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rijschool Safe Locatie"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
