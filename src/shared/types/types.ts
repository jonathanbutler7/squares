export type Neighbors = {
  leftNeighbor: number;
  rightNeighbor: number;
  topNeighbor: number;
  bottomNeighbor: number;
};

export type ISquare = Record<number, { colorCode: 0 | 1 | 2 | undefined }>;
