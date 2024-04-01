# 58. Length of Last Word

## Intuition

The immediate thought upon seeing this problem is that we need to find the length of the last word in a given string. Considering the string may have leading or trailing spaces, the first step should involve trimming these spaces. After trimming, the problem boils down to finding the length of the substring after the last space character in the trimmed string.

## Approach

1. **Trim the String**: Remove any leading or trailing spaces from the input string to ensure they don't interfere with finding the last word.
2. **Find the Last Space**: Determine the index of the last space character in the trimmed string. If there are no spaces, this means the trimmed string is a single word.
3. **Calculate the Length of the Last Word**: Subtract the index of the last space from the total length of the trimmed string. The result is the length of the last word.
   - The `lastIndexOf` method is used to find the last occurrence of the space character. Since this method returns the index of the last space, adding `1` gives us the starting position of the last word.
   - Subtracting this start position of the last word from the total length of the trimmed string gives the length of the last word.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string.

- Space complexity: `O(1)`

## Code

```java
class Solution {
    public int lengthOfLastWord(String s) {
        String trimmed = s.trim();
        int lastSpaceIndex = trimmed.lastIndexOf(' ') + 1;
        return trimmed.length() - lastSpaceIndex;
    }
}
```
