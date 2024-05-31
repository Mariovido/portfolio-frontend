# 1608. Special Array With X Elements Greater Than or Equal X

## Intuition

To solve this problem, we need to determine if there is a number `x` such that there are exactly `x` numbers in the array that are greater than or equal to `x`. The simplest way to approach this problem is through brute force, iterating over possible values of `x` and counting the number of elements greater than or equal to `x`.

## Approach

1. Iterate over possible values of `x` from `0` to `n` (inclusive), where `n` is the length of the array `nums`.
2. For each value of `x`, count how many numbers in `nums` are greater than or equal to `x`.
3. If the count is equal to `x` at any point, return `x`.
4. If no such `x` is found, return `-1`.

## Complexity

- Time complexity: `O(n^2)`

  - The outer loop runs `n + 1` times, where `n` is the length of the array.
  - For each value of `x`, we iterate through the entire array to count the numbers.

- Space complexity: `O(1)`

## Code

```java
class Solution {
    public int specialArray(int[] nums) {
        for (int x = 0; x <= nums.length; x++) {
            int count = 0;
            for (int num : nums) {
                if (num >= x) count++;
            }

            if (count == x) return x;
        }

        return -1;
    }
}
```
