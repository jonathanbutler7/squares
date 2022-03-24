import { IColorCode, ColorCodes } from '..';

export const getScreenReaderColor = (colorCode: IColorCode) => {
  switch (colorCode) {
    case ColorCodes.Red:
      return 'red';
    case ColorCodes.Blue:
      return 'blue';
    case ColorCodes.Green:
      return 'green';
    default:
      return;
  }
};
