import { motion } from 'framer-motion';
import { CardProps } from '../../../../models/interfaces/UI/Cards/CardProps';

import './styles/Card.scss';

function Card(props: CardProps) {
  const children = props.children;
  const handleOnClick = props.handleOnClick;
  const isHovering = props.isHovering;

  return (
    <motion.div
      className="card"
      whileHover={isHovering ? 'hover' : 'rest'}
      animate="rest"
    >
      <div className="card-hover" onClick={handleOnClick}></div>
      {children}
    </motion.div>
  );
}

export default Card;
