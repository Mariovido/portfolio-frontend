# 1074. Number of Submatrices That Sum to Target

## Description

Given a matrix and a target sum, the task is to return the number of non-empty submatrices whose elements sum to the target value.

## Function

```java
public int numSubmatrixSumTarget(int[][] matrix, int target) {}
```

## Input Format

- A matrix of integers `matrix` with dimensions `m * n` &rarr; `1 <= m, n <= 100`.
- The target sum `target` &rarr; `-10^8 <= target <= 10^8`.

## Output Format

- An integer representing the count of submatrices with the target sum.

## Constraints

- `1 <= matrix.length <= 100`
- `1 <= matrix[0].length <= 100`
- `-1000 <= matrix[i][j] <= 1000`
- `-10^8 <= target <= 10^8`

## Example

```bash
# Sample Input
int[][] matrix1 = {{0,1,0}, {1,1,1}, {0,1,0}};
int target1 = 0;

# Sample Output
4
```
