# Caesar Cipher

## Description

Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters, and if the shift goes beyond the end of the alphabet, it rotates back to the front. This problem involves encrypting a given string using Caesar's cipher with a specified rotation factor.

## Function

```java
public static String caesarCipher(String s, int k) {}
```

## Input Format

- The first line: an integer, `n`, the length of the unencrypted string &rarr; `1 <= n <= 100`.
- The second line: the unencrypted string, `s` (ASCII characters without spaces).
- The third line: an integer, `k`, the number of letters to rotate the alphabet by &rarr; `0 <= k <= 100`.

## Output Format

- A string: the encrypted string.

## Constraints

- `1 <= n <= 100`
- `0 <= k <= 100`
- `s` is a valid ASCII string without any spaces.

## Example

```bash
# Sample Input
11
middle-Outz
2

# Sample Output
okffng-Qwvb
```
