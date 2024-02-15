# Cut the Tree

## Description

Given an undirected tree with vertices numbered from `1` to `n` and associated data values, find the minimum absolute difference in tree sums after cutting an edge.

## Function

```java
public static int cutTheTree(List<Integer> data, List<List<Integer>> edges) {}
```

## Input Format

- The first line: an integer `n`, the number of vertices in the tree &rarr; `3 <= n <= 10^5`.
- The second line: `n` space-separated integers, representing node values `data[u]` &rarr; `1 <= data[u] <= 1001`.
- The following `n - 1` lines: two space-separated integers `u` and `v`, representing an edge between nodes `u` and `v` in the tree.

## Output Format

- An integer, the minimum achievable absolute difference of tree sums.

## Constraints

- `3 <= n <= 10^5`
- `1 <= data[u] <= 1001`

## Example

```bash
# Sample Input
6
100 200 100 500 100 600
1 2
2 3
2 5
4 5
5 6

# Sample Output
400
```
