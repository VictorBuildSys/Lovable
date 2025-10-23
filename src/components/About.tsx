import { Award, Users, Target, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Anos de Experiência' },
  { icon: Users, value: '500+', label: 'Clientes Satisfeitos' },
  { icon: Target, value: '1000+', label: 'Projetos Concluídos' },
  { icon: TrendingUp, value: '98%', label: 'Taxa de Satisfação' },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Quem Somos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Somos uma empresa consolidada no mercado, com foco em oferecer
              serviços de excelência. Nossa missão é proporcionar soluções
              eficientes e confiáveis, sempre priorizando a satisfação dos nossos
              clientes.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-muted rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-3">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Oferecer serviços com qualidade excepcional e compromisso total com
                nossos clientes.
              </p>
            </div>
            <div className="text-center p-6 bg-muted rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-3">Nossa Visão</h3>
              <p className="text-muted-foreground">
                Ser referência no mercado pela excelência e inovação em nossos
                serviços.
              </p>
            </div>
            <div className="text-center p-6 bg-muted rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Nossos Valores
              </h3>
              <p className="text-muted-foreground">
                Ética, transparência, qualidade e respeito são os pilares do nosso
                trabalho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
