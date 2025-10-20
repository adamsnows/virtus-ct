export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Bem-vindo a <span className="text-primary">VIRTUS</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Somos uma Box de Cross Training e acreditamos na democratização
            desta forma de treinar! Todos podem fazer Cross. O time VIRTUS é
            capacitado e especializado na modalidade.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Com uma agenda robusta e completa, além do Cross, é possível se
            desenvolver ainda mais com os treinos específicos de{' '}
            <span className="text-primary font-semibold">Ginástica</span>,
            <span className="text-primary font-semibold"> LPO</span>,
            <span className="text-primary font-semibold"> Calistenia</span> e
            <span className="text-primary font-semibold"> Maromba</span>{' '}
            (Musculação Funcional).
          </p>
        </div>
      </div>
    </section>
  );
}
