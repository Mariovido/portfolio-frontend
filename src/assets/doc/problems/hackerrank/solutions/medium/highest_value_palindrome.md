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

        int needUpdate = k;
        char[] sChars = s.toCharArray();
        boolean[] needsUpdate = new boolean[s.length()];
        Arrays.fill(needsUpdate, false);

        for (int i = 0; i < s.length() / 2; i++) {
            if (sChars[i] - sChars[s.length() - i - 1] != 0) {
                if (sChars[i] - sChars[s.length() - i - 1] > 0) {
                    sChars[s.length() - i - 1] = sChars[i];
                    needsUpdate[i] = true;
                    needUpdate--;
                } else {
                    sChars[i] = sChars[s.length() - i - 1];
                    needsUpdate[i] = true;
                    needUpdate--;
                }
            }

            if (needUpdate < 0) return "-1";
        }

        System.out.println(needUpdate);

        int index = 0;
        int index2 = s.length() - 1;
        while (needUpdate > 0 && index <= index2) {
            if (sChars[index] != '9') {
                if (needsUpdate[index]) {
                    sChars[index] = '9';
                    sChars[s.length() - index - 1] = '9';
                    needUpdate--;
                } else if (!needsUpdate[index] && needUpdate >= 2) {
                    sChars[index] = '9';
                    sChars[s.length() - index - 1] = '9';
                    needUpdate -= 2;
                }
            }

            index++;
            index2--;

            if (index == index2 && needUpdate >= 1) {
                sChars[index] = '9';
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
