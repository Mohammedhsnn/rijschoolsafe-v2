import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bedankt - Rijschool Safe",
  description: "Je bericht is ontvangen. We nemen zo snel mogelijk contact met je op.",
}

export default function DankjewelPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <Card className="border-2 max-w-lg w-full shadow-lg bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
          <CardContent className="pt-10 pb-10 px-6 sm:px-10 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900 dark:text-white">
              Bedankt!
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Je bericht is goed ontvangen. We nemen binnen 24 uur contact met je op.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
              Heb je direct een vraag? Bel ons op{" "}
              <a href="tel:+31640146812" className="text-primary font-medium hover:underline">
                +31 6 40146812
              </a>
              .
            </p>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/">
                Terug naar home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
