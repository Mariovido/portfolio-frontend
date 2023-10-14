import { Fragment } from 'react';
import { Variants } from 'framer-motion';
import { Footer } from '../models/interfaces/Portfolio/Footer';
import TextLink from '../components/shared/UI/Text/TextLink';

export const convertToTextLinks = (
  footer: Footer,
  whileHover: string,
  animate: string,
  variants: Variants
): JSX.Element => {
  let key = 0;

  return (
    <>
      {footer.paragraph.split('$$$').map((paragraphPart) => {
        const link = footer.links?.find((link) => link.tag === paragraphPart);

        if (link)
          return (
            <Fragment key={++key}>
              {' '}
              <TextLink
                href={link.url}
                target={link.target}
                whileHover={whileHover}
                animate={animate}
                variants={variants}
              >
                {link.name}
              </TextLink>{' '}
            </Fragment>
          );

        return <Fragment key={++key}>{paragraphPart}</Fragment>;
      })}
    </>
  );
};
