# 387. First Unique Character in a String

## Intuition

The intuition behind this solution is to maintain an array `charCount` of size `26` (assuming lowercase English letters). We iterate through the given string `s` to count the occurrences of each character in the array. After counting, we iterate through the string again to find the first character with a count of `1`, indicating that it is the first unique character in the string.

## Approach

1. Initialize an array `charCount` of size `26` to store the count of each character.
2. Iterate through the input string `s`, incrementing the count of each character in the `charCount` array.
3. Iterate through the string again, and return the index of the first character with a count of `1`, as it is the first unique character.
4. If no unique character is found, return `-1`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string `s`. We iterate through the string twice, each taking `O(n)` time.

- Space complexity: `O(1)` since the size of the `charCount` array is constant (`26` for lowercase English letters) and does not depend on the input size.

## Code

```java
class Solution {
    public int firstUniqChar(String s) {
        int[] charCount = new int[26];

        for (char c : s.toCharArray()) {
            charCount[c - 'a']++;
        }

        for (int i = 0; i < s.length(); i++) {
            if (charCount[s.charAt(i) - 'a'] == 1) {
                return i;
            }
        }

        return -1;
    }
}
```
