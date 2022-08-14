import React from 'react';
import Button from 'pages/home/components/Button';
import pdf from 'assets/download/resume.pdf';
import { SkillBox } from 'pages/about/components/SkillBox';

const Home = () => {
  return (
    <>
      <div className='Home flex w-full justify-between text-[#b8b8b8]'>
        <div className='w-[55%]'>
          <p style={{ fontSize: '3rem' }}>
            Welcome On My Website, <br />
          </p>
          <p style={{ fontSize: '3rem' }}>My Name Is Michaela Vojtova</p>
          <p style={{ fontSize: '3rem' }}>I Work As A Freelance Front End Developer</p>

          <div className='w-full'>
            <Button extraClass={` hover:animate-btn-anim  my-6 lg:py-5 lg:px-10 `}>
              <a href={pdf} download='Michaela_Castellares_Vojtova_CV'>
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className='w-[45%]'>
          <SkillBox />
        </div>
      </div>
    </>
  );
};

export default Home;
