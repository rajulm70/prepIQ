import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Edit3, FileQuestion, FileText, CheckSquare, Brain, ChevronDown } from 'lucide-react';
import ServicesPopup from './ServicesPopup';
import CategoryDetails from './CategoryDetails';
import Reviews from './Reviews';

const services = [
  { name: 'AI Mock Interview', icon: Mic, description: 'Practice interviews with AI-powered feedback' },
  { name: 'Essay Writing', icon: Edit3, description: 'Get assistance in crafting compelling essays' },
  { name: 'Quiz Generation', icon: FileQuestion, description: 'Create custom quizzes for effective learning' },
  { name: 'PDF Enhancer', icon: FileText, description: 'Improve and analyze your PDF documents' },
  { name: 'Task Analyzer', icon: CheckSquare, description: 'Break down complex tasks with AI assistance' },
];

function NewHome() {
  const [showServices, setShowServices] = useState(false);

  return (
    <main>
      <Hero setShowServices={setShowServices} />
      <Services />
      <CategoryDetails services={services} />
      <Reviews />
      <AnimatePresence>
        {showServices && (
          <ServicesPopup services={services} onClose={() => setShowServices(false)} />
        )}
      </AnimatePresence>
    </main>
  );
}

const Hero = ({ setShowServices }) => {
  const title = "Welcome to AI-PREPHUB X BRIGHTWAYS";
  const [displayedTitle, setDisplayedTitle] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < title.length) {
        setDisplayedTitle((prev) => prev + title.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            {displayedTitle}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
            >
              |
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-3 text-base sm:text-lg md:mt-5 md:text-xl"
          >
            Empowering your learning journey with cutting-edge AI technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="mt-8 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Brain className="w-24 h-24 text-blue-500" />
            </motion.div>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center"
            onClick={() => setShowServices(true)}
          >
            Explore Our Services
            <ChevronDown className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-gray-900 text-center mb-8"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white overflow-hidden shadow rounded-lg cursor-pointer"
              onClick={() => setSelectedService(service.name)}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <service.icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="bg-white p-6 rounded-lg max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-2">{selectedService}</h3>
            <p>{services.find((s) => s.name === selectedService)?.description}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default NewHome;
