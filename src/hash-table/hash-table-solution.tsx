import { useState } from 'react';
import {
  getBackgroundColor,
  ColorCodes,
  getSquareNeighbors,
  Neighbors,getNextColorCode
} from '../shared';

const GRID_SIZE = 4;

const gridValues: Record<number, { colorCode: 0 | 1 | 2 }> = {};

for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
  gridValues[i] = { colorCode: 0 };
}

const initialState = gridValues;



export const HashTableSolution = () => {
  const [squares, setSquares] = useState(initialState);
  const [clicks, setClicks] = useState(0);

  const handleBlueClick = ({
    squareId,
    leftNeighbor,
    rightNeighbor,
    topNeighbor,
    bottomNeighbor,
  }: Neighbors & { squareId: number }) => {
    return {
      ...squares,
      [squareId]: {
        colorCode: getNextColorCode(squares[squareId].colorCode),
      },
      [leftNeighbor]: { colorCode: ColorCodes.Blue },
      [rightNeighbor]: { colorCode: ColorCodes.Blue },
      [topNeighbor]: { colorCode: ColorCodes.Blue },
      [bottomNeighbor]: { colorCode: ColorCodes.Blue },
    };
  };

  const handleGreenClick = ({
    squareId,
    leftNeighbor,
    rightNeighbor,
    topNeighbor,
    bottomNeighbor,
  }: Neighbors & { squareId: number }) => {
    return {
      ...squares,
      [squareId]: {
        colorCode: getNextColorCode(squares[squareId].colorCode),
      },
      [leftNeighbor]: {
        colorCode:
          squares[leftNeighbor].colorCode === ColorCodes.Red
            ? ColorCodes.Blue
            : ColorCodes.Green,
      },
      [rightNeighbor]: {
        colorCode:
          squares[rightNeighbor].colorCode === ColorCodes.Red
            ? ColorCodes.Blue
            : ColorCodes.Green,
      },
      [topNeighbor]: {
        colorCode:
          squares[topNeighbor].colorCode === ColorCodes.Red
            ? ColorCodes.Blue
            : ColorCodes.Green,
      },
      [bottomNeighbor]: {
        colorCode:
          squares[squareId].colorCode === ColorCodes.Red
            ? ColorCodes.Blue
            : ColorCodes.Green,
      },
    };
  };

  const handleClick = (squareId: number) => {
    const { leftNeighbor, rightNeighbor, topNeighbor, bottomNeighbor } =
      getSquareNeighbors({ squareId, GRID_SIZE });

    setSquares((squares) => {
      if (squares[squareId].colorCode === ColorCodes.Red) {
        return {
          ...squares,
          [squareId]: {
            colorCode: getNextColorCode(squares[squareId].colorCode),
          },
        };
      }
      if (squares[squareId].colorCode === ColorCodes.Blue) {
        handleBlueClick({
          squareId,
          leftNeighbor,
          rightNeighbor,
          topNeighbor,
          bottomNeighbor,
        });
      }
      if (squares[squareId].colorCode === ColorCodes.Green) {
        handleGreenClick({
          squareId,
          leftNeighbor,
          rightNeighbor,
          topNeighbor,
          bottomNeighbor,
        });
      } else {
        return squares;
      }
    });
  };

  const handleReset = () => {
    setClicks(0);
    setSquares(initialState);
  };

  return (
    <>
      <h1>Hash table solution </h1>
      <div
        style={{
          border: '5px solid darkblue',
          display: 'grid',
          gridTemplate: `repeat(${GRID_SIZE}, 1fr) / repeat(${GRID_SIZE}, 1fr)`,
        }}
      >
        {Object.values(squares).map((square, squareId) => (
          <button
            key={squareId}
            onClick={() => {
              handleClick(squareId);
              setClicks((clicks) => clicks + 1);
            }}
            className='cell'
            style={{
              background: getBackgroundColor(square.colorCode),
              height: 40,
              border: '1px solid black',
            }}
          >
            {square.colorCode}
          </button>
        ))}
      </div>
      <p>
        <b>Clicks:</b> {clicks}
      </p>
      <button disabled={clicks === 0} onClick={handleReset}>
        Reset game
      </button>
    </>
  );
};
