# Lily's Homework

## Intuition

The problem requires finding the minimum number of swaps needed to sort an array either in ascending or descending order. Since we need to find the minimum swaps for both ascending and descending order, we will find the minimum swaps for both cases and return the minimum of the two.

## Approach

1. Create a sorted version of the input array.
2. Find the minimum swaps needed to sort the array in ascending order by comparing the input array with the sorted array.
3. Reverse the sorted array.
4. Find the minimum swaps needed to sort the array in descending order by comparing the input array with the reversed sorted array.
5. Return the minimum swaps between ascending and descending.

## Complexity

- Time complexity: `O(n * log(n) + n)`, which simplifies to `O(n * log(n))`

  - Sorting the array takes `O(n * log(n))` time.
  - Finding the minimum swaps involves iterating through the array once, which takes `O(n)` time.

- Space complexity: `O(n)`
  - Additional space is used to store the sorted array, temporary array, and a hashmap, each with a size of `n`.

## Code

```java
class Result {
    public static int lilysHomework(List<Integer> arr) {
        List<Integer> sortedArr = new ArrayList<>(arr);
        Collections.sort(sortedArr);

        int ascendingSwaps = minSwaps(arr, sortedArr);

        Collections.reverse(sortedArr);

        int descendingSwaps = minSwaps(arr, sortedArr);

        return Math.min(ascendingSwaps, descendingSwaps);
    }

    private static int minSwaps(List<Integer> arr, List<Integer> sortedArr) {
        List<Integer> tempArr = new ArrayList<>(arr);
        HashMap<Integer, Integer> indexMap = new HashMap<>();

        for (int i = 0; i < tempArr.size(); i++) {
            indexMap.put(tempArr.get(i), i);
        }

        int swaps = 0;
        for (int i = 0; i < tempArr.size(); i++) {
            if (!tempArr.get(i).equals(sortedArr.get(i))) {
                int originalValue = tempArr.get(i);
                int targetIndex = indexMap.get(sortedArr.get(i));

                Collections.swap(tempArr, i, targetIndex);

                indexMap.put(originalValue, targetIndex);

                swaps++;
            }
        }

        return swaps;
    }
}
```
