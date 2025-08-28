import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LinkIcon from '../shared/UI/Icons/LinkIcon';
import {
  ResumeIconVariants,
  ResumeVariants,
} from '../../utils/variants/variants';
import { useEffect, useState } from 'react';
import { data } from '../../../data/data';
import { CONSTANTS } from '../../config/constants';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useHttp from '../../hooks/useHttp';
import Spinner from '../shared/Common/Spinner';
import ErrorBlock from '../shared/Common/ErrorBlock';
import { Projects } from '../../models/interfaces/Portfolio/Projects';
import { Project } from '../../models/interfaces/shared/UI/Cards/ProjectProps';
import ProjectList from '../shared/Lists/ProjectList';

import './styles/Projects.scss';

function ProjectsPage() {
  const [projectsInfo, setProjectsInfo] = useState<Projects>();
  const { width } = useWindowDimensions();
  const { response, isFetching, isError, error } = useHttp<
    Projects | Project[]
  >({
    isQuery: true,
    url: '/portfolio/:idUser/projects',
    queryKey: ['projects'],
    queryfn: () => data.project,
    errorMessage: 'Error while fetching the project section',
    staleTime: 60000,
  });

  useEffect(() => {
    if (response) {
      const responseAux = response as Projects;
      if (responseAux.projects) {
        setProjectsInfo(responseAux);
      } else {
        const responseAux = response as Project[];
        setProjectsInfo({ projects: responseAux });
      }
    }
  }, [response]);

  projectsInfo?.projects.sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <section id="project">
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {width >= CONSTANTS.minWidthPc ? null : (
            <div className="section-title-project">
              <h2>Project</h2>
            </div>
          )}
          {projectsInfo ? (
            <div>
              <ProjectList projectListProps={projectsInfo.projects} />
              <div className="project-archive-content">
                <LinkIcon
                  isAnchor={false}
                  linkProps={{
                    href: 'archive',
                    whileHover: 'hover',
                    animate: 'rest',
                    variants: ResumeVariants,
                  }}
                  iconProps={{
                    icon: faArrowRight,
                    variants: ResumeIconVariants,
                  }}
                  beforeText="View Full Project Archive"
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

export default ProjectsPage;
