# Pangrams

## Intuition

The intuition behind this solution is to check if the input string contains all the letters of the alphabet at least once. If it does, then it's a pangram; otherwise, it's not a pangram.

## Approach

1. Remove leading and trailing whitespace from the input string and convert it to lowercase.
2. Remove all whitespace from the input string.
3. Convert the string to a list of characters.
4. Create a set from the list of characters to remove duplicates.
5. Check if the size of the set is equal to the length of the alphabet string. If it is, then return `pangram`; otherwise, return `not pangram`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string. The operations involve iterating through the input string once to remove whitespace and convert it to lowercase, and then creating a set from the characters.

- Space complexity: `O(n)`, where `n` is the length of the input string. The space complexity is dominated by the space used to store the list of characters and the set of unique characters.

## Code

```java
class Result {
    public static String pangrams(String s) {
        String alphabet = "qwertyuiopasdfghjklzxcvbnm";
        List<Character> aux = s.trim().toLowerCase().replaceAll("\\s","")
            .chars().mapToObj(c -> (char) c).collect(Collectors.toList());

        Set<Character> characters = new HashSet<>(aux);

        return characters.size() == alphabet.length() ? "pangram" : "not pangram";
    }
}
```
