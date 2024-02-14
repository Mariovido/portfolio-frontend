# No Prefix Set

## Description

Given a list of strings containing only lowercase letters from `a` to `j`, the problem is to determine whether the set of strings is a `GOOD SET`. A set is considered `GOOD` if no string in the set is a prefix of another string. If a prefix is found, print `BAD SET` followed by the problematic string; otherwise, print `GOOD SET`.

## Function

```java
public static void noPrefix(List<String> words) {}
```

## Input Format

- The first line: an integer, `n`, the size of `words[]` &rarr; `1 <= n <= 10^5`.
- The next `n` lines each contain a string, `words[i]` &rarr; `1 <= the length of words[i] <= 60`.
- All letters in `words[i]` are in the range `a` through `j`, inclusive.

## Output Format

- Either `GOOD SET` or `BAD SET` on one line, followed by the problematic word on the next line. No return value is expected.

## Constraints

- `1 <= n <= 10^5`
- `1 <= the length of words[i] <= 60`
- All letters in `words[i]` are in the range `a` through `j`, inclusive.

## Example

```bash
# Sample Input
7
aab
defgab
abcde
aabcde
cedaaa
bbbbbbbbbb
jabjjjad

# Sample Output
BAD SET
aabcde
```
