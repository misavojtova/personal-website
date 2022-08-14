import React from 'react';
import useWindowDimensions from 'core/hooks/useWindowDimensions';
import 'tailwind.css';
import useSize from 'core/hooks/useSize';

const MainContainer = ({ children }: any) => {
  const { height } = useWindowDimensions();
  const { mainContainerPadding } = useSize();
  return (
    <div
      style={{ height: `${height}px`, padding: `0 ${mainContainerPadding}px` }}
      className={`MainContainer bg-gradient-to-b from-gradient1 via-gradient2 to-gradient3 text-white`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
