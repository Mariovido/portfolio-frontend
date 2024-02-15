import { Problems } from '../../src/models/interfaces/Problems/Problem';
import { leetcode } from './leetcode/leetcode';
import { hackerrank } from './hackerrank/hackerrank';

export const problems: Problems = {
  problems: [...leetcode, ...hackerrank],
};
