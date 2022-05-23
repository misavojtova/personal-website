import React, { useEffect, useState } from 'react';
import Button from 'pages/home/components/Button';
import Title from 'pages/home/components/Title';

const Home = () => {
  // const [animate, setAnimate] = useState('');

  // useEffect(() => {
  //   setInterval(() => {
  //     setTimeout(() => {
  //       setAnimate('');
  //     }, 2000);
  //     setAnimate('animate-btn-anim');
  //   }, 8000);
  // }, []);

  return (
    <div className='cm-flex-col h-full '>
      <Title />
      <Button extraClass={` hover:animate-btn-anim  my-6 lg:py-5 lg:px-10 `}>
        Download Resume
      </Button>
    </div>
  );
};

export default Home;
