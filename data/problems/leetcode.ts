import { DifficultyEnum } from '../../src/models/enums/DifficultyEnum';
import { PlatformEnum } from '../../src/models/enums/PlatformEnum';
import { StatusEnum } from '../../src/models/enums/StatusEnum';
import { Problem } from '../../src/models/interfaces/Problems/Problem';

// TODO - ADD MORE PROBLEMS
export const leetcode: Problem[] = [
  {
    id: '9874f1b9-e60a-5cd8-8da1-deaeeb8f3c2b',
    platform: PlatformEnum.LEETCODE,
    number: 1,
    title: 'Two Sum',
    difficulty: DifficultyEnum.EASY,
    languages: [
      {
        id: 'a58c1c6d-f292-5d12-9f47-9665921820c4',
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
        id: '3b3f4958-0f6b-50f3-ba65-c6759ad64eb8',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/49_group_anagrams.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/49_group_anagrams.md',
  },
  {
    id: 'b70fcb39-f87a-5d08-a6c2-a82ccb5e94d5',
    platform: PlatformEnum.LEETCODE,
    number: 242,
    title: 'Valid Anagram',
    difficulty: DifficultyEnum.EASY,
    languages: [
      {
        id: '0d33a486-7742-501c-9165-b58023734774',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/242_valid_anagram.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/242_valid_anagram.md',
  },
  {
    id: '795b005a-67cb-532d-bde8-7e8e11af6c4b',
    platform: PlatformEnum.LEETCODE,
    number: 232,
    title: 'Implement Queue using Stacks',
    difficulty: DifficultyEnum.EASY,
    languages: [
      {
        id: '90d17683-3316-59a8-aa3a-5a19280b1708',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/232_implement_queue_using_stacks.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/232_implement_queue_using_stacks.md',
  },
  {
    id: 'cd4b531e-5865-5ed3-973d-19ef6b1edc20',
    platform: PlatformEnum.LEETCODE,
    number: 387,
    title: 'First Unique Character in a String',
    difficulty: DifficultyEnum.EASY,
    languages: [
      {
        id: '14d2f880-869f-5c35-8c20-65f0c8d7a9af',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/387_first_unique_character_in_a_string.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/387_first_unique_character_in_a_string.md',
  },
  {
    id: '5b18b179-3f41-50b4-a4a9-1e49663295c6',
    platform: PlatformEnum.LEETCODE,
    number: 9,
    title: 'Palindrome Number',
    difficulty: DifficultyEnum.EASY,
    languages: [
      {
        id: 'da217b2c-1799-5fb1-b433-c3a29e3d7df1',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/9_palindrome_number.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/9_palindrome_number.md',
  },
  {
    id: 'b3484092-2d95-5d2d-92c9-cfa95ebbd137',
    platform: PlatformEnum.LEETCODE,
    number: 169,
    title: 'Majority Element',
    difficulty: DifficultyEnum.EASY,
    languages: [
      {
        id: '898b3eea-9878-507c-845e-391c5714d092',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/169_majority_element.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/169_majority_element.md',
  },
  {
    id: '12c7dc10-b5ec-56dc-9d7d-323c43c215c5',
    platform: PlatformEnum.LEETCODE,
    number: 2108,
    title: 'Find First Palindromic String in the Array',
    difficulty: DifficultyEnum.EASY,
    languages: [
      {
        id: '20e51be2-650b-5940-b5b4-ee422ea3bbba',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/2108_find_first_palindromic_string_in_the_array.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/2108_find_first_palindromic_string_in_the_array.md',
  },
  // {
  //   id: 'XXX',
  //   platform: PlatformEnum.LEETCODE,
  //   number: XXX,
  //   title: 'XXX',
  //   difficulty: DifficultyEnum.EASY,
  //   languages: [
  //     {
  //       id: 'XXX',
  //       tag: 'Java',
  //     },
  //   ],
  //   status: StatusEnum.DONE,
  //   description:
  //     '/src/assets/doc/problems/leetcode/descriptions/XXX.md',
  //   solution:
  //     '/src/assets/doc/problems/leetcode/solutions/XXX.md',
  // },
];
