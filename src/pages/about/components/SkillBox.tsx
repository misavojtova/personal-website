import React, { FC } from 'react';
import { skills } from 'core/skills';
import useSize from 'core/hooks/useSize';

interface SingleSkillBoxProps {
  icon: any;
  title: string;
}
const SingleSkillBox: FC<SingleSkillBoxProps> = ({ icon, title }) => {
  const { iconNavbarSize } = useSize();
  return (
    <div className='hover: flex cursor-pointer flex-col items-center justify-center'>
      <div style={{ fontSize: iconNavbarSize }}>{icon}</div>
      {title}
    </div>
  );
};

export const SkillBox = () => {
  return (
    <div>
      <div className='AboutSkillBox grid grid-cols-3 gap-4'>
        {skills.map((item: { key: React.Key; icon: any; title: string }) => {
          return <SingleSkillBox key={item.key} icon={item.icon} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default SkillBox;
