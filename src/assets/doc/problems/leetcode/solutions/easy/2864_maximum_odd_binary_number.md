# 2864. Maximum Odd Binary Number

## Intuition

Given a binary string, the goal is to find the maximum odd binary number that can be formed by rearranging its digits. My initial thought is to leverage the fact that for a binary number to be odd, it must end with a `1`. Therefore, the strategy should focus on maximizing the value of the binary number while ensuring it ends with a `1`. This involves placing as many `1`s as possible at the beginning of the number, as the value of a binary number increases with more 1s towards the left (higher significance bits). However, we must also ensure at least one `1` is reserved to make the number odd by placing it at the end.

## Approach

1. Count the number of `1`s in the input string. This is crucial because the number of `1`s will determine how many we can place at the beginning of our new binary number to maximize its value.
2. Initialize a `StringBuilder` to construct the new binary number.
3. Iterate through the string (except the last character to ensure the binary number is odd by placing a `1` at the end). In each iteration:
   - If there is more than one `1` remaining (`ones > 1`), append a `1` to the `StringBuilder` and decrement the `ones` count.
   - Otherwise, append a `0` because we want to save the last `1` for making the number odd.
4. After the loop, append a `1` to ensure the binary number is odd.
5. Convert the `StringBuilder` to a string and return it as the maximum odd binary number.

## Complexity

- Time complexity: `O(n)`. The algorithm iterates through the string twice (once to count `1`s and once to build the new string), making the time complexity linear in the length of the input string, `n`.

- Space complexity: `O(n)`, due to the use of a `StringBuilder` to construct the output string. The length of the output string is essentially the same as the input string, making the space used proportional to `n`.

## Code

```java
class Solution {
    public String maximumOddBinaryNumber(String s) {
        int ones = 0;

        for (char c : s.toCharArray()) {
            if (c == '1') ones++;
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length() - 1; i++) {
            if (ones > 1) {
                sb.append(1);
                ones--;
            } else sb.append(0);
        }

        sb.append(1);

        return sb.toString();
    }
}
```
