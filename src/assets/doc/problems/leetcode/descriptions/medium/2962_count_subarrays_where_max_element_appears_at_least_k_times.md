# 2962. Count Subarrays Where Max Element Appears at Least K Times

## Description

Given an integer array `nums` and a positive integer `k`, this problem involves determining the number of subarrays where the maximum element of `nums` appears at least `k` times in that subarray. A subarray is a contiguous sequence of elements within an array.

## Function

```java
public long countSubarrays(int[] nums, int k) {}
```

## Input Format

- An integer array `nums` representing the elements.
- A positive integer `k` representing the minimum occurrences of the maximum element.

## Output Format

- An integer representing the number of subarrays meeting the condition.

## Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`
- `1 <= k <= 10^5`

## Example

```bash
# Sample Input
int[] nums = {1, 3, 2, 3, 3};
int k = 2;

# Sample Output
6
```
