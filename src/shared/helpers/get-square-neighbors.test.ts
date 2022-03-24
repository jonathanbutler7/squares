import { expect, test } from 'vitest';
import { getSquareNeighbors } from './get-square-neighbors';
getSquareNeighbors;

test('getSquareNeighbors returns the correct values for bounds squares and undefined for out of bounds squares', () => {
  expect(getSquareNeighbors({ squareId: 0, gridSize: 4 })).toEqual({
    topNeighbor: undefined,
    rightNeighbor: 1,
    bottomNeighbor: 4,
    leftNeighbor: undefined,
  });
  expect(getSquareNeighbors({ squareId: 10, gridSize: 4 })).toEqual({
    topNeighbor: 6,
    rightNeighbor: 11,
    bottomNeighbor: 14,
    leftNeighbor: 9,
  });
  expect(getSquareNeighbors({ squareId: 12, gridSize: 4 })).toEqual({
    topNeighbor: 8,
    rightNeighbor: 13,
    bottomNeighbor: undefined,
    leftNeighbor: undefined,
  });
  expect(getSquareNeighbors({ squareId: 9, gridSize: 4 })).toEqual({
    topNeighbor: 5,
    rightNeighbor: 10,
    bottomNeighbor: 13,
    leftNeighbor: 8,
  });
});
