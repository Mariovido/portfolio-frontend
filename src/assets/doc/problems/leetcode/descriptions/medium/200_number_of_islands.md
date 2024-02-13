# 200. Number of Islands

## Description

Given an `m * n` 2D binary grid representing a map of `1`'s (land) and `0`'s (water), determine the number of islands. An island is formed by connecting adjacent lands horizontally or vertically, and it is surrounded by water on all four sides.

## Function

```java
public int numIslands(char[][] grid) {}
```

## Input Format

- A 2D binary grid `grid` of size `m * n` &rarr; `1 <= m, n <= 300`.
- Each element `grid[i][j]` is either `0` (water) or `1` (land).

## Output Format

- An integer representing the number of islands in the grid.

## Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j]` is `0` or `1`.

## Example

```bash
# Sample Input
char[][] grid1 = {
    {'1','1','1','1','0'},
    {'1','1','0','1','0'},
    {'1','1','0','0','0'},
    {'0','0','0','0','0'}
};

# Sample Output
1
```
