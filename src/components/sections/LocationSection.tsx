
import { MapPin, Clock, Sun } from 'lucide-react';

const LocationSection = () => {
  const seasons = [
    {
      name: "Musim Kemarau (Mei-September)",
      description: "Waktu terbaik untuk berkunjung dengan cuaca cerah dan laut tenang.",
      recommendation: "Sangat Direkomendasikan"
    },
    {
      name: "Musim Peralihan (April & Oktober)",
      description: "Cuaca bisa berubah-ubah, namun masih cukup baik untuk berkunjung.",
      recommendation: "Direkomendasikan"
    },
    {
      name: "Musim Hujan (November-Maret)",
      description: "Hindari berkunjung saat hujan lebat karena resiko tinggi gelombang dan tanah longsor.",
      recommendation: "Tidak Direkomendasikan"
    }
  ];

  return (
    <section id="location" className="bg-sand-light py-20">
      <div className="section-padding">
        <div className="flex flex-col items-center text-center mb-12">
          <MapPin className="text-ocean w-12 h-12 mb-4" />
          <h2 className="section-title">Lokasi & Akses</h2>
          <p className="section-subtitle">
            Temukan cara menuju Pantai Menganti dan waktu terbaik untuk berkunjung
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-ocean-dark flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Alamat
              </h3>
              <p className="text-gray-700">
                Desa Karangduwur, Kecamatan Ayah, Kabupaten Kebumen, Jawa Tengah
              </p>
              <div className="mt-4">
                <p className="font-medium text-gray-800">Jarak Tempuh:</p>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  <li>± 15 km dari Pantai Logending</li>
                  <li>± 30 km dari pusat Kota Gombong</li>
                  <li>± 65 km dari pusat Kota Kebumen</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-ocean-dark flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Jam Operasional
              </h3>
              <p className="text-gray-700">
                Pantai Menganti buka setiap hari selama 24 jam, namun untuk keamanan direkomendasikan berkunjung antara:
              </p>
              <p className="font-medium text-gray-800 mt-2">
                06.00 - 18.00 WIB
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-ocean-dark flex items-center gap-2">
                <Sun className="w-5 h-5" />
                Waktu Terbaik untuk Berkunjung
              </h3>
              
              <div className="space-y-4">
                {seasons.map((season, index) => (
                  <div key={index} className="border-b pb-3 last:border-0">
                    <h4 className="font-medium text-gray-800">{season.name}</h4>
                    <p className="text-sm text-gray-600">{season.description}</p>
                    <span className={`inline-block mt-1 px-3 py-1 text-xs font-medium rounded-full 
                      ${index === 0 ? 'bg-green-100 text-green-800' : 
                        index === 1 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}
                    >
                      {season.recommendation}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
            <div className="h-96 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63275.53726966089!2d109.4011945!3d-7.771329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7acebf2f3bf8e1%3A0xa0eb730b4eaeb350!2sPantai%20Menganti!5e0!3m2!1sen!2sid!4v1683145066424!5m2!1sen!2sid" 
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pantai Menganti Map"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-ocean-dark">Cara Menuju Lokasi</h3>
              <p className="text-gray-700 mb-4">
                Pantai Menganti dapat diakses dengan kendaraan pribadi melalui jalan darat. Dari pusat Kota Kebumen, ikuti rute menuju ke arah selatan melalui Kecamatan Ayah.
              </p>
              <div className="bg-sand-light p-3 rounded-md">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Tips:</span> Jalan menuju pantai cukup menantang dengan beberapa tanjakan dan turunan, pastikan kendaraan dalam kondisi baik. Disarankan menggunakan kendaraan dengan ground clearance tinggi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-ocean text-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3">Biaya Masuk dan Fasilitas</h3>
          <p className="mb-4">
            Tiket masuk ke Pantai Menganti sangat terjangkau dengan fasilitas dasar yang tersedia.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h4 className="font-medium text-xl mb-2">Tiket Masuk</h4>
              <p className="text-3xl font-bold mb-1">Rp 10.000</p>
              <p className="text-sm opacity-80">per orang</p>
              <p className="mt-2 text-sm">*Harga dapat berubah sewaktu-waktu</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h4 className="font-medium text-xl mb-2">Parkir</h4>
              <p>Motor: <span className="font-bold">Rp 5.000</span></p>
              <p>Mobil: <span className="font-bold">Rp 10.000</span></p>
              <p className="mt-2 text-sm">*Harga dapat berubah sewaktu-waktu</p>
            </div>
          </div>

          <div className="mt-6 text-left">
            <h4 className="font-medium text-center mb-2">Fasilitas:</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-sand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Toilet umum</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-sand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Area parkir</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-sand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Warung makan</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-sand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Mushola</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-sand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Gazebo</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-sand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Penginapan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
