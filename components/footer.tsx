import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const footerLinks = {
    Navigatie: [
      { label: "Home", href: "#home" },
      { label: "Over Ons", href: "#about" },
      { label: "Diensten", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    Diensten: [
      { label: "Rijlessen", href: "#services" },
      { label: "2toDrive", href: "#services" },
      { label: "Tussentijdse Toets", href: "#services" },
      { label: "Snelwegtraining", href: "#services" },
    ],
    Informatie: [
      { label: "Tarieven", href: "#pricing" },
      { label: "Pakketten", href: "#pricing" },
      { label: "Leveringsvoorwaarden", href: "#" },
      { label: "Privacyverklaring", href: "#" },
    ],
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-secondary-foreground">RIJSCHOOL</span>
              <span className="text-primary">SAFE</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Jouw betrouwbare rijschool in Axel en omgeving. Wij helpen je graag om veilig en zelfverzekerd de weg op
              te gaan.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+31640146812"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+31 6 40146812</span>
              </a>
              <a
                href="mailto:info@rijschoolsafe.nl"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@rijschoolsafe.nl</span>
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">© 2025 Rijschool Safe. Alle rechten voorbehouden.</p>
            <p className="text-sm text-secondary-foreground/60">
              IBAN: NL95 KNAB 0259 6894 08 | KvK: 75632780 | Rijschoolcode: 4713U8
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
