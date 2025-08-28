import { useEffect, useState } from 'react';
import { data } from '../../../data/data';
import { About } from '../../models/interfaces/Portfolio/About';
import { convertToTextLinks } from '../../utils/convertToTextLinks';
import { TextLinkVariants } from '../../utils/variants/variants';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { CONSTANTS } from '../../config/constants';
import useHttp from '../../hooks/useHttp';
import Spinner from '../shared/Common/Spinner';
import ErrorBlock from '../shared/Common/ErrorBlock';

import './styles/About.scss';

function AboutPage() {
  const [aboutInfo, setAboutInfo] = useState<About>();
  const { width } = useWindowDimensions();
  const { response, isFetching, isError, error } = useHttp<About>({
    isQuery: true,
    url: '/portfolio/:idUser/about',
    queryKey: ['about'],
    queryfn: () => data.about,
    errorMessage: 'Error while fetching the about section',
    staleTime: 60000,
  });

  useEffect(() => {
    if (response) {
      setAboutInfo({
        paragraphs: response.paragraphs.map((paragraph) => {
          return {
            ...paragraph,
            paragraphJSX: convertToTextLinks(
              paragraph.paragraph,
              paragraph.links,
              'hover',
              'rest',
              TextLinkVariants
            ),
          };
        }),
      });
    }
  }, [response]);

  return (
    <section id="about">
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {width >= CONSTANTS.minWidthPc ? null : (
            <div className="section-title-about">
              <h2>About</h2>
            </div>
          )}
          {aboutInfo ? (
            <div className="paragraphs">
              {aboutInfo.paragraphs.map((paragraph) => (
                <p key={paragraph.id}>{paragraph.paragraphJSX}</p>
              ))}
            </div>
          ) : null}
        </>
      )}
      {isError ? <ErrorBlock error={error} /> : null}
    </section>
  );
}

export default AboutPage;
