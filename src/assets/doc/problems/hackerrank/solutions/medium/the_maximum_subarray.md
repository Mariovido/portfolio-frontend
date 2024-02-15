# The Maximum Subarray

## Intuition

The problem seems to involve finding the maximum sum of a contiguous subarray and the maximum sum of a non-contiguous (not necessarily contiguous) subarray. We'll need to iterate through the array and keep track of these maximum sums as we traverse the array.

## Approach

We can use dynamic programming to solve this problem efficiently. We'll maintain three variables: `maxSubarraySum`, `currentSubarraySum`, and `maxSubsequenceSum`. We iterate through the array, updating these variables as follows:

- For `currentSubarraySum`, we choose between starting a new subarray with the current element or extending the current subarray.
- We update `maxSubarraySum` with the maximum of the current subarray sum and the overall maximum subarray sum seen so far.
- For `maxSubsequenceSum`, we consider whether adding the current element to the existing sum increases the sum or not, and update accordingly.
- Finally, we return a list containing `maxSubarraySum` and `maxSubsequenceSum`.

## Complexity

- Time complexity: `O(n)` - We iterate through the array once.

- Space complexity: `O(1)` - We only use a constant amount of extra space for variables to keep track of the maximum sums.

## Code

```java
class Result {
    public static List<Integer> maxSubarray(List<Integer> arr) {
        int maxSubarraySum = arr.get(0);
        int currentSubarraySum = arr.get(0);
        int maxSubsequenceSum = arr.get(0);

        for (int i = 1; i < arr.size(); i++) {
            currentSubarraySum = Math.max(arr.get(i), currentSubarraySum + arr.get(i));
            maxSubarraySum = Math.max(maxSubarraySum, currentSubarraySum);
            maxSubsequenceSum = Math.max(maxSubsequenceSum, maxSubsequenceSum + arr.get(i));

            if (arr.get(i) > maxSubsequenceSum) maxSubsequenceSum = arr.get(i);
        }

        return new ArrayList<Integer>(Arrays.asList(maxSubarraySum, maxSubsequenceSum));
    }
}
```
