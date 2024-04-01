# 2962. Count Subarrays Where Max Element Appears at Least K Times

## Intuition

The problem involves counting the number of subarrays in an array where the maximum element in the subarray occurs exactly `k` times. To solve this, we can iterate through the array, keeping track of the maximum element encountered so far. Then, we use two pointers to traverse the array and count the number of subarrays satisfying the condition.

## Approach

1. Initialize variables `maxNum` to store the maximum element in the array, `count` to count occurrences of `maxNum`, `left` and `right` pointers for traversal, and ans to store the final `count`.
2. Find the maximum element `maxNum` in the array.
3. Iterate through the array using the `right` pointer:
   - If `nums[right]` is equal to `maxNum`, increment `count`.
   - Move the `right` pointer to the next element.
4. While the `right` pointer is less than the array length or `left` pointer is greater than `right`:
   - If `count` is greater than or equal to `k`:
     - If `nums[left]` is equal to `maxNum`, decrement `count`.
     - Increment the `left` pointer.
     - Add the count of subarrays satisfying the condition `(nums.length - right)` to `ans`.
5. Return `ans`, which represents the total count of subarrays.

## Complexity

- Time complexity: `O(n)`, where `n` is the size of the input array nums. The algorithm iterates through the array once.

- Space complexity: `O(1)`, as the extra space used is independent of the size of the input array.

## Code

```java
class Solution {
    public long countSubarrays(int[] nums, int k) {
        long maxNum = Long.MIN_VALUE;
        long count = 0;
        long left = 0;
        long right = 0;
        long ans = 0;

        for (int num : nums) {
            maxNum = Math.max(maxNum, num);
        }

        while (right < nums.length || left > right) {
            if (right < nums.length && nums[(int)right] == maxNum) count++;

            while (count >= k) {
                if (nums[(int)left] == maxNum) count--;

                left++;
                ans += nums.length - right;
            }

            right++;
        }

        return ans;
    }
}
```
