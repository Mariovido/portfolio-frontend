# 2444. Count Subarrays With Fixed Bounds

## Description

This challenge requires identifying and counting subarrays within an integer array that meet specific boundary conditions: the subarrays must have minimum and maximum values equal to given integers `minK` and `maxK`, respectively. It tests one's ability to work with array segments and evaluate conditions across varying lengths.

## Function

```java
public long countSubarrays(int[] nums, int minK, int maxK) {}
```

## Input Format

- The first line contains an integer array `nums`.
- The second and third lines contain the integers `minK` and `maxK`, representing the minimum and maximum values that define the fixed-bound subarray.

## Output Format

- Output a single integer: the count of fixed-bound subarrays that satisfy the given conditions.

## Constraints

- `2 <= nums.length <= 10^5`
- `1 <= nums[i], minK, maxK <= 10^6`

## Example

```bash
# Sample Input
nums = [1,3,5,2,7,5], minK = 1, maxK = 5

# Sample Output
2
```
