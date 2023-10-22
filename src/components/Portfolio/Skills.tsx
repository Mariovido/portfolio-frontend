import { useEffect, useState } from 'react';
import { data } from '../../../data/data';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { CONSTANTS } from '../../config/constants';
import SkillList from '../shared/Lists/SkillList';
import { Skills } from '../../models/interfaces/Portfolio/Skills';
import useHttp from '../../hooks/useHttp';
import { Skill } from '../../models/interfaces/shared/UI/Cards/SkillProp';
import Spinner from '../shared/Common/Spinner';
import ErrorBlock from '../shared/Common/ErrorBlock';

import './styles/Skills.scss';

function Skills() {
  const [skillInfo, setSkillInfo] = useState<Skills>();
  const { width } = useWindowDimensions();
  const { response, isFetching, isError, error } = useHttp<Skills | Skill[]>({
    isQuery: true,
    url: '/portfolio/:idUser/skills',
    queryKey: ['skill'],
    queryfn: () => data.skill,
    errorMessage: 'Error while fetching the skill section',
    staleTime: 60000,
  });

  useEffect(() => {
    if (response) {
      const responseAux = response as Skills;
      if (responseAux.skills) {
        setSkillInfo(responseAux);
      } else {
        const responseAux = response as Skill[];
        setSkillInfo({ skills: responseAux });
      }
    }
  }, [response]);

  return (
    <section id="skill">
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {width >= CONSTANTS.minWidthPc ? null : (
            <div className="section-title-skill">
              <h2>Skill</h2>
            </div>
          )}
          {skillInfo ? <SkillList skillListProps={skillInfo.skills} /> : null}
        </>
      )}
      {isError ? <ErrorBlock error={error} /> : null}
    </section>
  );
}

export default Skills;
