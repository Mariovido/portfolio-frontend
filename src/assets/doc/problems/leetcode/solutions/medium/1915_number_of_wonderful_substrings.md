# 1915. Number of Wonderful Substrings

## Intuition

To solve the problem of finding the number of `wonderful` substrings in a given string, where a `wonderful` substring is defined as one that contains at most one character with an odd frequency, a bitwise approach can be highly effective. This is because the constraints related to frequency parity (odd or even) suggest the use of binary representations to efficiently track and update the count of characters.

## Approach

1. **Initialize Variables**: Start by initializing a bitmask `mask` to zero, which will be used to track the parity (odd or even count) of each character in the substring. Also, initialize a frequency array `count` of size `1024` (since there are `2^10` possible combinations for `10` different characters `a - j` each being odd or even).
2. **Set Base Case for Empty Substring**: Set `count[0] = 1` because there's one way to have a substring with all even counts (the empty substring).
3. **Iterate Through Characters**: Loop through each character in the string. For each character, toggle its corresponding bit in `mask`. This toggle operation changes the parity of that character's frequency.
4. **Count Substrings Ending at Current Character**:
   - Directly add `count[mask]` to `res`. This addition counts all the substrings ending at the current character which have all characters with even frequencies or exactly one character with an odd frequency.
   - Additionally, iterate over each bit position from `0` to `9`, representing the characters `a` to `j`. For each position, toggle the bit in `mask` and add `count[mask ^ (1 << i)]` to `res`. This step counts all the substrings ending at the current character that could have all but one character with even frequency and one character with an odd frequency.
5. **Update Frequency Count**: Increment `count[mask]` to include the current substring ending at the current character.
6. **Return Result**: After processing all characters in the string, `res` will contain the total number of `wonderful` substrings.

## Complexity

- Time complexity: `O(n * 10)`, where `n` is the length of the string. This complexity arises because for each of the `n` characters, we potentially update counts and check `10` different toggle states.

- Space complexity: `O(1)`, as the space used by the `count` array and other variables does not scale with the size of the input string but remains constant at `1024` elements regardless of the string length.

## Code

```java
class Solution {
    public long wonderfulSubstrings(String word) {
        long[] count = new long[1024];
        int mask = 0;
        long res = 0;
        count[0] = 1;

        for (char c : word.toCharArray()) {
            mask ^= 1 << (c - 'a');

            res += count[mask];

            for (int i = 0; i < 10; i++) {
                res += count[mask ^ (1 << i)];
            }

            count[mask]++;
        }

        return res;
    }
}
```
