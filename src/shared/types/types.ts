export type Neighbors = {
  leftNeighbor: number | undefined;
  rightNeighbor: number | undefined;
  topNeighbor: number | undefined;
  bottomNeighbor: number | undefined;
};

export type ISquare = Record<number, { colorCode: 0 | 1 | 2 | undefined }>;
