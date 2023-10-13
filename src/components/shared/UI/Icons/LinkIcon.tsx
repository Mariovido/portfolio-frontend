import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkIconProps } from '../../../../models/interfaces/UI/Icons/LinkIconProps';
import { Link } from 'react-router-dom';

import './styles/LinkIcon.scss';

const MotionFontAwesomeIcon = motion(FontAwesomeIcon);
const MotionLink = motion(Link);

function LinkIcon(props: LinkIconProps) {
  const isAnchor = props.isAnchor;
  const linkProps = props.linkProps;
  const iconProps = props.iconProps;
  const beforeText = props.beforeText;
  const afterText = props.afterText;

  return (
    <>
      {isAnchor ? (
        <motion.a
          className={`link-icon ${linkProps.className}`}
          href={linkProps.href}
          target={linkProps.target}
          whileHover={linkProps.whileHover}
          animate={linkProps.animate}
          onHoverStart={linkProps.onHoverStart}
          onHoverEnd={linkProps.onHoverEnd}
          variants={linkProps.variants}
        >
          {beforeText ? <span>{beforeText}</span> : null}
          <MotionFontAwesomeIcon
            icon={iconProps.icon}
            variants={iconProps.variants}
          />
          {afterText ? <span>{afterText}</span> : null}
        </motion.a>
      ) : (
        <MotionLink
          className={`link-icon ${linkProps.className}`}
          to={linkProps.href}
          whileHover={linkProps.whileHover}
          animate={linkProps.animate}
          onHoverStart={linkProps.onHoverStart}
          onHoverEnd={linkProps.onHoverEnd}
          variants={linkProps.variants}
        >
          {beforeText ? <span>{beforeText}</span> : null}
          <MotionFontAwesomeIcon
            icon={iconProps.icon}
            variants={iconProps.variants}
          />
          {afterText ? <span>{afterText}</span> : null}
        </MotionLink>
      )}
    </>
  );
}

export default LinkIcon;
