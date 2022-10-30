import 'tailwind.css';
import { TITLE_TEXT } from 'core/config/configSize';
export const TitleParagraph = ({ children }) => <p className={`${TITLE_TEXT}`}>{children}</p>;
export const Button = ({ children, styles }) => (
  <button className={`${styles} font rounded-lg border-2 border-main-color py-2 px-4`}>
    {children}
  </button>
);
