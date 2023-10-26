import { ProjectListProps } from '../../../models/interfaces/shared/Lists/ProjectListProps';
import Project from '../UI/Cards/Project';

import './styles/ProjectList.scss';

function ProjectList(props: ProjectListProps) {
  const { projectListProps } = props;

  return (
    <ol className="project-list">
      {projectListProps.map((projectProp) => (
        <li className="project" key={projectProp.id}>
          <Project projectProps={projectProp} />
        </li>
      ))}
    </ol>
  );
}

export default ProjectList;
