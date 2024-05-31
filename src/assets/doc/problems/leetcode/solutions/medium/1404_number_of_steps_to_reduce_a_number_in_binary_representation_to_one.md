# 1404. Number of Steps to Reduce a Number in Binary Representation to One

## Intuition

The problem is to determine the number of steps to reduce a binary number (given as a string) to `1`. The operations allowed are:

1. If the number is even, divide it by `2`.
2. If the number is odd, add `1` to it.
   The intuitive approach is to process the binary string from right to left (least significant bit to most significant bit), simulating these operations.

## Approach

1. Initialize `steps` to `0` and `carry` to `0`.
2. Traverse the binary string from the last character to the second character (right to left).
3. For each character:
   - Convert the character to an integer and add the `carry`.
   - If the result is even, it means dividing by `2` is possible. Increment `steps` by `1`.
   - If the result is odd, simulate the addition of `1` (to make it even). This involves setting `carry` to `1` and incrementing `steps` by `2` (one for the addition and one for the subsequent division by `2`).
4. Finally, add the `carry` to `steps` because the most significant bit will also be processed.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the binary string. This is because we are iterating through the string once.

- Space complexity: `O(1)`, as we are using only a few extra variables (`steps` and `carry`) regardless of the input size.

## Code

```java
class Solution {
    public int numSteps(String s) {
        int steps = 0;
        int carry = 0;

        for (int i = s.length() - 1; i > 0; i--) {
            if ((s.charAt(i) - '0' + carry) % 2 == 0) steps++;
            else {
                carry = 1;
                steps += 2;
            }
        }

        return steps + carry;
    }
}
```
