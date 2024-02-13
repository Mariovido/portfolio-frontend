import { DifficultyEnum } from '../../enums/DifficultyEnum';
import { PlatformEnum } from '../../enums/PlatformEnum';
import { StatusEnum } from '../../enums/StatusEnum';
import { Tag } from '../shared/UI/Tags/TagsProps';

export interface Problem {
  id: string;
  platform?: PlatformEnum;
  number?: number;
  title: string;
  difficulty: DifficultyEnum;
  languages?: Tag[];
  status: StatusEnum;
  companies?: Tag[];
  description: string;
  solution?: string;
}

export interface Problems {
  problems: Problem[];
}
