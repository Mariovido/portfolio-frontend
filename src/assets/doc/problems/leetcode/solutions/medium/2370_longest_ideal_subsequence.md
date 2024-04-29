# 2370. Longest Ideal Subsequence

## Intuition

When first looking at the problem of finding the longest ideal string with a given maximum distance `k` between characters in terms of ASCII values, the problem hints at a need for a dynamic programming approach. The idea is to maintain a state that represents the longest ideal subsequence ending with each possible character in the alphabet. The goal is to determine how each character in the string `s` can extend the ideal subsequences previously computed.

## Approach

1. **Initialize a DP Array**: Start by creating a `dp` array where each index represents an ASCII value of a character, and each value at `dp[i]` represents the length of the longest ideal subsequence ending with the character `i`.
2. **Iterate through Characters of s**: For each character `c` in the string `s`, determine the range of characters from `c - k` to `c + k` that can validly follow the previous characters based on the condition that the ASCII difference should not exceed `k`.
3. **Find Maximum Subsequence Length for Character c**: For each character within the valid range, find the maximum `dp` value (maximum length of ideal subsequence ending with that character) and add `1` (for the current character `c`), updating `dp[c]` with this value.
4. **Calculate the Result**: After processing all characters in `s`, the result is the maximum value found in the `dp` array, which represents the longest length of any ideal subsequence.
5. **Return the Result**: Finally, return the computed maximum length.

## Complexity

- Time complexity: `O(n * k)`, where `n` is the length of the string `s` and `k` is the maximum distance allowable between characters. This is because for each of the `n` characters in `s`, we potentially consider up to `2k + 1` characters (ranging from `c - k` to `c + k`).

- Space complexity: `O(1)` or constant space, as the `dp` array uses a fixed amount of space based on the number of allowable characters (`128` in this case, to cover all ASCII values that might appear in `s`).

## Code

```java
class Solution {
    public int longestIdealString(String s, int k) {
        int[] dp = new int[128];

        for (char c : s.toCharArray()) {
            int maxLength = 0;
            for (char j = (char) (Math.max('a', c - k)); j <= Math.min('z', c + k); j++) {
                maxLength = Math.max(maxLength, dp[j]);
            }

            dp[c] = maxLength + 1;
        }

        int result = 0;
        for (int i = 'a'; i <= 'z'; i++) {
            result = Math.max(result, dp[i]);
        }

        return result;
    }
}
```
