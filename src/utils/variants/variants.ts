import { Variants } from 'framer-motion';
import { CONSTANTS } from '../../config/constants';

export const LinkVariants: Variants = {
  rest: {
    color: CONSTANTS.darkColor,
    x: 0,
    y: 0,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    color: CONSTANTS.primaryColor,
    fontSize: '25px',
    x: 5,
    y: -5,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const LinkIconVariants: Variants = {
  rest: {
    color: CONSTANTS.darkColor,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    color: CONSTANTS.primaryColor,
    fontSize: '25px',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const ResumeVariants: Variants = {
  rest: {
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    fontSize: '25px',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const ResumeIconVariants: Variants = {
  rest: {
    x: 0,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    x: 20,
    fontSize: '25px',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const TextLinkVariants: Variants = {
  rest: {
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    fontSize: '20px',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const ButtonVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.25,
    x: 20,
    y: -5,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
};
