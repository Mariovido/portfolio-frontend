# Pangrams

## Description

Given a sentence, Roy wants to determine whether it is a pangram. Pangrams are sentences constructed using all letters of the alphabet at least once. Roy wants to automate this process for efficiency.

## Function

```java
public static String pangrams(String s) {}
```

## Input Format

- A single line containing the sentence `s`.

## Output Format

- Print `pangram` if s is a pangram, otherwise print `not pangram`.

## Constraints

- The length of `s` can be at most `10^3` &rarr; `1 <= |s| <= 10^3`.
- `s` can contain spaces, lowercase, and uppercase letters. Uppercase and lowercase of the same letter are considered the same.

## Example

```bash
# Sample Input
We promptly judged antique ivory buckles for the next prize

# Sample Output
pangram
```
