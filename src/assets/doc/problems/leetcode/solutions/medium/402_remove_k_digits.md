# 402. Remove K Digits

## Intuition

Given a non-negative integer `num` represented as a string and an integer `k`, the problem asks to remove `k` digits from the number so that the new number is the smallest possible. The approach that comes to mind is to use a greedy strategy combined with a stack to efficiently track and remove digits. The intuition is that if a digit is larger than the next one, removing it will likely lead to a smaller number. We iterate through the digits of `num`, and for each digit, if it's smaller than the previous digit (peek of the stack), we have a candidate for removal to potentially achieve a smaller number.

## Approach

1. **Handle the Base Case**: If `k` equals the length of `num`, removing all digits leaves us with `0`.
2. **Use a Stack to Store Digits**: Initialize a stack to keep track of the digits. We use the stack because it allows us to easily remove the last added digit, which is crucial for our greedy approach.
3. **Iterate Through Each Digit**:
   - As we iterate, if the current digit is smaller than the digit at the top of the stack (which means removing the top digit could potentially make the number smaller), and we still have digits (`k`) to remove, we pop the stack.
   - After potentially popping the stack, we push the current digit onto the stack.
4. **Remove Remaining Digits**: If there are still digits to remove after the iteration (`k > 0`), remove them from the top of the stack, as these would be the largest remaining digits.
5. **Build the Result String**: Pop all elements from the stack, appending them to a `StringBuilder`, then reverse it to get the correct order.
6. **Remove Leading Zeros**: Since the problem specifies the result should be a number, strip any leading zeros, except if the result is just `"0"`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string `num`. Each digit is pushed and popped from the stack at most once.

- Space complexity: `O(n)`, due to the use of a stack to store the digits of the number.

## Code

```java
class Solution {
    public String removeKdigits(String num, int k) {
        if (k == num.length()) return "0";

        Deque<Character> stack = new ArrayDeque<>();
        for (int i = 0; i < num.length(); i++) {
            while (!stack.isEmpty() && k > 0 && stack.peek() > num.charAt(i)) {
                stack.pop();
                k--;
            }

            stack.push(num.charAt(i));
        }

        while (k > 0) {
            stack.pop();
            k--;
        }

        StringBuilder result = new StringBuilder();
        while (!stack.isEmpty()) {
            result.append(stack.pop());
        }

        result.reverse();

        while (result.length() > 1 && result.charAt(0) == '0') {
            result.deleteCharAt(0);
        }

        return result.toString();
    }
}
```
