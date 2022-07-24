import React from 'react';
import Button from 'pages/home/components/Button';
import Title from 'pages/home/components/Title';
import pdf from 'assets/download/resume.pdf';
const Home = () => {
  return (
    <div className='cm-flex-col'>
      <Title />
      <Button extraClass={` hover:animate-btn-anim  my-6 lg:py-5 lg:px-10 `}>
        <a href={pdf} download='Michaela_Castellares_Vojtova_CV'>
          Download Resume
        </a>
      </Button>
    </div>
  );
};

export default Home;
