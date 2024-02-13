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
    description:
      '/src/assets/doc/problems/leetcode/descriptions/easy/1_two_sum.md',
    solution: '/src/assets/doc/problems/leetcode/solutions/easy/1_two_sum.md',
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
      '/src/assets/doc/problems/leetcode/descriptions/medium/49_group_anagrams.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/medium/49_group_anagrams.md',
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
      '/src/assets/doc/problems/leetcode/descriptions/easy/242_valid_anagram.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/easy/242_valid_anagram.md',
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
      '/src/assets/doc/problems/leetcode/descriptions/easy/232_implement_queue_using_stacks.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/easy/232_implement_queue_using_stacks.md',
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
      '/src/assets/doc/problems/leetcode/descriptions/easy/387_first_unique_character_in_a_string.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/easy/387_first_unique_character_in_a_string.md',
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
      '/src/assets/doc/problems/leetcode/descriptions/easy/9_palindrome_number.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/easy/9_palindrome_number.md',
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
      '/src/assets/doc/problems/leetcode/descriptions/easy/169_majority_element.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/easy/169_majority_element.md',
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
      '/src/assets/doc/problems/leetcode/descriptions/easy/2108_find_first_palindromic_string_in_the_array.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/easy/2108_find_first_palindromic_string_in_the_array.md',
  },
  {
    id: '4b4fb0a5-bb4e-5a57-be93-66f4ea941f18',
    platform: PlatformEnum.LEETCODE,
    number: 443,
    title: 'String Compression',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: '6553f63a-b07b-50f8-88bc-87b058f6e501',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/medium/443_string_compression.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/medium/443_string_compression.md',
  },
  {
    id: '68e1a00a-bc22-5e34-bf38-c317a3af054d',
    platform: PlatformEnum.LEETCODE,
    number: 380,
    title: 'Insert Delete GetRandom O(1)',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: '72b77918-5eb6-5e76-9292-d8b22e5551ad',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/medium/380_insert_delete_getrandom_o(1).md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/medium/380_insert_delete_getrandom_o(1).md',
  },
  {
    id: 'd3e938c0-8403-5398-a16f-a74955043522',
    platform: PlatformEnum.LEETCODE,
    number: 139,
    title: 'Word Break',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: '1ba4531b-e6d4-56a2-a3e3-f30fac476eef',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/medium/139_word_break.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/medium/139_word_break.md',
  },
  {
    id: '6166850d-9e8b-5307-af9c-f5a74a6320b7',
    platform: PlatformEnum.LEETCODE,
    number: 713,
    title: 'Subarray Product Less Than K',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: 'fc76bfb8-498c-57d2-bfa0-5d3c87abb8ea',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/medium/713_subarray_product_less_than_k.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/medium/713_subarray_product_less_than_k.md',
  },
  {
    id: 'c5d51a63-ba1b-5f1d-9371-8e85d3a979c8',
    platform: PlatformEnum.LEETCODE,
    number: 695,
    title: 'Max Area of Island',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: '60e89add-c26f-526b-8d1e-c6b0a6dfbc0e',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/medium/695_max_area_of_island.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/medium/695_max_area_of_island.md',
  },
  {
    id: '5f269383-4497-56e6-bea0-50064b127c12',
    platform: PlatformEnum.LEETCODE,
    number: 146,
    title: 'LRU Cache',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: 'ae790a93-d4a0-58c8-8f58-f29013a17f32',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/medium/146_lru_cache.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/medium/146_lru_cache.md',
  },
  {
    id: 'e900a751-c7dd-596f-9c77-27808adcd645',
    platform: PlatformEnum.LEETCODE,
    number: 322,
    title: 'Coin Change',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: '638d46a3-a1e2-521b-82ab-6cf0f66e1aca',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/medium/322_coin_change.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/medium/322_coin_change.md',
  },
  {
    id: '62b980e5-36ce-5e4a-b7d1-cf148522afb5',
    platform: PlatformEnum.LEETCODE,
    number: 341,
    title: 'Flatten Nested List Iterator',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: 'a815d1c9-0e61-5dd3-b70a-fc0bae974e35',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/medium/341_flatten_nested_list_iterator.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/medium/341_flatten_nested_list_iterator.md',
  },
  {
    id: '08571e8d-d788-532b-b55c-f76f8c8a9bf3',
    platform: PlatformEnum.LEETCODE,
    number: 230,
    title: 'Kth Smallest Element in a BST',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: '90a5b3ec-2393-5e79-9231-2cc988444a5e',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/medium/230_kth_smallest_element_in_a_bst.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/medium/230_kth_smallest_element_in_a_bst.md',
  },
  {
    id: '6a95a58b-ada6-5444-9b0b-5fcb73ec852f',
    platform: PlatformEnum.LEETCODE,
    number: 200,
    title: 'Number of Islands',
    difficulty: DifficultyEnum.MEDIUM,
    languages: [
      {
        id: '3d140f5b-b6b0-5cfd-9012-0319f730828c',
        tag: 'Java',
      },
    ],
    status: StatusEnum.DONE,
    description:
      '/src/assets/doc/problems/leetcode/descriptions/medium/200_number_of_islands.md',
    solution:
      '/src/assets/doc/problems/leetcode/solutions/medium/200_number_of_islands.md',
  },
  // {
  //   id: 'XXX',
  //   platform: PlatformEnum.LEETCODE,
  //   number: XXX,
  //   title: 'XXX',
  //   difficulty: DifficultyEnum.MEDIUM,
  //   languages: [
  //     {
  //       id: 'XXX',
  //       tag: 'Java',
  //     },
  //   ],
  //   status: StatusEnum.DONE,
  //   description:
  //     '/src/assets/doc/problems/leetcode/descriptions/medium/XXX.md',
  //   solution:
  //     '/src/assets/doc/problems/leetcode/solutions/medium/XXX.md',
  // },
];
