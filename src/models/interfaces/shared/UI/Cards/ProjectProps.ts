import { Link } from '../../Common/Link';
import { Tag } from '../Tags/TagsProps';
import { BulletPoint } from '../Text/BulletPointProps';
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  projectLink?: string;
  imageLink?: string;
  description: BulletPoint[];
  date: number;
  tags?: Tag[];
  links?: Link[];
}

export interface ProjectProps {
  projectProps: Project;
}
