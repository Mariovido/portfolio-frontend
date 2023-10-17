import { useEffect, useState } from 'react';
import { CONFIG } from '../../config/config';
import { data } from '../../../data/data';
import { About } from '../../models/interfaces/Portfolio/About';
import { convertToTextLinks } from '../../utils/convertToTextLinks';
import { TextLinkVariants } from '../../utils/variants/variants';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { CONSTANTS } from '../../config/constants';

import './styles/About.scss';

function About() {
  const [aboutInfo, setAboutInfo] = useState<About>(data.about);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (CONFIG.VITE_REACT_APP_USE_SERVER) {
      // TODO - CALL THE API
    } else {
      setAboutInfo({
        paragraphs: data.about.paragraphs.map((paragraph) => {
          return {
            ...paragraph,
            paragraphJSX: convertToTextLinks(
              paragraph.description,
              paragraph.links,
              'hover',
              'rest',
              TextLinkVariants
            ),
          };
        }),
      });
    }
  }, []);

  return (
    <section id="about">
      {width >= CONSTANTS.minWidthPc ? null : (
        <div className="section-title-about">
          <h2>About</h2>
        </div>
      )}
      <div className="paragraphs">
        {aboutInfo.paragraphs.map((paragraph) => (
          <p key={paragraph.id}>{paragraph.paragraphJSX}</p>
        ))}
      </div>
    </section>
  );
}

export default About;
