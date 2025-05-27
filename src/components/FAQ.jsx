import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Какие документы нужны для путешествия?',
    answer: 'Для большинства стран необходим загранпаспорт, виза (если требуется), билеты и страховка.',
  },
  {
    question: 'Можно ли отменить бронирование?',
    answer: 'Да, но условия зависят от тарифного плана. Некоторые брони возвратные, другие — нет.',
  },
  {
    question: 'Предоставляете ли вы страховку?',
    answer: 'Да, мы предлагаем страхование путешественников через партнёрские компании.',
  },
  {
    question: 'Как получить поддержку в другой стране?',
    answer: 'У нас есть круглосуточная служба поддержки, доступная по телефону и WhatsApp.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-white py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Часто задаваемые вопросы</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-700 pb-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium">{item.question}</h3>
              <span className="text-2xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-gray-400 text-base overflow-hidden"
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
