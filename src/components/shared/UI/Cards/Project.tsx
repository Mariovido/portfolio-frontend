import {
  faLink,
  faSquareArrowUpRight,
} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import {
  ImageVariants,
  LinkIconVariants,
  LinkVariants,
} from '../../../../utils/variants/variants';
import { useState } from 'react';
import LinkIcon from '../Icons/LinkIcon';
import TagList from '../../Lists/TagList';
import { CONSTANTS } from '../../../../config/constants';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { ProjectProps } from '../../../../models/interfaces/shared/UI/Cards/ProjectProps';
import { motion } from 'framer-motion';

import './styles/Project.scss';

function Project(props: ProjectProps) {
  const [isHovering, setIsHovering] = useState(true);
  const { width } = useWindowDimensions();

  const { projectProps } = props;

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    window.open(projectProps.projectLink, '_blank');
  };

  const content = (
    <>
      <motion.img
        className="project-image"
        loading="lazy"
        src={projectProps.imageLink}
        decoding="async"
        whileHover={width >= CONSTANTS.minWidthPc ? undefined : 'hover'}
        animate={width >= CONSTANTS.minWidthPc ? undefined : 'rest'}
        variants={ImageVariants}
      />
      <div className="project-content">
        <h3 className="project-content-header">
          <span>{projectProps.title}</span>
          {projectProps.projectLink ? (
            <LinkIcon
              isAnchor={true}
              linkProps={{
                className: 'active-link',
                href: projectProps.projectLink,
                whileHover: width >= CONSTANTS.minWidthPc ? undefined : 'hover',
                animate: width >= CONSTANTS.minWidthPc ? undefined : 'rest',
                target: '_blank',
                variants: LinkVariants,
              }}
              iconProps={{
                icon: faSquareArrowUpRight,
                variants: LinkIconVariants,
              }}
              beforeText={projectProps.subtitle}
            />
          ) : null}
        </h3>
        {projectProps.description.map((line) => (
          <p key={line.id} className="project-content-description">
            {line.bulletPoint}
          </p>
        ))}
        <ul className="project-content-links">
          {projectProps.links?.map((projectLink) => (
            <li key={projectLink.id} className="experience-content-links-item">
              <LinkIcon
                isAnchor={true}
                linkProps={{
                  href: projectLink.link,
                  target: '_blank',
                  whileHover: 'hover',
                  animate: 'rest',
                  onHoverStart: () => setIsHovering(false),
                  onHoverEnd: () => setIsHovering(true),
                  variants: LinkVariants,
                }}
                iconProps={{ icon: faLink, variants: LinkIconVariants }}
                afterText={projectLink.name}
              />
            </li>
          ))}
        </ul>
        {projectProps.tags ? (
          <TagList tagListProps={projectProps.tags} />
        ) : null}
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

export default Project;
