# 139. Word Break

## Intuition

The problem can be solved using dynamic programming to check if the given string can be segmented into words from the provided dictionary. The intuition here is to iterate through the given string and, at each position, check if the substring ending at that position can be formed using words from the dictionary.

## Approach

- Initialize a boolean array `dp` of size `n + 1`, where `n` is the length of the input string `s`. The index `dp[i]` will represent whether the substring ending at position `i` can be segmented into words from the dictionary.
- Set `dp[0]` to true since an empty string can be segmented into words from the dictionary.
- Iterate through each position `i` from `1` to `n`:
  - For each word in the dictionary, check if the substring ending at position `i` (of length equal to the word's length) can be formed by combining the words from the dictionary. Use `startsWith` method to efficiently check this condition.
  - If the condition is satisfied, set `dp[i]` to `true` and break from the inner loop.
- The final answer is given by `dp[n]`, which represents whether the entire string can be segmented.

## Complexity

- Time complexity: `O(n * m)`, where `n` is the length of the input string `s` and `m` is the maximum length of words in the dictionary. The nested loops iterate through each position in the string and each word in the dictionary.

- Space complexity: `O(n)`, where `n` is the length of the input string `s`. The boolean array `dp` of size `n + 1` is used.

## Code

```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;

        for (int i = 1; i <= n; i++) {
            for (String word : wordDict) {
                int w = word.length();
                if (i >= w && dp[i - w] && s.startsWith(word, i - w)) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[n];
    }
}
```
