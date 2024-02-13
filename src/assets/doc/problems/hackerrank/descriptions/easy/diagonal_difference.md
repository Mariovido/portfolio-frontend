# Diagonal Difference

## Description

Given a square matrix, this problem involves calculating the absolute difference between the sums of its two diagonals.

## Function

```java
public static int diagonalDifference(List<List<Integer>> arr) {}
```

## Input Format

- The first line: a single integer, `n`, the number of rows and columns in the square matrix `arr`.
- Each of the next `n` lines describes a row, `arr[i]`, consisting of `n` space-separated integers `arr[i][j]`.

## Output Format

- Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

## Constraints

- `-100 <= arr[i][j] <= 100`

## Example

```bash
# Sample Input
3
11 2 4
4 5 6
10 8 -12

# Sample Output
15
```
