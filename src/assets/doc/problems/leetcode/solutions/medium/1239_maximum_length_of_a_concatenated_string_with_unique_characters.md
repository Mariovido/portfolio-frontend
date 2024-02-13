# 1239. Maximum Length of a Concatenated String with Unique Characters

## Intuition

The problem involves finding the maximum length of a concatenated string with unique characters from a given list of strings. The use of DFS (Depth-First Search) suggests that the solution explores different combinations of strings to build a valid concatenated string. The `hasUniqueCharacters` method checks if a string has unique characters, ensuring that only valid combinations are considered.

## Approach

The approach is based on a depth-first search algorithm. The `dfs` function recursively explores different combinations of strings, updating the `result` with the maximum length of a concatenated string with unique characters. The `hasUniqueCharacters` function efficiently checks if a string has unique characters by using a HashSet to keep track of seen characters.

## Complexity

- Time complexity: `O(2^{n})`. The algorithm explores all possible combinations of strings, resulting in an exponential time complexity. The depth-first search is performed for each string in the list.

- Space complexity: `O(n)`. The space complexity is determined by the depth of the recursion stack, which is proportional to the length of the concatenated string. Additionally, the `hasUniqueCharacters` method uses a HashSet to store unique characters, contributing to the overall space complexity.

## Code

```java
class Solution {
    private int result = 0;

    public int maxLength(List<String> arr) {
        dfs(arr, "", 0);
        return result;
    }

    private void dfs(List<String> arr, String current, int start) {
        if (!hasUniqueCharacters(current)) return;

        result = Math.max(result, current.length());

        for (int i = start; i < arr.size(); i++) {
            dfs(arr, current + arr.get(i), i + 1);
        }
    }

    private boolean hasUniqueCharacters(String s) {
        Set<Character> uniqueCharacters = new HashSet<>();

        for (char character : s.toCharArray()) {
            if (uniqueCharacters.contains(character)) return false;
            uniqueCharacters.add(character);
        }

        return true;
    }
}
```
