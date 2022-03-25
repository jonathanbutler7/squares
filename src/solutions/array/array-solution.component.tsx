import { useEffect, useState } from 'react';
import {
  Square,
  getSquareNeighbors,
  ColorCodes,
  getNextColorCode,
  GameStatus,
  Grid,
  IColorCode,
  GRID_SIZE,
  Neighbor,
} from '../../shared';

type ISquare = { colorCode: IColorCode };

const isGridAllGreen = (squares: ISquare[]) =>
  squares.every((square) => square.colorCode === ColorCodes.Green);

export const ArraySolution = () => {
  const [clicks, setClicks] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gridSize, setGridSize] = useState(GRID_SIZE);
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

  const validateNeighborsAfterBlueClicked = (neighbor: Neighbor) => {
    if (neighbor !== undefined) {
      squares[neighbor].colorCode = ColorCodes.Blue;
    }
  };

  const validateNeighborsAfterGreenClicked = (neighbor: Neighbor) => {
    if (neighbor !== undefined) {
      if (squares[neighbor].colorCode === ColorCodes.Blue) {
        squares[neighbor].colorCode = ColorCodes.Green;
      }
      if (squares[neighbor].colorCode === ColorCodes.Red) {
        squares[neighbor].colorCode = ColorCodes.Blue;
      }
    }
  };

  const handleClick = (squareId: number) => {
    const { leftNeighbor, rightNeighbor, topNeighbor, bottomNeighbor } =
      getSquareNeighbors({ squareId, gridSize });

    setSquares(
      squares.map((square, index) => {
        if (index === squareId) {
          if (square.colorCode === ColorCodes.Blue) {
            validateNeighborsAfterBlueClicked(leftNeighbor);
            validateNeighborsAfterBlueClicked(rightNeighbor);
            validateNeighborsAfterBlueClicked(bottomNeighbor);
            validateNeighborsAfterBlueClicked(topNeighbor);
          }
          if (square.colorCode === ColorCodes.Green) {
            validateNeighborsAfterGreenClicked(leftNeighbor);
            validateNeighborsAfterGreenClicked(rightNeighbor);
            validateNeighborsAfterGreenClicked(bottomNeighbor);
            validateNeighborsAfterGreenClicked(topNeighbor);
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
      <select
        onChange={(e) => {
          setGridSize(+e.target.value);
          setSquares(
            Array(+e.target.value * +e.target.value)
              .fill(null)
              .map(() => ({ colorCode: ColorCodes.Red }))
          );
        }}
      >
        {[4, 5, 6].map((size) => (
          <option value={size}>{size}</option>
        ))}
      </select>
      Grid size: {gridSize}
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
