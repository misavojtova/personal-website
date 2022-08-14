import useWindowDimensions from 'core/hooks/useWindowDimensions';

export default function useSize() {
  const { width } = useWindowDimensions();
  const onePercentWidth = width / 100;
  // Break Points
  const six = 640;
  const seven = 768;
  const ten = 1024;

  // Paddings
  const mainContainerPadding = onePercentWidth * 4;

  // font Size
  const fontTextSize = onePercentWidth * 4;

  // Icon Size
  const iconSkillSize = onePercentWidth * 6;

  const iconNavbarSize =
    width < six
      ? onePercentWidth * 6 + 10
      : width < seven
      ? onePercentWidth * 5 + 10
      : width < ten
      ? onePercentWidth * 3.5 + 10
      : onePercentWidth * 2.5 + 10;

  return { fontTextSize, iconSkillSize, iconNavbarSize, mainContainerPadding };
}
