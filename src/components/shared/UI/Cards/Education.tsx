import Card from './Card';
import { EducationProps } from '../../../../models/interfaces/shared/UI/Cards/EducationProp';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import {
  LinkIconVariants,
  LinkVariants,
} from '../../../../utils/variants/variants';
import LinkIcon from '../Icons/LinkIcon';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { CONSTANTS } from '../../../../config/constants';

import './styles/Education.scss';

function Education(props: EducationProps) {
  const { width } = useWindowDimensions();

  const { educationProps } = props;

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    window.open(educationProps.universityLink, '_blank');
  };

  const content = (
    <>
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
              whileHover: width >= CONSTANTS.minWidthPc ? undefined : 'hover',
              animate: width >= CONSTANTS.minWidthPc ? undefined : 'rest',
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
    </>
  );

  return (
    <>
      {width >= CONSTANTS.minWidthPc ? (
        <Card isAnimated={true} handleOnClick={handleOnClick} isHovering={true}>
          {content}
        </Card>
      ) : (
        <Card isAnimated={false} isHovering={false}>
          {content}
        </Card>
      )}
    </>
  );
}

export default Education;
