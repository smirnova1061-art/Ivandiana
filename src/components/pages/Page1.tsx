import { motion } from 'motion/react';
import { Feather } from 'lucide-react';

export function Page1() {
  return (
    <div className="w-full h-full p-8 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="h-full flex flex-col"
      >
        <div className="text-center mb-8">
          <Feather className="w-8 h-8 mx-auto mb-4 text-amber-700/60" />
          <h2 className="text-3xl text-stone-700 font-serif mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Глава I
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-12 h-px bg-stone-400/40" />
            <span className="text-stone-500 text-xs">✦</span>
            <div className="w-12 h-px bg-stone-400/40" />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-stone-700 leading-relaxed text-sm font-serif first-letter:text-4xl first-letter:font-bold first-letter:text-amber-800 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
            Дорогие друзья и родные! В этот особенный день мы хотим разделить с вами радость нашего союза.
          </p>

          <p className="text-stone-600 leading-relaxed text-sm font-serif indent-4">
            Как в древних сказаниях о вечной любви, наша история началась давно, и сегодня мы пишем новую главу — главу о том, как два сердца становятся одним.
          </p>

          <p className="text-stone-600 leading-relaxed text-sm font-serif indent-4">
            Ваше присутствие сделает этот день поистине волшебным и незабываемым.
          </p>
        </div>

        <div className="mt-auto pt-4 text-center">
          <p className="text-stone-500 italic text-xs font-serif">
            "И пусть любовь ваша будет вечной..."
          </p>
        </div>
      </motion.div>
    </div>
  );
}
