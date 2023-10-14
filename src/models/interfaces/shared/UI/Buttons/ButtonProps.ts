import { Variants } from 'framer-motion';
import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variants?: Variants;
  whileHover?: string;
  animate?: string;
}
