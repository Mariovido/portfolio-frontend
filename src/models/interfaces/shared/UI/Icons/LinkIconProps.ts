import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Variants } from 'framer-motion';

interface Link {
  className?: string;
  href: string;
  target?: string;
  variants?: Variants;
  whileHover?: string;
  animate?: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

interface Icon {
  icon: IconDefinition;
  variants?: Variants;
}

export interface LinkIconProps {
  isAnchor: boolean;
  linkProps: Link;
  iconProps: Icon;
  beforeText?: string;
  afterText?: string;
}
