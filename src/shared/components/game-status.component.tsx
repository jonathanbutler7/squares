type GameStatusProps = {
  isGameOver: boolean;
  clicks: number;
  handleReset: () => void;
};

const buttonStyle = (isDisabled: boolean) => ({
  boxShadow: isDisabled ? 'none' : '2px 2px 0 0 #000',
  transform: isDisabled ? 'none' : 'translate(-2px, -2px)',
  border: isDisabled ? '1px solid transparent' : '1px solid black',
  transition: 'all 250ms ease-in-out',
  borderRadius: 4,
  height: 40,
  background: '#ff8fe7',
});

export const GameStatus = ({
  isGameOver,
  clicks,
  handleReset,
}: GameStatusProps) => {
  const isDisabled = clicks === 0;

  return (
    <>
      <p>
        <b>Clicks:</b> {clicks}
      </p>
      {isGameOver && <p>🎉 You won! 🎉</p>}
      <button
        disabled={isDisabled}
        onClick={handleReset}
        style={buttonStyle(isDisabled)}
        className='reset-button'
      >
        Reset game
      </button>

      <hr />
    </>
  );
};
