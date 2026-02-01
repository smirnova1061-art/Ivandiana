import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface PhotoGalleryProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function PhotoGallery({ }: PhotoGalleryProps) {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1658243862459-145b453dd74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcm9tYW50aWN8ZW58MXx8fHwxNzY5ODYyMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Наша история любви'
    },
    {
      url: 'https://images.unsplash.com/photo-1649228167407-602c5437da82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBib3VxdWV0fGVufDF8fHx8MTc2OTk1MTM1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Начало нашего пути'
    },
    {
      url: 'https://images.unsplash.com/photo-1613067532743-33c628bc7e1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc2OTg2OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Место торжества'
    },
    {
      url: 'https://images.unsplash.com/photo-1764269719300-7094d6c00533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjBwYXJ0eXxlbnwxfHx8fDE3Njk5NTA5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Празднование'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="w-[800px] h-[600px] bg-white rounded-lg shadow-2xl p-8 overflow-y-auto"
    >
      <div className="text-center mb-6">
        <Heart className="w-10 h-10 mx-auto mb-3 text-rose-500 fill-rose-500" />
        <h2 className="text-3xl text-gray-800 font-serif">Наша История</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-lg shadow-lg aspect-square"
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-gray-600 mt-6 italic"
      >
        Каждый момент с тобой — это маленькое чудо
      </motion.p>
    </motion.div>
  );
}
