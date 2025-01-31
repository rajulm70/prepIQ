import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CategoryDetails({ services }) {
  return (
    <section className="py-16">
      {services.map((service, index) => (
        <CategorySection key={service.name} service={service} index={index} />
      ))}
    </section>
  );
}

function CategorySection({ service, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`flex flex-col ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center justify-between max-w-6xl mx-auto px-4 mb-16`}
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
        <p className="text-lg text-gray-600 mb-6">{service.description}</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Feature 1 of {service.name}</li>
          <li>Feature 2 of {service.name}</li>
          <li>Feature 3 of {service.name}</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img
          src={`https://via.placeholder.com/400x300.png?text=${service.name}`}
          alt={service.name}
          className="rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
}

