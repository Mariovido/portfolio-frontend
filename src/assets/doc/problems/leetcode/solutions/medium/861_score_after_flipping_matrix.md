# 861. Score After Flipping Matrix

## Intuition

The goal is to maximize the score of a binary matrix, where the score is determined by the values of the binary numbers represented by each row. The first step to maximize the score is ensuring that the most significant bit (left-most bit) of every row is as large as possible, ideally a `1`, because this bit contributes the most to the binary number's value. Then, for each column, optimize the number of `1`s to maximize the contribution of each column to the total score. This might involve flipping columns to increase the number of `1`s if the number of `0`s in a column is greater than the number of `1`s.

## Approach

1. **Flip Rows**: Start by iterating through each row. If the first element of a row is `0`, flip the entire row. This step ensures that the most significant bit of each row is maximized.
2. **Flip Columns Optimally**: After ensuring that all rows have `1` as their first element:
   - For each column, calculate the sum of all elements in that column.
   - Compute the potential score if this column were flipped and if it were not.
   - The score is calculated by the formula: maximum of `colSum` and `m - colSum` multiplied by `2^{n - j - 1}` (where `j` is the column index, `n` is the total number of columns, and `m` is the number of rows).
   - Add the maximum possible score from the above calculation for each column to the total score.
3. **Calculate Maximum Score**: Accumulate the score contributions from each column to compute the maximum score for the matrix.

## Complexity

- Time complexity: `O(m * n)`. The algorithm iterates through every element of the matrix multiple times (once for the initial row flips and once for each column to calculate scores), each iteration being a constant time operation.

- Space complexity: `O(1)`. The solution modifies the matrix in place and does not use any additional significant space relative to the input size.

## Code

```java
class Solution {
    public int matrixScore(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int maxScore = 0;

        for (int i = 0; i < m; i++) {
            if (grid[i][0] == 0) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = 1 - grid[i][j];
                }
            }
        }

        for (int j = 0; j < n; j++) {
            int colSum = 0;

            for (int i = 0; i < m; i++) {
                colSum += grid[i][j];
            }

            maxScore += Math.max(colSum, m - colSum) * (1 << (n - j - 1));
        }

        return maxScore;
    }
}
```
