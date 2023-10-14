import Card from './Card';
import { EducationProps } from '../../../../models/interfaces/shared/UI/Cards/EducationProp';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import {
  LinkIconVariants,
  LinkVariants,
} from '../../../../utils/variants/variants';
import LinkIcon from '../Icons/LinkIcon';

import './styles/Education.scss';

function Education(props: EducationProps) {
  const { educationProps } = props;

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    window.open(educationProps.universityLink, '_blank');
  };

  return (
    <Card handleOnClick={handleOnClick} isHovering={true}>
      <header className="education-header">{educationProps.date}</header>
      <div className="education-content">
        <h3 className="education-content-header">
          <span>{educationProps.name}</span>
          <LinkIcon
            isAnchor={true}
            linkProps={{
              className: 'active-link',
              href: educationProps.universityLink,
              target: '_blank',
              variants: LinkVariants,
            }}
            iconProps={{
              icon: faSquareArrowUpRight,
              variants: LinkIconVariants,
            }}
            beforeText={educationProps.university}
          />
        </h3>
      </div>
    </Card>
  );
}

export default Education;
