import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    'Ginástica',
    'LPO',
    'Calistenia',
    'Maromba (Musculação Funcional)',
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                Sobre Nós
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-balance leading-tight">
              Bem-vindo a{' '}
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
                VIRTUS
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6 font-light">
                Somos uma Box de Cross Training e acreditamos na{' '}
                <span className="text-primary font-semibold">
                  democratização
                </span>{' '}
                desta forma de treinar! Todos podem fazer Cross. O time VIRTUS é
                capacitado e especializado na modalidade.
              </p>
              <div className="w-16 h-1 bg-primary/30 rounded-full" />
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm border border-primary/10 rounded-3xl p-8 md:p-12 shadow-xl">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
                Com uma agenda robusta e completa, além do Cross, é possível se
                desenvolver ainda mais com treinos específicos:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-background/50 rounded-xl p-4 hover:bg-background/80 transition-colors duration-300 group"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-semibold text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
