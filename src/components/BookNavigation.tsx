import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BookNavigationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

export function BookNavigation({ currentPage, totalPages, onNext, onPrev }: BookNavigationProps) {
  return (
    <div className="flex items-center justify-between mt-6 px-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        disabled={currentPage === 0}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          currentPage === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-rose-500 hover:bg-rose-50 shadow-lg'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentPage ? 'bg-rose-500 w-8' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          currentPage === totalPages - 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-rose-500 hover:bg-rose-50 shadow-lg'
        }`}
        aria-label="Next page"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
