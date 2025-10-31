import gallery1 from "@/assets/img2.jpg";
import gallery2 from "@/assets/img2.jpg";
import gallery3 from "@/assets/img2.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Renovação Continua" },
    { src: gallery2, alt: "Sustentabilidade em Ação" },
    { src: gallery3, alt: "Meio Ambiente" },
    { src: gallery1, alt: "Conscientização Ambiental" },
    { src: gallery2, alt: "Gestão de Resíduos" },
  ];

  return (
    <section id="gallery" className="py-20 bg-[hsl(var(--section-dark))]">
      <div className="container mx-auto px-4">
        {/* Horizontal Scroll Gallery */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-6 min-w-max px-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-semibold">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
