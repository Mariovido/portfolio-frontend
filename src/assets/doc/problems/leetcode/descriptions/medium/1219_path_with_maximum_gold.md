# 1219. Path with Maximum Gold

## Description

In a rectangular grid representing a gold mine, where each cell contains a certain amount of gold (represented by integers; zero means the cell is empty), the challenge is to determine the maximum amount of gold you can collect. You can move up, down, left, or right from any cell with gold and you cannot revisit any cell or visit any empty cells during your collection.

## Function

```java
public int getMaximumGold(int[][] grid) {}
```

## Input Format

- The input is a `2D` array grid, where `grid[i][j]` represents the gold amount in the cell `(i, j)`.

## Output Format

- Return the maximum amount of gold you can collect starting and stopping at any cell that has gold.

## Constraints

- `m == grid.length` and `n == grid[i].length` where `1 <= m, n <= 15`
- `0 <= grid[i][j] <= 100`
- There are at most `25` cells with gold.

## Example

```bash
# Sample Input
int[][] grid = {{0,6,0}, {5,8,7}, {0,9,0}};

# Sample Output
24
```
