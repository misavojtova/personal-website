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
    <div className='hover: flex flex-col items-center justify-center'>
      <div style={{ fontSize: iconNavbarSize }}>{icon}</div>
      {title}
    </div>
  );
};

export const SkillBox = () => {
  return (
    <div className='grid grid-flow-row grid-cols-3'>
      {skills.map((item: { key: React.Key; icon: any; title: string }) => {
        return <SingleSkillBox key={item.key} icon={item.icon} title={item.title} />;
      })}
    </div>
  );
};

export default SkillBox;
