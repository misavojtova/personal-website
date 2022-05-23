import React, { useEffect, useState } from 'react';
import 'tailwind.css';

const Title = () => {
  const [animate, setAnimate] = useState('translate-x-[-100%]');
  useEffect(() => {
    setTimeout(() => {
      setAnimate('translate-x-0');
    }, 500);
  }, []);

  return (
    <div className={`${animate.title} transition-transform duration-700 ease-in-out  `}>
      <h4 className='my-6 w-full text-center  text-[4vw] lg:text-[3vw]'>MICHAELA VOJTOVA</h4>
      <h5
        className='my-6 w-full text-center font-hachi text-[8vw] font-bold
       tracking-wide text-main-color text-transparent lg:text-[6vw] '
      >
        WEB DEVELOPER
      </h5>
    </div>
  );
};

export default Title;
