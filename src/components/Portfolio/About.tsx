import { useEffect, useState } from 'react';
import { CONFIG } from '../../config/config';
import { data } from '../../../data/data';

import './styles/About.scss';

function About() {
  const [aboutInfo, setAboutInfo] = useState<string[]>([]);

  useEffect(() => {
    if (CONFIG.VITE_REACT_APP_USE_SERVER) {
      // TODO - CALL THE API
    } else {
      setAboutInfo(
        data.about.paragraphs.map((paragraph) => paragraph.description)
      );
    }
  }, []);

  // TODO - RETOCAR AÑADIENDO LINKS
  return (
    <section id="about">
      <div className="paragraphs">
        {aboutInfo.map((paragraph) => (
          <p key={paragraph.slice(0, 3)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default About;
