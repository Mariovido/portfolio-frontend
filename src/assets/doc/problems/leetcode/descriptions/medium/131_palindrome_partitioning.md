# 131. Palindrome Partitioning

## Description

Given a string `s`, this problem involves partitioning the string such that every substring in the partition is a palindrome. The goal is to return all possible palindrome partitionings of the string.

## Function

```java
public List<List<String>> partition(String s) {}
```

## Input Format

- A single string `s` &rarr; `1 <= s.length <= 16`, containing only lowercase English letters.

## Output Format

- A list of lists, where each sublist contains a possible partition of palindromic substrings.

## Constraints

- `1 <= s.length <= 16`
- `s` contains only lowercase English letters.

## Example

```bash
# Sample Input
"aab"

# Sample Output
[["a","a","b"], ["aa","b"]]
```
