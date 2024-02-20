# 20. Valid Parentheses

## Intuition

The code appears to implement a method to determine whether a given string containing only parentheses, curly brackets, and square brackets is validly formatted in terms of opening and closing brackets.

## Approach

1. Initialize an empty `stack` to store opening brackets.
2. Iterate through each character in the input string.
3. If the character is an opening bracket (i.e., `(`, `{`, `[`), push it onto the `stack`.
4. If the character is a closing bracket (`)`, `}`, `]`):
   - If the `stack` is empty, return `false`, as there's no corresponding opening bracket for the current closing bracket.
   - Pop the `top` character from the `stack`.
   - Check if the popped character matches the expected opening bracket for the current closing bracket. If not, return `false`.
5. After iterating through all characters, if the `stack` is empty, return `true` (indicating all opening brackets have been matched with closing brackets); otherwise, return `false`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string. The algorithm iterates through each character of the string once.

- Space complexity: `O(n)`, where `n` is the length of the input string. The space complexity is determined by the maximum size of the stack, which could hold all opening brackets in the worst case.

## Code

```java
class Solution {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();

        for (char ch : s.toCharArray()) {
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
                continue;
            }

            if (stack.isEmpty()) return false;
            char top = stack.pop();
            if ((ch == ')' && top != '(') ||
                (ch == '}' && top != '{') ||
                (ch == ']' && top != '[')) return false;

        }

        return stack.isEmpty();
    }
}
```
