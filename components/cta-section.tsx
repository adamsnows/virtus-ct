import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Pronto para Começar sua <span className="text-primary">Transformação</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Agende seu treino experimental gratuito e descubra por que somos a melhor escolha para seu desenvolvimento
            físico.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-black font-semibold text-lg px-8 py-6">
            Agendar Treino Experimental
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
