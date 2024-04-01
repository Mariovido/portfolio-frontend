# 41. First Missing Positive

## Intuition

The intuition behind this approach is to rearrange the array elements such that each positive integer `i` (where `1 <= i <= n`) is located at index `i - 1`. After rearranging, we iterate through the array to find the first missing positive integer.

## Approach

1. Iterate through the array `nums`.
2. For each element `nums[i]`, if it's a positive integer (`nums[i] > 0`) and within the range of the array (`nums[i] <= n`), and the number at index `nums[i] - 1` is not the same as `nums[i]`, swap `nums[i]` with the number at index `nums[i] - 1`.
3. After the first loop, all positive integers should be in their correct positions, i.e., `nums[i]` should be `i + 1`.
4. Iterate through the array again to find the first index `i` such that `nums[i] != i + 1`. The first missing positive integer is `i + 1`.
5. If all numbers are in their correct positions, return `n + 1`, where `n` is the length of the array.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the array `nums`. The algorithm requires two passes through the array.

- Space complexity: `O(1)`, as the algorithm uses only a constant amount of extra space for variables.

## Code

```java
class Solution {
    public int firstMissingPositive(int[] nums) {
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
                int temp = nums[i];
                nums[i] = nums[temp - 1];
                nums[temp - 1] = temp;
            }
        }

        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) return i + 1;
        }

        return n + 1;
    }
}
```
