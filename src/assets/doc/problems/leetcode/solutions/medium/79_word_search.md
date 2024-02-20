# 79. Word Search

## Intuition

The problem appears to be a variation of a depth-first search (DFS) problem. We need to check if a given word can be formed by traversing adjacent cells on a `2D` board. The idea is to perform DFS starting from each cell on the board and try to match the characters of the word by exploring adjacent cells.

## Approach

1. Start by defining the `exist` method that takes the `2D` `board` and the target `word` as input parameters.
2. Initialize variables `m` and `n` to store the dimensions of the `board`.
3. Create a boolean matrix `visited` to keep track of visited cells.
4. Iterate through each cell in the `board` using nested loops.
5. For each cell, perform DFS starting from that cell to check if the `word` can be formed.
6. Define the `dfs` method to perform DFS:
   - Check if the current `index` matches the length of the `word`, if so, return `true`.
   - Check if the current cell is out of bounds or already `visited`, return `false`.
   - Check if the character in the current cell matches the character at the current `index` of the `word`.
   - Mark the current cell as visited.
   - Recursively explore neighboring cells in all four directions (up, down, left, right).
   - If any recursive call returns `true`, return `true`.
   - Mark the current cell as not visited (backtrack).
7. If no match is found after exploring all cells, return `false`.

## Complexity

- Time complexity:`O(m * n * 4^l)`, where `m` is the number of rows, `n` is the number of columns, and `l` is the length of the word. In the worst case, for each cell, we perform DFS with a branching factor of `4` (exploring four neighboring cells).

- Space complexity: `O(m * n)` for the boolean matrix visited, where `m` is the number of rows and `n` is the number of columns. Additionally, `O(l)` space is used for the recursive call stack, where `l` is the length of the word.

## Code

```java
class Solution {
    public boolean exist(char[][] board, String word) {
        int m = board.length;
        int n = board[0].length;

        boolean[][] visited = new boolean[m][n];

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (dfs(board, word, 0, i, j, visited)) return true;
            }
        }

        return false;
    }

    private boolean dfs(char[][] board, String word, int index, int row, int col, boolean[][] visited) {
        if (index == word.length()) return true;

        if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return false;
        if (visited[row][col] || board[row][col] != word.charAt(index)) return false;

        visited[row][col] = true;

        boolean found = dfs(board, word, index + 1, row + 1, col, visited) ||
                        dfs(board, word, index + 1, row - 1, col, visited) ||
                        dfs(board, word, index + 1, row , col + 1, visited) ||
                        dfs(board, word, index + 1, row, col - 1, visited);

        visited[row][col] = false;

        return found;
    }
}
```
