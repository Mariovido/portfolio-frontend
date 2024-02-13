# 279. Perfect Squares

## Intuition

The problem seems to be a dynamic programming (DP) problem. We want to find the minimum number of perfect squares that sum up to a given number `n`. It appears that we can break down the problem into subproblems, finding the minimum number of squares for each integer up to `n`.

## Approach

We can utilize dynamic programming to solve this problem efficiently. We'll create an array dp where `dp[i]` represents the minimum number of perfect squares needed to sum up to the number `i`. We'll initialize `dp[0]` to be `0` since it takes `0` squares to sum up to `0`. For each integer `i` from `1` to `n`, we'll iterate through all possible perfect squares less than or equal to `i` and update `dp[i]` by taking the minimum of `dp[i]` and `dp[i - j * j] + 1`, where `j` represents the perfect square we are considering. Finally, we return `dp[n]`, which represents the minimum number of perfect squares needed to sum up to `n`.

## Complexity

- Time complexity: `O(n * \sqrt{n})`. The outer loop runs from `1` to `n`, and the inner loop runs up to `\sqrt{n}`.

- Space complexity: `O(n)`. We use an array of size `n + 1` to store the DP values.

## Code

```java
class Solution {
    public int numSquares(int n) {
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j * j <= i; j++) {
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            }
        }

        return dp[n];
    }
}
```
