# 1249. Minimum Remove to Make Valid Parentheses

## Intuition

The intuition behind this solution is to iterate through the given string and use a stack to keep track of the indices of opening parentheses. When encountering a closing parenthesis, if there is a corresponding opening parenthesis in the stack, it is popped out; otherwise, the closing parenthesis is ignored. After iterating through the entire string, any remaining indices in the stack correspond to unmatched opening parentheses, which are then removed from the final result.

## Approach

1. Initialize a `StringBuilder` `result` to store the valid parentheses.
2. Initialize a `stack` to keep track of the indices of opening parentheses.
3. Iterate through the characters of the given string.
4. If the current character is an opening parenthesis `(`:
   - Push its index to the `stack`.
   - Append it to the `result`.
5. If the current character is a closing parenthesis `)`:
   - If the `stack` is not empty, pop the top index from the `stack` and append the current character to the `result`.
6. If the current character is neither `(` nor `)`, simply append it to the `result`.
7. After iterating through the string, remove any remaining unmatched opening parentheses by deleting their indices from the `result` string.
8. Return the `result` string.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string.

- Space complexity: `O(n)`, where `n` is the length of the input string. This is due to the space used by the `StringBuilder` `result` and the `stack`, both of which can grow up to the size of the input string in the worst case.

## Code

```java
class Solution {
    public String minRemoveToMakeValid(String s) {
        StringBuilder result = new StringBuilder();
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (ch == '(') {
                stack.push(result.length());
                result.append(ch);
            } else if (ch == ')') {
                if (!stack.isEmpty()) {
                    stack.pop();
                    result.append(ch);
                }
            } else result.append(ch);
        }

        while (!stack.isEmpty()) {
            result.deleteCharAt(stack.pop());
        }

        return result.toString();
    }
}
```
