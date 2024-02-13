# 49. Group Anagrams

## Description

Given an array of strings, this problem involves grouping the anagrams together. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Function

```java
public List<List<String>> groupAnagrams(String[] strs) {}
```

## Input Format

- An array of strings `strs`, where `1 <= strs.length <= 10^4`, `0 <= strs[i].length <= 100`, and `strs[i]` consists of lowercase English letters.

## Output Format

- A list of lists containing grouped anagrams.

## Constraints

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

## Example

```bash
# Sample Input
["eat","tea","tan","ate","nat","bat"]

# Sample Output
[["bat"],["nat","tan"],["ate","eat","tea"]]
```
