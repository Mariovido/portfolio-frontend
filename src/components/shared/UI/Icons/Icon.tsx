import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from '../../../../models/interfaces/UI/Icons/IconProps';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { motion } from 'framer-motion';

import './styles/Icon.scss';
import { IconEnum } from '../../../../models/enums/IconEnum';

function Icon(props: IconProps) {
  const icon = props.iconProps;

  let fontAwesomeIcon;
  if (icon.name === IconEnum.GITHUB) fontAwesomeIcon = faGithub;
  else if (icon.name === IconEnum.LINKEDIN) fontAwesomeIcon = faLinkedin;
  else fontAwesomeIcon = faHome;

  return (
    <motion.a
      className="icon"
      href={icon.href}
      target={icon.target}
      whileHover={{ fontSize: '45px' }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 10,
      }}
    >
      <FontAwesomeIcon icon={fontAwesomeIcon} />
    </motion.a>
  );
}

export default Icon;
