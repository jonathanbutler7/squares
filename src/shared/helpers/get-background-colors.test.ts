import { expect, test } from 'vitest';
import { ColorCodes, ColorRGBValues } from '../constants';
import { getBackgroundColor } from './get-background-color';

test('getBackgroundColor returns the correct values', () => {
  expect(getBackgroundColor(ColorCodes.Red)).toBe(ColorRGBValues.Red);
  expect(getBackgroundColor(ColorCodes.Blue)).toBe(ColorRGBValues.Blue);
  expect(getBackgroundColor(ColorCodes.Green)).toBe(ColorRGBValues.Green);
});
