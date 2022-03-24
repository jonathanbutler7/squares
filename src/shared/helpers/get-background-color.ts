import { ColorCodes } from '../constants/color-codes';

export const getBackgroundColor = (colorCode: any) => {
  switch (colorCode) {
    case ColorCodes.Red:
      return '#E2442F';
    case ColorCodes.Blue:
      return '#90A8ED';
    case ColorCodes.Green:
      return '#21a094';
    default:
      return;
  }
};
