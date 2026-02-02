import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { WhatsAppFloatWrapper } from "@/components/whatsapp-float-wrapper"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rijschool Safe - Jouw Betrouwbare Rijschool",
  description: "Leren autorijden is een spannende en nieuwe uitdaging. Rijschool Safe helpt je daar graag bij!",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans?.variable ?? ""} ${geistMono?.variable ?? ""} font-sans`}
        suppressHydrationWarning
      >
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsAppFloatWrapper />
        <Analytics />
      </body>
    </html>
  )
}
