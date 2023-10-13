import { ExperienceListProps } from '../../../models/interfaces/Lists/ExperienceListProps';
import Experience from '../UI/Cards/Experience';

import './styles/ExperienceList.scss';

function ExperienceList(props: ExperienceListProps) {
  const experienceListProps = props.experienceListProps;

  return (
    <ol className="experience-list">
      {experienceListProps.map((experienceProp) => (
        <li className="experience" key={experienceProp.id}>
          <Experience experienceProps={experienceProp} />
        </li>
      ))}
    </ol>
  );
}

export default ExperienceList;
