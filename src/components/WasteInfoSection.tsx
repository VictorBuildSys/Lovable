import { CheckCircle2, XCircle } from "lucide-react";

const WasteInfoSection = () => {
  const allowedWaste = [
    {
      class: "Classe A",
      items: "Alvenaria, concreto, cerâmica, terra e telha colonial"
    },
    {
      class: "Classe B",
      items: "Madeira, papel, plástico, pet, ferragem, sacaria e podas"
    },
    {
      class: "Classe B",
      items: "Gesso (sem misturas de outros resíduos)"
    },
    {
      class: "Classe C",
      items: "Isopor, espuma expansiva e epi's"
    }
  ];

  const notAllowedWaste = [
    "Lixo de cozinha, banheiro, orgânicos, óleos",
    "Limpeza de caixa de gordura",
    "Animais mortos",
    "Inflamáveis",
    "Lixo hospitalar"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tipos de Resíduos
          </h2>
          <p className="text-muted-foreground text-lg">
            Confira o que pode e o que não pode ser descartado em nossas caçambas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Resíduos Permitidos */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle2 className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Resíduos Permitidos
              </h3>
            </div>
            
            <ul className="space-y-4">
              {allowedWaste.map((waste, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold text-primary">{waste.class}:</span>
                    <span className="text-foreground ml-2">{waste.items}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Resíduos Não Permitidos */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-destructive/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-destructive/10 p-3 rounded-full">
                <XCircle className="text-destructive" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Resíduos Não Permitidos
              </h3>
            </div>
            
            <ul className="space-y-4">
              {notAllowedWaste.map((waste, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="text-destructive mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">{waste}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteInfoSection;
