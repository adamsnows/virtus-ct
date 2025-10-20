"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Onde <span className="text-primary">Estamos</span>
          </h2>
          <p className="text-lg text-muted-foreground">Venha nos visitar e conhecer nossa estrutura</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-lg overflow-hidden border-2 border-border h-[400px]">
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
          <div className="space-y-4">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Av. Maria Lacerda Montenegro, 2475
                  <br />
                  Nova Parnamirim, Parnamirim - RN
                  <br />
                  CEP: 59152-600, Brasil
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Segunda a Sexta: 05:00 - 10:00 | 16:00 - 21:30
                  <br />
                  Sábado: 07:00 - 10:30
                  <br />
                  Domingo: Fechado
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Contato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Telefone: (84) 9999-9999
                  <br />
                  WhatsApp: (84) 9999-9999
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">contato@virtuscrosstraining.com.br</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
