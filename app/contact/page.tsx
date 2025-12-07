import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefoon",
      content: "+31 6 40146812",
      link: "tel:+31640146812",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@rijschoolsafe.nl",
      link: "mailto:info@rijschoolsafe.nl",
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "Henry Rojer, Gerbrandylaan 13, 4571TW Axel",
      link: "https://maps.google.com/?q=Gerbrandylaan+13+4571TW+Axel",
    },
    {
      icon: Clock,
      title: "Bereikbaarheid",
      content: "Ma-Vr: 09:00 - 20:00",
      link: null,
    },
  ]

  const businessInfo = [
    { label: "Instructeur", value: "Henry Rojer" },
    { label: "KVK", value: "75632780" },
    { label: "Rijschoolcode", value: "4713U8" },
    { label: "IBAN", value: "NL95 KNAB 0259 6894 08" },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 md:pt-20">
          <div className="absolute inset-0 z-0">
            <img src="/contact-communication.jpg" alt="Contact" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-0">
            <div className="max-w-4xl">
              <div className="inline-block mb-6 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30 animate-fade-in">
                <span className="text-sm font-medium text-white">✓ Altijd Bereikbaar</span>
              </div>

              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Neem Contact Op
              </h1>

              <p
                className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 leading-relaxed text-pretty max-w-2xl animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Heb je vragen of wil je een gratis proefles boeken? Neem gerust contact met ons op!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <a href="tel:+31640146812">
                    Bel Direct
                    <Phone className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 text-base md:text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <a href="mailto:info@rijschoolsafe.nl">Stuur Email</a>
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

        {/* Contact Info Cards */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all hover:shadow-lg text-center"
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stuur Een Bericht</h2>
                  <p className="text-lg text-muted-foreground">
                    Vul het formulier in en we nemen zo snel mogelijk contact met je op.
                  </p>
                </div>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Voornaam *</Label>
                          <Input id="firstName" placeholder="Je voornaam" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Achternaam *</Label>
                          <Input id="lastName" placeholder="Je achternaam" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="je@email.nl" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefoon *</Label>
                        <Input id="phone" type="tel" placeholder="+31 6 12345678" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Onderwerp</Label>
                        <Input id="subject" placeholder="Waar gaat je bericht over?" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Bericht *</Label>
                        <Textarea
                          id="message"
                          placeholder="Vertel ons waar we je mee kunnen helpen..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Verstuur Bericht
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map & Business Info */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Locatie & Informatie</h2>
                  <p className="text-lg text-muted-foreground">
                    Rijschool Safe is gevestigd in Axel en actief in de regio Zeeuws-Vlaanderen.
                  </p>
                </div>

                {/* Map */}
                <Card className="border-2 mb-6 overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.123456789!2d3.9!3d51.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDE2JzEyLjAiTiAzwrA1NCcwMC4wIkU!5e0!3m2!1snl!2snl!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                </Card>

                {/* Business Info */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Bedrijfsgegevens</CardTitle>
                    <CardDescription>Officiële informatie Rijschool Safe</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-4">
                      {businessInfo.map((info, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center pb-4 border-b last:border-0 last:pb-0"
                        >
                          <dt className="text-muted-foreground">{info.label}</dt>
                          <dd className="font-semibold text-right">{info.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-primary/5 mt-6">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      Op al onze diensten zijn onze{" "}
                      <a href="#" className="text-primary hover:underline font-medium">
                        leveringsvoorwaarden
                      </a>{" "}
                      van toepassing.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Gratis Proefles?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Wil je kennismaken? Kom dan een gratis proefles doen van 50 minuten, inclusief evaluatiegesprek.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+31640146812">Bel Direct</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <a href="mailto:info@rijschoolsafe.nl">Stuur Email</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
