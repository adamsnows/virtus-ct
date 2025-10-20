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
} from 'lucide-react';

const facilities = [
  {
    name: 'Área de treino funcional',
    iconName: 'Dumbbell',
    description: 'Espaço equipado para treinos funcionais',
  },
  {
    name: 'Chuveiro',
    iconName: 'ShowerHead',
    description: 'Chuveiros limpos e confortáveis',
  },
  {
    name: 'Estacionamento',
    iconName: 'Car',
    description: 'Vagas disponíveis para clientes',
  },
  {
    name: 'Vestiário',
    iconName: 'Shirt',
    description: 'Vestiários masculino e feminino',
  },
  {
    name: 'Bebedouro',
    iconName: 'Droplets',
    description: 'Água filtrada disponível',
  },
  {
    name: 'Espaço adaptado para cadeira de rodas',
    iconName: 'Accessibility',
    description: 'Acessibilidade garantida',
  },
  {
    name: 'Personal trainer',
    iconName: 'Users',
    description: 'Treinadores especializados',
  },
  {
    name: 'Wi-Fi',
    iconName: 'Wifi',
    description: 'Internet gratuita',
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossas <span className="text-primary">Instalações</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estrutura completa para seu melhor desempenho
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent =
                iconMap[facility.iconName as keyof typeof iconMap];
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        {IconComponent && (
                          <IconComponent className="h-8 w-8 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {facility.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
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
