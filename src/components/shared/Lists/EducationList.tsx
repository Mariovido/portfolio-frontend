import { EducationListProps } from '../../../models/interfaces/Lists/EducationListProps';
import Education from '../UI/Cards/Education';

import './styles/EducationList.scss';

function EducationList(props: EducationListProps) {
  const educationListProps = props.educationListProps;

  return (
    <ol className="education-list">
      {educationListProps.map((educationProp) => (
        <li className="education" key={educationProp.id}>
          <Education educationProps={educationProp} />
        </li>
      ))}
    </ol>
  );
}

export default EducationList;
