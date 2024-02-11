import { DifficultyEnum } from '../../src/models/enums/DifficultyEnum';
import { PlatformEnum } from '../../src/models/enums/PlatformEnum';
import { StatusEnum } from '../../src/models/enums/StatusEnum';
import { Problem } from '../../src/models/interfaces/Problems/Problem';

export const leetcode: Problem[] = [
  {
    id: '9874f1b9-e60a-5cd8-8da1-deaeeb8f3c2b',
    platform: PlatformEnum.LEETCODE,
    number: 1,
    title: 'Two Sum',
    difficulty: DifficultyEnum.EASY,
    languages: [
      {
        id: '1',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description: '/src/assets/doc/problems/leetcode/descriptions/1_two_sum.md',
    solution: '/src/assets/doc/problems/leetcode/solutions/1_two_sum.md',
  },
  {
    id: '656093f5-317a-5fda-aeb0-36e1a3e9575c',
    platform: PlatformEnum.LEETCODE,
    number: 49,
    title: 'Group Anagrams',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: '1',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/49_group_anagrams.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/49_group_anagrams.md',
  },
];
