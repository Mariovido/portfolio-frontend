# 1268. Search Suggestions System

## Description

Given an array of strings `products` and a string `searchWord`, this problem involves designing a system that suggests at most three product names from `products` after each character of `searchWord` is typed. The suggested products should have a common prefix with `searchWord`. If there are more than three products with a common prefix, the system returns the three lexicographically minimum products.

## Function

```java
public List<List<String>> suggestedProducts(String[] products, String searchWord) {}
```

## Input Format

- An array of strings `products`, representing the list of available products &rarr; `1 <= products.length <= 1000`.
- A string `searchWord`, representing the typed search word &rarr; `1 <= searchWord.length <= 1000`.

## Output Format

- A list of lists of strings, representing the suggested products after each character of `searchWord` is typed.

## Constraints

- `1 <= products[i].length <= 3000`
- `1 <= sum(products[i].length) <= 2 * 10^4`
- All strings in `products` are unique.
- `products[i]` consists of lowercase English letters.
- `searchWord` consists of lowercase English letters.

## Example

```bash
# Sample Input
String[] products1 = {"mobile", "mouse", "moneypot", "monitor", "mousepad"};
String searchWord1 = "mouse";

# Sample Output
[["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
```

> **NOTE**: The output is the suggested products sorted lexicographically. If multiple products have the same prefix, the lexicographically minimum ones are suggested.
