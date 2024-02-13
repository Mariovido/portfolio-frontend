# Lonely Integer

## Intuition

The problem appears to be finding the integer in a list that occurs only once, while all other integers occur in pairs. The intuition here is to utilize a set to store unique integers and then iterate through the list to find the integer occurring only once.

## Approach

1. Create a HashSet to store unique integers from the input list.
2. Iterate through the input list and use `Collections.frequency()` to count occurrences of each integer.
3. Return the first integer found with a frequency of `1`.

## Complexity

- Time complexity: `O(n^2)`

  - The HashSet initialization takes `O(n)` time.
  - The filter operation iterates through the list, and for each element, it uses `Collections.frequency()`, which itself takes `O(n)` time in the worst case.

- Space complexity: `O(n)`
  - The space complexity is dominated by the `HashSet`, which stores unique integers from the input list. In the worst case, when all integers are unique, it will take `O(n)` space.

## Code

```java
class Result {
    public static int lonelyinteger(List<Integer> a) {
        Set<Integer> uniqueNumbers = new HashSet<>(a);

        return uniqueNumbers.stream()
            .filter(number -> Collections.frequency(a, number) == 1)
            .findAny().orElse(null);
    }
}
```
