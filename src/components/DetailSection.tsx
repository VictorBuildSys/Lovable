import { CheckCircle2 } from "lucide-react";
import detailImage from "@/assets/img1.jpg";

const DetailSection = () => {
  return (
    <section id="about2"   className="section-padding bg-accent" >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={detailImage}
              alt="Serviço de remoção de entulho profissional"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-accent-foreground">
              Gestão de Resíduos 
            </h2>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
              Oferecemos soluções profissionais para gerenciamento de resíduos em obras de todos os portes. 
              Nossa equipe especializada garante o descarte adequado e sustentável de materiais.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Descarte Legal e Sustentável</h3>
                  <p className="text-muted-foreground">
                    Seguimos todas as normas ambientais para destinação correta dos resíduos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Entrega e Retirada Agendada</h3>
                  <p className="text-muted-foreground">
                    Sistema eficiente com horários marcados para máxima conveniência
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Equipe Profissional</h3>
                  <p className="text-muted-foreground">
                    Mais de 30 anos de experiência no mercado de construção
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
