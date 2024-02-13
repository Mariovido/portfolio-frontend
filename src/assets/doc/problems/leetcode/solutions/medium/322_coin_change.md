# 322. Coin Change

## Intuition

The problem seems to be a variation of the classic dynamic programming problem for finding the minimum number of coins needed to make up a given amount. The use of dynamic programming suggests that we are optimizing the solution by breaking it down into subproblems and building up the solution gradually.

## Approach

The approach used here is dynamic programming. The code initializes an array `dp` to store the minimum number of coins needed for each amount from `0` to the target amount. It then iterates through each coin denomination, updating the `dp` array for each amount by considering the current coin. The final result is stored in `dp[amount]`.

## Complexity

- Time complexity: `O(n * m)`, where `n` is the target amount and `m` is the number of coin denominations. The nested loops iterate through all possible combinations of amounts and coins.

- Space complexity: `O(n)`, where `n` is the target amount. The space complexity is determined by the size of the `dp` array, which is proportional to the target amount.

## Code

```java
class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;

        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }
}
```
