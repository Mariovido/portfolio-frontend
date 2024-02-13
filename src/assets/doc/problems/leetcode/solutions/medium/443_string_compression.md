# 443. String Compression

## Intuition

The goal of this problem is to compress a given character array in-place. The compression should be done by replacing repeated characters with the character and the count of its occurrences. The algorithm needs to keep track of both read and write indices to efficiently iterate through the array and update it.

## Approach

The algorithm uses two pointers, `readIndex` and `writeIndex`, to iterate through the character array. It also uses a variable `count` to keep track of the consecutive occurrences of the current character. The algorithm follows these steps:

1. Initialize `writeIndex` and `readIndex` to `0`.
2. Iterate through the characters using `readIndex`.
   - Set `currentChar` to the character at `readIndex`.
   - Initialize count to `0`.
   - While `readIndex` is within bounds and the current character is equal to `currentChar`, increment both `readIndex` and count.
   - Write `currentChar` to the `writeIndex` position.
   - If count is greater than `1`, convert `count` to a character array and write each digit to the `writeIndex`.
3. Return the final `writeIndex`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input character array. The algorithm iterates through the array once.

- Space complexity: `O(1)`, as the compression is done in-place without using any additional data structures. The space required is constant, regardless of the input size.

## Code

```java
class Solution {
    public int compress(char[] chars) {
        int writeIndex = 0;
        int readIndex = 0;

        while (readIndex < chars.length) {
            char currentChar = chars[readIndex];
            int count = 0;

            while (readIndex < chars.length && chars[readIndex] == currentChar) {
                readIndex++;
                count++;
            }

            chars[writeIndex++] = currentChar;
            if (count > 1) {
                for (char c : String.valueOf(count).toCharArray()) {
                    chars[writeIndex++] = c;
                }
            }
        }

        return writeIndex;
    }
}
```
