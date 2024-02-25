# 787. Cheapest Flights Within K Stops

## Intuition

The problem aims to find the cheapest price to reach the destination from the source within a certain number of stops. Utilizing Bellman-Ford's algorithm, we can traverse all possible paths within the specified number of stops and update the cheapest price for each node iteratively.

## Approach

1. Initialize an array `dist` of size `n` to maintain the minimum cost to reach each node. Initialize all elements of `dist` to `Integer.MAX_VALUE` except for the source node, which is set to `0`.
2. Iterate `k + 1` times to account for `k` stops.
3. Create a copy of `dist` to keep track of the updated distances for each iteration.
4. Iterate through the `flights` array. For each `flight`, update the minimum cost to reach the destination node by considering the current minimum cost to reach the source node plus the cost of the flight.
5. Update the original `dist` array with the updated distances after each iteration.
6. Return `-1` if the destination node is unreachable (its cost remains `Integer.MAX_VALUE`), otherwise return the minimum cost to reach the destination node.

## Complexity

- Time complexity: `O(k * |flights|)`

  - The outer loop runs for `k + 1` iterations.
  - The inner loop iterates through each flight in the `flights` array.

- Space complexity: `O(n)`. Additional space is required for the `dist` array of size `n` and the `temp` array used for updating distances.

## Code

```java
class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;

        for (int i = 0; i <= k; i++) {
            int[] temp = Arrays.copyOf(dist, n);

            for (int[] flight : flights) {
                int from = flight[0], to = flight[1], price = flight[2];

                if (dist[from] != Integer.MAX_VALUE && dist[from] + price < temp[to]) temp[to] = dist[from] + price;
            }

            dist = temp;
        }

        return dist[dst] == Integer.MAX_VALUE ? -1 : dist[dst];
    }
}
```
