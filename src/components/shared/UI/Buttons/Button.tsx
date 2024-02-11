import { motion } from 'framer-motion';
import { ButtonProps } from '../../../../models/interfaces/shared/UI/Buttons/ButtonProps';

import './styles/Button.scss';

function Button(props: Readonly<ButtonProps>) {
  const { children, handleOnClick, className, whileHover, animate, variants } =
    props;

  return (
    <motion.button
      className={`button ${className}`}
      onClick={handleOnClick}
      whileHover={whileHover}
      animate={animate}
      variants={variants}
    >
      {children}
    </motion.button>
  );
}

export default Button;
