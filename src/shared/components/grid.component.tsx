import { ReactNode } from 'react';

type GridProps = { children: ReactNode; gridSize: number };

export const Grid = ({ children, gridSize }: GridProps) => (
  <section
    style={{
      border: '1px solid gray',
      display: 'grid',
      gridTemplate: `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`,
      maxWidth: 400,
    }}
  >
    {children}
  </section>
);
