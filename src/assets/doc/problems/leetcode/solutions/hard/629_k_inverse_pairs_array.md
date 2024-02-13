# 629. K Inverse Pairs Array

## Intuition

The problem can be solved using dynamic programming. One possible approach could be to iterate through each possible number of inverse pairs and compute the number of permutations that satisfy that condition.

## Approach

We can use dynamic programming to solve this problem. We maintain a 2D array `dp`, where `dp[i][j]` represents the number of permutations of length `i` with `j` inverse pairs. At each step, we can compute `dp[i][j]` by considering the previous permutations and adding new elements. We update `dp[i][j]` using the formula: `dp[i][j] = dp[i-1][j] + dp[i-1][j-1] + ... + dp[i-1][j-(i-1)]`, where `j-(i-1)` ensures that we don't count negative inverse pairs.

## Complexity

- Time complexity: `O(n * k)`

- Space complexity: `O(k)`

## Code

```java
class Solution {
    public int kInversePairs(int n, int k) {
        int MOD = (int) Math.pow(10, 9) + 7;
        int[] dp = new int[k + 1];
        dp[0] = 1;

        for (int N = 1; N <= n; N++) {
            int[] temp = new int[k + 1];
            int total = 0;

            for (int K = 0; K <= k; K++) {
                total = (total + dp[K]) % MOD;

                if (K >= N) total = (total - dp[K - N] + MOD) % MOD;

                temp[K] = total;
            }

            dp = temp;
        }

        return dp[k];
    }
}
```
