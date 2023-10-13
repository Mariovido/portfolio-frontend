import { TextLinkVariants } from '../../utils/variants/variants';
import TextLink from '../shared/UI/Text/TextLink';

import './styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Loosely designed in{' '}
        <TextLink
          href="http://google.com"
          target="_blank"
          whileHover="hover"
          animate="rest"
          variants={TextLinkVariants}
        >
          Figma
        </TextLink>{' '}
        and coded in Visual Studio Code by yours truly. Built with Next.js and
        Tailwind CSS, deployed with Vercel. All text is set in the Inter
        typeface.
      </p>
    </footer>
  );
}

export default Footer;
