import { getBackgroundColor, IColorCode } from '..';

type SquareProps = { colorCode: IColorCode; onClick: () => void };

export const Square = ({ colorCode, onClick }: SquareProps) => (
  <button
    style={{
      background: getBackgroundColor(colorCode),
      height: 80,
      border: '1px solid black',
      width: '100%',
    }}
    className='square'
    onClick={onClick}
  ></button>
);
