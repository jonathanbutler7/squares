import { useState } from 'react';

type Coordinates = { x: number; y: number };

enum ColorNames {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

const GRID_SIZE = 4;

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
  const [clicksCount, setClicksCount] = useState(0);
  const [gridSize, setGridSize] = useState(GRID_SIZE);

  const GRID = Array(gridSize)
    .fill(null)
    .map(() => Array(gridSize).fill(null));

  const incrementClicksCount = () =>
    setClicksCount((clicksCount) => clicksCount + 1);

  const resetClicks = () => setClicksCount(0);

  const handleClick = ({ x, y }: Coordinates) => {
    const neighbors = getNeighbors({ x, y, gridSize });

    const clickedCell = getElementById(
      x.toString() + y.toString()
    ) as HTMLElement;
    const prevBackground = clickedCell?.style.background;

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
        if (cellId) {
          const cell = document.getElementById(cellId) as HTMLDivElement;
          const prevBackground = cell?.style.background;
          if (prevBackground === ColorNames.Red) {
            cell.style.background = ColorNames.Blue;
          } else {
            cell.style.background = ColorNames.Green;
          }
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
      <h1>Solution using the document API</h1>
      <p style={{ display: 'inline' }}>Set grid size: </p>
      <select
        onChange={(e) => {
          setGridSize(+e.target.value);
          handleReset();
        }}
      >
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
      </select>
      <h4>Grid size: {gridSize}</h4>
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
      <br />
      <br />
      <p>
        <b>Clicks:</b> {clicksCount}
      </p>
      <button disabled={clicksCount === 0} onClick={handleReset}>
        Reset game
      </button>
    </>
  );
};
