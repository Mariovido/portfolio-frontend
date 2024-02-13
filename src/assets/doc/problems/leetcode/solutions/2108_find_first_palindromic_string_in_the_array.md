# 2108. Find First Palindromic String in the Array

## Intuition

The intuition behind this solution is to iterate through each word in the given array of strings. For each word, we start with two pointers, one pointing to the beginning of the word and the other pointing to the end of the word. We then compare characters at these pointers. If they match, we move the pointers towards each other until they either meet or pass each other. If the left pointer passes the right pointer or reaches it, it indicates that the word is a palindrome. We return the first palindrome word found.

## Approach

The approach involves iterating through each word in the array. For each word, we initialize two pointers, one pointing to the start of the word and the other to the end. We then compare characters at these pointers, moving them towards each other until they meet or pass each other. If the word is a palindrome (i.e., if the left pointer passes the right pointer or reaches it), we return that word. If no palindrome is found, we return an empty string.

## Complexity

- Time complexity: `O(n * m)` where `n` is the number of words in the array and `m` is the maximum length of a word in the array. In the worst case, we need to traverse the entire length of each word.

- Space complexity: `O(1)`, as we are not using any extra space that scales with the input size, except for a few integer variables for pointers.

## Code

```java
class Solution {
    public String firstPalindrome(String[] words) {
        for (String word : words) {
            int left = 0;
            int right = word.length() - 1;

            while (left < right && word.charAt(left) == word.charAt(right)) {
                left++;
                right--;
            }

            if (left >= right) return word;
        }

        return "";
    }
}
```
