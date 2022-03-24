import { useEffect, useState } from 'react';
import {
  ColorCodes,
  getSquareNeighbors,
  Neighbors,
  getNextColorCode,
  ISquare,
  GameStatus,
  Grid,
  SelectGridSize,
  Square,
} from '../shared';

const GRID_SIZE = 4;

const getGrid = (gridSize: number) => {
  let gridValues: ISquare = {};

  for (let i = 0; i < gridSize * gridSize; i++) {
    gridValues[i] = { colorCode: ColorCodes.Red };
  }

  return gridValues;
};

const initialState = getGrid(GRID_SIZE);

const isGridAllGreen = (squares: ISquare) =>
  Object.values(squares).every(
    (square) => square.colorCode === ColorCodes.Green
  );

export const HashTableSolution = () => {
  const [squares, setSquares] = useState(initialState);
  const [clicks, setClicks] = useState(0);
  const [gridSize, setGridSize] = useState(GRID_SIZE);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    setIsGameOver(isGridAllGreen(squares));
  }, [squares]);

  const handleBlueClick = ({
    squareId,
    leftNeighbor,
    rightNeighbor,
    topNeighbor,
    bottomNeighbor,
  }: Neighbors & { squareId: number }) => {
    const newSquares = {
      ...(leftNeighbor && {
        [leftNeighbor]: { colorCode: ColorCodes.Blue },
      }),
      ...(rightNeighbor && {
        [rightNeighbor]: { colorCode: ColorCodes.Blue },
      }),
      ...(topNeighbor && {
        [topNeighbor]: { colorCode: ColorCodes.Blue },
      }),
      ...(bottomNeighbor && {
        [bottomNeighbor]: { colorCode: ColorCodes.Blue },
      }),
    };
    return {
      ...squares,
      [squareId]: {
        colorCode: ColorCodes.Green,
      },
      ...newSquares,
    };
  };

  const handleGreenClick = ({
    squareId,
    leftNeighbor,
    rightNeighbor,
    topNeighbor,
    bottomNeighbor,
  }: Neighbors & { squareId: number }) => {
    const newSquares = {
      ...(leftNeighbor && {
        [leftNeighbor]: {
          colorCode:
            squares[leftNeighbor].colorCode === ColorCodes.Red
              ? ColorCodes.Blue
              : ColorCodes.Green,
        },
      }),
      ...(rightNeighbor && {
        [rightNeighbor]: {
          colorCode:
            squares[rightNeighbor].colorCode === ColorCodes.Red
              ? ColorCodes.Blue
              : ColorCodes.Green,
        },
      }),
      ...(topNeighbor && {
        [topNeighbor]: {
          colorCode:
            squares[topNeighbor].colorCode === ColorCodes.Red
              ? ColorCodes.Blue
              : ColorCodes.Green,
        },
      }),
      ...(bottomNeighbor && {
        [bottomNeighbor]: {
          colorCode:
            squares[bottomNeighbor].colorCode === ColorCodes.Red
              ? ColorCodes.Blue
              : ColorCodes.Green,
        },
      }),
    };
    return {
      ...squares,
      [squareId]: {
        colorCode: getNextColorCode(squares[squareId].colorCode),
      },
      ...newSquares,
    };
  };

  const handleClick = (squareId: number) => {
    const neighbors = getSquareNeighbors({ squareId, gridSize });

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
        return handleBlueClick({
          squareId,
          ...neighbors,
        });
      }
      if (squares[squareId].colorCode === ColorCodes.Green) {
        return handleGreenClick({
          squareId,
          ...neighbors,
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
      <SelectGridSize
        options={[4, 5, 6]}
        gridSize={gridSize}
        setGridSize={setGridSize}
        handleReset={handleReset}
      />
      <Grid gridSize={GRID_SIZE}>
        {Object.values(squares).map((square, squareId) => (
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
      <GameStatus
        isGameOver={isGameOver}
        clicks={clicks}
        handleReset={handleReset}
      />
    </>
  );
};
