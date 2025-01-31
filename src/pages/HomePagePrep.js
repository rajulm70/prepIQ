import React, { useState, useEffect } from 'react';
import {
  Brain,
  PenTool,
  FileQuestion,
  FileSearch,
  CheckSquare,
  ChevronRight
} from 'lucide-react';
import './HomePagePrep.css';
import All from './All';
import ReviewsAndAchievements from './ReviewsAndAchievements';
import HeaderNew from '../components/Layout/HeaderNew';

const HomePagePrep = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      
      <section
        id="home"
        className="hero"
        style={{
          height: '90vh',
          backgroundImage: `url('https://res.cloudinary.com/dnsjdvzdn/image/upload/v1737657693/freepik__upload__25003_pklgv5.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '0 20px',
        }}
      >
        <h1
          className="animate-fade-in"
          style={{ color: 'white', fontSize: '3rem', textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', marginTop: '13%' }}
        >
          Elevate Your Learning with <span style={{ color: '6f8ecd' }}>AI-Powered Tools</span>
        </h1>
        <p
          style={{
            maxWidth: '600px',
            fontSize: '1.5rem',
            marginBottom: '20px',
            animation: 'fadeIn 2s',
          }}
        >
          Transform your learning experience with our suite of AI-powered tools
          designed to help you excel in interviews, writing, and more.
        </p>
        <div className="buttons" style={{ display: 'flex', gap: '15px' }}>
          <button
            className="button-primary"
            style={{
              backgroundColor: '#7D5D50',
              padding: '15px 30px',
              fontSize: '1rem',
              borderRadius: '25px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </button>
          <button
            className="button-secondary"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid white',
              color: 'white',
              padding: '15px 30px',
              fontSize: '1rem',
              borderRadius: '25px',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#7D5D50';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#6f8ecd';
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      <All />
      <ReviewsAndAchievements />
    </div>
  );
};

export default HomePagePrep;
