# 1289. Minimum Falling Path Sum II

## Intuition

The problem seems to be a dynamic programming one where the goal is to find the minimum sum of a path from the top to the bottom of the grid, with the condition that we cannot fall on the same column index consecutively. The first thought is to track the minimum path sum to each cell in a new row based on the previous row's values, ensuring not to pick the same column twice in a row.

## Approach

1. **Initialization**: If the grid is of size `1 * 1`, simply return the only element.
2. **DP Array Setup**: Create a DP array of the same size as the grid to store the minimum path sums. Initialize the first row of the DP array to be equal to the first row of the grid.
3. **Filling the DP Array**:
   - For each row from the second row to the last row:
     - Set each element in the row initially to `Integer.MAX_VALUE` to ensure proper minimum comparison.
     - For each column in the current row:
       - Compare against all columns in the previous row except the same column index.
       - Update the DP array's current element with the minimum value calculated by adding the current grid value to the minimum path sum from the previous row's different columns.
4. **Finding the Minimum Path Sum**:
   - After filling the DP array, the minimum value in the last row will be the answer. Iterate through the last row to find this minimum value.

## Complexity

- Time complexity: `O(n^3)`. The algorithm iterates through each cell of the grid multiple times (specifically `n` times for each cell), resulting in a time complexity of `O(n^3)`, where `n` is the dimension of the grid.

- Space complexity: `O(n^2)` because we maintain a DP array of the same size as the input grid to store the minimum path sums for each possible position.

## Code

```java
class Solution {
    public int minFallingPathSum(int[][] grid) {
        int n = grid.length;
        if (n == 1) return grid[0][0];

        int[][] dp = new int[n][n];
        System.arraycopy(grid[0], 0, dp[0], 0, n);

        for (int i = 1; i < n; i++) {
            Arrays.fill(dp[i], Integer.MAX_VALUE);
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    if (j != k) dp[i][j] = Math.min(dp[i][j], dp[i-1][k] + grid[i][j]);
                }
            }
        }

        int minSum = Integer.MAX_VALUE;
        for (int value : dp[n-1]) {
            minSum = Math.min(minSum, value);
        }

        return minSum;
    }
}
```
