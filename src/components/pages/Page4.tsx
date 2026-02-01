import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export function Page4() {
  return (
    <div className="w-full h-full p-8 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="h-full flex flex-col"
      >
        <h3 className="text-2xl text-stone-700 font-serif text-center mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Место
        </h3>

        <div className="flex-1 space-y-4">
          <div className="bg-amber-50/40 p-4 rounded border border-stone-300/20">
            <h4 className="text-sm text-stone-700 font-serif mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-700/60" />
              Дворец бракосочетания
            </h4>
            <div className="space-y-1 text-xs text-stone-600">
              <p>г. Москва, ул. Грибоедова, 1А</p>
              <p className="text-stone-500">м. Кропоткинская</p>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-sm border border-stone-300/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.6287999684397!2d37.60357831592308!3d55.74559698055538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://maps.google.com/?q=Москва+Кремль"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2 bg-amber-700/70 text-white rounded text-xs hover:bg-amber-700/80 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Построить маршрут
          </a>
        </div>

        <div className="text-center text-stone-400 text-xs mt-4">— 3 —</div>
      </motion.div>
    </div>
  );
}
