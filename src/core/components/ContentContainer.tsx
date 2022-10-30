import useWindowDimensions from 'core/hooks/useWindowDimensions';
import { MAIN_APP_PADDING } from 'core/config/configSize';
import 'tailwind.css';

const ContentContainer = ({ children }) => {
  const { height, width } = useWindowDimensions();

  const renderHeight = width >= 768 ? (height / 100) * 92 : height;

  return (
    <div
      style={{ height: `${renderHeight}px` }}
      className={` ${MAIN_APP_PADDING} ContentContainer flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
