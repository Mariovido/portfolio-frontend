# Big Sorting

## Intuition

The problem requires sorting a list of strings in ascending order based on their lengths. If two strings have the same length, they should be sorted lexicographically.

## Approach

We can achieve this by defining a custom comparator. First, we compare strings based on their lengths. If the lengths are different, we sort them based on length. If the lengths are the same, we use the default lexicographical comparison. After defining the comparator, we sort the list of strings using this comparator.

## Complexity

- Time complexity: `O(n * log(n))`, where `n` is the number of strings in the list.

- Space complexity: `O(1)` because we're not using any extra space proportional to the size of the input. We're only manipulating the input list in-place.

## Code

```java
class Result {
    public static List<String> bigSorting(List<String> unsorted) {
        Comparator<String> comparator = Comparator
            .comparingInt(String::length)
            .thenComparing(String::compareTo);
        Collections.sort(unsorted, comparator);
        return unsorted;
    }
}
```
