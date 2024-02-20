# 973. K Closest Points to Origin

## Intuition

The problem seems to require finding the `k` closest points to the origin in a `2D` plane. One way to approach this is to calculate the distance of each point from the origin and then select the `k` closest points. Using a priority queue can help in maintaining the `k` closest points efficiently.

## Approach

1. We use a priority queue to store the points based on their distance from the origin.
2. We iterate through each point in the input array and calculate its distance from the origin using the formula: `sqrt(x^2 + y^2)`.
3. We add each point to the priority queue.
4. While adding points, if the size of the priority queue exceeds `k`, we remove the farthest point (point with the maximum distance from the origin).
5. After iterating through all points, we have the `k` closest points in the priority queue. We extract these points from the priority queue and store them in a `2D` array.
6. Finally, we return the array containing the `k` closest points.

## Complexity

- Time complexity: `O(n * log(k))`

  - Calculating the distance for each point: `O(n)`, where n is the number of points.
  - Adding and removing elements from the priority queue: `O(log(k))` for each operation, and since we perform these operations for each point, the total time complexity becomes `O(n * log(k))`.
  - Constructing the result array: `O(k)`

- Space complexity: `O(k)`
  - We use a priority queue to store at most `k` points, so the space complexity is `O(k)` for the priority queue.
  - Additionally, we use an array of size `k` to store the result.

## Code

```java
class Solution {
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> (b[0] * b[0] + b[1] * b[1]) - (a[0] * a[0] + a[1] * a[1]));

        for (int[] point : points) {
            pq.offer(point);

            if (pq.size() > k) pq.poll();
        }

        int[][] result = new int[k][2];
        int i = 0;
        while (!pq.isEmpty()) {
            result[i++] = pq.poll();
        }

        return result;
    }
}
```
