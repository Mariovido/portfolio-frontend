# 2373. Largest Local Values in a Matrix

## Description

Given an `n * n` integer matrix, the task is to compute a new matrix `maxLocal` of size `(n - 2) * (n - 2)` where each entry `(i, j)` is the largest value from the `3 * 3` sub-matrix centered around the element at `(i + 1, j + 1)` in the original matrix. This involves identifying the maximum value in every contiguous `3 * 3` matrix within the grid.

## Function

```java
public int[][] largestLocal(int[][] grid) {}
```

## Input Format

- First line: integer `n`, the size of the matrix.
- Next `n` lines: each contains `n` space-separated integers representing the matrix rows.

## Output Format

- The output matrix `maxLocal`, where each element is the maximum of a `3 * 3` sub-matrix from the original grid.

## Constraints

- `3 <= n <= 100`
- `1 <= grid[i][j] <= 100`

## Example

```bash
# Sample Input
grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]

# Sample Output
[[9,9],[8,6]]
```
