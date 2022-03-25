import { getBackgroundColor, IColorCode, getScreenReaderColor } from '..';

type SquareProps = { colorCode: IColorCode; onClick: () => void };

export const Square = ({ colorCode, onClick }: SquareProps) => (
  <button
    style={{
      background: getBackgroundColor(colorCode),
      height: 100,
      border: '1px solid black',
      width: '100%',
      transition: 'all 250ms ease-in-out',
    }}
    /**
     * Because the buttons don't contain text, I'm adding the aria-label
     * so screen readers can read the color of the square.
     */
    aria-label={`${getScreenReaderColor(colorCode)} square`}
    className='square'
    onClick={onClick}
  ></button>
);
