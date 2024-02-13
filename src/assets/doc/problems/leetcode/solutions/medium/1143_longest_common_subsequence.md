# 1143. Longest Common Subsequence

## Intuition

The problem appears to be a classic dynamic programming problem for finding the length of the longest common subsequence between two strings. The given solution seems to use a 2D array (`dp`) to store the lengths of common subsequences for substrings of `text1` and `text2`.

## Approach

The approach uses a bottom-up dynamic programming approach with a 2D array (`dp`). The idea is to iterate through each character of both strings, updating the `dp` array based on whether the characters match or not. If the characters match, the value at `dp[i][j]` is updated by adding `1` to the value at `dp[i-1][j-1]`. If the characters don't match, the value is updated by taking the maximum of `dp[i][j-1]` and `dp[i-1][j]`. The final result is stored in `dp[n][m]`, where `n` and `m` are the lengths of `text1` and `text2`, respectively.

## Complexity

- Time complexity: `O(n * m)`, where `n` and `m` are the lengths of `text1` and `text2`, respectively. The nested loops iterate through each character of both strings.

- Space complexity: `O(n * m)` as the algorithm uses a 2D array (`dp`) to store intermediate results.

## Code

```java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int n = text1.length();
        int m = text2.length();

        int[][] dp = new int[n + 1][m + 1];

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1] + 1;
                else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }

        return dp[n][m];
    }
}
```
