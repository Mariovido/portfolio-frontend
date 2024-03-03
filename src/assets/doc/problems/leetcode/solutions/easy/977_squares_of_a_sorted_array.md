# 977. Squares of a Sorted Array

## Intuition

The intuition behind this approach is to square each element of the given array, sort the squared values, and then return the sorted array.

## Approach

1. Initialize two pointers, `left` and `right`, pointing to the start and end of the array respectively.
2. Create a result array of the same length as the input array to store the squared values in sorted order.
3. Iterate through the array from the end (`i = n - 1`) to the beginning:
   - Compare the absolute values of the elements at `left` and `right` pointers.
   - Square the larger absolute value and store it in the `result` array at index `i`.
   - Move the corresponding pointer (`left` or `right`) towards the center of the array.
4. Return the sorted array `result`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input array. The algorithm iterates through the array once.

- Space complexity: `O(n)`, where `n` is the length of the input array. The space used by the result array.

## Code

```java
class Solution {
    public int[] sortedSquares(int[] nums) {
        int n = nums.length;

        int left = 0;
        int right = n -1;

        int[] result = new int[n];
        int i = n - 1;
        while (left <= right) {
            if (Math.abs(nums[left]) > Math.abs(nums[right])) result[i--] = (int) Math.pow(nums[left++], 2);
            else result[i--] = (int) Math.pow(nums[right--], 2);
        }

        return result;
    }
}
```
