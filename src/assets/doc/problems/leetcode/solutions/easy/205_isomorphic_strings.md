# 205. Isomorphic Strings

## Intuition

The problem aims to determine if two given strings are isomorphic to each other. Strings are considered isomorphic if each character in the first string can be replaced with another character to get the second string. My initial thought is to utilize two hash maps to track the mapping between characters in both strings.

## Approach

1. Initialize two hash maps, `map` and `reverseMap`, to store mappings between characters in `s` and `t`.
2. Iterate through each character in the strings simultaneously.
3. For each character pair (`sChar`, `tChar`), do the following:
   - Check if `sChar` is already mapped to a character in `map`. If so, ensure that the mapped character is equal to `tChar`. If not, add `sChar` as key and `tChar` as value to map.
   - Check if `tChar` is already mapped to a character in `reverseMap`. If so, ensure that the mapped character is equal to `sChar`. If not, add `tChar` as key and `sChar` as value to `reverseMap`.
4. If the loop completes without any mismatch, return `true`, indicating that the strings are isomorphic. Otherwise, return `false`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input strings `s` and `t`. We iterate through the strings once.

- Space complexity: `O(n)`, we use two hash maps, `map` and `reverseMap`, to store mappings between characters in the strings. The space complexity grows linearly with the size of the input strings.

## Code

```java
class Solution {
    public boolean isIsomorphic(String s, String t) {
        Map<Character, Character> map = new HashMap<>();
        Map<Character, Character> reverseMap = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char sChar = s.charAt(i);
            char tChar = t.charAt(i);

            if (map.containsKey(sChar)) {
                if (map.get(sChar) != tChar) return false;
            } else map.put(sChar, tChar);

            if (reverseMap.containsKey(tChar)) {
                if (reverseMap.get(tChar) != sChar) return false;
            } else reverseMap.put(tChar, sChar);
        }

        return true;
    }
}
```
