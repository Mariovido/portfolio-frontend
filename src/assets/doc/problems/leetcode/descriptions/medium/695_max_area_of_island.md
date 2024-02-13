# 695. Max Area of Island

## Description

Given a binary matrix `grid`, where `1` represents land and `0` represents water, find the maximum area of an island. An island is defined as a group of connected `1`'s in the matrix. The area of an island is the number of cells with a value of `1`.

## Function

```java
public int maxAreaOfIsland(int[][] grid) {}
```

## Input Format

- A binary matrix `grid` of size `m * n`, where `m` is the number of rows and `n` is the number of columns &rarr; `1 <= m, n <= 50`.

## Output Format

- An integer representing the maximum area of an island in the given grid.

## Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 50)`
- `grid[i][j]` is either `0` or `1`.

## Example

```bash
# Sample Input
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]

# Sample Output
6
```
