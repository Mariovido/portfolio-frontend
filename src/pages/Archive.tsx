import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/shared/UI/Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ButtonVariants, LinkTableVariants } from '../utils/variants/variants';
import { ResumeLocation } from '../models/interfaces/pages/ResumeLocation';
import Cursor from '../components/shared/Common/Cursor';
import { CONFIG } from '../config/config';
import { CONSTANTS } from '../config/constants';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Table from '../components/shared/UI/Tables/Table';
import { useEffect, useState } from 'react';
import Projects from '../components/Portfolio/Projects';
import { data } from '../../data/data';
import { Project } from '../models/interfaces/shared/UI/Cards/ProjectProps';
import useHttp from '../hooks/useHttp';
import ErrorBlock from '../components/shared/Common/ErrorBlock';
import { Spinner } from '@react-pdf-viewer/core';
import TagList from '../components/shared/Lists/TagList';
import LinkIcon from '../components/shared/UI/Icons/LinkIcon';
import { motion } from 'framer-motion';
import RubberText from '../components/shared/UI/Text/RubberText';

import './styles/Archive.scss';

function Archive() {
  const [projectsInfo, setProjectsInfo] = useState<Projects>();
  const location = useLocation() as ResumeLocation;
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const { response, isFetching, isError, error } = useHttp<
    Projects | Project[]
  >({
    isQuery: true,
    url: '/portfolio/:idUser/projects',
    queryKey: ['projects'],
    queryfn: () => data.project,
    errorMessage: 'Error while fetching the project archive',
    staleTime: 60000,
  });

  const { state } = location;

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

  const handleOnClickBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (state?.prevPath) {
      navigate(-1);
    } else navigate(`${CONFIG.VITE_REACT_APP_BASE_URL}`);
  };

  const titles = ['Year', 'Project'];

  if (width >= CONSTANTS.minWidthPc) {
    titles.push('Subtitle');
    titles.push('Built with');
  }

  if (width >= CONSTANTS.minWidthPhone) titles.push('Link');

  const tableValues = projectsInfo
    ? projectsInfo.projects.map((project) => {
        const projectYear = (
          <div className="archive-table-year">{project.date}</div>
        );

        if (width < CONSTANTS.minWidthPhone)
          LinkTableVariants.rest = {
            ...LinkTableVariants.rest,
            color: CONSTANTS.lightestColor,
            opacity: 0.8,
          };

        const projectTitleLink = project.projectLink ? (
          <LinkIcon
            isAnchor={true}
            linkProps={{
              href: project.projectLink,
              target: '_blank',
              whileHover: 'hover',
              animate: 'rest',
              variants: LinkTableVariants,
            }}
            iconProps={{ icon: faArrowRight, variants: LinkTableVariants }}
            beforeText={project.title}
          />
        ) : null;
        const projectTitle = (
          <div className="archive-table-title">
            {width >= CONSTANTS.minWidthPhone
              ? project.title
              : projectTitleLink}
          </div>
        );

        const projectSubtitle = (
          <div className="archive-table-subtitle">{project.subtitle}</div>
        );

        const projectTags = (
          <div className="archive-table-tags">
            {project.tags ? <TagList tagListProps={project.tags} /> : null}
          </div>
        );

        const projectLink = (
          <motion.div className="archive-table-link">
            {project.projectLink ? (
              <LinkIcon
                isAnchor={true}
                linkProps={{
                  href: project.projectLink,
                  target: '_blank',
                  whileHover: 'hover',
                  animate: 'rest',
                  variants: LinkTableVariants,
                }}
                iconProps={{ icon: faArrowRight, variants: LinkTableVariants }}
                beforeText={project.projectLink?.split('//')[1]}
              />
            ) : null}
          </motion.div>
        );

        const valuesTable = [projectYear, projectTitle];
        if (width >= CONSTANTS.minWidthPc) {
          valuesTable.push(projectSubtitle);
          valuesTable.push(projectTags);
        }
        if (width >= CONSTANTS.minWidthPhone) valuesTable.push(projectLink);

        return valuesTable;
      })
    : [];

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="archive">
          <Cursor />
          <div className="archive-content">
            <Button
              handleOnClick={handleOnClickBack}
              whileHover="hover"
              animate="rest"
              variants={ButtonVariants}
              className="archive-header-button"
            >
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              <span>Back</span>
            </Button>
            <h1 className="archive-title">
              <RubberText word={'All Projects'} />
            </h1>
            <Table
              idTable={'archive-table'}
              titles={titles}
              values={tableValues}
            />
          </div>
        </div>
      )}
      {isError ? <ErrorBlock error={error} /> : null}
    </>
  );
}

export default Archive;
