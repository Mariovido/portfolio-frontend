# 463. Island Perimeter

## Description

This problem requires determining the perimeter of an island in a grid where cells marked with `1` indicate land and cells marked with `0` indicate water. The grid cells are connected horizontally and vertically, and the island is surrounded completely by water without any internal "lakes."

## Function

```java
public int islandPerimeter(int[][] grid) {}
```

## Input Format

- The input consists of a grid where each cell is either `0` (water) or `1` (land), structured as an array of arrays.
  - `row == grid.length`
  - `col == grid[i].length`

## Output Format

- The output is an integer representing the total perimeter of the island.

## Constraints

- `1 <= row, col <= 100`
- Each cell `grid[i][j]` is either `0` or `1`.
- There is exactly one island in the grid.

## Example

```bash
# Sample Input
int[][] grid = {{0,1,0,0},{1,1,1,0},{0,1,0,0},{1,1,0,0}};

# Sample Output
16
```
