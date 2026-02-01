import { motion } from 'motion/react';
import { Clock, Heart, Camera, Utensils, Music, Sparkles } from 'lucide-react';

interface SchedulePageProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function SchedulePage({ }: SchedulePageProps) {
  const schedule = [
    {
      time: '15:00',
      title: 'Церемония бракосочетания',
      description: 'Торжественная регистрация в ЗАГСе',
      icon: Heart,
      color: 'rose'
    },
    {
      time: '16:00',
      title: 'Фотосессия',
      description: 'Свадебная фотосессия в парке',
      icon: Camera,
      color: 'pink'
    },
    {
      time: '17:30',
      title: 'Банкет',
      description: 'Праздничный ужин и поздравления',
      icon: Utensils,
      color: 'amber'
    },
    {
      time: '19:00',
      title: 'Первый танец',
      description: 'Танец молодоженов',
      icon: Music,
      color: 'purple'
    },
    {
      time: '20:00',
      title: 'Танцы и веселье',
      description: 'Танцевальная программа для гостей',
      icon: Sparkles,
      color: 'indigo'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="w-[800px] h-[600px] bg-white rounded-lg shadow-2xl p-8 overflow-y-auto"
    >
      <div className="text-center mb-8">
        <Clock className="w-10 h-10 mx-auto mb-3 text-rose-500" />
        <h2 className="text-3xl text-gray-800 font-serif">Программа дня</h2>
        <p className="text-gray-600 mt-2">15 июня 2026</p>
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        {schedule.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 items-start p-4 rounded-lg bg-gradient-to-r from-rose-50 to-pink-50 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full bg-${item.color}-100 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-2xl text-rose-600 font-serif">{item.time}</span>
                  <h3 className="text-xl text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-8 p-4 bg-rose-50 rounded-lg"
      >
        <p className="text-gray-700">
          <strong>Дресс-код:</strong> Праздничный, приветствуются пастельные тона
        </p>
      </motion.div>
    </motion.div>
  );
}
