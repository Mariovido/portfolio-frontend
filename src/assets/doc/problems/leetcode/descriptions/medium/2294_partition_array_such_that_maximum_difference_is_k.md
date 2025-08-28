# 2294. Partition Array Such That Maximum Difference Is K

## Description

Given an integer array `nums` and an integer `k`, partition `nums` into the minimum number of subsequences such that the difference between the maximum and minimum values in each subsequence is at most `k`. Each element in `nums` must appear in exactly one subsequence. A subsequence is a sequence derived from the array by deleting some or no elements without changing the order of the remaining elements.

## Function

```java
public int partitionArray(int[] nums, int k) {}
```

## Input Format

- An integer array `nums` of length between `1` and `10^5`.
- An integer `k` such that `0 <= k <= 10^5`.

## Output Format

- An integer representing the minimum number of subsequences needed.

## Constraints

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^5`
- `0 <= k <= 10^5`

## Example

```bash
# Sample Input
nums = [3, 6, 1, 2, 5], k = 2

# Sample Output
2
```
