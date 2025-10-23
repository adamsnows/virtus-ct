import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react"

export function CTASection() {
  const benefits = [
    'Treino experimental gratuito',
    'Avaliação física completa',
    'Plano personalizado',
  ];

  return (
    <section className="py-32 text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Comece Agora
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 text-balance leading-tight">
            Pronto para Começar sua{' '}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-primary animate-gradient">
              Transformação
            </span>
            ?
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
            Agende seu treino experimental gratuito e descubra por que somos a melhor escolha para seu desenvolvimento
            físico.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 hover:bg-white/15 hover:scale-105 transition-all duration-300"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90 text-black font-bold text-xl px-12 py-8 rounded-2xl shadow-[0_0_40px_rgba(0,217,255,0.4)] hover:shadow-[0_0_60px_rgba(0,217,255,0.6)] transition-all duration-500 transform hover:scale-110 group"
          >
            Agendar Treino Experimental
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Button>

          {/* Trust Badge */}
          <p className="mt-8 text-sm text-gray-400">
            Sem compromisso • Sem taxas de adesão • Primeira aula grátis
          </p>
        </div>
      </div>
    </section>
  )
}
