# Permuting Two Arrays

## Intuition

The intuition behind this problem seems to be sorting the arrays `A` and `B` in ascending and descending order respectively. Then, iterating through both arrays simultaneously and checking if the sum of elements at corresponding indices in `A` and `B` is greater than or equal to the given value `k`.

## Approach

1. Sort array `A` in ascending order and array `B` in descending order using the `Collections.sort()` method.
2. Iterate through both arrays simultaneously using a loop.
3. At each iteration, calculate the `sum` of elements at the current index in both arrays.
4. If the `sum` is less than the given value `k`, return `NO` immediately, as it indicates that it's not possible to satisfy the condition for all pairs.
5. If the loop completes without returning `NO`, return `YES`, indicating that it's possible to form pairs such that the `sum` is greater than or equal to `k` for all pairs.

## Complexity

- Time complexity: `O(n * log(n))`

  - Sorting both arrays takes `O(n * log(n))` time complexity, where `n` is the size of the arrays.
  - The loop iterates through the arrays once, which takes `O(n)` time.

- Space complexity: `O(1)`

## Code

```java
class Result {
    public static String twoArrays(int k, List<Integer> A, List<Integer> B) {
        Collections.sort(A);
        Collections.sort(B, Collections.reverseOrder());

        for (int i = 0; i < A.size(); i++) {
            int sum = A.get(i) + B.get(i);
            if (sum < k) return "NO";
        }

        return "YES";
    }
}
```
