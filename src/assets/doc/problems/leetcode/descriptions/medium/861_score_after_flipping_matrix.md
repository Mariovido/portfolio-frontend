# 861. Score After Flipping Matrix

## Description

Given an `m * n` binary matrix `grid`, the task is to maximize the score of the matrix by toggling any number of rows or columns. Each row of the matrix is interpreted as a binary number, and the score is the sum of these numbers. The objective is to return the highest possible score.

## Function

```java
public int matrixScore(int[][] grid) {}
```

## Input Format

- The first line: Two integers, `m` and `n`, representing the dimensions of the matrix.
- The next `m` lines: `n` space-separated integers representing the binary values (either `0` or `1`) in the matrix.

## Output Format

- One line displaying the highest possible score after toggling any rows and/or columns as needed.

## Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 20`
- `grid[i][j]` is either `0` or `1`

## Example

```bash
# Sample Input
grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]

# Sample Output
39
```
