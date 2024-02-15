# Breadth First Search: Shortest Reach

## Intuition

The problem seems to be about performing a Breadth First Search (BFS) traversal on a graph represented as an adjacency list. The goal is to find the shortest distances from a given source node `s` to all other nodes in the graph, considering edge weights of `6` for each edge.

## Approach

1. Initialize an `ArrayList` out to store the distances from the source node to all other nodes, initially filled with `-1` to indicate unreachable nodes.
2. Create an `ArrayList` `graph` to represent the adjacency list of the graph.
3. Populate the adjacency list by iterating over the provided edges and adding each edge to the appropriate nodes.
4. Start BFS from the source node `s`.
5. At each level of the BFS traversal, update the distances in the `out` list.
6. Finally, remove the distance to the source node `s` from the output list and return it.

## Complexity

- Time complexity: `O(n + m)`

  - Constructing the adjacency list: `O(m)`, where `m` is the number of edges.
  - BFS traversal: `O(n + m)`, where `n` is the number of nodes and `m` is the number of edges.

- Space complexity: `O(n + m)`
  - The space required for the output list `out` is `O(n)`.
  - The space required for the adjacency list `graph` is `O(n + m)`.
  - The space required for the queue `q` during BFS traversal is `O(n)`.

## Code

```java
class Result {
    public static List<Integer> bfs(int n, int m, List<List<Integer>> edges, int s) {
        List<Integer> out = new ArrayList<Integer>(n);
        List<HashSet<Integer>> graph = new ArrayList<>(n);

        // Initialize
        for(int i = 0; i < n; i++){
            out.add(-1);
            graph.add(new HashSet<>());
        }

        // Assign edges to each node.
        for (List<Integer> edge : edges) {
            int a = edge.get(0) - 1;
            int b = edge.get(1) - 1;
            graph.get(a).add(b);
            graph.get(b).add(a);
        }

        Queue<Integer> q = new ArrayDeque<Integer>();
        q.add(s - 1);

        int breadth;
        int distance = 0;
        while (!q.isEmpty()) {
            breadth = q.size();
            distance += 6;
            // Iterate each node of the queue
            for (int i = 0; i < breadth; i++) {
                int node = q.poll();
                HashSet<Integer> hs = graph.get(node);
                // Iterate a specific node after removing it from the queue
                for (int linkedNode : hs) {
                    if (out.get(linkedNode) != -1) continue;
                    q.add(linkedNode);
                    out.set(linkedNode, distance);
                }
            }
        }

        out.remove(s - 1);
        return out;
    }
}
```
