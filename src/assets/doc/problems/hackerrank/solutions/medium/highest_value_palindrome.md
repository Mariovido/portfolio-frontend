# Highest Value Palindrome

## Intuition

The problem seems to require finding the highest value palindrome by changing at most k characters. To maximize the value of the resulting palindrome, we should prioritize changing digits to 9 where possible, as it increases the value of the palindrome. However, we need to be cautious to not exceed the given limit of k changes.

## Approach

1. If the length of the string is `1` and k is at least `1`, return `9` as it's the highest value palindrome possible with one digit.
2. Convert the input string into a character array for easier manipulation.
3. Iterate over the first half of the string (up to half the length of the string).
4. Check if the characters at symmetric positions are different. If they are, update one of them to the maximum value and mark the position as needing an update. Decrease the remaining allowed updates accordingly.
5. After the first iteration, if the remaining updates become negative, it's impossible to form a palindrome within the given constraints, so return `-1`.
6. Iterate again over the string to update the characters if there are remaining updates and if it's possible to change them to `9` without exceeding the limit of changes.
7. If the middle character is left and there are remaining updates, update it to `9`.
8. Construct the final string from the character array and return it.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string. The algorithm iterates over the string twice, once to check for differences and once to update the characters.

- Space complexity: `O(n)` for the character array used to store the modified string.

## Code

```java
class Result {
    public static String highestValuePalindrome(String s, int n, int k) {
        if (n == 1 && k >= 1) return "9";
        
        int updates = k;
        int l = s.length();
        char[] sChars = s.toCharArray();
        boolean[] needsUpdate = new boolean[l];
        Arrays.fill(needsUpdate, false);
        
        for (int i = 0; i < l / 2; i++) {
            if (sChars[i] - sChars[l - i - 1] != 0) {
                if (sChars[i] - sChars[l - i - 1] > 0) sChars[l - i - 1] = sChars[i];
                else sChars[i] = sChars[l - i - 1];
                
                needsUpdate[i] = true;
                updates--;
            }
            
            if (updates < 0) return "-1";
        }
        
        int left = 0;
        int right = l - 1;
        while (updates > 0 && left <= right) {
            if (sChars[left] != '9') {
                if (needsUpdate[left]) {
                    sChars[left] = '9';
                    sChars[l - left - 1] = '9';
                    updates--;
                } else if (!needsUpdate[left] && updates >= 2) {
                    sChars[left] = '9';
                    sChars[l - left - 1] = '9';
                    updates -= 2;
                }
            }
            
            left++;
            right--;
            
            if (left == right && updates >= 1) {
                sChars[left] = '9';
                break;
            }
        }
        
        StringBuilder result = new StringBuilder();
        for (char element : sChars) {
            result.append(element);
        }
        
        return result.toString();
    }
}
```
