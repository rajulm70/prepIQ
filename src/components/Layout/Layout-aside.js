import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';

const LayoutSide = ({ children, title, description, keywords, author }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
        <title>{title}</title>
      </Helmet>
      <div style={{ display: 'flex', flex: '1' }}>
        <Sidebar />
        <main style={{ flex: '1', minHeight: '70vh', padding: '20px' }}>
          <Toaster />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

LayoutSide.defaultProps = {
  title: "ShopSphere - Your Ultimate Shopping Destination",
  description: "Discover a wide range of products with amazing offers on ShopSphere. Built with the MERN stack for a seamless shopping experience.",
  keywords: "ShopSphere, e-commerce, shopping, deals, MERN, React, Node, MongoDB",
  author: "rajulm70",
};

export default LayoutSide;
