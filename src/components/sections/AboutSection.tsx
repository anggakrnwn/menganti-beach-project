import { Anchor } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-padding">
        <div className="flex flex-col items-center text-center mb-12">
          <Anchor className="text-ocean w-12 h-12 mb-4" />
          <h2 className="section-title">Tentang Pantai Menganti</h2>
          <p className="section-subtitle">
            Keindahan tersembunyi di pesisir selatan Pulau Jawa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/menganti1.jpg"
              alt="Pemandangan Pantai Menganti" 
              className="w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Pantai Menganti adalah salah satu pantai tersembunyi di pesisir selatan Jawa Tengah, tepatnya di Kecamatan Ayah, Kabupaten Kebumen. Nama "Menganti" berasal dari kata "ganti" yang memiliki arti pergantian, karena dahulu pantai ini merupakan tempat pergantian perahu nelayan.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Dengan pasir putih yang lembut, air laut biru kehijauan, dan tebing karang yang menjulang, Pantai Menganti menawarkan pemandangan alam yang memukau dan masih sangat alami. Keindahannya sering dijuluki sebagai "Bali-nya Jawa Tengah".
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Selain keindahan pantainya, terdapat juga bukit-bukit hijau di sekitarnya yang menambah pesona alam Pantai Menganti. Pengunjung dapat menikmati sunset yang spektakuler sambil menikmati suasana yang tenang dan damai.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-sand-light px-4 py-2 rounded-full text-gray-800">
                <span className="font-semibold">Pasir Putih</span>
              </div>
              <div className="bg-sand-light px-4 py-2 rounded-full text-gray-800">
                <span className="font-semibold">Tebing Karang</span>
              </div>
              <div className="bg-sand-light px-4 py-2 rounded-full text-gray-800">
                <span className="font-semibold">Bukit Hijau</span>
              </div>
              <div className="bg-sand-light px-4 py-2 rounded-full text-gray-800">
                <span className="font-semibold">Air Biru Kehijauan</span>
              </div>
            </div>

            {/* Tombol Explore */}
            <div className="mt-10">
              <button className="bg-ocean text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-ocean-dark transition duration-300">
                Jelajahi Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
