# 1642. Furthest Building You Can Reach

## Intuition

The problem involves traversing through the buildings represented by `heights` and determining the furthest point that can be reached using a certain number of `bricks` and `ladders`. The intuition here is to use a priority queue to keep track of the height differences between adjacent buildings. By utilizing ladders to bypass larger height differences and using bricks for smaller ones, we aim to maximize the distance covered.

## Approach

1. Initialize a priority queue (`pq`) to store the height differences between adjacent buildings.
2. Traverse through the array of building `heights`.
3. Calculate the height difference between the current building and the next one.
4. If the height difference is positive (i.e., the next building is taller), add it to the priority queue.
5. If the size of the priority queue exceeds the number of available `ladders`, use `bricks` to cover the height difference. Remove the smallest height difference from the priority queue and deduct its value from the available `bricks`.
6. If the remaining `bricks` become negative, return the index of the current building.
7. Continue traversing until the end of the building `heights` array.
8. If traversal completes without running out of `bricks`, return the index of the last building.

## Complexity

- Time complexity: `O(n * log(n))`

  - The main loop iterates through the entire `heights` array once, resulting in a time complexity of `O(n)`, where `n` is the number of buildings.
  - `PriorityQueue` operations (offer, poll) take logarithmic time complexity, which doesn't exceed `O(log(n))` in each iteration.

- Space complexity: `O(n)` due to the priority queue storing at most all the positive height differences between adjacent buildings.

## Code

```java
class Solution {
    public int furthestBuilding(int[] heights, int bricks, int ladders) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for (int i = 0; i < heights.length - 1; i++) {
            int diff = heights[i + 1] - heights[i];

            if (diff > 0) {
                pq.offer(diff);
                if (pq.size() > ladders) {
                    bricks -= pq.poll();
                    if (bricks < 0) return i;
                }
            }
        }

        return heights.length - 1;
    }
}
```
