# Array Manipulation

## Intuition

The problem can be solved efficiently by tracking the changes to elements of an array instead of updating each element individually. Given a list of queries, where each query consists of three integers `(a, b, k)`, representing an update operation on a range `[a, b]` by adding `k` to each element in that range, we need to find the maximum value in the resulting array after applying all the queries.

## Approach

1. Initialize a `TreeMap` to track the changes to elements in the array. `TreeMap` is used to automatically sort the keys, which represent the indices of the array.
2. Iterate through the list of `queries`.
3. For each query `(a, b, k)`:
   - Add `k` to the value at index a in the `TreeMap`.
   - Subtract `k` from the value at index `(b + 1)` in the `TreeMap`. This marks the end of the range `[a, b]` where `k` should no longer be added.
4. After processing all `queries`, iterate through the `TreeMap` and accumulate the changes to get the final values of each element.
5. While iterating, keep track of the maximum value encountered.
6. Return the maximum value.

## Complexity

- Time complexity: `O(n * log(n))`, where `n` is the number of queries. The time complexity is dominated by the `TreeMap` operations, which have a time complexity of `O(log(n))` for each insertion or retrieval.

- Space complexity: `O(n)`, where `n` is the number of queries. The `TreeMap` requires `O(n)` space to store the changes made to the array elements.

## Code

```java
class Result {
    public static long arrayManipulation(int n, List<List<Integer>> queries) {
        Map<Integer, Long> mapSum = new TreeMap<>();

        for (List<Integer> list : queries) {
            int a = list.get(0);
            int b = list.get(1);
            long k = list.get(2);

            mapSum.put(a, mapSum.getOrDefault(a, 0L) + k);
            mapSum.put(b + 1, mapSum.getOrDefault(b + 1, 0L) - k);
        }

        long max = 0L;
        long current = 0L;
        for (long value : mapSum.values()) {
            current += value;
            max = Math.max(max, current);
        }

        return max;
    }
}
```
