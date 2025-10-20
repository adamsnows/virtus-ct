'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

const galleryCategories = [
  {
    id: 'box',
    label: 'O Box',
    images: [
      {
        url: '/cross-training-gym-equipment-area.jpg',
        alt: 'Área de Equipamentos',
      },
      { url: '/cross-training-gym-workout-space.jpg', alt: 'Espaço de Treino' },
      { url: '/cross-training-gym-weights-area.jpg', alt: 'Área de Pesos' },
      { url: '/cross-training-gym-interior.jpg', alt: 'Interior do Box' },
    ],
  },
  {
    id: 'treinos',
    label: 'Treinos',
    images: [
      {
        url: '/people-doing-cross-training-workout.jpg',
        alt: 'Treino em Grupo',
      },
      {
        url: '/athlete-doing-olympic-lifting.jpg',
        alt: 'Levantamento Olímpico',
      },
      { url: '/people-doing-calisthenics.jpg', alt: 'Calistenia' },
      { url: '/functional-training-class.jpg', alt: 'Aula Funcional' },
    ],
  },
  {
    id: 'comunidade',
    label: 'Comunidade',
    images: [
      {
        url: '/cross-training-team-celebration.jpg',
        alt: 'Celebração da Equipe',
      },
      { url: '/fitness-community-group-photo.jpg', alt: 'Foto da Comunidade' },
      { url: '/athletes-supporting-each-other.jpg', alt: 'Apoio Mútuo' },
      { url: '/fitness-team-bonding.jpg', alt: 'União da Equipe' },
    ],
  },
];

export function GallerySection() {
  const [activeTab, setActiveTab] = useState('box');

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Galeria <span className="text-primary">VIRTUS</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça nosso espaço, treinos e comunidade
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-6xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-800 border border-slate-700">
            {galleryCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=inactive]:text-slate-300 data-[state=inactive]:hover:text-white transition-all duration-200"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {galleryCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-4/3 overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors duration-300"
                  >
                    <Image
                      src={image.url || '/placeholder.svg'}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
