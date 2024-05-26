# 131. Palindrome Partitioning

## Intuition

The problem is to partition a string such that every substring of the partition is a palindrome. The first thought is to use a backtracking approach because it allows us to explore all possible partitions of the string efficiently and check if each partition is a palindrome.

## Approach

1. **Initialize the result list**: Create an empty list `result` to store the final list of palindrome partitions.
2. **Start the backtracking process**: Call the `backtrack` function with initial parameters: the input string `s`, the starting index `0`, an empty `currentList` to store the current partition, and the `result` list.
3. **Backtrack function**:
   - **Base case**: If the starting index `start` is equal to the length of the string, add a copy of `currentList` to the `result`.
   - **Recursive case**: Iterate over the end index from `start + 1` to the length of the string. For each end index:
     - Check if the substring from `start` to `end` is a palindrome using the `isPalindrome` function.
     - If it is a palindrome, add the substring to `currentList` and recursively call `backtrack` with the updated start index and `currentList`.
     - After the recursive call, remove the last added substring from `currentList` to explore other partitions.
4. **Palindrome check function**: The `isPalindrome` function checks if a substring is a palindrome by comparing characters from the beginning and end moving towards the center.

## Complexity

- Time complexity: `O(n * 2^{n})`. This is because there are `2^{n}` possible substrings, and for each substring, we need to check if it is a palindrome, which takes `O(n)` time in the worst case.

- Space complexity: `O(n)`. This is due to the recursive call stack and the space required for storing the current partition list `currentList`.

## Code

```java
class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();

        backtrack(s, 0, new ArrayList<>(), result);

        return result;
    }

    private void backtrack(String s, int start, List<String> currentList, List<List<String>> result) {
        if (start == s.length()) result.add(new ArrayList<>(currentList));
        else {
            for (int end = start + 1; end <= s.length(); end++) {
                if (isPalindrome(s, start, end)) {
                    currentList.add(s.substring(start, end));
                    backtrack(s, end, currentList, result);
                    currentList.remove(currentList.size() - 1);
                }
            }
        }
    }

    private boolean isPalindrome(String s, int low, int high) {
        high--;

        while (low < high) {
            if (s.charAt(low++) != s.charAt(high--)) return false;
        }

        return true;
    }
}
```
