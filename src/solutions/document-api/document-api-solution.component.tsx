// @ts-nocheck
import { useEffect, useState } from 'react';
import { ColorRGBValues, GameStatus } from '../../shared';

type Coordinates = { x: number; y: number };

enum ColorNames {
  Red = ColorRGBValues.Red,
  Blue = ColorRGBValues.Blue,
  Green = ColorRGBValues.Green,
}

const GRID_SIZE = 4;

type ColorUnion = `${ColorRGBValues}`;

const getNeighbors = ({
  x,
  y,
  gridSize,
}: Coordinates & { gridSize: number }) => {
  const hasCellToLeft = y > 0;
  const hasCellToRight = y < gridSize - 1;
  const hasCellAbove = x > 0;
  const hasCellBelow = x < gridSize - 1;

  const northId = hasCellAbove && `${(x - 1).toString()}${y}`;
  const southId = hasCellBelow && `${(x + 1).toString()}${y}`;
  const westId = hasCellToLeft && `${x}${(y - 1).toString()}`;
  const eastId = hasCellToRight && `${x}${(y + 1).toString()}`;

  return [northId, southId, westId, eastId];
};

const getElementById = (id: string) => document.getElementById(id);

export const DocumentApiSolution = () => {
  const [clicks, setClicks] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const cells = Array.from(document.querySelectorAll('.cell'));
    setIsGameOver(
      cells.every((cell) => cell.style.background === ColorNames.Green)
    );
  }, [clicks]);

  const GRID = Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill(null));

  const incrementClicksCount = () =>
    setClicks((clicksCount) => clicksCount + 1);

  const resetClicks = () => setClicks(0);

  const handleClick = ({ x, y }: Coordinates) => {
    const neighbors = getNeighbors({ x, y, gridSize: GRID_SIZE });

    const clickedCell = getElementById(
      x.toString() + y.toString()
    ) as HTMLElement;
    const prevBackground: ColorUnion = clickedCell?.style
      .background as ColorUnion;

    if (prevBackground === ColorNames.Red) {
      clickedCell.style.background = ColorNames.Blue;
    }

    if (prevBackground === ColorNames.Blue) {
      clickedCell.style.background = ColorNames.Green;
      neighbors.forEach((cellId) => {
        if (!cellId) return;
        const cell = document.getElementById(cellId) as HTMLDivElement;
        cell.style.background = ColorNames.Blue;
      });
    }

    if (prevBackground === ColorNames.Green) {
      neighbors.forEach((cellId) => {
        if (!cellId) return;
        const cell = document.getElementById(cellId) as HTMLDivElement;
        const prevBackground = cell?.style.background;
        if (prevBackground === ColorNames.Red) {
          cell.style.background = ColorNames.Blue;
        } else {
          cell.style.background = ColorNames.Green;
        }
      });
    }
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll('.cell')).forEach((cell) => {
      cell.style.background = ColorNames.Red;
    });
    resetClicks();
  };

  return (
    <>
      <h1>Solution using 2D Array and document API</h1>
      <div className='grid'>
        {GRID.map((rows, x) => (
          <div className='row' key={x}>
            {rows.map((_, y) => (
              <button
                className='cell'
                id={x.toString() + y.toString()}
                key={y}
                onClick={() => {
                  handleClick({ x, y });
                  incrementClicksCount();
                }}
                style={{ background: ColorNames.Red }}
              />
            ))}
          </div>
        ))}
      </div>

      <GameStatus
        isGameOver={isGameOver}
        clicks={clicks}
        handleReset={handleReset}
      />
    </>
  );
};
