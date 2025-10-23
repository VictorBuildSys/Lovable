import { Truck, Settings, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Truck,
    title: 'Logística Especializada',
    description:
      'Soluções completas de transporte e logística com eficiência e segurança.',
  },
  {
    icon: Settings,
    title: 'Manutenção Profissional',
    description:
      'Equipe técnica qualificada para manutenção preventiva e corretiva.',
  },
  {
    icon: Shield,
    title: 'Conformidade Legal',
    description:
      'Todos os serviços em conformidade com normas ambientais e municipais.',
  },
  {
    icon: Sparkles,
    title: 'Excelência em Qualidade',
    description:
      'Compromisso com a qualidade em cada etapa do processo.',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-dark-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Soluções completas e personalizadas para atender suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                  Saiba Mais
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
