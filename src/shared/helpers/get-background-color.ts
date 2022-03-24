import { ColorCodes, ColorRGBValues } from '../constants';
import { IColorCode } from '../types';

export const getBackgroundColor = (colorCode: IColorCode) => {
  switch (colorCode) {
    case ColorCodes.Red:
      return ColorRGBValues.Red;
    case ColorCodes.Blue:
      return ColorRGBValues.Blue;
    case ColorCodes.Green:
      return ColorRGBValues.Green;
    default:
      return;
  }
};
