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

import './styles/Experience.scss';

function Experience(props: ExperienceProps) {
  const [isHovering, setIsHovering] = useState(true);

  const { experienceProps } = props;

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    window.open(experienceProps.companyLink, '_blank');
  };

  return (
    <Card handleOnClick={handleOnClick} isHovering={isHovering}>
      <header className="experience-header">{experienceProps.date}</header>
      <div className="experience-content">
        <h3 className="experience-content-header">
          <span>{experienceProps.role}</span>
          <LinkIcon
            isAnchor={true}
            linkProps={{
              className: 'active-link',
              href: experienceProps.companyLink,
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
            {experienceProps.description[0]?.description}
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
    </Card>
  );
}

export default Experience;
