import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout/Layout';
import { useAuth } from "../context/auth";
import MockInt from './MockInt';
import MockEssay from './MockEssay';
import MockQuizzy from './MockQuiz';
import './Dashboard.css';
import Working from './Working';
import FocusComponent from './FocusComponent';
import Spinner from '../components/Spinner';
import MockEnhancer from './MockEnhancer';
import MockTask from './MockTask';
import All from './All';
import Random from './Random';
import NewHome from './NewHome';
import HomePagePrep from './HomePagePrep';

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(true);

  // Create a ref for the dashboard container
  const dashboardRef = useRef(null);

  // Function to scroll to the dashboard section
  const scrollToDashboard = () => {
    if (dashboardRef.current) {
      dashboardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout title={'AI-Mocker Dashboard'}>
      {loading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <>
          {/* <NewHome /> */}
          <HomePagePrep />
          {/* <FocusComponent scrollToDashboard={scrollToDashboard} /> */}
          <div ref={dashboardRef} className="dashboard-container">
            {/* <All /> */}
            {/* <MockEnhancer />
            <MockTask /> */}
          </div>
          <Working />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
