import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ExperienceList from '../shared/Lists/ExperienceList';
import LinkIcon from '../shared/UI/Icons/LinkIcon';
import {
  ResumeIconVariants,
  ResumeVariants,
} from '../../utils/variants/variants';
import { Experiences } from '../../models/interfaces/Portfolio/Experiences';
import { useEffect, useState } from 'react';
import { data } from '../../../data/data';
import { CONFIG } from '../../config/config';

import './styles/Experiences.scss';

function Experiences() {
  const [experiencesInfo, setExperiencesInfo] = useState<Experiences>(
    data.experience
  );

  useEffect(() => {
    if (CONFIG.VITE_REACT_APP_USE_SERVER) {
      // TODO - CALL THE API
    } else {
      setExperiencesInfo(data.experience);
    }
  }, []);

  return (
    <section id="experience">
      <div>
        <ExperienceList experienceListProps={experiencesInfo.experiences} />
        <div className="experience-resume-content">
          <LinkIcon
            isAnchor={false}
            linkProps={{
              href: '/resume',
              whileHover: 'hover',
              animate: 'rest',
              variants: ResumeVariants,
            }}
            iconProps={{ icon: faArrowRight, variants: ResumeIconVariants }}
            beforeText="View full CV"
          />
        </div>
      </div>
    </section>
  );
}

export default Experiences;
