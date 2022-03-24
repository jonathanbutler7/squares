import { useEffect, useState } from 'react';
import { Square } from '../../shared/components/square.component';
import {
  getSquareNeighbors,
  ColorCodes,
  Neighbors,
  getNextColorCode,
  GameStatus,
  Grid,
  IColorCode,
} from '../../shared';

type ISquare = { colorCode: IColorCode };

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

  const validateBlueClicked = (neighbor: Neighbors['leftNeighbor']) => {
    if (neighbor !== undefined) {
      squares[neighbor].colorCode = ColorCodes.Blue;
    }
  };

  const validateGreenClicked = (neighbor: Neighbors['leftNeighbor']) => {
    if (neighbor !== undefined) {
      if (squares[neighbor].colorCode === ColorCodes.Red) {
        squares[neighbor].colorCode = ColorCodes.Blue;
      }
      if (squares[neighbor].colorCode === ColorCodes.Blue) {
        squares[neighbor].colorCode = ColorCodes.Green;
      }
    }
  };

  const handleBlueClick = ({
    leftNeighbor,
    rightNeighbor,
    topNeighbor,
    bottomNeighbor,
  }: Neighbors) => {
    validateBlueClicked(leftNeighbor);
    validateBlueClicked(rightNeighbor);
    validateBlueClicked(bottomNeighbor);
    validateBlueClicked(topNeighbor);
  };

  const handleGreenClick = ({
    leftNeighbor,
    rightNeighbor,
    topNeighbor,
    bottomNeighbor,
  }: Neighbors) => {
    validateGreenClicked(leftNeighbor);
    validateGreenClicked(rightNeighbor);
    validateGreenClicked(bottomNeighbor);
    validateGreenClicked(topNeighbor);
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
