"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Loader2, Mail, MapPin, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    })

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <section id="contact" className="py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contato</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tem um projeto em mente? Entre em contato para conversarmos sobre como posso ajudar.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Como posso ajudar?" rows={5} required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting || isSubmitted}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Enviado!
                    </>
                  ) : (
                    "Enviar mensagem"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Informações de contato</h3>
            <p className="text-muted-foreground">
              Estou disponível para projetos freelance, oportunidades de trabalho ou apenas para trocar ideias sobre
              desenvolvimento web.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">fernandotekisa@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">(+244) 954-019-935</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Localização</p>
                <p className="text-sm text-muted-foreground">Luanda, Angola</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
