# 201. Bitwise AND of Numbers Range

## Intuition

The problem seems to involve bitwise operations, likely with the goal of finding the bitwise `AND` of a range of numbers.

## Approach

1. Start with the variable `right` and continuously perform bitwise `AND` with `(right - 1)` until `left` is equal to or greater than `right`.
2. Each iteration of the loop reduces the rightmost set bit of `right`, effectively clearing bits from the right until the range is exhausted.
3. Return the final value of `right`.

## Complexity

- Time complexity: `O(log(right))` since we are performing bitwise `AND` operations until `left` becomes equal to or greater than `right`.

- Space complexity: `O(1)` since we are not using any extra space proportional to the input.

## Code

```java
class Solution {
    public int rangeBitwiseAnd(int left, int right) {
        while (left < right) {
            right &= (right - 1);
        }

        return right;
    }
}
```
