"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/mercedes-car.jpg" alt="Rijschool Safe" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mt-20 sm:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight text-balance">
            Leren Autorijden?
            <br />
            <span className="text-primary">Dat Kan Met Safe!</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed text-pretty">
            Leren autorijden is een spannende en nieuwe uitdaging, zoals zoveel dingen die je voor het eerst doet. Ik
            help je daar graag bij!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">
                Start Nu
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
              asChild
            >
              <Link href="/lessen">Meer Informatie</Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6">
            {["Ervaren Instructeur", "Flexibele Lestijden"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
