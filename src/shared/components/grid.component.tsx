import { ReactNode } from 'react';

type GridProps = { children: ReactNode; gridSize: number };

/**
 *
 * Note: I considered a `ul` for this component, since it just shows a list of button items,
 * but ultimately decided against it because of the following line from MDN:
 * "The <ul> HTML element represents an unordered list of items, typically rendered as a bulleted list."
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
 */

export const Grid = ({ children, gridSize }: GridProps) => (
  <section
    style={{
      display: 'grid',
      gridTemplate: `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`,
      maxWidth: gridSize * 100,
    }}
  >
    {children}
  </section>
);
