# 1043. Partition Array for Maximum Sum

## Description

Given an integer array `arr`, this problem involves partitioning the array into contiguous subarrays of length at most `k`. After partitioning, each subarray's values are changed to become the maximum value of that subarray. The task is to return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a `32`-bit integer.

## Function

```java
public int maxSumAfterPartitioning(int[] arr, int k) {}
```

## Input Format

- An integer array `arr` of length `n` &rarr; `1 <= n <= 500`.
- Each element of `arr` is in the range `0` to `10^9`.
- An integer `k` &rarr; `1 <= k <= n`.

## Output Format

- An integer, representing the largest sum after partitioning.

## Constraints

- `1 <= arr.length <= 500`
- `0 <= arr[i] <= 10^9`
- `1 <= k <= arr.length`

## Example

```bash
# Sample Input
int[] arr1 = {1, 15, 7, 9, 2, 5, 10};
int k1 = 3;

# Sample Output
84
```
