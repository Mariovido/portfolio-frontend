import { BulletPointListProps } from '../../../models/interfaces/shared/Lists/BulletPointListProps';
import BulletPoint from '../UI/Text/BulletPoint';

import './styles/BulletPointList.scss';

function BulletPointList(props: BulletPointListProps) {
  const { bulletPointListProps, classNameParagraph } = props;

  return (
    <ul className="bullet-point-list">
      {bulletPointListProps.map((bulletPointProp) => (
        <li className="bullet-point-list-item" key={bulletPointProp.id}>
          <BulletPoint
            key={bulletPointProp.id}
            bulletPoint={bulletPointProp}
            classNameParagraph={classNameParagraph}
          />
        </li>
      ))}
    </ul>
  );
}

export default BulletPointList;
