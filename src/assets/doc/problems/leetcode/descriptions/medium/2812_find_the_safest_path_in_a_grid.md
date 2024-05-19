# 2812. Find the Safest Path in a Grid

## Description

In this problem, you are tasked with navigating a `0`-indexed `2D` matrix representing a grid of size `n * n`, where each cell may contain either a thief (`1`) or be empty (`0`). Starting from the top-left corner, you must reach the bottom-right corner while maximizing the safeness factor of your path. The safeness factor is defined as the minimum Manhattan distance from any cell on your chosen path to the nearest thief. Your goal is to calculate the maximum possible safeness factor among all possible paths.

## Function

```java
public int maximumSafenessFactor(List<List<Integer>> grid) {}
```

## Input Format

- The function takes a `2D` array grid representing the `n * n` matrix.

## Output Format

- Returns an integer, the maximum safeness factor achievable from the top-left to the bottom-right corner.

## Constraints

- `1 <= grid.length == n <= 400`
- `grid[i][j]` is either `0` or `1`.
- There is at least one thief in the grid.

## Example

```bash
# Sample Input
int[][] grid = {
    {0,0,1},
    {0,0,0},
    {0,0,0}
};

# Sample Output
2
```
