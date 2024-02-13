# 42. Trapping Rain Water

## Intuition

The intuition behind this solution is to use two pointers, one starting from the left side of the array and the other starting from the right side. While moving towards the center, calculate the maximum height encountered from the left and the right for each respective pointer. The idea is to trap water between the bars, and the amount of trapped water at each index is determined by the minimum of the left and right maximum heights minus the height of the current bar.

## Approach

1. Initialize variables `result` to store the total trapped water, `leftMax` and `rightMax` to track the maximum heights from the left and right sides, and pointers `left` and `right` starting at the two ends of the array.
2. Use a while loop to iterate until `left` is less than or equal to `right`.
3. Update `leftMax` and `rightMax` at each step by comparing them with the current heights at `left` and `right` respectively.
4. Determine the minimum of `leftMax` and `rightMax`.
5. If `leftMax` is less than `rightMax`, add the difference between `leftMax` and the height at `left` to result and increment `left`. Otherwise, add the difference between `rightMax` and the height at `right` to result and decrement `right`.
6. Continue this process until the pointers meet in the middle of the array.
7. Return the total trapped water stored in the `result` variable.

## Complexity

- Time complexity: `O(n)` - The algorithm iterates through the array once, and at each step, it performs constant time operations.

- Space complexity: `O(1)` - The algorithm uses a constant amount of extra space regardless of the input size, as it only uses a few variables to keep track of the maximum heights and pointers.

## Code

```java
class Solution {
    public int trap(int[] height) {
        int result = 0;

        int leftMax = Integer.MIN_VALUE;
        int rightMax = Integer.MIN_VALUE;

        int left = 0;
        int right = height.length - 1;

        while (left <= right) {
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);

            if (leftMax < rightMax) result += leftMax - height[left++];
            else result += rightMax - height[right--];
        }

        return result;
    }
}
```
