# 133. Clone Graph

## Intuition

The given problem involves cloning a graph. The algorithm here uses Depth-First Search (DFS) to traverse the original graph and create a deep copy of it.

## Approach

1. Initialize a `HashMap` named `visited` to keep track of visited nodes and their corresponding clones.
2. Implement a method `cloneGraph` which serves as the entry point for cloning the graph. It calls the dfs method.
3. Define a private recursive method `dfs` which takes a `Node` as input and returns its clone.
4. Base cases:
   - If the current `node` is `null`, return `null`.
   - If the current `node` is already visited, return its clone from the `visited` map.
5. Create a `clone` of the current `node`.
6. Put the current `node` and its `clone` into the `visited` map.
7. Recursively `clone` the neighbors of the current `node` using DFS and add them to the clone's list of neighbors.
8. Return the `clone` of the current `node`.

## Complexity

- Time complexity: `O(V + E)`, where `V` is the number of vertices (nodes) and `E` is the number of edges in the graph. The algorithm traverses each node and each edge exactly once.

- Space complexity: `O(V)`, where `V` is the number of vertices (nodes) in the graph. The space is used for the `visited` map, which can contain at most `V` entries, and the stack space for the DFS recursion, which can go as deep as the number of vertices.

## Code

```java
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
    Map<Node, Node> visited = new HashMap<>();

    public Node cloneGraph(Node node) {
        return dfs(node);
    }

    private Node dfs(Node node) {
        if (node == null) return node;
        if (visited.containsKey(node)) return visited.get(node);

        Node clone = new Node(node.val);
        visited.put(node, clone);

        for (Node nb : node.neighbors) {
            clone.neighbors.add(dfs(nb));
        }

        return clone;
    }
}
```
