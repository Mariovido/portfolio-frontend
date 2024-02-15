# Max Min

## Intuition

The problem seems to ask for finding the minimum unfairness among all possible subsets of size `k` in the given list. Unfairness in this context is defined as the difference between the maximum and minimum elements in a subset. One approach could be to sort the list and then iterate through it, calculating the unfairness for each subset of size `k`.

## Approach

1. Sort the given list of integers in ascending order.
2. Initialize a variable `minUnfairness` to store the minimum unfairness encountered so far. Set it to the maximum possible integer value initially.
3. Iterate through the sorted list from index `0` to `arr.size() - k`. For each index `i`, calculate the unfairness of the subset from `arr[i]` to `arr[i + k - 1]` (inclusive) by taking the difference between the maximum and minimum elements in that subset.
4. Update `minUnfairness` to the minimum of its current value and the unfairness calculated in the previous step.
5. After the loop, `minUnfairness` will contain the minimum unfairness among all subsets of size `k`.
6. Return `minUnfairness`.

## Complexity

- Time complexity: `O(n * log(n))`

  - Sorting the list takes `O(n * log(n))` time.
  - Iterating through the list takes `O(n)` time.

- Space complexity: `O(1)` since we are not using any additional space proportional to the size of the input list.

## Code

```java
class Result {
    public static int maxMin(int k, List<Integer> arr) {
        Collections.sort(arr);

        int minUnfairness = Integer.MAX_VALUE;
        for (int i = 0; i <= arr.size() - k; i++) {
            int currentUnfairness = arr.get(i + k - 1) - arr.get(i);
            minUnfairness = Math.min(minUnfairness, currentUnfairness);
        }

        return minUnfairness;
    }
}
```
