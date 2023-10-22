import { useEffect, useState } from 'react';
import { TextLinkVariants } from '../../utils/variants/variants';
import { data } from '../../../data/data';
import { convertToTextLinks } from '../../utils/convertToTextLinks';
import { Footer } from '../../models/interfaces/Portfolio/Footer';
import useHttp from '../../hooks/useHttp';
import Spinner from '../shared/Common/Spinner';
import ErrorBlock from '../shared/Common/ErrorBlock';

import './styles/Footer.scss';

function Footer() {
  const [footerInfo, setFooterInfo] = useState<Footer>();
  const { response, isFetching, isError, error } = useHttp<Footer>({
    isQuery: true,
    url: '/portfolio/:idUser/footer',
    queryKey: ['footer'],
    queryfn: () => data.footer,
    errorMessage: 'Error while fetching the footer section',
    staleTime: 60000,
  });

  useEffect(() => {
    if (response) {
      setFooterInfo({
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
    <footer className="footer">
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {footerInfo
            ? footerInfo.paragraphs.map((paragraph) => (
                <p key={paragraph.id} className="footer-paragraph">
                  {paragraph.paragraphJSX}
                </p>
              ))
            : null}
        </>
      )}
      {isError ? <ErrorBlock error={error} /> : null}
    </footer>
  );
}

export default Footer;
