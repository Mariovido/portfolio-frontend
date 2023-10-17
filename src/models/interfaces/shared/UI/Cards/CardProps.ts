import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  isAnimated: boolean;
  handleOnClick?: React.MouseEventHandler<HTMLDivElement>;
  isHovering?: boolean;
}
