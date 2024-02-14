# Queries with Fixed Length

## Intuition

The problem involves finding the minimum of the maximum elements in all subarrays of length `d` in a given array. We can approach this problem by iterating through the array and maintaining a deque to keep track of potential maximum elements. By using a sliding window technique, we can efficiently find the maximum elements in subarrays of length `d`.

## Approach

1. Create a `result` list to store the minimum of maximum elements for each query.
2. Iterate through each query `d`:
   - Call the `findMaxInSubarrays` method to find the maximum elements in subarrays of length `d`.
   - Find the minimum of these maximum elements using `Collections.min`.
   - Add the minimum to the `result` list.
3. Return the `result` list.

The `findMaxInSubarrays` method:

1. Create an empty `deque` to store indices of elements.
2. Iterate through the array:
   - Remove indices from the front of the `deque` that are out of the current window `(i - d + 1)`.
   - Remove indices from the back of the `deque` if they correspond to elements smaller than the current element.
   - Add the current index to the `deque`.
   - If the current index is equal to or greater than `d - 1`, add the maximum element in the current window to the `result` list.
3. Return the `result` list.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the array. Both the `solve` and `findMaxInSubarrays` methods iterate through the array once.

- Space complexity: `O(n)`, where `n` is the length of the array. The space complexity is dominated by the deque used to store indices.

## Code

```java
class Result {
    public static List<Integer> solve(List<Integer> arr, List<Integer> queries) {
        List<Integer> result = new ArrayList<>();

        for (int d : queries) {
            List<Integer> maxInSubarrays = findMaxInSubarrays(arr, d);
            int minMax = Collections.min(maxInSubarrays);
            result.add(minMax);
        }

        return result;
    }

    private static List<Integer> findMaxInSubarrays(List<Integer> arr, int d) {
        List<Integer> result = new ArrayList<>();
        Deque<Integer> deque = new LinkedList<>();

        for (int i = 0; i < arr.size(); i++) {
            while (!deque.isEmpty() && deque.peekFirst() < i - d + 1) {
                deque.pollFirst();
            }

            while (!deque.isEmpty() && arr.get(deque.peekLast()) < arr.get(i)) {
                deque.pollLast();
            }

            deque.offerLast(i);

            if (i >= d - 1) result.add(arr.get(deque.peekFirst()));
        }

        return result;
    }
}
```
