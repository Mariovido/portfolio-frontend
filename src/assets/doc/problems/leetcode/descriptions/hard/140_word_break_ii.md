# 140. Word Break II

## Description

Given a string `s` and a dictionary of strings `wordDict`, the task is to add spaces in `s` to construct a sentence where each word is a valid dictionary word. All possible sentences should be returned in any order, allowing reuse of words from the dictionary.

## Function

```java
public List<String> wordBreak(String s, List<String> wordDict) {}
```

## Input Format

- A string `s` (`1 <= s.length <= 20`) representing the input string.
- A list of strings `wordDict` (`1 <= wordDict.length <= 1000`, `1 <= wordDict[i].length <= 10`) representing the dictionary of valid words.

## Output Format

- A list of strings containing all possible sentences, each constructed from valid words in the dictionary.

## Constraints

- `1 <= s.length <= 20`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 10`
- `s` and `wordDict[i]` consist of only lowercase English letters.
- All strings in `wordDict` are unique.
- Input is generated in a way that the length of the answer doesn't exceed `10^5`.

## Example

```bash
# Sample Input
s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]

# Sample Output
["cats and dog","cat sand dog"]
```
