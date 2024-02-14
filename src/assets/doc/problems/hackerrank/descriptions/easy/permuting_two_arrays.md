# Permuting Two Arrays

## Description

Given two arrays of integers, `A` and `B`, the task is to determine if there exists a permutation `A'` and `B'` such that the relation `A'[i] + B'[i] >= k` holds for all `i` where `0 <= i < n`.

## Function

```java
public static String twoArrays(int k, List<Integer> A, List<Integer> B) {}
```

## Input Format

- The first line: an integer `q`, the number of queries.
- The next q sets of `3` lines:
  - The first line contains two space-separated integers `n` and `k`, the size of both arrays `A` and `B`, and the relation variable.
  - The second line contains `n` space-separated integers `A[i]`.
  - The third line contains `n` space-separated integers `B[i]`.

## Output Format

- A string, either `YES` or `NO`.

## Constraints

- `1 <= q <= 10`
- `1 <= n <= 1000`
- `1 <= k <= 10^9`
- `0 <= A[i], B[i] <= 10^9`

## Example

```bash
# Sample Input
2
3 10
2 1 3
7 8 9
4 5
1 2 2 1
3 3 3 4

# Sample Output
YES
NO
```
