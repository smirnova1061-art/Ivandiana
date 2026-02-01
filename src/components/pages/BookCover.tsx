import { motion } from 'motion/react';
import coverImage from 'figma:asset/61ab4da58fc9c58fc711b603671f353ae07a614e.png';

export function BookCover() {
  return (
    <motion.div 
      className="w-full h-full relative overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img 
        src={coverImage}
        alt="Вечность - Иван и Диана"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
