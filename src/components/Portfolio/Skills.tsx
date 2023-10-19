import { useEffect, useState } from 'react';
import { data } from '../../../data/data';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { CONSTANTS } from '../../config/constants';
import SkillList from '../shared/Lists/SkillList';
import { CONFIG } from '../../config/config';
import { Skills } from '../../models/interfaces/Portfolio/Skills';

import './styles/Skills.scss';

function Skills() {
  const [skillInfo, setSkillInfo] = useState<Skills>(data.skill);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (CONFIG.VITE_REACT_APP_USE_SERVER) {
      // TODO - CALL THE API
    } else {
      setSkillInfo(data.skill);
    }
  }, []);

  return (
    <section id="skill">
      {width >= CONSTANTS.minWidthPc ? null : (
        <div className="section-title-skill">
          <h2>Skill</h2>
        </div>
      )}
      <SkillList skillListProps={skillInfo.skills} />
    </section>
  );
}

export default Skills;
