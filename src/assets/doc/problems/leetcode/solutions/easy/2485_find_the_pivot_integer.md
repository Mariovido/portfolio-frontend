# 2485. Find the Pivot Integer

## Intuition

The problem seems to ask for finding a pivot integer such that the sum of integers from `1` to that pivot integer (inclusive) equals the sum of integers from the pivot integer plus `1` to `n` (inclusive). This suggests that we need to find the point where the sum "splits" into two equal parts.

## Approach

1. Compute the total sum of integers from `1` to `n` using the formula for the sum of an arithmetic series: `totalSum = n * (n + 1) / 2`.
2. Initialize a variable `sumX` to `0`, which will keep track of the cumulative sum as we iterate through the integers from `1` to `n`.
3. Iterate through each integer `x` from `1` to `n`:
   - Calculate the sum of integers after `x` (`sumAfterX`) as `totalSum - sumX`.
   - Add `x` to `sumX`.
   - Check if `sumX` equals `sumAfterX`. If they are equal, return `x` as the pivot integer.
4. If no pivot integer is found during the iteration, return `-1` to indicate that no pivot integer exists.

## Complexity

- Time complexity: `O(n)` since we iterate through the integers from `1` to `n` once.

- Space complexity: `O(1)` since we use only a constant amount of extra space regardless of the input size.

## Code

```java
class Solution {
    public int pivotInteger(int n) {
        int totalSum = n * (n + 1) / 2;

        int sumX = 0;
        for (int x = 1; x <= n; x++) {
            int sumAfterX = totalSum - sumX;
            sumX += x;

            if (sumX == sumAfterX) return x;
        }

        return -1;
    }
}
```
