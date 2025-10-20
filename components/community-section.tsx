import { Card, CardContent } from "@/components/ui/card"
import { Users, Trophy, Heart, Zap } from "lucide-react"

const communityFeatures = [
  {
    icon: Users,
    title: "Comunidade Forte",
    description: "Faça parte de uma família que se apoia e cresce junta",
  },
  {
    icon: Trophy,
    title: "Resultados Reais",
    description: "Acompanhe sua evolução e conquiste seus objetivos",
  },
  {
    icon: Heart,
    title: "Ambiente Acolhedor",
    description: "Todos são bem-vindos, independente do nível",
  },
  {
    icon: Zap,
    title: "Energia Contagiante",
    description: "Treinos motivadores que transformam sua rotina",
  },
]

export function CommunitySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossa <span className="text-primary">Comunidade</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais do que um box, somos uma família unida pela paixão por treinar e evoluir
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary transition-colors duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
