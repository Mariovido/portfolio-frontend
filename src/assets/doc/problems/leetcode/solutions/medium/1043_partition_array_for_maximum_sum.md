# 1043. Partition Array for Maximum Sum

## Intuition

The problem seems to involve dynamic programming, where we are trying to maximize the sum of partitions in an array by considering different window sizes. The dynamic programming approach likely involves building up solutions for smaller subproblems and then using them to find the solution for the larger problem.

## Approach

The approach uses dynamic programming to iterate through the array in reverse order. For each position, it considers all possible window sizes up to the given constraint `k`. It maintains a running maximum within the window and calculates the maximum sum for each window size. The dynamic programming array `dp` is updated based on the maximum sum achievable for the current window.

## Complexity

- Time complexity: `O(N * K)`, where `N` is the length of the array and `K` is the given constraint. The nested loops iterate through each position in the array and consider each possible window size up to `k`.

- Space complexity: `O(K)`, where `K` is the given constraint. The `dp` array is of size `K`.

## Code

```java
class Solution {
    public int maxSumAfterPartitioning(int[] arr, int k) {
        int N = arr.length;
        int K = k + 1;

        int[] dp = new int[K];
        for (int start = N - 1; start >= 0; start--) {
            int currMax = 0;
            int end = Math.min(N, start + k);

            for (int i = start; i < end; i++) {
                currMax = Math.max(currMax, arr[i]);
                int windowSize = i - start + 1;
                dp[start % K] = Math.max(dp[start % K],
                    dp[(i + 1) % K] + currMax * windowSize);
            }
        }

        return dp[0];
    }
}
```
