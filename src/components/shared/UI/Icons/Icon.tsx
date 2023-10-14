import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from '../../../../models/interfaces/shared/UI/Icons/IconProps';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { motion } from 'framer-motion';
import { IconEnum } from '../../../../models/enums/IconEnum';

import './styles/Icon.scss';

function Icon(props: IconProps) {
  const { iconProps } = props;

  let fontAwesomeIcon;
  if (iconProps.name === IconEnum.GITHUB) fontAwesomeIcon = faGithub;
  else if (iconProps.name === IconEnum.LINKEDIN) fontAwesomeIcon = faLinkedin;
  else fontAwesomeIcon = faHome;

  return (
    <motion.a
      className="icon"
      href={iconProps.href}
      target={iconProps.target}
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
