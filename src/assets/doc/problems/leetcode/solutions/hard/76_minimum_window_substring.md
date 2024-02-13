# 76. Minimum Window Substring

## Intuition

The problem seems to be a sliding window problem where we try to find the minimum window in string `s` that contains all the characters of string `t`. The intuition is to maintain a window represented by the indices `left` and `right`, and dynamically adjust it while iterating through the characters of `s`. The goal is to minimize the window size while ensuring it contains all characters from `t`.

## Approach

1. Initialize two pointers, `left` and `right`, to define the window in string `s`.
2. Create a map `tMap` to store the frequency of characters in string `t`.
3. Move the `right` pointer to expand the window. For each character encountered, update the frequency in `tMap`.
4. When all required characters from `t` are present in the window, move the `left` pointer to minimize the window size.
5. Repeat steps 3-4 until the `right` pointer reaches the end of `s`.
6. Keep track of the minimum window size and its starting index.

## Complexity

- Time complexity: `O(N + M)`, where `N` is the length of string `s` and `M` is the length of string `t`. The algorithm iterates through both strings once.

- Space complexity:`O(M)`, where `M` is the length of string `t`. The space is used to store the frequency of characters in `tMap`.

## Code

```java
class Solution {
    public String minWindow(String s, String t) {
        if (s == null || t == null || s.length() == 0 || t.length() == 0) return "";

        Map<Character, Integer> tMap = new HashMap<>();
        for (char c : t.toCharArray()) {
            tMap.put(c, tMap.getOrDefault(c, 0) + 1);
        }

        int left = 0;
        int right = 0;
        int minLen = Integer.MAX_VALUE;
        int minLeft = 0;
        int requiredChars = t.length();

        while (right < s.length()) {
            char rightChar = s.charAt(right);
            if (tMap.containsKey(rightChar)) {
                if (tMap.get(rightChar) > 0) requiredChars--;
                tMap.put(rightChar, tMap.get(rightChar) - 1);
            }

            while (requiredChars == 0) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minLeft = left;
                }

                char leftChar = s.charAt(left);
                if (tMap.containsKey(leftChar)) {
                    tMap.put(leftChar, tMap.get(leftChar) + 1);
                    if (tMap.get(leftChar) > 0) requiredChars++;
                }

                left++;
            }

            right++;
        }

        return minLen == Integer.MAX_VALUE ? "" : s.substring(minLeft, minLeft + minLen);
    }
}
```
