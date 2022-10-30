import React, { FC, ReactNode } from 'react';
import useWindowDimensions from 'core/hooks/useWindowDimensions';
import { MAIN_APP_PADDING } from 'core/config/configSize';
import 'tailwind.css';

interface MainContainerProps {
  children: ReactNode;
}

const ContentContainer: FC<MainContainerProps> = ({ children }) => {
  const { height, width, contentHeight } = useWindowDimensions();
  return (
    <div
      style={{ height: `${width >= 768 ? contentHeight : height}px` }}
      className={` ${MAIN_APP_PADDING} flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
