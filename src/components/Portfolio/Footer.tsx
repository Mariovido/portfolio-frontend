import { useEffect, useState } from 'react';
import { TextLinkVariants } from '../../utils/variants/variants';
import { data } from '../../../data/data';
import { CONFIG } from '../../config/config';
import { convertToTextLinks } from '../../utils/convertToTextLinks';
import { Footer } from '../../models/interfaces/Portfolio/Footer';

import './styles/Footer.scss';

function Footer() {
  const [footerInfo, setFooterInfo] = useState<Footer>(data.footer);

  useEffect(() => {
    if (CONFIG.VITE_REACT_APP_USE_SERVER) {
      // TODO - CALL THE API
    } else {
      setFooterInfo((prevFooterInfo) => {
        return {
          ...prevFooterInfo,
          paragraphJSX: convertToTextLinks(
            data.footer.paragraph,
            data.footer.links,
            'hover',
            'rest',
            TextLinkVariants
          ),
        };
      });
    }
  }, []);

  return (
    <footer className="footer">
      <p>{footerInfo.paragraphJSX}</p>
    </footer>
  );
}

export default Footer;
