"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Neem <span className="text-primary">Contact</span> Op
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Heb je vragen of wil je een proefles boeken? Neem gerust contact met ons op!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <div className="mb-6 sm:mb-8">
              <ContactForm />
              <p className="mt-3 text-sm text-muted-foreground">
                Na het versturen word je doorgestuurd naar onze{" "}
                <Link href="/contact/dankjewel" className="text-primary hover:underline font-medium">
                  bevestigingspagina
                </Link>
                .
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="p-4 sm:p-6">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 sm:mb-3" />
                    <h3 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="h-[400px] sm:h-[500px] lg:h-full lg:min-h-[600px]">
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
