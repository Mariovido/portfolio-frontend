# Sparse Arrays

## Description

Given a collection of input strings and a collection of query strings, this problem involves determining how many times each query string occurs in the list of input strings. The result is an array of frequencies for each query.

## Function

```java
public static List<Integer> matchingStrings(List<String> strings, List<String> queries) {}
```

## Input Format

- The first line: an integer, `n`, the size of `strings[]` &rarr; `1 <= n <= 1000`.
- Each of the next `n` lines contains a string `strings[i]`.
- The next line: an integer, `q`, the size of `queries[]` &rarr; `1 <= q <= 1000`.
- Each of the next `q` lines contains a string `queries[i]`.

## Output Format

- `List<Integer>`: an array of results for each query.

## Constraints

- `1 <= |strings[i]|, |queries[i]| <= 20`

## Example

```bash
# Sample Input
4
aba
baba
aba
xzxb
3
aba
xzxb
ab

# Sample Output
2
1
0
```
