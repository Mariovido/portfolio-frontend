import { ExperienceProps } from '../../../../models/interfaces/UI/Cards/ExperienceProps';
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

import './styles/Experience.scss';

function Experience(props: ExperienceProps) {
  const [isHovering, setIsHovering] = useState(true);

  const experience = props.experienceProps;

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    window.open(experience.companyLink, '_blank');
  };

  return (
    <Card handleOnClick={handleOnClick} isHovering={isHovering}>
      <header className="experience-header">{experience.date}</header>
      <div className="experience-content">
        <h3 className="experience-content-header">
          <span>{experience.role}</span>
          <LinkIcon
            isAnchor={true}
            linkProps={{
              className: 'active-link',
              href: experience.companyLink,
              target: '_blank',
              variants: LinkVariants,
            }}
            iconProps={{
              icon: faSquareArrowUpRight,
              variants: LinkIconVariants,
            }}
            beforeText={experience.company}
          />
        </h3>
        <p className="experience-content-description">
          {experience.description}
        </p>
        <ul className="experience-content-links">
          {experience.links?.map((experienceLink) => (
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
        <TagList tagListProps={experience.tags} />
      </div>
    </Card>
  );
}

export default Experience;
