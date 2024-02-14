# Jesse and Cookies

## Intuition

The problem seems to involve using a priority queue to efficiently manipulate the cookies' sweetness levels to meet a certain threshold. It appears that the approach involves continuously combining the sweetness of two least sweet cookies until the threshold is reached or there are no more possible combinations.

## Approach

1. Initialize a priority queue with the sweetness levels of the given cookies.
2. Continuously combine the sweetness of the two least sweet cookies until either the threshold sweetness level is reached or there are no more possible combinations.
3. Keep track of the number of `operations` required to achieve the desired sweetness level.
4. Return the number of `operations` if the threshold sweetness level is reached; otherwise, return `-1` indicating it's not possible to achieve the desired sweetness level.

## Complexity

- Time complexity: `O(n * log(n))` + `O(n * log(n))` = `O(n * log(n))`

  - Building the priority queue: `O(n * log(n))`, where `n` is the number of cookies.
  - Performing operations on the priority queue: `O(log(n))` per operation, and potentially up to `n / 2` operations.

- Space complexity: `O(n)`
  - Space required for the priority queue: `O(n)`, where `n` is the number of cookies.

## Code

```java
class Result {
    public static int cookies(int k, List<Integer> A) {
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>(A);

        int operations = 0;
        while(priorityQueue.peek() < k && priorityQueue.size() > 1) {
            int a = priorityQueue.poll();
            int b = priorityQueue.poll();
            int sum = a + (2 * b);
            priorityQueue.add(sum);
            operations++;
        }

        return priorityQueue.peek() >= k ? operations : -1;
    }
}
```
