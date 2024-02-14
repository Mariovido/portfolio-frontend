# Dynamic Array

## Description

This problem involves performing dynamic array operations on a `2`-dimensional array `arr`. Two types of queries are given, and the results are calculated based on specified rules. The goal is to update and retrieve values from the array.

## Function

```java
public static List<Integer> dynamicArray(int n, List<List<Integer>> queries) {}
```

## Input Format

- The first line: two space-separated integers, `n` (size of `arr`) and `q` (number of queries).
- Each of the `q` subsequent lines contains a query string, `queries[i]`.

## Output Format

- An array of integers representing the results of each type `2` query in the order they are presented.

#### Constraints

- `1 <= n, q <= 10^5`
- `0 <= x, y <= 10^9`
- It is guaranteed that query type `2` will never query an empty array or index.

## Example

```bash
# Sample Input
2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1

# Sample Output
7
3
```
