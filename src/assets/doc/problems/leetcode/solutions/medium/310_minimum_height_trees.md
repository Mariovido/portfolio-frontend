# 310. Minimum Height Trees

## Intuition

When tasked with finding the minimum height trees (MHTs) in an undirected graph, the problem can be understood as a centrality issue. The central nodes are generally the best candidates for roots of MHTs. Specifically, in trees, the nodes farthest from the periphery (i.e., from the leaves) tend to create the shortest height when used as roots. This typically translates to the concept of finding the "centroid" of the tree. A practical approach to locate these centroids involves peeling away the outer layers of the tree, starting from the leaves, until we reach the core or center.

## Approach

1. **Initial Setup**:
   - Create an adjacency list for the graph using the input number of nodes (`n`) and edges.
   - If there's only one node (`n == 1`), it's trivially the root of an MHT, so return it immediately.
2. **Identify All Leaves**:
   - A leaf is any node with exactly one connection. Initialize a list of leaves for the first iteration.
3. **Trimming Leaves**:
   - Iteratively remove the leaves until we're left with at most two nodes. These remaining nodes will be the centroids of the tree.
   - For each batch of leaves removed, update the degrees of connected nodes and identify new leaves formed from this process.
4. **Result Compilation**:
   - After the loop concludes (i.e., when we have two or fewer nodes left due to the trimming process), whatever nodes remain are the roots of the MHTs.
   - Return these remaining nodes as they represent the centroids.

## Complexity

- Time complexity: `O(n)` because each edge and node is visited a constant number of times—specifically, each node is only ever a leaf once, and each edge is considered twice.

- Space complexity: `O(n)`, accounting for the storage of the graph's adjacency list and the auxiliary data structures used to manage leaves and intermediate states.

## Code

```java
class Solution {
    public List<Integer> findMinHeightTrees(int n, int[][] edges) {
        if (n == 1) return Collections.singletonList(0);

        List<Integer>[] adj = new List[n];
        for (int i = 0; i < n; ++i) {
            adj[i] = new ArrayList<>();
        }

        for (int[] edge : edges) {
            adj[edge[0]].add(edge[1]);
            adj[edge[1]].add(edge[0]);
        }

        List<Integer> leaves = new ArrayList<>();
        for (int i = 0; i < n; ++i) {
            if (adj[i].size() == 1) leaves.add(i);
        }

        while (n > 2) {
            n -= leaves.size();

            List<Integer> newLeaves = new ArrayList<>();
            for (int i : leaves) {
                int j = adj[i].remove(0);
                adj[j].remove(Integer.valueOf(i));

                if (adj[j].size() == 1) newLeaves.add(j);
            }

            leaves = newLeaves;
        }

        return leaves;
    }
}
```
