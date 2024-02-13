# 647. Palindromic Substrings

## Intuition

The problem can be solved efficiently using the concept of expanding around the center for each character and each pair of adjacent characters. By considering each character or pair as a potential center of a palindrome, we can iterate through the string, expanding around these centers to count the number of palindromic substrings.

## Approach

1. Initialize a variable `count` to keep track of the total count of palindromic substrings.
2. Iterate through each character of the string `s`.
3. For each character, consider it as a potential center of a palindrome and expand around it using the `countPalindromesAroundCenter` function.
4. Within `countPalindromesAroundCenter`, initialize a variable `count` to `0`.
5. While the `left` and `right` pointers are within the bounds of the string and the characters at these pointers are equal, increment the `count` and expand the pointers outward.
6. Return the `count` of palindromic substrings for each center.
7. Add the counts obtained from both single character centers and adjacent character pairs.
8. Return the total `count` as the result.

## Complexity

- Time complexity: `O(n^2)`, where `n` is the length of the input string `s`. This is because for each character in the string, we may need to expand around it to check for palindromes, resulting in a quadratic time complexity.

- Space complexity: `O(1)`. The space complexity is constant because we only use a few integer variables to keep track of counts and pointers, regardless of the input size.

## Code

```java
class Solution {
    public int countSubstrings(String s) {
        int count = 0;

        for (int i = 0; i < s.length(); i++) {
            count += countPalindromesAroundCenter(s, i, i);
            count += countPalindromesAroundCenter(s, i, i + 1);
        }

        return count;
    }

    private static int countPalindromesAroundCenter(String s, int left, int right) {
        int count = 0;

        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            count++;
            left--;
            right++;
        }

        return count;
    }
}
```
