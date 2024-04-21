# 1992. Find All Groups of Farmland

## Intuition

The goal is to find farmland areas in the given grid. This can be achieved by traversing the grid and performing a Depth-First Search (DFS) from each land cell to identify the boundaries of each farmland.

## Approach

1. Iterate through each cell in the grid.
2. For each land cell (with value `1`) that has not been visited yet, perform DFS to find its boundaries.
3. During DFS, mark visited cells and update the minimum and maximum row and column indices encountered within the farmland.
4. Once DFS completes, store the boundaries of the farmland in the result list.
5. Repeat the process for all unvisited land cells.
6. Finally, return the list of farmland boundaries.

## Complexity

- Time complexity: `O(rows * cols)`

  - The main loop iterates through each cell once, resulting in `O(rows * cols)` operations.
  - Each DFS operation traverses a connected component of land cells, which can be at most `O(rows * cols)` in the worst case.

- Space complexity: `O(rows * cols)`
  - The space complexity is dominated by the visited set, which can store at most all cells of the grid, resulting in `O(rows * cols)` space.
  - Additionally, the space used by the stack in DFS can also be `O(rows * cols)` in the worst case.

## Code

```java
class Solution {
    public int[][] findFarmland(int[][] land) {
        int rows = land.length;
        int cols = land[0].length;

        Set<String> visited = new HashSet<>();
        List<int[]> result = new ArrayList<>();

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (land[i][j] == 1 && !visited.contains(i + "," + j)) {
                    int[] bounds = dfs(land, visited, i, j);
                    result.add(bounds);
                }
            }
        }

        return result.toArray(new int[result.size()][]);
    }

    private int[] dfs(int[][] land, Set<String> visited, int x, int y) {
        Deque<int[]> stack = new ArrayDeque<>();

        stack.push(new int[]{x, y});
        visited.add(x + "," + y);

        int minRow = x;
        int minCol = y;
        int maxRow = x;
        int maxCol = y;

        while (!stack.isEmpty()) {
            int[] current = stack.pop();
            int curX = current[0], curY = current[1];

            int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
            for (int[] dir : directions) {
                int nx = curX + dir[0];
                int ny = curY + dir[1];

                if (nx >= 0 && nx < land.length && ny >= 0 && ny < land[0].length &&
                    land[nx][ny] == 1 && !visited.contains(nx + "," + ny)) {
                    visited.add(nx + "," + ny);
                    stack.push(new int[]{nx, ny});

                    minRow = Math.min(minRow, nx);
                    minCol = Math.min(minCol, ny);
                    maxRow = Math.max(maxRow, nx);
                    maxCol = Math.max(maxCol, ny);
                }
            }
        }

        return new int[]{minRow, minCol, maxRow, maxCol};
    }
}
```
