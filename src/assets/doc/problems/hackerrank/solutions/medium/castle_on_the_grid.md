# Castle on the Grid

## Intuition

The problem seems to involve finding the minimum number of moves required to reach a goal position from a given starting position in a grid. The movements are restricted to up, down, left, and right directions, and the goal is to minimize the number of steps needed to reach the destination.

## Approach

The approach taken in the code is a breadth-first search (BFS) algorithm. It starts by initializing a queue with the starting position. Then, it iteratively explores the neighboring cells in all four directions, updating the number of steps required to reach each cell from the starting point. This process continues until the goal position is reached or until all reachable cells are explored. During the BFS traversal, it keeps track of visited cells to avoid revisiting them.

The key steps in the approach are:

1. Initialize a queue with the starting position and mark it as visited.
2. While the queue is not empty, dequeue a cell and explore its neighboring cells.
3. For each unvisited neighboring cell, mark it as visited, update the number of steps required to reach it, and enqueue it.
4. Repeat until the goal position is reached or until all reachable cells are explored.

## Complexity

- Time complexity: `O(n^2)`

  - The algorithm involves traversing through all cells of the grid, which takes `O(n^2)` time, where n is the size of the grid.
  - In the worst case, each cell may be visited once.

- Space complexity: `O(n^2)`
  - The space complexity is dominated by the space required to store the grid, the visited array, and the step array, all of which have dimensions `n * n`.
  - Additionally, the space complexity of the queue can also be `O(n^2)` in the worst case, where all cells are reachable and need to be enqueued.

## Code

```java
class Result {
    static int[] xMove = {-1, 0, 1, 0};
    static int[] yMove = {0, 1, 0, -1};

    static class Node {
        int x;
        int y;

        Node(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    public static int minimumMoves(List<String> grid, int startX, int startY, int goalX, int goalY) {
        if (grid == null || grid.isEmpty()) return -1;

        int n = grid.size();
        char[][] matrix = new char[n][n];

        for (int i = 0; i < n; i++) {
            matrix[i] = grid.get(i).toCharArray();
        }

        int[][] step = new int[n][n];
        boolean[][] visited = new boolean[n][n];

        LinkedList<Node> queue = new LinkedList<>();
        queue.add(new Node(startX, startY));
        visited[startX][startY] = true;

        while (!queue.isEmpty()) {
            Node node = queue.poll();
            int curX = node.x;
            int curY = node.y;

            for (int i = 0; i < 4; i++) {
                int index = 1;

                while (isSafe(n, curX + xMove[i] * index, curY + yMove[i] * index, matrix)
                        && !visited[curX + xMove[i] * index][curY + yMove[i] * index]) {
                    int nextX = curX + xMove[i] * index;
                    int nextY = curY + yMove[i] * index;

                    visited[nextX][nextY] = true;
                    queue.add(new Node(nextX, nextY));
                    step[nextX][nextY] = step[curX][curY] + 1;

                    if (nextX == goalX && nextY == goalY) {
                        return step[nextX][nextY];
                    }

                    index++;
                }
            }
        }

        return -1;
    }

    private static boolean isSafe(int n, int x, int y, char[][] matrix) {
        return x >= 0 &&
            y >= 0 &&
            x < n &&
            y < n &&
            matrix[x][y] == '.';
    }
}
```
