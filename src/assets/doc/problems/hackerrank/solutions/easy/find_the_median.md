# Find the Median

## Intuition

The intuition behind this approach seems to be to sort the given list of integers in ascending order, then find the median value. Sorting the list allows us to easily determine the median by finding the middle element or the average of the two middle elements in the case of an even number of elements.

## Approach

1. Sort the input list of integers using the `Collections.sort()` method, which sorts the list in ascending order.
2. Determine the index of the median element by taking the size of the list divided by `2`. If the list has an odd number of elements, this will give the index of the middle element. If it has an even number of elements, this will give the index of the first of the two middle elements.
3. Return the element at the calculated index as the median value.

## Complexity

- Time complexity: Overall, the time complexity is dominated by the sorting step, so it remains `O(n * log (n))`

  - Sorting the list takes `O(n * log (n))` time complexity using `Collections.sort()`, where n is the number of elements in the list.
  - Determining the index of the median takes `O(1)` time complexity.

- Space complexity: `O(1)`, as we only use a constant amount of extra space regardless of the input size.
  - Sorting the list in place doesn't incur additional space complexity, as it operates on the input list itself.
  - Determining the index of the median also takes constant space.

## Code

```java
class Result {
    public static int findMedian(List<Integer> arr) {
        Collections.sort(arr);
        int indexMedian = Math.round(arr.size() / 2);
        return arr.get(indexMedian);
    }
}
```
