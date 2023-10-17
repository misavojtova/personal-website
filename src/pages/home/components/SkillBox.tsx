import React, { FC } from 'react';
import { skills } from 'core/skills';
import { HOVER_SCALE_ANIMATION_ONE, REGULAR_ICON_SIZE } from 'core/config/configSize';
import styled from 'styled-components';

interface SingleSkillBoxProps {
  icon: any;
  title: string;
}

const SkillWrapper = styled.div({
  display: 'flex',
  cursor: 'pointer',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,

  ':hover': {
    background: 'yellowe',
    transform: 'scale(1.1)',
  },
});

const SingleSkillBox: FC<SingleSkillBoxProps> = ({ icon, title }) => {
  return (
    <SkillWrapper>
      <div className={`${REGULAR_ICON_SIZE}`}>{icon}</div>
      {title}
    </SkillWrapper>
  );
};

export const SkillBox = () => {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 25, margin: '0 5vw' }}>
        {skills.map((item: { key: React.Key; icon: any; title: string }) => {
          return <SingleSkillBox key={item.key} icon={item.icon} title={item.title} />;
        })}
      </div>
    </>
  );
};

export default SkillBox;
