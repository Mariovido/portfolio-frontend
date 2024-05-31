# 260. Single Number III

## Intuition

The problem involves finding the two unique numbers in an array where every other number appears exactly twice. The key insight is to use bitwise operations to isolate these two unique numbers.

## Approach

1. **XOR All Elements**: `XOR` all the numbers in the array. Since pairs of identical numbers will cancel each other out, the result will be the `XOR` of the two unique numbers.
2. **Find Rightmost Set Bit**: Identify the rightmost set bit in the `XOR` result. This bit is different between the two unique numbers, which helps in distinguishing them.
3. **Separate Numbers by Set Bit**: Divide the numbers into two groups based on whether they have the identified set bit. `XOR` the numbers in each group separately to find the two unique numbers.

### Steps

1. Initialize `xor` to `0`.
2. `XOR` all elements in the array and store the result in `xor`.
3. Compute `rightmostSetBit` as `xor & (-xor)`.
4. Initialize two variables, `num1` and `num2`, to `0`.
5. Iterate through the array, separating numbers into two groups based on the `rightmostSetBit`, and `XOR` the numbers in each group.
6. Return the two resulting numbers.

## Complexity

- Time complexity: `O(n)`. The algorithm processes the array in a single pass to compute the `XOR` and in another pass to divide and find the unique numbers.

- Space complexity: `O(1)`. Only a constant amount of extra space is used for variables.

## Code

```java
class Solution {
    public int[] singleNumber(int[] nums) {
        int xor = 0;
        for (int num : nums) {
            xor ^= num;
        }

        int rightmostSetBit = xor & (-xor);

        int num1 = 0;
        int num2 = 0;
        for (int num : nums) {
            if ((num & rightmostSetBit) == 0) num1 ^= num;
            else num2 ^= num;
        }

        return new int[]{num1, num2};
    }
}
```
