import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor, insira um e-mail válido');
      return;
    }

    // Simulate form submission
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-dark-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Estamos prontos para atender você. Envie sua mensagem!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Telefone</h4>
                    <a
                      href="tel:+551133718116"
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      (11) 3371-8116
                    </a>
                    <br />
                    <a
                      href="tel:+5511995818126"
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      (11) 99581-8126
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">E-mail</h4>
                    <a
                      href="mailto:contato@landingpro.com.br"
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      contato@landingpro.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Endereço</h4>
                    <p className="text-white/80">
                      Belo Horizonte - MG
                      <br />
                      Atendemos toda região metropolitana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-3">Horário de Atendimento</h4>
              <p className="text-white/80">
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-card animate-slide-up" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Como podemos ajudar você?"
                  className="w-full min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
