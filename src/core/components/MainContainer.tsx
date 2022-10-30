import React, { FC, ReactNode } from 'react';
import 'tailwind.css';
import useWindowDimensions from 'core/hooks/useWindowDimensions';
import { DEFAULT_TEXT_COLOR } from 'core/config/configColor';

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  const { height } = useWindowDimensions();
  return (
    <div
      style={{ height: height }}
      className={` bg-gradient-to-b from-gradient1 via-gradient2 to-gradient3 ${DEFAULT_TEXT_COLOR}`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
