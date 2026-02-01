import { motion } from 'motion/react';
import { Heart, Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form@7.55.0';
import { useState } from 'react';

interface FeedbackPageProps {
  onNext?: () => void;
  onPrev?: () => void;
}

interface FormData {
  name: string;
  guests: string;
  attendance: string;
  dietary: string;
  message: string;
}

export function FeedbackPage({ }: FeedbackPageProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Here would be the integration with backend/Supabase
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="w-[800px] h-[600px] bg-white rounded-lg shadow-2xl p-8 overflow-y-auto"
    >
      <div className="text-center mb-6">
        <Heart className="w-10 h-10 mx-auto mb-3 text-rose-500 fill-rose-500" />
        <h2 className="text-3xl text-gray-800 font-serif">Подтверждение присутствия</h2>
        <p className="text-gray-600 mt-2">Пожалуйста, заполните форму до 1 июня 2026</p>
      </div>

      {submitted ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center justify-center py-12"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
          <h3 className="text-2xl text-gray-800 mb-2">Спасибо!</h3>
          <p className="text-gray-600">Ваш ответ успешно отправлен</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">
              Ваше имя и фамилия <span className="text-rose-500">*</span>
            </label>
            <input
              {...register('name', { required: 'Это поле обязательно' })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
              placeholder="Иван Иванов"
            />
            {errors.name && <p className="text-rose-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Количество гостей <span className="text-rose-500">*</span>
            </label>
            <select
              {...register('guests', { required: 'Это поле обязательно' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
            >
              <option value="">Выберите...</option>
              <option value="1">1 человек</option>
              <option value="2">2 человека</option>
              <option value="3">3 человека</option>
              <option value="4">4 человека</option>
            </select>
            {errors.guests && <p className="text-rose-500 text-sm mt-1">{errors.guests.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Подтверждение присутствия <span className="text-rose-500">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  {...register('attendance', { required: 'Пожалуйста, выберите вариант' })}
                  type="radio"
                  value="yes"
                  className="text-rose-500 focus:ring-rose-500"
                />
                <span className="text-gray-700">Да, я буду</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  {...register('attendance', { required: 'Пожалуйста, выберите вариант' })}
                  type="radio"
                  value="no"
                  className="text-rose-500 focus:ring-rose-500"
                />
                <span className="text-gray-700">К сожалению, не смогу</span>
              </label>
            </div>
            {errors.attendance && <p className="text-rose-500 text-sm mt-1">{errors.attendance.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Особенности питания
            </label>
            <input
              {...register('dietary')}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
              placeholder="Вегетарианство, аллергии и т.д."
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Пожелания молодоженам
            </label>
            <textarea
              {...register('message')}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none resize-none"
              placeholder="Ваши теплые слова..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Отправить
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}
