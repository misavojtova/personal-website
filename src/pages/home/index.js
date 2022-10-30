import React from 'react';
import pdf from 'assets/download/resume.pdf';
import { SkillBox } from 'pages/home/components/SkillBox';
import { TITLE_TEXT, CUSTOM_WIDTH_55, CUSTOM_WIDTH_45 } from 'core/config/configSize';
import { BASIC_GREY } from 'core/config/configColor';
import { TitleParagraph, Button } from 'core/components/elements/index';

const Home = () => (
  <>
    <div className={`flex w-full justify-between ${BASIC_GREY}`}>
      <div className={`${CUSTOM_WIDTH_55} text-${TITLE_TEXT}`}>
        <TitleParagraph>Welcome On My Website,</TitleParagraph>
        <TitleParagraph>My Name Is Michaela Vojtova</TitleParagraph>
        <TitleParagraph>I Work As A Freelance Front End Developer</TitleParagraph>

        <div className='w-full'>
          <Button styles={` hover:animate-btn-anim  my-6 lg:py-5 lg:px-10 `}>
            <a href={pdf} download='Michaela_Castellares_Vojtova_CV'>
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      <div className={`${CUSTOM_WIDTH_45}`}>
        <SkillBox />
      </div>
    </div>
  </>
);

export default Home;
