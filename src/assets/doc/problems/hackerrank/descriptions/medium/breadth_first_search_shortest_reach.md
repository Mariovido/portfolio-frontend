# Breadth First Search: Shortest Reach

## Description

Given an undirected graph where each edge weighs `6` units, this problem involves determining and reporting the shortest distance from a given starting position to each of the other nodes using the `breadth-first search algorithm (BFS)`. The goal is to return an array of distances from the start node in node number order, considering that if a node is unreachable, the distance is `-1`.

## Function

```java
public static List<Integer> bfs(int n, int m, List<List<Integer>> edges, int s) {}
```

## Input Format

- The first line: an integer `q`, the number of queries.
- For each query:
  - The first line: two space-separated integers `n` and `m`, the number of nodes and edges in the graph.
  - `m` subsequent lines, each containing two space-separated integers `u` and `v`, describing an edge between nodes `u` and `v`.
  - The last line: a single integer `s`, the node number to start traversals from.

## Output Format

- An array of distances to nodes in increasing node number order, not including the start node (`-1` if a node is not reachable).

## Constraints

- `1 <= q <= 10`
- `2 <= n <= 10000`
- `1 <= m <= (n * (n - 1)) / 2}`
- `1 <= u, v, s <= n`

## Example

```bash
# Sample Input
2
4 2
1 2
1 3
1
3 1
2 3
2

# Sample Output
6 6 -1
-1 6
```
