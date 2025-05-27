import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id='Contact' className="min-h-screen bg-gray-900 text-white py-16 px-6 font-poppins">
      <motion.div
        className="max-w-4xl mx-auto bg-gray-800 rounded-3xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold text-center mb-8 text-white">Свяжитесь с нами</h2>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name..."
              className="w-full p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <input
              type="email"
              placeholder="qwerty@example"
              className="w-full p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <input
            type="text"
            placeholder="Тема сообщения.."
            className="w-full p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <textarea
            placeholder="Ваше сообщение"
            rows="5"
            className="w-full p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
          >
            Отправить сообщение
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;

