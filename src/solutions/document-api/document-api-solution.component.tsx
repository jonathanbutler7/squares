import React, { useEffect, useState } from 'react';
import { ColorRGBValues, GameStatus, GRID_SIZE } from '../../shared';

type Coordinates = { x: number; y: number };

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
      cells.every((cell: any) => cell.style.background === ColorRGBValues.Green)
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
    const prevBackground = clickedCell?.style.background;

    if (prevBackground === ColorRGBValues.Red) {
      clickedCell.style.background = ColorRGBValues.Blue;
    }

    if (prevBackground === ColorRGBValues.Blue) {
      clickedCell.style.background = ColorRGBValues.Green;
      neighbors.forEach((cellId) => {
        if (!cellId) return;
        const cell = document.getElementById(cellId) as HTMLDivElement;
        cell.style.background = ColorRGBValues.Blue;
      });
    }

    if (prevBackground === ColorRGBValues.Green) {
      neighbors.forEach((cellId) => {
        if (!cellId) return;
        const cell = document.getElementById(cellId) as HTMLDivElement;
        const prevBackground = cell?.style.background;
        if (prevBackground === ColorRGBValues.Red) {
          cell.style.background = ColorRGBValues.Blue;
        } else {
          cell.style.background = ColorRGBValues.Green;
        }
      });
    }
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll('.cell')).forEach((cell: any) => {
      cell.style.background = ColorRGBValues.Red;
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
                style={{ background: ColorRGBValues.Red }}
              ></button>
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
