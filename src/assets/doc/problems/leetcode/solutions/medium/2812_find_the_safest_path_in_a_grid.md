# 2812. Find the Safest Path in a Grid

## Intuition

The problem seems to involve navigating a grid to find a path that maximizes the minimum safety factor from all the grid points on the path. The grid contains cells marked as `1`, which can be considered obstacles or zones of minimum safety (a safeness of zero). We need to determine the safest route from the top-left corner to the bottom-right corner of the grid. The safeness is likely a measure of distance from these obstacles. Initially, it appears that a combination of breadth-first search (BFS) to determine safeness scores for each cell and a best-first search (using a priority queue) to navigate through the grid using these scores could be an effective solution.

## Approach

1. **Initialization**:
   - Extract the size of the grid.
   - Check immediate exit conditions if the start or end points are obstacles.
   - Initialize a `score` matrix to keep track of the safeness of each cell, setting all values initially to `Integer.MAX_VALUE` except for cells containing `1`, which are set to `0`.
   - Use a BFS to spread out from all cells containing `1` to calculate minimum safeness scores based on the distance from the nearest 1.
2. **Safeness Calculation Using BFS**:
   - Implement BFS starting from each obstacle (cells with `1`). For each cell, update its neighbors with their safeness scores if the current path offers a better safeness score (distance from obstacle).
3. **Navigating the Grid**:
   - Use a priority queue to explore the paths through the grid, starting from the top-left corner.
   - The priority queue prioritizes paths based on the highest current safeness score.
   - For each cell, consider its `4` possible neighbors (up, down, left, right). If moving to a neighbor improves the path (i.e., the path's minimum safeness score remains high), push the neighbor into the queue.
   - Continue exploring until the bottom-right corner is reached, then return its safeness score.
4. **Return Result**:
   - If the bottom-right corner is successfully reached, return its safeness score. If no valid path exists (due to blockages or other issues), return `-1`.

## Complexity

- Time complexity: `O(n^2 * log(n))` . The time complexity of this approach is primarily driven by the BFS and the priority queue operations. The BFS runs in `O(n^2)`, where `n` is the side length of the grid, since each cell is processed once. The priority queue operations can potentially process each cell again, and the complexity for each operation can go up to `O(log(n))` for each insertion and extraction.

- Space complexity: `O(n^2)` due to the storage requirements of the `score` matrix, the `vis` (visited) matrix, and the priority queue which, in the worst case, could contain all the cells of the grid.

## Code

```java
class Solution {
    private int[] roww = {0, 0, -1, 1};
    private int[] coll = {-1, 1, 0, 0};

    public int maximumSafenessFactor(List<List<Integer>> grid) {
        int n = grid.size();

        if (grid.get(0).get(0) == 1 || grid.get(n - 1).get(n - 1) == 1) return 0;

        int[][] score = new int[n][n];
        for (int[] row : score) Arrays.fill(row, Integer.MAX_VALUE);
        bfs(grid, score, n);

        boolean[][] vis = new boolean[n][n];
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[0] - a[0]);
        pq.offer(new int[]{score[0][0], 0, 0});

        while (!pq.isEmpty()) {
            int[] temp = pq.poll();
            int safe = temp[0];
            int i = temp[1], j = temp[2];

            if (i == n - 1 && j == n - 1) return safe;
            vis[i][j] = true;

            for (int k = 0; k < 4; k++) {
                int newX = i + roww[k];
                int newY = j + coll[k];

                if (newX >= 0 && newX < n && newY >= 0 && newY < n && !vis[newX][newY]) {
                    int s = Math.min(safe, score[newX][newY]);
                    pq.offer(new int[]{s, newX, newY});
                    vis[newX][newY] = true;
                }
            }
        }

        return -1;
    }

    private void bfs(List<List<Integer>> grid, int[][] score, int n) {
        Deque<int[]> q = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid.get(i).get(j) == 1) {
                    score[i][j] = 0;
                    q.offer(new int[]{i, j});
                }
            }
        }

        while (!q.isEmpty()) {
            int[] t = q.poll();
            int x = t[0], y = t[1];
            int s = score[x][y];

            for (int i = 0; i < 4; i++) {
                int newX = x + roww[i];
                int newY = y + coll[i];

                if (newX >= 0 && newX < n && newY >= 0 && newY < n && score[newX][newY] > 1 + s) {
                    score[newX][newY] = 1 + s;
                    q.offer(new int[]{newX, newY});
                }
            }
        }
    }
}
```
