import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reviews = [
  {
    name: 'John Doe',
    role: 'Student',
    content: 'AI-PREPHUB has revolutionized my study habits. The AI Mock Interview feature helped me ace my job interviews!',
    avatar: 'https://via.placeholder.com/60x60.png?text=JD',
  },
  {
    name: 'Jane Smith',
    role: 'Professional',
    content: 'The Essay Writing assistance is top-notch. It\'s like having a personal writing coach available 24/7.',
    avatar: 'https://via.placeholder.com/60x60.png?text=JS',
  },
  {
    name: 'Mike Johnson',
    role: 'Teacher',
    content: 'As an educator, I find the Quiz Generation tool incredibly useful for creating engaging assessments for my students.',
    avatar: 'https://via.placeholder.com/60x60.png?text=MJ',
  },
];

export default function Reviews() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index }) {
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center mb-4">
        <img
          src={review.avatar || "/placeholder.svg"}
          alt={review.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold">{review.name}</h3>
          <p className="text-gray-600 text-sm">{review.role}</p>
        </div>
      </div>
      <p className="text-gray-700">{review.content}</p>
    </motion.div>
  );
}

