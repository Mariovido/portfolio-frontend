# 881. Boats to Save People

## Intuition

The problem requires us to find the minimum number of boats needed to rescue people, where each boat can carry at most two people whose sum of weights is less than or equal to the limit. An intuitive approach would be to sort the people by their weights and then try to pair the heaviest person with the lightest person (if their sum doesn't exceed the limit) to optimize the number of boats needed.

## Approach

1. Sort the array of people by their weights.
2. Initialize two pointers, `left` and `right`, pointing to the start and end of the sorted array respectively.
3. Initialize a variable `boats` to count the number of boats needed.
4. Iterate through the array using a while loop until `left` is less than or equal to `right`:
   - Check if the sum of weights of the person at `left` and `right` pointers is less than or equal to the limit.
     - If yes, increment `left` pointer.
   - Decrement `right` pointer.
   - Increment `boats`.
5. Return the value of `boats`, which represents the minimum number of boats needed to rescue all people.

## Complexity

- Time complexity: `O(n * log(n))` (due to the sorting operation)

- Space complexity: `O(1)` (constant space is used)

## Code

```java
class Solution {
    public int numRescueBoats(int[] people, int limit) {
        Arrays.sort(people);
        int left = 0;
        int right = people.length - 1;
        int boats = 0;

        while (left <= right) {
            if (people[left] + people[right] <= limit) left++;

            right--;
            boats++;
        }

        return boats;
    }
}
```
