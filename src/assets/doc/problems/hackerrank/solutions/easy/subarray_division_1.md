# Subarray Division 1

## Intuition

The problem seems to be related to counting the number of ways a given pattern of chocolate segments can be chosen such that their sum equals a specified value. This suggests that we might need to iterate through the list of chocolate bar segments and check for each possible contiguous segment of length `m` whether their sum equals the target value `d`.

## Approach

1. Iterate through the list of chocolate bar segments.
2. For each starting index `i` from `0` to `s.size() - m`, create a window of length `m`.
3. Sum up the elements within this window.
4. If the sum equals the target `d`, increment the count of valid combinations.
5. Return the total count of valid combinations.

## Complexity

- Time complexity: `O(n * m)` where `n` is the number of elements in the list `s` and `m` is the length of the segment we are considering.

- Space complexity: `O(1)` as we are using a constant amount of extra space regardless of the size of the input list.

## Code

```java
class Result {
    public static int birthday(List<Integer> s, int d, int m) {
        int numberOfWays = 0;

        for (int i = 0; i <= s.size() - m; i++) {
            int sumAux = 0;
            for (int j = 0; j < m; j++) {
                sumAux += s.get(i+j);
            }

            if (sumAux == d) numberOfWays++;
        }

        return numberOfWays;
    }
}
```
