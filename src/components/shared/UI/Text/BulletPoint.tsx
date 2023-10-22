import { BulletPointProps } from '../../../../models/interfaces/shared/UI/Text/BulletPointProps';

import './styles/BulletPoint.scss';

function BulletPoint(props: BulletPointProps) {
  const { bulletPoint, classNameParagraph } = props;

  return (
    <p className={`bullet-point ${classNameParagraph}`}>
      {`- ${bulletPoint.bulletPoint}`}
    </p>
  );
}

export default BulletPoint;
