import { motion } from 'framer-motion';
import { TextLinkProps } from '../../../../models/interfaces/shared/UI/Text/TextLinkProps';

import './styles/TextLink.scss';

function TextLink(props: TextLinkProps) {
  const { children, className, href, target, whileHover, animate, variants } =
    props;

  return (
    <motion.a
      className={className ? `${className} text-link` : 'text-link'}
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
