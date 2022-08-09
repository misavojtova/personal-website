import React from 'react';
import 'tailwind.css';
const Button = ({ children, extraClass }) => {
  return (
    <button
      className={`${extraClass} font rounded-lg border-2 border-main-color py-2 px-4`}
    >
      {children}
    </button>
  );
};

export default Button;
