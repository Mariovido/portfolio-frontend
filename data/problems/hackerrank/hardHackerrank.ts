import { DifficultyEnum } from '../../../src/models/enums/DifficultyEnum';
import { PlatformEnum } from '../../../src/models/enums/PlatformEnum';
import { StatusEnum } from '../../../src/models/enums/StatusEnum';
import { Problem } from '../../../src/models/interfaces/Problems/Problem';

export const hardHackerrank: Problem[] = [
  {
    id: '3845cd11-20b7-56ec-ae37-00fc05aa46f1',
    platform: PlatformEnum.HACKERRANK,
    title: 'Truck Tour',
    difficulty: DifficultyEnum.HARD,
    languages: [
      {
        id: 'd1e3f683-9112-5538-8706-12ba0ade0475',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/hackerrank/descriptions/hard/truck_tour.md',
    solution:
      '/src/assets/doc/problems/hackerrank/solutions/hard/truck_tour.md',
  },
  {
    id: '25be062e-e63e-5f16-bbed-c5cda84d3326',
    platform: PlatformEnum.HACKERRANK,
    title: 'No Prefix Set',
    difficulty: DifficultyEnum.HARD,
    languages: [
      {
        id: '471adde7-4c20-5ffb-9226-1d422333030b',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/hackerrank/descriptions/hard/no_prefix_set.md',
    solution:
      '/src/assets/doc/problems/hackerrank/solutions/hard/no_prefix_set.md',
  },
  {
    id: '69965e03-2bd4-56b5-b46a-fa4a9fecf3c9',
    platform: PlatformEnum.HACKERRANK,
    title: 'Queries with Fixed Length',
    difficulty: DifficultyEnum.HARD,
    languages: [
      {
        id: 'cfc41640-d1b1-5856-a3ef-dbb2d47c1ab6',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/hackerrank/descriptions/hard/queries_with_fixed_length.md',
    solution:
      '/src/assets/doc/problems/hackerrank/solutions/hard/queries_with_fixed_length.md',
  },
  {
    id: '3735190d-5ff4-51d6-9632-7b8ac1886ed6',
    platform: PlatformEnum.HACKERRANK,
    title: 'Array Manipulation',
    difficulty: DifficultyEnum.HARD,
    languages: [
      {
        id: '8134d984-6349-5d8c-b5a6-b18fb4b63efe',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/hackerrank/descriptions/hard/array_manipulation.md',
    solution:
      '/src/assets/doc/problems/hackerrank/solutions/hard/array_manipulation.md',
  },
];
