import { Button } from "@/components/ui/button";
import { Phone, ArrowRight,MessageCircleMore  } from "lucide-react";
import heroImage from "@/assets/hero-cacambas.jpg";
import WhatsAppButton from "./WhatsAppButton";

const Hero = () => {
  const OnClickWatsApp = () => {
    const phoneNumber = '5531995818126';
    const message = 'Olá! Vim através do site e gostaria de mais informações.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');    
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-secondary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          BH Caçamba
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Aluguel de Caçambas em Belo Horizonte
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
              variant="secondary"
              size="lg"
              onClick={OnClickWatsApp}
              className="text-lg font-semibold px-8 shadow-2xl hover:scale-105 transition-transform"
            >
              <MessageCircleMore className="mr-2 h-5 w-5" />
              
              Solicitar Orçamento
            </Button>
            <a href="tel:33718126" className="group">
              <Button
                variant="outline"
                size="lg"
                className="text-lg font-semibold px-8 bg-white/10 border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                (31) 3371-8126
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
            <div className="text-white/90">Anos de Experiência</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-white/90">Clientes Satisfeitos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">Até 24h</div>
            <div className="text-white/90">Atendimento Rápido</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
