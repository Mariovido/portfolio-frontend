import { TagProps } from '../../../../models/interfaces/shared/UI/Tags/TagsProps';

import './styles/Tag.scss';

function Tag(props: TagProps) {
  const { tagProps } = props;

  return <div className="tag">{tagProps.name}</div>;
}

export default Tag;
