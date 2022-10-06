import clsx from 'clsx';
import React from 'react';

export interface GridProps {
  cols: 1 | 2 | 3 | 4 | 5 | 6;
  children: any[] | any;
}
const gridCols = {
  1: 'grid grid-cols-1',
  2: 'grid grid-cols-2',
  3: 'grid grid-cols-3',
  4: 'grid grid-cols-4',
  5: 'grid grid-cols-5',
  6: 'grid grid-cols-6',
};
export function Grid({
  cols,
  children,
  className,
}: GridProps & { className?: string }) {
  return <ul className={clsx(gridCols[cols], className)}>{children}</ul>;
}

export interface ColProps extends HTMLLIElement {
  span?: string;
}

export const Col: React.FC<ColProps> = ({ span, children, className }) => {
  return <li className={`col-span-${span} ${className}`}>{children}</li>;
};

export const ColTest = () => null;
