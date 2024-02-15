import { Problem } from '../../../src/models/interfaces/Problems/Problem';
import { easyLeetcode } from './easyLeetcode';
import { mediumLeetcode } from './mediumLeetcode';
import { hardLeetcode } from './hardLeetcode';

export const leetcode: Problem[] = [
  ...easyLeetcode,
  ...mediumLeetcode,
  ...hardLeetcode,
];
