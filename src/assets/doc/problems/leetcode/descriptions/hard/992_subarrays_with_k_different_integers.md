# 992. Subarrays with K Different Integers

## Description

Given an integer array `nums` and an integer `k`, this problem involves counting the number of good subarrays of `nums`. A good array is an array where the number of different integers in that array is exactly `k`. A subarray is a contiguous part of an array.

## Function

```java
public int subarraysWithKDistinct(int[] nums, int k) {}
```

## Input Format

- The first line: an integer `n`, representing the size of the array &rarr; `1 <= n <= 2 * 10^4`.
- The second line: `n` space-separated integers `nums[i]` &rarr; `1 <= nums[i] <= n`.
- An integer `k` &rarr; `1 <= k <= n`.

## Output Format

- An integer representing the count of good subarrays.

## Constraints

- `1 <= nums.length <= 2 * 10^4`
- `1 <= nums[i], k <= nums.length`

## Example

```bash
# Sample Input
nums = [1,2,1,2,3], k = 2

# Sample Output
7
```
