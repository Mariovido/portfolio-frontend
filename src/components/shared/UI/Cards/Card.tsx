import { motion } from 'framer-motion';
import { CardProps } from '../../../../models/interfaces/shared/UI/Cards/CardProps';

import './styles/Card.scss';

function Card(props: CardProps) {
  const { children, isAnimated, handleOnClick, isHovering } = props;

  return (
    <motion.div
      className="card"
      whileHover={isHovering ? 'hover' : 'rest'}
      animate="rest"
    >
      {isAnimated ? (
        <div className="card-hover" onClick={handleOnClick}></div>
      ) : null}
      {children}
    </motion.div>
  );
}

export default Card;
