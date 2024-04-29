# 310. Minimum Height Trees

## Description

A Minimum Height Tree (MHT) results from choosing a root node in a tree such that the height of the tree is minimized. The height is defined as the longest path from the root to any leaf. This problem involves finding all nodes that can serve as roots to produce an MHT from a given undirected tree graph.

## Function

```java
public List<Integer> findMinHeightTrees(int n, int[][] edges) {}
```

## Input Format

- An integer `n` which is the number of nodes in the tree.
- An array of `n - 1` edges where each edge `[ai, bi]` represents an undirected edge between nodes `ai` and `bi`.

## Output Format

- A list of all node labels that can be roots of the MHTs.

## Constraints

- `1 <= n <= 20,000`
- `edges.length == n - 1`
- `0 <= ai, bi < n`, where `ai` and `bi` are distinct integers.
- The graph is guaranteed to be a tree with no repeated edges.

## Example

```bash
# Sample Input
n = 4
edges = [[1,0],[1,2],[1,3]]

# Sample Output
[1]
```
