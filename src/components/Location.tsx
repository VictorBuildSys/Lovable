const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atendemos Belo Horizonte e toda região metropolitana
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-card animate-slide-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120615.72236587635!2d-44.06378609728497!3d-19.912998035007966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690c6181c8a33%3A0x30139e98b89e3f33!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização - Belo Horizonte"
            ></iframe>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-muted rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">Belo Horizonte</h3>
              <p className="text-muted-foreground">Região Central e Adjacências</p>
            </div>
            <div className="bg-muted rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">Grande BH</h3>
              <p className="text-muted-foreground">Contagem, Betim, Nova Lima</p>
            </div>
            <div className="bg-muted rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">Atendimento</h3>
              <p className="text-muted-foreground">Consulte outras regiões</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
