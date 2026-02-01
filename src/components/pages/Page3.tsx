import { motion } from 'motion/react';
import { Clock, Utensils, Music } from 'lucide-react';

export function Page3() {
  const schedule = [
    { time: '15:00', title: 'Церемония', icon: Clock },
    { time: '16:30', title: 'Фотосессия', icon: Clock },
    { time: '18:00', title: 'Банкет', icon: Utensils },
    { time: '20:00', title: 'Первый танец', icon: Music },
  ];

  return (
    <div className="w-full h-full p-8 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="h-full flex flex-col"
      >
        <h3 className="text-2xl text-stone-700 font-serif text-center mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Программа
        </h3>
        
        <div className="flex-1 space-y-3">
          {schedule.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-amber-100/40 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-amber-700/60" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg text-amber-800/80 font-serif w-14">{item.time}</span>
                  <span className="text-sm text-stone-600">{item.title}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-auto">
          <div className="p-3 bg-amber-50/40 rounded border border-stone-300/20 text-center">
            <p className="text-stone-600 text-xs">
              <strong>Дресс-код:</strong> Праздничный
            </p>
            <p className="text-stone-500 text-xs mt-1">
              пастельные тона приветствуются
            </p>
          </div>
          
          <div className="text-center text-stone-400 text-xs mt-4">— 2 —</div>
        </div>
      </motion.div>
    </div>
  );
}
