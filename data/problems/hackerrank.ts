import { DifficultyEnum } from '../../src/models/enums/DifficultyEnum';
import { PlatformEnum } from '../../src/models/enums/PlatformEnum';
import { StatusEnum } from '../../src/models/enums/StatusEnum';
import { Problem } from '../../src/models/interfaces/Problems/Problem';

export const hackerrank: Problem[] = [
  {
    id: 'b4da470f-10e1-5e75-be0d-8f2059e63f7e',
    platform: PlatformEnum.HACKERRANK,
    title: 'Plus Minus',
    difficulty: DifficultyEnum.EASY,
    languages: [
      {
        id: '1',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/hackerrank/descriptions/plus_minus.md',
    solution: '/src/assets/doc/problems/hackerrank/solutions/plus_minus.md',
  },
];
