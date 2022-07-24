import React from 'react';
import 'tailwind.css';

const Background = ({ children }) => {
  return (
    <div className='max-h-screen bg-gradient-to-b from-gradient1 via-gradient2 to-gradient3 bg-cover'>
      {children}
    </div>
  );
};

export default Background;
