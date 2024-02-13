# 1291. Sequential Digits

## Intuition

The problem requires generating all sequential digits between a given range. We need to start with digits from `1` to `9` and iteratively generate sequences by appending the next digit to the current number until it exceeds the upper limit. We can use a nested loop where the outer loop iterates over the possible starting digits, and the inner loop generates sequential numbers starting from that digit.

## Approach

1. Initialize an empty list `result` to store the generated sequential digits.
2. Iterate over the digits from `1` to `9`.
3. For each starting digit, initialize `num` and `nextDigit` to the current digit.
4. While `num` is less than or equal to the upper limit and `nextDigit` is less than `10`:
   - If `num` is within the specified range `[low, high]`, add it to the `result` list.
   - Increment `nextDigit` and update `num` by appending `nextDigit` to it.
5. Sort the `result` list.
6. Return the sorted `result`.

## Complexity

- Time complexity: The outer loop runs `9` times, and the inner loop runs until `num` exceeds the upper limit or `nextDigit` reaches `10`. Therefore, the time complexity is `O(1)` since the number of iterations is constant.

- Space complexity: `O(n)`, where `n` is the number of sequential digits generated within the range. The space required is primarily for storing the result list.

## Code

```java
class Solution {
    public List<Integer> sequentialDigits(int low, int high) {
        List<Integer> result = new ArrayList<>();

        for (int i = 1; i <= 9; i++) {
            int num = i;
            int nextDigit = i;

            while (num <= high && nextDigit < 10) {
                if (num >= low) result.add(num);

                nextDigit++;
                num = num * 10 + nextDigit;
            }
        }

        Collections.sort(result);
        return result;
    }
}
```
