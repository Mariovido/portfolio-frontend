import { DifficultyEnum } from '../../../src/models/enums/DifficultyEnum';
import { PlatformEnum } from '../../../src/models/enums/PlatformEnum';
import { StatusEnum } from '../../../src/models/enums/StatusEnum';
import { Problem } from '../../../src/models/interfaces/Problems/Problem';

// TODO - ADD MORE PROBLEMS
export const mediumHackerrank: Problem[] = [
  {
    id: 'e7ade2be-954d-5020-8711-b2ce8c4778d4',
    platform: PlatformEnum.HACKERRANK,
    title: 'Flipping the Matrix',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: 'ddf0fad8-f916-5a97-94f1-935ebbc62f05',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/hackerrank/descriptions/medium/flipping_the_matrix.md',
    solution:
      '/src/assets/doc/problems/hackerrank/solutions/medium/flipping_the_matrix.md',
  },
  {
    id: '24699075-87e7-5e04-8545-ce6e6c24f818',
    platform: PlatformEnum.HACKERRANK,
    title: 'Zig Zag Sequence',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: '1c0eb227-7492-51bf-90be-0d1a28687f5d',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/hackerrank/descriptions/medium/zig_zag_sequence.md',
    solution:
      '/src/assets/doc/problems/hackerrank/solutions/medium/zig_zag_sequence.md',
  },
  {
    id: 'ea7d39c6-9865-5175-b88b-09e1d072c66a',
    platform: PlatformEnum.HACKERRANK,
    title: 'Recursive Digit Sum',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: 'e6e18416-9bf9-5105-86c7-948e19ae6a76',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/hackerrank/descriptions/medium/recursive_digit_sum.md',
    solution:
      '/src/assets/doc/problems/hackerrank/solutions/medium/recursive_digit_sum.md',
  },
  {
    id: '7a43d054-8192-5c76-bc8b-aa3e66f35286',
    platform: PlatformEnum.HACKERRANK,
    title: 'New Year Chaos',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: '13f231fd-4ced-5eea-a88d-c2faa907e9f5',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/hackerrank/descriptions/medium/new_year_chaos.md',
    solution:
      '/src/assets/doc/problems/hackerrank/solutions/medium/new_year_chaos.md',
  },
  // {
  //   id: 'XXX',
  //   platform: PlatformEnum.HACKERRANK,
  //   title: 'XXX',
  //   difficulty: DifficultyEnum.MEDIUM,
  //   languages: [
  //     {
  //       id: 'XXX',
  //       tag: 'Java',
  //     },
  //   ],
  //   status: StatusEnum.DONE,
  //   description: '/src/assets/doc/problems/hackerrank/descriptions/medium/XXX',
  //   solution: '/src/assets/doc/problems/hackerrank/solutions/medium/XXX',
  // },
];
