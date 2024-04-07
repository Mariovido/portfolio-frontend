# 678. Valid Parenthesis String

## Intuition

The problem seems to involve validating a string containing only three types of characters: `(`, `)`, and `''`. The `''` character can be treated as either an opening parenthesis `(`, a closing parenthesis `)`, or an empty string. The first thought is to track the balance of parentheses, but the `''` adds complexity because its role can change based on the context in the string. A direct approach with a single counter would not work because it cannot account for the flexibility of `''`. We need a way to keep track of the range of possible valid states as we scan through the string.

## Approach

The approach involves two counters: `low` and `high` to keep track of the range of possible open parenthesis counts. Here are the steps:

1. Initialize two counters, `low` and `high`, to `0`. `low` represents the minimum, and `high` represents the maximum number of open parentheses that are possible as we process the characters in the string.
2. Iterate through each character in the string:
   - If the character is `(`, increment both `low` and `high`.
   - If the character is `)`, decrement both `low` and `high`. This is because a closing parenthesis can potentially match an opening one, reducing the number of open parentheses.
   - If the character is `*`, it can act as either `(`, `)`, or an empty string:
     - Decrement `low` because in the worst case, `*` acts as a closing parenthesis, which would reduce the number of open parentheses.
     - Increment `high` because in the best case, `*` acts as an opening parenthesis, increasing the number of open parentheses.
   - After processing each character, if `high` becomes less than `0`, break the loop. This condition means that there are too many closing parentheses, making the string invalid.
   - Ensure `low` is not negative by setting `low = Math.max(low, 0)`. A negative `low` would not make sense, as we cannot have a negative count of open parentheses.
3. After the loop, if `low` is `0`, the string is valid. This means there is a configuration where all opening parentheses are matched. If `low` is not `0`, it means there are unmatched opening parentheses, and the string is invalid.

## Complexity

- Time complexity: `O(n)`. The solution involves a single pass through the string, where `n` is the length of the string. Each character is processed once.

- Space complexity: `O(1)`. The space used does not depend on the size of the input string. Only a constant amount of extra space is used for the counters and temporary variables.

## Code

```java
class Solution {
    public boolean checkValidString(String s) {
        int low = 0;
        int high = 0;

        for (char c : s.toCharArray()) {
            low += c == '(' ? 1 : -1;
            high += c != ')' ? 1 : -1;

            if (high < 0) break;

            low = Math.max(low, 0);
        }

        return low == 0;
    }
}
```
