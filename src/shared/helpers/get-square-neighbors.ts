export const getSquareNeighbors = ({
  squareId,
  GRID_SIZE,
}: {
  squareId: number;
  GRID_SIZE: number;
}) => {
  const hasLeftNeighbor = squareId % GRID_SIZE > 0;
  const hasRightNeighbor = squareId % GRID_SIZE < GRID_SIZE - 1;
  const hasTopNeighbor = squareId > GRID_SIZE - 1;
  const hasBottomNeighbor = squareId < GRID_SIZE * GRID_SIZE - GRID_SIZE;

  const topNeighbor = hasTopNeighbor ? squareId - GRID_SIZE : Infinity;
  const bottomNeighbor = hasBottomNeighbor ? squareId + GRID_SIZE : Infinity;
  const rightNeighbor = hasRightNeighbor ? squareId + 1 : Infinity;
  const leftNeighbor = hasLeftNeighbor ? squareId - 1 : Infinity;

  return { topNeighbor, rightNeighbor, bottomNeighbor, leftNeighbor };
};
