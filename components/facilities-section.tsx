import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dumbbell,
  ShowerHead,
  Car,
  Shirt,
  Droplets,
  Accessibility,
  Users,
  Wifi,
  Sparkles,
} from 'lucide-react';

const facilities = [
  {
    name: 'Área de treino funcional',
    iconName: 'Dumbbell',
    description: 'Espaço equipado para treinos funcionais',
    color: 'from-primary/20 to-cyan-500/20',
  },
  {
    name: 'Chuveiro',
    iconName: 'ShowerHead',
    description: 'Chuveiros limpos e confortáveis',
    color: 'from-blue-500/20 to-primary/20',
  },
  {
    name: 'Estacionamento',
    iconName: 'Car',
    description: 'Vagas disponíveis para clientes',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'Vestiário',
    iconName: 'Shirt',
    description: 'Vestiários masculino e feminino',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'Bebedouro',
    iconName: 'Droplets',
    description: 'Água filtrada disponível',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    name: 'Acessibilidade',
    iconName: 'Accessibility',
    description: 'Espaço adaptado para todos',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    name: 'Personal Trainer',
    iconName: 'Users',
    description: 'Treinadores especializados',
    color: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    name: 'Wi-Fi Grátis',
    iconName: 'Wifi',
    description: 'Internet de alta velocidade',
    color: 'from-indigo-500/20 to-purple-500/20',
  },
];

const iconMap = {
  Dumbbell: Dumbbell,
  ShowerHead: ShowerHead,
  Car: Car,
  Shirt: Shirt,
  Droplets: Droplets,
  Accessibility: Accessibility,
  Users: Users,
  Wifi: Wifi,
};

export function FacilitiesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 border border-primary/20 inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Infraestrutura
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-balance leading-tight">
            Nossas{' '}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
              Instalações
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estrutura completa para seu melhor desempenho
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </div>

        {/* Facilities Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent =
                iconMap[facility.iconName as keyof typeof iconMap];
              return (
                <Card
                  key={index}
                  className="group text-center border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardContent className="p-8 relative z-10">
                    <div className="flex flex-col items-center space-y-4">
                      {/* Icon Container */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                          {IconComponent && (
                            <IconComponent className="h-10 w-10 text-primary" />
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                          {facility.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
