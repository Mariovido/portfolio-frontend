# Pairs

## Intuition

The problem seems to be asking for the number of pairs in a given list of integers such that the difference between the two numbers in each pair equals a specified value `k`.

## Approach

1. Create a `HashSet` to store the unique numbers from the input list.
2. Iterate through the unique numbers in the `HashSet`.
3. For each unique number, check if the `HashSet` contains the number plus `k`.
4. If it does, increment the count of pairs.
5. Return the total count of pairs.

## Complexity

- Time complexity: `O(n)`

  - Constructing the `HashSet` takes `O(n)` time where `n` is the size of the input list.
  - The iteration through the unique numbers takes `O(n)` time in the worst case.

- Space complexity: `O(n)` since we store the unique numbers in a `HashSet`, which could potentially hold all elements of the input list.

## Code

```java
class Result {
    public static int pairs(int k, List<Integer> arr) {
        int numberOfPairs = 0;
        Set<Integer> uniqueNumbers = new HashSet<>(arr);

        for (int number : uniqueNumbers) {
            if (uniqueNumbers.contains(number + k)) numberOfPairs++;
        }

        return numberOfPairs;
    }
}
```
