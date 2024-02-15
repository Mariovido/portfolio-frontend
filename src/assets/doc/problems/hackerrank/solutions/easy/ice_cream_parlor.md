# Ice Cream Parlor

## Intuition

The problem involves finding two different flavors of ice cream that sum up to a given amount `m`. We can use a `HashMap` to store the flavor and its corresponding index. Then, as we iterate through the flavors, we check if the complement of the current flavor (i.e., `m - current_flavor`) exists in the `HashMap`. If it does, we've found the pair, and we return the indices of the flavors.

## Approach

1. Create a `HashMap` to store the flavors and their indices.
2. Iterate through the list of flavors.
3. For each flavor, calculate its `complement` by subtracting it from the target amount `m`.
4. Check if the `complement` exists in the `HashMap`. If it does, return the indices of the current flavor and its `complement`.
5. If the complement doesn't exist, add the current flavor and its index to the `HashMap`.
6. If no valid pair is found, return an empty list.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of flavors in the input list. The algorithm iterates through the list once.

- Space complexity: `O(n)`, where `n` is the number of flavors in the input list. The `HashMap` can store up to `n` entries in the worst case.

## Code

```java
class Result {
    public static List<Integer> icecreamParlor(int m, List<Integer> arr) {
        Map<Integer, Integer> flavorMap = new HashMap<>();

        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < arr.size(); i++) {
            int complement = m - arr.get(i);

            if (flavorMap.containsKey(complement)) {
                result.add(flavorMap.get(complement));
                result.add(i + 1);
                break;
            }

            flavorMap.put(arr.get(i), i + 1);
        }

        return result;
    }
}
```
