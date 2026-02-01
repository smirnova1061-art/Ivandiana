import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';

export function Page2() {
  return (
    <div className="w-full h-full p-8 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="h-full flex flex-col"
      >
        <div className="mb-6">
          <h3 className="text-2xl text-stone-700 font-serif text-center mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Приглашение
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100/50 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-5 h-5 text-amber-700/70" />
              </div>
              <div>
                <h4 className="text-base text-stone-700 font-serif mb-1">Когда?</h4>
                <p className="text-sm text-stone-600">15 июня 2026 года</p>
                <p className="text-xs text-stone-500">в 15:00</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100/50 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-amber-700/70" />
              </div>
              <div>
                <h4 className="text-base text-stone-700 font-serif mb-1">Где?</h4>
                <p className="text-sm text-stone-600">Дворец бракосочетания</p>
                <p className="text-xs text-stone-500">г. Москва</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="p-4 bg-amber-50/40 rounded border border-stone-300/20">
            <p className="text-stone-600 text-xs leading-relaxed italic font-serif text-center">
              Ваше присутствие — самый ценный дар для нас в этот день
            </p>
          </div>
          
          <div className="text-center text-stone-400 text-xs mt-4">— 1 —</div>
        </div>
      </motion.div>
    </div>
  );
}
