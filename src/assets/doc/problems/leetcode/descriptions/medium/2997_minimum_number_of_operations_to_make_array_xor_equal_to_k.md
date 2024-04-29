# 2997. Minimum Number of Operations to Make Array XOR Equal to K

## Description

This problem challenges us to perform a minimum number of bit flips on the elements of an array to achieve a target `XOR` value, `k`. A bit flip involves changing a binary `0` to `1` or vice versa, and can be performed on any bit of any element, including leading zeros.

## Function

```java
public int minOperations(int[] nums, int k) {}
```

## Input Format

- First line: integer array `nums`, with a size between `1` and `100,000`.
- Second line: positive integer `k`, within the range of `0` to `1,000,000`.

## Output Format

- Single integer representing the minimum number of bit flips required to make the `XOR` of all array elements equal to `k`.

## Constraints

- `1 <= nums.length <= 10^5`
- `0 <= nums[i], k <= 10^6`

## Example

```bash
# Sample Input
int[] nums = {2, 1, 3, 4};
int k = 1;

# Sample Output
2
```
