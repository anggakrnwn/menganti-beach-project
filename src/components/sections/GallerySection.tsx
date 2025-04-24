
import { useState } from 'react';
import { Camera } from 'lucide-react';

const GallerySection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(-1);
  
  const galleryImages = [
    {
      url: "/menganti2.jpg",
      caption: "Ombak yang berdebur di pantai"
    },
    {
      url: "/menganti3.jpg",
      caption: "Pemandangan dari puncak bukit"
    },
    {
      url: "/menganti4.jpg",
      caption: "Keindahan tebing dan laut"
    },
    {
      url: "/menganti5.jpg",
      caption: "Suasana senja di pantai"
    },
    {
      url: "/menganti6.jpg",
      caption: "Keindahan batu karang"
    },
    {
      url: "/menganti7.jpg",
      caption: "Hutan di sekitar pantai"
    },
  ];

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(-1);
  };

  const navigateLightbox = (direction: number) => {
    const newIndex = activeImageIndex + direction;
    if (newIndex >= 0 && newIndex < galleryImages.length) {
      setActiveImageIndex(newIndex);
    }
  };

  return (
    <section id="gallery" className="bg-sand-light py-20">
      <div className="section-padding">
        <div className="flex flex-col items-center text-center mb-12">
          <Camera className="text-ocean w-12 h-12 mb-4" />
          <h2 className="section-title">Galeri Keindahan</h2>
          <p className="section-subtitle">
            Jelajahi keindahan Pantai Menganti melalui foto-foto menakjubkan
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group relative"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.url} 
                alt={`Pantai Menganti - ${image.caption}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {activeImageIndex >= 0 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
            <div className="relative max-w-4xl mx-auto">
              <img 
                src={galleryImages[activeImageIndex].url} 
                alt={galleryImages[activeImageIndex].caption}
                className="max-h-[80vh] mx-auto"
              />
              <p className="text-white text-center mt-4">
                {galleryImages[activeImageIndex].caption}
              </p>
              
              <button 
                className="absolute top-0 right-0 -mt-12 text-white text-3xl"
                onClick={closeLightbox}
              >
                &times;
              </button>
              
              {activeImageIndex > 0 && (
                <button 
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 bg-black bg-opacity-50 text-white p-2 rounded-full"
                  onClick={() => navigateLightbox(-1)}
                >
                  &lt;
                </button>
              )}
              
              {activeImageIndex < galleryImages.length - 1 && (
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 bg-black bg-opacity-50 text-white p-2 rounded-full"
                  onClick={() => navigateLightbox(1)}
                >
                  &gt;
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
