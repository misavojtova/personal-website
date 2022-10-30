import React, { FC } from 'react';
import { skills } from 'core/skills';
import { HOVER_SCALE_ANIMATION_ONE, REGULAR_ICON_SIZE } from 'core/config/configSize';

interface SingleSkillBoxProps {
  icon: any;
  title: string;
}
const SingleSkillBox: FC<SingleSkillBoxProps> = ({ icon, title }) => {
  return (
    <div
      className={`flex cursor-pointer flex-col items-center justify-center ${HOVER_SCALE_ANIMATION_ONE}`}
    >
      <div className={`${REGULAR_ICON_SIZE}`}>{icon}</div>
      {title}
    </div>
  );
};

export const SkillBox = () => {
  return (
    <div className='grid grid-flow-row grid-cols-3 gap-y-6'>
      {skills.map((item: { key: React.Key; icon: any; title: string }) => {
        return <SingleSkillBox key={item.key} icon={item.icon} title={item.title} />;
      })}
    </div>
  );
};

export default SkillBox;
