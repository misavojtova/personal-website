import React, { FC } from 'react';
import pdf from 'assets/download/resume.pdf';
import { SkillBox } from 'pages/home/components/SkillBox';
import { TITLE_TEXT, CUSTOM_WIDTH_55, CUSTOM_WIDTH_45 } from 'core/config/configSize';
import { BASIC_GREY } from 'core/config/configColor';
import { TitleParagraph, Button } from 'core/components/elements/index';
import { Title } from 'core/styled';

const Home: FC = () => (
  <div className={`flex w-full justify-between ${BASIC_GREY}`}>
    <div className={`${CUSTOM_WIDTH_55} text-${TITLE_TEXT}`}>
      <Title style={{ fontSize: 30 }}>
        Welcome to my website, where creativity meets functionality! As a skilled front-end
        developer, I have mastered the art of creating user-friendly, visually appealing websites
        that leave a lasting impression.
      </Title>

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
);
export default Home;
