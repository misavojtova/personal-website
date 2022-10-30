import React from 'react';
import 'tailwind.css';
import useWindowDimensions from 'core/hooks/useWindowDimensions';

const MainContainer = ({ children }: any) => {
  const { height } = useWindowDimensions();
  return (
    <div
      style={{ height: height }}
      className={` bg-gradient-to-b from-gradient1 via-gradient2 to-gradient3 text-white`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
