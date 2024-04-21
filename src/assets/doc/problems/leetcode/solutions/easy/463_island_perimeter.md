# 463. Island Perimeter

## Intuition

When I first looked at the problem of calculating the perimeter of an island in a grid, I thought about how each land cell (`1` in the grid) contributes to the perimeter. Each cell individually would contribute a maximum of `4` sides to the perimeter (top, bottom, left, right). However, if a cell is adjacent to another land cell, some of these contributions will be negated since the shared side does not contribute to the external perimeter.

## Approach

1. **Initialize the Perimeter**: Start with a `perimeter` variable set to `0`.
2. **Iterate Through the Grid**: Go through each cell in the grid using a nested loop.
3. **Check for Land Cells**: For each cell that contains a `1`:
   - Add `4` to the `perimeter` for the top, bottom, left, and right sides.
   - C**heck Adjacent Cells**:
     - If there is another land cell above the current cell (`grid[i-1][j] == 1`), subtract `2` from the `perimeter` (one for each side shared between two cells).
     - If there is a land cell to the left of the current cell (`grid[i][j-1] == 1`), subtract `2` from the `perimeter` for the same reason.
4. **Return the Perimeter**: After iterating through all cells, return the total `perimeter` calculated.

## Complexity

- Time complexity: `O(m * n)` where `m` is the number of rows and `n` is the number of columns in the grid. This is because every cell in the grid is visited exactly once.

- Space complexity: `O(1)`, aside from the input grid, as no additional space is required that scales with the size of the input.

## Code

```java
class Solution {
    public int islandPerimeter(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        int perimeter = 0;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) {
                    perimeter += 4;

                    if (i > 0 && grid[i-1][j] == 1) perimeter -= 2;
                    if (j > 0 && grid[i][j-1] == 1) perimeter -= 2;
                }
            }
        }

        return perimeter;
    }
}
```
