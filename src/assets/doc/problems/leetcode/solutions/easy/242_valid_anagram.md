# 242. Valid Anagram

## Intuition

The intuition behind this solution is to check if the two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another. In this case, we compare the frequency of each character in both strings. If the frequency of characters is the same in both strings, the strings are anagrams.

## Approach

1. First, we check if the lengths of the two strings are equal. If not, they cannot be anagrams, so we return `false`.
2. We use a HashMap (`charCount`) to store the frequency of each character in the first string (`s`).
3. Iterate through each character in the first string (`s`) and update the frequency in the HashMap.
4. Iterate through each character in the second string (`t`).
   - Decrease the frequency of the character in the HashMap.
   - If the frequency becomes negative, return `false`, as this means the second string has a character not present in the first string or has an extra occurrence.
5. If we successfully iterate through both strings without returning `false`, then the strings are anagrams, and we return `true`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input strings. We iterate through each character in both strings once.

- Space complexity: `O(n)`, where `n` is the length of the input strings. In the worst case, the HashMap can have all unique characters from both strings.

## Code

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        Map<Character, Integer> charCount = new HashMap<>();

        for (char ch : s.toCharArray()) {
            charCount.put(ch, charCount.getOrDefault(ch, 0) + 1);
        }

        for (char ch: t.toCharArray()) {
            charCount.put(ch, charCount.getOrDefault(ch, 0) - 1);

            if (charCount.get(ch) < 0) return false;
        }

        return true;
    }
}
```
