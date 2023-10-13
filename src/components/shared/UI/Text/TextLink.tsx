import { motion } from 'framer-motion';
import { TextLinkProps } from '../../../../models/interfaces/UI/Text/TextLinkProps';

import './styles/TextLink.scss';

function TextLink(props: TextLinkProps) {
  const children = props.children;
  const href = props.href;
  const target = props.target;
  const whileHover = props.whileHover;
  const animate = props.animate;
  const variants = props.variants;

  return (
    <motion.a
      className="text-link"
      href={href}
      target={target}
      whileHover={whileHover}
      animate={animate}
      variants={variants}
    >
      {children}
    </motion.a>
  );
}

export default TextLink;
