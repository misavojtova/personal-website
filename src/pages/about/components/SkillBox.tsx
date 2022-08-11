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
    <div className='flex w-full items-center justify-center border-t-2 border-solid border-[#9e888d]'>
      <div className='AboutSkillBox m-b mb-[21px] flex w-[95%] justify-between p-[32px] text-[#9e888d]'>
        {skills.map((item: { key: React.Key; icon: any; title: string }) => {
          return <SingleSkillBox key={item.key} icon={item.icon} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default SkillBox;
