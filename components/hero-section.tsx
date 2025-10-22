'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with sophisticated overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 z-10" />
        <Image
          src="/cross-training-gym-interior-with-equipment.jpg"
          alt="VIRTUS Cross Training"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,217,255,0.1),transparent_50%)] z-10 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="mb-12 flex justify-center animate-fade-in">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logos_virtus_secundarias-01-nOphsNH1Ru9bshvj25XqU9rWCs9HiA.jpg"
            alt="VIRTUS Cross Training"
            width={600}
            height={200}
            className="w-full max-w-2xl h-auto drop-shadow-[0_0_30px_rgba(0,217,255,0.3)]"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 text-balance leading-tight tracking-tight animate-fade-in-up">
          Todos Podem Fazer{' '}
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
            Cross
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-200">
          Acreditamos na democratização do Cross Training. O time VIRTUS é
          capacitado e especializado na modalidade.{' '}
          <span className="text-primary font-medium">
            Estamos prontos para receber você!
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-fade-in-up animation-delay-400">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-10 py-7 rounded-xl shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_40px_rgba(0,217,255,0.5)] transition-all duration-300 transform hover:scale-105 group"
          >
            Agendar Treino Experimental
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/50 text-white hover:bg-primary/10 hover:border-primary text-lg px-10 py-7 bg-black/40 backdrop-blur-sm rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Conheça o Box
          </Button>
        </div>

        {/* Stats Section - Professional touch */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20 animate-fade-in-up animation-delay-600">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
              <Award className="h-10 w-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">5+</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Anos de Experiência
              </p>
            </div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">500+</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Atletas Ativos
              </p>
            </div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Resultados Garantidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
