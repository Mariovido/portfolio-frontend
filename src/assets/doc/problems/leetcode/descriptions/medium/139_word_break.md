# 139. Word Break

## Description

Given a string `s` and a dictionary of strings `wordDict`, this problem involves determining whether `s` can be segmented into a space-separated sequence of one or more dictionary words. The segmentation allows reusing the same word multiple times.

## Function

```java
public boolean wordBreak(String s, List<String> wordDict) {}
```

## Input Format

- The first parameter `s`: a string representing the input sequence &rarr; `1 <= s.length <= 300`.
- The second parameter `wordDict`: a list of strings representing the dictionary &rarr; `1 <= wordDict.length <= 1000`, `1 <= wordDict[i].length <= 20`.

## Output Format

- A boolean value indicating whether `s` can be segmented into words from the dictionary.

## Constraints

- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- Strings `s` and `wordDict[i]` consist of only lowercase English letters.
- All the strings in wordDict are unique.

## Example

```bash
# Sample Input
s = "leetcode", wordDict = ["leet","code"]

# Sample Output
true
```
