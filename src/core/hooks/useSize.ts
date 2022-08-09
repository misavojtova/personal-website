import useWindowDimensions from 'core/hooks/useWindowDimensions';

export default function useSize() {
  const six = 640;
  const seven = 768;
  const ten = 1024;
  const twelve = 1280;

  const { width } = useWindowDimensions();
  const fontTextSize = (width / 100) * 4;
  const iconSkillSize = (width / 100) * 6;

  const iconNavbarSize =
    width < six
      ? (width / 100) * 6 + 10
      : width < seven
      ? (width / 100) * 5 + 10
      : width < ten
      ? (width / 100) * 3.5 + 10
      : (width / 100) * 2.5 + 10;

  return { fontTextSize, iconSkillSize, iconNavbarSize };
}
