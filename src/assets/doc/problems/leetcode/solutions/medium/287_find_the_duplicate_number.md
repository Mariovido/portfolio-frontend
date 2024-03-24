# 287. Find the Duplicate Number

## Intuition

The given problem aims to find the duplicate element in an array of integers using constant space and with a time complexity better than `O(n^2)`. The given code utilizes Floyd's Tortoise and Hare algorithm, also known as cycle detection in linked lists. This algorithm is adapted here to work with an array.

## Approach

1. Initialize two pointers, `slow` and `fast`, both pointing to the first element of the array.
2. Move `slow` one step forward and `fast` two steps forward in each iteration until they meet at some point within the cycle.
3. Reset `fast` to the first element of the array and move both pointers at the same speed until they meet again. The meeting point will be the start of the cycle, which is the duplicate element.
4. Return the duplicate element.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input array. This is because both pointers traverse the array at different speeds, but in the worst case, they meet after traversing the array at most twice.

- Space complexity: `O(1)` since it utilizes only a constant amount of extra space, irrespective of the input size.

## Code

```java
class Solution {
    public int findDuplicate(int[] nums) {
        int slow = nums[0];
        int fast = nums[0];
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);

        fast = nums[0];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }
}
```
