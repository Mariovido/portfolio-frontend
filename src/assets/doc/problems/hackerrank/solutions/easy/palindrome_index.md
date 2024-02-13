# Palindrome Index

## Intuition

The problem aims to find the index of a character in a string that can be removed to make the string a palindrome. We can approach this by iterating through the string from both ends, checking for mismatches. Whenever we encounter a mismatch, we try removing either the character at the start index or the end index and check if the resulting substring is a palindrome. If it is, we return the index of the character to be removed.

## Approach

1. Initialize two pointers, `start` and `end`, pointing to the start and end of the string respectively.
2. Iterate through the string using these pointers, checking if the characters at the current positions match.
3. If there is a mismatch, check if removing the character at `start + 1` or `end - 1` would result in a palindrome.
4. If either of these removals results in a palindrome, return the index of the character to be removed.
5. If no such index is found, return `-1`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string `s`. We iterate through the string once.

- Space complexity: `O(1)`. We are using only a constant amount of extra space for storing variables.

## Code

```java
class Result {
  public static int palindromeIndex(String s) {
      int start = 0;
      int end = s.length() - 1;

      while (start < end && s.charAt(start) == s.charAt(end)) {
          start++;
          end--;
      }

      if (start >= end) return -1;

      if (isPalindrome(s, start + 1, end)) return start;
      if (isPalindrome(s, start, end - 1)) return end;

      return -1;
  }

  public static boolean isPalindrome(String s, int start, int end) {
      while (start < end && s.charAt(start) == s.charAt(end)) {
          start++;
          end--;
      }

      return start >= end;
  }
}
```
