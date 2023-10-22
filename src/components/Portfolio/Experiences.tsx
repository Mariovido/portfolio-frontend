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
import { CONSTANTS } from '../../config/constants';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useHttp from '../../hooks/useHttp';
import { Experience } from '../../models/interfaces/shared/UI/Cards/ExperienceProps';
import Spinner from '../shared/Common/Spinner';
import ErrorBlock from '../shared/Common/ErrorBlock';

import './styles/Experiences.scss';

function Experiences() {
  const [experiencesInfo, setExperiencesInfo] = useState<Experiences>();
  const { width } = useWindowDimensions();
  const { response, isFetching, isError, error } = useHttp<
    Experiences | Experience[]
  >({
    isQuery: true,
    url: '/portfolio/:idUser/work-experience',
    queryKey: ['experience'],
    queryfn: () => data.experience,
    errorMessage: 'Error while fetching the experience section',
    staleTime: 60000,
  });

  useEffect(() => {
    if (response) {
      const responseAux = response as Experiences;
      if (responseAux.experiences) {
        setExperiencesInfo(responseAux);
      } else {
        const responseAux = response as Experience[];
        setExperiencesInfo({ experiences: responseAux });
      }
    }
  }, [response]);

  return (
    <section id="experience">
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {width >= CONSTANTS.minWidthPc ? null : (
            <div className="section-title-experience">
              <h2>Experience</h2>
            </div>
          )}
          {experiencesInfo ? (
            <div>
              <ExperienceList
                experienceListProps={experiencesInfo.experiences}
              />
              <div className="experience-resume-content">
                <LinkIcon
                  isAnchor={false}
                  linkProps={{
                    href: 'resume',
                    whileHover: 'hover',
                    animate: 'rest',
                    variants: ResumeVariants,
                  }}
                  iconProps={{
                    icon: faArrowRight,
                    variants: ResumeIconVariants,
                  }}
                  beforeText="View full CV"
                />
              </div>
            </div>
          ) : null}
        </>
      )}
      {isError ? <ErrorBlock error={error} /> : null}
    </section>
  );
}

export default Experiences;
