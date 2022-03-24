import { ColorCodes } from '../constants/color-codes';

export const getNextColorCode = (prevCode: 0 | 1 | 2 | undefined) => {
  switch (prevCode) {
    case ColorCodes.Red:
      return ColorCodes.Blue;
    case ColorCodes.Blue:
      return ColorCodes.Green;
    case ColorCodes.Green:
      return ColorCodes.Green;
    default:
      return;
  }
};
