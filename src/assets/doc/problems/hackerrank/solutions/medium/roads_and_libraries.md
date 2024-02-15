# Roads and Libraries

## Intuition

The problem requires finding the minimum cost to provide libraries and roads to all cities in a given network of cities. If the cost of building a library is less than or equal to the cost of building a road, it's more efficient to build a library in each city. Otherwise, the optimal strategy is to build libraries in isolated cities and roads to connect them.

## Approach

1. If the cost of building a library (`c_lib`) is less than or equal to the cost of building a road (`c_road`), build a library in each city. Return the total cost, which is the number of cities multiplied by the cost of building a library (`n * c_lib`).
2. If the cost of building a library is greater than the cost of building a road, construct an adjacency list to represent the network of cities.
3. Use Depth-First Search (DFS) to traverse the network of cities, identifying connected components.
4. For each connected component, build a library in one city and roads to connect all other cities in the component. Count the number of roads needed in each component.
5. Compute the total cost by summing up the cost of building libraries and roads.

## Complexity

- Time complexity: `O(V + E)`

  - Constructing the adjacency list: `O(E)`, where `E` is the number of roads.
  - DFS traversal: `O(V + E)`, where `V` is the number of cities and `E` is the number of roads.

- Space complexity: `O(V + E)`
  - Adjacency list: `O(V + E)`, where `V` is the number of cities and `E` is the number of roads.
  - Boolean array for visited nodes: `O(V)`.

## Code

```java
class Result {
    public static long roadsAndLibraries(int n, int c_lib, int c_road, List<List<Integer>> cities) {
        if (c_lib <= c_road) return (long) n * c_lib;

        List<List<Integer>> adjacencyList = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            adjacencyList.add(new ArrayList<>());
        }

        for (List<Integer> road : cities) {
            int u = road.get(0);
            int v = road.get(1);
            adjacencyList.get(u).add(v);
            adjacencyList.get(v).add(u);
        }

        boolean[] visited = new boolean[n + 1];
        long totalCost = 0;

        for (int i = 1; i <= n; i++) {
            if (!visited[i]) {
                totalCost += c_lib;

                totalCost += (dfs(adjacencyList, i, visited) - 1) * c_road;
            }
        }

        return totalCost;
    }

    private static int dfs(List<List<Integer>> adjacencyList, int node, boolean[] visited) {
        visited[node] = true;
        int componentSize = 1;

        for (int neighbor : adjacencyList.get(node)) {
            if (!visited[neighbor]) componentSize += dfs(adjacencyList, neighbor, visited);
        }

        return componentSize;
    }
}
```
