# 791. Custom Sort String

## Intuition

The intuition behind this solution is to count the frequency of each character in the string `s` and then iterate over the characters in the order specified by the string `order`. For each character in `order`, append it to the result string as many times as it occurs in `s`. Finally, append any remaining characters from `s` in lexicographical order.

## Approach

1. Create a `StringBuilder` `result` to store the final string.
2. Create an integer array `freqs` of size `26` to store the frequency of each character. Initialize all elements to `0`.
3. Iterate through the characters of string `s` and increment the corresponding frequency in `freqs`.
4. Iterate through the characters of `string` order.
   - For each character `c`, append it to `result` as many times as its frequency in `s`. Decrease the frequency of `c` in `freqs` accordingly.
5. Iterate through the lowercase English alphabet from `a` to `z`.
   - For each character `c`, append it to `result` as many times as its frequency in `s`. Decrease the frequency of `c` in `freqs` accordingly.
6. Return the string representation of `result`.

## Complexity

- Time complexity: `O(n + m)`

  - The time complexity of counting the frequency of characters in string `s` is `O(n)`, where `n` is the length of `s`.
  - The time complexity of iterating through the characters in `order` and appending characters to `result` is `O(26 + m)`, where `m` is the length of order.
  - The time complexity of iterating through the remaining characters in `s` and appending them to `result` is `O(26)`.

- Space complexity: `O(n + m)`
  - `O(1)` because the size of the frequency array `freqs` is constant (`26`).
  - Additionally, the space used by the `StringBuilder` `result` is proportional to the length of the input strings order and `s`, thus `O(n + m)`

## Code

```java
class Solution {
    public String customSortString(String order, String s) {
        StringBuilder result = new StringBuilder();

        int[] freqs = new int[26];
        for (char c : s.toCharArray()) {
            freqs[c - 'a']++;
        }

        for (char c : order.toCharArray()) {
            while (freqs[c - 'a']-- > 0) {
                result.append(c);
            }
        }

        for (char c = 'a'; c <= 'z'; c++) {
            while (freqs[c - 'a']-- > 0) {
                result.append(c);
            }
        }

        return result.toString();
    }
}
```
