# Red Knight's Shortest Path

## Intuition

The code aims to find the shortest path from a starting point to an ending point on a chessboard, given the dimensions of the board and the starting and ending positions.

## Approach

1. Initialize a `queue`, `visited` array, `distances` array, and `path` array.
2. Enqueue the starting position onto the `queue` and mark it as visited.
3. While the `queue` is not empty:
   - Dequeue a position from the `queue`.
   - Check if it is the destination:
     - If yes, print the distance to reach the destination and the path taken, then return.
   - Iterate over all possible moves:
     - Calculate the new position after applying the move.
     - Check if the new position is valid and not visited:
       - Enqueue the new position.
       - Mark it as visited.
       - Update distance and path information.
4. If no path is found, print `Impossible`.

## Complexity

- Time complexity: `O(n^2)`, where `n` is the size of the chessboard. In the worst case, BFS explores all cells of the board.

- Space complexity: `O(n^2)`, where `n` is the size of the chessboard. This is due to the queue, visited array, distances array, and path array, each of which requires space proportional to the number of cells on the board.

## Code

```java
class Result {
    private static String[] moves = {"UL", "UR", "R", "LR", "LL", "L"};
    private static int[] offsetsX = {-2, -2, 0, 2, 2, 0};
    private static int[] offsetsY = {-1, 1, 2, 1, -1, -2};

    public static void printShortestPath(int n, int i_start, int j_start, int i_end, int j_end) {
        Deque<int[]> queue = new ArrayDeque<>();
        boolean[][] visited = new boolean[n][n];
        int[][] distances = new int[n][n];
        String[][] path = new String[n][n];

        queue.offer(new int[]{i_start, j_start});
        visited[i_start][j_start] = true;
        distances[i_start][j_start] = 0;
        path[i_start][j_start] = "";

        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int x = current[0];
            int y = current[1];

            if (x == i_end && y == j_end) {
                System.out.println(distances[x][y]);
                System.out.println(path[x][y]);
                return;
            }

            for (int k = 0; k < moves.length; k++) {
                int new_x = x + offsetsX[k];
                int new_y = y + offsetsY[k];

                if (new_x >= 0 && new_x < n && new_y >= 0 && new_y < n && !visited[new_x][new_y]) {
                    queue.offer(new int[]{new_x, new_y});
                    visited[new_x][new_y] = true;
                    distances[new_x][new_y] = distances[x][y] + 1;
                    path[new_x][new_y] = path[x][y] + moves[k] + " ";
                }
            }
        }

        System.out.println("Impossible");
    }
}
```
