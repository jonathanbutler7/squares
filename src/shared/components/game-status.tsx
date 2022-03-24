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
    {isGameOver && <p>You won 🎉</p>}
    <p>
      <b>Clicks:</b> {clicks}
    </p>
    <button disabled={clicks === 0} onClick={handleReset}>
      Reset game
    </button>
  </>
);
