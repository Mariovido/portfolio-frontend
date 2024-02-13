# 200. Number of Islands

## Intuition

The problem seems to involve counting the number of islands in a given 2D grid. An island is a group of `1`s connected horizontally or vertically. We can use Depth-First Search (DFS) to explore and mark connected land cells.

## Approach

1. Iterate through each cell in the `grid`.
2. If a cell contains `1`, increment the count of `islands` and perform a DFS to mark all connected land cells as visited.
3. In the DFS function, mark the current cell as visited (`0`) and recursively explore its neighbors in all four directions.
4. Return the total count of `islands`.

## Complexity

- Time complexity: `O(M * N)`, where `M` is the number of rows and `N` is the number of columns in the grid. We visit each cell once.

- Space complexity: `O(M * N)` for the recursive call stack. In the worst case, the DFS can go as deep as the number of cells in the grid.

## Code

```java
class Solution {
    public int numIslands(char[][] grid) {
        int islands = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == '1') {
                    islands++;
                    dfs(grid, i, j);
                }
            }
        }

        return islands;
    }

    private void dfs(char[][] grid, int i, int j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0') return;

        grid[i][j] = '0';

        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }
}
```
