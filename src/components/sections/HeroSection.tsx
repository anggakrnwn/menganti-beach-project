import { Waves } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

const HeroSection = () => {
  // Animasi zoom untuk judul
  const zoomTitle = useSpring({
    loop: true,
    to: [{ transform: 'scale(1.05)' }, { transform: 'scale(1)' }],
    from: { transform: 'scale(1)' },
    config: { duration: 3000 },
  });

  // Animasi fade untuk subjudul
  const fadeSubtitle = useSpring({
    loop: true,
    to: [{ opacity: 1 }, { opacity: 0.4 }],
    from: { opacity: 0.4 },
    config: { duration: 2500 },
  });

  // Animasi slide untuk tombol
  const slideButton = useSpring({
    loop: true,
    to: [{ transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }],
    from: { transform: 'translateX(5px)' },
    config: { duration: 2000 },
  });

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay gradient */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-transparent"
        aria-hidden="true"
      ></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url("/mengantihome.png")`,
          backgroundPosition: 'center 60%'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <animated.h1 style={zoomTitle} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Menganti Beach
        </animated.h1>
        <animated.h2 style={fadeSubtitle} className="text-xl md:text-2xl lg:text-3xl text-white mb-8 drop-shadow-lg">
          Surga Tersembunyi di Kebumen, Jawa Tengah
        </animated.h2>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-md">
          Nikmati keindahan pantai berpasir putih dengan tebing karang yang mempesona
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <animated.a href="#about" className="btn-primary flex items-center gap-2" style={slideButton}>
            <Waves className="w-5 h-5" />
            Jelajahi
          </animated.a>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="wave-divider"></div>
      </div>
    </section>
  );
};

export default HeroSection;
