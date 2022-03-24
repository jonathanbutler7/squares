import { useEffect, useState } from 'react';
import {
  ColorCodes,
  getSquareNeighbors,
  Neighbors,
  getNextColorCode,
  ISquare,
} from '../shared';
import { GameStatus } from '../shared/components/game-status';
import { Square } from '../shared/components/square';

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
  }: Neighbors & { squareId: number }) => ({
    ...squares,
    [squareId]: {
      colorCode: getNextColorCode(squares[squareId].colorCode),
    },
    [leftNeighbor]: { colorCode: ColorCodes.Blue },
    [rightNeighbor]: { colorCode: ColorCodes.Blue },
    [topNeighbor]: { colorCode: ColorCodes.Blue },
    [bottomNeighbor]: { colorCode: ColorCodes.Blue },
  });

  const handleGreenClick = ({
    squareId,
    leftNeighbor,
    rightNeighbor,
    topNeighbor,
    bottomNeighbor,
  }: Neighbors & { squareId: number }) => ({
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
  });

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
        return handleBlueClick({
          squareId,
          leftNeighbor,
          rightNeighbor,
          topNeighbor,
          bottomNeighbor,
        });
      }
      if (squares[squareId].colorCode === ColorCodes.Green) {
        return handleGreenClick({
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
      <GameStatus
        isGameOver={isGameOver}
        clicks={clicks}
        handleReset={() => {
          setClicks(0);
          setSquares(initialState);
        }}
      />
    </>
  );
};
