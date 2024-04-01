# 2958. Length of Longest Subarray With at Most K Frequency

## Description

Given an integer array `nums` and an integer `k`, where the frequency of an element is defined as the number of times it appears in the array, this problem requires finding the length of the longest "good" subarray. A subarray is considered "good" if the frequency of each element within it is less than or equal to `k`.

## Function

```java
public int maxSubarrayLength(int[] nums, int k) {}
```

## Input Format

- The first line contains an integer array `nums`.
- The second input is an integer `k`, representing the maximum allowable frequency for each element.

## Output Format

- Return the length of the longest good subarray of `nums`.

## Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= k <= nums.length`

## Example

```bash
# Sample Input
nums = [1,2,3,1,2,3,1,2], k = 2

# Sample Output
6
```
