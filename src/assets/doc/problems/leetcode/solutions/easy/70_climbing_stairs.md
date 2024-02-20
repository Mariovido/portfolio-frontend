# 70. Climbing Stairs

## Intuition

The problem of climbing stairs can be approached using dynamic programming. We can observe that to reach step `i`, one could either come from step `i - 1` by taking one step, or from step `i - 2` by taking two steps. Hence, the number of ways to reach step `i` is the sum of the ways to reach steps `i - 1` and `i - 2`.

## Approach

1. Initialize two variables `first` and `second` to store the number of ways to reach steps `1` and `2` respectively.
2. Iterate from step `3` to `n`.
3. At each step, calculate the number of ways to reach the current step by adding the number of ways to reach the previous two steps (`first` and `second`).
4. Update `first` and `second` accordingly.
5. Finally, return the number of ways to reach the `n^{th}` step (`second`).

## Complexity

- Time complexity: The loop runs `n - 2` times, so the time complexity is `O(n)`.

- Space complexity: Only a constant amount of extra space is used, regardless of the input size `n`, so the space complexity is `O(1)`.

## Code

```java
class Solution {
    public int climbStairs(int n) {
        if (n <= 2) return n;

        int first = 1;
        int second = 2;
        for (int i = 3; i <= n; i++) {
            int third = first + second;
            first = second;
            second = third;
        }

        return second;
    }
}
```
