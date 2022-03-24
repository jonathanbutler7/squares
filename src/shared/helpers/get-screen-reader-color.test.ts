import { expect, test } from 'vitest';
import { ColorCodes } from '../constants';
import { getScreenReaderColor } from './get-screen-reader-color';

test('getScreenReaderColor returns the correct human understandable names for the colors of the squares', () => {
  expect(getScreenReaderColor(ColorCodes.Red)).toEqual('red');
  expect(getScreenReaderColor(ColorCodes.Blue)).toEqual('blue');
  expect(getScreenReaderColor(ColorCodes.Green)).toEqual('green');
});
