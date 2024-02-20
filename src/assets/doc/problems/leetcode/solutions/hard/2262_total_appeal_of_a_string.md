# 2262. Total Appeal of A String

## Intuition

The problem seems to involve calculating the appeal sum of a given string. The appeal of a character at position `i` is defined as the sum of the distances from the character to all characters that occur before it in the string.

## Approach

1. Initialize an array `characterIndices` of size `26` to keep track of the last index where each character occurred.
2. Initialize `cumulativeCount` to `0` to keep track of the cumulative count of indices of characters.
3. Initialize `totalAppeal` to `0` to store the final sum of appeals.
4. Iterate through each character in the string:
   a. Calculate the index of the character in the array by subtracting `'a'` from it.
   b. Update `cumulativeCount` by subtracting the previous index of the current character and adding the current index.
   c. Update the last index of the current character in `characterIndices`.
   d. Add `cumulativeCount` to `totalAppeal`.
5. Return `totalAppeal`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string. We iterate through the string once.

- Space complexity: `O(1)`, since we use a fixed-size array of size `26` to store character indices, regardless of the input size.

## Code

```java
class Solution {
    public long appealSum(String s) {
        int[] characterIndices = new int[26];

        long cumulativeCount = 0;
        long totalAppeal = 0;
        for (int i = 0; i < s.length(); i++) {
            char currentChar = s.charAt(i);
            int charIndex = currentChar - 'a';

            cumulativeCount -= characterIndices[charIndex];
            characterIndices[charIndex] = i + 1;
            cumulativeCount += characterIndices[charIndex];
            totalAppeal += cumulativeCount;
        }

        return totalAppeal;
    }
}
```
