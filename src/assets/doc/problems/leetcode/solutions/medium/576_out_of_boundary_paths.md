# 576. Out of Boundary Paths

## Intuition

The problem seems to involve finding the number of paths a player can take to move out of the grid within a given number of moves. Since the player can move in four directions (up, down, left, right) within a limited number of moves, dynamic programming might be a suitable approach to solve this problem.

## Approach

1. Initialize a 3D DP array to store the number of paths for each cell (row, column) and remaining moves.
2. Base cases:
   - If the current position is out of the grid, return `1` (indicating the path found).
   - If the remaining moves are zero, return `0` (indicating no further moves can be made).
   - If the current state is already computed, return the result from the DP array.
3. Recursively explore all four possible moves (left, right, up, down) from the current cell, reducing the remaining moves by one for each move.
4. Update the DP array with the sum of paths obtained from all four recursive calls modulo the given `MOD` value.
5. Return the result for the current state.

## Complexity

- Time complexity: `O(m * n * maxMove)`, where `m` is the number of rows, `n` is the number of columns, and `maxMove` is the maximum number of moves allowed. We need to compute the number of paths for each cell for each possible number of remaining moves.

- Space complexity: `O(m * n * maxMove)`, as we are using a 3D DP array to store the results for each possible state.

## Code

```java
class Solution {
    private int MOD = 1000000000 + 7;

    public int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        int dp[][][]=new int[m][n][maxMove + 1];

        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                for(int k = 0; k <= maxMove; k++) {
                    dp[i][j][k] = -1;
                }
            }
        }

       return solve(m, n, maxMove, startRow, startColumn, dp);
    }

    private int solve(int m, int n, int move, int r, int c, int dp[][][]) {
        if (r < 0 || r >= m || c < 0 || c >= n) return 1;

        if (move <= 0) return 0;

        if(dp[r][c][move] != -1) return dp[r][c][move];

        long left = solve(m, n, move - 1, r, c - 1, dp) % MOD;
        long right = solve(m, n, move - 1, r, c + 1, dp) % MOD;
        long up = solve(m, n, move - 1, r - 1, c, dp) % MOD;
        long down = solve(m, n, move - 1, r + 1, c, dp) % MOD;

        return dp[r][c][move] = (int) ((left + right + up + down) % MOD);
    }

    // public int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
    //     final int M = 1000000007;
    //     int[][] dp = new int[m][n];

    //     for (int moves = 1; moves <= maxMove; moves++) {
    //         int[][] temp = new int[m][n];

    //         for (int row = 0; row < m; row++) {
    //             for (int column = 0; column < n; column++) {
    //                 if (row + 1 == m) temp[row][column] = (temp[row][column] + 1) % M;
    //                 else temp[row][column] = (temp[row][column] + dp[row + 1][column]) % M;

    //                 if (row - 1 < 0) temp[row][column] = (temp[row][column] + 1) % M;
    //                 else temp[row][column] = (temp[row][column] + dp[row - 1][column]) % M;

    //                 if (column + 1 == n) temp[row][column] = (temp[row][column] + 1) % M;
    //                 else temp[row][column] = (temp[row][column] + dp[row][column + 1]) % M;

    //                 if (column - 1 < 0) temp[row][column] = (temp[row][column] + 1) % M;
    //                 else temp[row][column] = (temp[row][column] + dp[row][column - 1]) % M;
    //             }
    //         }

    //         dp = temp;
    //     }

    //     return dp[startRow][startColumn];
    // }
}
```
