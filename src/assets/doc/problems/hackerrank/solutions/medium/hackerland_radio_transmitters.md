# Hackerland Radio Transmitters

## Intuition

The problem involves placing transmitters on houses along a street, with a certain coverage range. The goal is to minimize the number of transmitters required while covering all the houses. One possible intuition is to start from the leftmost house, place a transmitter at the rightmost house within the coverage range, then move to the next house not covered by the previous transmitter and repeat the process.

## Approach

1. Sort the houses' positions in ascending order.
2. Initialize a variable `result` to count the number of transmitters needed.
3. Iterate over the sorted list of house positions:
   - Place a transmitter at the rightmost house within the coverage range.
   - Move to the next house that is not covered by the current transmitter.
   - Repeat this process until all houses are covered.
4. Return the `result`, which represents the minimum number of transmitters required.

## Complexity

- Time complexity: `O(n * log(n))`

  - Sorting the list of house positions takes `O(n * log(n))` time, where n is the number of houses.
  - The main loop iterates through the sorted list once, which also takes `O(n)` time.

- Space complexity: `O(1)` because the algorithm only uses a constant amount of extra space for variables regardless of the input size.

## Code

```java
class Result {
    public static int hackerlandRadioTransmitters(List<Integer> x, int k) {
        Collections.sort(x);
        int n = x.size();
        int result = 0;

        int i = 0;
        while (i < n) {
            result++;
            int loc = x.get(i) + k;

            while (i < n && x.get(i) <= loc) i++;

            loc = x.get(--i) + k;
            while (i < n && x.get(i) <= loc) i++;
        }

        return result;
    }
}
```
