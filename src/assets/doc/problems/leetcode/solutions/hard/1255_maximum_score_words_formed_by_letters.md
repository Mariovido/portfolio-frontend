# 1255. Maximum Score Words Formed by Letters

## Intuition

To maximize the score by forming words using the given letters, a backtracking approach can be effective. The idea is to explore all possible combinations of words that can be formed with the available letters and calculate their corresponding scores.

## Approach

1. **Count Available Letters**: Create a map to count the frequency of each letter available in the `letters` array.
2. **Backtracking**: Implement a recursive function that tries to either include or exclude each word at every step, maintaining the remaining letter counts and the current score.
   - **Base Case**: If all words have been considered, return a score of `0`.
   - **Skip Current Word**: Recursively calculate the maximum score without using the current word.
   - **Use Current Word**: Check if the current word can be formed with the remaining letters. If so, calculate the score for using this word and recursively calculate the score for the remaining words with updated letter counts.
   - **Choose Maximum**: Return the maximum score obtained by either skipping or using the current word.

## Complexity

- Time complexity: `O(2^{n})`. Each word can either be included or excluded, leading to a total of `2^{n}` combinations where `n` is the number of words.

- Space complexity: `O(n)`. The depth of the recursion tree can go u, which is the number of words.

## Code

```java
class Solution {
    public int maxScoreWords(String[] words, char[] letters, int[] score) {
        Map<Character, Integer> letterCount = new HashMap<>();
        for (char letter : letters) {
            letterCount.put(letter, letterCount.getOrDefault(letter, 0) + 1);
        }

        return backtrack(words, score, letterCount, 0);
    }

    private int backtrack(String[] words, int[] score, Map<Character, Integer> letterCount, int index) {
        if (index == words.length) return 0;

        int skipWord = backtrack(words, score, letterCount, index + 1);

        int wordScore = 0;
        boolean canFormWord = true;
        Map<Character, Integer> tempLetterCount = new HashMap<>(letterCount);

        for (char c : words[index].toCharArray()) {
            if (tempLetterCount.getOrDefault(c, 0) <= 0) {
                canFormWord = false;
                break;
            }

            tempLetterCount.put(c, tempLetterCount.get(c) - 1);
            wordScore += score[c - 'a'];
        }

        int useWord = 0;
        if (canFormWord) useWord = wordScore + backtrack(words, score, tempLetterCount, index + 1);

        return Math.max(skipWord, useWord);
    }
}
```
