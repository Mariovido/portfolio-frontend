# 2221. Find Triangular Sum of an Array

## Intuition

The code seems to be aiming to find the sum of elements in a triangular pattern within the array `nums`. It appears to repeatedly add adjacent elements in the array and reduce the array size until it reaches a single element, then returns that element.

## Approach

The approach taken here is to iterate through the array repeatedly, adding adjacent elements and updating the array with the sum modulo `10`. This process is repeated until the array size reduces to `1`, at which point the single remaining element is returned as the result.

## Complexity

- Time complexity: `O(n^2)`. The while loop runs until `n` becomes `1`, and within each iteration, there's a for loop that iterates over the array, which has a maximum length of `n`.

- Space complexity: `O(1)` since the algorithm operates in-place, modifying the given array `nums` without using any extra space proportional to the size of the input.

## Code

```java
class Solution {
    public int triangularSum(int[] nums) {
        int n = nums.length;

        while (n > 1) {
            for (int i = 0; i < n - 1; i++) {
                nums[i] = (nums[i] + nums[i + 1]) % 10;
            }

            n--;
        }

        return nums[0];
    }
}
```
