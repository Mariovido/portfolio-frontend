# 126. Word Ladder II

## Description

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, this problem involves finding all the shortest transformation sequences from `beginWord` to `endWord`. A transformation sequence is a series of words in `wordList` where every adjacent pair of words differs by a single letter.

## Function

```java
public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {}
```

## Input Format

- `beginWord`: a string representing the starting word.
- `endWord`: a string representing the target word.
- `wordList`: a list of words in the dictionary.

## Output Format

- A list of lists, each representing a shortest transformation sequence.

## Constraints

- `1 <= beginWord.length <= 5`
- `endWord.length == beginWord.length`
- `1 <= wordList.length <= 500`
- `wordList[i].length == beginWord.length`
- `beginWord`, `endWord`, and `wordList[i]` consist of lowercase English letters.
- `beginWord} != endWord`
- All words in `wordList` are unique.
- The sum of all shortest transformation sequences does not exceed `10^5`.

## Example

```bash
# Sample Input
String beginWord1 = "hit";
String endWord1 = "cog";
List<String> wordList1 = Arrays.asList("hot","dot","dog","lot","log","cog");

# Sample Output
[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
```
