# 127. Word Ladder

## Description

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, this problem involves finding the number of words in the shortest transformation sequence from `beginWord` to `endWord`. A transformation sequence consists of words where every adjacent pair differs by a single letter, and each word is present in the `wordList`. The goal is to return the length of the shortest transformation sequence or `0` if no such sequence exists.

## Function

```java
public int ladderLength(String beginWord, String endWord, List<String> wordList) {}
```

## Input Format

- `beginWord`: a word of length `1` to `10`.
- `endWord`: a word of the same length as `beginWord`.
- `wordList`: a list of unique words where each word has the same length as `beginWord` and consists of lowercase English letters.

## Output Format

- An integer representing the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or `0` if no such sequence exists.

## Constraints

- `1 <= beginWord.length <= 10`
- `endWord.length == beginWord.length`
- `1 <= wordList.length <= 5000`
- `wordList[i].length == beginWord.length`
- `beginWord`, `endWord`, and `wordList[i]` consist of lowercase English letters.
- `beginWord != endWord`
- All the words in `wordList` are unique.

## Example

```bash
# Sample Input
beginWord = "hit"
endWord = "cog"
wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

# Sample Output
5
```
