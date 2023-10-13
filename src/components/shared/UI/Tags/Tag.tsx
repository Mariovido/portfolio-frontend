import { TagProps } from '../../../../models/interfaces/UI/Tags/TagsProps';

import './styles/Tag.scss';

function Tag(props: TagProps) {
  const tagProps = props.tagProps;

  return <div className="tag">{tagProps.name}</div>;
}

export default Tag;
