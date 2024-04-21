# 1971. Find if Path Exists in Graph

## Description

Given a bi-directional graph with `n` vertices labeled from `0` to `n−1`, represented by a `2`D integer array `edges`, this problem involves determining if a valid path exists from vertex `source` to vertex `destination`. Each vertex pair is connected by at most one edge, and no vertex has an edge to itself.

## Function

```java
public boolean validPath(int n, int[][] edges, int source, int destination) {}
```

## Input Format

- An integer `n`, representing the number of vertices &rarr; `1 <= n <= 2 * 10^5`.
- A `2`D integer array edges, where `edges[i] = [ui, vi]` denotes a bi-directional edge between vertex `ui` and vertex `vi`.
- Integers `source` and `destination`, representing the source and destination vertices respectively &rarr; `0 <= source, destination <= n - 1`.

## Output Format

- A boolean value: `true` if there is a valid path from `source` to `destination`, `false` otherwise.

## Constraints

- `1 <= n <= 2 * 10^5`
- `0 <= edges.length <= 2 * 10^5`
- `edges[i].length == 2`
- `0 <= ui, vi <= n - 1`, `ui != vi`
- `0 <= source, destination <= n − 1`
- No duplicate edges
- No self edges

## Example

```bash
# Sample Input
n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2

# Sample Output
true
```
