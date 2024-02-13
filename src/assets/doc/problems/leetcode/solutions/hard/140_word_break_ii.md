# 140. Word Break II

## Intuition

The problem seems to be related to breaking a given string into words based on a dictionary. The use of recursion and memoization indicates a dynamic programming approach. The function `dfs` is likely performing a depth-first search to explore all possible word break combinations.

## Approach

The approach here is a recursive one, utilizing depth-first search to explore all possible combinations of word breaks. The memoization with the `memo` map is used to avoid redundant computations and improve the efficiency of the algorithm. The base case is when the starting index reaches the end of the string, indicating a valid word break.

## Complexity

- Time complexity:

  - The time complexity is dependent on the number of recursive calls. In the worst case, each character can be part of a valid word, and there can be multiple possibilities at each step. Therefore, the time complexity is exponential, but with memoization, it can be reduced to a more manageable level.
  - Let `n` be the length of the input string.
  - The time complexity is `O(2^{n})` in the worst case, but with memoization, it becomes much better in practice.

- Space complexity:
  - The space complexity is influenced by the recursion depth and the memoization map.
  - The maximum recursion depth is `n`, and at each level, the space complexity is `O(n)` due to the substring operations.
  - The memoization map stores results for each index, and in the worst case, it can store results for all `n` indices.
  - Therefore, the overall space complexity is `O(n^2)`.

## Code

```java
class Solution {
    public List<String> wordBreak(String s, List<String> wordDict) {
        Map<Integer, List<String>> memo = new HashMap<>();
        return dfs(s, 0, wordDict, memo);
    }

    private List<String> dfs(String s, int start, List<String> wordDict, Map<Integer, List<String>> memo) {
        if (memo.containsKey(start)) return memo.get(start);

        List<String> result = new ArrayList<>();

        if (start == s.length()) result.add("");

        for (int end = start + 1; end <= s.length(); end++) {
            String word = s.substring(start, end);
            if (wordDict.contains(word)) {
                List<String> nextWords = dfs(s, end, wordDict, memo);
                for (String nextWord : nextWords) {
                    result.add(word + (nextWord.isEmpty() ? "" : " ") + nextWord);
                }
            }
        }

        memo.put(start, result);
        return result;
    }
}
```
