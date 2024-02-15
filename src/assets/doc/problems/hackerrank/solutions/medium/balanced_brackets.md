# Balanced Brackets

## Intuition

The problem seems related to checking the balance of parentheses, square brackets, and curly braces in a string. An intuitive approach could involve using a stack (in this case, a deque) to keep track of the opening brackets encountered while traversing the string. Then, whenever a closing bracket is encountered, we can check if it matches the most recent opening bracket on the stack.

## Approach

1. Initialize a `deque` to act as a stack.
2. Traverse the input string character by character.
3. For each character:
   - If it's an opening bracket (`{`, `[`, or `(`), push it onto the stack.
   - If it's a closing bracket (`}`, `]`, or `)`):
     - If the stack is not empty and the top of the stack matches the corresponding opening bracket for the current closing bracket, pop the top element from the stack.
     - If the stack is empty or there's no match, return `NO` immediately.
4. After traversing the entire string, if the stack is empty, return `YES` (indicating balanced brackets), otherwise, return `NO`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string. This is because we iterate through the entire string once.

- Space complexity: `O(n)`, where `n` is the length of the input string. This is because the `deque` (stack) could potentially store all the opening brackets in the worst-case scenario.

## Code

```java
class Result {
    public static String isBalanced(String s) {
        Deque<Character> deque = new LinkedList<>();

        for (char ch: s.toCharArray()) {
            if (ch == '{' || ch == '[' || ch == '(') deque.addFirst(ch);
            else {
                if (!deque.isEmpty()
                    && ((deque.peekFirst() == '{' && ch == '}')
                    || (deque.peekFirst() == '[' && ch == ']')
                    || (deque.peekFirst() == '(' && ch == ')'))) {
                    deque.removeFirst();
                } else return "NO";
            }
        }

        return deque.isEmpty() ? "YES" : "NO";
    }
}
```
