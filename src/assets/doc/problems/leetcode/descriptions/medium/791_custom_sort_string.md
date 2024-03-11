# 791. Custom Sort String

## Description

Given two strings `order` and `s`, where all characters in `order` are unique and represent a custom sorting order, the problem involves permuting the characters of `s` to match the order specified by `order`. Any permutation of `s` that satisfies the custom order should be returned.

## Function

```java
public String customSortString(String order, String s) {}
```

## Input Format

- `order`: A string representing the custom order of characters &rarr; `1 <= order.length <= 26`.
- `s`: A string to be permuted &rarr; `1 <= s.length <= 200`.

## Output Format

- A string representing any permutation of `s` that satisfies the custom order specified by `order`.

## Constraints

- `1 <= order.length <= 26`
- `1 <= s.length <= 200`
- `order` and `s` consist of lowercase English letters.
- All characters in `order` are unique.

## Example

```bash
# Sample Input
String order = "cba";
String s = "abcd";

# Sample Output
"cbad"
```
