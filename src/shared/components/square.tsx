import { getBackgroundColor } from '../';

type SquareProps = { colorCode: 0 | 1 | 2 | undefined; onClick: () => void };

export const Square = ({ colorCode, onClick }: SquareProps) => (
  <button
    style={{
      background: getBackgroundColor(colorCode),
      height: 40,
      border: '1px solid black',
    }}
    className='square'
    onClick={onClick}
  ></button>
);
