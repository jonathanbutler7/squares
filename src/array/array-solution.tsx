import { useEffect, useState } from 'react';
import { Square } from '../shared/components/square';
import {
  getSquareNeighbors,
  ColorCodes,
  Neighbors,
  getNextColorCode,
  GameStatus,
  Grid,
  SelectGridSize,
} from '../shared';

type ISquare = { colorCode: 0 | 1 | 2 | undefined };

const GRID_SIZE = 4;

const isGridAllGreen = (squares: ISquare[]) =>
  squares.every((square) => square.colorCode === ColorCodes.Green);

export const ArraySolution = () => {
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
    if (leftNeighbor) {
      squares[leftNeighbor].colorCode = ColorCodes.Blue;
    }
    if (rightNeighbor) {
      squares[rightNeighbor].colorCode = ColorCodes.Blue;
    }
    if (bottomNeighbor) {
      squares[bottomNeighbor].colorCode = ColorCodes.Blue;
    }
    if (topNeighbor !== undefined) {
      squares[topNeighbor].colorCode = ColorCodes.Blue;
    }
  };

  const handleGreenClick = ({
    leftNeighbor,
    rightNeighbor,
    topNeighbor,
    bottomNeighbor,
  }: Neighbors) => {
    if (leftNeighbor) {
      if (squares[leftNeighbor].colorCode === ColorCodes.Red) {
        squares[leftNeighbor].colorCode = ColorCodes.Blue;
      }
      if (squares[leftNeighbor].colorCode === ColorCodes.Blue) {
        squares[leftNeighbor].colorCode = ColorCodes.Green;
      }
    }
    if (rightNeighbor) {
      if (squares[rightNeighbor].colorCode === ColorCodes.Blue) {
        squares[rightNeighbor].colorCode = ColorCodes.Green;
      }
      if (squares[rightNeighbor].colorCode === ColorCodes.Red) {
        squares[rightNeighbor].colorCode = ColorCodes.Blue;
      }
    }
    if (bottomNeighbor) {
      if (squares[bottomNeighbor].colorCode === ColorCodes.Blue) {
        squares[bottomNeighbor].colorCode = ColorCodes.Green;
      }
      if (squares[bottomNeighbor].colorCode === ColorCodes.Red) {
        squares[bottomNeighbor].colorCode = ColorCodes.Blue;
      }
    }
    if (topNeighbor !== undefined) {
      if (squares[topNeighbor].colorCode === ColorCodes.Blue) {
        squares[topNeighbor].colorCode = ColorCodes.Green;
      }
      if (squares[topNeighbor].colorCode === ColorCodes.Red) {
        squares[topNeighbor].colorCode = ColorCodes.Blue;
      }
    }
  };

  const handleClick = (squareId: number) => {
    const neighbors = getSquareNeighbors({ squareId, gridSize });

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
      <h1>Solution using 1D Array</h1>
      <SelectGridSize
        options={[4, 5, 6]}
        gridSize={gridSize}
        setGridSize={setGridSize}
        handleReset={() => {
          resetClicks();
          resetColors();
        }}
      />
      <Grid gridSize={gridSize}>
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
      </Grid>
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
