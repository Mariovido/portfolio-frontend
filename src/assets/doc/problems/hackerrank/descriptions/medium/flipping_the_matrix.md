# Flipping the Matrix

## Description

Given a game involving a `2n * 2n` matrix, the goal is to maximize the sum of the elements in the upper-left quadrant by reversing rows and columns. The task is to find the best possible reversals for a set of matrices.

## Function

```java
public static int flippingMatrix(List<List<Integer>> matrix) {}
```

## Input Format

- The first line: an integer, `q`, the number of queries &rarr; `1 <= q <= 16`.
- For each query:
  - The first line contains an integer, `n` &rarr; `1 <= n <= 128`.
  - Each of the next `2n` lines contains `2n` space-separated integers, `matrix[i][j]` in row `i` of the matrix &rarr; `0 <= matrix[i][j] <= 4096`.

## Output Format

- An integer, the maximum sum possible.

## Constraints

- `1 <= q <= 16`
- `1 <= n <= 128`
- `0 <= matrix[i][j] <= 4096`

## Example

```bash
# Sample Input
1
2
112 42 83 119
56 125 56 49
15 78 101 43
62 98 114 108

# Sample Output
414
```
