# Between Two Sets

## Intuition

The problem involves finding the numbers that are factors of all the integers in one list and are also divisible by all the integers in another list. The intuition is to iterate through a range of numbers and check if each number satisfies both conditions.

## Approach

1. Find the minimum and maximum values in the input lists, `a` and `b`, respectively.
2. Iterate through a range of numbers from `1` to `100` (inclusive).
3. For each number in the range, check if it is a factor of all integers in list `a` and if it is divisible by all integers in list `b`.
4. Increment a counter for each number that satisfies both conditions.
5. Return the counter as the result.

## Complexity

- Time complexity: `O(n + m + (LCM − GCD))`

  - Finding the LCM: `O(n)`, where n is the size of array `a`.
  - Finding the GCD: `O(m)`, where m is the size of array `b`.
  - Looping from the LCM to the GCD: `O(LCM−GCD)`. Since we're iterating over a range of numbers between two values, it's proportional to the difference between the two values.

- Space complexity: `O(1)` because we are not using any additional data structures that grow with input size.

## Code

```java
class Result {
    public static int getTotalX(List<Integer> a, List<Integer> b) {
        int first = a.get(a.size() - 1);
        int last = b.get(0);

        int result = 0;
        if (first <= last) {
            for (int i = 1; i <= 100; i++) {
                if (isFactorOfArray(i, a) && isFactorForArray(i, b)) {
                    result++;
                }
            }
        }

        return result;
    }

    private static boolean isFactorOfArray(int number, List<Integer> array) {
        for (int value : array) {
            // Different check
            if (number % value != 0) {
                return false;
            }
        }
        return true;
    }

    private static boolean isFactorForArray(int number, List<Integer> array) {
        for (int value : array) {
            // Different check
            if (value % number != 0) {
                return false;
            }
        }
        return true;
    }
}
```
