# 1442. Count Triplets That Can Form Two Arrays of Equal XOR

## Intuition

The problem requires counting triplets `(i, j, k)` such that the `XOR` of the subarray from `i` to `k` (inclusive) is zero. A triplet `(i, j, k)` where the `XOR` of the elements from `i` to `k` is zero can be found if we recognize that the `XOR` from `i` to `j - 1` is equal to the `XOR` from `j` to `k`. This can be leveraged by iterating through the array and maintaining the `XOR` value to check for such conditions.

## Approach

1. Initialize a counter `count` to zero to keep track of the number of valid triplets.
2. Iterate over each element in the array using an outer loop variable `i`.
3. For each starting index `i`, initialize a variable `xor` to store the cumulative `XOR` from `i` to the current index in the inner loop.
4. Use an inner loop with variable `j` starting from `i + 1` to the end of the array:
   - Update the `xor` value by `XOR`ing it with the current element `arr[j]`.
   - If the `xor` value is zero, it means the subarray from `i` to `j` has a zero `XOR`, and therefore, there are `j - i` valid triplets ending at `j`.
5. Increment the `count` by `j - i` whenever a zero `XOR` is found.
6. Return the `count` after both loops complete.

## Complexity

- Time complexity: `O(n^2)`. The algorithm involves two nested loops, each iterating over the array of length `n`.

- Space complexity: `O(1)` because we are using only a constant amount of extra space.

## Code

```java
class Solution {
    public int countTriplets(int[] arr) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            int xor = arr[i];

            for (int j = i + 1; j < arr.length; j++) {
                xor ^= arr[j];

                if (xor == 0) count += (j - i);
            }
        }

        return count;
    }
}
```
