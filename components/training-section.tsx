import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Activity, Zap, Target, Users } from "lucide-react"

const trainings = [
  {
    icon: Dumbbell,
    title: "Cross Training",
    description: "Treinos funcionais de alta intensidade que combinam força, resistência e condicionamento.",
  },
  {
    icon: Activity,
    title: "Ginástica",
    description: "Desenvolva controle corporal, flexibilidade e movimentos complexos.",
  },
  {
    icon: Zap,
    title: "LPO",
    description: "Levantamento de Peso Olímpico para força e potência explosiva.",
  },
  {
    icon: Target,
    title: "Calistenia",
    description: "Treinamento com peso corporal para força funcional e controle.",
  },
  {
    icon: Users,
    title: "Maromba",
    description: "Musculação funcional focada em hipertrofia e desenvolvimento muscular.",
  },
]

export function TrainingSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Modalidades de <span className="text-primary">Treino</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agenda completa e robusta para você se desenvolver em múltiplas modalidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trainings.map((training, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors duration-300 bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <training.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{training.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{training.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
