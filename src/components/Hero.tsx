import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            CHATRON 2.0
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Next-Gen AI Business Platform transforming customer interactions through advanced NLP, analytics, and AR technology
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all flex items-center gap-2 mx-auto"
          >
            Get Started <BsArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}