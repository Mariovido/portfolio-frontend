# 2000. Reverse Prefix of Word

## Description

Given a string `word` and a character `ch`, this problem involves reversing the segment of `word` that starts at index `0` and ends at the index of the first occurrence of `ch` (inclusive). If the character `ch` does not exist in `word`, no operation is performed.

## Function

```java
public String reversePrefix(String word, char ch) {}
```

## Input Format

- `word`: A string consisting of lowercase English letters &rarr; `1 <= word.length <= 250`.
- `ch`: A lowercase English letter.

## Output Format

- The resulting string after reversing the segment, or the original string if `ch` does not exist in `word`.

## Constraints

- `1 <= word.length <= 250`
- `word` consists of lowercase English letters.
- `ch` is a lowercase English letter.

## Example

```bash
# Sample Input
word = "abcdefd", ch = 'd'

# Sample Output
"dcbaefd"
```
