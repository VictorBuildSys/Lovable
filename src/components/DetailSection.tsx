import detailImage from "@/assets/img2.jpg";

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
              Quem Somos
            </h2>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto" > 
                  <strong>Somos a BH Caçamba</strong>  uma empresa especializada em <strong>coleta, transporte e destinação correta de entulhos</strong>, oferecendo soluções práticas e sustentáveis para obras, reformas e limpezas em geral.<br/><br/>
                  Com anos de experiência no setor, atuamos com <strong>eficiência, segurança e respeito ao meio ambiente</strong>, seguindo todas as normas municipais e ambientais para o descarte de resíduos da construção civil.<br/><br/>
            </p>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto" >
                  Nosso compromisso é <strong> facilitar o dia a dia dos clientes</strong>, garantindo <strong>pontualidade na entrega e retirada das caçambas</strong>, além de um atendimento ágil e personalizado.<br/><br/>
            </p>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto" >
                  Trabalhamos para que cada serviço contribua para uma obra<strong> mais limpa, organizada e consciente</strong>, unindo responsabilidade ambiental e praticidade no manejo de resíduos.<br/><br/>            
            </p>      
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto" >
                  Escolha a BH Caçamba para uma gestão de resíduos eficiente e sustentável, e faça a diferença na sua obra e no meio ambiente.<br/><br/>      
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
