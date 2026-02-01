import { motion } from 'motion/react';
import { MapPin, Navigation, Phone } from 'lucide-react';

interface MapPageProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function MapPage({ }: MapPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="w-[800px] h-[600px] bg-white rounded-lg shadow-2xl p-8 overflow-y-auto"
    >
      <div className="text-center mb-6">
        <MapPin className="w-10 h-10 mx-auto mb-3 text-rose-500" />
        <h2 className="text-3xl text-gray-800 font-serif">Как добраться</h2>
      </div>

      <div className="space-y-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-rose-50 p-6 rounded-lg"
        >
          <h3 className="text-xl mb-3 text-gray-800 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-rose-600" />
            Дворец бракосочетания №1
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Адрес:</strong> г. Москва, ул. Грибоедова, д. 1А
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Метро:</strong> Кропоткинская (5 мин пешком)
          </p>
          <p className="text-gray-700 flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <strong>Телефон:</strong> +7 (495) 123-45-67
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.6287999684397!2d37.60357831592308!3d55.74559698055538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="https://maps.google.com/?q=Москва+Кремль"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
          >
            <Navigation className="w-5 h-5" />
            Построить маршрут
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-600 text-sm bg-amber-50 p-4 rounded-lg"
        >
          <p>💡 <strong>Совет:</strong> Рекомендуем приехать за 15-20 минут до начала церемонии</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
