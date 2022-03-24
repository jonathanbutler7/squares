export type IColorCode = 0 | 1 | 2 | undefined;

export type ISquare = Record<number, { colorCode: IColorCode }>;

export type Neighbor = number | undefined;