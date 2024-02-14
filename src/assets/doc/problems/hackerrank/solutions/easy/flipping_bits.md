# Flipping Bits

## Intuition

The problem seems to involve flipping the bits of a given integer `n`. Flipping bits typically involves changing each `0` to `1` and each `1` to `0`. Considering the problem's context, we can intuit that we might need to use some bitwise operations or mathematical operations to achieve this.

## Approach

The approach here uses a mathematical operation to flip the bits of the given integer `n`. It uses the fact that the maximum value of a signed `32`-bit integer is `Integer.MAX_VALUE`. Since we need to flip all the bits, we can obtain the result by subtracting `n` from `(2^32 - 1)`.

Here's the breakdown of the approach:

1. Get the maximum value of a signed `32`-bit integer using `Integer.MAX_VALUE`.
2. Convert it to an unsigned long using `Integer.toUnsignedLong()`.
3. Multiply this maximum value by `2` to shift all its bits one place to the left, effectively multiplying it by `2`.
4. Add `1` to this result to set the least significant bit to `1`.
5. Subtract the given integer `n` from this value to flip its bits.

## Complexity

- Time complexity: `O(1)`

  - The time complexity is constant because regardless of the input value `n`, the operations performed in the method are fixed and do not depend on the size of `n`.

- Space complexity: `O(1)`
  - The space complexity is also constant because the method only uses a few variables, regardless of the input value `n`.

## Code

```java
class Result {
    public static long flippingBits(long n) {
        return Integer.toUnsignedLong(Integer.MAX_VALUE) * 2 + 1 - n;
    }
}
```
