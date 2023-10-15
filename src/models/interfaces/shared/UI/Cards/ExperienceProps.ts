import { Tag } from '../Tags/TagsProps';
import { BulletPoint } from '../Text/BulletPointProps';

interface Link {
  id: string;
  name: string;
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLink: string;
  description: BulletPoint[];
  date: string;
  tags: Tag[];
  links?: Link[];
}

export interface ExperienceProps {
  experienceProps: Experience;
}
