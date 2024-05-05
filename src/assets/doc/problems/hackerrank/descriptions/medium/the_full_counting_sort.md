# The Full Counting Sort

## Description

This problem involves using a stable counting sort algorithm to sort a list of integer-string pairs. Strings associated with the first half of the list are to be replaced by dashes. The count sort must handle stability, ensuring elements with the same keys appear in the output array in the same order they appeared in the input array.

## Function

```java
public static void countSort(List<List<String>> arr) {}
```

## Input Format

- The first line: an integer, `n`, representing the number of pairs &rarr; `1 <= n <= 1000000`, `n` is even.
- Each subsequent line: two values, `x` and `s`, where `x` is an integer (as a string) and `s` is the associated string.

## Output Format

- A single line with the sorted strings, based on their integer keys, space-separated.

## Constraints

- `1 <= n <= 1000000`
- `n` is even
- `1 <= |s| <= 10`
- `0 <= x < 100`
- `s[i]` consists of characters in the range `ascii[a-z]`

## Example

```bash
# Sample Input
20
0 ab
6 cd
0 ef
6 gh
4 ij
0 ab
6 cd
0 ef
6 gh
0 ij
4 that
3 be
0 to
1 be
5 question
1 or
2 not
4 is
2 to
4 the

# Sample Output
- - - - - to be or not to be - that is the question - - - -
```
