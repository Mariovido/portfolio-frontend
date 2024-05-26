# 552. Student Attendance Record II

## Intuition

The problem requires counting the number of valid attendance records of length `n` that do not contain more than one `A` (absent) and no more than two consecutive `L`s (late). This can be approached using dynamic programming due to the overlapping subproblems and optimal substructure properties.

## Approach

1. **Define the State**: Use a `3`-dimensional DP array `dp[i][j][k]` where:

   - `i` is the length of the sequence.
   - `j` is the count of `A` (`0` or `1`).
   - `k` is the count of consecutive `L` (`0` to `2`).

2. **Base Case**: Initialize `dp[0][0][0] = 1`, representing the single empty sequence which is trivially valid.

3. **Transition**:

   - Add 'P' (present): Update `dp[i][j][0]` by summing all sequences of length `i - 1` ending in any configuration of `A` and `L`.
   - Add 'A' (absent): Update `dp[i][1][0]` by summing all sequences of length `i - 1` with no `A` and ending in any configuration of `L`.
   - Add `L` (late): Update `dp[i][j][k]` by extending sequences of length `i - 1` with one fewer consecutive `L`.

4. **Compute Result**: Sum up all configurations of `dp[n][j][k]` to get the total number of valid sequences of length `n`.

## Complexity

- Time complexity: `O(n)` time since it iterates over all states once.

- Space complexity: `O(n)` due to the DP table `dp` which has dimensions dependent on `n`.

## Code

```java
class Solution {
    private final int MOD = 1000000007;

    public int checkRecord(int n) {
        long[][][] dp = new long[n + 1][2][3];
        dp[0][0][0] = 1;

        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < 2; j++) {
                for (int k = 0; k < 3; k++) {
                    dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j][k]) % MOD;
                }
            }

            for (int k = 0; k < 3; k++) {
                dp[i][1][0] = (dp[i][1][0] + dp[i - 1][0][k]) % MOD;
            }

            for (int j = 0; j < 2; j++) {
                for (int k = 1; k < 3; k++) {
                    dp[i][j][k] = (dp[i][j][k] + dp[i - 1][j][k - 1]) % MOD;
                }
            }
        }

        long result = 0;
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 3; k++) {
                result = (result + dp[n][j][k]) % MOD;
            }
        }

        return (int) result;
    }
}
```
