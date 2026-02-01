import { motion } from 'motion/react';
import { Heart, MapPin, Clock } from 'lucide-react';

interface WelcomePageProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function WelcomePage({ }: WelcomePageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="w-[800px] h-[600px] bg-white rounded-lg shadow-2xl p-12 overflow-y-auto"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-center mb-8"
        >
          <Heart className="w-12 h-12 mx-auto mb-4 text-rose-500 fill-rose-500" />
          <h2 className="text-4xl mb-4 text-gray-800 font-serif">Дорогие друзья!</h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg max-w-none text-gray-700 mb-8"
        >
          <p className="text-center leading-relaxed">
            Мы рады сообщить вам, что решили связать наши жизни узами брака 
            и хотим, чтобы вы были рядом в этот особенный день!
          </p>
          
          <p className="text-center leading-relaxed">
            Ваше присутствие и теплые слова сделают наш праздник по-настоящему незабываемым.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          <div className="bg-rose-50 p-6 rounded-lg text-center">
            <Clock className="w-8 h-8 mx-auto mb-3 text-rose-600" />
            <h3 className="text-xl mb-2 text-gray-800">Когда?</h3>
            <p className="text-gray-700">15 июня 2026</p>
            <p className="text-gray-600 text-sm">15:00</p>
          </div>
          
          <div className="bg-rose-50 p-6 rounded-lg text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-rose-600" />
            <h3 className="text-xl mb-2 text-gray-800">Где?</h3>
            <p className="text-gray-700">Дворец бракосочетания</p>
            <p className="text-gray-600 text-sm">г. Москва</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-gray-600 italic"
        >
          "Любовь долготерпелива, любовь милосердна..."
        </motion.div>
      </div>
    </motion.div>
  );
}
