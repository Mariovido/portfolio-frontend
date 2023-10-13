import { Education } from '../../models/interfaces/UI/Cards/EducationProp';
import EducationList from '../shared/Lists/EducationList';

import './styles/Education.scss';

function Educations() {
  // TODO - CALL API
  const educationListProps: Education[] = [
    {
      id: '1',
      name: 'Software Engineering',
      university: 'UPM',
      universityLink: 'http://upm.es',
      date: new Date().toDateString(),
    },
    {
      id: '2',
      name: 'Software Engineering',
      university: 'Universidad Politécnica de Madrid',
      universityLink: 'http://upm.es',
      date: new Date().toDateString(),
    },
  ];

  return (
    <section id="education">
      <div>
        <EducationList educationListProps={educationListProps} />
      </div>
    </section>
  );
}

export default Educations;
