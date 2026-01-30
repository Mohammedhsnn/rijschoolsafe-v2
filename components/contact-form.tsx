"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojwpvan"

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        window.location.href = "/contact/dankjewel"
        return
      }
      const data = await res.json().catch(() => ({}))
      setError(data.error || "Er ging iets mis. Probeer het later opnieuw.")
    } catch {
      setError("Er ging iets mis. Controleer je internet en probeer het opnieuw.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className="border-2">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Anti-spam: Formspree negeert dit veld */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Voornaam *</Label>
              <Input
                id="firstName"
                name="voornaam"
                placeholder="Je voornaam"
                required
                disabled={submitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Achternaam *</Label>
              <Input
                id="lastName"
                name="achternaam"
                placeholder="Je achternaam"
                required
                disabled={submitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="je@email.nl"
              required
              disabled={submitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefoon *</Label>
            <Input
              id="phone"
              type="tel"
              name="telefoon"
              placeholder="+31 6 12345678"
              required
              disabled={submitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Onderwerp</Label>
            <Input
              id="subject"
              name="onderwerp"
              placeholder="Waar gaat je bericht over?"
              disabled={submitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Bericht *</Label>
            <Textarea
              id="message"
              name="bericht"
              placeholder="Vertel ons waar we je mee kunnen helpen..."
              rows={6}
              required
              disabled={submitting}
            />
          </div>

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={submitting}
          >
            <Send className="w-5 h-5 mr-2" />
            {submitting ? "Bezig met versturen..." : "Verstuur Bericht"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
