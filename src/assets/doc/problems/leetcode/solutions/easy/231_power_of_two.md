# 231. Power of Two

## Intuition

The problem aims to determine whether a given integer is a power of two. The intuition behind this is to exploit the properties of binary representations of numbers.

## Approach

1. Recursive Approach (First Method):

   - Check if the given number is less than or equal to zero, return `false` if so.
   - Check if the number is `1`, return `true` if so (`1` is a power of `2`).
   - Check if the number is odd (i.e., has the least significant bit set), return `false` if so.
   - Recursively divide the number by `2` until it becomes `1`. If it becomes `1`, return `true`, otherwise return `false`.

2. Bit Manipulation Approach (Second Method):
   - Check if the number is greater than `0` and the bitwise `AND` of the number and its decremented value is `0`.
   - This method works because in binary, a power of two will have only one bit set. For example, `8` `(1000)` and `16` `(10000)` are powers of `2`. When we subtract `1` from them, we get `7` `(0111)` and `15` `(01111)` respectively. Performing a bitwise `AND` operation will give `0` for powers of `2`.

## Complexity

- Time complexity:

  - For the recursive approach, the time complexity is logarithmic, `O(log(n))`, where n is the input number.
  - For the bit manipulation approach, the time complexity is constant, `O(1)`, as it involves only bitwise operations.

- Space complexity:
  - For both approaches, the space complexity is constant, `O(1)`, as no extra space is used other than a few variables.

## Code

```java
class Solution {
    public boolean isPowerOfTwo(int n) {
        if (n <= 0) return false;

        if (n == 1) return true;

        if (n % 2 == 1) return false;

        return isPowerOfTwo(n / 2);
    }

    // Follow-up
    // public boolean isPowerOfTwo(int n) {
    //     return n > 0 && (n & (n - 1)) == 0;
    // }
}
```
