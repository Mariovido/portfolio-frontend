# Sum vs XOR

## Intuition

The problem seems to involve finding the number of non-negative integers `x` such that `n + x = n &oplus; x`, where `&oplus;` represents the bitwise `XOR` operation. Initially, we can observe that if a bit is `0` in `n`, it can be either `0` or `1` in `x` without affecting the result. However, if a bit is `1` in `n`, it must be `0` in `x` to satisfy the equation. Therefore, our task is to count the number of zero bits in `n`.

## Approach

The approach is to count the number of zero bits in `n`. We can achieve this by first finding the number of leading zeros in `n` using `Long.numberOfLeadingZeros(n)`, then subtracting the number of set bits in `n` using `Long.bitCount(n)`, and finally subtracting this result from the total number of bits in a long variable, which is given by `Long.SIZE`. The number of zero bits will represent the possible choices for `x` that satisfy the equation `n + x = n &oplus; x`.

## Complexity

- Time complexity: `O(log(n))`, where `n` is the input number. The time complexity is dominated by the operations involved in counting the number of leading zeros and set bits in a long integer.

- Space complexity: `O(1)`. The algorithm uses a constant amount of space regardless of the input size, thus having constant space complexity.

## Code

```java
class Result {
    public static long sumXor(long n) {
        int numberOfZeros = Long.SIZE - Long.numberOfLeadingZeros(n) - Long.bitCount(n);

        return (long) Math.pow(2, numberOfZeros);
    }
}
```
