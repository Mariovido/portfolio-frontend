# 1971. Find if Path Exists in Graph

## Intuition

The problem involves determining whether there exists a valid path from a given source node to a destination node in a graph represented as an adjacency list. We can use depth-first search (DFS) to explore the graph and check if a path exists between the source and destination nodes.

## Approach

1. Create an adjacency list to represent the graph. Each node is mapped to a list of its neighboring nodes.
2. Initialize a set to keep track of visited nodes.
3. Implement a depth-first search (DFS) function that takes the adjacency list, the set of visited nodes, the current node, and the destination node as parameters.
4. In the DFS function:
   - Mark the current node as visited.
   - If the current node is the destination node, return true.
   - Get the list of neighbors of the current node from the adjacency list.
   - Iterate through each neighbor:
     - If the neighbor has not been visited and a path exists from the neighbor to the destination node (recursive call to DFS), return true.
5. If no valid path is found after exploring all neighbors, return false.

## Complexity

- Time complexity: `O(V + E)`, where `V` is the number of vertices and `E` is the number of edges in the graph. This complexity arises from visiting each vertex and edge once during the depth-first search.
- Space complexity: `O(V)`, where `V` is the number of vertices in the graph. This space is used for the adjacency list, visited set, and the recursive call stack during the depth-first search.

## Code

```java
class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        Map<Integer, List<Integer>> adjacencyList = new HashMap<>();

        for (int[] edge : edges) {
            adjacencyList.computeIfAbsent(edge[0], k -> new ArrayList<>()).add(edge[1]);
            adjacencyList.computeIfAbsent(edge[1], k -> new ArrayList<>()).add(edge[0]);
        }

        Set<Integer> visited = new HashSet<>();
        return dfs(adjacencyList, visited, source, destination);
    }

    private boolean dfs(Map<Integer, List<Integer>> adjacencyList, Set<Integer> visited, int current, int destination) {
        visited.add(current);

        if (current == destination) return true;

        List<Integer> neighbors = adjacencyList.getOrDefault(current, Collections.emptyList());
        for (int neighbor : neighbors) {
            if (!visited.contains(neighbor) && dfs(adjacencyList, visited, neighbor, destination)) return true;
        }

        return false;
    }
}
```
