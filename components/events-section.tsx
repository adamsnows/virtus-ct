import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Trophy, Users } from "lucide-react"
import Image from "next/image"

const events = [
  {
    type: "Campeonato",
    title: "VIRTUS Open 2025",
    date: "15 de Março, 2025",
    description: "Competição interna para todos os níveis. Venha testar seus limites!",
    image: "/cross-training-competition-event.jpg",
    icon: Trophy,
  },
  {
    type: "Evento",
    title: "Workshop de Ginástica",
    date: "22 de Março, 2025",
    description: "Aprenda técnicas avançadas de ginástica com nossos coaches especializados.",
    image: "/gymnastics-workshop-training.jpg",
    icon: Users,
  },
  {
    type: "Campeonato",
    title: "Desafio LPO",
    date: "5 de Abril, 2025",
    description: "Competição de levantamento de peso olímpico. Mostre sua força!",
    image: "/placeholder.svg?height=400&width=600",
    icon: Trophy,
  },
]

export function EventsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Eventos e <span className="text-primary">Campeonatos</span>
          </h2>
          <p className="text-lg text-muted-foreground">Participe de competições, workshops e eventos especiais</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-colors duration-300">
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <event.icon className="h-4 w-4" />
                  {event.type}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-base">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                <Button className="w-full bg-primary hover:bg-primary-dark text-black font-semibold">Saiba Mais</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
