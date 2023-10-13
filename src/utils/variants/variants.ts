import { Variants } from 'framer-motion';
import { StyleVariables } from '../../models/interfaces/styles/StyleVariables';

import styles from '../styles/_variables.module.scss';

const variables = JSON.parse(JSON.stringify(styles)) as StyleVariables;

export const LinkVariants: Variants = {
  rest: {
    color: variables.darkColor,
    x: 0,
    y: 0,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    color: variables.primaryColor,
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
    color: variables.darkColor,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    color: variables.primaryColor,
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
