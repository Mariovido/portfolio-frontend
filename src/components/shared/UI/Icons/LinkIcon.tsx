import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkIconProps } from '../../../../models/interfaces/shared/UI/Icons/LinkIconProps';
import { Link } from 'react-router-dom';
import { CONFIG } from '../../../../config/config';

import './styles/LinkIcon.scss';

const MotionFontAwesomeIcon = motion(FontAwesomeIcon);
const MotionLink = motion(Link);

function LinkIcon(props: Readonly<LinkIconProps>) {
  const { isAnchor, linkProps, iconProps, beforeText, afterText } = props;

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
          to={`${CONFIG.VITE_REACT_APP_BASE_URL}${linkProps.href}`}
          whileHover={linkProps.whileHover}
          animate={linkProps.animate}
          onHoverStart={linkProps.onHoverStart}
          onHoverEnd={linkProps.onHoverEnd}
          variants={linkProps.variants}
          state={{ prevPath: location.pathname }}
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
