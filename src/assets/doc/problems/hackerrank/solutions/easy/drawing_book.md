# Drawing Book

## Intuition

Given the number of total pages `n` in a book and the page number `p` the reader wants to turn to, we can approach this problem by determining the minimum number of page turns required to reach the desired page. Since the book can be flipped from either the beginning or the end, we need to consider both scenarios to minimize the page turns.

## Approach

1. If the total number of pages `n` is even, increment it by `1`, assuming an extra blank page at the end.
2. Calculate the starting page turns required to reach page `p` from the beginning. This is given by `p / 2`.
3. Calculate the ending page turns required to reach page `p` from the end. This is given by `(n - p) / 2`.
4. Return the minimum of the starting and ending page turns calculated in steps `2` and `3`.

## Complexity

- Time complexity: `O(1)`

- Space complexity: `O(1)`

## Code

```java
class Result {
    public static int pageCount(int n, int p) {
        if (n % 2 == 0) n++;

        int start = p / 2;
        int end = (n - p) / 2;

        return Math.min(start, end);
    }
}
```
