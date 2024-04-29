# 514. Freedom Trail

## Intuition

The problem appears to involve finding the minimum number of steps to spell out a given word using a rotating ring of characters. Each character in the word can be aligned with any character on the ring, and the goal is to minimize the total number of steps required to align each character of the word with the corresponding character on the ring.

## Approach

1. Convert the `ring` string into a character array.
2. Create an array of lists `p`, where each index represents a character (`a` to `z`), and each list contains the positions of that character in the ring.
3. Implement a recursive function `helper` to find the minimum steps needed to spell out the word, considering the current position on the ring and the characters remaining in the word.
4. Inside the `helper` function, iterate through each possible position of the current character on the ring and recursively calculate the minimum steps required for the remaining characters.
5. Use memoization to optimize repeated calculations and avoid redundant computations.

## Complexity

- Time complexity: `O(n * m)`, where `n` is the length of the `key` string and `m` is the average number of occurrences of each character in the `ring`. This complexity arises from the recursive function, where each call explores all possible positions on the ring for each character in the word.

- Space complexity: `O(n * m)`, where `n` is the length of the `key` string and `m` is the average number of occurrences of each character in the `ring`. This space is required for the memoization table to store intermediate results of the recursive calls.

## Code

```java
class Solution {
    public int findRotateSteps(String ring, String key) {
        char[] r = ring.toCharArray();
        List<Integer>[] p = new List[26];

        for (int i = 0; i < r.length; i++) {
            int c = r[i] - 'a';
            List<Integer> l = p[c];

            if (l == null) p[c] = l = new ArrayList<>();

            l.add(i);
        }

        return helper(0, 0, p, key.toCharArray(), ring, new int[key.length()][r.length]);
    }

    private int helper(int in, int pos, List<Integer>[] p, char[] k, String r, int[][] memo) {
        if (in == k.length) return 0;
        if (memo[in][pos] > 0) return memo[in][pos] - 1;

        int min = Integer.MAX_VALUE;
        for (int i : p[k[in] - 'a']) {
            int m;

            if (i >= pos) m = Math.min(i - pos, pos + r.length() - i);
            else m = Math.min(pos - i, i + r.length() - pos);

            min = Math.min(min, m + helper(in + 1, i, p, k, r, memo));
        }

        return (memo[in][pos] = min + 2) - 1;
    }
}
```
