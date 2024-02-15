# Big Sorting

## Description

Given an array of numeric strings representing positive numbers with up to `10^6` digits, this problem involves sorting the array in non-decreasing order of their integer values and returning the sorted array.

## Function

```java
public static List<String> bigSorting(List<String> unsorted) {}
```

## Input Format

- The first line: an integer, `n`, the number of strings in unsorted &rarr; `1 <= n <= 2 * 10^5`.
- Each of the `n` subsequent lines contains an integer string, `unsorted[i]`.

## Output Format

- `List<String>`: the array sorted in numerical order.

## Constraints

- `1 <= n <= 2 * 10^5`
- Each string represents a positive integer.
- There will be no leading zeros.
- The total number of digits across all strings in unsorted is between `1` and `10^6` (inclusive).

## Example

```bash
# Sample Input
6
31415926535897932384626433832795
1
3
10
3
5

# Sample Output
1
3
3
5
10
31415926535897932384626433832795
```
