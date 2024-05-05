# Sherlock and Anagrams

## Intuition

The problem seems to involve finding pairs of substrings within a given string that are anagrams of each other. An intuitive approach might involve iterating through all possible substrings, sorting them, and then checking for anagrams.

## Approach

1. Create a `HashMap` to store the sorted substrings and their frequencies.
2. Iterate through each character in the string.
3. For each character, iterate through all possible substrings starting from that character.
4. Sort each substring.
5. Update the `HashMap` with the sorted substring and its frequency.
6. Iterate through the values in the `HashMap` and calculate the number of pairs of anagrams using the formula: `count += value * (value - 1) / 2`.
7. Return the final count.

## Complexity

- Time complexity: `O(n^2 * m * log(m))` where `n` is the length of the string and `m` is the maximum length of a substring. The nested loops iterate through all substrings, and sorting each substring takes `O(m * log(m))` time.

- Space complexity: `O(n^2)`, where `n` is the length of the string. The `HashMap` can potentially store `n^2` substrings.

## Code

```java
class Result {
    public static int sherlockAndAnagrams(String s) {
        Map<String, Integer> substrings = new HashMap<>();
        int count = 0;

        for (int i = 0; i < s.length(); i++) {
            for (int j = i + 1; j <= s.length(); j++) {
                String substring = s.substring(i, j);
                String sortedSubstring = sortString(substring);

                substrings.put(sortedSubstring, substrings.getOrDefault(sortedSubstring, 0) + 1);
            }
        }

        for (int value : substrings.values()) {
            count += value * (value - 1) / 2;
        }

        return count;
    }

    private static String sortString(String str) {
        char[] charArray = str.toCharArray();
        Arrays.sort(charArray);
        return new String(charArray);
    }
}
```
