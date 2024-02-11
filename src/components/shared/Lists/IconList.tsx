import { IconListProps } from '../../../models/interfaces/shared/Lists/IconListProps';
import Icon from '../UI/Icons/Icon';

import './styles/IconList.scss';

function IconList(props: Readonly<IconListProps>) {
  const { iconListProps } = props;

  return (
    <ul className="icon-list">
      {iconListProps.map((iconProp) => (
        <li key={iconProp.id} className="icon-list-item">
          <Icon iconProps={iconProp} />
        </li>
      ))}
    </ul>
  );
}

export default IconList;
