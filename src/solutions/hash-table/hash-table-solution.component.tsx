import { useEffect, useState } from 'react';
import {
  ColorCodes,
  getSquareNeighbors,
  getNextColorCode,
  ISquare,
  GameStatus,
  Grid,
  Square,
} from '../../shared';

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

  const handleReset = () => {
    setClicks(0);
    setSquares(initialState);
  };

  const validateNeighborsAfterBlueClicked = (neighbor: number | undefined) => ({
    ...(neighbor !== undefined && {
      [neighbor]: { colorCode: ColorCodes.Blue },
    }),
  });

  const validateNeighborsAfterGreenClicked = (
    neighbor: number | undefined
  ) => ({
    ...(neighbor !== undefined && {
      [neighbor]: {
        colorCode:
          squares[neighbor].colorCode === ColorCodes.Red
            ? ColorCodes.Blue
            : ColorCodes.Green,
      },
    }),
  });

  const handleClick = (squareId: number) => {
    const { leftNeighbor, rightNeighbor, topNeighbor, bottomNeighbor } =
      getSquareNeighbors({ squareId, gridSize });

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
        return {
          ...squares,
          [squareId]: {
            colorCode: ColorCodes.Green,
          },
          ...validateNeighborsAfterBlueClicked(topNeighbor),
          ...validateNeighborsAfterBlueClicked(bottomNeighbor),
          ...validateNeighborsAfterBlueClicked(leftNeighbor),
          ...validateNeighborsAfterBlueClicked(rightNeighbor),
        };
      }
      if (squares[squareId].colorCode === ColorCodes.Green) {
        return {
          ...squares,
          [squareId]: {
            colorCode: getNextColorCode(squares[squareId].colorCode),
          },
          ...validateNeighborsAfterGreenClicked(topNeighbor),
          ...validateNeighborsAfterGreenClicked(bottomNeighbor),
          ...validateNeighborsAfterGreenClicked(leftNeighbor),
          ...validateNeighborsAfterGreenClicked(rightNeighbor),
        };
      } else {
        return squares;
      }
    });
  };

  return (
    <>
      <h1>Solution using hash table</h1>

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
