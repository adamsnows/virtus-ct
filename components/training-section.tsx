import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Activity, Zap, Target, Users, ArrowRight } from "lucide-react"

const trainings = [
  {
    icon: Dumbbell,
    title: "Cross Training",
    description: "Treinos funcionais de alta intensidade que combinam força, resistência e condicionamento.",
    gradient: "from-primary/20 to-cyan-500/20",
  },
  {
    icon: Activity,
    title: "Ginástica",
    description: "Desenvolva controle corporal, flexibilidade e movimentos complexos.",
    gradient: "from-purple-500/20 to-primary/20",
  },
  {
    icon: Zap,
    title: "LPO",
    description: "Levantamento de Peso Olímpico para força e potência explosiva.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Target,
    title: "Calistenia",
    description: "Treinamento com peso corporal para força funcional e controle.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Users,
    title: "Maromba",
    description: "Musculação funcional focada em hipertrofia e desenvolvimento muscular.",
    gradient: "from-red-500/20 to-rose-500/20",
  },
]

export function TrainingSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              Nossos Treinos
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-balance leading-tight">
            Modalidades de <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">Treino</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Agenda completa e robusta para você se desenvolver em múltiplas modalidades
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {trainings.map((training, index) => (
            <Card
              key={index}
              className="group border-2 border-border/50 hover:border-primary/50 transition-all duration-500 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden relative"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${training.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <training.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {training.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed mb-4">
                  {training.description}
                </CardDescription>
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-semibold">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
