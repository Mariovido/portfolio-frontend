# 1544. Make The String Great

## Description

This challenge involves transforming a given string into a `good` string by removing pairs of adjacent characters that are the same letter in different cases (one in lower-case and the other in upper-case). The process is repeated until no such pairs exist, and an empty string is considered good.

## Function

```java
public String makeGood(String s) {}
```

## Input Format

- A single string `s` composed of lower and upper case English letters.

## Output Format

- The function returns the `good` string resulting from the repeated removal of bad adjacent character pairs.

## Constraints

- `1 <= s.length <= 100`
- `s` consists of lower and upper case English letters only.

## Example

```bash
# Sample Input
"leEeetcode"

# Sample Output
"leetcode"
```
