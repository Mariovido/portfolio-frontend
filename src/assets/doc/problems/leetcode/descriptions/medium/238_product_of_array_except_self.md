# 238. Product of Array Except Self

## Description

Given an integer array `nums`, this problem involves returning an array answer such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. The product of any prefix or suffix of `nums` is guaranteed to fit in a `32`-bit integer. The algorithm must run in `O(n)` time and without using the division operation.

## Function

```java
public int[] productExceptSelf(int[] nums) {}
```

## Input Format

- An integer array `nums` of length `n` &rarr; `2 <= n <= 10^5`.
- Each element `nums[i]` is an integer in the range `[-30, 30]`.

## Output Format

- An integer array `answer` of length `n`, where `answer[i]` represents the product of all elements of `nums` except `nums[i]`.

## Constraints

- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of nums is guaranteed to fit in a `32`-bit integer.

## Follow-up:

- Can you solve the problem in `O(1)` extra space complexity? (The output array does not count as extra space for space complexity analysis.)

## Example

```bash
# Sample Input
nums = [1, 2, 3, 4]

# Sample Output
[24, 12, 8, 6]
```
