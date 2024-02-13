# 150. Evaluate Reverse Polish Notation

## Intuition

The problem seems to involve evaluating a reverse Polish notation (RPN) expression, where operators follow their operands. To solve this, we can use a stack to keep track of the operands. When encountering an operator, we can pop the required number of operands from the stack, perform the operation, and push the result back onto the stack.

## Approach

1. Initialize a `stack` to store operands.
2. Iterate through the `tokens`:
   - If the token is an operator, pop two operands from the `stack`, perform the operation, and push the result back onto the `stack`.
   - If the token is an operand, push it onto the `stack`.
3. After iterating through all `tokens`, the result will be the only element left in the `stack`.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of tokens in the input array. We iterate through each token once.

- Space complexity: `O(n)`, where `n` is the number of operands in the input array. The stack can contain up to `n / 2` operands in the worst case scenario.

## Code

```java
class Solution {
    public int evalRPN(String[] tokens) {
        Deque<Integer> stack = new ArrayDeque<>();

        for (String token : tokens) {
            if (isOperator(token)) {
                int operand2 = stack.pop();
                int operand1 = stack.pop();
                stack.push(performOperation(operand1, operand2, token));
            } else stack.push(Integer.parseInt(token));
        }

        return stack.pop();
    }

    private boolean isOperator(String token) {
        return token.equals("+") ||
            token.equals("-") ||
            token.equals("*") ||
            token.equals("/");
    }

    private int performOperation(int operand1, int operand2, String operator) {
        switch (operator) {
            case "+":
                return operand1 + operand2;
            case "-":
                return operand1 - operand2;
            case "*":
                return operand1 * operand2;
            case "/":
                return operand1 / operand2;
            default:
                return 0;
        }
    }
}
```
