import { useEffect, useState } from 'react';
import EducationList from '../shared/Lists/EducationList';
import { Educations } from '../../models/interfaces/Portfolio/Educations';
import { data } from '../../../data/data';
import { CONFIG } from '../../config/config';

import './styles/Education.scss';

function Educations() {
  const [educationsInfo, setEducationsInfo] = useState<Educations>(
    data.education
  );

  useEffect(() => {
    if (CONFIG.VITE_REACT_APP_USE_SERVER) {
      // TODO - CALL THE API
    } else {
      setEducationsInfo(data.education);
    }
  }, []);

  return (
    <section id="education">
      <div>
        <EducationList educationListProps={educationsInfo.educations} />
      </div>
    </section>
  );
}

export default Educations;
