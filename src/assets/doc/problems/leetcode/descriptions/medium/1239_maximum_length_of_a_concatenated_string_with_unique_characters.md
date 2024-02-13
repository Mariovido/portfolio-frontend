# 1239. Maximum Length of a Concatenated String with Unique Characters

## Description

Given an array of strings, this problem involves finding the maximum possible length of a string formed by the concatenation of a subsequence of array elements with unique characters. A subsequence is derived from the array by deleting some or no elements without changing the order of the remaining elements.

## Function

```java
public int maxLength(List<String> arr) {}
```

## Input Format

- The first line: an integer, `n`, representing the size of the array (`1 <= n <= 16`).
- The following `n` lines: strings `arr[i]` (`1 <= arr[i].length <= 26`) containing only lowercase English letters.

## Output Format

- An integer representing the maximum length of the concatenated string.

## Constraints

- `1 <= arr.length <= 16`
- `1 <= arr[i].length <= 26`
- `arr[i]` contains only lowercase English letters.

## Example

```bash
# Sample Input
3
un
iq
ue

# Sample Output
4
```
