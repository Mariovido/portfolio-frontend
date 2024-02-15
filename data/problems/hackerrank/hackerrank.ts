import { Problem } from '../../../src/models/interfaces/Problems/Problem';
import { easyHackerrank } from './easyHackerrank';
import { mediumHackerrank } from './mediumHackerrank';
import { hardHackerrank } from './hardHackerrank';

export const hackerrank: Problem[] = [
  ...easyHackerrank,
  ...mediumHackerrank,
  ...hardHackerrank,
];
