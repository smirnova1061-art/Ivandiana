import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface BookCoverProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function BookCover({ onNext }: BookCoverProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -20 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 20 }}
      transition={{ duration: 0.8 }}
      className="w-[800px] h-[600px] bg-white rounded-lg shadow-2xl p-12 flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1658243862459-145b453dd74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcm9tYW50aWN8ZW58MXx8fHwxNzY5ODYyMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      <div className="relative z-10 text-center text-white">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="mb-8"
        >
          <Heart className="w-16 h-16 mx-auto fill-rose-300 text-rose-300" />
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-6xl mb-4 font-serif"
        >
          Анна & Дмитрий
        </motion.h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-2xl mb-8 font-light tracking-widest"
        >
          15 ИЮНЯ 2026
        </motion.div>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-lg mb-12 font-light italic"
        >
          Приглашаем вас разделить с нами<br />
          самый счастливый день нашей жизни
        </motion.p>
        
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full text-white hover:bg-white/30 transition-colors"
        >
          Открыть приглашение
        </motion.button>
      </div>
    </motion.div>
  );
}
