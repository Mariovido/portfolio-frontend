import { TagProps } from '../../../../models/interfaces/shared/UI/Tags/TagsProps';

import './styles/Tag.scss';

function Tag(props: TagProps) {
  const { tagProps } = props;

  return <div className="tag">{tagProps.tag}</div>;
}

export default Tag;
