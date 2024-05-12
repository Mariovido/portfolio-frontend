# Connected Cells in a Grid

## Description

Given a matrix where each cell contains either a `0` or a `1`, this problem involves finding the number of cells in the largest region in the matrix. A region consists of filled cells (containing a `1`) that are connected horizontally, vertically, or diagonally.

## Function

```java
public static int connectedCell(List<List<Integer>> matrix) {}
```

## Input Format

- The first line: an integer, `n`, representing the number of rows in the matrix &rarr; `0 < n, m < 10`.
- The second line: an integer, `m`, representing the number of columns in the matrix.
- Each of the next `n` lines: `m` space-separated integers representing the matrix elements.

## Output Format

- An integer: the area of the largest region in the matrix.

## Constraints

- `0 < n, m < 10`

## Example

```bash
# Sample Input
4
4
1 1 0 0
0 1 1 0
0 0 1 0
1 0 0 0

# Sample Output
5
```
