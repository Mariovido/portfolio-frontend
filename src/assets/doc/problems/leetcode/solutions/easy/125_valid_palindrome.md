# 125. Valid Palindrome

## Intuition

To check if a given string is a palindrome, we can iterate through the string from both ends simultaneously. We'll compare characters at each position, moving towards the center of the string. We'll ignore non-alphanumeric characters and perform case-insensitive comparison.

## Approach

1. Initialize two pointers, `left` at the beginning of the string and `right` at the end of the string.
2. While `left` is less than `right`, do the following:
   - Get the lowercase version of characters at `left` and `right`.
   - If the character at `left` is not alphanumeric, move `left` one position to the `right`.
   - If the character at `right` is not alphanumeric, move `right` one position to the `left`.
   - If the characters at `left` and `right` are not equal, return `false`.
3. Otherwise, increment `left` and decrement `right`.
4. If the loop completes without returning `false`, return `true`, indicating that the string is a palindrome.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string. We traverse the string once.

- Space complexity: `O(1)`, as we are using a constant amount of extra space for variables regardless of the size of the input string.

## Code

```java
class Solution {
    public boolean isPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            char leftChar = Character.toLowerCase(s.charAt(left));
            char rightChar = Character.toLowerCase(s.charAt(right));

            if (!Character.isLetterOrDigit(leftChar)) {
                left++;
                continue;
            }
            if (!Character.isLetterOrDigit(rightChar)) {
                right--;
                continue;
            }

            if (leftChar != rightChar) return false;

            left++;
            right--;
        }

        return true;
    }
}
```
