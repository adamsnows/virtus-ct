'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { ImageIcon, Dumbbell, Users } from 'lucide-react';

const galleryCategories = [
  {
    id: 'box',
    label: 'O Box',
    icon: ImageIcon,
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
    icon: Dumbbell,
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
    icon: Users,
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
    <section className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 border border-primary/20 inline-flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Nossa Galeria
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-balance leading-tight">
            Galeria{' '}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
              VIRTUS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça nosso espaço, treinos e comunidade
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </div>

        {/* Gallery Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-7xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-muted/90 backdrop-blur-sm border-2 border-border rounded-2xl p-2 h-auto shadow-xl">
            {galleryCategories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-base font-bold rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30 data-[state=inactive]:text-foreground/70 data-[state=inactive]:hover:text-foreground data-[state=inactive]:hover:bg-foreground/10 transition-all duration-300 py-4 px-6 flex items-center justify-center gap-2"
                >
                  <Icon className="h-5 w-5" />
                  {category.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {galleryCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-0 animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.images.map((image, index) => (
                  <div
                    key={index}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-border/50 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/20"
                  >
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {/* Image */}
                    <Image
                      src={image.url || '/placeholder.svg'}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Image Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-bold text-lg drop-shadow-lg">
                        {image.alt}
                      </p>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
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
