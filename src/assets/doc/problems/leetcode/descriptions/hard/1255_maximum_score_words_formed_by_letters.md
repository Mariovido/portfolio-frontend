# 1255. Maximum Score Words Formed by Letters

## Description

Given a list of words, a list of single letters (which may contain duplicates), and a score for each character, the task is to calculate the maximum score of any valid set of words that can be formed using the given letters. Each word can be used only once, and it's not necessary to use all the letters. Each letter can only be used once in forming the set of words.

## Function

```java
public int maxScoreWords(String[] words, char[] letters, int[] score) {}
```

## Input Format

- `words`: An array of words.
- `letters`: An array of characters that can be used to form words.
- `score`: An array of integers where `score[i]` represents the score of the character (`'a' + i`).

## Output Format

- An integer representing the maximum score possible from any valid set of words formed using the given letters.

## Constraints

- `1 <= words.length <= 14`
- `1 <= words[i].length <= 15`
- `1 <= letters.length <= 100`
- `score.length == 26`
- `0 <= score[i] <= 10`
- `words[i]`, `letters[i]` contains only lowercase English letters

## Example

```bash
# Sample Input
String[] words = {"dog", "cat", "dad", "good"};
char[] letters = {'a', 'a', 'c', 'd', 'd', 'd', 'g', 'o', 'o'};
int[] score = {1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

# Sample Output
23
```
