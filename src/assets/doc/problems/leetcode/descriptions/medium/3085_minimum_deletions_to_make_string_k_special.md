# 3085. Minimum Deletions to Make String K-Special

## Description

Given a string `word` and an integer `k`, the task is to determine the minimum number of character deletions needed to make the string `k-special`. A string is considered `k-special` if, for all characters in the string, the absolute difference between the frequencies of any two characters does not exceed `k`.

## Function

```java
public int minimumDeletions(String word, int k) {}
```

## Input Format

- A string word of length between `1` and `10^5` consisting only of lowercase English letters.
- An integer k between `0` and `10^5`.

## Output Format

- An integer representing the minimum number of deletions needed to make the string `k-special`.

## Constraints

- `1 <= \text{word.length} <= 10^5`
- `0 <= k <= 10^5`
- `word` contains only lowercase English letters.

## Example

```bash
# Sample Input
word = "aabcaba", k = 0

# Sample Output
3
```
