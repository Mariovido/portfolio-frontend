# 1219. Path with Maximum Gold

## Intuition

The problem seems to involve traversing through a grid of cells to find the maximum amount of gold that can be collected. This suggests a depth-first search (DFS) approach where we explore each cell to see if it contains gold and then recursively explore neighboring cells until no more gold can be collected.

## Approach

1. Start by iterating through each cell in the grid.
2. For each cell, if it contains gold, perform a depth-first search (DFS) to explore neighboring cells and collect gold.
3. During DFS, mark visited cells to avoid revisiting them.
4. At each step of DFS, keep track of the maximum amount of gold collected.
5. After DFS, return the maximum amount of gold collected.

## Complexity

- Time complexity: `O(n * m)`, where `n` is the number of rows and `m` is the number of columns in the grid.

- Space complexity: `O(n * m)`

## Code

```java
class Solution {
    public int getMaximumGold(int[][] grid) {
        int maxGold = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] != 0) maxGold = Math.max(maxGold, dfs(i, j, grid));
            }
        }

        return maxGold;
    }

    private int dfs(int i, int j, int[][] grid) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0) return 0;

        int currentGold = grid[i][j];
        grid[i][j] = 0;

        int maxGold = 0;
        maxGold = Math.max(maxGold, dfs(i, j + 1, grid));
        maxGold = Math.max(maxGold, dfs(i, j - 1, grid));
        maxGold = Math.max(maxGold, dfs(i + 1, j, grid));
        maxGold = Math.max(maxGold, dfs(i - 1, j, grid));

        grid[i][j] = currentGold;

        return currentGold + maxGold;
    }
}
```
