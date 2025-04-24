
import { Umbrella, Sailboat, Compass } from 'lucide-react';

const ActivitiesSection = () => {
  const activities = [
    {
      icon: <Umbrella className="w-8 h-8 mb-4 text-ocean" />,
      title: "Bersantai di Pantai",
      description: "Nikmati keindahan pasir putih dan suara deburan ombak sambil berjemur atau sekadar duduk menikmati pemandangan.",
    },
    {
      icon: <Sailboat className="w-8 h-8 mb-4 text-ocean" />,
      title: "Aktivitas Air",
      description: "Pantai Menganti cocok untuk berenang, bermain air, atau berselancar. Namun tetap perhatikan kondisi ombak untuk keamanan.",
    },
    {
      icon: <Compass className="w-8 h-8 mb-4 text-ocean" />,
      title: "Hiking & Fotografi",
      description: "Jelajahi bukit dan tebing sekitar pantai untuk mendapatkan pemandangan menakjubkan dan spot foto terbaik.",
    },
  ];

  return (
    <section id="activities" className="bg-white py-20">
      <div className="section-padding">
        <div className="flex flex-col items-center text-center mb-12">
          <Umbrella className="text-ocean w-12 h-12 mb-4" />
          <h2 className="section-title">Aktivitas Menarik</h2>
          <p className="section-subtitle">
            Berbagai kegiatan seru yang bisa dilakukan di Pantai Menganti
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center border-t-4 border-ocean"
            >
              <div className="flex justify-center">{activity.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-ocean rounded-lg overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Tips Berwisata</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5 text-sand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Bawa perlengkapan seperti topi, kacamata hitam, dan tabir surya.
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5 text-sand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Perhatikan kondisi ombak dan air sebelum berenang.
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5 text-sand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Jaga kebersihan pantai, bawa pulang sampah Anda.
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5 text-sand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Hindari datang saat hujan lebat untuk menghindari bahaya.
                </li>
              </ul>
            </div>
            <div className="bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: `url("/menganti8.jpg")` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
