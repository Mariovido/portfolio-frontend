# Mini-Max Sum

## Intuition

The problem requires finding the minimum and maximum possible sums that can be obtained by adding four out of five integers from a given list. To achieve this, we can first sort the list in ascending order. Then, we can sum the first four smallest integers to get the minimum sum and the last four largest integers to get the maximum sum.

## Approach

1. Sort the given list of integers in ascending order.
2. Initialize two variables, `minSum` and `maxSum`, to keep track of the minimum and maximum sums respectively.
3. Iterate over the first four integers of the sorted list, adding them to `minSum`.
4. Iterate over the last four integers of the sorted list, adding them to `maxSum`.
5. Print the values of `minSum` and `maxSum` separated by a space.

## Complexity

- Time complexity: Sorting the list takes `O(n * log(n)` time complexity, where `n` is the number of integers in the list. The iteration over the list takes constant time, `O(1)`. Therefore, the overall time complexity is `O(n * log(n))`.

- Space complexity: We use a constant amount of extra space for storing variables minSum and maxSum. Hence, the space complexity is `O(1)`.

## Code

```java
class Result {
    public static void miniMaxSum(List<Integer> arr) {
        long minSum = 0L;
        long maxSum = 0L;

        Collections.sort(arr);
        for (int i = 0; i < 4; i++) {
            minSum += arr.get(i);
            maxSum += arr.get(arr.size() - i - 1);
        }

        System.out.println(String.format("%d %d", minSum, maxSum));
    }
}
```
