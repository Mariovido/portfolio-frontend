# 1289. Minimum Falling Path Sum II

## Description

This problem involves finding the minimum sum of a falling path through an `n * n` integer matrix, where each step in the path must move to a different column than the previous step. The objective is to calculate the path with the lowest possible sum under these constraints.

## Function

```java
public int minFallingPathSum(int[][] grid) {}
```

## Input Format

- The input is a single integer `n`, representing the size of the square matrix.
- This is followed by `n` lines, each containing `n` space-separated integers that make up the matrix `grid`.

## Output Format

- Output a single integer, the minimum sum of any valid falling path.

## Constraints

- `1 <= n <= 200`
- `-99 <= grid[i][j] <= 99`

## Example

```bash
# Sample Input
3
1 2 3
4 5 6
7 8 9

# Sample Output
13
```
