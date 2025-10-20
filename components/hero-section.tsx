'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black z-10" />
        <Image
          src="/cross-training-gym-interior-with-equipment.jpg"
          alt="VIRTUS Cross Training"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logos_virtus_secundarias-01-nOphsNH1Ru9bshvj25XqU9rWCs9HiA.jpg"
            alt="VIRTUS Cross Training"
            width={600}
            height={200}
            className="w-full max-w-2xl h-auto"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Todos Podem Fazer <span className="text-primary">Cross</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Acreditamos na democratização do Cross Training. O time VIRTUS é
          capacitado e especializado na modalidade. Estamos prontos para receber
          você!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-black font-semibold text-lg px-8 py-6"
          >
            Agendar Treino Experimental
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 bg-transparent"
          >
            Conheça o Box
          </Button>
        </div>
      </div>
    </section>
  );
}
