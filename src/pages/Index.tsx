import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>BH Caçambas  | Locação de caçambas em Belo Horizonte</title>
        <meta
          name="description"
          content="Locação de caçambas em Belo Horizonte"
        />
        <meta
          name="keywords"
          content="BH Caçambas ,BH Caçamba,Caçambas BH, Locação de caçambas em Belo Horizonte, serviços profissionais, qualidade, atendimento, soluções, Belo Horizonte"
        />
        <link rel="canonical" href="https://bhcacamba.com.br" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
          <Location />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
