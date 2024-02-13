# 42. Trapping Rain Water

## Description

Given an array representing an elevation map where the width of each bar is `1`, this problem involves calculating the amount of water that can be trapped after raining.

## Function

```java
public int trap(int[] height) {}
```

## Input Format

- An array of non-negative integers, `height`, representing the elevation map.
- The length of the array, `n`, satisfies `1 <= n <= 2 * 10^4`.
- Each element in the array satisfies `0 <= height[i] <= 10^5`.

## Output Format

- An integer representing the total amount of trapped rainwater.

## Constraints

- `n == height.length`
- `1 <= n <= 2 * 10^4`
- `0 <= height[i] <= 10^5`

## Example

```bash
# Sample Input
int[] height1 = {0,1,0,2,1,0,1,3,2,1,2,1};

# Sample Output
6
```
