# 937. Reorder Data in Log Files

## Description

Given an array of logs where each log is a space-delimited string of words, this problem involves reordering the logs based on the following rules:

1. All letter-logs come before digit-logs.
2. Letter-logs are sorted lexicographically by their contents. If their contents are the same, they are sorted lexicographically by their identifiers.
3. Digit-logs maintain their relative ordering.

## Function

```java
public String[] reorderLogFiles(String[] logs) {}
```

## Input Format

- An array of logs `logs`, where each log is a space-delimited string.

## Output Format

- The final order of the logs after reordering.

## Constraints

- `1 <= logs.length <= 100`
- `3 <= logs[i].length <= 100`
- All tokens of `logs[i]` are separated by a single space. `logs[i]` has an identifier and at least one word after the identifier.

## Example

```bash
# Sample Input
["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]

# Sample Output
["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
```
