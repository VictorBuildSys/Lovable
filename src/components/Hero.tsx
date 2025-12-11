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
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden">

{/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${heroImage})`,        
      }}
      >
        
      </div>


      <div className="container-custom section-padding relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
            BH Caçamba
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
            Aluguel de Caçambas em Belo Horizonte
          </p>
          

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in">
           <a href="https://wa.me/5531995818126" target="_blank" className="group">
            <Button
              variant="secondary"
              size="lg"
              
              className="text-lg font-semibold px-8 shadow-2xl hover:scale-105 transition-transform"
            >
              <MessageCircleMore className="mr-2 h-5 w-5" />
              
              Solicitar Orçamento
            </Button></a>
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

          {/* <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-foreground">35+</div>
              <div className="text-sm opacity-80">Anos de Experiência</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-foreground">500+</div>
              <div className="text-sm opacity-80">Clientes Satisfeitos</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-foreground">Até 24h</div>
              <div className="text-sm opacity-80">Atendimento Rápido</div>
            </div>
          </div> */}
           {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">35+</div>
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
