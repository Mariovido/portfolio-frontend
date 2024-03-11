# 2540. Minimum Common Value

## Description

Given two integer arrays `nums1` and `nums2`, both sorted in non-decreasing order, this problem involves finding the minimum integer common to both arrays. If there is no common integer amongst `nums1` and `nums2`, the function returns `-1`.

## Function

```java
public int getCommon(int[] nums1, int[] nums2) {}
```

## Input Format

- Two arrays of integers, `nums1` and `nums2`.
- The length of `nums1` and `nums2` is between `1` and `10^5` inclusive.
- The integers in `nums1` and `nums2` are between `1` and `10^9` inclusive.
- Both `nums1` and `nums2` are sorted in non-decreasing order.

## Output Format

- An integer, the minimum common integer among `nums1` and `nums2`. If there is no common integer, return `-1`.

## Constraints

- `1 <= nums1.length, nums2.length <= 10^5`
- `1 <= nums1[i], nums2[j] <= 10^9`
- Both `nums1` and `nums2` are sorted in non-decreasing order.

## Example

```bash
# Sample Input
nums1 = [1,2,3], nums2 = [2,4]

# Sample Output
2
```
