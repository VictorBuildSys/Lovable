import detailImage from "@/assets/img_1.jpg";

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
              Objetivo
            </h2>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto text-justify" > 
                  Nosso objetivo é tornar o dia a dia do cliente mais simples e eficiente, oferecendo um serviço ágil de coleta e transporte de entulhos com uma <strong>frota moderna e bem equipada de caminhões.</strong><br/><br/>
            </p>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto text-justify" >
                  Trabalhamos para garantir <strong>rapidez na entrega e retirada das caçambas,</strong> sempre com segurança e dentro das normas ambientais e municipais. Nossa estrutura logística permite atender diferentes demandas — de pequenas reformas a grandes obras — <strong>com pontualidade e flexibilidade.</strong><br/><br/>
            </p>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto text-justify" >
                 <strong> Um canteiro de obra limpo e organizado evita acidentes, reduz multas e melhora a colaboração e a produtividade da equipe,</strong> garantindo que o andamento da obra seja mais seguro e eficiente.
            </p>      
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
