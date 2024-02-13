# Counting Sort 1

## Intuition

The problem appears to be about implementing counting sort. Counting sort is an efficient sorting algorithm that works well when the range of input data is not significantly greater than the number of elements to be sorted. It's based on counting the occurrences of each distinct element in the input array and then placing them in order.

## Approach

The approach here is to use counting sort to sort the given list of integers. We create a `results` list initialized with zeros, where each index represents a possible integer value in the input array. Then, we iterate through the input list to count the occurrences of each unique integer using a `HashSet` to avoid duplicate counting. Finally, we update the `results` list accordingly and return it.

## Complexity

- Time complexity: `O(n + k)`, where `n` is the number of elements in the input list and `k` is the range of the input data. In this case, since the range is fixed at `100`, it simplifies to `O(n)`.

- Space complexity: `O(k)`, where `k` is the range of the input data. In this case, since the range is fixed at `100`, it simplifies to `O(1)` since the space used is independent of the size of the input list.

## Code

```java
class Result {
    public static List<Integer> countingSort(List<Integer> arr) {
        List<Integer> results = new ArrayList<>(Collections.nCopies(100, 0));

        Set<Integer> uniqueNumbers = new HashSet<>(arr);

        for (int number : uniqueNumbers) {
            results.set(number, Collections.frequency(arr, number));
        }

        return results;
    }
}
```
