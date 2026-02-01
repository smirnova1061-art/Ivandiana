import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form@7.55.0';
import { useState } from 'react';

interface FormData {
  name: string;
  guests: string;
  attendance: string;
  message: string;
}

export function Page6() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <div className="w-full h-full p-8 flex flex-col overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="h-full flex flex-col"
      >
        <div className="text-center mb-4">
          <h3 className="text-xl text-stone-700 font-serif mb-1" style={{ fontFamily: 'Georgia, serif' }}>
            Подтверждение
          </h3>
          <p className="text-stone-500 text-xs">до 1 июня</p>
        </div>

        {submitted ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600/70 mb-2" />
            <h4 className="text-base text-stone-700">Спасибо!</h4>
            <p className="text-stone-600 text-xs">Ответ получен</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-2 text-xs">
            <div>
              <label className="block text-stone-700 mb-1 text-xs">
                Имя <span className="text-amber-700">*</span>
              </label>
              <input
                {...register('name', { required: true })}
                className="w-full px-2 py-1.5 border border-stone-300/50 rounded bg-white/50 focus:ring-1 focus:ring-amber-500/50 focus:border-transparent outline-none text-xs"
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label className="block text-stone-700 mb-1 text-xs">
                Гостей <span className="text-amber-700">*</span>
              </label>
              <select
                {...register('guests', { required: true })}
                className="w-full px-2 py-1.5 border border-stone-300/50 rounded bg-white/50 focus:ring-1 focus:ring-amber-500/50 outline-none text-xs"
              >
                <option value="">Выберите...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div>
              <label className="block text-stone-700 mb-1 text-xs">
                Присутствие <span className="text-amber-700">*</span>
              </label>
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-xs cursor-pointer">
                  <input {...register('attendance', { required: true })} type="radio" value="yes" className="text-amber-600" />
                  <span className="text-stone-700">Буду</span>
                </label>
                <label className="flex items-center gap-2 text-xs cursor-pointer">
                  <input {...register('attendance', { required: true })} type="radio" value="no" className="text-amber-600" />
                  <span className="text-stone-700">Не смогу</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-stone-700 mb-1 text-xs">Пожелания</label>
              <textarea
                {...register('message')}
                rows={2}
                className="w-full px-2 py-1.5 border border-stone-300/50 rounded bg-white/50 focus:ring-1 focus:ring-amber-500/50 outline-none resize-none text-xs"
                placeholder="Теплые слова..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-amber-700/70 text-white rounded hover:bg-amber-700/80 transition-colors flex items-center justify-center gap-2 text-xs mt-3"
            >
              <Send className="w-3 h-3" />
              Отправить
            </button>
          </form>
        )}

        <div className="text-center text-stone-400 text-xs mt-3">— 5 —</div>
      </motion.div>
    </div>
  );
}
