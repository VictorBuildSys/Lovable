import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from '@/components/WhatsAppButton';

import DetailSection from '@/components/DetailSection';
import WasteInfoSection from "@/components/WasteInfoSection";
import Gallery from "@/components/Gallery";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />        
        <DetailSection />       
        <Gallery /> 
        <WasteInfoSection />
        <Contact />
        <Location />             
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
