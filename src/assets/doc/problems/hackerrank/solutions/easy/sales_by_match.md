# Sales by Match

## Intuition

The problem appears to involve counting pairs of socks from a given list. Initially, we might notice that the presence of a `HashSet` can help us identify unique socks efficiently. We can iterate through these unique socks and count their occurrences in the original list to determine how many pairs each type contributes.

## Approach

1. Create a `HashSet` to store unique sock values from the given list.
2. Initialize a variable `numberOfPairs` to keep track of the total number of pairs.
3. Iterate through the unique sock values in the `HashSet`.
4. For each unique sock value, count its `frequency` in the original list using `Collections.frequency`.
5. Add half of the `frequency` (rounded down) to `numberOfPairs`, as each pair requires two socks.
6. Return `numberOfPairs`.

## Complexity

- Time complexity: `O(n + m)`

  - Constructing the `HashSet`: `O(n)`, where `n` is the number of socks in the input list.
  - Iterating through the unique sock values and counting their frequencies: `O(m)`, where `m` is the number of unique sock values.

- Space complexity: `O(m)`
  - `HashSet` to store unique sock values: `O(m)`, where `m` is the number of unique sock values.
  - `numberOfPairs` variable: Constant space.

## Code

```java
class Result {
    public static int sockMerchant(int n, List<Integer> ar) {
        Set<Integer> uniqueSock = new HashSet<>(ar);

        int numberOfPairs = 0;
        for (int sock : uniqueSock) {
            int frequency = Collections.frequency(ar, sock);

            numberOfPairs += (int) Math.floor(frequency / 2);
        }

        return numberOfPairs;
    }
}
```
