# Caesar Cipher

## Intuition

The problem requires implementing a Caesar cipher, which is a simple substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet. The intuition here is to iterate through each character of the input string, determine its original position in the alphabet, apply the Caesar cipher shift, and append the new character to the result string.

## Approach

1. Initialize a `StringBuilder` to store the `result`.
2. Calculate the `offset` by taking the modulo of the shift value with `26` (the number of letters in the alphabet) to handle cases where the shift value is greater than `26`.
3. Iterate through each `character` of the input string:
   - If the `character` is not alphabetic, append it directly to the `result`.
   - If the `character` is alphabetic:
     - Determine its original position in the alphabet.
     - Apply the Caesar cipher shift by adding the `offset` to the original position.
     - Handle uppercase and lowercase characters separately to maintain case.
     - Append the new `character` to the `result`.
4. Return the `result` string.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string. This is because we iterate through each character of the string once.

- Space complexity: `O(n)`, where `n` is the length of the input string. The space complexity arises from the `StringBuilder` used to store the result string.

## Code

```java
class Result {
    public static String caesarCipher(String s, int k) {
        StringBuilder result = new StringBuilder();

        int offset = k % 26;
        for (char character : s.toCharArray()) {
            int originalAlphabetPosition = character;
            int newAlphabetPosition;
            char newCharacter;

            if (!Character.isAlphabetic(character)) {
                result.append(character);
                continue;
            }

            if (Character.isUpperCase(character)) {
                originalAlphabetPosition -= 'A';
                newAlphabetPosition = (originalAlphabetPosition + offset) % 26;
                newCharacter = (char) ('A' + newAlphabetPosition);
            } else {
                originalAlphabetPosition -= 'a';
                newAlphabetPosition = (originalAlphabetPosition + offset) % 26;
                newCharacter = (char) ('a' + newAlphabetPosition);
            }

            result.append(newCharacter);
        }

        return result.toString();
    }
}
```
