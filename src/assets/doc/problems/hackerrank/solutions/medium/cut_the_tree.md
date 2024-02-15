# Cut the Tree

## Intuition

The problem seems to involve finding the minimum difference between two subtrees of a tree. To solve this, we can traverse the tree, calculating the sum of each subtree recursively. Then, for each node, we can compute the difference between the total sum of the tree and twice the sum of each subtree. We need to find the minimum difference encountered during this process.

## Approach

1. Define a `TreeNode` class to represent each node of the tree. This class should contain fields for the node's `value`, `index`, `sum`, and a list of its `children`.
2. Implement a method to build the tree recursively, starting from the root node. This method should calculate the `sum` of each subtree.
3. Implement a method to traverse the tree and find the minimum difference between the total `sum` of the tree and twice the `sum` of each subtree.
4. Initialize a graph to represent the tree using an adjacency list.
5. Traverse the tree to build the tree structure and calculate the `sum` of each subtree.
6. Compute the minimum difference by recursively traversing the tree and comparing the differences at each node.

## Complexity

- Time complexity: `O(N)`, where `N` is the number of nodes in the tree. We traverse each node of the tree once to build it and compute the minimum difference.

- Space complexity: `O(N)`, where `N` is the number of nodes in the tree. The space complexity is dominated by the space used for storing the tree structure and the recursive stack space during traversal.

## Code

```java
class Result {
    static class TreeNode {
        int value;
        int index;
        int sum;
        List<TreeNode> children;

        public TreeNode(int index, int value) {
            this.index = index;
            this.value = value;
            this.children = new ArrayList<>();
            this.sum = value;
        }
    }

    public static int cutTheTree(List<Integer> data, List<List<Integer>> edges) {
        int len = data.size();
        List<Integer>[] graph = new LinkedList[len + 1];
        int[] visited = new int[len + 1];

        for (int i = 1; i <= len; i++) {
            graph[i] = new LinkedList<>();
        }

        for (List<Integer> edge : edges) {
            graph[edge.get(0)].add(edge.get(1));
            graph[edge.get(1)].add(edge.get(0));
        }

        TreeNode root = buildTree(1, data.get(0), graph, data, visited);
        return cut(root, root.sum, Integer.MAX_VALUE);
    }

    private static TreeNode buildTree(int index, int value, List<Integer>[] graph, List<Integer> data, int[] visited) {
        TreeNode node = new TreeNode(index, value);
        visited[index] = 1;

        int childrenSum = 0;

        for (int neighbor : graph[index]) {
            if (visited[neighbor] == 0) {
                TreeNode child = buildTree(neighbor, data.get(neighbor - 1), graph, data, visited);
                node.children.add(child);
                childrenSum += child.sum;
            }
        }

        node.sum += childrenSum;
        return node;
    }

    private static int cut(TreeNode node, int sum, int lastMinDiff) {
        int minDiff = lastMinDiff;

        for (TreeNode child : node.children) {
            int currentNodeSum = child.sum;
            int diff = sum - currentNodeSum * 2;

            if (diff == 0) return 0;

            if (diff > 0) minDiff = Integer.min(minDiff, diff);
            else return cut(child, sum, minDiff);
        }

        return Integer.min(minDiff, Math.abs(sum - node.sum * 2));
    }
}
```
