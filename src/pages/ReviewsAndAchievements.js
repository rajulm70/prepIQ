import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Building2, Trophy } from 'lucide-react';
import './ReviewsAndAchievements.css';

// Achievements Data
const achievements = [
  { icon: Users, label: "Happy Clients", value: "10,000+" },
  { icon: Trophy, label: "Awards Won", value: "50+" },
  { icon: Building2, label: "Global Offices", value: "25" },
  { icon: Award, label: "Success Rate", value: "99%" }
];

// Reviews Data
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    content: "The best service we've ever used! The team went above and beyond our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    content: "Incredible results and outstanding support. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Product Manager",
    content: "Their expertise transformed our business. We saw immediate results.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];

// New Content
const contentSections = [
  {
    title: "AI Mock Interview",
    description: "Prepare for your upcoming job interview with our AI-powered platform.",
    details: [
      "Personalized interview experience",
      "Real-time feedback and analysis",
      "Tailored to your job role"
    ],
    icon: Users,
    bgGradient: "bg-gradient-to-br from-[#7D5D50] via-[#6f8ecd] to-[#282832]"
  },
  {
    title: "AI Essay Writing",
    description: "Enhance your essay writing skills with our AI-powered platform.",
    details: [
      "Real-time feedback on essays",
      "Personalized writing tips",
      "Grammar and tone adjustments"
    ],
    icon: Trophy,
    bgGradient: "bg-gradient-to-br from-[#7D5D50] via-[#6f8ecd] to-[#282832]"
  },
  {
    title: "AI-Powered Quiz",
    description: "Test your knowledge with quizzes. Instant feedback and detailed explanations.",
    details: [
      "Customized quizzes based on your learning",
      "Instant feedback with detailed explanations",
      "Track progress and improvement"
    ],
    icon: Building2,
    bgGradient: "bg-gradient-to-br from-[#7D5D50] via-[#6f8ecd] to-[#282832]"
  },
  {
    title: "AI-Notes Enhancer",
    description: "Transform your study materials into concise, engaging, and visually appealing summaries with Notes Enhancer.",
    details: [
      "Study Amplifier with AI-driven summaries",
      "Concise content transformation",
      "Engaging and visually appealing summaries"
    ],
    icon: Award,
    bgGradient: "bg-gradient-to-br from-[#7D5D50] via-[#6f8ecd] to-[#282832]"
  }
];

const ReviewsAndAchievements = () => {
  return (
    <div className="py-20 px-6 sm:px-8 lg:px-16">

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
<h2 className="text-4xl mb-4 font-museo" style={{ color: '#6F8ECD', fontWeight: '900' }}>Our Achievements</h2>



          <p className="text-lg text-gray-600 font-nerko" style={{ color: '#6F8ECD' }}>Enhance your interview, writing, and quiz skills with AI-powered features tailored to your needs.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {contentSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${section.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all`}
            >
              <div className="flex flex-col items-center text-center">
                <section.icon className="w-16 h-16 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4 font-museo">{section.title}</h3>
                <p className="text-lg text-white mb-6 font-nerko">{section.description}</p>
                <ul className="text-white text-sm space-y-2">
                  {section.details.map((detail, i) => (
                    <li key={i} className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
<h2 className="text-4xl mb-4 font-museo" style={{ color: '#6F8ECD', fontWeight: '900' }}>Our Achievements</h2>


          <p className="text-lg text-gray-600 font-nerko" style={{ color: '#6F8ECD' }}>Milestones that define our success story</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#7D5D50] via-[#6f8ecd] to-[#282832] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <achievement.icon className="w-16 h-16 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2 font-museo">{achievement.value}</h3>
                <p className="text-lg text-white font-nerko">{achievement.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 font-museo">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 font-nerko">Don't just take our word for it</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#7D5D50] via-[#6f8ecd] to-[#282832] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-6"
                />
                <div>
                  <h3 className="font-semibold text-white text-xl font-museo">{review.name}</h3>
                  <p className="text-white text-sm font-nerko">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white text-lg font-nerko">{review.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndAchievements;
