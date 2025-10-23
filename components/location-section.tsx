"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Onde <span className="text-primary">Estamos</span>
          </h2>
          <p className="text-lg text-muted-foreground">Venha nos visitar e conhecer nossa estrutura</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-lg overflow-hidden border-2 border-border h-[500px] mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.2!2d-35.26!3d-5.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNTQnMzkuNiJTIDM1wrAxNSczNi4wIlc!5e0!3m2!1sen!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização VIRTUS Cross Training"
            />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-2 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <MapPin className="h-4 w-4 text-primary" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Av. Maria Lacerda Montenegro, 2475
                  <br />
                  Nova Parnamirim, Parnamirim - RN
                  <br />
                  CEP: 59152-600, Brasil
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Clock className="h-4 w-4 text-primary" />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Segunda a Sexta: 05:00 - 10:00 | 16:00 - 21:30
                  <br />
                  Sábado: 07:00 - 10:30
                  <br />
                  Domingo: Fechado
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Phone className="h-4 w-4 text-primary" />
                  Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Telefone: (84) 9999-9999
                  <br />
                  WhatsApp: (84) 9999-9999
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Mail className="h-4 w-4 text-primary" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-muted-foreground text-sm">contato@virtuscrosstraining.com.br</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
