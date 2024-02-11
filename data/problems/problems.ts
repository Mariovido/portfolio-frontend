import { Problems } from '../../src/models/interfaces/Problems/Problem';
import { leetcode } from './leetcode';
import { hackerrank } from './hackerrank';

export const problems: Problems = {
  problems: [...leetcode, ...hackerrank],
};
