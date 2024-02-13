# 695. Max Area of Island

## Intuition

The problem involves finding the maximum area of an island in a 2D grid. We can approach this by performing a Depth-First Search (DFS) starting from each cell with a value of `1` (representing land). The DFS will explore the island and calculate its area.

## Approach

1. Iterate through each cell in the `grid`.
2. If the cell contains land (`grid[i][j] == 1`), initiate DFS from that cell to explore the island.
3. In the DFS function, mark the current cell as visited (set `grid[i][j]` to `0`) to avoid double-counting.
4. Recursively explore the neighboring cells (up, down, left, right) and accumulate the area.
5. Return the area calculated in the DFS for each island and update the maximum area encountered so far.

## Complexity

- Time complexity: `O(m * n)`, where `m` is the number of rows and `n` is the number of columns in the grid. We need to visit each cell at least once.

- Space complexity: `O(1)` for the iterative DFS approach, as we are using only a constant amount of extra space. The recursive DFS approach would have a space complexity of `O(m * n)` due to the recursion stack, but the iterative DFS implemented here avoids this.

## Code

```java
class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        int maxArea = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 1) maxArea = Math.max(maxArea, dfs(grid, i, j));
            }
        }

        return maxArea;
    }

    public int dfs(int[][] grid, int i, int j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0) return 0;

        grid[i][j] = 0;

        int area = 1;

        area += dfs(grid, i + 1, j);
        area += dfs(grid, i - 1, j);
        area += dfs(grid, i, j + 1);
        area += dfs(grid, i, j - 1);

        return area;
    }
}
```
