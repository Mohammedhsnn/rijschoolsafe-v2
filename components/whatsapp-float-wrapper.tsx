"use client"

import dynamic from "next/dynamic"

const WhatsAppFloat = dynamic(
  () => import("@/components/whatsapp-float").then((m) => ({ default: m.WhatsAppFloat })),
  { ssr: false }
)

export function WhatsAppFloatWrapper() {
  return <WhatsAppFloat />
}
