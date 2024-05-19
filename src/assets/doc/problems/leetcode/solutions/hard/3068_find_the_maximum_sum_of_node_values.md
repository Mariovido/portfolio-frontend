# 3068. Find the Maximum Sum of Node Values

## Intuition

The problem revolves around maximizing the sum of values in an array after applying a bitwise `XOR` operation with a given integer `k`. The goal is to determine which elements, when `XOR`-ed with `k`, increase the overall sum and then compute the total maximum possible sum.

## Approach

1. **Calculate Initial Total Sum**: First, calculate the total sum of the array elements.
2. **Compute Differences**: For each element in the array, compute the difference between the value obtained by `XOR`-ing the element with `k` and the original element value.
3. **Track Beneficial Differences**: Accumulate positive differences (where `XOR`-ing increases the element's value) to determine the total potential increase in the sum.
4. **Handle Odd Positive Count**: If the number of positive differences is odd, adjust the total increase by subtracting the smallest absolute difference. This ensures the result is maximized by maintaining an even count of positive differences.
5. **Return the Final Sum**: Add the computed total increase to the initial sum and return the result.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of elements in the array. The algorithm involves a single pass through the array to calculate the total sum and another pass to compute differences and count positives.

- Space complexity: `O(1)`. The algorithm uses a constant amount of additional space for variables

## Code

```java
class Solution {
    public long maximumValueSum(int[] nums, int k, int[][] edges) {
        long total = 0;

        for (int num : nums) {
            total += num;
        }

        long totalDiff = 0;
        long diff;
        int positiveCount = 0;
        long minAbsDiff = Long.MAX_VALUE;
        for (int num : nums) {
            diff = (num ^ k) - num;

            if (diff > 0) {
                totalDiff += diff;
                positiveCount++;
            }

            minAbsDiff = Math.min(minAbsDiff, Math.abs(diff));
        }

        if (positiveCount % 2 == 1) totalDiff -= minAbsDiff;

        return total + totalDiff;
    }
}
```
