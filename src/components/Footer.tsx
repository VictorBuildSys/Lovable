import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from '@/assets/logo.png';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-custom px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            
              <div className="flex items-center space-x-3"> 
              <img src={logo} alt="BH Caçamba" className="w-12 h-12" />
              <h3  className="text-xl font-bold mb-4">BH Caçamba</h3>
              </div>
            <p className="text-accent-foreground/80 text-sm mb-4">
              Mais de 35 anos oferecendo soluções em aluguel de caçambas e gerenciamento de resíduos
              em Belo Horizonte.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-accent-foreground/80">
                <Phone className="w-4 h-4" />
                <a href="tel:33718126" className="hover:text-primary transition-colors">
                  (31) 3371-8126
                </a>
              </div>
              <div className="flex items-center gap-2 text-accent-foreground/80">
                <Phone className="w-4 h-4" />
                <a href="tel:31995818126" className="hover:text-primary transition-colors">
                  (31) 99581-8126
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Localização
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li>Locação de caçamba residencial</li>
              <li>Locação de caçamba comercial</li>
              <li>Gestão Completa de Resíduos</li>
              <li>Triagem de Resíduos</li>
              <li>Entrega agendada</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-accent-foreground/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Belo Horizonte, MG</p>                  
                  <p className="text-xs">Rua Juarez Teixeira Pinto, 267</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-accent-foreground/80">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href="mailto:contato@bhcacamba.com.br"
                  className="hover:text-primary transition-colors"
                >
                  bhcacamba@yahoo.com.br
                </a>
              </div>
              <div className="flex items-start gap-2 text-accent-foreground/80">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Seg a Sex: 7h às 17h</p>
                  <p>Sábado: 7h às 11h Somente agendamentos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm text-accent-foreground/70">
          <p>
            © {new Date().getFullYear()} BH Caçamba. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            CNPJ: 00.689.825/0001-65
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
