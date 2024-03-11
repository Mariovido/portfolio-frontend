# 1750. Minimum Length of String After Deleting Similar Ends

## Intuition

The intuition behind this approach is to use two pointers, one starting from the beginning of the string (`left`) and the other from the end of the string (`right`). We move these pointers towards each other as long as the characters they point to are the same. Once we encounter different characters, we stop and return the length of the remaining substring.

## Approach

1. Initialize two pointers `left` and `right` at the beginning and end of the string respectively.
2. While `left` is less than `right` and the characters at these pointers are equal:
   - Get the character at the current `left` pointer position.
   - Move `left` pointer to the right until a different character is found.
   - Move `right` pointer to the left until a different character is found.
3. Return the length of the remaining substring (`right - left + 1`).

## Complexity

- Time complexity: `O(n)` where `n` is the length of the input string `s`. This is because we only need to traverse the string once.

- Space complexity: `O(1)` since we are using only a constant amount of extra space for storing variables regardless of the size of the input string.

## Code

```java
class Solution {
    public int minimumLength(String s) {
        int left = 0;
        int right = s.length() - 1;

        while (left < right && s.charAt(left) == s.charAt(right)) {
            char ch = s.charAt(left);

            while (left <= right && s.charAt(left) == ch) left++;
            while (left <= right && s.charAt(right) == ch) right--;
        }
        return right - left + 1;
    }
}
```
