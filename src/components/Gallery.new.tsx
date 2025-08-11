import { useState } from 'react';
import { X, Calendar, MapPin } from 'lucide-react';
import logo from '/logo.png';

const editions = [
  {
    year: 2025,
    images: [
      {
        src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'AI & Community Awards',
        description: 'Recognition ceremony for the most innovative communities.',
        event: 'Tech Communities Day 2025',
        location: 'Main Stage',
      },
      {
        src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Networking Summit',
        description: 'Connect and collaborate with tech communities.',
        event: 'Networking',
        location: 'Networking Hall',
      },
    ],
  },
  {
    year: 2024,
    images: [
      {
        src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Tech Workshops',
        description: 'Hands-on workshops with industry experts.',
        event: 'Workshops',
        location: 'Tech Lab',
      },
      {
        src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'AI Panel Discussion',
        description: 'Round table on AI and the future of communities.',
        event: 'Panel',
        location: 'Conference Room',
      },
    ],
  },
  {
    year: 2023,
    images: [
      {
        src: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Inaugural Keynote',
        description: 'Official opening of the first edition.',
        event: 'Keynote',
        location: 'Main Auditorium',
      },
      {
        src: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Startup Showcase',
        description: 'Tech startup pitch competition.',
        event: 'Startup Pitch',
        location: 'Innovation Stage',
      },
    ],
  },
];

const Gallery = () => {
  const [selectedEdition, setSelectedEdition] = useState(editions[0].year);
  const [selectedImage, setSelectedImage] = useState<{edition: number, index: number} | null>(null);

  const edition = editions.find(e => e.year === selectedEdition)!;

  return (
    <section id="gallery" className="relative py-24 bg-dark-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E88E5/0.1_1px,transparent_1px),linear-gradient(to_bottom,#1E88E5/0.1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="relative">
            <img 
              src={logo} 
              alt="Tech Communities Day Logo" 
              className="h-16 w-auto drop-shadow-lg" 
              width={64}
              height={64}
            />
            <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full -z-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center">
            Event Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl text-center font-light">
            Relive the most inspiring moments from each Tech Communities Day edition.
          </p>
        </div>

        {/* Edition Tabs */}
        <div className="flex justify-center gap-6 mb-16">
          {editions.map(e => (
            <button
              key={e.year}
              onClick={() => setSelectedEdition(e.year)}
              className={`group relative px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-out ${
                selectedEdition === e.year 
                  ? 'bg-primary text-white shadow-[0_0_30px_rgba(30,136,229,0.4)]' 
                  : 'bg-dark-200 text-gray-400 hover:text-white'
              }`}
            >
              <span className="relative z-10">{e.year}</span>
              {selectedEdition === e.year && (
                <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20" />
              )}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {edition.images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage({ edition: selectedEdition, index: idx })}
              className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer transform transition-transform duration-500 hover:scale-[1.02]"
            >
              {/* Image Background Blur Effect */}
              <div 
                className="absolute inset-0 opacity-30 blur-2xl scale-110 transition-transform duration-1000 group-hover:scale-125"
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Main Image */}
              <img
                src={img.src}
                alt={img.title}
                className="relative w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={640}
                height={360}
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end transform opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">{img.title}</h3>
                <p className="text-gray-300 mb-4">{img.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{img.event}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{img.location}</span>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 rounded-2xl transition-all duration-500 group-hover:border-primary/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for fullscreen image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={editions.find(e => e.year === selectedImage.edition)?.images[selectedImage.index].src}
            alt={editions.find(e => e.year === selectedImage.edition)?.images[selectedImage.index].title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
