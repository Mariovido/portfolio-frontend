# Components in a graph

## Intuition

The problem involves finding the sizes of connected components in an undirected graph represented by a list of edges. To solve this, we can perform a Depth-First Search (DFS) traversal of the graph, marking each visited vertex and counting the size of each connected component.

## Approach

1. Create a `Graph` class to represent the graph using an adjacency list. Initialize the adjacency list with the given number of vertices.
2. Implement a method to add edges to the graph by adding vertices to each other's adjacency lists.
3. Create a `ConnectedComponents` (`CC`) class to perform DFS traversal and find connected components in the graph.
4. Initialize a boolean array to mark visited vertices and iterate through all vertices. If a vertex is not marked, perform DFS traversal from that vertex.
5. During DFS traversal, mark each visited vertex and count the size of the connected component.
6. Update the minimum and maximum component sizes accordingly during traversal.
7. After traversal, return the minimum and maximum component sizes.

## Complexity

- Time complexity: `O(V + E)`

  - Traversing all vertices and edges takes `O(V + E)` time, where `V` is the number of vertices and `E` is the number of edges.
  - Performing DFS on each unmarked vertex takes `O(V + E)` time in total.

- Space complexity: `O(V + E)`
  - The space complexity mainly depends on the size of the graph and auxiliary data structures used during traversal.
  - The space complexity for storing the graph is `O(V + E)`.
  - The space complexity for the boolean array to mark visited vertices is `O(V)`.
  - Additional space complexity for other variables and recursion stack during DFS traversal is also `O(V)`.

## Code

```java
class Result {
    static class Graph {
        private final int vertices;
        private List<Integer>[] adjacencyList;

        public Graph(int vertices) {
            this.vertices = vertices;
            adjacencyList = (List<Integer>[]) new List[vertices];
            for (int v = 0; v < vertices; v++) {
                adjacencyList[v] = new ArrayList<>();
            }
        }

        public void addEdge(int v, int w) {
            adjacencyList[v].add(w);
            adjacencyList[w].add(v);
        }

        public int getVertices() {
            return vertices;
        }

        public Iterable<Integer> getAdjacentVertices(int v) {
            return adjacencyList[v];
        }
    }

    static class CC {
        private boolean[] marked;
        private int count = 0;
        private int minComponentSize = Integer.MAX_VALUE;
        private int maxComponentSize = 1;

        public CC(Graph graph) {
            marked = new boolean[graph.getVertices()];
            for (int v = 0; v < graph.getVertices(); v++) {
                if (!marked[v]) {
                    count = 0;
                    dfs(graph, v);
                    updateComponentSize();
                }
            }
        }

        private void dfs(Graph graph, int v) {
            marked[v] = true;
            count++;

            for (int w : graph.getAdjacentVertices(v)) {
                if (!marked[w]) dfs(graph, w);
            }
        }

        private void updateComponentSize() {
            if (minComponentSize > count && count > 1) minComponentSize = count;
            if (maxComponentSize < count) maxComponentSize = count;
        }

        public int getMaxComponentSize() {
            return maxComponentSize;
        }

        public int getMinComponentSize() {
            return minComponentSize;
        }
    }

    public static List<Integer> componentsInGraph(List<List<Integer>> gb) {
        int edges = gb.size();
        Graph graph = new Graph(2 * edges + 1);

        for (List<Integer> edge : gb) {
            graph.addEdge(edge.get(0), edge.get(1));
        }

        CC connectedComponents = new CC(graph);

        List<Integer> result = new ArrayList<>();
        result.add(connectedComponents.getMinComponentSize());
        result.add(connectedComponents.getMaxComponentSize());

        return result;
    }
}
```
