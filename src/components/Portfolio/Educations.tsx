import { useEffect, useState } from 'react';
import EducationList from '../shared/Lists/EducationList';
import { Educations } from '../../models/interfaces/Portfolio/Educations';
import { data } from '../../../data/data';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { CONSTANTS } from '../../config/constants';
import useHttp from '../../hooks/useHttp';
import ErrorBlock from '../shared/Common/ErrorBlock';
import Spinner from '../shared/Common/Spinner';
import { Education } from '../../models/interfaces/shared/UI/Cards/EducationProp';

import './styles/Educations.scss';

function Educations() {
  const [educationsInfo, setEducationsInfo] = useState<Educations>();
  const { width } = useWindowDimensions();
  const { response, isFetching, isError, error } = useHttp<
    Educations | Education[]
  >({
    isQuery: true,
    url: '/portfolio/:idUser/education',
    queryKey: ['education'],
    queryfn: () => data.education,
    errorMessage: 'Error while fetching the education section',
    staleTime: 60000,
  });

  useEffect(() => {
    if (response) {
      const responseAux = response as Educations;
      if (responseAux.educations) {
        setEducationsInfo(responseAux);
      } else {
        const responseAux = response as Education[];
        setEducationsInfo({ educations: responseAux });
      }
    }
  }, [response]);

  return (
    <section id="education">
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {width >= CONSTANTS.minWidthPc ? null : (
            <div className="section-title-education">
              <h2>Education</h2>
            </div>
          )}
          {educationsInfo ? (
            <div>
              <EducationList educationListProps={educationsInfo.educations} />
            </div>
          ) : null}
        </>
      )}
      {isError ? <ErrorBlock error={error} /> : null}
    </section>
  );
}

export default Educations;
