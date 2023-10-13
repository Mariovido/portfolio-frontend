import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  handleOnClick?: React.MouseEventHandler<HTMLDivElement>;
  isHovering?: boolean;
}
