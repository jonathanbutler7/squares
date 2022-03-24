export const getSquareNeighbors = ({
  squareId,
  gridSize,
}: {
  squareId: number;
  gridSize: number;
}) => {
  const hasLeftNeighbor = squareId % gridSize > 0;
  const hasRightNeighbor = squareId % gridSize < gridSize - 1;
  const hasTopNeighbor = squareId > gridSize - 1;
  const hasBottomNeighbor = squareId < gridSize * gridSize - gridSize;

  const topNeighbor = hasTopNeighbor ? squareId - gridSize : undefined;
  const bottomNeighbor = hasBottomNeighbor ? squareId + gridSize : undefined;
  const rightNeighbor = hasRightNeighbor ? squareId + 1 : undefined;
  const leftNeighbor = hasLeftNeighbor ? squareId - 1 : undefined;

  return { topNeighbor, rightNeighbor, bottomNeighbor, leftNeighbor };
};
