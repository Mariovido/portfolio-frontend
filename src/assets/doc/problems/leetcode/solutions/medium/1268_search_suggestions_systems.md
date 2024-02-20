# 1268. Search Suggestions System

## Intuition

The intuition behind this solution is to first sort the array of `products`. Then, for each prefix of the search word, iterate through the sorted `products` array and add the `products` that start with that `prefix` to a list of `suggestions`. Limit the suggestions to three `products` per prefix. Finally, add the list of `suggestions` to the `result` list.

## Approach

1. Sort the array of `products` in lexicographical order.
2. Initialize an empty list to store the `result`.
3. Iterate through each `prefix` of the search word.
4. For each `prefix`, iterate through the sorted `products` array and add products that start with the current `prefix` to a list of `suggestions`. Limit the `suggestions` to three products per prefix.
5. Add the list of `suggestions` to the `result` list.
6. Return the `result` list.

## Complexity

- Time complexity: `O(m * n * log(n))`

  - Sorting the products array takes `O(n * log(n))` time, where `n` is the number of products.
  - Iterating through each character of the search word and finding suggestions takes `O(m * log(n))` time, where m is the length of the search word. Since there are m prefixes and for each prefix, we perform a binary search on the sorted array of products.

- Space complexity: `O(m * k)`, where `m` is the length of the search word and `k` is the maximum number of suggestions per prefix (which is `3` in this case).

## Code

```java
class Solution {
    public List<List<String>> suggestedProducts(String[] products, String searchWord) {
        Arrays.sort(products);

        List<List<String>> result = new ArrayList<>();

        for (int i = 0; i < searchWord.length(); i++) {
            String prefix = searchWord.substring(0, i + 1);
            List<String> suggestions = new ArrayList<>();

            for (String product : products) {
                if (product.startsWith(prefix)) {
                    suggestions.add(product);
                    if (suggestions.size() == 3) break;
                }
            }

            result.add(suggestions);
        }

        return result;
    }
}
```
