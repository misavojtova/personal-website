import React from 'react';
import 'tailwind.css';

const Background = ({ children }) => {
  return <div className='h-screen bg-main-img bg-cover'>{children}</div>;
};

export default Background;
