import { ColorRGBValues } from '../constants';

type GameStatusProps = {
  isGameOver: boolean;
  clicks: number;
  handleReset: () => void;
};

export const GameStatus = ({
  isGameOver,
  clicks,
  handleReset,
}: GameStatusProps) => (
  <>
    <p>
      <b>Clicks:</b> {clicks}
    </p>
    {isGameOver && <p>🎉 You won! 🎉</p>}
    <button
      disabled={clicks === 0}
      onClick={handleReset}
      className='reset-button'
      style={{
        boxShadow: clicks !== 0 ? '2px 2px 0 0 #000' : 'none',
        transform: clicks !== 0 ? 'translate(-2px, -2px)' : 'none',
        transition: 'all 250ms ease-in-out',
        borderRadius: 4,
      }}
    >
      Reset game
    </button>

    <hr />
  </>
);
