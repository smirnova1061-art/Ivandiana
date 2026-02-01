import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BookCover } from './pages/BookCover';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';
import { Page5 } from './pages/Page5';
import { Page6 } from './pages/Page6';

export function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  // Single pages array
  const pages = [
    BookCover,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
  ];

  const goToNext = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const goToPrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const CurrentPage = pages[currentPage];

  return (
    <div className="relative">
      {/* Book container - Single page mobile format */}
      <div className="perspective-[2000px]">
        <div className="relative w-[400px] h-[700px]" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Single page with flip animation */}
          <div className="absolute inset-0 shadow-2xl rounded-lg overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                initial={{ 
                  rotateY: direction === 'next' ? 90 : -90,
                  opacity: 0 
                }}
                animate={{ 
                  rotateY: 0,
                  opacity: 1 
                }}
                exit={{ 
                  rotateY: direction === 'next' ? -90 : 90,
                  opacity: 0 
                }}
                transition={{ 
                  duration: 0.4,
                  ease: 'easeInOut'
                }}
                className="w-full h-full bg-gradient-to-br from-amber-50 via-stone-50 to-amber-50"
                style={{
                  transformStyle: 'preserve-3d',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3CfeColorMatrix type="saturate" values="0"/%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.03"/%3E%3C/svg%3E")',
                }}
              >
                <CurrentPage />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToPrev}
          disabled={currentPage === 0 || isFlipping}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
            currentPage === 0 || isFlipping
              ? 'bg-stone-600/30 text-stone-400 cursor-not-allowed'
              : 'bg-amber-100/90 text-stone-700 hover:bg-amber-200/90'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Page indicators */}
        <div className="flex gap-2 items-center">
          {pages.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === currentPage 
                  ? 'w-8 bg-amber-200' 
                  : 'w-1.5 bg-stone-500/40'
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToNext}
          disabled={currentPage === pages.length - 1 || isFlipping}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
            currentPage === pages.length - 1 || isFlipping
              ? 'bg-stone-600/30 text-stone-400 cursor-not-allowed'
              : 'bg-amber-100/90 text-stone-700 hover:bg-amber-200/90'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
