# 1463. Cherry Pickup II

## Intuition

The problem involves finding the maximum number of cherries that can be picked up by two people starting at the top-left and top-right corners of a grid and moving towards the bottom-left and bottom-right corners respectively. Since both people can move simultaneously and only move down or diagonally down, it resembles a dynamic programming problem where we need to keep track of the maximum number of cherries picked at each position.

## Approach

We can use dynamic programming to solve this problem. We'll create a 3D array `dp` to store the maximum number of cherries that can be picked up by the two people at each position and keep updating it iteratively. We start from the bottom row and move upwards, calculating the maximum cherries that can be picked at each position based on the cherries available in the current row and the maximum cherries that can be picked in the subsequent row. We'll consider all possible movements of both people to determine the maximum cherries that can be picked.

## Complexity

- Time complexity: `O(n^3)`, where n is the number of rows or columns in the grid.

- Space complexity: `O(n^3)`, as we are using a 3D array to store the dynamic programming values.

## Code

```java
class Solution {
    public int cherryPickup(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;

        int[][][] dp = new int[rows][cols][cols];

        for (int row = rows - 1; row >= 0; row--) {
            for (int col1 = 0; col1 < cols; col1++) {
                for (int col2 = 0; col2 < cols; col2++) {
                    int cherries = grid[row][col1];

                    if (col1 != col2) cherries += grid[row][col2];

                    if (row != rows - 1) {
                        int maxNext = 0;
                        for (int nextCol1 = col1 - 1; nextCol1 <= col1 + 1; nextCol1++) {
                            for (int nextCol2 = col2 - 1; nextCol2 <= col2 + 1; nextCol2++) {
                                if (nextCol1 >= 0 && nextCol1 < cols && nextCol2 >= 0 && nextCol2 < cols)
                                    maxNext = Math.max(maxNext, dp[row + 1][nextCol1][nextCol2]);
                            }
                        }
                        cherries += maxNext;
                    }

                    dp[row][col1][col2] = cherries;
                }
            }
        }

        return dp[0][0][cols - 1];
    }
}
```
