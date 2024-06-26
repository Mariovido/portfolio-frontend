# Counting Sort 1

## Description

Given a list of integers, this problem involves implementing counting sort, a non-comparison sorting algorithm, to count the frequency of each value. The frequency array is returned, and it always has `100` elements, representing the range of possible values (`0` to `99`).

## Function

```java
public static List<Integer> countingSort(List<Integer> arr) {}
```

## Input Format

- The first line: an integer, `n`, the number of items in `arr` &rarr; `100 <= n <= 10^6`.
- Each of the next `n` lines contains an integer `arr[i]` where `0 <= i < n` &rarr; `0 <= arr[i] < 100`.

## Output Format

- An array of integers, `int[100]`, representing the frequency of each value.

## Constraints

- `100 <= n <= 10^6`
- `0 <= arr[i] < 100`

## Example

```bash
# Sample Input
100
63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33

# Sample Output
0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2
```
