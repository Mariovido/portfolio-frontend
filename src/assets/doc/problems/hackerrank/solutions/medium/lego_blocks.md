# Lego Blocks

## Intuition

The problem seems to involve calculating the number of ways to build a wall using lego blocks of various lengths, subject to certain constraints. The approach likely involves dynamic programming to efficiently compute the number of valid combinations.

## Approach

1. Initialize an array `p` to store the number of combinations for each length of the lego block row, up to length `m`. This is done iteratively based on the recurrence relation provided in the problem statement.
2. Use `p` to calculate an array `a`, which represents the total number of combinations for a wall of size `n` and each possible width up to `m`.
3. Calculate the array `g`, which represents the number of "good" combinations for each width. "Good" combinations are those that do not violate certain conditions specified in the problem statement.
4. Return the result, which is the last element of array `g` modulo the divisor.

## Complexity

- Time complexity: `O(m^2)`

  - Constructing the `p` array: `O(m)`
  - Constructing the `a` array: `O(m)`
  - Constructing the `g` array: `O(m^2)`

- Space complexity: `O(m)`
  - Storage for arrays `p`, `a`, and `g`, each of size `O(m)`

## Code

```java
class Result {
    public static int legoBlocks(int n, int m) {
        int divisor = 7 + (int) Math.pow(10,9);

        // combination count of one row of m length
        long[] p = new long[m];
        for (int i = 0; i < m; i++) {
            if (i == 0) p[i] = 1;
            else if (i == 1) p[i] = 2;
            else if (i == 2) p[i] = 4;
            else if (i == 3) p[i] = 8;
            else p[i] = (p[i - 1] + p[i - 2] + p[i - 3] + p[i - 4]) % divisor;
        }

        // all possible (good or bad) combinations count of a n * x (1<=x<=m) wall
        long[] a = new long[m];
        for (int i = 0; i < m; i++) {
            long base = p[i];
            long times = n;
            long res = base;
            while (times > 1) {
                res = (res * base) % divisor;
                times--;
            }
            a[i] = res;
        }

        // good combinations count of a n * x (1<=x<=m) wall
        long[] g = new long[m];
        for (int i = 0; i < m; i++) {
            if (i == 0) g[i] = 1;
            else {
                long pGood = a[i];
                for (int j = 0; j < i; j++) {
                    pGood -= g[j] * a[i - j - 1] % divisor;
                }
                while (pGood < 0) {
                    pGood += divisor;
                }
                g[i] = pGood;
            }
        }
        return (int)(g[m - 1] % divisor);
    }
}
```
