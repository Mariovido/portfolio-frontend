import { Tag } from '../Tags/TagsProps';

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
  description: string;
  date: string;
  tags: Tag[];
  links?: Link[];
}

export interface ExperienceProps {
  experienceProps: Experience;
}
