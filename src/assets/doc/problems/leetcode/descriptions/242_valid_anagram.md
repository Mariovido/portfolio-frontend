# 242. Valid Anagram

## Description

Given two strings, this problem involves determining if one is an anagram of the other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

## Function

```java
public boolean isAnagram(String s, String t) {}
```

## Input Format

- Two strings, `s` and `t`, consisting of lowercase English letters.

## Output Format

- `true` if `t` is an anagram of `s`, `false` otherwise.

## Constraints

- `1 <= s.length, t.length <= 5 * 10^4`

## Follow-up

- Can you come up with an algorithm that is less than `O(n^2)` time complexity?

## Example

```bash
# Sample Input
s = "anagram", t = "nagaram"

# Sample Output
true
```
