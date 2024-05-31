# 260. Single Number III

## Description

Given an integer array `nums` where exactly two elements appear only once and all other elements appear exactly twice, the goal is to identify these two unique elements. The algorithm must run in linear time and use constant extra space.

## Function

```java
public int[] singleNumber(int[] nums) {}
```

## Input Format

- An integer array `nums` with a length between `2` and `30,000`.
- Each integer in `nums` appears exactly twice, except for two integers that appear only once.

## Output Format

- An array of two integers, representing the unique elements.

## Constraints

- `2 <= nums.length <= 30,000`
- `-2^31 <= nums[i] <= 2^31 − 1`
- The output can be in any order.

## Example

```bash
# Sample Input
int[] nums = {1, 2, 1, 3, 2, 5};

# Sample Output
[3, 5]
```
