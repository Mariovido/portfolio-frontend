# 834. Sum of Distances in Tree

## Description

Given an undirected connected tree with `n` nodes labeled from `0` to `n − 1` and `n − 1` edges, this problem involves calculating the sum of distances between each node in the tree and all other nodes.

## Function

```java
public int[] sumOfDistancesInTree(int n, int[][] edges) {}
```

## Input Format

- The first line: an integer `n`, representing the number of nodes in the tree &rarr; `1 <= n <= 3 * 10^4`
- The second line onwards: `n − 1` lines, each representing an edge in the tree as `[a_{i}, b_{i}]` &rarr; `0 <= a_{i}, b_{i} < n`, `a_{i} != b_{i}`

## Output Format

- An array `answer` of length `n`, where `answer[i]` represents the sum of distances between the `i^{th}` node in the tree and all other nodes.

## Constraints

- `1 <= n <= 3 * 10^4`
- `edges.length = n − 1`
- `edges[i].length = 2`
- `0 <= a_{i}, b_{i} < n`
- `a_{i} != b_{i}`
- The given input represents a valid tree.

## Example

```bash
# Sample Input
n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]

# Sample Output
[8,12,6,10,10,10]
```
