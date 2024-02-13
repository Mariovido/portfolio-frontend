# 443. String Compression

## Description

Given an array of characters `chars`, compress it using the following algorithm: For each group of consecutive repeating characters in `chars`, append the character followed by the group's length to a new string `s`. If the group's length is `1`, append only the character to `s`. The compressed string `s` should be stored in the input character array `chars`, and group lengths that are `10` or longer will be split into multiple characters in `chars`.

## Function

```java
public int compress(char[] chars) {}
```

## Input Format

- An array of characters, `chars`, with `1 <= chars.length <= 2000`.

## Output Format

- An integer representing the new length of the array `chars` after compression.

## Constraints

- `1 <= chars.length <= 2000`
- `chars[i]` is a lowercase English letter, uppercase English letter, digit, or symbol.

## Example

```bash
# Sample Input
["a","a","b","b","c","c","c"]

# Sample Output
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
```
