import { ColorCodes } from '../constants/color-codes';
import { IColorCode } from '../types';

export const getNextColorCode = (prevCode: IColorCode) => {
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
