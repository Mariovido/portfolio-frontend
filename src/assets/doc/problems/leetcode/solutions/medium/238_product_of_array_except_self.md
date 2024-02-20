# 238. Product of Array Except Self

## Intuition

The problem requires computing an array where each element is the product of all elements in the input array except itself. The straightforward approach would be to compute the product of all elements on the left side and then multiply it with the product of all elements on the right side of each element. However, this would result in a time complexity greater than `O(n)` as each element would require two passes through the array.

## Approach

To optimize the approach, we can utilize prefix and suffix products. We initialize an array `result` of the same length as `nums` and set `result[0]` to `1`. Then, we iterate through the array to compute the prefix products until index `i`. After that, we iterate from the end of the array to compute the suffix products, multiplying them with the corresponding prefix product. This way, we compute the desired product except for the current element in a single pass.

1. Initialize `result` array of the same length as `nums`.
2. Set `result[0]` to `1`.
3. Iterate from `i = 1` to `n - 1` and compute `result[i]` as the product of `result[i - 1]` and `nums[i - 1]`.
4. Initialize `suffix` to `1`.
5. Iterate from `i = n - 1` to `0`.
   - Multiply `result[i]` by `suffix` and update `suffix` by multiplying it with `nums[i]`.

## Complexity

- Time complexity: `O(n)` - We perform two passes through the input array, each with a linear time complexity.

- Space complexity: `O(1)` - We utilize only a constant amount of extra space for storing the output array, excluding the input and output space, which are not counted toward the space complexity analysis.

## Code

```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        int suffix = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }

        return result;
    }
}
```
