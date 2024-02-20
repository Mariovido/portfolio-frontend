# 5. Longest Palindromic Substring

## Intuition

The provided code appears to implement a solution to find the longest palindromic substring in a given string. The approach seems to involve expanding around the center of each character or between characters to check for palindromes.

## Approach

1. Initialize two pointers, `start` and `end`, to keep track of the longest palindromic substring found so far.
2. Iterate through each character in the input string `s`.
3. For each character, expand around its center to check for palindromes:
   - Call the `expandAroundCenter` function with the current character as the center.
   - This function will expand outwards from the center until the substring is no longer a palindrome or reaches the boundaries of the string.
4. Update the `start` and `end` pointers if a longer palindromic substring is found during expansion.
5. Return the substring from index `start` to index `end` in the input string `s`.

## Complexity

- Time complexity: `O(n^2)`, where `n` is the length of the input string. This is because for each character in the string, we potentially expand outwards to both the left and right to check for palindromes.

- Space complexity: `O(1)` because we are using only a constant amount of extra space, regardless of the size of the input string.

## Code

```java
class Solution {
    public String longestPalindrome(String s) {
        int start = 0;
        int end = 0;

        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = Math.max(len1, len2);

            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }

        return s.substring(start, end + 1);
    }

    private int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }

        return right - left - 1;
    }
}
```
