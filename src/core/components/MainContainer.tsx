import React from 'react';
import useWindowDimensions from 'core/hooks/useWindowDimensions';
import 'tailwind.css';

const MainContainer = ({ children }: any) => {
  const { height, width } = useWindowDimensions();
  console.log(height, width);
  console.log(children);
  return (
    <div
      style={{ height: `${height}px` }}
      className={`MainContainer bg-gradient-to-b from-gradient1 via-gradient2 to-gradient3 text-white`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
