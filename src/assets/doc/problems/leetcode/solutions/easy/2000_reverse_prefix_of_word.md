# 2000. Reverse Prefix of Word

## Intuition

The intuition behind this solution seems to be finding the index of the target character in the given word and reversing the prefix of the word up to that index.

## Approach

1. Find the index of the target character in the word.
2. If the character is not found (`-1` returned by `indexOf`), return the original word.
3. Create a `StringBuilder` to store the reversed prefix of the word up to the index of the target character.
4. Reverse the substring from the beginning of the word up to the index.
5. If the index is not at the end of the word, append the rest of the word (from the index onwards) to the reversed prefix.
6. Convert the `StringBuilder` to a string and return it.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input word. This is because the solution involves finding the index of the target character and performing string manipulations, both of which take linear time in relation to the length of the input word.

- Space complexity: `O(n)`, where `n` is the length of the input word. This is because we use a `StringBuilder` to store the reversed prefix of the word, which can potentially be as large as the input word itself. Additionally, we create substrings of the input word, which also contribute to the space complexity. However, these substrings are not stored separately and are part of the `StringBuilder`, so they don't increase the overall space complexity.

## Code

```java
class Solution {
    public String reversePrefix(String word, char ch) {
        int index = word.indexOf(ch);
        if (index == -1) return word;

        StringBuilder result = new StringBuilder(word.substring(0, index + 1)).reverse();
        if (index < word.length() - 1) result.append(word.substring(index + 1));

        return result.toString();
    }
}
```
