# 9. Palindrome Number

## Intuition

When checking for a palindrome, we want to compare the number with its reverse. If the reversed number is the same as the original, then the number is a palindrome. So, one approach could be to reverse the given number and check if it equals the original number.

## Approach

1. Check if the given number is negative. If it is, return `false` since negative numbers can't be palindromes.
2. Initialize a variable `temp` to store the reversed number.
3. Iterate through the digits of the number from right to left:
   - Get the last digit of the number using modulo operation.
   - Multiply the current value of `temp` by `10` and add the last digit to it. This effectively builds the reversed number digit by digit.
   - Divide the number by `10` to remove the last digit.
4. After the loop, compare the reversed number `temp` with the original number `x`. If they are equal, return `true`; otherwise, return `false`.

## Complexity

- Time complexity: `O(log_10(n))` - where `n` is the given number. The time complexity is determined by the number of digits in the input number.

- Space complexity: `O(1)` - We are using only a constant amount of extra space regardless of the input size.

## Code

```java
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;

        int num = x;
        int temp = 0;

        while (num != 0) {
            int lastDigit = num % 10;
            temp = lastDigit + (temp * 10);
            num = num / 10;
        }

        return temp == x;
    }
}
```
