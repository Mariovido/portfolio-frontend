# 1750. Minimum Length of String After Deleting Similar Ends

## Description

This problem asks for minimizing the length of a string composed of `a`, `b`, and `c` by repeatedly removing matching non-empty prefixes and suffixes. The goal is to find the minimum length of the string after any number of such operations.

## Function

```java
public int minimumLength(String s) {}
```

## Input Format

- A single string `s` consisting of characters `a`, `b`, and `c`.

## Output Format

- An integer representing the minimum length of `s` after performing the operations.

## Constraints

- `1 <= s.length <= 10^5`
- `s` consists only of characters `a`, `b`, and `c`.

## Example

```bash
# Sample Input
s = "ca"

# Sample Output
2
```
