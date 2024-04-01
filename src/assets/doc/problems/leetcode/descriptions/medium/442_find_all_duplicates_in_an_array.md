# 442. Find All Duplicates in an Array

## Description

Given an integer array nums of length `n` where all the integers of `nums` are in the range `[1, n]` and each integer appears once or twice, this problem involves finding and returning an array of all the integers that appear twice. The algorithm must run in `O(n)` time and use only constant extra space.

## Function

```java
public List<Integer> findDuplicates(int[] nums) {}
```

## Input Format

- An integer array `nums` of length `n`, where `1 <= n <= 10^5` and `1 <= nums[i] <= n`.

## Output Format

- An array containing all the integers that appear twice in the input array.

## Constraints

- `n == nums.length`
- `1 <= n <= 10^5`
- `1 <= nums[i] <= n`
- Each element in `nums` appears once or twice.

## Example

```bash
# Sample Input
nums = [4,3,2,7,8,2,3,1]

# Sample Output
[2,3]
```
