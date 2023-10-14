import { Variants } from 'framer-motion';
import { ReactNode } from 'react';

export interface TextLinkProps {
  children: ReactNode;
  href: string;
  target?: string;
  whileHover?: string;
  animate?: string;
  variants?: Variants;
}
