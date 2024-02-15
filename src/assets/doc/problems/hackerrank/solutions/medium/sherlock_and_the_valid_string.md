# Sherlock and the Valid String

## Intuition

The code seems to be checking whether a given string `s` can be made a valid string by rearranging its characters. A string is considered valid if all the characters have the same frequency, or if by removing one character, all remaining characters have the same frequency.

## Approach

1. Initialize a `HashMap` to store the frequency of each character in the string.
2. Iterate through the string and update the frequency map.
3. Convert the frequency map values into a list and sort the list.
4. Check if the minimum frequency is `1`. If so, check if removing one character with the minimum frequency makes all the other characters have the same frequency. If yes, return `YES`; otherwise, return `NO`.
5. If the minimum frequency is not `1`, check if the difference between the maximum and minimum frequency is greater than `1`. If yes, return `NO`.
6. Otherwise, return `YES`.

## Complexity

- Time complexity: `O(n * log(n))`, where `n` is the length of the string. The time complexity is dominated by the sorting operation.

- Space complexity: `O(n)`, where `n` is the length of the string. This is due to the `HashMap` and `ArrayList` used to store the frequency of characters and their values, respectively.

## Code

```java
class Result {
    public static String isValid(String s) {
        if (s.length() == 1) return "YES";

        Map<Character, Integer> map = new HashMap<>();

        for(char ch : s.toCharArray()){
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        List<Integer> list = new ArrayList<>(map.values());

        Collections.sort(list);

        if (list.get(0) == 1) return list.get(1) != Collections.max(list) ? "NO" :"YES";
        else if (Collections.max(list) - Collections.min(list)>1) return "NO";

        return "YES";
    }
}
```
