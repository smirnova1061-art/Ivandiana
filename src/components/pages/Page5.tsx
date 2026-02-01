import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Page5() {
  return (
    <div className="w-full h-full p-8 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="h-full flex flex-col"
      >
        <h3 className="text-2xl text-stone-700 font-serif text-center mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Наша история
        </h3>
        
        <div className="flex-1 space-y-4">
          <div className="relative rounded overflow-hidden shadow-sm h-32 border border-stone-300/20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1658243862459-145b453dd74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcm9tYW50aWN8ZW58MXx8fHwxNzY5ODYyMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Our story"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <div className="space-y-3">
            <p className="text-stone-600 text-xs leading-relaxed font-serif indent-4">
              Мы встретились, когда листья кружились в осеннем танце. Он сказал "Привет", она улыбнулась — и началась наша сказка.
            </p>
            <p className="text-stone-600 text-xs leading-relaxed font-serif indent-4">
              С тех пор каждый день — это новая глава, наполненная любовью, поддержкой и верой друг в друга.
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <div className="text-center">
            <Heart className="w-6 h-6 mx-auto text-amber-700/40 fill-amber-700/20" />
          </div>
          <div className="text-center text-stone-400 text-xs mt-2">— 4 —</div>
        </div>
      </motion.div>
    </div>
  );
}
