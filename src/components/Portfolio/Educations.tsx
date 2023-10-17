import { useEffect, useState } from 'react';
import EducationList from '../shared/Lists/EducationList';
import { Educations } from '../../models/interfaces/Portfolio/Educations';
import { data } from '../../../data/data';
import { CONFIG } from '../../config/config';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { CONSTANTS } from '../../config/constants';

import './styles/Educations.scss';

function Educations() {
  const [educationsInfo, setEducationsInfo] = useState<Educations>(
    data.education
  );
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (CONFIG.VITE_REACT_APP_USE_SERVER) {
      // TODO - CALL THE API
    } else {
      setEducationsInfo(data.education);
    }
  }, []);

  return (
    <section id="education">
      {width >= CONSTANTS.minWidthPc ? null : (
        <div className="section-title-education">
          <h2>Education</h2>
        </div>
      )}
      <div>
        <EducationList educationListProps={educationsInfo.educations} />
      </div>
    </section>
  );
}

export default Educations;
