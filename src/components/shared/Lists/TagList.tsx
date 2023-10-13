import { TagListProps } from '../../../models/interfaces/Lists/TagListProps';
import Tag from '../UI/Tags/Tag';

import './styles/TagList.scss';

function TagList(props: TagListProps) {
  const tagListProps = props.tagListProps;

  return (
    <ul className="tag-list">
      {tagListProps.map((tagItem) => (
        <li key={tagItem.id} className="tag-list-item">
          <Tag tagProps={tagItem} />
        </li>
      ))}
    </ul>
  );
}

export default TagList;
