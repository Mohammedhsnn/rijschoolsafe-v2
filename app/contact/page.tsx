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
        <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24 bg-gradient-to-br from-white via-slate-50/50 to-orange-50/30">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Dot pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ea580c 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 sm:right-20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-primary/20 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary/30" />
              </div>
            </div>
            <div className="absolute bottom-20 left-10 sm:left-20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-primary/20 rounded-lg flex items-center justify-center rotate-12">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary/30" />
              </div>
            </div>
            <div className="absolute top-1/3 left-1/4 hidden lg:block">
              <div className="w-10 h-10 border-2 border-primary/15 rounded-full" />
            </div>
            {/* Gradient orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Friendly badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Clock className="w-4 h-4" />
                Snel Antwoord Gegarandeerd
              </div>

              <h1
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight text-balance animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Laten We
                <br />
                <span className="text-primary">Kennismaken!</span>
              </h1>

              <p
                className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-pretty max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Klaar om te starten? Bel, mail of vul het formulier in. Ik reageer binnen 24 uur!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto shadow-lg shadow-primary/25"
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
                  className="border-primary text-primary hover:bg-primary hover:text-white text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto bg-transparent"
                  asChild
                >
                  <a href="mailto:info@rijschoolsafe.nl">Stuur Email</a>
                </Button>
              </div>

              {/* Contact info cards row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-10 sm:mt-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 shadow-sm">
                  <Phone className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium">+31 6 40146812</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 shadow-sm">
                  <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium">Axel, Zeeland</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 shadow-sm col-span-2 sm:col-span-1">
                  <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium">Ma-Vr: 09:00-20:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-20">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all hover:shadow-lg text-center"
                >
                  <CardHeader className="p-3 sm:p-6">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                      <info.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <CardTitle className="text-sm sm:text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-words"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm text-muted-foreground">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Stuur Een Bericht</h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
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
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Locatie & Informatie</h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
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
        <section className="py-12 sm:py-16 lg:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Gratis Proefles?</h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Wil je kennismaken? Kom dan een gratis proefles doen van 50 minuten, inclusief evaluatiegesprek.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                <a href="tel:+31640146812">Bel Direct</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent w-full sm:w-auto"
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
