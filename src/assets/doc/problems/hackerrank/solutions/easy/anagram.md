# Anagram

## Intuition

The intuition behind this approach is to determine the number of characters that need to be changed in one of the substrings to make it an anagram of the other substring. Since an anagram of a string is another string with the same characters but possibly in a different order, we can compare the characters in the first half of the input string with the characters in the second half. We iterate over each character in the first half and remove its occurrence from the second half if it exists. Finally, we return the length of the remaining characters in the second half, which represents the number of characters that are not part of any anagram pair.

## Approach

1. Check if the length of the input string is even, as an anagram requires the same number of characters in both substrings.
2. Find the midpoint of the string.
3. Split the input string into two substrings: `left` and `right`, representing the first and second halves.
4. Iterate over each character in the `left` substring.
5. For each character, check if it exists in the `right` substring.
6. If it exists, remove the first occurrence of that character from the `right` substring.
7. Return the length of the remaining characters in the `right` substring, representing the number of characters that cannot form an anagram pair.

## Complexity

- Time complexity: `O(n^2)`, where `n` is the length of the input string. This is because for each character in the `left` substring, we may need to search and remove a character from the `right` substring, which takes linear time. Since we perform this operation for each character in the `left` substring, the overall time complexity is quadratic.

- Space complexity: `O(n)`, where `n` is the length of the input string. This is because we create two new substrings, each with a maximum length of `n / 2`, resulting in a total space complexity proportional to the length of the input string.

## Code

```java
class Result {
    public static int anagram(String s) {
        if (s.length() % 2 != 0) return -1;

        int midPoint = s.length() / 2;
        String left = s.substring(0, midPoint);
        String right = s.substring(midPoint, s.length());

        for (Character c : left.toCharArray()) {
            if (right.contains(c.toString())) right = right.replaceFirst(c.toString(), "");
        }

        return right.length();
    }
}
```
