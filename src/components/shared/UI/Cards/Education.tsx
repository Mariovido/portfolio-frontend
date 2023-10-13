import Card from './Card';
import { EducationProps } from '../../../../models/interfaces/UI/Cards/EducationProp';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import {
  LinkIconVariants,
  LinkVariants,
} from '../../../../utils/variants/variants';
import LinkIcon from '../Icons/LinkIcon';

import './styles/Education.scss';

function Education(props: EducationProps) {
  const education = props.educationProps;

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    window.open(education.universityLink, '_blank');
  };

  return (
    <Card handleOnClick={handleOnClick} isHovering={true}>
      <header className="education-header">{education.date}</header>
      <div className="education-content">
        <h3 className="education-content-header">
          <span>{education.name}</span>
          <LinkIcon
            isAnchor={true}
            linkProps={{
              className: 'active-link',
              href: education.universityLink,
              target: '_blank',
              variants: LinkVariants,
            }}
            iconProps={{
              icon: faSquareArrowUpRight,
              variants: LinkIconVariants,
            }}
            beforeText={education.university}
          />
        </h3>
      </div>
    </Card>
  );
}

export default Education;
