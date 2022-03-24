import { ColorCodes } from './color-codes';

export const getBackgroundColor = (colorCode: any) => {
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
