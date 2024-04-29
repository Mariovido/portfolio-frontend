# 834. Sum of Distances in Tree

## Intuition

The problem seems to involve calculating the sum of distances in a tree from each node to all other nodes. This likely requires traversing the tree and updating counts and distances accordingly.

## Approach

1. **Initialize Data Structures**: Initialize a graph to represent the tree using adjacency lists, an array to store counts for each node, and an array to store results.
2. **Build the Graph**: Populate the graph using the given edges by creating adjacency lists.
3. **Depth-First Search (DFS) 1**: Implement a DFS to calculate counts and distances from each node to its children and update the counts and distances accordingly.
4. **Depth-First Search (DFS) 2**: Perform a second DFS to update distances considering the parent nodes.
5. **Return Results**: Return the array containing the distances from each node to all other nodes.

## Complexity

- Time complexity: `O(n)`

  - Building the graph: `O(n)`, where `n` is the number of nodes.
  - DFS traversal: `O(n)`, where `n` is the number of nodes.

- Space complexity: `O(n)`
  - Storing the graph: `O(n)`
  - Storing counts and results arrays: `O(n)`
  - Stack space for DFS: `O(n)` (in the worst case, the depth of the recursion could be `n`).

## Code

```java
class Solution {
    private Map<Integer, List<Integer>> graph;
    private int[] count;
    private int[] res;

    public int[] sumOfDistancesInTree(int n, int[][] edges) {
        graph = new HashMap<>();
        count = new int[n];
        res = new int[n];
        Arrays.fill(count, 1);

        for (int i = 0; i < n; i++) {
            graph.put(i, new ArrayList<>());
        }

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            graph.get(u).add(v);
            graph.get(v).add(u);
        }

        dfs(0, -1);
        dfs2(0, -1);

        return res;
    }

    private void dfs(int node, int parent) {
        for (int child : graph.get(node)) {
            if (child != parent) {
                dfs(child, node);
                count[node] += count[child];
                res[node] += res[child] + count[child];
            }
        }
    }

    private void dfs2(int node, int parent) {
        for (int child : graph.get(node)) {
            if (child != parent) {
                res[child] = res[node] - count[child] + (count.length - count[child]);
                dfs2(child, node);
            }
        }
    }
}
```
