import useWindowDimensions from 'core/hooks/useWindowDimensions';
import 'tailwind.css';

const ContentContainer = ({ children }) => {
  const { height, width } = useWindowDimensions();

  const renderHeight = width >= 768 ? (height / 100) * 90 : height;

  return (
    <div
      style={{ height: `${renderHeight}px` }}
      className={`ContentContainer flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
