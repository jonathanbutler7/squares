import { ColorCodes } from '../shared';

type SquareProps = { colorCode: 0 | 1 | 2; onClick: () => void };

const getBackgroundColor = (colorCode: SquareProps['colorCode']) => {
  switch (colorCode) {
    case ColorCodes.Red:
      return 'red';
    case ColorCodes.Blue:
      return 'blue';
    case ColorCodes.Green:
      return 'green';
    default:
      return;
  }
};

export const Square = ({ colorCode, onClick }: SquareProps) => (
  <button
    style={{
      background: getBackgroundColor(colorCode),
      height: 40,
      border: '1px solid black',
    }}
    onClick={onClick}
  ></button>
);
