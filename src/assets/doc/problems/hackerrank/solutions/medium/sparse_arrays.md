# Sparse Arrays

## Intuition

My initial thoughts on solving this problem involve iterating through each query string and counting its frequency in the list of strings. We can then store these frequencies in a list and return it as the final result.

## Approach

- Iterate through each query string.
- Count the `frequency` of the current `query` string in the list of strings using `Collections.frequency`.
- Add the `frequency` to the final results list.
- Repeat steps `1-3` for all query strings.
- Return the final results list.

## Complexity

- Time complexity: `O(n * m)`. In the worst case scenario, for each query string, we iterate through the entire list of strings to count its frequency, where `n` be the length of the list of strings, and, `m` be the length of the list of queries.

- Space complexity: `O(m)` because we store the frequencies of each query string in the final results list, which has a size equal to the number of query strings.

## Code

```java
class Result {
    public static List<Integer> matchingStrings(List<String> strings, List<String> queries) {
        List<Integer> finalResults = new ArrayList<>();

        queries.forEach(query -> {
            int frequency = Collections.frequency(strings, query);
            finalResults.add(frequency);
        });

        return finalResults;
    }
}
```
