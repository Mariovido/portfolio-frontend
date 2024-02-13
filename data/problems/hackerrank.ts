import { DifficultyEnum } from '../../src/models/enums/DifficultyEnum';
import { PlatformEnum } from '../../src/models/enums/PlatformEnum';
import { StatusEnum } from '../../src/models/enums/StatusEnum';
import { Problem } from '../../src/models/interfaces/Problems/Problem';

// TODO - ADD MORE PROBLEMS AND REVIEW THE ONE ADDED
export const hackerrank: Problem[] = [
  {
    id: 'b4da470f-10e1-5e75-be0d-8f2059e63f7e',
    platform: PlatformEnum.HACKERRANK,
    title: 'Plus Minus',
    difficulty: DifficultyEnum.EASY,
    languages: [
      {
        id: 'dfc0bd11-7f44-5be5-b4e6-8f14d74e1156',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/hackerrank/descriptions/easy/plus_minus.md',
    solution:
      '/src/assets/doc/problems/hackerrank/solutions/easy/plus_minus.md',
  },
];
