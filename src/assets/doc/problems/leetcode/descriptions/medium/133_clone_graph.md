# 133. Clone Graph

## Description

Given a reference of a node in a connected undirected graph, this problem involves returning a deep copy (clone) of the graph. Each node in the graph contains a value (int) and a list (`List[Node]`) of its neighbors.

## Function

```java
public Node cloneGraph(Node node) {}
```

## Input Format

- The input represents the adjacency list of the graph, where each element of the list contains the index of the node and its neighbors.
- An adjacency list is used to represent the graph, where each list describes the set of neighbors of a node in the graph.

## Output Format

- The function returns the reference to the cloned graph.

## Constraints

- The number of nodes in the graph is in the range `[0, 100]`.
- `1 <= Node.val <= 100`
- `Node.val` is unique for each node.
- There are no repeated edges and no self-loops in the graph.
- The graph is connected, and all nodes can be visited starting from the given node.

## Example

```bash
# Sample Input
adjList = [[2,4],[1,3],[2,4],[1,3]]

# Sample Output
[[2,4],[1,3],[2,4],[1,3]]
```
