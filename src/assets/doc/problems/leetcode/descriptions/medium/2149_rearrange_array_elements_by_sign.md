# 2149. Rearrange Array Elements by Sign

## Description

Given an array of integers, the problem involves rearranging the elements to meet specific conditions: every consecutive pair of integers must have opposite signs, and the order of integers with the same sign should be preserved. The rearranged array must start with a positive integer.

## Function

```java
public int[] rearrangeArray(int[] nums) {}
```

## Input Format

- The array `nums` of even length, containing an equal number of positive and negative integers.

## Output Format

- An integer array representing the modified array after rearranging the elements to satisfy the conditions.

## Constraints

- `2 <= nums.length <= 2 * 10^5`
- `nums.length` is even
- `1 <= |nums[i]| <= 10^5`
- `nums` consists of an equal number of positive and negative integers.

## Example

```bash
# Sample Input
nums = [3,1,-2,-5,2,-4]

# Sample Output
[3,-2,1,-5,2,-4]
```
