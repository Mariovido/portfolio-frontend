# 2444. Count Subarrays With Fixed Bounds

## Intuition

The problem involves finding the count of subarrays within an array that contain all elements between two given values, inclusive. My first thought is that we need to track the positions of these bounds (`minK` and `maxK`) in each valid subarray. The challenge is to do this efficiently, considering that the range `[minK, maxK]` and their occurrences within subarrays directly influence the total count.

## Approach

1. Initialize two pointers, `left` and `right`, to traverse the array. These pointers will help in identifying the valid subarrays.
2. Use two variables, `minIndex` and `maxIndex`, to keep track of the latest occurrences of `minK` and `maxK` within the current window defined by `left` and `right`.
3. Iterate through the array using the `right` pointer. For each position:
   - If the current element is between `minK` and `maxK` (inclusive), update `minIndex` or `maxIndex` if it matches either bound.
   - If both `minK` and `maxK` have been encountered in the current window (i.e., their indices are not `-1`), calculate the number of new valid subarrays introduced by this window. This can be done by adding the difference between the smaller of `minIndex` or `maxIndex` and `left`, plus one, to `count`.
   - If the current element is outside the `[minK, maxK]` range, reset the `left` pointer to `right + 1`, and also reset `minIndex` and `maxIndex` to `-1`. This effectively starts a new search for a valid subarray.
4. Increment `right` after each iteration until it reaches the end of the array.
5. Return the total count of valid subarrays found.

## Complexity

- Time complexity: `O(n)`.The algorithm goes through the array once with the `right` pointer, making a single pass and performing constant-time operations within each iteration.

- Space complexity: `O(1)`. Only a fixed number of variables (`left`, `right`, `minIndex`, `maxIndex`, `count`) are used, so the space complexity is constant, not dependent on the input size.

## Code

```java
class Solution {
    public long countSubarrays(int[] nums, int minK, int maxK) {
        long count = 0;
        int left = 0;
        int right = 0;
        long minIndex = -1;
        long maxIndex = -1;

        while (right < nums.length) {
            if (nums[right] >= minK && nums[right] <= maxK) {
                if (nums[right] == minK) minIndex = right;

                if (nums[right] == maxK) maxIndex = right;

                if (minIndex != -1 && maxIndex != -1) count += Math.min(minIndex, maxIndex) - left + 1;
            } else {
                left = right + 1;
                minIndex = -1;
                maxIndex = -1;
            }

            right++;
        }

        return count;
    }
}
```
