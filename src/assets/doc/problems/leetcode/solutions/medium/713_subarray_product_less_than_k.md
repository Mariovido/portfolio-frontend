# 713. Subarray Product Less Than K

## Intuition

The problem appears to involve counting the number of contiguous subarrays whose product is less than a given threshold `k`. We can iterate through the array while maintaining a product and sliding window to efficiently count such subarrays.

## Approach

1. Initialize variables: `count` to store the number of valid subarrays, `product` to keep track of the product of elements within the window, and `left` to represent the left boundary of the sliding window.
2. Iterate through the array using the `right` pointer:
   - Multiply the `product` by the element at the `right` index.
   - If the product becomes greater than or equal to `k`, adjust the window by dividing the product by the element at the `left` index and incrementing left until the product is less than `k`.
   - Add the size of the current subarray to `count` (`right - left + 1`).
3. Return the final `count`.

## Complexity

- Time complexity:`O(n)` - The algorithm iterates through the array once.

- Space complexity: `O(1)` - The algorithm uses constant space for variables regardless of the input size.

## Code

```java
class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        if (k <= 1) return 0;

        int count = 0;
        int product = 1;
        int left = 0;
        for (int right = 0; right < nums.length; right++) {
            product *= nums[right];

            while (product >= k) {
                product /= nums[left];
                left++;
            }

            count += right - left + 1;
        }

        return count;
    }
}
```
