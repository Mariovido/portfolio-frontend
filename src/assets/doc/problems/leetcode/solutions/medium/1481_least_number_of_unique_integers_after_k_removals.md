# 1481. Least Number of Unique Integers after K Removals

## Intuition

The problem requires finding the least number of unique integers that need to be removed from the array such that the frequency of each remaining integer is less than or equal to `k`. One possible intuition is to first count the frequency of each integer in the array. Then, sort the frequencies and start removing integers with the lowest frequencies until the remaining frequencies become greater than `k`.

## Approach

1. Create a `HashMap` to store the frequency of each integer in the input array.
2. Iterate through the array and update the frequency map.
3. Convert the frequency map to a list of map entries for easier sorting.
4. Sort the list of map entries based on the frequencies.
5. Iterate through the sorted list, removing integers with the lowest frequencies until the remaining frequencies become greater than `k`.
6. Return the size of the frequency map, which represents the number of unique integers remaining.

## Complexity

- Time complexity: `O(n * log(n))`

  - Counting frequencies: `O(n)`, where `n` is the size of the input array.
  - Sorting the list of map entries: `O(n * log(n))`, where `n` is the number of unique integers.
  - Removing integers: `O(n)`, where `n` is the number of unique integers.

- Space complexity: `O(n)` to store the frequency map and the list of map entries.

## Code

```java
class Solution {
    public int findLeastNumOfUniqueInts(int[] arr, int k) {
        Map<Integer, Integer> freqs = new HashMap<>();

        for (int num : arr) {
            freqs.put(num, freqs.getOrDefault(num, 0) + 1);
        }

        List<Map.Entry<Integer, Integer>> elements = new ArrayList<>(freqs.entrySet());
        elements.sort((a, b) -> a.getValue() - b.getValue());

        for (Map.Entry<Integer, Integer> entry : elements) {
            if (entry.getValue() <= k) {
                k -= entry.getValue();
                freqs.remove(entry.getKey());
            } else break;
        }

        return freqs.size();
    }
}
```
