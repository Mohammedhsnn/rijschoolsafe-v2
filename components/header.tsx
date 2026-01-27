"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Pages with dark hero backgrounds that need white text
  const darkHeroPages = ["/"]
  const hasDarkHero = darkHeroPages.includes(pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Lessen", href: "/lessen" },
    { label: "Het Bedrijf", href: "/het-bedrijf" },
    { label: "Prijzen", href: "/prijzen" },
    { label: "Contact", href: "/contact" },
  ]

  // Determine text colors based on scroll state and hero background
  const getNavTextClass = () => {
    if (isScrolled) {
      return "text-foreground/80 hover:text-primary"
    }
    return hasDarkHero ? "text-white hover:text-primary" : "text-foreground/80 hover:text-primary"
  }

  const getLogoClass = () => {
    if (isScrolled) {
      return { rijschool: "text-secondary", safe: "text-primary" }
    }
    return hasDarkHero 
      ? { rijschool: "text-white/80", safe: "text-primary" }
      : { rijschool: "text-secondary", safe: "text-primary" }
  }

  const logoColors = getLogoClass()

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="text-lg md:text-2xl font-bold group-hover:text-primary transition-colors">
                <span className={`${logoColors.rijschool} transition-colors`}>RIJSCHOOL</span>
                <span className={`${logoColors.safe} transition-colors`}>SAFE</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative group ${getNavTextClass()}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+31640146812"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${getNavTextClass()}`}
              >
                <Phone className="h-4 w-4" />
                +31 6 40146812
              </a>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-shadow"
                asChild
              >
                <Link href="/contact">Boek een Les</Link>
              </Button>
            </div>

            <button
              className={`md:hidden ${isScrolled || !hasDarkHero ? "text-foreground" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-white">
          <div className="container mx-auto px-4 pt-24 pb-8">
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+31640146812"
                  className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  +31 6 40146812
                </a>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 w-full text-lg py-6"
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contact">Boek een Les</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
