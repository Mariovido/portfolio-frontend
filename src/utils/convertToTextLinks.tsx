import { Fragment } from 'react';
import { Variants } from 'framer-motion';
import TextLink from '../components/shared/UI/Text/TextLink';
import { Link } from '../models/interfaces/shared/Common/Link';

export const convertToTextLinks = (
  paragraph: string,
  links?: Link[],
  whileHover?: string,
  animate?: string,
  variants?: Variants
): JSX.Element => {
  let key = 0;

  return (
    <>
      {paragraph.split('$$$').map((paragraphPart) => {
        const link = links?.find((link) => link.tag === paragraphPart);

        if (link)
          return (
            <Fragment key={++key}>
              <TextLink
                href={link.url}
                target={link.target}
                whileHover={whileHover}
                animate={animate}
                variants={variants}
              >
                {link.name}
              </TextLink>
            </Fragment>
          );

        return <Fragment key={++key}>{paragraphPart}</Fragment>;
      })}
    </>
  );
};
