import { ExperienceProps } from '../../../../models/interfaces/shared/UI/Cards/ExperienceProps';
import {
  faLink,
  faSquareArrowUpRight,
} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import {
  LinkIconVariants,
  LinkVariants,
} from '../../../../utils/variants/variants';
import { useState } from 'react';
import LinkIcon from '../Icons/LinkIcon';
import TagList from '../../Lists/TagList';
import BulletPointList from '../../Lists/BulletPointList';
import { CONSTANTS } from '../../../../config/constants';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

import './styles/Experience.scss';

function Experience(props: Readonly<ExperienceProps>) {
  const [isHovering, setIsHovering] = useState(true);
  const { width } = useWindowDimensions();

  const { experienceProps } = props;

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    window.open(experienceProps.companyLink, '_blank');
  };

  const content = (
    <>
      <header className="experience-header">{experienceProps.date}</header>
      <div className="experience-content">
        <h3 className="experience-content-header">
          <span>{experienceProps.role}</span>
          <LinkIcon
            isAnchor={true}
            linkProps={{
              className: 'active-link',
              href: experienceProps.companyLink,
              whileHover: width >= CONSTANTS.minWidthPc ? undefined : 'hover',
              animate: width >= CONSTANTS.minWidthPc ? undefined : 'rest',
              target: '_blank',
              variants: LinkVariants,
            }}
            iconProps={{
              icon: faSquareArrowUpRight,
              variants: LinkIconVariants,
            }}
            beforeText={experienceProps.company}
          />
        </h3>
        {experienceProps.description.length <= 1 ? (
          <p className="experience-content-description">
            {experienceProps.description[0]?.bulletPoint}
          </p>
        ) : (
          <BulletPointList
            bulletPointListProps={experienceProps.description}
            classNameParagraph={'experience-content-description'}
          />
        )}
        <ul className="experience-content-links">
          {experienceProps.links?.map((experienceLink) => (
            <li
              key={experienceLink.id}
              className="experience-content-links-item"
            >
              <LinkIcon
                isAnchor={true}
                linkProps={{
                  href: experienceLink.link,
                  target: '_blank',
                  whileHover: 'hover',
                  animate: 'rest',
                  onHoverStart: () => setIsHovering(false),
                  onHoverEnd: () => setIsHovering(true),
                  variants: LinkVariants,
                }}
                iconProps={{ icon: faLink, variants: LinkIconVariants }}
                afterText={experienceLink.name}
              />
            </li>
          ))}
        </ul>
        <TagList tagListProps={experienceProps.tags} />
      </div>
    </>
  );

  return (
    <>
      {width >= CONSTANTS.minWidthPc ? (
        <Card
          isAnimated={true}
          handleOnClick={handleOnClick}
          isHovering={isHovering}
        >
          {content}
        </Card>
      ) : (
        <Card isAnimated={false} isHovering={isHovering}>
          {content}
        </Card>
      )}
    </>
  );
}

export default Experience;
