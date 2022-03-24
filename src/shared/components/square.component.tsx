import { getBackgroundColor, IColorCode,getScreenReaderColor } from '..';

type SquareProps = { colorCode: IColorCode; onClick: () => void };



export const Square = ({ colorCode, onClick }: SquareProps) => (
  <button
    style={{
      background: getBackgroundColor(colorCode),
      height: 80,
      border: '1px solid black',
      width: '100%',
    }}
    aria-label={`Square color: ${getScreenReaderColor(colorCode)}`}
    className='square'
    onClick={onClick}
  ></button>
);
