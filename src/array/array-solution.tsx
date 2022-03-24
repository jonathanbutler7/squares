import { useEffect, useState } from 'react';
import { Square } from '../shared/components/square';
import {
  getSquareNeighbors,
  ColorCodes,
  Neighbors,
  getNextColorCode,
} from '../shared';
import { GameStatus } from '../shared/components/game-status';

type ISquare = { colorCode: 0 | 1 | 2 | undefined };

const GRID_SIZE = 4;

const isGridAllGreen = (squares: ISquare[]) =>
  squares.every((square) => square.colorCode === ColorCodes.Green);

export const HooksSolution = () => {
  const [clicks, setClicks] = useState(0);
  const [gridSize, setGridSize] = useState(GRID_SIZE);
  const [isGameOver, setIsGameOver] = useState(false);
  const GRID = Array(gridSize * gridSize).fill(null);
  const [squares, setSquares] = useState<ISquare[]>(
    GRID.map(() => ({ colorCode: ColorCodes.Red }))
  );

  useEffect(() => {
    setIsGameOver(isGridAllGreen(squares));
  }, [squares]);

  const resetColors = () => {
    setSquares(squares.map(() => ({ colorCode: ColorCodes.Red })));
  };

  const resetClicks = () => {
    setClicks(0);
  };

  const handleBlueClick = ({
    leftNeighbor,
    rightNeighbor,
    topNeighbor,
    bottomNeighbor,
  }: Neighbors) => {
    if (leftNeighbor !== Infinity) {
      squares[leftNeighbor].colorCode = 1;
    }
    if (rightNeighbor !== Infinity) {
      squares[rightNeighbor].colorCode = 1;
    }
    if (bottomNeighbor !== Infinity) {
      squares[bottomNeighbor].colorCode = 1;
    }
    if (topNeighbor !== Infinity) {
      squares[topNeighbor].colorCode = 1;
    }
  };

  const handleGreenClick = ({
    leftNeighbor,
    rightNeighbor,
    topNeighbor,
    bottomNeighbor,
  }: Neighbors) => {
    if (leftNeighbor !== Infinity) {
      if (squares[leftNeighbor].colorCode === ColorCodes.Red) {
        squares[leftNeighbor].colorCode = ColorCodes.Blue;
      }
      if (squares[leftNeighbor].colorCode === ColorCodes.Blue) {
        squares[leftNeighbor].colorCode = ColorCodes.Green;
      }
    }
    if (rightNeighbor !== Infinity) {
      if (squares[rightNeighbor].colorCode === ColorCodes.Blue) {
        squares[rightNeighbor].colorCode = ColorCodes.Green;
      }
      if (squares[rightNeighbor].colorCode === ColorCodes.Red) {
        squares[rightNeighbor].colorCode = ColorCodes.Blue;
      }
    }
    if (bottomNeighbor !== Infinity) {
      if (squares[bottomNeighbor].colorCode === ColorCodes.Blue) {
        squares[bottomNeighbor].colorCode = ColorCodes.Green;
      }
      if (squares[bottomNeighbor].colorCode === ColorCodes.Red) {
        squares[bottomNeighbor].colorCode = ColorCodes.Blue;
      }
    }
    if (topNeighbor !== Infinity) {
      if (squares[topNeighbor].colorCode === ColorCodes.Blue) {
        squares[topNeighbor].colorCode = ColorCodes.Green;
      }
      if (squares[topNeighbor].colorCode === ColorCodes.Red) {
        squares[topNeighbor].colorCode = ColorCodes.Blue;
      }
    }
  };

  const handleClick = (squareId: number) => {
    const neighbors = getSquareNeighbors({ squareId, GRID_SIZE });

    setSquares(
      squares.map((square, index) => {
        if (index === squareId) {
          if (square.colorCode === ColorCodes.Blue) {
            handleBlueClick(neighbors);
          }
          if (square.colorCode === ColorCodes.Green) {
            handleGreenClick(neighbors);
          }
          // this line advances the color of the clicked square
          return { colorCode: getNextColorCode(square.colorCode) };
        } else {
          return square;
        }
      })
    );
  };

  return (
    <>
      <h1>Solution using hooks and Array.prototype</h1>
      <p style={{ display: 'inline' }}>Set grid size: </p>
      <select
        onChange={(e) => {
          setGridSize(+e.target.value);
          resetClicks();
          resetColors();
        }}
      >
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
      </select>
      <div
        style={{
          border: '5px solid darkblue',
          display: 'grid',
          gridTemplate: `repeat(${GRID_SIZE}, 1fr) / repeat(${GRID_SIZE}, 1fr)`,
        }}
      >
        {squares.map((square, squareId) => (
          <Square
            key={squareId}
            colorCode={square.colorCode}
            onClick={() => {
              handleClick(squareId);
              setClicks((clicks) => clicks + 1);
            }}
          />
        ))}
      </div>
      <br />
      <GameStatus
        isGameOver={isGameOver}
        clicks={clicks}
        handleReset={() => {
          resetClicks();
          resetColors();
        }}
      />
    </>
  );
};
