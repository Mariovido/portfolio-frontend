# 1614. Maximum Nesting Depth of the Parentheses

## Intuition

The code aims to find the maximum depth of parentheses in a given string. It seems to utilize a simple iterative approach to traverse the string character by character and update the depth accordingly.

## Approach

1. Initialize `maxDepth` and `currentDepth` variables to 0.
2. Iterate through each character `c` in the input string `s`.
3. If `c` is an opening parenthesis `'('`, increment `currentDepth` and update `maxDepth` if necessary.
4. If `c` is a closing parenthesis `')'`, decrement `currentDepth`.
5. Finally, return `maxDepth`, which holds the maximum depth of parentheses encountered.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string `s`. This is because the algorithm iterates through each character of the string once.

- Space complexity: `O(1)` because it only uses a constant amount of extra space regardless of the size of the input string. The space used for variables `maxDepth` and `currentDepth` does not grow with the input size.

## Code

```java
class Solution {
    public int maxDepth(String s) {
        int maxDepth = 0;
        int currentDepth = 0;

        for (char c : s.toCharArray()) {
            if (c == '(') {
                currentDepth++;
                maxDepth = Math.max(maxDepth, currentDepth);
            } else if (c == ')') currentDepth--;
        }

        return maxDepth;
    }
}
```
