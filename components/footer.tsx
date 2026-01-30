import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const footerLinks = {
    Navigatie: [
      { label: "Home", href: "/" },
      { label: "Lessen", href: "/lessen" },
      { label: "Het Bedrijf", href: "/het-bedrijf" },
      { label: "Prijzen", href: "/prijzen" },
      { label: "Contact", href: "/contact" },
    ],
    Diensten: [
      { label: "Rijlessen", href: "/lessen" },
      { label: "2toDrive", href: "/lessen" },
      { label: "Tussentijdse Toets", href: "/lessen" },
      { label: "Snelwegtraining", href: "/lessen" },
    ],
    Informatie: [
      { label: "Tarieven", href: "/prijzen" },
      { label: "Pakketten", href: "/prijzen" },
      { label: "Leveringsvoorwaarden", href: "/leveringsvoorwaarden" },
    ],
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              <span className="text-secondary-foreground">RIJSCHOOL</span>
              <span className="text-primary">SAFE</span>
            </div>
            <p className="text-sm sm:text-base text-secondary-foreground/80 mb-4 sm:mb-6 leading-relaxed">
              Jouw betrouwbare rijschool in Axel en omgeving. Wij helpen je graag om veilig en zelfverzekerd de weg op
              te gaan.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:+31640146812"
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>+31 6 40146812</span>
              </a>
              <a
                href="mailto:info@rijschoolsafe.nl"
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>info@rijschoolsafe.nl</span>
              </a>
            </div>
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">{title}</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-xs sm:text-sm text-secondary-foreground/60">
              © 2025 Rijschool Safe. Alle rechten voorbehouden.
            </p>
            <p className="text-xs text-secondary-foreground/50">
              Gemaakt door{" "}
              <a 
                href="https://www.articxsoftware.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Articx Software
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
