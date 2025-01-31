import React from 'react';
import './AnimatedComponent.css';
import Layout from '../components/Layout/Layout';
import ResponseEnhancer from './ResponseEnhancer';

const AnimatedComponent = () => {
    return (
        <Layout>
            <div className="animated-container">
                <div className="context">
                    <ResponseEnhancer />
                </div>
                <div className="area">
                    <ul className="circles">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <li key={index}></li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>

    );
};

export default AnimatedComponent;