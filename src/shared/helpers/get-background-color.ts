import { ColorCodes, ColorRGBValues } from '../constants';

export const getBackgroundColor = (colorCode: any) => {
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
