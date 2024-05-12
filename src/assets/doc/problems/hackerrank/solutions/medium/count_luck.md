# Count Luck

## Intuition

The problem requires determining the number of times the character in a maze needs to make a decision at a junction where more than one path is available. The character starts from a point marked `M` and must reach the endpoint marked `*`. The intuition is to simulate moving through the maze, tracking when decisions (branches in the path) are taken, using Depth First Search (DFS) to explore all possible paths.

## Approach

1. **Initialization**: Start by locating the starting point (marked as `M`) in the maze.
2. **Depth-First Search (DFS)**: Implement DFS to explore the maze. Begin from the starting point and move in all possible directions (up, down, left, right).
   - Mark the current cell as visited (in this case, mark as `X`) to prevent revisiting.
   - Recur for all possible moves from the current cell.
   - At each step, check if the current cell is a junction (a point where the character can choose more than one direction). If so, increment the count of wand waves.
3. **Track Paths**: If a cell has more than one possible move, consider it a decision point and increment the wave count.
4. **End Condition**: When the destination (`*`) is reached, compare the number of wand waves used to reach the destination with the provided expected number (`k`). If they match, return `Impressed`; otherwise, return `Oops!`.
5. **Reset on Backtrack**: On backtracking, reset the current cell's state to unvisited to allow other potential paths during the DFS exploration.

## Complexity

- Time complexity: `O(n * m)` where `n` is the number of rows and `m` is the number of columns in the matrix. This is because in the worst case, every cell is visited once during the DFS traversal.

- Space complexity: `O(n * m)` for the recursion stack in the worst case when the maze is such that the DFS goes to the maximum depth (e.g., a maze where you can only move in one direction from any cell until you reach the end).

## Code

```java
class Result {
    private static int wandWaves;

    public static String countLuck(List<String> matrix, int k) {
        wandWaves = Integer.MAX_VALUE;

        int startX = -1;
        int startY = -1;
        for (int i = 0; i < matrix.size(); i++) {
            for (int j = 0; j < matrix.get(i).length(); j++) {
                if (matrix.get(i).charAt(j) == 'M') {
                    startX = i;
                    startY = j;
                    break;
                }
            }
        }

        dfs(matrix, startX, startY, 0);

        return wandWaves == k ? "Impressed" : "Oops!";
    }

    private static void dfs(List<String> matrix, int i, int j, int waves) {
        if (i < 0 || i >= matrix.size() || j < 0 || j >= matrix.get(i).length() || matrix.get(i).charAt(j) == 'X') return;

        if (matrix.get(i).charAt(j) == '*') {
            wandWaves = Math.min(wandWaves, waves);
            return;
        }

        setChart(matrix, i, j, 'X');

        int paths = 0;
        if (needChange(matrix, i, j - 1)) paths++;
        if (needChange(matrix, i, j + 1)) paths++;
        if (needChange(matrix, i - 1, j)) paths++;
        if (needChange(matrix, i + 1, j)) paths++;

        boolean hasToChange = paths >= 2;

        if (hasToChange) {
            dfs(matrix, i, j - 1, waves + 1);
            dfs(matrix, i, j + 1, waves + 1);
            dfs(matrix, i - 1, j, waves + 1);
            dfs(matrix, i + 1, j, waves + 1);
        } else {
            dfs(matrix, i, j - 1, waves);
            dfs(matrix, i, j + 1, waves);
            dfs(matrix, i - 1, j, waves);
            dfs(matrix, i + 1, j, waves);
        }

        setChart(matrix, i, j, '.');
    }

    private static void setChart(List<String> matrix, int i, int j, char newChar) {
        char[] row = matrix.get(i).toCharArray();
        row[j] = newChar;
        matrix.set(i, String.valueOf(row));
    }

    private static boolean needChange(List<String> matrix, int i, int j) {
        if (i < 0 || i >= matrix.size() || j < 0 || j >= matrix.get(i).length() || matrix.get(i).charAt(j) == 'X') return false;

        return true;
    }
}
```
